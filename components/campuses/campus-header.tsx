import Link from "next/link"
import { ArrowRight, Compass, MapPin, Store, Users } from "lucide-react"

import { PageHero, heroActionClass } from "@/components/shared/page-hero"
import { siteConfig } from "@/config/site"
import type { Campus } from "@/types/campus"

/** The campus at a glance, beside the hero text. Only facts the campus has. */
function CampusIdentityCard({ campus }: { campus: Campus }) {
  const facts = [
    campus.location ? { icon: MapPin, label: "Location", value: campus.location } : null,
    campus.address ? { icon: MapPin, label: "Address", value: campus.address } : null,
    campus.memberCount
      ? {
          icon: Users,
          label: "Community",
          value: `${campus.memberCount.toLocaleString("en-US")} ${
            campus.memberCount === 1 ? "member" : "members"
          }`,
        }
      : null,
  ].filter((fact): fact is NonNullable<typeof fact> => fact !== null)

  return (
    <div className="relative mx-auto w-full max-w-md">
      <div
        aria-hidden="true"
        className="absolute inset-6 -z-10 rounded-full bg-primary-500/30 blur-3xl"
      />
      <div className="rotate-[1.5deg] animate-float rounded-2xl bg-white p-6 text-neutral-900 shadow-2xl shadow-primary-950/40 ring-1 ring-white/30">
        <div className="flex items-center gap-4">
          <span
            aria-hidden="true"
            className="flex size-16 shrink-0 items-center justify-center rounded-2xl bg-linear-to-br from-primary-600 to-primary-800 px-1 text-xs font-extrabold tracking-tight text-white"
          >
            {campus.shortName.slice(0, 6)}
          </span>
          <div className="flex min-w-0 flex-col">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-primary-600">
              Campus community
            </span>
            <p className="font-heading text-lg font-bold leading-snug">{campus.name}</p>
          </div>
        </div>

        {facts.length > 0 ? (
          <ul className="mt-5 flex flex-col gap-3 border-t border-neutral-100 pt-4">
            {facts.map((fact) => (
              <li key={fact.label} className="flex items-start gap-3 text-sm">
                <fact.icon className="mt-0.5 size-4 shrink-0 text-primary-600" aria-hidden="true" />
                <span className="flex flex-col">
                  <span className="text-xs text-neutral-500">{fact.label}</span>
                  <span className="font-medium">{fact.value}</span>
                </span>
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </div>
  )
}

function CampusHeader({ campus }: { campus: Campus }) {
  return (
    <PageHero
      eyebrow={
        <>
          <Link href="/campuses" className="transition-colors hover:text-white">
            Campuses
          </Link>
          <span aria-hidden="true">›</span>
          {campus.shortName}
        </>
      }
      title={campus.name}
      description={
        campus.description ??
        `Discover what's happening around ${campus.name}: products, services, talent, jobs and events, all organized around this campus.`
      }
      actions={
        <>
          <Link href={siteConfig.registerUrl} className={heroActionClass("primary")}>
            Join Kampmax
            <ArrowRight />
          </Link>
          <Link href="#discover" className={heroActionClass("ghost")}>
            Explore {campus.shortName}
          </Link>
        </>
      }
      points={[
        { icon: Store, label: "Products, jobs and events" },
        { icon: Compass, label: "Browse without an account" },
      ]}
    >
      <CampusIdentityCard campus={campus} />
    </PageHero>
  )
}

export { CampusHeader }
