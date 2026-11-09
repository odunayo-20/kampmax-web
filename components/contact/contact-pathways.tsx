import { contactPathways } from "@/lib/contact"
import { SectionHeading } from "@/components/layout/section-heading"
import { Card, CardContent } from "@/components/ui/card"

function ContactPathways() {
  return (
    <div className="flex flex-col gap-10">
      <SectionHeading
        eyebrow="Contact Channels"
        title="Find the right pathway for your inquiry"
        description="Choose the pathway that best describes your needs so we can direct your message to the appropriate team."
      />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {contactPathways.map((pathway) => (
          <Card
            key={pathway.id}
            className="flex h-full flex-col rounded-2xl border-border/80 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary-950/10"
          >
            <CardContent className="flex flex-1 flex-col gap-3 p-5 sm:p-6">
              <span className="flex size-10 items-center justify-center rounded-xl bg-linear-to-br from-primary-600 to-primary-800 text-white">
                <pathway.icon className="size-5" aria-hidden="true" />
              </span>

              <div className="flex flex-col gap-1">
                <h3 className="font-heading text-base font-semibold text-foreground">
                  {pathway.title}
                </h3>
                <p className="text-xs leading-relaxed text-muted-foreground sm:text-sm">
                  {pathway.description}
                </p>
              </div>

              <div className="mt-auto border-t border-border/60 pt-3">
                {pathway.configuredEmail ? (
                  <a
                    href={`mailto:${pathway.configuredEmail}`}
                    className="text-xs font-medium text-primary hover:underline"
                  >
                    {pathway.configuredEmail}
                  </a>
                ) : (
                  <span className="text-2xs text-muted-foreground">
                    {pathway.guidance}
                  </span>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

export { ContactPathways }
