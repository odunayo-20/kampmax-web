import { ImageResponse } from "next/og"

import { siteConfig } from "@/config/site"

/** 1.91:1, the size WhatsApp, Facebook, LinkedIn and X all render without cropping. */
export const shareImageSize = { width: 1200, height: 630 } as const

export const shareImageAlt = `${siteConfig.name}: your campus, all in one place`

const topics = ["Marketplace", "Services", "Jobs", "Freelancers", "Events"]

/**
 * The link-preview card for the whole site: brand, promise, and what is on
 * offer. Drawn with plain flexbox because the image renderer supports only a
 * subset of CSS.
 */
export function renderShareImage() {
  const host = siteConfig.url.replace(/^https?:\/\//, "").replace(/\/$/, "")

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 72px",
          color: "#ffffff",
          background:
            "linear-gradient(135deg, #1769E0 0%, #164A8A 55%, #071A33 100%)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 22,
              height: 22,
              borderRadius: 999,
              background: "#FBBF24",
            }}
          />
          <div style={{ fontSize: 40, fontWeight: 800, letterSpacing: -1 }}>
            {siteConfig.name}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: 88,
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: -2,
            }}
          >
            <div>Your campus,</div>
            <div style={{ color: "#FBBF24" }}>all in one place.</div>
          </div>

          <div style={{ display: "flex", gap: 12 }}>
            {topics.map((topic) => (
              <div
                key={topic}
                style={{
                  display: "flex",
                  padding: "10px 22px",
                  borderRadius: 999,
                  fontSize: 26,
                  fontWeight: 600,
                  background: "rgba(255,255,255,0.14)",
                  border: "1px solid rgba(255,255,255,0.28)",
                }}
              >
                {topic}
              </div>
            ))}
          </div>
        </div>

        <div style={{ display: "flex", fontSize: 28, color: "#DCEBFF" }}>
          {host}
        </div>
      </div>
    ),
    { ...shareImageSize }
  )
}
