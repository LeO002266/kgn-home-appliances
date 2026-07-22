"use client"

import { MessageCircle } from "lucide-react"
import { businessConfig } from "@/config/business"
import { useLanguage } from "@/context/language-context"

export function WhatsAppButton() {
  const { t } = useLanguage()
  const whatsappNumber = businessConfig.contact.whatsapp.replace(/\D/g, "")
  const message = encodeURIComponent(businessConfig.whatsappMessages.general)
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`

  return (
    // Hidden on phones — the sticky bottom bar covers that case
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-8 right-8 z-40 hidden md:flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg hover:bg-[#1ebe5b] hover:shadow-xl transition-all hover:scale-110"
    >
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#25D366] opacity-30 motion-reduce:hidden" aria-hidden="true" />
      <MessageCircle className="h-6 w-6 relative" />
    </a>
  )
}
