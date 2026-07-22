// KGN Home Appliances Business Configuration
// Everything on the site (call buttons, WhatsApp chat, forms) reads from this one file.
export const businessConfig = {
  name: "KGN Home Appliance & Services",
  tagline: "Home Appliances, Repair Services & Gas Pipeline Work",

  // ⚠️ Change this to your real domain once you buy one (e.g. https://kgnbhilai.com)
  // Live site URL — ⚠️ update this when you buy a custom domain
  siteUrl: "https://kgn-home-appliances.vercel.app",

  // Contact Information
  contact: {
    phone: "+919109918786",
    phoneDisplay: "91099 18786",
    whatsapp: "+919691653698",
    whatsappDisplay: "96916 53698",
    email: "info@kgnhome.com",
    address: "In front of Shikhar Complex, Near Surya Mall, Junwani Road, Bhilai (C.G.)",
  },

  // Google Maps Location
  // The embed URL uses a plain search query, so it works without an API key.
  // Once your store is listed on Google Maps, replace the query with your exact business name.
  googleMaps: {
    url: "https://www.google.com/maps/search/?api=1&query=KGN+Home+Appliance+%26+Services+Junwani+Road+Bhilai",
    embedUrl:
      "https://www.google.com/maps?q=KGN+Home+Appliance+and+Services+Junwani+Road+Bhilai+Chhattisgarh&output=embed",
  },

  // Business Hours
  businessHours: {
    weekdays: "9:00 AM - 8:00 PM",
    saturday: "9:00 AM - 9:00 PM",
    sunday: "10:00 AM - 6:00 PM",
  },

  // Social links (⚠️ replace with your real pages, or remove from footer.tsx if unused)
  social: {
    instagram: "https://www.instagram.com/kgnhomeappliances",
    facebook: "https://www.facebook.com/kgnhomeappliances",
  },

  // WhatsApp Messages
  whatsappMessages: {
    product: "Hello KGN Home Appliance & Services, I am interested in this product:",
    priceEnquiry: "Hello KGN Home Appliance & Services, please share the price and details of:",
    repair: "Hello KGN Home Appliance & Services, I want to book an appliance repair/service.",
    general: "Hello KGN Home Appliance & Services, I have a query.",
  },
}

// Helper: builds a wa.me link with an optional prefilled message
export function getWhatsAppUrl(message?: string): string {
  const number = businessConfig.contact.whatsapp.replace(/\D/g, "")
  const text = message ? `?text=${encodeURIComponent(message)}` : ""
  return `https://wa.me/${number}${text}`
}
