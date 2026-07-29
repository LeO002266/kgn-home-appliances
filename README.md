# KGN Home Appliance & Services — Website

Website for KGN Home Appliance & Services, Junwani Road, Bhilai (Chhattisgarh). Built with Next.js 16, React 19, and Tailwind CSS 4. Fully bilingual (English / हिंदी).

## What lives where

| File | What it controls |
| --- | --- |
| `config/business.ts` | Phone, WhatsApp, address, hours, site URL, social links, Google Maps |
| `config/products.ts` | Every product, category, brand page and their SEO copy |
| `config/blog.ts` | Blog articles (bilingual) |
| `config/services.ts` | Repair & gas pipeline services shown on `/services` |
| `config/faqs.ts` | Homepage FAQ + FAQ structured data |

## How the modules work

- **Contact form** and **Repair booking form**: validate the input, then open WhatsApp with the message prefilled — no backend or server needed. Customer taps Send and you receive it in your WhatsApp.
- **Product "Enquire" buttons**: open WhatsApp with the product name prefilled. Prices are never shown on the site — customers call or WhatsApp for today's rate.
- **Language switcher**: saves the choice in the browser, so returning visitors see their language.
- **Product pages**: every product card opens its own page at `/products/<id>` with features and enquiry buttons.
- **Product photos — no code needed**: save each photo as `public/products/<product-id>.jpg` (the id is in `config/products.ts`, e.g. `havells-mixer-750.jpg`). The photo appears automatically everywhere; if there is no photo yet, a clean category icon is shown. Take photos of your own stock on a phone (square photos look best) or use official images from the brand's dealer material.

## SEO

- `sitemap.xml` and `robots.txt` are generated automatically from the config files — new products, categories, brands and blog posts appear without any manual step.
- `llms.txt` is generated the same way, for AI assistants that look for it.
- Structured data: LocalBusiness/Store, Organization, WebSite, Product, CollectionPage, Article, Service, FAQPage and BreadcrumbList.

### Optional environment variables

Set these in `.env.local` (and in Vercel → Project → Settings → Environment Variables):

```
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX          # Google Analytics 4 — analytics loads only when set
NEXT_PUBLIC_GSC_VERIFICATION=xxxxxxxx   # Google Search Console HTML-tag verification code
```

### Owner checklist (outside the code)

1. Verify the site in [Google Search Console](https://search.google.com/search-console) and submit `https://<your-domain>/sitemap.xml`.
2. Create/claim the Google Business Profile for the shop and keep name, address and phone identical to `config/business.ts`.
3. Collect real Google reviews — the testimonials in `components/reviews-section.tsx` are samples until then.

## Run locally

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
```

## Deploy

Push to GitHub and import into [Vercel](https://vercel.com), or run `npx vercel --prod` from this folder.
