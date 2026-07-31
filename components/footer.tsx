"use client"

import Link from "next/link"
import { Instagram, Facebook, Phone, MessageCircle } from "lucide-react"
import { useLanguage } from "@/context/language-context"
import { businessConfig, getWhatsAppUrl } from "@/config/business"
import { getSortedPosts } from "@/config/blog"
import { categoryUrl } from "@/config/products"
import { servicePages } from "@/config/service-pages"
import { serviceAreaPages } from "@/config/areas"
import { LogoMark } from "./logo"

export function Footer() {
  const { t, language } = useLanguage()

  const columns = [
    {
      title: t("footer.shop"),
      links: [
        { label: t("category.mixers"), href: categoryUrl("mixer-grinders") },
        { label: t("category.gas_stoves"), href: categoryUrl("gas-stoves") },
        { label: t("category.purifiers"), href: categoryUrl("water-purifiers") },
        { label: t("category.geysers"), href: categoryUrl("water-heaters") },
        { label: t("category.fans"), href: categoryUrl("fans-coolers") },
        { label: t("category.kitchenware"), href: categoryUrl("kitchenware") },
        { label: t("category.cleaning_tools"), href: categoryUrl("cleaning-tools") },
        { label: t("category.hardware_locks"), href: categoryUrl("hardware-locks") },
      ],
    },
    {
      title: t("footer.company"),
      links: [
        { label: t("footer.about_us"), href: "/#why-us" },
        { label: t("nav.services"), href: "/services" },
        { label: t("nav.blog"), href: "/blog" },
        { label: t("nav.reviews"), href: "/#reviews" },
        { label: t("nav.repairs"), href: "/#repairs" },
        { label: t("nav.contact"), href: "/#contact" },
      ],
    },
    {
      title: t("footer.support"),
      links: [
        { label: t("footer.call_us"), href: `tel:${businessConfig.contact.phone}` },
        { label: t("footer.whatsapp_us"), href: getWhatsAppUrl(businessConfig.whatsappMessages.general), external: true },
        { label: t("footer.email_us"), href: `mailto:${businessConfig.contact.email}` },
        { label: t("footer.directions"), href: businessConfig.googleMaps.url, external: true },
      ],
    },
  ]

  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-[#241056] to-[#1a0b40] text-white/70">
      <div
        className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] bg-[size:26px_26px]"
        aria-hidden="true"
      />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid gap-10 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2.5">
              <LogoMark className="h-10 w-10 shrink-0" />
              <div className="flex flex-col">
                <span className="font-serif text-lg font-semibold tracking-tight text-white leading-tight">KGN</span>
                <span className="text-xs font-medium text-white/60 leading-tight">Home Appliance & Services</span>
              </div>
            </Link>
            <p className="mt-4 max-w-sm text-sm text-white/60 leading-relaxed">{t("footer.about")}</p>
            <div className="mt-5 grid gap-2 text-sm">
              <a
                href={`tel:${businessConfig.contact.phone}`}
                className="inline-flex items-center gap-2 font-semibold text-white hover:text-[#ffd54d] transition-colors"
              >
                <Phone className="h-4 w-4 text-[#ffd54d]" />
                {businessConfig.contact.phoneDisplay}
              </a>
              <a
                href={getWhatsAppUrl(businessConfig.whatsappMessages.general)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-semibold text-white hover:text-[#25D366] transition-colors"
              >
                <MessageCircle className="h-4 w-4 text-[#25D366]" />
                {businessConfig.contact.whatsappDisplay}
              </a>
            </div>
            <div className="mt-6 flex items-center gap-3">
              {[
                { href: businessConfig.social.instagram, Icon: Instagram, label: "Instagram", external: true },
                { href: businessConfig.social.facebook, Icon: Facebook, label: "Facebook", external: true },
                { href: getWhatsAppUrl(businessConfig.whatsappMessages.general), Icon: MessageCircle, label: "WhatsApp", external: true },
                { href: `tel:${businessConfig.contact.phone}`, Icon: Phone, label: "Call us", external: false },
              ].map(({ href, Icon, label, external }) => (
                <a
                  key={label}
                  href={href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noopener noreferrer" : undefined}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white/80 transition-colors hover:bg-white/20 hover:text-[#ffd54d]"
                  aria-label={label}
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="text-sm font-semibold uppercase tracking-wide text-[#ffd54d]">{col.title}</h4>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target={"external" in link && link.external ? "_blank" : undefined}
                      rel={"external" in link && link.external ? "noopener noreferrer" : undefined}
                      className="text-sm text-white/60 hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Internal linking — keeps every service page, area page and guide one click from any page */}
        <div className="mt-12 border-t border-white/10 pt-8">
          <h4 className="text-sm font-semibold uppercase tracking-wide text-[#ffd54d]">{t("nav.repairs")}</h4>
          <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2.5">
            {servicePages.map((page) => (
              <Link
                key={page.slug}
                href={`/services/${page.slug}`}
                className="text-sm text-white/60 hover:text-white transition-colors"
              >
                {language === "hi" ? page.h1Hi : page.h1En}
              </Link>
            ))}
            {serviceAreaPages.map((area) => (
              <Link
                key={area.slug}
                href={`/service-areas/${area.slug}`}
                className="text-sm text-white/60 hover:text-white transition-colors"
              >
                {language === "hi" ? area.nameHi : area.nameEn}
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-8 border-t border-white/10 pt-8">
          <h4 className="text-sm font-semibold uppercase tracking-wide text-[#ffd54d]">{t("blog.title")}</h4>
          <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2.5">
            {getSortedPosts().map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="text-sm text-white/60 hover:text-white transition-colors"
              >
                {language === "hi" ? post.titleHi : post.titleEn}
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 md:flex-row">
          <p className="text-sm text-white/50">
            © {new Date().getFullYear()} KGN Home Appliance & Services. {t("footer.copyright")}.
          </p>
          <p className="text-sm text-white/50">{businessConfig.contact.address}</p>
        </div>
      </div>
    </footer>
  )
}
