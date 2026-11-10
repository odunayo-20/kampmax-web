import { Eyebrow, H2, Lead } from "@/components/ui/typography"

function WhatIsKampmax() {
  return (
    <div className="grid gap-6 md:grid-cols-2 md:items-center md:gap-12 lg:gap-16">
      <div className="flex flex-col gap-3">
        <Eyebrow>What is Kampmax</Eyebrow>
        <H2>One ecosystem for everything happening around your campus.</H2>
      </div>
      <Lead>
        Kampmax brings the marketplace, services, jobs, freelancers, and events
        near you into one place, instead of scattered across group chats,
        flyers, and apps that weren&apos;t built for campus life.
      </Lead>
    </div>
  )
}

export { WhatIsKampmax }
