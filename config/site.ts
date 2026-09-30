import { env } from "@/config/env"

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
  links: {
    twitter: "",
    instagram: "",
    linkedin: "",
  },
} as const
