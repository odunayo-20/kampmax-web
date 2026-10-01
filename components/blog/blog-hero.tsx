import { Display, Eyebrow, Lead } from "@/components/ui/typography"

function BlogHero() {
  return (
    <div className="flex flex-col items-center gap-4 py-16 text-center sm:py-20 lg:py-24">
      <Eyebrow>Kampmax Insights</Eyebrow>
      <Display className="max-w-3xl">
        Ideas, opportunities, and insights for campus life.
      </Display>
      <Lead className="max-w-2xl">
        Explore perspectives on student entrepreneurship, emerging digital skills,
        local commerce, and navigating opportunity across university communities.
      </Lead>
    </div>
  )
}

export { BlogHero }
