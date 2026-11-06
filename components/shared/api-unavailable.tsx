import { CloudOff } from "lucide-react"

type ApiUnavailableProps = {
  /** What could not be loaded, e.g. "articles". */
  subject: string
}

/**
 * Shown when a page was prerendered while the Kampmax API could not be
 * reached. It is replaced automatically at the next refresh.
 */
function ApiUnavailable({ subject }: ApiUnavailableProps) {
  return (
    <div
      role="status"
      className="flex flex-col items-center gap-4 rounded-2xl border border-dashed border-border py-16 text-center"
    >
      <div className="flex size-12 items-center justify-center rounded-full bg-muted text-muted-foreground">
        <CloudOff className="size-6" aria-hidden="true" />
      </div>
      <div className="flex flex-col gap-1">
        <h3 className="font-heading text-base font-semibold text-foreground">
          We couldn&apos;t load {subject} right now
        </h3>
        <p className="max-w-sm text-xs text-muted-foreground">
          This is a temporary problem on our side. Please check back in a few
          minutes.
        </p>
      </div>
    </div>
  )
}

export { ApiUnavailable }
