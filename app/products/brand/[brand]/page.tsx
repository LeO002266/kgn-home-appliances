import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { LanguageProvider } from "@/context/language-context"
import { BrandPageContent } from "@/components/brand-page-content"
import { brands, getBrand, getBrandProducts } from "@/config/products"
import { businessConfig } from "@/config/business"

// Pre-build a page for every brand we stock products from
export function generateStaticParams() {
  return brands.map((b) => ({ brand: b.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ brand: string }>
}): Promise<Metadata> {
  const { brand } = await params
  const b = getBrand(brand)
  if (!b) return { title: "Brand not found" }

  const count = getBrandProducts(b.id).length
  const title = `${b.id} Products in Bhilai`
  // Kept near 160 characters so Google shows the whole line instead of cutting it.
  const description = `${b.id} appliances at KGN Home Appliance & Services, Junwani Road, Bhilai — ${count} models with official brand warranty. Call 91099 18786 for today's price.`
  const url = `${businessConfig.siteUrl}/products/brand/${b.slug}`

  return {
    title,
    description,
    keywords: [
      `${b.id} Bhilai`,
      `${b.id} price Bhilai`,
      `${b.id} dealer Bhilai`,
      `${b.id} showroom Bhilai`,
      `buy ${b.id} Bhilai`,
    ],
    alternates: { canonical: url },
    openGraph: { title: `${title} | KGN Home Appliance & Services`, description: b.introEn, url },
  }
}

export default async function BrandPage({ params }: { params: Promise<{ brand: string }> }) {
  const { brand } = await params
  const b = getBrand(brand)
  if (!b) notFound()

  const base = businessConfig.siteUrl
  const brandProducts = getBrandProducts(b.id)

  // CollectionPage + ItemList tells Google this is a brand listing;
  // each item carries its Brand so the association is explicit.
  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: `${b.id} Products — KGN Home Appliance & Services, Bhilai`,
    description: b.introEn,
    url: `${base}/products/brand/${b.slug}`,
    mainEntity: {
      "@type": "ItemList",
      itemListElement: brandProducts.map((p, i) => ({
        "@type": "ListItem",
        position: i + 1,
        url: `${base}/products/${p.id}`,
        name: p.nameEn,
      })),
    },
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: base },
      { "@type": "ListItem", position: 2, name: "Products", item: `${base}/products` },
      { "@type": "ListItem", position: 3, name: b.id, item: `${base}/products/brand/${b.slug}` },
    ],
  }

  return (
    <LanguageProvider>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <BrandPageContent slug={b.slug} />
    </LanguageProvider>
  )
}
