import { ApiError, apiFetch, resolveMediaUrl } from "@/lib/api"
import type { Campus } from "@/types/campus"

/** Backend shapes (`GET /campuses`). Only the fields this site reads. */
type ApiCampus = {
  name: string
  slug: string
  state: string
  city: string
  description?: string | null
  coverImage: string | null
  address?: string | null
  latitude: number | null
  longitude: number | null
  memberCount: number
}

type ApiPage<T> = { items: T[] }

/**
 * The API has no abbreviation field. Campus slugs are the abbreviations in
 * lower case ("unilag", "oau"), so a single-word slug is shown upper-cased;
 * anything longer falls back to the full name.
 */
function toShortName(slug: string, name: string): string {
  return /^[a-z0-9]{2,12}$/.test(slug) ? slug.toUpperCase() : name
}

function toCampus(item: ApiCampus): Campus {
  const hasPosition =
    typeof item.latitude === "number" && typeof item.longitude === "number"

  return {
    slug: item.slug,
    name: item.name,
    shortName: toShortName(item.slug, item.name),
    location: [item.city, item.state].filter(Boolean).join(", ") || undefined,
    description: item.description ?? undefined,
    image: resolveMediaUrl(item.coverImage),
    enabled: true,
    address: item.address ?? undefined,
    ...(hasPosition
      ? { latitude: item.latitude as number, longitude: item.longitude as number }
      : {}),
    memberCount: item.memberCount,
  }
}

/** Active campuses, as returned by the API (the directory is well under one page). */
export async function getCampuses(): Promise<Campus[]> {
  const { items } = await apiFetch<ApiPage<ApiCampus>>("/campuses", {
    query: { status: "ACTIVE", limit: 100 },
  })
  return items.map(toCampus)
}

/** A single active campus, or `null` when it does not exist. */
export async function getCampus(slug: string): Promise<Campus | null> {
  try {
    const item = await apiFetch<ApiCampus & { status: string }>(
      `/campuses/${encodeURIComponent(slug)}`
    )
    return item.status === "ACTIVE" ? toCampus(item) : null
  } catch (error) {
    if (error instanceof ApiError && error.status === 404) return null
    throw error
  }
}
