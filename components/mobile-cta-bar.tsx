"use client"

import { Phone, MessageCircle } from "lucide-react"
import { useLanguage } from "@/context/language-context"
import { businessConfig, getWhatsAppUrl } from "@/config/business"

// Sticky call/WhatsApp bar shown only on phones — the two actions a
// local customer actually wants. The spacer keeps it from covering the footer.
export function MobileCtaBar() {
  const { t } = useLanguage()

  return (
    <>
      <div className="h-16 md:hidden" aria-hidden="true" />
      <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 border-t border-border bg-card/95 backdrop-blur-md md:hidden">
        <a
          href={`tel:${businessConfig.contact.phone}`}
          className="flex items-center justify-center gap-2 py-4 text-sm font-bold text-primary active:bg-secondary"
        >
          <Phone className="h-5 w-5" />
          {t("contact.call_now")}
        </a>
        <a
          href={getWhatsAppUrl(businessConfig.whatsappMessages.general)}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 bg-[#25D366] py-4 text-sm font-bold text-white active:bg-[#1ebe5b]"
        >
          <MessageCircle className="h-5 w-5" />
          {t("contact.whatsapp")}
        </a>
      </div>
    </>
  )
}
