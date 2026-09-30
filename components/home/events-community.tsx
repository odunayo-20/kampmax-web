import Link from "next/link"
import { Calendar } from "lucide-react"

import { buttonVariants } from "@/components/ui/button"
import { Eyebrow, H2, Lead } from "@/components/ui/typography"

function EventsCommunity() {
  return (
    <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
      <div className="flex flex-col gap-4">
        <Eyebrow>Events &amp; community</Eyebrow>
        <H2>Discover what&apos;s happening on campus.</H2>
        <Lead>
          From campus fairs to student meetups, Kampmax surfaces the events
          and activities worth showing up for — organized by the people
          running them.
        </Lead>
        <div>
          <Link
            href="/events"
            className={buttonVariants({ variant: "default" })}
          >
            Browse Events
          </Link>
        </div>
      </div>

      <div
        aria-hidden="true"
        className="flex h-48 items-center justify-center rounded-lg bg-muted text-muted-foreground lg:h-full"
      >
        <Calendar className="size-10" />
      </div>
    </div>
  )
}

export { EventsCommunity }
