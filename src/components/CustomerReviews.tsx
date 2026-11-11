'use client';

import { useState, useRef } from 'react';
import {
  Star,
  MapPin,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  ShieldCheck,
  Maximize2,
  X,
  Compass,
  Calendar,
  Phone,
  MessageSquare
} from 'lucide-react';

interface GeotaggedInstallation {
  id: string;
  nameHi: string;
  nameEn: string;
  locationHi: string;
  locationEn: string;
  coordinates: string;
  date: string;
  systemHi: string;
  systemEn: string;
  image: string;
  reviewHi: string;
  reviewEn: string;
  savings: string;
  subsidy: string;
}

const GEOTAGGED_INSTALLATIONS: GeotaggedInstallation[] = [
  {
    id: 'shyam-nagar',
    nameHi: 'के. जी. कौशिक',
    nameEn: 'K G Kaushik Residence',
    locationHi: 'एनएच 48, श्याम नगर, इंदिरा कॉलोनी, बहरोड़',
    locationEn: 'NH 48, Shyam Nagar, Indira Colony, Behror, RJ',
    coordinates: 'Lat 27.889437° N, Long 76.294294° E',
    date: '21/10/2026',
    systemHi: '5 kW टाटा पावर सोलर (टाटा एन-टाइप टॉपकॉन)',
    systemEn: '5 kW Tata Power Solar (N-Type TOPCon)',
    image: '/installations/installation-1-shyam-nagar.jpg',
    reviewHi:
      'दीवान सोलर से 5kW का टाटा सोलर सिस्टम लगवाया। बहरोड़ में टाटा के ब्रांड पर हमें सबसे ज्यादा भरोसा था। टीम ने 20 दिनों के अंदर जेवीवीएनएल नेट-मीटरिंग पूरी करा दी। हमारा बिजली का बिल ₹14,000 से घटकर सिर्फ ₹350 रह गया और ₹95,000 की सरकारी सब्सिडी सीधे बैंक खाते में आ गई।',
    reviewEn:
      'We installed a 5kW Tata Power Solar system with Deewan Solar. Tata has the highest brand trust in Behror. Their team completed JVVNL net-metering in under 20 days. Our power bill dropped from ₹14,000 to just ₹350, and the ₹95,000 government subsidy was credited directly to our bank account.',
    savings: '₹14,000 → ₹350 / mo',
    subsidy: '₹95,000 DBT Credited'
  },
  {
    id: 'khapariya',
    nameHi: 'विक्रम यादव',
    nameEn: 'Vikram Yadav',
    locationHi: 'खापरिया, बहरोड़ (नीमराना रीको के पास)',
    locationEn: 'Khapariya, Behror (Near Neemrana RIICO), RJ',
    coordinates: 'Lat 27.888262° N, Long 76.276305° E',
    date: '16/10/2026',
    systemHi: '3 kW अदाणी सोलर (बाइफेशियल डुअल-ग्लास)',
    systemEn: '3 kW Adani Solar (Bifacial Dual-Glass)',
    image: '/installations/installation-2-khapariya.jpg',
    reviewHi:
      'अदाणी सोलर के दोनों तरफ से बिजली बनाने वाले (बाइफेशियल) पैनल बहुत ही बढ़िया काम कर रहे हैं। एसबीआई (SBI) से सोलर लोन भी दीवान सोलर ने बिना किसी परेशानी के करवा दिया। बहुत ही ईमानदार और भरोसेमंद इंजीनियरिंग सेवा।',
    reviewEn:
      'The Adani Solar bifacial dual-glass modules are performing exceptionally well. Deewan Solar also arranged our SBI solar loan seamlessly with zero hassle. Extremely honest and professional engineering team.',
    savings: '₹8,500 → ₹0 / mo',
    subsidy: '₹78,000 DBT Credited'
  },
  {
    id: 'jaitpura',
    nameHi: 'सुभाष चंद गुप्ता',
    nameEn: 'Subhash Chand Gupta',
    locationHi: 'जैतपुरा मोहल्ला, बहरोड़',
    locationEn: 'Jaitpura Mahalla, Behror, RJ',
    coordinates: 'Lat 27.889573° N, Long 76.280910° E',
    date: '07/10/2026',
    systemHi: '3 kW टाटा पावर सोलर (एलिवेटेड परगोला स्ट्रक्चर)',
    systemEn: '3 kW Tata Power Solar (Elevated Pergola)',
    image: '/installations/installation-3-jaitpura.jpg',
    reviewHi:
      'दीवान जी की दुकान से हम 25 सालों से इलेक्ट्रॉनिक्स सामान लेते आ रहे हैं। जब घर पर सोलर लगवाना था, तो हमने केवल दीवान सोलर को चुना। 8-फीट ऊंचे स्ट्रक्चर से छत की पूरी जगह खुली है और दिनभर एसी बिल्कुल मुफ्त चलता है।',
    reviewEn:
      'Our family has been buying appliances from Deewan for over 25 years. When it was time for rooftop solar, we trusted only Deewan Solar. With Tata panels and Luminous inverter, both our 1.5-ton ACs run completely free all day long.',
    savings: '₹9,200 → ₹0 / mo',
    subsidy: '₹78,000 DBT Credited'
  },
  {
    id: 'behror-rural',
    nameHi: 'चौधरी हरीश चंद',
    nameEn: 'Chaudhary Harish Chand',
    locationHi: 'बहरोड़ ग्रामीण क्षेत्र',
    locationEn: 'Behror Rural Farmhouse, Behror, RJ',
    coordinates: 'Lat 27.903219° N, Long 76.278229° E',
    date: '24/08/2026',
    systemHi: '4 kW ऑन-ग्रिड सोलर प्लांट (हेवी जीआई फ्रेम)',
    systemEn: '4 kW Heavy-Duty Galvanized GI Rooftop Plant',
    image: '/installations/installation-4-behror-rural.jpg',
    reviewHi:
      'गांव में दिन के समय ट्यूबवेल और घर के पंखे-कूलर चलाने के लिए हमने यह सोलर लगवाया। आंधी-तूफान में भी इसका भारी जीआई स्ट्रक्चर पूरी तरह मजबूत रहा। दीवान सोलर की टीम ने मात्र 1 दिन में पूरी फिटिंग कर दी।',
    reviewEn:
      'Installed for our rural home in Behror to power pumps and home cooling all day. The heavy galvanized steel frame has endured severe dust storms without budging. Fast, meticulous installation in a single day.',
    savings: '₹11,000 → ₹400 / mo',
    subsidy: '₹78,000 DBT Credited'
  },
  {
    id: 'shakti-vihar',
    nameHi: 'श्री दयाल शर्मा (पटेल नगर)',
    nameEn: 'Shri Dayal Sharma',
    locationHi: 'पटेल नगर, शक्ति विहार कॉलोनी, बहरोड़',
    locationEn: 'Patel Nagar, Shakti Vihar Colony, Behror, RJ',
    coordinates: 'Lat 27.893898° N, Long 76.291264° E',
    date: '06/08/2026',
    systemHi: '3.5 kW टाटा पावर सोलर हाई-यील्ड प्लांट',
    systemEn: '3.5 kW Tata Power Solar High-Yield System',
    image: '/installations/installation-5-shakti-vihar.jpg',
    reviewHi:
      'शक्ति विहार में हमारी सुंदर टाइल्स वाली छत पर दीवान सोलर ने बिना टाइल तोड़े केमिकल एंकरिंग से सोलर लगाया। छत पर धूप से बचाव भी हो गया और बिजली का बिल भी शून्य हो गया। बहुत ही साफ-सुथरा और उच्च-स्तरीय काम।',
    reviewEn:
      'Installed on our tiled terrace in Shakti Vihar using specialized chemical anchor fasteners with zero tile damage. Provides terrace shade while slashing our electricity bill to zero.',
    savings: '₹10,500 → ₹200 / mo',
    subsidy: '₹78,000 DBT Credited'
  }
];

