import type { Metadata } from "next"
import { LanguageProvider } from "@/context/language-context"
import { ProductsPageContent } from "@/components/products-page-content"
import { products, categories } from "@/config/products"
import { businessConfig } from "@/config/business"

const description =
  "Browse the full range of home appliances at KGN Home Appliance & Services, Junwani Road, Bhilai — mixer grinders, gas stoves, pressure cookers, kitchenware, tiffins, cleaning tools, hardware, water purifiers, geysers, fans and coolers."

export const metadata: Metadata = {
  title: "All Products",
  description,
  keywords: [
    "home appliances Bhilai",
    "kitchen appliances Bhilai",
    "appliance shop Junwani Road",
    "household products Bhilai",
    "buy home appliances Bhilai",
  ],
  alternates: { canonical: `${businessConfig.siteUrl}/products` },
  openGraph: {
    title: `All Products | ${businessConfig.name}`,
    description,
    url: `${businessConfig.siteUrl}/products`,
  },
}

export default function ProductsPage() {
  const base = businessConfig.siteUrl

  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: `All Products — ${businessConfig.name}, Bhilai`,
    description,
    url: `${base}/products`,
    isPartOf: { "@id": `${base}/#website` },
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: products.length,
      itemListElement: categories.map((c, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: c.nameEn,
        url: `${base}/products/category/${c.id}`,
      })),
    },
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: base },
      { "@type": "ListItem", position: 2, name: "Products", item: `${base}/products` },
    ],
  }

  return (
    <LanguageProvider>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ProductsPageContent />
    </LanguageProvider>
  )
}
