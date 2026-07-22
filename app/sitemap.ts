import type { MetadataRoute } from "next"
import { businessConfig } from "@/config/business"
import { products, categories } from "@/config/products"

// Auto-generated sitemap: home, catalog, every category filter, every product page.
export default function sitemap(): MetadataRoute.Sitemap {
  const base = businessConfig.siteUrl

  return [
    { url: `${base}/`, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/products`, changeFrequency: "weekly", priority: 0.9 },
    ...categories.map((c) => ({
      url: `${base}/products?category=${c.id}`,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    })),
    ...products.map((p) => ({
      url: `${base}/products/${p.id}`,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ]
}
