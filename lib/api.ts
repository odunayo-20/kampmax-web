import { env } from "@/config/env"

/** How long server-rendered pages reuse an API response, in seconds. */
export const API_REVALIDATE_SECONDS = 300

const REQUEST_TIMEOUT_MS = 8000

/** Shape every successful backend response is wrapped in. */
type ApiEnvelope<T> = {
  success: boolean
  statusCode: number
  message: string | null
  data: T
}

export class ApiError extends Error {
  readonly status: number

  constructor(status: number, message: string) {
    super(message)
    this.name = "ApiError"
    this.status = status
  }
}

type QueryValue = string | number | boolean | null | undefined

type ApiFetchOptions = {
  query?: Record<string, QueryValue>
  /** Seconds before the cached response is refreshed. Defaults to five minutes. */
  revalidate?: number
}

function buildUrl(path: string, query?: Record<string, QueryValue>): string {
  const url = new URL(`${env.apiUrl.replace(/\/+$/, "")}${path}`)
  for (const [key, value] of Object.entries(query ?? {})) {
    if (value !== undefined && value !== null && value !== "") {
      url.searchParams.set(key, String(value))
    }
  }
  return url.toString()
}

async function readErrorMessage(response: Response): Promise<string> {
  try {
    const body = (await response.json()) as { message?: string | string[] }
    const message = Array.isArray(body.message)
      ? body.message.join(", ")
      : body.message
    if (message) return message
  } catch {
    // Body was not JSON; fall through to the status text.
  }
  return response.statusText || `Request failed with status ${response.status}`
}

/**
 * Server-side GET against the Kampmax API. Returns the unwrapped `data`
 * payload and throws `ApiError` for non-2xx responses.
 *
 * Failures are deliberately thrown, not swallowed: when an ISR refresh fails,
 * Next.js keeps serving the last good page, whereas a rendered error state
 * would replace it.
 */
export async function apiFetch<T>(
  path: string,
  { query, revalidate = API_REVALIDATE_SECONDS }: ApiFetchOptions = {}
): Promise<T> {
  const response = await fetch(buildUrl(path, query), {
    headers: { Accept: "application/json" },
    next: { revalidate },
    signal: AbortSignal.timeout(REQUEST_TIMEOUT_MS),
  })

  if (!response.ok) {
    throw new ApiError(response.status, await readErrorMessage(response))
  }

  const body = (await response.json()) as ApiEnvelope<T>
  return body.data
}

/** True while `next build` is prerendering pages. */
export function isBuildPhase(): boolean {
  return process.env.NEXT_PHASE === "phase-production-build"
}

/**
 * Runs a loader, returning `null` instead of failing the build when the API is
 * unreachable. Outside the build the error is rethrown so ISR keeps the last
 * good page (and a cold request shows the error boundary rather than an empty
 * page that would be cached).
 */
export async function orNullDuringBuild<T>(
  load: () => Promise<T>
): Promise<T | null> {
  try {
    return await load()
  } catch (error) {
    if (isBuildPhase()) {
      console.warn(
        `[api] Unreachable during build, rendering the unavailable state: ${
          error instanceof Error ? error.message : String(error)
        }`
      )
      return null
    }
    throw error
  }
}

/** Resolves a media path from the API (absolute URL or `/media/...`) to a full URL. */
export function resolveMediaUrl(url: string | null | undefined): string | undefined {
  if (!url) return undefined
  if (/^https?:\/\//i.test(url)) return url
  return new URL(url, env.apiUrl).toString()
}
