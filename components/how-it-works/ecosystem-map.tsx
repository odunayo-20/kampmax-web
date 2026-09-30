import { ecosystemNodes } from "@/app/_data/how-it-works"
import { Eyebrow, H2, Lead } from "@/components/ui/typography"

function EcosystemMap() {
  return (
    <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
      <div className="flex flex-col gap-4">
        <Eyebrow>The Kampmax Ecosystem</Eyebrow>
        <H2>These aren&apos;t separate apps. They&apos;re one ecosystem.</H2>
        <Lead>
          People, products, services, jobs, events, and businesses all live
          in the same place — so discovering one naturally leads you to
          another.
        </Lead>
      </div>

      <div
        aria-hidden="true"
        className="flex flex-col items-center gap-4 sm:max-w-sm sm:justify-self-end"
      >
        <span className="rounded-full bg-primary px-4 py-1.5 text-sm font-semibold text-primary-foreground">
          Kampmax
        </span>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {ecosystemNodes.map((node) => (
            <div
              key={node.title}
              className="flex flex-col items-center gap-2 rounded-lg border border-border bg-card px-3 py-4 text-center ring-1 ring-accent-500/15"
            >
              <node.icon className="size-4 text-foreground" />
              <span className="text-xs font-medium text-foreground">
                {node.title}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export { EcosystemMap }
