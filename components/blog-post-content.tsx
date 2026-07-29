"use client"

import Link from "next/link"
import { ChevronRight, Clock, Info, Phone, MessageCircle, ArrowRight, ArrowLeft } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { MobileCtaBar } from "@/components/mobile-cta-bar"
import { useLanguage } from "@/context/language-context"
import { businessConfig, getWhatsAppUrl } from "@/config/business"
import { getBlogPost, getRelatedPosts, type BlogBlock } from "@/config/blog"
import { categories } from "@/config/products"

function Block({ block, hi }: { block: BlogBlock; hi: boolean }) {
  const lang = hi ? "hi" : "en"

  switch (block.type) {
    case "h2":
      return (
        <h2 className="mt-10 font-serif text-2xl md:text-3xl font-semibold tracking-tight text-foreground scroll-mt-24">
          {block[lang]}
        </h2>
      )
    case "h3":
      return <h3 className="mt-8 text-xl font-semibold text-foreground">{block[lang]}</h3>
    case "p":
      return <p className="mt-4 text-base md:text-lg leading-relaxed text-muted-foreground">{block[lang]}</p>
    case "ul":
      return (
        <ul className="mt-4 space-y-2.5">
          {block[lang].map((item) => (
            <li key={item} className="flex gap-3 text-base leading-relaxed text-muted-foreground">
              <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )
    case "ol":
      return (
        <ol className="mt-4 space-y-3">
          {block[lang].map((item, i) => (
            <li key={item} className="flex gap-3 text-base leading-relaxed text-muted-foreground">
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-semibold text-primary">
                {i + 1}
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ol>
      )
    case "callout":
      return (
        <div className="mt-6 flex gap-3 rounded-2xl border border-amber-400/40 bg-amber-400/10 p-5">
          <Info className="h-5 w-5 shrink-0 text-amber-600 dark:text-amber-400" />
          <p className="text-base leading-relaxed font-medium text-foreground">{block[lang]}</p>
        </div>
      )
  }
}

export function BlogPostContent({ slug }: { slug: string }) {
  const { t, language } = useLanguage()
  const hi = language === "hi"

  const post = getBlogPost(slug)
  if (!post) return null

  const related = getRelatedPosts(slug)
  const relatedCategory = post.relatedCategory ? categories.find((c) => c.id === post.relatedCategory) : undefined

  const formatDate = (iso: string) =>
    new Date(`${iso}T00:00:00Z`).toLocaleDateString(hi ? "hi-IN" : "en-IN", {
      day: "numeric",
      month: "long",
      year: "numeric",
      timeZone: "UTC",
    })

  return (
    <main className="min-h-screen bg-background">
      <Header />

      <article className="pt-28 md:pt-36 pb-8">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-1.5 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-primary transition-colors">
              {t("nav.home")}
            </Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/blog" className="hover:text-primary transition-colors">
              {t("blog.title")}
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-foreground font-medium line-clamp-1">{hi ? post.titleHi : post.titleEn}</span>
          </nav>

          <header className="mt-6">
            <span className="text-sm font-semibold uppercase tracking-widest text-primary">
              {hi ? post.topicHi : post.topicEn}
            </span>
            <h1 className="mt-3 font-serif text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-balance text-foreground">
              {hi ? post.titleHi : post.titleEn}
            </h1>
            <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground">
              <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
              <span className="inline-flex items-center gap-1.5">
                <Clock className="h-4 w-4" />
                {post.readMinutes} {t("blog.min_read")}
              </span>
              <span>{businessConfig.name}</span>
            </div>
            <p className="mt-5 text-lg leading-relaxed text-pretty text-foreground/80">
              {hi ? post.excerptHi : post.excerptEn}
            </p>
          </header>

          <div className="mt-8 border-t border-border pt-2">
            {post.blocks.map((block, i) => (
              <Block key={`${block.type}-${i}`} block={block} hi={hi} />
            ))}
          </div>

          {post.faqs && post.faqs.length > 0 && (
            <section className="mt-12">
              <h2 className="font-serif text-2xl md:text-3xl font-semibold tracking-tight text-foreground">
                {t("blog.faq_title")}
              </h2>
              <dl className="mt-5 space-y-4">
                {post.faqs.map((faq) => (
                  <div key={faq.qEn} className="rounded-2xl border border-border bg-card p-5">
                    <dt className="font-semibold text-foreground">{hi ? faq.qHi : faq.qEn}</dt>
                    <dd className="mt-2 text-base leading-relaxed text-muted-foreground">{hi ? faq.aHi : faq.aEn}</dd>
                  </div>
                ))}
              </dl>
            </section>
          )}

          {/* Conversion block — every post ends with a way to reach the shop */}
          <section className="mt-12 rounded-3xl border border-border bg-secondary/40 p-6 md:p-8">
            <h2 className="font-serif text-2xl font-semibold text-foreground">{t("blog.cta_title")}</h2>
            <p className="mt-2 text-muted-foreground leading-relaxed">{t("blog.cta_desc")}</p>
            <div className="mt-5 flex flex-col sm:flex-row gap-3">
              <a
                href={`tel:${businessConfig.contact.phone}`}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                <Phone className="h-4 w-4" />
                {businessConfig.contact.phoneDisplay}
              </a>
              <a
                href={getWhatsAppUrl(businessConfig.whatsappMessages.general)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground hover:border-primary/50 transition-colors"
              >
                <MessageCircle className="h-4 w-4" />
                {t("repair.whatsapp")}
              </a>
              {relatedCategory && (
                <Link
                  href={`/products/category/${relatedCategory.id}`}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground hover:border-primary/50 transition-colors"
                >
                  {hi ? relatedCategory.nameHi : relatedCategory.nameEn}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              )}
            </div>
            <p className="mt-4 text-sm text-muted-foreground">{businessConfig.contact.address}</p>
          </section>

          <Link
            href="/blog"
            className="mt-10 inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            {t("blog.title")}
          </Link>
        </div>
      </article>

      {related.length > 0 && (
        <section className="pb-20 md:pb-28 bg-secondary/30 pt-14">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-xl md:text-2xl font-semibold text-foreground">{t("blog.related")}</h2>
            <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((p) => (
                <Link
                  key={p.slug}
                  href={`/blog/${p.slug}`}
                  className="group rounded-2xl border border-border bg-card p-5 transition-colors hover:border-primary/40"
                >
                  <span className="text-xs font-semibold uppercase tracking-wide text-primary">
                    {hi ? p.topicHi : p.topicEn}
                  </span>
                  <h3 className="mt-2 font-serif text-lg font-semibold leading-snug text-foreground group-hover:text-primary transition-colors">
                    {hi ? p.titleHi : p.titleEn}
                  </h3>
                  <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-muted-foreground">
                    {hi ? p.excerptHi : p.excerptEn}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
      <WhatsAppButton />
      <MobileCtaBar />
    </main>
  )
}
