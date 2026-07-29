"use client"

import { Star, MessageCircle, ExternalLink } from "lucide-react"
import { useLanguage } from "@/context/language-context"
import { businessConfig, getWhatsAppUrl } from "@/config/business"

// No testimonials are shown until the shop has real ones. Invented reviews were
// removed deliberately — see the note in README. Once the Google Business
// Profile has reviews, either embed them or paste real quotes here with the
// reviewer's permission.
export function ReviewsSection() {
  const { t, language } = useLanguage()
  const hi = language === "hi"

  return (
    <section id="reviews" className="py-20 md:py-28 bg-secondary/40">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="text-sm font-semibold uppercase tracking-widest text-primary">{t("reviews.title")}</span>
        <h2 className="mt-3 font-serif text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-balance text-foreground">
          {t("reviews.invite_title")}
        </h2>
        <p className="mt-4 text-lg text-muted-foreground leading-relaxed text-pretty">
          {t("reviews.invite_desc")}
        </p>

        <div className="mt-8 rounded-3xl border border-border bg-card p-8 shadow-sm">
          <span className="flex items-center justify-center gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-6 w-6 text-amber-400" strokeWidth={1.5} />
            ))}
          </span>
          <p className="mt-4 text-foreground leading-relaxed">{t("reviews.invite_prompt")}</p>

          <div className="mt-6 flex flex-col sm:flex-row justify-center gap-3">
            <a
              href={businessConfig.googleMaps.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              <ExternalLink className="h-4 w-4" />
              {t("reviews.write_google")}
            </a>
            <a
              href={getWhatsAppUrl(
                hi
                  ? "नमस्ते KGN होम अप्लायंसेज, मुझे अपना अनुभव बताना है:"
                  : "Hello KGN Home Appliances, I would like to share my feedback:",
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground hover:border-primary/50 transition-colors"
            >
              <MessageCircle className="h-4 w-4" />
              {t("reviews.send_feedback")}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
