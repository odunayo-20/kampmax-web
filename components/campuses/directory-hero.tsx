import { Eyebrow, H1, Lead } from "@/components/ui/typography"

function DirectoryHero() {
  return (
    <div className="flex flex-col gap-4 py-16 sm:py-20 lg:py-24">
      <Eyebrow>Campus Network</Eyebrow>
      <H1>Find Kampmax at your campus.</H1>
      <Lead className="max-w-2xl">
        Kampmax is organized around individual campus communities. Explore
        the campuses currently configured below, or pick yours to see what
        Kampmax looks like there.
      </Lead>
    </div>
  )
}

export { DirectoryHero }
