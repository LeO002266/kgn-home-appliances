"use client"

import { useState } from "react"
import { Wrench, Clock, CheckCircle2, MessageCircle, Phone, Microwave, Blend, Package, Flame, Fan, Zap, Settings } from "lucide-react"
import { useLanguage } from "@/context/language-context"
import { businessConfig, getWhatsAppUrl } from "@/config/business"

// Mixer grinders and gas stoves lead the list — our two specialty categories
const appliancesEn = [
  "Mixer Grinder",
  "Mixer Grinder Jars & Blades",
  "Gas Stove",
  "Oven / Microwave",
  "Fan",
  "Iron",
  "Other Appliance",
]
const appliancesHi = [
  "मिक्सर ग्राइंडर",
  "मिक्सर ग्राइंडर जार और ब्लेड",
  "गैस चूल्हा",
  "ओवन / माइक्रोवेव",
  "पंखा",
  "इस्त्री",
  "अन्य अप्लायंस",
]

export function RepairServices() {
  const { t, language } = useLanguage()
  const hi = language === "hi"

  const services = [
    { Icon: Blend, en: "Mixer Grinder Repair & Service", hi: "मिक्सर ग्राइंडर रिपेयर और सर्विस" },
    { Icon: Package, en: "Mixer Grinder Jars & Blades", hi: "मिक्सर ग्राइंडर जार और ब्लेड" },
    { Icon: Flame, en: "Gas Stove Repair & Service", hi: "गैस चूल्हा रिपेयर और सर्विस" },
    { Icon: Microwave, en: "Oven / Microwave Repair", hi: "ओवन / माइक्रोवेव रिपेयर" },
    { Icon: Fan, en: "Fan Repair & Service", hi: "पंखा रिपेयर और सर्विस" },
    { Icon: Zap, en: "Iron Repair", hi: "इस्त्री रिपेयर" },
    { Icon: Settings, en: "General Appliance Maintenance", hi: "सामान्य अप्लायंस रखरखाव" },
  ]

  const appliances = hi ? appliancesHi : appliancesEn

  const [form, setForm] = useState({ appliance: "", name: "", phone: "", issue: "" })
  const [errors, setErrors] = useState<{ appliance?: string; name?: string; phone?: string }>({})
  const [sent, setSent] = useState(false)

  const validate = () => {
    const next: typeof errors = {}
    if (!form.appliance) next.appliance = t("repair.error_appliance")
    if (!form.name.trim()) next.name = t("contact.error_name")
    if (!/^[6-9]\d{9}$/.test(form.phone.replace(/\D/g, "").replace(/^91/, "")))
      next.phone = t("contact.error_phone")
    setErrors(next)
    return Object.keys(next).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return
    const composed = hi
      ? `नमस्ते KGN होम अप्लायंसेज, मुझे रिपेयर/सर्विस बुक करनी है।\n\nअप्लायंस: ${form.appliance}\nनाम: ${form.name}\nफ़ोन: ${form.phone}${form.issue ? `\nसमस्या: ${form.issue}` : ""}`
      : `Hello KGN Home Appliances, I want to book a repair/service.\n\nAppliance: ${form.appliance}\nName: ${form.name}\nPhone: ${form.phone}${form.issue ? `\nIssue: ${form.issue}` : ""}`
    window.open(getWhatsAppUrl(composed), "_blank", "noopener,noreferrer")
    setSent(true)
    setForm({ appliance: "", name: "", phone: "", issue: "" })
    setErrors({})
    setTimeout(() => setSent(false), 6000)
  }

  const inputClass = (hasError?: string) =>
    `mt-1 w-full rounded-lg border ${
      hasError ? "border-destructive" : "border-input"
    } bg-background px-3 py-2 text-sm text-foreground outline-none focus:border-primary focus:ring-2 focus:ring-ring/30`

  return (
    <section id="repairs" className="py-20 md:py-28 bg-secondary/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div>
            <span className="text-sm font-semibold uppercase tracking-widest text-primary">{t("repair.title")}</span>
            <h2 className="mt-3 font-serif text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-balance text-foreground">
              {t("repair.subtitle")}
            </h2>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed text-pretty max-w-lg">
              {t("repair.description")}
            </p>

            <div className="mt-8 grid sm:grid-cols-2 gap-3">
              {services.map(({ Icon, en, hi: hiText }) => (
                <div
                  key={en}
                  className="flex items-center gap-3 rounded-xl border border-border bg-card px-4 py-3 transition-colors hover:border-primary/40"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Icon className="h-4.5 w-4.5" />
                  </span>
                  <span className="text-sm font-medium text-foreground">{hi ? hiText : en}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col sm:flex-row items-start gap-3">
              <a
                href={`tel:${businessConfig.contact.phone}`}
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                <Phone className="h-4 w-4" />
                {t("repair.cta")}
              </a>
              <a
                href={getWhatsAppUrl(businessConfig.whatsappMessages.repair)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground hover:border-primary/50 transition-colors"
              >
                <MessageCircle className="h-4 w-4" />
                {t("repair.whatsapp")}
              </a>
            </div>

            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-amber-400/40 bg-amber-400/10 px-4 py-2.5 text-sm font-semibold text-amber-700 dark:text-amber-400">
              <Clock className="h-4 w-4" />
              {t("repair.emergency")}
            </div>
          </div>

          {/* Repair booking form — sends the booking via WhatsApp */}
          <form
            onSubmit={handleSubmit}
            noValidate
            className="rounded-3xl border border-border bg-card p-6 md:p-8 shadow-xl"
          >
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Wrench className="h-5 w-5" />
              </span>
              <div>
                <h3 className="text-lg font-semibold text-foreground">{t("repair.book_title")}</h3>
                <p className="text-sm text-muted-foreground">{t("repair.book_note")}</p>
              </div>
            </div>

            <div className="mt-6 grid gap-4">
              <div>
                <label htmlFor="appliance" className="block text-sm font-medium text-foreground">
                  {t("repair.appliance")}
                </label>
                <select
                  id="appliance"
                  value={form.appliance}
                  onChange={(e) => setForm({ ...form, appliance: e.target.value })}
                  className={inputClass(errors.appliance)}
                >
                  <option value="">{t("repair.select_appliance")}</option>
                  {appliances.map((a) => (
                    <option key={a} value={a}>
                      {a}
                    </option>
                  ))}
                </select>
                {errors.appliance && <p className="mt-1 text-xs text-destructive">{errors.appliance}</p>}
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="repair-name" className="block text-sm font-medium text-foreground">
                    {t("contact.name")}
                  </label>
                  <input
                    id="repair-name"
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder={t("contact.name_placeholder")}
                    className={inputClass(errors.name)}
                  />
                  {errors.name && <p className="mt-1 text-xs text-destructive">{errors.name}</p>}
                </div>
                <div>
                  <label htmlFor="repair-phone" className="block text-sm font-medium text-foreground">
                    {t("contact.phone")}
                  </label>
                  <input
                    id="repair-phone"
                    type="tel"
                    inputMode="numeric"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    placeholder="98XXXXXXXX"
                    className={inputClass(errors.phone)}
                  />
                  {errors.phone && <p className="mt-1 text-xs text-destructive">{errors.phone}</p>}
                </div>
              </div>

              <div>
                <label htmlFor="issue" className="block text-sm font-medium text-foreground">
                  {t("repair.issue")}{" "}
                  <span className="font-normal text-muted-foreground">({t("repair.optional")})</span>
                </label>
                <textarea
                  id="issue"
                  rows={3}
                  value={form.issue}
                  onChange={(e) => setForm({ ...form, issue: e.target.value })}
                  placeholder={t("repair.issue_placeholder")}
                  className={`${inputClass()} resize-none`}
                />
              </div>

              {sent ? (
                <div className="flex items-center gap-2 rounded-lg bg-accent/10 px-4 py-3 text-sm font-medium text-accent-foreground">
                  <CheckCircle2 className="h-5 w-5 text-accent" />
                  {t("repair.success")}
                </div>
              ) : (
                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
                >
                  <MessageCircle className="h-4 w-4" />
                  {t("repair.book_cta")}
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
