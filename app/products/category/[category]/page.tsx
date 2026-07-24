import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { LanguageProvider } from "@/context/language-context"
import { CategoryPageContent } from "@/components/category-page-content"
import { categories, products, categoryIntro, type CategoryId } from "@/config/products"
import { businessConfig } from "@/config/business"

function getCategory(id: string) {
  return categories.find((c) => c.id === id)
}

// Pre-build a page for every category in config/products.ts
export function generateStaticParams() {
  return categories.map((c) => ({ category: c.id }))
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
  const description = `${cat.nameEn} (${count} models) at KGN Home Appliance & Services, Junwani Road, Bhilai. ${categoryIntro[cat.id].en}`

  return {
    title,
    description,
    alternates: { canonical: `${businessConfig.siteUrl}/products/category/${cat.id}` },
    openGraph: { title: `${title} | KGN Home Appliance & Services`, description },
  }
}

export default async function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params
  const cat = getCategory(category)
  if (!cat) notFound()

  const base = businessConfig.siteUrl
  const categoryProducts = products.filter((p) => p.category === cat.id)

  // CollectionPage + ItemList so Google understands this is a category listing,
  // plus a breadcrumb trail back to the catalog and home.
  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: `${cat.nameEn} — KGN Home Appliance & Services, Bhilai`,
    description: categoryIntro[cat.id].en,
    url: `${base}/products/category/${cat.id}`,
    mainEntity: {
      "@type": "ItemList",
      itemListElement: categoryProducts.map((p, i) => ({
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
      { "@type": "ListItem", position: 3, name: cat.nameEn, item: `${base}/products/category/${cat.id}` },
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
