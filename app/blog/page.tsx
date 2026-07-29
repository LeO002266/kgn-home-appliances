import type { Metadata } from "next"
import { LanguageProvider } from "@/context/language-context"
import { BlogIndexContent } from "@/components/blog-index-content"
import { getSortedPosts } from "@/config/blog"
import { businessConfig } from "@/config/business"

const title = "Home Appliance Tips & Buying Guides"
const description =
  "Practical buying guides, repair advice and safety checklists for mixer grinders, gas stoves, water purifiers, geysers, cookers and fans — from an appliance shop in Bhilai."

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "home appliance blog",
    "appliance buying guide India",
    "mixer grinder guide",
    "gas stove guide",
    "appliance repair tips Bhilai",
    "home appliance tips Bhilai",
  ],
  alternates: { canonical: `${businessConfig.siteUrl}/blog` },
  openGraph: {
    title: `${title} | ${businessConfig.name}`,
    description,
    url: `${businessConfig.siteUrl}/blog`,
    type: "website",
  },
}

export default function BlogPage() {
  const base = businessConfig.siteUrl
  const posts = getSortedPosts()

  // Blog + ItemList so Google reads this as an article index, not a random listing page.
  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: `${businessConfig.name} — Appliance Tips & Guides`,
    description,
    url: `${base}/blog`,
    publisher: {
      "@type": "Organization",
      name: businessConfig.name,
      url: base,
      logo: { "@type": "ImageObject", url: `${base}/icon-512.png` },
    },
    blogPost: posts.map((p) => ({
      "@type": "BlogPosting",
      headline: p.titleEn,
      description: p.excerptEn,
      url: `${base}/blog/${p.slug}`,
      datePublished: p.publishedAt,
      dateModified: p.updatedAt,
    })),
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: base },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${base}/blog` },
    ],
  }

  return (
    <LanguageProvider>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <BlogIndexContent />
    </LanguageProvider>
  )
}
