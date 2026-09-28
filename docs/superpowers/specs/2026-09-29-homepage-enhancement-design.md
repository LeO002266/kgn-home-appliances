# Homepage Enhancement Design Document
**Project:** KGN Home Appliances Website  
**Date:** 2026-09-29  
**Direction:** Modern Hybrid Premium Showroom  
**Constraint:** Do not push to git until explicitly requested by the user.

---

## 1. Objectives & Overview
Upgrade the homepage (`app/page.tsx` and related components) from a static listing to a modern, high-converting retail showroom.
The improved homepage will:
1. Feature our newly enhanced studio product photography front and center.
2. Provide smooth, interactive category filtering on the featured products section with zero page reloads.
3. Elevate local trust factors (Junwani Road location, same-day repair service, free doorstep delivery across Bhilai-Durg, genuine spares).
4. Streamline mobile conversion via prominent 1-tap WhatsApp and phone consultation actions.

---

## 2. Component Architecture & Changes

### 2.1 Hero Section (`components/hero.tsx` & `components/hero-visual.tsx`)
- **Headline & Messaging:**
  - Modern dual-tone typography with accent gradient.
  - Bilingual headline honoring Bhilai location and store specialty.
  - Value pill: *"Bhilai's Complete Home & Kitchen Destination | Sales & Repair"*.
- **Quick-Action Buttons:**
  - `Explore Products` button (smooth scrolls directly to `#featured` products section).
  - `Book Repair & Service` button (smooth scrolls directly to `#repairs`).
  - `Call Store Now` button with live phone number (`070007 05581`).
- **Trust Strip Micro-Cards:**
  - 4 clean badges: *Storefront on Junwani Road*, *Free Delivery across Bhilai-Durg*, *1-Year Brand Warranty*, *Doorstep Gas Stove & Appliance Repair*.
- **Hero Visual Enhancement:**
  - Floating trust indicators with soft animations and real product badges.

### 2.2 Interactive Featured Showcase (`components/featured-products.tsx`)
- **Category Filter Tabs:**
  - Adds interactive client-side filter tabs:
    1. **All Featured** (14 items)
    2. **Kitchen Appliances** (`prestige-stove-3b`, `surya-glass-stove-2b`, `peacock-glass-stove-3b`, `kitchen-chimney`, `otg-oven`, `electric-rice-cooker`, `havells-mixer-750`)
    3. **Fans & Coolers** (`orient-fan-1200`, `bajaj-fan-400`, `symphony-cooler-45`)
    4. **Water Purifiers & Geysers** (`starx-royal-ro-purifier`, `sky-purolex-gold-purifier`, `bajaj-geyser-15l`)
    5. **Cookware & Everyday** (`copper-water-bottle-1l`, `insulated-hotpot`, `cloth-drying-stand`, `aluminum-step-ladder`)
- **Product Card Polish (`components/product-card.tsx`):**
  - Smooth hover scaling and soft shadow lift.
  - Badges rendered with high-contrast pill designs (`Pure Copper`, `Touch Panel`, `Food Grade`, `Genuine Spares`, `Best Seller`, `100% Copper`).
  - Two distinct CTA buttons per card:
    - 📞 `Call Now` (direct `tel:` link)
    - 💬 `WhatsApp` (pre-filled with `"Hello KGN, I would like to inquire about [Product Name]. Please share price and delivery details."`)

### 2.3 Specialty Highlight & Local Proof (`components/specialty-highlight.tsx`)
- **Store Capabilities Matrix:**
  - **New Appliances**: Authorized stock from Bajaj, Prestige, Havells, Philips, Orient, Crompton, Surya, Hawkins, Symphony.
  - **Genuine Spares**: Burners, valves, mixer couplers, jar blades, geyser elements, RO spun filters.
  - **Repairs & Pipeline**: Certified technicians for gas pipeline installation, burner cleaning, and geyser/RO service.

---

## 3. SEO, Performance & Compatibility
- **Zero Layout Shift (CLS):** Fixed image aspect ratios (1:1 square) using Next.js `<Image fill>`.
- **Structured Data:** Preserves existing Schema.org `Store`, `HomeAndConstructionBusiness`, and `FAQPage` schemas in `app/page.tsx`.
- **Bilingual Context:** Full support for English and Hindi language switching across all new buttons, tabs, and badges.
- **Git Push Policy:** Kept in local repository; no git push operations until user approval.

---

## 4. Verification & Testing
- Validate with `npx tsc --noEmit` (0 errors).
- Validate with `npm run lint` (0 errors).
- Test on local dev server (`http://localhost:3000`) across desktop and mobile viewports.