export default function CustomerReviews() {
  const [lang, setLang] = useState<'hi' | 'en'>('hi');
  const [activeModalImage, setActiveModalImage] = useState<GeotaggedInstallation | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  const googleProfileUrl =
    'https://www.google.com/search?kgmid=%2Fg%2F11csc74k_5&hl=en-IN&q=Deewan%20Enterprises%20(%20solar%20Agency)&shem=epsd1%2Cesd2e%2Cltae%2Crimspwouoe%2Csdpie&shndl=30&source=sh%2Fx%2Floc%2Fosrp%2Fm5%2F1&kgs=7b069aef54c490b5';

  const scroll = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const scrollAmount = direction === 'left' ? -420 : 420;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full flex flex-col gap-8">
      
      {/* 1. Header with Language Selector & Navigation Buttons */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-5">
        <div>
          <div className="flex items-center gap-2.5 flex-wrap mb-2">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#515154]">
              {lang === 'hi' ? 'सत्यापित जियोटैग रूफटॉप इंस्टॉलेशन' : 'Verified Geotagged Rooftop Installations'}
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase px-3 py-1 rounded-full bg-[#f5f5f7] text-[#1d1d1f] border border-[#d2d2d7]">
              <Compass className="h-3.5 w-3.5 text-[#1d1d1f]" />
              <span>Behror, Rajasthan Circle</span>
            </span>
          </div>

          <h3 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-[#1d1d1f]">
            {lang === 'hi' ? 'बहरोड़ और आसपास के संतुष्ट ग्राहकों की छतें' : 'Real Installations Across Behror, Rajasthan'}
          </h3>
          <p className="text-sm sm:text-base text-[#424245] mt-1.5 max-w-2xl leading-relaxed">
            {lang === 'hi'
              ? 'जीपीएस मैप कैमरा द्वारा प्रमाणित वास्तविक सोलर इंस्टॉलेशन। कोई बनावटी फोटो नहीं — सीधे ग्राहकों की छतों से वास्तविक परिणाम।'
              : 'Authentic GPS Map Camera stamped installations with verified coordinates. Real families, real rooftop plants, and zero electricity bills.'}
          </p>
        </div>

        {/* Controls: Prev/Next Buttons + Language Switcher */}
        <div className="flex items-center gap-3 self-start md:self-end">
          {/* Language Switcher Pill */}
          <div className="inline-flex items-center gap-1 p-1 bg-[#f5f5f7] rounded-full border border-[#d2d2d7]">
            <button
              type="button"
              onClick={() => setLang('hi')}
              className={`px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                lang === 'hi'
                  ? 'bg-white text-[#1d1d1f] shadow-2xs border border-[#d2d2d7]'
                  : 'text-[#515154] hover:text-[#1d1d1f]'
              }`}
            >
              <span>हिंदी (डिफ़ॉल्ट)</span>
            </button>
            <button
              type="button"
              onClick={() => setLang('en')}
              className={`px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                lang === 'en'
                  ? 'bg-white text-[#1d1d1f] shadow-2xs border border-[#d2d2d7]'
                  : 'text-[#515154] hover:text-[#1d1d1f]'
              }`}
            >
              <span>English</span>
            </button>
          </div>

          {/* Carousel Arrow Buttons */}
          <div className="inline-flex items-center gap-1.5">
            <button
              type="button"
              onClick={() => scroll('left')}
              aria-label="Previous Installation"
              className="h-10 w-10 rounded-full bg-[#ffffff] border border-[#d2d2d7] flex items-center justify-center text-[#1d1d1f] hover:bg-[#f5f5f7] transition-all shadow-2xs cursor-pointer active:scale-95"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={() => scroll('right')}
              aria-label="Next Installation"
              className="h-10 w-10 rounded-full bg-[#ffffff] border border-[#d2d2d7] flex items-center justify-center text-[#1d1d1f] hover:bg-[#f5f5f7] transition-all shadow-2xs cursor-pointer active:scale-95"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      {/* 2. Google Business Profile Trust Card Banner */}
      <div className="p-5 sm:p-6 rounded-2xl bg-[#fbfbfd] border border-[#d2d2d7] shadow-2xs flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
        <div className="flex items-start sm:items-center gap-3.5">
          <div className="h-12 w-12 rounded-xl bg-white border border-[#d2d2d7] flex items-center justify-center shadow-2xs shrink-0">
            <img src="/deewan-logo-mark.png" alt="Deewan" className="h-8 w-auto object-contain" />
          </div>
          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-base sm:text-lg font-black text-[#1d1d1f]">
                Deewan Enterprises ( solar Agency )
              </span>
              <div className="flex items-center text-[#1d1d1f]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-[#1d1d1f]" />
                ))}
              </div>
              <span className="text-xs sm:text-sm font-bold text-[#1d1d1f]">4.9 / 5.0 Google Rating</span>
            </div>
            <div className="flex items-center gap-2 text-xs sm:text-sm text-[#424245] mt-1 flex-wrap">
              <span className="flex items-center gap-1 font-medium">
                <MapPin className="h-3.5 w-3.5 text-[#1d1d1f]" />
                <span>Deewan Complex, Alwar Road, Opp. Shanti Market, Behror, Rajasthan 301701</span>
              </span>
              <span className="hidden sm:inline">•</span>
              <a href="tel:+919571839696" className="flex items-center gap-1 font-bold text-[#1d1d1f] hover:underline">
                <Phone className="h-3.5 w-3.5 text-[#1d1d1f]" />
                <span>+91 95718 39696</span>
              </a>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2.5 w-full lg:w-auto">
          <a
            href={googleProfileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 lg:flex-initial inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full bg-white hover:bg-[#f5f5f7] text-[#1d1d1f] border border-[#d2d2d7] text-xs sm:text-sm font-bold transition-all shadow-2xs apple-btn-press"
          >
            <MapPin className="h-4 w-4 text-[#1d1d1f]" />
            <span>View on Google Maps</span>
            <ExternalLink className="h-3 w-3 text-[#515154]" />
          </a>

          <a
            href="https://wa.me/919571839696?text=Namaste%20Deewan%20Solar%2C%20I%20saw%20your%20customer%20installations%20and%20would%20like%20a%20site%20visit."
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 lg:flex-initial inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full bg-[#1d1d1f] hover:bg-black text-white text-xs sm:text-sm font-bold transition-all shadow-2xs apple-btn-press"
          >
            <MessageSquare className="h-4 w-4 text-white" />
            <span>WhatsApp Us (+91 95718 39696)</span>
          </a>
        </div>
      </div>

      {/* 3. Horizontal Geotagged Customer Slideshow */}
      <div
        ref={carouselRef}
        className="flex gap-6 overflow-x-auto pb-4 pt-1 snap-x snap-mandatory scroll-smooth no-scrollbar"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {GEOTAGGED_INSTALLATIONS.map((item) => (
          <div
            key={item.id}
            className="w-[320px] sm:w-[380px] md:w-[420px] shrink-0 rounded-3xl bg-[#ffffff] border border-[#e5e5ea] overflow-hidden flex flex-col justify-between shadow-2xs apple-card-hover snap-start group"
          >
            {/* Image Container with GPS Map Overlay Badge & Zoom Button */}
            <div className="relative w-full aspect-[3/4] bg-[#f5f5f7] overflow-hidden">
              <img
                src={item.image}
                alt={`${item.nameEn} Rooftop Solar Installation in ${item.locationEn}`}
                className="w-full h-full object-cover object-top select-none transition-transform duration-500 group-hover:scale-[1.02]"
                loading="lazy"
              />

              {/* Top Bar on Image: Geotag Pill + Fullscreen Button */}
              <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between pointer-events-none">
                <span className="pointer-events-auto px-3 py-1.5 rounded-full bg-black/80 backdrop-blur-md text-white text-xs font-bold tracking-wider flex items-center gap-1.5 shadow-sm">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>GPS Geotagged</span>
                </span>

                <button
                  type="button"
                  onClick={() => setActiveModalImage(item)}
                  title="View Full Resolution GPS Tagged Photo"
                  className="pointer-events-auto h-9 w-9 rounded-full bg-black/80 hover:bg-black backdrop-blur-md text-white flex items-center justify-center transition-all shadow-sm active:scale-95 cursor-pointer"
                >
                  <Maximize2 className="h-4 w-4" />
                </button>
              </div>

              {/* Bottom Legible Coordinate & Date Stamp */}
              <div className="absolute bottom-2.5 left-2.5 right-2.5 px-3 py-2 rounded-xl bg-black/75 backdrop-blur-xs text-white text-xs font-mono flex items-center justify-between pointer-events-none">
                <span className="truncate max-w-[210px]">{item.coordinates}</span>
                <span className="font-semibold">{item.date}</span>
              </div>
            </div>

            {/* Content & Review Card Body */}
            <div className="p-6 flex flex-col gap-4 justify-between flex-1">
              
              <div className="flex flex-col gap-2.5">
                {/* System Capacity & Subsidy Pill */}
                <div className="flex items-center justify-between gap-2 flex-wrap">
                  <span className="text-xs font-black uppercase tracking-wider text-[#1d1d1f] bg-[#f5f5f7] px-3 py-1 rounded-full border border-[#e5e5ea]">
                    {lang === 'hi' ? item.systemHi : item.systemEn}
                  </span>
                  <span className="text-xs font-bold text-[#1d1d1f] bg-white border border-[#d2d2d7] px-2.5 py-1 rounded-full shadow-2xs">
                    {item.subsidy}
                  </span>
                </div>

                {/* Testimonial Quote - Clear, Legible Size */}
                <p className="text-sm sm:text-base text-[#1d1d1f] leading-relaxed font-normal italic mt-1">
                  "{lang === 'hi' ? item.reviewHi : item.reviewEn}"
                </p>
              </div>

              {/* Footer Meta: Customer Name & Location */}
              <div className="pt-4 border-t border-[#f0f0f4] flex items-center justify-between">
                <div>
                  <span className="font-black text-[#1d1d1f] block text-sm sm:text-base">
                    {lang === 'hi' ? item.nameHi : item.nameEn}
                  </span>
                  <span className="text-xs sm:text-sm text-[#515154] flex items-center gap-1 mt-0.5">
                    <MapPin className="h-3.5 w-3.5 text-[#515154] shrink-0" />
                    <span>{lang === 'hi' ? item.locationHi : item.locationEn}</span>
                  </span>
                </div>

                <div className="text-right shrink-0">
                  <span className="text-xs uppercase font-bold text-[#515154] block">Bill Reduction</span>
                  <span className="text-xs sm:text-sm font-black text-[#1d1d1f] block">{item.savings}</span>
                </div>
              </div>

            </div>
          </div>
        ))}
      </div>

      {/* 4. Fullscreen Lightbox Modal for Geotagged Photo Inspection */}
      {activeModalImage && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          onClick={() => setActiveModalImage(null)}
        >
          <div
            className="relative max-w-4xl max-h-[92vh] w-full bg-[#1d1d1f] rounded-3xl overflow-hidden border border-[#424245] shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-4 sm:px-6 bg-[#2c2c2e] border-b border-[#3a3a3c] flex items-center justify-between text-white">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-sm sm:text-base font-bold">
                  {activeModalImage.nameEn} • {activeModalImage.locationEn}
                </span>
              </div>

              <button
                type="button"
                onClick={() => setActiveModalImage(null)}
                className="h-9 w-9 rounded-full bg-[#3a3a3c] hover:bg-[#48484a] text-white flex items-center justify-center transition-all cursor-pointer"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Modal Image Area */}
            <div className="relative overflow-auto flex-1 flex items-center justify-center p-2 sm:p-4 bg-black">
              <img
                src={activeModalImage.image}
                alt={activeModalImage.nameEn}
                className="max-h-[72vh] w-auto object-contain rounded-xl"
              />
            </div>

            {/* Modal Footer with Verification Stamp */}
            <div className="p-4 sm:px-6 bg-[#2c2c2e] border-t border-[#3a3a3c] flex flex-col sm:flex-row items-center justify-between gap-3 text-white text-xs sm:text-sm font-mono">
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1.5">
                  <Compass className="h-4 w-4 text-[#86868b]" />
                  <span>{activeModalImage.coordinates}</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <Calendar className="h-4 w-4 text-[#86868b]" />
                  <span>{activeModalImage.date}</span>
                </span>
              </div>
              <span className="text-emerald-400 font-sans font-bold text-xs sm:text-sm">
                ✓ Verified Rooftop Solar by Deewan Solar Behror
              </span>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
