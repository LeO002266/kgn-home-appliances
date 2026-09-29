"use client"

import { Phone } from "lucide-react"
import { WhatsAppIcon } from "@/components/whatsapp-icon"
import { useLanguage } from "@/context/language-context"
import { businessConfig, getWhatsAppUrl } from "@/config/business"

// Sticky call/WhatsApp bar shown only on phones — the two actions a
// local customer actually wants. The spacer keeps it from covering the footer.
export function MobileCtaBar() {
  const { t } = useLanguage()

  return (
    <>
      <div className="h-20 md:hidden" aria-hidden="true" />
      <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 gap-2 border-t border-border bg-card/95 px-3 pt-2.5 pb-[max(0.75rem,env(safe-area-inset-bottom))] backdrop-blur-md md:hidden shadow-[0_-4px_16px_rgba(0,0,0,0.06)]">
        <a
          href={`tel:${businessConfig.contact.phone}`}
          className="flex items-center justify-center gap-2 rounded-xl border border-primary/20 bg-primary/5 py-2.5 text-sm font-bold text-primary active:bg-primary/10 transition-colors"
        >
          <Phone className="h-4 w-4" />
          {t("contact.call_now")}
        </a>
        <a
          href={getWhatsAppUrl(businessConfig.whatsappMessages.general)}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 rounded-xl bg-[#25D366] py-2.5 text-sm font-bold text-white shadow-sm active:bg-[#1ebe5b] transition-colors"
        >
          <WhatsAppIcon className="h-4 w-4" />
          {t("contact.whatsapp")}
        </a>
      </div>
    </>
  )
}
