import { readdirSync, writeFileSync } from "node:fs"

// Regenerate the product-photo manifest on every build/dev start. The site
// uses it to know which /public/products photos actually exist, so product
// pages never reference an image that would 404 (Search Console flags those).
// The "drop a photo in and it appears" convention still holds — the manifest
// refreshes itself on the next build.
const productImageFiles = readdirSync(new URL("./public/products", import.meta.url))
writeFileSync(
  new URL("./config/product-image-manifest.json", import.meta.url),
  `${JSON.stringify(productImageFiles.sort(), null, 2)}\n`,
)

/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    // Vercel optimizes and re-encodes on the fly, so the hero photo (the LCP
    // element on mobile) ships as AVIF/WebP instead of a ~460 KB JPEG.
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 2678400, // 31 days
  },
  async redirects() {
    return [
      {
        // The vercel.app deployment URL serves the same site as the custom
        // domain. Left alone, that is duplicate content on two hosts and Google
        // has to guess which one to rank. Send every hit to the real domain.
        source: "/:path*",
        has: [{ type: "host", value: "kgn-home-appliances.vercel.app" }],
        destination: "https://www.kgnhomeappliances.shop/:path*",
        permanent: true,
      },
      {
        // Same for the bare domain, so www is the one indexed version.
        source: "/:path*",
        has: [{ type: "host", value: "kgnhomeappliances.shop" }],
        destination: "https://www.kgnhomeappliances.shop/:path*",
        permanent: true,
      },
    ]
  },
  async headers() {
    return [
      {
        // Product and storefront photos are content-addressed by filename and
        // rarely change; long-cache them so repeat visits skip the download.
        source: "/:path((?:products/.*|storefront)\\.(?:jpg|jpeg|png|webp|avif|svg))",
        headers: [{ key: "Cache-Control", value: "public, max-age=86400, stale-while-revalidate=604800" }],
      },
    ]
  },
}

export default nextConfig
