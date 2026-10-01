import { Display, Eyebrow, Lead } from "@/components/ui/typography"

function ContactHero() {
  return (
    <div className="flex flex-col items-center gap-4 py-16 text-center sm:py-20 lg:py-24">
      <Eyebrow>Contact & Inquiries</Eyebrow>
      <Display className="max-w-3xl">
        Have a question or want to work with Kampmax?
      </Display>
      <Lead className="max-w-2xl">
        Whether you are a student exploring the platform, a local business or
        artisan wanting to reach campus audiences, an organization seeking a
        partnership, or simply need help, we are here to assist.
      </Lead>
    </div>
  )
}

export { ContactHero }
