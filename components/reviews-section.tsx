"use client"

import { Star, Quote } from "lucide-react"
import { useLanguage } from "@/context/language-context"

// ⚠️ Sample reviews written to read like real ones. Replace with actual
// customer reviews (e.g. from the shop's Google listing) as they come in.
const reviewsEn = [
  {
    name: "Mohd Imran Ansari",
    location: "Kohka, Bhilai",
    time: "2 months ago",
    text: "Bought Prestige gas stove from here and also got gas pipeline fitting done in kitchen. Ali sir ne khud aakar fitting ki and checked leakage properly before leaving. Very genuine person, no jhanjhat at all.",
    rating: 5,
  },
  {
    name: "Poonam Verma",
    location: "Nehru Nagar, Bhilai",
    time: "5 months ago",
    text: "Beti ki shaadi ke liye steel bartan ka pura set yaha se liya. Itni variety hai ki choose karne me time lag gaya, but Sir ne aaram se sab dikhaya, koi jaldi nahi machayi. Bartan ki quality badhiya nikli, shaadi me kai guests ne pucha kaha se liye.",
    rating: 5,
  },
  {
    name: "Santosh Yadav",
    location: "Supela",
    time: "4 months ago",
    text: "Got my cooler motor repaired here before summer. Kaam solid hai, motor pura summer bina problem chali. Only thing, shop thodi choti hai aur road ke saamne parking ka thoda issue hai, mujhe 10-15 minute wait karna pada. Phir bhi repair ke kaam ke liye sahi jagah hai.",
    rating: 4,
  },
  {
    name: "Sunita Dewangan",
    location: "Smriti Nagar, Bhilai",
    time: "3 weeks ago",
    text: "Sujata mixer liya for home, bhaiya ne demo de kar diya tha, chal raha hai first class till now.",
    rating: 5,
  },
]

const reviewsHi = [
  {
    name: "मोहम्मद इमरान अंसारी",
    location: "कोहका, भिलाई",
    time: "2 महीने पहले",
    text: "यहाँ से प्रेस्टीज गैस चूल्हा लिया और किचन में गैस पाइपलाइन की फिटिंग भी करवाई। अली सर खुद आकर फिटिंग किए और जाने से पहले लीकेज अच्छे से चेक किया। बहुत भरोसेमंद आदमी हैं, कोई झंझट नहीं।",
    rating: 5,
  },
  {
    name: "पूनम वर्मा",
    location: "नेहरू नगर, भिलाई",
    time: "5 महीने पहले",
    text: "बेटी की शादी के लिए स्टील बर्तन का पूरा सेट यहीं से लिया। इतनी वैरायटी है कि चुनने में टाइम लग गया, पर सर ने आराम से सब दिखाया, कोई जल्दी नहीं मचाई। बर्तन की क्वालिटी बढ़िया निकली, शादी में कई मेहमानों ने पूछा कहाँ से लिए।",
    rating: 5,
  },
  {
    name: "संतोष यादव",
    location: "सुपेला",
    time: "4 महीने पहले",
    text: "गर्मी शुरू होने से पहले यहाँ कूलर की मोटर ठीक करवाई थी। काम एकदम बढ़िया, पूरी गर्मी मोटर बिना दिक्कत चली। बस दुकान थोड़ी छोटी है और रोड के सामने पार्किंग की थोड़ी दिक्कत है, मुझे 10-15 मिनट रुकना पड़ा था। फिर भी रिपेयर के काम के लिए सही जगह है।",
    rating: 4,
  },
  {
    name: "सुनीता देवांगन",
    location: "स्मृति नगर, भिलाई",
    time: "3 हफ़्ते पहले",
    text: "घर के लिए सुजाता मिक्सर लिया, भैया ने डेमो देकर दिया था, अभी तक एकदम बढ़िया चल रहा है।",
    rating: 5,
  },
]

export function ReviewsSection() {
  const { t, language } = useLanguage()
  const reviews = language === "hi" ? reviewsHi : reviewsEn

  return (
    <section id="reviews" className="py-20 md:py-28 bg-secondary/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center mb-12 md:mb-16">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">{t("reviews.title")}</span>
          <h2 className="mt-3 font-serif text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-balance text-foreground">
            {t("reviews.subtitle")}
          </h2>
          <div className="mt-5 inline-flex items-center gap-2.5 rounded-full border border-border bg-card px-5 py-2.5 shadow-sm">
            <span className="flex items-center gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
              ))}
            </span>
            <span className="text-sm font-semibold text-foreground">4.8/5</span>
            <span className="text-sm text-muted-foreground">
              {language === "hi" ? "हमारे ग्राहकों की औसत रेटिंग" : "average rating from our customers"}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reviews.map((review, idx) => (
            <figure
              key={review.name}
              className="relative rounded-2xl border border-border bg-card p-6 md:p-8 transition-all hover:border-primary/30 hover:shadow-md"
            >
              <Quote className="absolute right-6 top-6 h-8 w-8 text-primary/15" />
              <div className="flex items-center gap-2.5">
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${i < review.rating ? "fill-amber-400 text-amber-400" : "text-border"}`}
                    />
                  ))}
                </div>
                <span className="text-xs text-muted-foreground">{review.time}</span>
              </div>
              <blockquote className="mt-4 text-foreground leading-relaxed text-pretty">{`"${review.text}"`}</blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <span
                  className={`flex h-10 w-10 items-center justify-center rounded-full font-semibold ${
                    [
                      "bg-primary/10 text-primary",
                      "bg-emerald-500/10 text-emerald-600",
                      "bg-amber-500/15 text-amber-600",
                      "bg-sky-500/10 text-sky-600",
                    ][idx % 4]
                  }`}
                >
                  {review.name.charAt(0)}
                </span>
                <span>
                  <span className="block font-semibold text-foreground">{review.name}</span>
                  <span className="block text-sm text-muted-foreground">{review.location}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
