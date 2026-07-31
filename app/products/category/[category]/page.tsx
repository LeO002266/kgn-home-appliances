import type { Metadata } from "next"
import { notFound, permanentRedirect } from "next/navigation"
import { LanguageProvider } from "@/context/language-context"
import { CategoryPageContent } from "@/components/category-page-content"
import {
  categories,
  products,
  categoryIntro,
  categoryKeywords,
  categoryUrl,
  productUrl,
  idFromLocalSlug,
  type CategoryId,
} from "@/config/products"
import { businessConfig } from "@/config/business"

function getCategory(slug: string) {
  return categories.find((c) => c.id === idFromLocalSlug(slug))
}

// Pre-build a page for every category in config/products.ts, at the
// keyword-rich "<id>-in-bhilai" slug.
export function generateStaticParams() {
  return categories.map((c) => ({ category: `${c.id}-in-bhilai` }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>
}): Promise<Metadata> {
  const { category } = await params
  const cat = getCategory(category)
  if (!cat) return { title: "Category not found" }

  const count = products.filter((p) => p.category === cat.id).length
  const title = `${cat.nameEn} in Bhilai`
  // Kept near 160 characters so Google shows the whole line instead of cutting it.
  const description = `${cat.nameEn} at KGN Home Appliance & Services, Junwani Road, Bhilai — ${count} models, genuine products with brand warranty. Call 91099 18786 for today's price.`
  const terms = categoryKeywords[cat.id] ?? []
  // "near me" and locality phrases belong here and in page copy — not in the
  // URL slug, which Google treats as keyword stuffing.
  const keywords = [
    ...terms.flatMap((term) => [term, `${term} Bhilai`, `${term} near me`]),
    `${cat.nameEn} shop near me`,
    `${cat.nameEn} Smriti Nagar Bhilai`,
    `${cat.nameEn} Junwani Road Bhilai`,
  ]
  const url = `${businessConfig.siteUrl}${categoryUrl(cat.id)}`

  return {
    title,
    description,
    keywords: keywords.length ? keywords : undefined,
    alternates: { canonical: url },
    openGraph: {
      title: `${title} | KGN Home Appliance & Services`,
      description: categoryIntro[cat.id].en,
      url,
    },
  }
}

export default async function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params
  const cat = getCategory(category)
  if (!cat) {
    // Legacy suffix-less URL (e.g. /products/category/mixer-grinders) —
    // 301 to the new -in-bhilai slug so indexed links keep working.
    const legacy = categories.find((c) => c.id === category)
    if (legacy) permanentRedirect(categoryUrl(legacy.id))
    notFound()
  }

  const base = businessConfig.siteUrl
  const categoryProducts = products.filter((p) => p.category === cat.id)

  // CollectionPage + ItemList so Google understands this is a category listing,
  // plus a breadcrumb trail back to the catalog and home.
  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: `${cat.nameEn} — KGN Home Appliance & Services, Bhilai`,
    description: categoryIntro[cat.id].en,
    url: `${base}${categoryUrl(cat.id)}`,
    mainEntity: {
      "@type": "ItemList",
      itemListElement: categoryProducts.map((p, i) => ({
        "@type": "ListItem",
        position: i + 1,
        url: `${base}${productUrl(p.id)}`,
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
      { "@type": "ListItem", position: 3, name: cat.nameEn, item: `${base}${categoryUrl(cat.id)}` },
    ],
  }

  return (
    <LanguageProvider>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <CategoryPageContent categoryId={cat.id as CategoryId} />
    </LanguageProvider>
  )
}
