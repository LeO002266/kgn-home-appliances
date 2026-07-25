import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { LanguageProvider } from "@/context/language-context"
import { ProductDetailContent } from "@/components/product-detail-content"
import { products, getProduct, getProductImage, categories } from "@/config/products"
import { businessConfig } from "@/config/business"

// Pre-build a page for every product in config/products.ts
export function generateStaticParams() {
  return products.map((p) => ({ id: p.id }))
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params
  const product = getProduct(id)
  if (!product) return { title: "Product not found" }
  return {
    title: product.nameEn,
    description: `${product.nameEn} — genuine product with warranty at KGN Home Appliance & Services, Bhilai. Call or WhatsApp for the best price.`,
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
    image: `${base}${getProductImage(product)}`,
    category: cat?.nameEn,
    ...(product.brand ? { brand: { "@type": "Brand", name: product.brand } } : {}),
    url: `${base}/products/${product.id}`,
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      priceSpecification: { "@type": "PriceSpecification", priceCurrency: "INR" },
      seller: { "@type": "Store", name: businessConfig.name, telephone: businessConfig.contact.phone },
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
