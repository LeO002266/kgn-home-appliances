import { businessConfig } from "@/config/business"
import { categories, brands, products, categoryUrl } from "@/config/products"
import { services } from "@/config/services"
import { getServicePageByServiceId } from "@/config/service-pages"
import { serviceAreaPages } from "@/config/areas"
import { getSortedPosts } from "@/config/blog"
import { faqs } from "@/config/faqs"

// llms.txt — the emerging convention for telling AI assistants what a site is
// and where its useful pages live. Not a Google ranking factor; it exists so
// answer engines describe the shop accurately instead of guessing.
// Generated from the same config as the site, so it can never go stale.
export const dynamic = "force-static"

export function GET(): Response {
  const base = businessConfig.siteUrl
  const { contact, businessHours } = businessConfig

  const lines: string[] = [
    `# ${businessConfig.name}`,
    "",
    `> Home appliance shop and repair service on Junwani Road, Bhilai (Chhattisgarh), India. Sells mixer grinders, gas stoves, pressure cookers, kitchenware, tiffins and flasks, cleaning tools, hardware and locks, water purifiers, geysers, fans and coolers. Also does appliance repair and LPG gas pipeline fitting at customers' homes across Bhilai and Durg.`,
    "",
    "## Business details",
    "",
    `- Name: ${businessConfig.name}`,
    `- Address: ${contact.address}`,
    `- Phone: ${contact.phone}`,
    `- WhatsApp: ${contact.whatsapp}`,
    `- Service area: Bhilai and Durg, Chhattisgarh, India`,
    `- Hours: Mon-Fri ${businessHours.weekdays}; Sat ${businessHours.saturday}; Sun ${businessHours.sunday}`,
    `- Languages: English, Hindi`,
    `- Pricing: prices are not published. Customers call or WhatsApp for the current price of a specific model.`,
    "",
    "## Services",
    "",
    ...services.map((s) => {
      const landing = getServicePageByServiceId(s.id)
      const url = landing ? `${base}/services/${landing.slug}` : `${base}/services#${s.id}`
      return `- [${s.nameEn}](${url}): ${s.descEn}`
    }),
    "",
    "## Service areas",
    "",
    ...serviceAreaPages.map((a) => `- [${a.nameEn}](${base}/service-areas/${a.slug}): ${a.metaDescription}`),
    "",
    "## Product categories",
    "",
    ...categories.map(
      (c) =>
        `- [${c.nameEn}](${base}${categoryUrl(c.id)}): ${products.filter((p) => p.category === c.id).length} models listed`,
    ),
    "",
    "## Brands stocked",
    "",
    ...brands.map((b) => `- [${b.id}](${base}/products/brand/${b.slug})`),
    "",
    "## Guides and articles",
    "",
    ...getSortedPosts().map((p) => `- [${p.titleEn}](${base}/blog/${p.slug}): ${p.excerptEn}`),
    "",
    "## Key pages",
    "",
    `- [Home](${base}/)`,
    `- [All products](${base}/products)`,
    `- [Services](${base}/services)`,
    `- [Blog](${base}/blog)`,
    `- [Sitemap](${base}/sitemap.xml)`,
    "",
    "## FAQ",
    "",
    ...faqs.flatMap((f) => [`### ${f.qEn}`, "", f.aEn, ""]),
  ]

  return new Response(`${lines.join("\n").trimEnd()}\n`, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  })
}
