import type { Metadata } from "next"
import { notFound, permanentRedirect } from "next/navigation"
import { LanguageProvider } from "@/context/language-context"
import { ProductDetailContent } from "@/components/product-detail-content"
import {
  products,
  getProduct,
  getProductImage,
  hasProductPhoto,
  categories,
  categoryIntro,
  productUrl,
  idFromLocalSlug,
  legacyIdFromSlug,
  LOCAL_URL_SUFFIX,
} from "@/config/products"
import { businessConfig } from "@/config/business"

// Pre-build a page for every product in config/products.ts, at the
// keyword-rich local slug.
export function generateStaticParams() {
  return products.map((p) => ({ id: `${p.id}${LOCAL_URL_SUFFIX}` }))
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params
  const product = getProduct(idFromLocalSlug(id) ?? "")
  if (!product) return { title: "Product not found" }

  const cat = categories.find((c) => c.id === product.category)
  const url = `${businessConfig.siteUrl}${productUrl(product.id)}`
  const description = `${product.nameEn} at ${businessConfig.name}, Junwani Road, Bhilai — genuine product from an authorized distributor with official brand warranty. Call or WhatsApp 91099 18786 for today's best price.`

  return {
    title: `${product.nameEn} in Bhilai`,
    description,
    keywords: [
      product.nameEn,
      `${product.nameEn} price`,
      `${product.nameEn} Bhilai`,
      `${product.nameEn} near me`,
      ...(product.brand ? [`${product.brand} Bhilai`, `${product.brand} dealer Bhilai`] : []),
      ...(cat
        ? [
            `${cat.nameEn} Bhilai`,
            `${cat.nameEn} shop Bhilai`,
            `${cat.nameEn} shop near me`,
            `${cat.nameEn} Smriti Nagar Bhilai`,
            `${cat.nameEn} Junwani Road Bhilai`,
          ]
        : []),
    ],
    alternates: { canonical: url },
    openGraph: {
      title: `${product.nameEn} | ${businessConfig.name}`,
      description,
      url,
      images: [
        {
          // Fall back to the storefront photo when this product has no photo
          // yet, so the OG image URL never 404s.
          url: hasProductPhoto(product) ? getProductImage(product) : "/storefront.jpg",
          alt: `${product.nameEn} available at ${businessConfig.name}, Bhilai`,
        },
      ],
    },
  }
}

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const product = getProduct(idFromLocalSlug(id) ?? "")
  if (!product) {
    // Legacy URL form (bare id or old "-in-bhilai" slug) —
    // 301 straight to the current slug so indexed links keep working.
    const legacy = getProduct(legacyIdFromSlug(id))
    if (legacy) permanentRedirect(productUrl(legacy.id))
    notFound()
  }

  const base = businessConfig.siteUrl
  const cat = categories.find((c) => c.id === product.category)

  // Product + breadcrumb structured data so Google understands each product page.
  // No price (shop policy) and no ratings (sample data) — only verifiable facts.
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.nameEn,
    description: cat ? categoryIntro[cat.id].en : undefined,
    image: hasProductPhoto(product) ? `${base}${getProductImage(product)}` : `${base}/storefront.jpg`,
    category: cat?.nameEn,
    ...(product.brand ? { brand: { "@type": "Brand", name: product.brand } } : {}),
    url: `${base}${productUrl(product.id)}`,
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
      { "@type": "ListItem", position: 3, name: product.nameEn, item: `${base}${productUrl(product.id)}` },
    ],
  }

  return (
    <LanguageProvider>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ProductDetailContent productId={product.id} />
    </LanguageProvider>
  )
}
