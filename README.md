# KGN Home Appliances — Website

Landing page for KGN Home Appliances, Raipur (Chhattisgarh). Built with Next.js 16, React 19, and Tailwind CSS 4. Fully bilingual (English / हिंदी).

## Before you deploy — 2 things to update

Open `config/business.ts` and replace:

1. **Phone & WhatsApp numbers** — currently placeholders (`+917710000000`). Every call button, WhatsApp chat, and both forms use these.
2. **Social links** — Instagram/Facebook URLs.

Optionally update the Google Maps query in the same file once your store is listed on Google Maps.

## How the modules work

- **Contact form** and **Repair booking form**: validate the input, then open WhatsApp with the message prefilled — no backend or server needed. Customer taps Send and you receive it in your WhatsApp.
- **Product "Enquire" buttons**: open WhatsApp with the product name and price prefilled.
- **Language switcher**: saves the choice in the browser, so returning visitors see their language.
- **Product pages**: every product card opens its own page at `/products/<id>` with price, features, and enquiry buttons.
- **Product photos — no code needed**: save each photo as `public/products/<product-id>.jpg` (the id is in `config/products.ts`, e.g. `lg-fridge-340.jpg`). The photo appears automatically everywhere; if there is no photo yet, a clean category icon is shown. Take photos of your own stock on a phone (square photos look best) or use official images from the brand's dealer material.

## Run locally

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
```

## Deploy

Push to GitHub and import into [Vercel](https://vercel.com) — no configuration needed.
