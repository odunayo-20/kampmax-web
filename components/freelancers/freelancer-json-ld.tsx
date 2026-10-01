import { siteConfig } from "@/config/site"
import type { Freelancer } from "@/types/freelancer"

type FreelancerJsonLdProps = {
  freelancer: Freelancer
}

/** Person markup for a freelancer profile. */
export function FreelancerJsonLd({ freelancer }: FreelancerJsonLdProps) {
  const url = `${siteConfig.url}/freelancers/${freelancer.slug}`

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: freelancer.name,
    description: freelancer.bio,
    jobTitle: freelancer.primarySkill,
    url,
    ...(freelancer.avatar ? { image: `${siteConfig.url}${freelancer.avatar}` } : {}),
    ...(freelancer.skills.length ? { knowsAbout: freelancer.skills } : {}),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd),
      }}
    />
  )
}
