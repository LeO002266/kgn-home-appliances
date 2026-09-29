"use client"

import Link from "next/link"
import { ShieldCheck, Phone } from "lucide-react"
import { WhatsAppIcon } from "@/components/whatsapp-icon"
import { useLanguage } from "@/context/language-context"
import { businessConfig, getWhatsAppUrl } from "@/config/business"
import type { Product } from "@/config/products"
import { categories, productUrl } from "@/config/products"
import { ProductImage } from "@/components/product-image"

export function ProductCard({ product }: { product: Product }) {
  const { t, language } = useLanguage()
  const hi = language === "hi"

  const name = hi ? product.nameHi : product.nameEn
  const badge = hi ? product.badgeHi : product.badgeEn
  const cat = categories.find((c) => c.id === product.category)
  const categoryName = cat ? (hi ? cat.nameHi : cat.nameEn) : ""

  const enquiryUrl = getWhatsAppUrl(
    `${businessConfig.whatsappMessages.priceEnquiry} ${product.nameEn}. ${
      hi ? "कृपया कीमत और अधिक जानकारी दें।" : "Please share the price and more details."
    }`,
  )

  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-border/80 bg-card transition-all duration-300 hover:border-primary/40 hover:shadow-xl hover:-translate-y-1">
      {/* Image and title link to the product's own page */}
      <Link
        href={productUrl(product.id)}
        className="relative block aspect-square overflow-hidden bg-white p-3"
      >
        {badge && (
          <span className="absolute left-3 top-3 z-10 rounded-full bg-gradient-to-r from-[#ffd54d] via-[#fbc02d] to-[#f0a500] px-3 py-1 text-[11px] font-bold text-[#2a1362] shadow-sm">
            {badge}
          </span>
        )}
        <div className="relative h-full w-full transition-transform duration-500 group-hover:scale-105">
          <ProductImage product={product} alt={name} />
        </div>
      </Link>

      <div className="flex flex-1 flex-col p-5">
        <span className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground/80">{categoryName}</span>
        <Link href={productUrl(product.id)}>
          <h3 className="mt-1 text-base font-semibold leading-snug text-foreground group-hover:text-primary transition-colors line-clamp-2">
            {name}
          </h3>
        </Link>

        <div className="mt-3 flex flex-wrap items-center justify-between gap-x-2 gap-y-1.5">
          <span className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
            <ShieldCheck className="h-4 w-4 text-primary shrink-0" />
            {t("products.warranty_short")}
          </span>
          <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-semibold text-primary">
            {t("products.price_on_request")}
          </span>
        </div>

        <div className="mt-auto grid grid-cols-2 gap-2 pt-4">
          <a
            href={`tel:${businessConfig.contact.phone}`}
            className="inline-flex items-center justify-center gap-1.5 rounded-full border border-border/80 bg-secondary/40 px-3 py-2 text-xs font-semibold text-foreground transition-all hover:border-primary/50 hover:bg-secondary hover:text-primary active:scale-[0.98]"
            aria-label={`${t("products.call_now")}: ${name}`}
          >
            <Phone className="h-3.5 w-3.5" />
            {t("products.call_now")}
          </a>
          <a
            href={enquiryUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-1.5 rounded-full bg-[#25D366] px-3 py-2 text-xs font-semibold text-white shadow-xs transition-all hover:bg-[#1ebe5b] hover:shadow-sm active:scale-[0.98]"
            aria-label={`${t("products.enquire")}: ${name}`}
          >
            <WhatsAppIcon className="h-3.5 w-3.5" />
            {t("products.whatsapp")}
          </a>
        </div>
      </div>
    </article>
  )
}
