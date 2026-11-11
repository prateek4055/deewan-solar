'use client';

import { ExternalLink, ShieldCheck, Sun, ArrowRight, MessageSquare, Star, MapPin, Phone, Building } from 'lucide-react';

interface PMSuryaGharTrustProps {
  className?: string;
}

export default function PMSuryaGharTrust({ className = '' }: PMSuryaGharTrustProps) {
  const googleProfileUrl =
    'https://www.google.com/search?kgmid=%2Fg%2F11csc74k_5&hl=en-IN&q=Deewan%20Enterprises%20(%20solar%20Agency)&shem=epsd1%2Cesd2e%2Cltae%2Crimspwouoe%2Csdpie&shndl=30&source=sh%2Fx%2Floc%2Fosrp%2Fm5%2F1&kgs=7b069aef54c490b5';

  return (
    <div className={`w-full flex flex-col gap-6 ${className}`}>
      {/* Flagship PM Surya Ghar Trust Bento Card */}
      <div className="relative overflow-hidden rounded-3xl bg-[#ffffff] border border-[#e5e5ea] shadow-sm p-6 sm:p-9 md:p-12 transition-all">
        
        {/* Subtle decorative background watermarks */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-[#f5f5f7]/60 pointer-events-none blur-3xl" />
        
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Official PM Narendra Modi Image from Government Website */}
          <div className="lg:col-span-5 flex flex-col items-center sm:items-start text-center sm:text-left gap-5">
            
            {/* National Scheme Pills */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f5f5f7] border border-[#d2d2d7]">
              <span className="h-2.5 w-2.5 rounded-full bg-[#1d1d1f]" />
              <span className="text-xs font-bold uppercase tracking-wider text-[#1d1d1f]">
                Government of India Initiative • MNRE
              </span>
            </div>

            {/* PM Narendra Modi Exact Photo from pmsuryaghar.gov.in */}
            <div className="relative w-full max-w-[340px] sm:max-w-none rounded-2xl overflow-hidden bg-gradient-to-b from-[#f9f9fb] to-[#ececf0] border border-[#d2d2d7] p-5 flex flex-col items-center">
              <div className="relative w-48 h-56 sm:w-56 sm:h-64 overflow-hidden flex items-end justify-center mb-3">
                <img
                  src="/government/pm-modi-official.png"
                  alt="Hon'ble Prime Minister Narendra Modi - PM Surya Ghar: Muft Bijli Yojana"
                  className="w-full h-full object-contain object-bottom select-none"
                  loading="eager"
                />
              </div>

              <div className="text-center">
                <span className="text-base sm:text-lg font-black text-[#1d1d1f] tracking-tight block">
                  Shri Narendra Modi
                </span>
                <span className="text-xs sm:text-sm font-semibold text-[#515154] block mt-0.5">
                  Hon'ble Prime Minister of India
                </span>
                <span className="inline-block mt-2 px-3.5 py-1 rounded-full bg-white border border-[#d2d2d7] text-xs font-bold text-[#1d1d1f] shadow-2xs">
                  PM Surya Ghar: Muft Bijli Yojana
                </span>
              </div>
            </div>

            {/* Official Portal External Link */}
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 pt-1 w-full">
              <a
                href="https://pmsuryaghar.gov.in/#/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#1d1d1f] hover:text-black underline underline-offset-4 decoration-[#d2d2d7] hover:decoration-[#1d1d1f] transition-all"
              >
                <span>Visit National Portal (pmsuryaghar.gov.in)</span>
                <ExternalLink className="h-3.5 w-3.5 text-[#515154]" />
              </a>
            </div>

          </div>

          {/* Right Column: Scheme Details, DBT Subsidy Rules & Deewan Registered Status */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#515154] block mb-1">
                National Clean Energy Mission
              </span>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#1d1d1f] tracking-tight leading-tight">
                प्रधानमंत्री सूर्य घर: मुफ्त बिजली योजना
              </h3>
              <p className="text-sm sm:text-base text-[#424245] mt-2.5 leading-relaxed">
                Launched by Prime Minister Narendra Modi with a ₹75,021 Crore outlay to provide up to 300 units of free solar electricity every month to 1 Crore Indian households.
              </p>
            </div>

            {/* Subsidy Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-[#fbfbfd] border border-[#e5e5ea] flex flex-col justify-between">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#515154] block">
                    Central DBT Subsidy (3 kW)
                  </span>
                  <span className="text-3xl sm:text-4xl font-black text-[#1d1d1f] block mt-1">
                    ₹78,000
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-[#424245] mt-2.5 leading-relaxed">
                  Direct transfer into your bank account while retaining Rajasthan’s 100 free units scheme.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#fbfbfd] border border-[#e5e5ea] flex flex-col justify-between">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#515154] block">
                    Combined State Top-up (3 kW)
                  </span>
                  <span className="text-3xl sm:text-4xl font-black text-[#1d1d1f] block mt-1">
                    ₹95,000
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-[#424245] mt-2.5 leading-relaxed">
                  ₹78,000 Central + ₹17,000 Rajasthan state incentive when electing the 100-unit waiver.
                </p>
              </div>
            </div>

            {/* Deewan Enterprises Verified Agency Credentials & Google Verification */}
            <div className="p-5 sm:p-6 rounded-2xl bg-[#fbfbfd] border border-[#d2d2d7] shadow-2xs flex flex-col gap-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="h-11 w-11 rounded-xl bg-white border border-[#d2d2d7] flex items-center justify-center shrink-0 shadow-2xs">
                    <ShieldCheck className="h-6 w-6 text-[#1d1d1f]" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="font-black text-sm sm:text-base text-[#1d1d1f]">
                        Deewan Enterprises ( solar Agency )
                      </span>
                      <span className="inline-flex items-center gap-1 text-[11px] font-bold uppercase px-2.5 py-0.5 rounded-full bg-white text-[#1d1d1f] border border-[#d2d2d7]">
                        <Star className="h-3 w-3 fill-[#1d1d1f]" />
                        <span>4.9 / 5.0 Google Verified</span>
                      </span>
                    </div>
                    <span className="text-xs font-semibold text-[#1d1d1f] block mt-0.5">
                      Officially Registered EPC Vendor on National Portal • Behror Circle
                    </span>
                  </div>
                </div>

                <a
                  href={googleProfileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full bg-[#1d1d1f] hover:bg-black text-white text-xs font-bold transition-all shadow-xs apple-btn-press"
                >
                  <MapPin className="h-3.5 w-3.5" />
                  <span>Google Profile & Directions</span>
                  <ExternalLink className="h-3 w-3" />
                </a>
              </div>

              {/* Physical Address & Direct Phone Banner */}
              <div className="pt-3 border-t border-[#e5e5ea] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs sm:text-sm">
                <div className="flex items-start gap-2 text-[#424245]">
                  <MapPin className="h-4 w-4 text-[#1d1d1f] shrink-0 mt-0.5" />
                  <span>Deewan Complex, Alwar Road, Opp. Shanti Market, Behror, Rajasthan 301701</span>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <Phone className="h-4 w-4 text-[#1d1d1f] shrink-0" />
                  <a href="tel:+919571839696" className="font-bold text-[#1d1d1f] hover:underline">
                    +91 95718 39696
                  </a>
                </div>
              </div>
            </div>

            {/* Direct Action Row */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <a
                href="#quotation"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#1d1d1f] hover:bg-black text-white text-xs sm:text-sm font-bold px-6 py-3.5 transition-all shadow-sm apple-btn-press"
              >
                <Sun className="h-4 w-4" />
                <span>Calculate Solar Quotation & Subsidy</span>
                <ArrowRight className="h-4 w-4" />
              </a>

              <a
                href={googleProfileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[#d2d2d7] bg-[#f5f5f7] hover:bg-[#e8e8ed] text-[#1d1d1f] text-xs sm:text-sm font-bold px-5 py-3.5 transition-all apple-btn-press"
              >
                <Building className="h-4 w-4" />
                <span>Visit Deewan Enterprises (Solar Agency)</span>
                <ArrowRight className="h-4 w-4" />
              </a>

              <a
                href="https://wa.me/919571839696?text=Namaste%20Deewan%20Solar%2C%20I%20want%20to%20apply%20for%20PM%20Surya%20Ghar%20Muft%20Bijli%20Yojana%20subsidy%20in%20Behror%20Rajasthan."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[#d2d2d7] bg-white hover:bg-[#f5f5f7] text-[#1d1d1f] text-xs sm:text-sm font-bold px-5 py-3.5 transition-all apple-btn-press"
              >
                <MessageSquare className="h-4 w-4 text-[#1d1d1f]" />
                <span>Chat on WhatsApp (+91 95718 39696)</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
