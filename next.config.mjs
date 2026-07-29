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
