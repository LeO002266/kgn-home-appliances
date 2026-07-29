import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { LanguageProvider } from "@/context/language-context"
import { ProductDetailContent } from "@/components/product-detail-content"
import { products, getProduct, getProductImage, categories, categoryIntro } from "@/config/products"
import { businessConfig } from "@/config/business"

// Pre-build a page for every product in config/products.ts
export function generateStaticParams() {
  return products.map((p) => ({ id: p.id }))
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params
  const product = getProduct(id)
  if (!product) return { title: "Product not found" }

  const cat = categories.find((c) => c.id === product.category)
  const url = `${businessConfig.siteUrl}/products/${product.id}`
  const description = `${product.nameEn} at ${businessConfig.name}, Junwani Road, Bhilai — genuine product from an authorized distributor with official brand warranty. Call or WhatsApp 91099 18786 for today's best price.`

  return {
    title: `${product.nameEn} in Bhilai`,
    description,
    keywords: [
      product.nameEn,
      `${product.nameEn} price`,
      `${product.nameEn} Bhilai`,
      ...(product.brand ? [`${product.brand} Bhilai`, `${product.brand} dealer Bhilai`] : []),
      ...(cat ? [`${cat.nameEn} Bhilai`, `${cat.nameEn} shop Bhilai`] : []),
    ],
    alternates: { canonical: url },
    openGraph: {
      title: `${product.nameEn} | ${businessConfig.name}`,
      description,
      url,
      images: [{ url: getProductImage(product), alt: `${product.nameEn} available at ${businessConfig.name}, Bhilai` }],
    },
  }
}

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const product = getProduct(id)
  if (!product) notFound()

  const base = businessConfig.siteUrl
  const cat = categories.find((c) => c.id === product.category)

  // Product + breadcrumb structured data so Google understands each product page.
  // No price (shop policy) and no ratings (sample data) — only verifiable facts.
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.nameEn,
    description: cat ? categoryIntro[cat.id].en : undefined,
    image: `${base}${getProductImage(product)}`,
    category: cat?.nameEn,
    ...(product.brand ? { brand: { "@type": "Brand", name: product.brand } } : {}),
    url: `${base}/products/${product.id}`,
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      priceSpecification: { "@type": "PriceSpecification", priceCurrency: "INR" },
      areaServed: [{ "@type": "Place", name: "Bhilai" }, { "@type": "Place", name: "Durg" }],
      seller: { "@id": `${base}/#localbusiness` },
    },
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: base },
      { "@type": "ListItem", position: 2, name: "Products", item: `${base}/products` },
      { "@type": "ListItem", position: 3, name: product.nameEn, item: `${base}/products/${product.id}` },
    ],
  }

  return (
    <LanguageProvider>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ProductDetailContent productId={id} />
    </LanguageProvider>
  )
}
