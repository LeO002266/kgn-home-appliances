"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, ShoppingBag, Phone } from "lucide-react"
import { useLanguage } from "@/context/language-context"
import { businessConfig } from "@/config/business"
import { LanguageSwitcher } from "./language-switcher"
import { LogoMark } from "./logo"
import { useScrollSpy } from "@/hooks/use-scroll-spy"
import { cn } from "@/lib/utils"

const homeSectionIds = ["categories", "featured", "repairs", "why-us", "reviews", "contact"]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const { t } = useLanguage()
  const pathname = usePathname()
  const isHome = pathname === "/"
  const activeSection = useScrollSpy(isHome ? homeSectionIds : [])

  const navLinks = [
    { href: "/products", label: t("nav.shop"), sectionId: null, match: "/products" },
    { href: "/services", label: t("nav.services"), sectionId: null, match: "/services" },
    { href: "/blog", label: t("nav.blog"), sectionId: null, match: "/blog" },
    { href: "/#repairs", label: t("nav.repairs"), sectionId: "repairs", match: null },
    { href: "/#reviews", label: t("nav.reviews"), sectionId: "reviews", match: null },
    { href: "/#contact", label: t("nav.contact"), sectionId: "contact", match: null },
  ]

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  // Section links light up via scroll-spy on the homepage; route links light up
  // whenever the current path sits under them.
  const isLinkActive = (link: { sectionId: string | null; match: string | null }) =>
    link.match ? pathname.startsWith(link.match) : Boolean(isHome && activeSection === link.sectionId)

  const linkClass = (link: { sectionId: string | null; match: string | null }, onMobile = false) => {
    const isActive = isLinkActive(link)

    return cn(
      onMobile
        ? "rounded-lg px-3 py-2.5 text-base font-medium transition-colors"
        : "relative py-1 text-sm font-medium transition-colors",
      isActive
        ? onMobile
          ? "bg-primary/10 text-primary"
          : "text-primary after:absolute after:-bottom-[1.35rem] after:left-0 after:h-[3px] after:w-full after:rounded-t-full after:bg-primary"
        : onMobile
          ? "text-foreground hover:bg-secondary"
          : "text-muted-foreground hover:text-foreground",
    )
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border/70 shadow-[0_1px_2px_rgb(0_0_0/0.03)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between gap-4 h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 min-w-0 shrink-0" onClick={() => setIsOpen(false)}>
            <LogoMark className="h-9 w-9 shrink-0" />
            <span className="font-serif text-xl font-semibold tracking-tight text-foreground">KGN</span>
          </Link>

          {/* Center nav — desktop */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className={linkClass(link)}>
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right actions */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <a
              href={`tel:${businessConfig.contact.phone}`}
              className="hidden xl:inline-flex items-center gap-2 text-sm font-semibold text-foreground hover:text-primary transition-colors"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Phone className="h-4 w-4" />
              </span>
              {businessConfig.contact.phoneDisplay}
            </a>
            <LanguageSwitcher />
            <Link
              href="/products"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors active:scale-[0.98]"
            >
              <ShoppingBag className="h-4 w-4" />
              {t("nav.shop_now")}
            </Link>
          </div>

          {/* Phone & tablet: switcher + hamburger */}
          <div className="flex lg:hidden items-center gap-1.5">
            <LanguageSwitcher />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex h-10 w-10 items-center justify-center rounded-full text-foreground hover:bg-secondary transition-colors"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {isOpen && (
          <nav className="lg:hidden py-3 border-t border-border max-h-[calc(100dvh-4rem)] overflow-y-auto">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={linkClass(link, true)}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="mt-3 grid grid-cols-2 gap-2">
                <a
                  href={`tel:${businessConfig.contact.phone}`}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-4 py-3 text-sm font-semibold text-foreground"
                  onClick={() => setIsOpen(false)}
                >
                  <Phone className="h-4 w-4 text-primary" />
                  {t("contact.call_now")}
                </a>
                <Link
                  href="/products"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground active:scale-[0.98]"
                  onClick={() => setIsOpen(false)}
                >
                  <ShoppingBag className="h-4 w-4" />
                  {t("nav.shop_now")}
                </Link>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
