import { env } from "@/config/env"

/**
 * Official social profiles, set by env var. Empty ones are not shown anywhere
 * (footer, contact page, structured data) so nothing links to a made-up page.
 */
const socialProfiles = {
  instagram: process.env.NEXT_PUBLIC_SOCIAL_INSTAGRAM ?? "",
  twitter: process.env.NEXT_PUBLIC_SOCIAL_TWITTER ?? "",
  linkedin: process.env.NEXT_PUBLIC_SOCIAL_LINKEDIN ?? "",
  facebook: process.env.NEXT_PUBLIC_SOCIAL_FACEBOOK ?? "",
  tiktok: process.env.NEXT_PUBLIC_SOCIAL_TIKTOK ?? "",
  youtube: process.env.NEXT_PUBLIC_SOCIAL_YOUTUBE ?? "",
}

const socialLabels: Record<keyof typeof socialProfiles, string> = {
  instagram: "Instagram",
  twitter: "X (Twitter)",
  linkedin: "LinkedIn",
  facebook: "Facebook",
  tiktok: "TikTok",
  youtube: "YouTube",
}

export const siteConfig = {
  name: "Kampmax",
  tagline: "The campus ecosystem, connected.",
  description:
    "Kampmax connects students, businesses, freelancers, and organizers on one campus-focused platform to discover marketplace listings, services, jobs, and events.",
  url: env.siteUrl,
  appUrl: env.appUrl,
  /** Where "Join Kampmax" / "Get Started" CTAs send users, in kampmax-app. */
  registerUrl: `${env.appUrl}/register`,
  /** Where "Log in" sends users, in kampmax-app. */
  loginUrl: `${env.appUrl}/login`,
  links: socialProfiles,
  /** Only the profiles that are actually set, labelled for display. */
  socialLinks: (Object.keys(socialProfiles) as (keyof typeof socialProfiles)[])
    .filter((key) => socialProfiles[key])
    .map((key) => ({ name: socialLabels[key], href: socialProfiles[key] })),
} as const
