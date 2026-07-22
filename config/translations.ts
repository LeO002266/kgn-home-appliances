export type Language = "en" | "hi"

export const translations: Record<Language, Record<string, string>> = {
  en: {
    "nav.home": "Home",
    "product.reviews_label": "reviews",
    "product.price_note": "Call or WhatsApp us to get today's best price and offers.",
    "product.enquire_now": "WhatsApp for Price",
    "product.call_to_order": "Call for Price",
    "product.related": "You may also like",

    "products.view_all": "View All Products",
    "catalog.title": "All Products",
    "catalog.description": "Browse our full range of home appliances. Tap a category to filter, and enquire on WhatsApp for the latest stock and offers.",
    "catalog.all": "All",
    "catalog.back_home": "Back to Home",
    "catalog.not_found_title": "Looking for something else?",
    "catalog.not_found_desc": "We stock many more models in-store. Call us and we'll check availability for you right away.",

    // Form & module strings (added)
    "contact.phone": "Phone Number",
    "contact.name_placeholder": "Your name",
    "contact.message_placeholder": "Which product or service do you need?",
    "contact.form_note": "Fill this in and we'll receive your message on WhatsApp instantly.",
    "contact.hours_weekdays": "Mon-Fri",
    "contact.error_name": "Please enter your name",
    "contact.error_phone": "Please enter a valid 10-digit mobile number",
    "contact.error_message": "Please write a short message",
    "contact.success": "Opening WhatsApp with your message. Send it to reach us!",
    "products.enquire": "Enquire",
    "products.price_on_request": "Price on Request",
    "products.call_now": "Call Now",
    "products.whatsapp": "WhatsApp",
    "repair.book_title": "Book a Repair",
    "repair.book_note": "Tell us what's wrong — we'll get back within the hour.",
    "repair.appliance": "Appliance",
    "repair.select_appliance": "Select your appliance",
    "repair.issue": "Describe the issue",
    "repair.issue_placeholder": "e.g. Fridge is not cooling properly",
    "repair.optional": "optional",
    "repair.book_cta": "Book via WhatsApp",
    "repair.success": "Opening WhatsApp with your booking. Send it to confirm!",
    "repair.error_appliance": "Please select an appliance",
    "footer.call_us": "Call Us",
    "footer.whatsapp_us": "WhatsApp Us",
    "footer.email_us": "Email Us",
    "footer.directions": "Get Directions",

    // Navigation
    "nav.categories": "Categories",
    "nav.shop": "Shop",
    "nav.why_us": "Why Us",
    "nav.reviews": "Reviews",
    "nav.repairs": "Repair & Services",
    "nav.contact": "Contact",
    "nav.shop_now": "Shop Now",

    // Hero Section
    "hero.badge": "Trusted by thousands of homes",
    "hero.title": "Quality Home Appliances & Repair Services — All in One Place",
    "hero.description":
      "Shop premium home appliances, kitchen essentials, and household products. Get reliable appliance repair and servicing from experienced technicians.",
    "hero.cta_shop": "Shop Products",
    "hero.cta_repair": "Book a Repair",
    "hero.cta_browse": "Browse Categories",
    "hero.free_delivery": "Free delivery in Bhilai",
    "hero.warranty": "1-year warranty on all appliances",
    "hero.call_for_price": "Call for best price",
    "hero.rating_label": "customer rating",
    "hero.gas_pipeline": "Gas pipeline work done",

    // Categories
    "categories.title": "Shop by Category",
    "categories.subtitle": "Everything your home needs in one place",
    "categories.description": "From kitchen appliances to home essentials, we have every category covered.",
    "categories.view_all": "View all products",
    "categories.explore": "Explore the full collection",

    // Category Names
    "category.refrigerators": "Refrigerators",
    "category.washing": "Washing Machines",
    "category.microwaves": "Microwave Ovens",
    "category.cookers": "Pressure Cookers",
    "category.fans": "Fans & Coolers",
    "category.irons": "Irons & Steamers",
    "category.mixers": "Mixer Grinders",
    "category.gas_stoves": "Gas Stoves",
    "category.purifiers": "Water Purifiers",
    "category.geysers": "Geysers & Heaters",
    "category.kitchenware": "Kitchenware",

    // Featured Products
    "products.title": "Featured Products",
    "products.subtitle": "Most Popular Appliances",
    "products.description": "Handpicked appliances with quality you can trust. Call or WhatsApp us for today's best price.",
    "products.add_to_cart": "Add to Cart",

    // Repair Services Section
    "repair.title": "Appliance Repair & Services",
    "repair.subtitle": "Professional technicians at your service",
    "repair.description":
      "Expert repair and maintenance for all major home appliances. Quick service, fair pricing, and genuine spare parts.",
    "repair.cta": "Book a Repair",
    "repair.whatsapp": "Chat on WhatsApp",
    "repair.emergency": "24/7 Emergency Service Available",

    // Why Choose Us
    "why.title": "Why Choose KGN Home Appliances",
    "why.subtitle": "Your trusted home appliance partner",
    "why.feature1_title": "Genuine Products",
    "why.feature1_desc": "100% authentic appliances from authorized distributors with official warranty.",
    "why.feature2_title": "Expert Technicians",
    "why.feature2_desc": "Skilled and trained service technicians with years of experience.",
    "why.feature3_title": "Fair Pricing",
    "why.feature3_desc": "Competitive prices and transparent pricing with no hidden charges.",
    "why.feature4_title": "Quick Service",
    "why.feature4_desc": "Fast delivery and same-day repair service in most cases.",

    // Reviews
    "reviews.title": "Customer Reviews",
    "reviews.subtitle": "What our customers say",

    // Contact Section
    "contact.title": "Contact & Location",
    "contact.subtitle": "We are here to help",
    "contact.description": "Have a question about a product or need repair service? Reach out or visit our store.",
    "contact.visit": "Visit Our Store",
    "contact.call": "Call Us",
    "contact.whatsapp": "WhatsApp",
    "contact.email": "Email Us",
    "contact.hours": "Store Hours",
    "contact.directions": "Get Directions",
    "contact.call_now": "Call Now",
    "contact.message_form": "Send us a message",
    "contact.name": "Name",
    "contact.email_placeholder": "your@email.com",
    "contact.message": "Message",
    "contact.send": "Send Message",

    // Footer
    "footer.about": "KGN Home Appliance & Services is your one-stop shop for quality home appliances, kitchen essentials, appliance repair, and gas pipeline work in Bhilai.",
    "footer.shop": "Shop",
    "footer.company": "Company",
    "footer.support": "Support",
    "footer.about_us": "About Us",
    "footer.careers": "Careers",
    "footer.blog": "Blog",
    "footer.help": "Help Center",
    "footer.shipping": "Shipping & Returns",
    "footer.track": "Track Order",
    "footer.faq": "FAQ",
    "footer.privacy": "Privacy Policy",
    "footer.terms": "Terms of Service",
    "footer.copyright": "All rights reserved",

    // Common
    "common.price_inr": "₹",
    "common.free": "Free",
  },
  hi: {
    "nav.home": "होम",
    "product.reviews_label": "रिव्यूज़",
    "product.price_note": "आज की बेस्ट कीमत और ऑफर जानने के लिए कॉल या WhatsApp करें।",
    "product.enquire_now": "WhatsApp पर कीमत पूछें",
    "product.call_to_order": "कीमत के लिए कॉल करें",
    "product.related": "आपको ये भी पसंद आ सकते हैं",

    "products.view_all": "सभी प्रोडक्ट देखें",
    "catalog.title": "सभी प्रोडक्ट",
    "catalog.description": "हमारे सभी होम अप्लायंसेज देखें। कैटेगरी पर टैप करके फिल्टर करें और लेटेस्ट स्टॉक के लिए WhatsApp पर पूछें।",
    "catalog.all": "सभी",
    "catalog.back_home": "होम पर वापस",
    "catalog.not_found_title": "कुछ और चाहिए?",
    "catalog.not_found_desc": "दुकान में और भी कई मॉडल उपलब्ध हैं। हमें कॉल करें, हम तुरंत उपलब्धता बताएंगे।",

    // Form & module strings (added)
    "contact.phone": "फ़ोन नंबर",
    "contact.name_placeholder": "आपका नाम",
    "contact.message_placeholder": "आपको कौन सा प्रोडक्ट या सर्विस चाहिए?",
    "contact.form_note": "यह भरें और आपका संदेश तुरंत WhatsApp पर हम तक पहुंचेगा।",
    "contact.hours_weekdays": "सोम-शुक्र",
    "contact.error_name": "कृपया अपना नाम लिखें",
    "contact.error_phone": "कृपया सही 10 अंकों का मोबाइल नंबर लिखें",
    "contact.error_message": "कृपया एक छोटा संदेश लिखें",
    "contact.success": "WhatsApp खुल रहा है। संदेश भेजकर हम तक पहुंचाएं!",
    "products.enquire": "पूछें",
    "products.price_on_request": "कीमत के लिए संपर्क करें",
    "products.call_now": "कॉल करें",
    "products.whatsapp": "WhatsApp",
    "repair.book_title": "रिपेयर बुक करें",
    "repair.book_note": "हमें समस्या बताएं — हम जल्द संपर्क करेंगे।",
    "repair.appliance": "अप्लायंस",
    "repair.select_appliance": "अपना अप्लायंस चुनें",
    "repair.issue": "समस्या बताएं",
    "repair.issue_placeholder": "जैसे: फ्रिज ठीक से ठंडा नहीं कर रहा",
    "repair.optional": "वैकल्पिक",
    "repair.book_cta": "WhatsApp से बुक करें",
    "repair.success": "WhatsApp खुल रहा है। बुकिंग कन्फर्म करने के लिए संदेश भेजें!",
    "repair.error_appliance": "कृपया अप्लायंस चुनें",
    "footer.call_us": "कॉल करें",
    "footer.whatsapp_us": "WhatsApp करें",
    "footer.email_us": "ईमेल करें",
    "footer.directions": "रास्ता देखें",

    // Navigation
    "nav.categories": "श्रेणियाँ",
    "nav.shop": "शॉप",
    "nav.why_us": "हमें क्यों चुनें",
    "nav.reviews": "ग्राहक समीक्षा",
    "nav.repairs": "रिपेयर सेवाएँ",
    "nav.contact": "संपर्क",
    "nav.shop_now": "अभी खरीदें",

    // Hero Section
    "hero.badge": "हजारों घरों द्वारा विश्वसनीय",
    "hero.title": "गुणवत्ता वाले होम अप्लायंसेज़ और रिपेयर सेवाएँ — एक ही जगह",
    "hero.description":
      "प्रीमियम होम अप्लायंसेज़, किचन सामान और घरेलू उत्पाद खरीदें। अनुभवी तकनीशियनों से भरोसेमंद अप्लायंस रिपेयर और सर्विसिंग प्राप्त करें।",
    "hero.cta_shop": "उत्पाद खरीदें",
    "hero.cta_repair": "रिपेयर बुक करें",
    "hero.cta_browse": "श्रेणियाँ देखें",
    "hero.free_delivery": "भिलाई में मुफ्त डिलीवरी",
    "hero.warranty": "सभी अप्लायंसेज पर 1 साल की वारंटी",
    "hero.call_for_price": "बेस्ट कीमत के लिए कॉल करें",
    "hero.rating_label": "ग्राहक रेटिंग",
    "hero.gas_pipeline": "गैस पाइपलाइन का काम किया जाता है",

    // Categories
    "categories.title": "श्रेणी के अनुसार खरीदें",
    "categories.subtitle": "आपके घर की हर ज़रूरत एक जगह",
    "categories.description": "किचन अप्लायंसेज से लेकर घरेलू सामान तक, हमारे पास हर चीज़ है।",
    "categories.view_all": "सभी उत्पाद देखें",
    "categories.explore": "पूरा संग्रह देखें",

    // Category Names
    "category.refrigerators": "रेफ्रिजरेटर",
    "category.washing": "वाशिंग मशीन",
    "category.microwaves": "माइक्रोवेव ओवन",
    "category.cookers": "प्रेशर कुकर",
    "category.fans": "पंखे और कूलर",
    "category.irons": "इस्त्री और स्टीमर",
    "category.mixers": "मिक्सर ग्राइंडर",
    "category.gas_stoves": "गैस चूल्हा",
    "category.purifiers": "वॉटर प्यूरीफायर",
    "category.geysers": "गीज़र और हीटर",
    "category.kitchenware": "बर्तन और किचनवेयर",

    // Featured Products
    "products.title": "पॉपुलर उत्पाद",
    "products.subtitle": "सबसे ज्यादा बिकने वाले अप्लायंसेज",
    "products.description": "हाथ से चुने हुए अप्लायंसेज जिन पर आप भरोसा कर सकते हैं। आज की बेस्ट कीमत के लिए कॉल या WhatsApp करें।",
    "products.add_to_cart": "कार्ट में जोड़ें",

    // Repair Services Section
    "repair.title": "अप्लायंस रिपेयर सेवाएँ",
    "repair.subtitle": "पेशेदार तकनीशियन आपकी सेवा में",
    "repair.description":
      "सभी प्रमुख होम अप्लायंसेज के लिए विशेषज्ञ मरम्मत और रखरखाव। तेज़ सेवा, सही कीमत और असली पुर्जे।",
    "repair.cta": "रिपेयर बुक करें",
    "repair.whatsapp": "व्हाट्सअप पर बात करें",
    "repair.emergency": "24/7 इमर्जेंसी सेवा उपलब्ध",

    // Why Choose Us
    "why.title": "KGN होम अप्लायंसेज क्यों चुनें",
    "why.subtitle": "आपका विश्वसनीय होम अप्लायंस पार्टनर",
    "why.feature1_title": "असली उत्पाद",
    "why.feature1_desc": "100% असली अप्लायंसेज अधिकृत डिस्ट्रीब्यूटरों से आधिकारिक वारंटी के साथ।",
    "why.feature2_title": "विशेषज्ञ तकनीशियन",
    "why.feature2_desc": "कुशल और प्रशिक्षित सेवा तकनीशियन वर्षों के अनुभव के साथ।",
    "why.feature3_title": "सही कीमत",
    "why.feature3_desc": "प्रतिस्पर्धी कीमतें और पारदर्शी मूल्य निर्धारण बिना कोई छिपी हुई लागत के।",
    "why.feature4_title": "तेज़ सेवा",
    "why.feature4_desc": "तेज़ डिलीवरी और ज्यादातर मामलों में एक ही दिन की रिपेयर सेवा।",

    // Reviews
    "reviews.title": "ग्राहक समीक्षा",
    "reviews.subtitle": "हमारे ग्राहक क्या कहते हैं",

    // Contact Section
    "contact.title": "संपर्क और स्थान",
    "contact.subtitle": "हम आपकी मदद के लिए यहां हैं",
    "contact.description": "किसी भी उत्पाद के बारे में सवाल या रिपेयर सेवा चाहिए? हमसे संपर्क करें या हमारी दुकान पर आएं।",
    "contact.visit": "हमारी दुकान पर आएं",
    "contact.call": "कॉल करें",
    "contact.whatsapp": "व्हाट्सअप",
    "contact.email": "ईमेल करें",
    "contact.hours": "दुकान के समय",
    "contact.directions": "दिशा प्राप्त करें",
    "contact.call_now": "अभी कॉल करें",
    "contact.message_form": "हमें संदेश भेजें",
    "contact.name": "नाम",
    "contact.email_placeholder": "आपका@ईमेल.com",
    "contact.message": "संदेश",
    "contact.send": "संदेश भेजें",

    // Footer
    "footer.about":
      "KGN होम अप्लायंस एंड सर्विसेज भिलाई में गुणवत्ता वाले होम अप्लायंसेज, किचन सामान, रिपेयर सेवाओं और गैस पाइपलाइन के काम के लिए आपकी वन-स्टॉप दुकान है।",
    "footer.shop": "शॉप",
    "footer.company": "कंपनी",
    "footer.support": "समर्थन",
    "footer.about_us": "हमारे बारे में",
    "footer.careers": "करियर",
    "footer.blog": "ब्लॉग",
    "footer.help": "मदद केंद्र",
    "footer.shipping": "शिपिंग और रिटर्न",
    "footer.track": "ऑर्डर ट्रैक करें",
    "footer.faq": "सामान्य प्रश्न",
    "footer.privacy": "गोपनीयता नीति",
    "footer.terms": "सेवा की शर्तें",
    "footer.copyright": "सर्वाधिकार सुरक्षित",

    // Common
    "common.price_inr": "₹",
    "common.free": "मुफ्त",
  },
}

export function getTranslation(language: Language, key: string, fallback = ""): string {
  return translations[language][key] || fallback
}
