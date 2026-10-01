import Link from "next/link"
import { ArrowRight, Store } from "lucide-react"

import { buttonVariants } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

function ContactBusinessCta() {
  return (
    <Card className="border-border/80 bg-linear-to-br from-card via-card to-primary/5">
      <CardContent className="flex flex-col gap-4 p-6 sm:p-8">
        <div className="flex items-center gap-2">
          <span className="flex size-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
            <Store className="size-4" aria-hidden="true" />
          </span>
          <span className="text-2xs font-semibold uppercase tracking-wider text-muted-foreground">
            For Merchants & Providers
          </span>
        </div>

        <div className="flex flex-col gap-1.5">
          <h3 className="font-heading text-lg font-semibold text-foreground">
            Looking to bring your business closer to campus communities?
          </h3>
          <p className="text-xs leading-relaxed text-muted-foreground sm:text-sm">
            Discover how campus vendors, local service providers, freelancers,
            and employers use Kampmax to establish a verified presence and reach
            active student audiences.
          </p>
        </div>

        <div>
          <Link
            href="/for-businesses"
            className={buttonVariants({
              variant: "outline",
              size: "sm",
              className: "gap-1.5",
            })}
          >
            <span>Explore For Businesses</span>
            <ArrowRight className="size-3.5" aria-hidden="true" />
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}

export { ContactBusinessCta }
