import type { MetadataRoute } from "next"
import { businessConfig } from "@/config/business"

// Everything public is crawlable. Note we deliberately do NOT block /_next/ —
// Google needs the CSS and JS bundles to render the page the way visitors see it.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: `${businessConfig.siteUrl}/sitemap.xml`,
    host: businessConfig.siteUrl,
  }
}
