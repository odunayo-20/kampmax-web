import { cn } from "@/lib/utils"

const months = [
  "JAN",
  "FEB",
  "MAR",
  "APR",
  "MAY",
  "JUN",
  "JUL",
  "AUG",
  "SEP",
  "OCT",
  "NOV",
  "DEC",
]

function parseDateParts(dateString: string) {
  // Expected format: YYYY-MM-DD
  const parts = dateString.split("-")
  if (parts.length === 3) {
    const monthIndex = parseInt(parts[1]!, 10) - 1
    const day = parseInt(parts[2]!, 10)
    return {
      month: months[monthIndex] ?? "DATE",
      day: isNaN(day) ? "01" : day.toString().padStart(2, "0"),
    }
  }

  return { month: "DATE", day: "01" }
}

function EventDateBadge({
  date,
  isPast = false,
  className,
}: {
  date: string
  isPast?: boolean
  className?: string
}) {
  const { month, day } = parseDateParts(date)

  return (
    <div
      aria-label={`Event date: ${month} ${day}`}
      className={cn(
        "flex shrink-0 select-none flex-col items-center justify-center rounded-xl border p-2 text-center shadow-2xs",
        isPast
          ? "border-border/60 bg-muted/40 text-muted-foreground"
          : "border-border bg-card text-foreground group-hover:border-primary/40 transition-colors",
        className
      )}
    >
      <span
        className={cn(
          "text-2xs font-bold uppercase tracking-wider",
          isPast ? "text-muted-foreground" : "text-primary"
        )}
      >
        {month}
      </span>
      <span className="font-heading text-lg font-bold leading-none sm:text-xl">
        {day}
      </span>
    </div>
  )
}

export { EventDateBadge }
