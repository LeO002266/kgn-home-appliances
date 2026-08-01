import type { MetadataRoute } from "next"
import { businessConfig } from "@/config/business"
import { products, categories, brands, categoryUrl, productUrl } from "@/config/products"
import { blogPosts } from "@/config/blog"
import { servicePages, serviceAreaComboPages } from "@/config/service-pages"
import { serviceAreaPages } from "@/config/areas"

// Auto-generated sitemap: home, services, catalog, every category and brand
// filter, every product page, and every blog post. Adding an entry to any of
// the config files puts it in here — nothing to maintain by hand.
export default function sitemap(): MetadataRoute.Sitemap {
  const base = businessConfig.siteUrl

  // Deployment date stands in for "last touched" on pages whose content is
  // generated from config rather than dated individually.
  const buildDate = new Date()

  return [
    { url: `${base}/`, lastModified: buildDate, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/services`, lastModified: buildDate, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/products`, lastModified: buildDate, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/blog`, lastModified: buildDate, changeFrequency: "weekly", priority: 0.8 },
    ...servicePages.map((p) => ({
      url: `${base}/services/${p.slug}`,
      lastModified: buildDate,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    })),
    ...serviceAreaComboPages.map((p) => ({
      url: `${base}/services/${p.slug}`,
      lastModified: buildDate,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...serviceAreaPages.map((a) => ({
      url: `${base}/service-areas/${a.slug}`,
      lastModified: buildDate,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...categories.map((c) => ({
      url: `${base}${categoryUrl(c.id)}`,
      lastModified: buildDate,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
    ...brands.map((b) => ({
      url: `${base}/products/brand/${b.slug}`,
      lastModified: buildDate,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    })),
    ...products.map((p) => ({
      url: `${base}${productUrl(p.id)}`,
      lastModified: buildDate,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...blogPosts.map((p) => ({
      url: `${base}/blog/${p.slug}`,
      lastModified: new Date(`${p.updatedAt}T00:00:00Z`),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ]
}
