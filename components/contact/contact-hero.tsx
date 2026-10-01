import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { buttonVariants } from "@/components/ui/button"
import { Display, Eyebrow, Lead } from "@/components/ui/typography"
import { cn } from "@/lib/utils"

function ContactHero() {
  return (
    <div className="flex flex-col items-center gap-6 py-16 text-center sm:py-20 lg:py-24">
      <Eyebrow>Contact & Inquiries</Eyebrow>
      <Display className="max-w-3xl">
        Have a question or want to work with Kampmax?
      </Display>
      <Lead className="max-w-2xl sm:text-xl/relaxed">
        Whether you are a student exploring the platform, a local business or
        artisan wanting to reach campus audiences, an organization seeking a
        partnership, or simply need help, we are here to assist.
      </Lead>
      <Link
        href="#inquiry-form"
        className={cn(
          buttonVariants({ variant: "default", size: "lg" }),
          "h-11 rounded-lg px-6 text-sm font-semibold shadow-sm shadow-primary-600/20"
        )}
      >
        Send a Message
        <ArrowRight />
      </Link>
    </div>
  )
}

export { ContactHero }
