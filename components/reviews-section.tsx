"use client"

import { Star, ExternalLink, ShieldCheck, MapPin, Wrench } from "lucide-react"
import { WhatsAppIcon } from "@/components/whatsapp-icon"
import { useLanguage } from "@/context/language-context"
import { businessConfig, getWhatsAppUrl } from "@/config/business"

export function ReviewsSection() {
  const { t, language } = useLanguage()
  const hi = language === "hi"

  const trustHighlights = [
    {
      Icon: ShieldCheck,
      title: hi ? "100% असली प्रोडक्ट व वारंटी" : "100% Genuine with Brand Warranty",
      desc: hi
        ? "अधिकृत वितरकों से सीधे प्राप्त ओरिजिनल उपकरण और असली स्पेयर पार्ट्स।"
        : "Directly sourced from authorized distributors with official manufacturer warranty and original parts.",
    },
    {
      Icon: Wrench,
      title: hi ? "तेज़ व पारदर्शी रिपेयर" : "Prompt & Transparent Repairs",
      desc: hi
        ? "काम शुरू करने से पहले सही अनुमान और भिलाई-दुर्ग में घर पर सेवा।"
        : "Clear cost estimates before starting work and reliable doorstep repair across Bhilai & Durg.",
    },
    {
      Icon: MapPin,
      title: hi ? "जुनवानी रोड पर स्थायी दुकान" : "Verified Store on Junwani Road",
      desc: hi
        ? "शिखर कॉम्प्लेक्स के सामने, सूर्या मॉल के पास — हफ़्ते के सातों दिन खुला।"
        : "In front of Shikhar Complex, near Surya Mall — open 7 days a week for in-store visits.",
    },
  ]

  return (
    <section id="reviews" className="py-20 md:py-28 bg-secondary/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            {hi ? "ग्राहक विश्वास और समीक्षा" : "Customer Trust & Reviews"}
          </span>
          <h2 className="mt-3 font-serif text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-balance text-foreground">
            {hi ? "विश्वसनीय सेवा और प्रामाणिक उत्पाद" : "Built on Honesty, Quality & Reliable Service"}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed text-pretty">
            {hi
              ? "भिलाई और दुर्ग के सैकड़ों परिवारों का भरोसेमंद साथी। हम हर काम में पूरी पारदर्शिता और बेहतरीन सर्विस सुनिश्चित करते हैं।"
              : "Trusted by families and local businesses across Bhilai and Durg. We take pride in transparent estimates, genuine products, and long-lasting repair quality."}
          </p>
        </div>

        {/* 3 Pillar Cards */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {trustHighlights.map(({ Icon, title, desc }) => (
            <div
              key={title}
              className="flex flex-col rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:border-primary/40 hover:shadow-md"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Icon className="h-6 w-6" />
              </span>
              <h3 className="mt-4 text-lg font-semibold text-foreground">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed flex-1">{desc}</p>
            </div>
          ))}
        </div>

        {/* Interactive Feedback / Review Card */}
        <div className="mt-12 max-w-3xl mx-auto rounded-3xl border border-border bg-card p-8 md:p-10 text-center shadow-lg">
          <div className="flex items-center justify-center gap-1.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-6 w-6 fill-amber-400 text-amber-400" />
            ))}
          </div>
          <h3 className="mt-4 font-serif text-2xl font-semibold text-foreground">
            {hi ? "हाल ही में हमारे यहाँ से सेवा ली या सामान खरीदा?" : "Visited Our Store or Booked a Service?"}
          </h3>
          <p className="mt-2 text-sm sm:text-base text-muted-foreground leading-relaxed max-w-lg mx-auto">
            {hi
              ? "आपका अनुभव हमारे लिए बहुत महत्वपूर्ण है। Google Maps पर अपना रिव्यू दें या WhatsApp पर अपना अनुभव साझा करें।"
              : "Your honest feedback helps your neighbors in Bhilai find dependable appliance services. Rate us on Google Maps or share your experience directly with us."}
          </p>

          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3">
            <a
              href={businessConfig.googleMaps.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90 shadow-md transition-all active:scale-[0.98]"
            >
              <ExternalLink className="h-4 w-4" />
              {t("reviews.write_google")}
            </a>
            <a
              href={getWhatsAppUrl(
                hi
                  ? "नमस्ते KGN होम अप्लायंस एंड सर्विसेज, मुझे अपना अनुभव/फीडबैक साझा करना है:"
                  : "Hello KGN Home Appliance & Services, I would like to share my feedback:"
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-card px-7 py-3 text-sm font-semibold text-foreground hover:border-primary/50 transition-colors"
            >
              <WhatsAppIcon className="h-4 w-4 text-[#25D366]" />
              {t("reviews.send_feedback")}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
