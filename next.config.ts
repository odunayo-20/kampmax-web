import type { NextConfig } from "next";
import { securityHeaders } from "./security-headers.cjs";

/**
 * Hosts `next/image` may load remote images from. Media uploaded through the
 * Kampmax API is served either from the API itself (`/media/...`) or from the
 * configured storage provider. Add other hosts (S3, R2, a CDN) to
 * `NEXT_PUBLIC_IMAGE_HOSTS` as a comma-separated list of hostnames.
 */
function imageHostnames(): { protocol: "http" | "https"; hostname: string; port?: string }[] {
  const hosts: { protocol: "http" | "https"; hostname: string; port?: string }[] = [
    { protocol: "https", hostname: "res.cloudinary.com" },
  ];

  try {
    const api = new URL(
      process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:4000/api/v1"
    );
    hosts.push({
      protocol: api.protocol === "http:" ? "http" : "https",
      hostname: api.hostname,
      ...(api.port ? { port: api.port } : {}),
    });
  } catch {
    // An invalid API URL is reported where it is used; skip it here.
  }

  for (const hostname of (process.env.NEXT_PUBLIC_IMAGE_HOSTS ?? "").split(",")) {
    if (hostname.trim()) {
      hosts.push({ protocol: "https", hostname: hostname.trim() });
    }
  }

  return hosts;
}

const nextConfig: NextConfig = {
  async headers() {
    // Staged Content-Security-Policy and the other browser security headers: see security-headers.cjs.
    return [{ source: "/(.*)", headers: securityHeaders({ isDev: process.env.NODE_ENV !== "production" }) }];
  },
  images: {
    remotePatterns: imageHostnames(),
    // The optimizer refuses localhost by default; the local backend serves
    // uploads from there. Never enabled in production builds.
    dangerouslyAllowLocalIP: process.env.NODE_ENV !== "production",
  },
};

export default nextConfig;
