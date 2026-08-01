import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { LanguageProvider } from "@/context/language-context"
import { BlogPostContent } from "@/components/blog-post-content"
import { blogPosts, getBlogPost, postPlainText } from "@/config/blog"
import { businessConfig } from "@/config/business"

// Pre-build a page for every post in config/blog.ts
export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const post = getBlogPost(slug)
  if (!post) return { title: "Article not found" }

  const url = `${businessConfig.siteUrl}/blog/${post.slug}`

  return {
    title: post.metaTitleEn,
    description: post.metaDescriptionEn,
    // Post-specific terms plus the local variants people actually type
    // ("<term> near me", "<term> Bhilai", locality names).
    keywords: [
      ...post.keywords,
      ...post.keywords.slice(0, 4).flatMap((k) => [`${k} near me`, `${k} Bhilai`]),
      "home appliances shop near me Bhilai",
      "home appliances Smriti Nagar Bhilai",
      "home appliances Junwani Road Bhilai",
      "appliance repair near me Bhilai",
    ],
    alternates: { canonical: url },
    openGraph: {
      title: post.titleEn,
      description: post.metaDescriptionEn,
      url,
      type: "article",
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      authors: [businessConfig.name],
    },
    twitter: {
      card: "summary_large_image",
      title: post.titleEn,
      description: post.metaDescriptionEn,
    },
  }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getBlogPost(slug)
  if (!post) notFound()

  const base = businessConfig.siteUrl
  const url = `${base}/blog/${post.slug}`

  // BlogPosting with the shop as both author and publisher — the article is
  // written from the counter, so E-E-A-T signals point at the business itself.
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.titleEn,
    description: post.metaDescriptionEn,
    articleBody: postPlainText(post),
    keywords: post.keywords.join(", "),
    inLanguage: "en-IN",
    datePublished: post.publishedAt,
    dateModified: post.updatedAt,
    url,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    image: `${base}/storefront.jpg`,
    author: {
      "@type": "Organization",
      name: businessConfig.name,
      url: base,
      telephone: businessConfig.contact.phone,
    },
    publisher: {
      "@type": "Organization",
      name: businessConfig.name,
      url: base,
      logo: { "@type": "ImageObject", url: `${base}/icon-512.png` },
    },
    about: { "@type": "Thing", name: post.topicEn },
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: base },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${base}/blog` },
      { "@type": "ListItem", position: 3, name: post.titleEn, item: url },
    ],
  }

  const faqSchema = post.faqs?.length
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: post.faqs.map((f) => ({
          "@type": "Question",
          name: f.qEn,
          acceptedAnswer: { "@type": "Answer", text: f.aEn },
        })),
      }
    : null

  return (
    <LanguageProvider>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {faqSchema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      )}
      <BlogPostContent slug={post.slug} />
    </LanguageProvider>
  )
}
