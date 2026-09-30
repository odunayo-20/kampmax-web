import { studentActivities } from "@/app/_data/how-it-works"
import { Eyebrow, H2, Lead } from "@/components/ui/typography"

function ForStudents() {
  return (
    <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
      <div className="flex flex-col gap-4 lg:order-2">
        <Eyebrow>For Students &amp; Campus Communities</Eyebrow>
        <H2>Your campus, without the guesswork.</H2>
        <Lead>
          Kampmax is built around what students actually need day to day.
          Not everything is available everywhere yet, but it&apos;s all
          organized in one place as it grows.
        </Lead>
      </div>

      <ul className="flex flex-col gap-4 lg:order-1">
        {studentActivities.map((activity) => (
          <li key={activity.text} className="flex items-center gap-3">
            <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-muted text-foreground">
              <activity.icon className="size-4" aria-hidden="true" />
            </span>
            <span className="text-sm font-medium text-foreground">
              {activity.text}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export { ForStudents }
