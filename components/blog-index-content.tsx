"use client"

import Link from "next/link"
import { ChevronRight, Clock, ArrowRight, Phone } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { MobileCtaBar } from "@/components/mobile-cta-bar"
import { useLanguage } from "@/context/language-context"
import { businessConfig } from "@/config/business"
import { getSortedPosts } from "@/config/blog"

export function BlogIndexContent() {
  const { t, language } = useLanguage()
  const hi = language === "hi"
  const posts = getSortedPosts()

  const formatDate = (iso: string) =>
    new Date(`${iso}T00:00:00Z`).toLocaleDateString(hi ? "hi-IN" : "en-IN", {
      day: "numeric",
      month: "short",
      year: "numeric",
      timeZone: "UTC",
    })

  return (
    <main className="min-h-screen bg-background">
      <Header />

      <section className="pt-28 md:pt-36 pb-10 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-primary transition-colors">
              {t("nav.home")}
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-foreground font-medium">{t("blog.title")}</span>
          </nav>

          <h1 className="mt-4 font-serif text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-foreground">
            {t("blog.title")}
          </h1>
          <p className="mt-3 max-w-2xl text-lg text-muted-foreground text-pretty leading-relaxed">
            {t("blog.description")}
          </p>
        </div>
      </section>

      <section className="pb-16 md:pb-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="group flex flex-col rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/40"
              >
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-primary">
                  <span>{hi ? post.topicHi : post.topicEn}</span>
                  <span className="text-border">•</span>
                  <span className="inline-flex items-center gap-1 font-medium normal-case tracking-normal text-muted-foreground">
                    <Clock className="h-3.5 w-3.5" />
                    {post.readMinutes} {t("blog.min_read")}
                  </span>
                </div>

                <h2 className="mt-3 font-serif text-xl font-semibold leading-snug text-foreground">
                  <Link href={`/blog/${post.slug}`} className="transition-colors group-hover:text-primary">
                    {hi ? post.titleHi : post.titleEn}
                  </Link>
                </h2>

                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {hi ? post.excerptHi : post.excerptEn}
                </p>

                <div className="mt-5 flex items-center justify-between border-t border-border pt-4">
                  <time dateTime={post.publishedAt} className="text-xs text-muted-foreground">
                    {formatDate(post.publishedAt)}
                  </time>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:gap-2.5 transition-all"
                  >
                    {t("blog.read_more")}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-14 rounded-2xl border border-border bg-secondary/40 p-8 text-center">
            <h2 className="font-serif text-2xl font-semibold text-foreground">{t("blog.cta_title")}</h2>
            <p className="mt-2 text-muted-foreground">{t("blog.cta_desc")}</p>
            <a
              href={`tel:${businessConfig.contact.phone}`}
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              <Phone className="h-4 w-4" />
              {t("contact.call_now")}
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
      <MobileCtaBar />
    </main>
  )
}
