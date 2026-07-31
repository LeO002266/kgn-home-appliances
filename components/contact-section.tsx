"use client"

import { useState } from "react"
import Image from "next/image"
import { MapPin, Phone, Mail, Clock, MessageCircle, CheckCircle2 } from "lucide-react"
import { useLanguage } from "@/context/language-context"
import { businessConfig, getWhatsAppUrl } from "@/config/business"

// Click-to-load facade for the Google Maps embed. The iframe is only created
// after the visitor taps, so Googlebot's page render never requests
// google.com/maps (whose robots.txt blocks crawlers — Search Console flagged
// it on every crawl) and the homepage skips ~1 MB of Maps JS until needed.
function MapEmbed() {
  const { t } = useLanguage()
  const [loaded, setLoaded] = useState(false)

  if (loaded) {
    return (
      <div className="rounded-2xl border border-border overflow-hidden shadow-lg h-80">
        <iframe
          title="KGN Home Appliances location on Google Maps"
          width="100%"
          height="100%"
          src={businessConfig.googleMaps.embedUrl}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    )
  }

  return (
    <div className="relative flex h-80 flex-col items-center justify-center gap-4 rounded-2xl border border-border bg-gradient-to-br from-secondary via-card to-accent/10 p-6 text-center shadow-lg">
      <span className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
        <MapPin className="h-7 w-7" />
      </span>
      <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">{businessConfig.contact.address}</p>
      <div className="flex flex-col sm:flex-row gap-2.5">
        <button
          type="button"
          onClick={() => setLoaded(true)}
          className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
        >
          {t("contact.load_map")}
        </button>
        <a
          href={businessConfig.googleMaps.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-semibold text-foreground hover:border-primary/50 transition-colors"
        >
          {t("footer.directions")}
        </a>
      </div>
    </div>
  )
}

function StorefrontPhoto() {
  const [failed, setFailed] = useState(false)
  if (failed) return null
  return (
    <div className="overflow-hidden rounded-2xl border border-border shadow-lg">
      <Image
        src="/storefront.jpg"
        alt="KGN Home Appliance & Services store, Junwani Road, Bhilai"
        width={1200}
        height={1242}
        className="w-full h-auto"
        sizes="(max-width: 1024px) 100vw, 50vw"
        onError={() => setFailed(true)}
      />
    </div>
  )
}

export function ContactSection() {
  const { t, language } = useLanguage()

  const [form, setForm] = useState({ name: "", phone: "", message: "" })
  const [errors, setErrors] = useState<{ name?: string; phone?: string; message?: string }>({})
  const [sent, setSent] = useState(false)

  const whatsappUrl = getWhatsAppUrl(businessConfig.whatsappMessages.general)

  const validate = () => {
    const next: typeof errors = {}
    if (!form.name.trim()) next.name = t("contact.error_name")
    if (!/^[6-9]\d{9}$/.test(form.phone.replace(/\D/g, "").replace(/^91/, "")))
      next.phone = t("contact.error_phone")
    if (form.message.trim().length < 5) next.message = t("contact.error_message")
    setErrors(next)
    return Object.keys(next).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return
    const composed =
      language === "hi"
        ? `नमस्ते KGN होम अप्लायंसेज,\n\nनाम: ${form.name}\nफ़ोन: ${form.phone}\n\n${form.message}`
        : `Hello KGN Home Appliances,\n\nName: ${form.name}\nPhone: ${form.phone}\n\n${form.message}`
    window.open(getWhatsAppUrl(composed), "_blank", "noopener,noreferrer")
    setSent(true)
    setForm({ name: "", phone: "", message: "" })
    setErrors({})
    setTimeout(() => setSent(false), 6000)
  }

  const details = [
    {
      icon: MapPin,
      iconClass: "bg-rose-500/10 text-rose-600",
      label: t("contact.visit"),
      value: businessConfig.contact.address,
      href: businessConfig.googleMaps.url,
      external: true,
    },
    {
      icon: Phone,
      iconClass: "bg-primary/10 text-primary",
      label: t("contact.call"),
      value: businessConfig.contact.phoneDisplay,
      href: `tel:${businessConfig.contact.phone}`,
    },
    {
      icon: MessageCircle,
      iconClass: "bg-green-500/10 text-green-600",
      label: t("contact.whatsapp"),
      value: businessConfig.contact.whatsappDisplay,
      href: whatsappUrl,
      external: true,
    },
    {
      icon: Mail,
      iconClass: "bg-sky-500/10 text-sky-600",
      label: t("contact.email"),
      value: businessConfig.contact.email,
      href: `mailto:${businessConfig.contact.email}`,
    },
    {
      icon: Clock,
      iconClass: "bg-amber-500/15 text-amber-600",
      label: t("contact.hours"),
      value:
        language === "hi"
          ? `सोम–शनि: ${businessConfig.businessHours.weekdays} • रवि: ${businessConfig.businessHours.sunday}`
          : `Mon–Sat: ${businessConfig.businessHours.weekdays} • Sun: ${businessConfig.businessHours.sunday}`,
    },
  ]

  const inputClass = (hasError?: string) =>
    `mt-1 w-full rounded-lg border ${
      hasError ? "border-destructive" : "border-input"
    } bg-background px-3 py-2 text-sm text-foreground outline-none focus:border-primary focus:ring-2 focus:ring-ring/30`

  return (
    <section id="contact" className="py-20 md:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <span className="text-sm font-semibold uppercase tracking-widest text-primary">{t("contact.title")}</span>
            <h2 className="mt-3 font-serif text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-balance text-foreground">
              {t("contact.subtitle")}
            </h2>
            <p className="mt-4 text-lg text-muted-foreground text-pretty">{t("contact.description")}</p>

            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              {details.map((detail) => {
                const Icon = detail.icon
                const content = (
                  <>
                    <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${detail.iconClass}`}>
                      <Icon className="h-5 w-5" />
                    </span>
                    <span>
                      <span className="block text-sm text-muted-foreground">{detail.label}</span>
                      <span className="block font-medium text-foreground text-sm">{detail.value}</span>
                    </span>
                  </>
                )
                return detail.href ? (
                  <a
                    key={detail.label}
                    href={detail.href}
                    target={detail.external ? "_blank" : undefined}
                    rel={detail.external ? "noopener noreferrer" : undefined}
                    className="flex items-start gap-3 rounded-xl border border-border bg-card p-4 transition-colors hover:border-primary/40"
                  >
                    {content}
                  </a>
                ) : (
                  <div key={detail.label} className="flex items-start gap-3 rounded-xl border border-border bg-card p-4">
                    {content}
                  </div>
                )
              })}
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={`tel:${businessConfig.contact.phone}`}
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                <Phone className="h-4 w-4" />
                {t("contact.call_now")}
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-green-500 bg-green-50 px-6 py-2.5 text-sm font-semibold text-green-700 hover:bg-green-100 transition-colors"
              >
                <MessageCircle className="h-4 w-4" />
                {t("contact.whatsapp")}
              </a>
            </div>
          </div>

          <div className="space-y-6">
            {/* Storefront photo — /public/storefront.jpg */}
            <StorefrontPhoto />

            {/* Google Maps — click-to-load facade, see MapEmbed above */}
            <MapEmbed />

            {/* Contact form — validates, then opens WhatsApp with the message prefilled */}
            <form onSubmit={handleSubmit} noValidate className="rounded-2xl border border-border bg-card p-6">
              <h3 className="text-lg font-semibold text-foreground">{t("contact.message_form")}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{t("contact.form_note")}</p>

              <div className="mt-4 grid gap-3">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground">
                    {t("contact.name")}
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder={t("contact.name_placeholder")}
                    className={inputClass(errors.name)}
                  />
                  {errors.name && <p className="mt-1 text-xs text-destructive">{errors.name}</p>}
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground">
                    {t("contact.phone")}
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    inputMode="numeric"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    placeholder="98XXXXXXXX"
                    className={inputClass(errors.phone)}
                  />
                  {errors.phone && <p className="mt-1 text-xs text-destructive">{errors.phone}</p>}
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground">
                    {t("contact.message")}
                  </label>
                  <textarea
                    id="message"
                    rows={3}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder={t("contact.message_placeholder")}
                    className={`${inputClass(errors.message)} resize-none`}
                  />
                  {errors.message && <p className="mt-1 text-xs text-destructive">{errors.message}</p>}
                </div>

                {sent ? (
                  <div className="flex items-center gap-2 rounded-lg bg-accent/10 px-4 py-3 text-sm font-medium text-accent-foreground">
                    <CheckCircle2 className="h-5 w-5 text-accent" />
                    {t("contact.success")}
                  </div>
                ) : (
                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
                  >
                    <MessageCircle className="h-4 w-4" />
                    {t("contact.send")}
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
