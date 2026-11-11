import Link from 'next/link';
import {
  Sun,
  ShieldCheck,
  CheckCircle2,
  TrendingUp,
  ArrowRight,
  Phone,
  MessageSquare,
  Building,
  CreditCard,
  Zap,
  MapPin,
  Clock,
  Award,
  Layers,
  Sparkles,
  ExternalLink
} from 'lucide-react';
import SolarStudioCalculator from '@/components/SolarStudioCalculator';
import HorizontalBrandSlideview from '@/components/HorizontalBrandSlideview';
import CustomerReviews from '@/components/CustomerReviews';
import SolarLeadForm from '@/components/SolarLeadForm';
import PMSuryaGharTrust from '@/components/PMSuryaGharTrust';

export default function Home() {
  const subsidyTiers = [
    {
      capacity: '1 kW System',
      subsidy: '₹30,000',
      units: '~120 units / mo',
      desc: 'Ideal for basic household loads (lights, fans, TV, single refrigerator).'
    },
    {
      capacity: '2 kW System',
      subsidy: '₹60,000',
      units: '~240 units / mo',
      desc: 'Covers water pump, refrigerator, washing machine, and 1-ton inverter AC.'
    },
    {
      capacity: '3 kW to 10 kW',
      subsidy: 'Up to ₹95,000',
      units: '~360 - 1,200+ units / mo',
      desc: '₹78,000 central subsidy or up to ₹95,000 by waiving 100 free units. Zero bill solution.'
    }
  ];

  return (
    <div className="flex flex-col bg-[#ffffff] text-[#1d1d1f] overflow-hidden">
      
      {/* 1. HERO SECTION: UPFRONT SOLAR FLAGSHIP (Pure Apple Monochromatic Luxury) */}
      <section className="w-full bg-[#ffffff] pt-12 pb-16 text-center border-b border-[#f0f0f4]">
        <div className="apple-container flex flex-col gap-6">
          
          {/* Official Brand Mark & Typography */}
          <div className="flex flex-col items-center justify-center gap-3.5 mx-auto">
            <img
              src="/deewan-logo-mark.webp"
              alt="Deewan Solar"
              className="h-16 sm:h-20 w-auto object-contain"
            />
            <div className="flex flex-col items-center leading-none">
              <span className="text-[28px] sm:text-[36px] font-bold tracking-tight text-[#1d1d1f]">
                Deewan
              </span>
              <span className="text-xs sm:text-sm font-bold tracking-[0.32em] text-[#515154] uppercase mt-1">
                SOLAR
              </span>
            </div>
          </div>

          {/* Eyebrow Kicker - Clean Apple Monochrome */}
          <div className="inline-flex items-center justify-center gap-2 mx-auto mt-1">
            <span className="rounded-full bg-[#f5f5f7] border border-[#d2d2d7] px-4 py-2 text-xs sm:text-sm font-bold tracking-wider text-[#1d1d1f]">
              Authorized EPC Partner for Tata Power Solar & Adani Solar
            </span>
          </div>

          {/* Master Headline */}
          <h1 className="text-[36px] min-[400px]:text-[46px] sm:text-[68px] lg:text-[84px] font-black tracking-tight text-[#1d1d1f] leading-[1.04] max-w-5xl mx-auto">
            Zero Electricity Bills.
            <span className="block text-[#515154] font-normal">Engineered by Deewan Solar.</span>
          </h1>

          {/* Direct, Informative Subtitle */}
          <p className="text-[17px] sm:text-[20px] md:text-[22px] text-[#424245] max-w-3xl mx-auto leading-[1.5] font-normal px-2 sm:px-4">
            Behror’s premier solar EPC authority. Turnkey rooftop solar with <strong>up to ₹95,000 government subsidy</strong>, 100% JVVNL net metering approval, and collateral-free solar loans exclusively by <strong>State Bank of India (SBI)</strong>. (0% downpayment EMIs by <strong>Bajaj Finserv</strong> available for showroom electronics).
          </p>

          {/* Direct Call to Actions */}
          <div className="flex flex-wrap items-center justify-center gap-3.5 mt-3">
            <a
              href="#quotation"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#1d1d1f] hover:bg-black active:scale-[0.98] text-white font-bold px-7 sm:px-8 py-4 text-sm sm:text-base transition-all shadow-md min-h-[48px] apple-btn-press"
            >
              <Sun className="h-5 w-5" />
              <span>Get Instant Solar Quotation</span>
              <ArrowRight className="h-4 w-4" />
            </a>

            <Link
              href="https://wa.me/919571839696?text=Namaste%20Deewan%20Solar%2C%20I%20would%20like%20to%20request%20a%20solar%20quotation%20with%20Tata%20%2F%20Adani%20panels."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-[#d2d2d7] bg-white text-[#1d1d1f] hover:bg-[#f5f5f7] font-bold px-6 sm:px-7 py-4 text-sm sm:text-base transition-all min-h-[48px] shadow-2xs apple-btn-press"
            >
              <MessageSquare className="h-5 w-5 text-emerald-600" />
              <span>WhatsApp Solar Desk (+91 95718 39696)</span>
            </Link>

            <a
              href="https://www.google.com/search?kgmid=%2Fg%2F11csc74k_5&hl=en-IN&q=Deewan%20Enterprises%20(%20solar%20Agency)&shem=epsd1%2Cesd2e%2Cltae%2Crimspwouoe%2Csdpie&shndl=30&source=sh%2Fx%2Floc%2Fosrp%2Fm5%2F1&kgs=7b069aef54c490b5"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#f5f5f7] hover:bg-[#e8e8ed] text-[#1d1d1f] border border-[#d2d2d7] font-bold px-6 py-4 text-xs sm:text-sm transition-all min-h-[48px] apple-btn-press"
            >
              <MapPin className="h-4 w-4 text-[#1d1d1f]" />
              <span>Visit Showroom in Behror</span>
            </a>
          </div>

          {/* 4 Trust Metrics Bar - Pure Apple Unified Palette */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-5xl mx-auto mt-6 sm:mt-8 w-full pt-6 border-t border-[#f0f0f4]">
            <div className="p-4 sm:p-5 rounded-2xl bg-[#fbfbfd] border border-[#e5e5ea] apple-card-hover text-left shadow-2xs">
              <span className="text-xs font-bold uppercase tracking-wider text-[#515154] block">Combined Subsidy</span>
              <span className="text-xl sm:text-2xl font-black text-[#1d1d1f] block mt-0.5">Up to ₹95,000</span>
              <span className="text-xs text-[#515154] block mt-0.5">Central + State DBT</span>
            </div>

            <div className="p-4 sm:p-5 rounded-2xl bg-[#fbfbfd] border border-[#e5e5ea] apple-card-hover text-left shadow-2xs">
              <span className="text-xs font-bold uppercase tracking-wider text-[#515154] block">Top Brand Trust</span>
              <span className="text-xl sm:text-2xl font-black text-[#1d1d1f] block mt-0.5">Tata Power Solar</span>
              <span className="text-xs text-[#515154] block mt-0.5">30-Year Performance</span>
            </div>

            <div className="p-4 sm:p-5 rounded-2xl bg-[#fbfbfd] border border-[#e5e5ea] apple-card-hover text-left shadow-2xs">
              <span className="text-xs font-bold uppercase tracking-wider text-[#515154] block">Loan Partner</span>
              <span className="text-xl sm:text-2xl font-black text-[#1d1d1f] block mt-0.5">SBI Surya Ghar</span>
              <span className="text-xs text-[#515154] block mt-0.5">Collateral-Free @ 6%</span>
            </div>

            <div className="p-4 sm:p-5 rounded-2xl bg-[#fbfbfd] border border-[#e5e5ea] apple-card-hover text-left shadow-2xs">
              <span className="text-xs font-bold uppercase tracking-wider text-[#515154] block">JVVNL Net-Meter</span>
              <span className="text-xl sm:text-2xl font-black text-[#1d1d1f] block mt-0.5">100% Handled</span>
              <span className="text-xs text-[#515154] block mt-0.5">Zero Govt Runaround</span>
            </div>
          </div>

        </div>
      </section>

      {/* 2. SOLAR BRAND HORIZONTAL SLIDESHOW (Pure Logos Only - Properly Aligned & Sized) */}
      <section className="w-full bg-[#fbfbfd] py-14 border-b border-[#f0f0f4]">
        <div className="apple-container flex flex-col gap-6 text-center">
          
          <div>
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#0071e3] block mb-1">
              Authorized Tier-1 Solar Partners
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#1d1d1f]">
              Engineered with India's Most Trusted Solar Manufacturers
            </h2>
            <p className="text-xs sm:text-sm text-[#6e6e73] mt-1 max-w-xl mx-auto">
              We engineer rooftop systems exclusively with Tier-1 manufacturers, featuring <strong>Tata Power Solar</strong> and <strong>Adani Solar</strong> as our top flagship partners.
            </p>
          </div>

          {/* Pure Logo Slideshow Component */}
          <HorizontalBrandSlideview />

        </div>
      </section>

      {/* 3. TATA & ADANI SPOTLIGHT (Showcase Tata Much Because of Higher Brand Trust) */}
      <section id="brands" className="w-full bg-[#ffffff] py-20 border-b border-[#f0f0f4]">
        <div className="apple-container flex flex-col gap-10">
          
          <div className="text-center max-w-2xl mx-auto flex flex-col gap-2">
            <span className="text-[11px] font-semibold uppercase tracking-widest text-[#86868b]">
              Tier-1 Solar Engineering Partners
            </span>
            <h2 className="text-[34px] sm:text-[46px] font-extrabold text-[#1d1d1f] tracking-tight leading-tight">
              Why Tata Power Solar is Our #1 Recommendation
            </h2>
            <p className="text-xs sm:text-sm text-[#6e6e73] leading-relaxed">
              When investing in a 25-30 year rooftop asset in Rajasthan, brand integrity and local service matter most. Tata Power Solar is India's most trusted green energy pioneer.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
            
            {/* TATA POWER SOLAR (Featured 7 cols) */}
            <div className="md:col-span-7 rounded-3xl bg-[#fbfbfd] border border-[#e5e5ea] p-8 flex flex-col justify-between apple-card-hover relative">
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <div className="h-12 w-28 rounded-xl bg-white border border-[#e5e5ea] p-2 flex items-center justify-center shadow-2xs">
                    <img src="/brands/tata.webp" alt="Tata Power Solar" className="max-h-full max-w-full object-contain" />
                  </div>
                  <span className="px-3 py-1 rounded-full bg-[#f5f5f7] border border-[#d2d2d7] text-[#1d1d1f] text-[10px] font-semibold uppercase tracking-wider">
                    ★ #1 Most Trusted in India
                  </span>
                </div>

                <div>
                  <h3 className="text-2xl font-black text-[#1d1d1f] tracking-tight">
                    Tata Power Solar TP-550-MB Series
                  </h3>
                  <span className="text-xs font-semibold text-[#6e6e73] block mt-0.5">
                    N-Type TOPCon Dual-Glass Bifacial • 30-Year Linear Warranty
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-[#6e6e73] leading-relaxed">
                  Tata's N-Type TOPCon technology captures sunlight from both sides with up to 22.4% cell efficiency. Engineered with a low temperature coefficient (-0.30%/°C), it delivers higher power yields under intense 46°C Rajasthan summer heat where ordinary panels degrade.
                </p>

                <div className="grid grid-cols-3 gap-3 pt-2">
                  <div className="p-3.5 rounded-2xl bg-white border border-[#e5e5ea]">
                    <span className="text-[9px] uppercase font-semibold text-[#86868b] block">Cell Efficiency</span>
                    <span className="text-lg font-bold text-[#1d1d1f] block mt-0.5">22.4%</span>
                    <span className="text-[9px] text-[#86868b]">TOPCon Tech</span>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-white border border-[#e5e5ea]">
                    <span className="text-[9px] uppercase font-semibold text-[#86868b] block">Warranty</span>
                    <span className="text-lg font-bold text-[#1d1d1f] block mt-0.5">30 Yrs</span>
                    <span className="text-[9px] text-[#86868b]">Linear Yield</span>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-white border border-[#e5e5ea]">
                    <span className="text-[9px] uppercase font-semibold text-[#86868b] block">Subsidy</span>
                    <span className="text-lg font-bold text-[#1d1d1f] block mt-0.5">₹95k</span>
                    <span className="text-[9px] text-[#86868b]">Full Eligible</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#f0f0f4] flex items-center justify-between">
                <a
                  href="#quotation"
                  className="text-xs font-semibold text-[#0071e3] hover:underline inline-flex items-center gap-1"
                >
                  <span>Select Tata in Quotation Studio</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </a>
                <span className="text-[10px] text-[#86868b]">Official Behror Inventory</span>
              </div>
            </div>

            {/* ADANI SOLAR (5 cols) */}
            <div className="md:col-span-5 rounded-3xl bg-[#fbfbfd] border border-[#e5e5ea] p-8 flex flex-col justify-between apple-card-hover">
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <div className="h-12 w-28 rounded-xl bg-white border border-[#e5e5ea] p-2 flex items-center justify-center shadow-2xs">
                    <img src="/brands/adani-solar.webp" alt="Adani Solar" className="max-h-full max-w-full object-contain" />
                  </div>
                  <span className="px-3 py-1 rounded-full bg-[#f5f5f7] border border-[#d2d2d7] text-[#1d1d1f] text-[10px] font-semibold uppercase tracking-wider">
                    Tier-1 Industrial
                  </span>
                </div>

                <div>
                  <h3 className="text-2xl font-black text-[#1d1d1f] tracking-tight">
                    Adani Solar Elan Shine Series
                  </h3>
                  <span className="text-xs font-semibold text-[#6e6e73] block mt-0.5">
                    Dual-Glass Bifacial 545W • Heavy Duty Mechanical Resilience
                  </span>
                </div>

                <p className="text-xs text-[#6e6e73] leading-relaxed">
                  Certified up to 5400 Pa wind resistance. Adani's dual-glass construction provides superior protection against dust storms, PID, and moisture ingress for long-lasting farm and industrial rooftop performance.
                </p>

                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="p-3.5 rounded-2xl bg-white border border-[#e5e5ea]">
                    <span className="text-[9px] uppercase font-semibold text-[#86868b] block">Efficiency</span>
                    <span className="text-lg font-bold text-[#1d1d1f] block mt-0.5">21.8%</span>
                    <span className="text-[9px] text-[#86868b]">Bifacial Dual-Side</span>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-white border border-[#e5e5ea]">
                    <span className="text-[9px] uppercase font-semibold text-[#86868b] block">Warranty</span>
                    <span className="text-lg font-bold text-[#1d1d1f] block mt-0.5">25 Yrs</span>
                    <span className="text-[9px] text-[#86868b]">Performance</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#f0f0f4] flex items-center justify-between">
                <a
                  href="#quotation"
                  className="text-xs font-semibold text-[#0071e3] hover:underline inline-flex items-center gap-1"
                >
                  <span>Select Adani in Quotation</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </a>
                <span className="text-[10px] text-[#86868b]">Fast Behror Dispatch</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 4. UP TO ₹95,000 SUBSIDY SHOWCASE (#subsidy) */}
      <section id="subsidy" className="w-full bg-[#fbfbfd] py-20 border-b border-[#f0f0f4]">
        <div className="apple-container flex flex-col gap-10">
          
          {/* Prime Minister Narendra Modi PM Surya Ghar Trust & National Portal Verification */}
          <PMSuryaGharTrust />

          <div className="text-center max-w-2xl mx-auto flex flex-col gap-2 pt-6">
            <span className="text-[11px] font-semibold uppercase tracking-widest text-[#86868b]">
              Subsidy Slab Breakdown
            </span>
            <h2 className="text-[30px] sm:text-[40px] font-extrabold text-[#1d1d1f] tracking-tight leading-tight">
              Direct Bank Account Subsidy Tiers
            </h2>
            <p className="text-xs sm:text-sm text-[#6e6e73] leading-relaxed">
              Central MNRE DBT subsidy combined with Rajasthan state green incentives. Deewan Solar handles all paperwork so the money is credited directly into your bank account.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {subsidyTiers.map((tier, idx) => (
              <div
                key={idx}
                className="rounded-3xl border border-[#e5e5ea] bg-white p-7 flex flex-col justify-between apple-card-hover"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-semibold text-[#1d1d1f] uppercase tracking-wider bg-[#f5f5f7] px-2.5 py-0.5 rounded-full border border-[#e5e5ea]">
                      {tier.capacity}
                    </span>
                    <span className="text-[10px] text-[#86868b]">{tier.units}</span>
                  </div>

                  <span className="text-[10px] text-[#86868b] uppercase tracking-wider block">Government Subsidy Payout</span>
                  <span className="text-3xl sm:text-4xl font-extrabold text-[#1d1d1f] block mt-1">
                    {tier.subsidy}
                  </span>

                  <p className="text-xs text-[#6e6e73] mt-3 leading-relaxed">
                    {tier.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#f0f0f4] flex items-center justify-between text-xs">
                  <span className="text-[#86868b]">Net Metering:</span>
                  <span className="text-[#1d1d1f] font-semibold">100% Guaranteed</span>
                </div>
              </div>
            ))}
          </div>

          {/* Rajasthan 100-Unit vs ₹95,000 Subsidy Transparency Banner - Clean Monochrome */}
          <div className="rounded-3xl border border-[#e5e5ea] bg-white p-6 sm:p-7 flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#f5f5f7] border border-[#e5e5ea] text-[#1d1d1f] shrink-0 shadow-3xs">
                <Sun className="h-5 w-5" />
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2 flex-wrap">
                  <h4 className="text-sm font-extrabold text-[#1d1d1f]">
                    Rajasthan Subsidy Rule: ₹78,000 vs ₹95,000 Explained
                  </h4>
                  <span className="text-[9px] font-semibold bg-[#f5f5f7] text-[#1d1d1f] px-2 py-0.5 rounded-full border border-[#e5e5ea]">
                    100 Free Units Trade-Off
                  </span>
                </div>
                <p className="text-xs text-[#6e6e73] leading-relaxed max-w-3xl">
                  Under Rajasthan Discom regulations, you receive <strong>₹78,000</strong> central subsidy on a 3kW system while retaining your 100 free units/month scheme, <strong>OR up to ₹95,000</strong> (+₹17,000 extra state subsidy) if you surrender the 100 free units. Since a 3kW system generates 360–420+ units to make your power bill zero anyway, claiming the extra ₹17,000 cash upfront provides the highest financial ROI.
                </p>
              </div>
            </div>

            <a
              href="#quotation"
              className="inline-flex items-center gap-1.5 rounded-full bg-[#1d1d1f] hover:bg-black text-white text-xs font-semibold px-5 py-2.5 transition-colors whitespace-nowrap shadow-xs"
            >
              <span>Compare in Calculator</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </div>

        </div>
      </section>

      {/* 5. INSTANT SOLAR QUOTATION STUDIO (#quotation) */}
      <section id="quotation" className="w-full bg-[#ffffff] py-24 border-b border-[#f0f0f4]">
        <div className="apple-container flex flex-col gap-10">
          
          <SolarStudioCalculator
            title="Instant Solar Quotation & Company Comparison"
            subtitle="Compare quotations with Tata Power Solar (#1 Recommendation) vs Adani Solar. Up to ₹95,000 subsidy and subsidized 6% SBI solar loans."
          />

        </div>
      </section>

      {/* 6. OFFICIAL FINANCING PARTNERS: SBI (SOLAR @ 6%) & BAJAJ FINSERV (ELECTRONICS) */}
      <section className="w-full bg-[#fbfbfd] py-20 border-b border-[#f0f0f4]">
        <div className="apple-container flex flex-col gap-10">
          
          <div className="text-center max-w-xl mx-auto flex flex-col gap-2">
            <span className="text-[11px] font-semibold uppercase tracking-widest text-[#86868b]">
              Official Financial Partners
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1d1d1f] tracking-tight">
              SBI for Solar Loans & Bajaj Finserv for Electronics
            </h2>
            <p className="text-xs text-[#6e6e73] leading-relaxed">
              Rooftop solar installations are financed exclusively through the State Bank of India (SBI) PM Surya Ghar loan at 6% interest. Bajaj Finserv provides zero-downpayment EMIs exclusively for electronics and appliances in our showroom.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto w-full">
            
            {/* SBI CARD - EXCLUSIVE FOR SOLAR */}
            <div className="p-7 rounded-3xl border border-[#e5e5ea] bg-white apple-card-hover flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Building className="h-5 w-5 text-[#1d1d1f]" />
                    <span className="font-extrabold text-base text-[#1d1d1f]">State Bank of India (SBI)</span>
                  </div>
                  <span className="text-[10px] font-bold bg-[#f5f5f7] text-[#1d1d1f] px-2.5 py-0.5 rounded-full border border-[#d2d2d7]">
                    Exclusive for Solar
                  </span>
                </div>

                <h4 className="text-lg font-bold text-[#1d1d1f]">SBI Surya Ghar Solar Scheme</h4>
                <p className="text-xs text-[#6e6e73] mt-2 leading-relaxed">
                  Collateral-free solar financing exclusively through SBI at a subsidized interest rate (6% p.a.). Repay in flexible monthly installments up to 10 years, where monthly power bill savings exceed the loan EMI!
                </p>

                <ul className="space-y-1.5 mt-4 text-xs text-[#1d1d1f]">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#1d1d1f] shrink-0" />
                    <span>No property mortgage or collateral needed</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#1d1d1f] shrink-0" />
                    <span>Fast sanction assisted by Deewan Solar team in Behror</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#1d1d1f] shrink-0" />
                    <span>Exclusive solar financing partner (only SBI available for solar)</span>
                  </li>
                </ul>
              </div>

              <div className="mt-6 pt-4 border-t border-[#f0f0f4] flex items-center justify-between">
                <span className="text-xs font-bold text-[#1d1d1f]">Interest Rate: 6% p.a.</span>
                <span className="text-[10px] text-[#86868b]">Solar Priority Lending</span>
              </div>
            </div>

            {/* BAJAJ FINSERV CARD - ELECTRONICS SHOWROOM ONLY */}
            <div className="p-7 rounded-3xl border border-[#e5e5ea] bg-white apple-card-hover flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <CreditCard className="h-5 w-5 text-[#1d1d1f]" />
                    <span className="font-extrabold text-base text-[#1d1d1f]">Bajaj Finserv</span>
                  </div>
                  <span className="text-[10px] font-semibold bg-[#f5f5f7] text-[#1d1d1f] px-2.5 py-0.5 rounded-full border border-[#e5e5ea]">
                    Electronics Only
                  </span>
                </div>

                <h4 className="text-lg font-bold text-[#1d1d1f]">0% Downpayment Appliance EMIs</h4>
                <p className="text-xs text-[#6e6e73] mt-2 leading-relaxed">
                  Upgrade your home appliances (Inverter ACs, 4K TVs, Refrigerators, Inverters) without upfront cash out-of-pocket. Quick paperless digital approval directly at our Behror showroom desk.
                </p>

                <ul className="space-y-1.5 mt-4 text-xs text-[#1d1d1f]">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#1d1d1f] shrink-0" />
                    <span>Exclusively for showroom electronics & home appliances</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#1d1d1f] shrink-0" />
                    <span>Zero cash downpayment required in-store</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#86868b] shrink-0" />
                    <span className="text-[#86868b]">Not applicable for Solar (Solar is financed only by SBI)</span>
                  </li>
                </ul>
              </div>

              <div className="mt-6 pt-4 border-t border-[#f0f0f4] flex items-center justify-between">
                <span className="text-xs font-bold text-[#1d1d1f]">No-Cost Appliance EMIs</span>
                <span className="text-[10px] text-[#86868b]">Deewan Enterprises Desk</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 7. CUSTOMER REVIEWS (DEFAULT IN HINDI + ENGLISH TOGGLE) (#reviews) */}
      <section id="reviews" className="w-full bg-[#ffffff] py-24 border-b border-[#f0f0f4]">
        <div className="apple-container flex flex-col gap-10">
          
          {/* Customer Reviews Component (Default in Hindi) */}
          <CustomerReviews />

        </div>
      </section>

      {/* 8. "BACKFRONT": DEEWAN ELECTRONICS RETAIL BACKBONE (Established 1995) */}
      <section className="w-full bg-[#fbfbfd] py-24 border-b border-[#f0f0f4]">
        <div className="apple-container flex flex-col gap-12">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#0071e3] block mb-1">
                Backfront Retail Showroom • Serving Since 1995
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#1d1d1f]">
                Electronics Designed to Run Cleanly on Solar.
              </h2>
              <p className="text-xs sm:text-sm text-[#6e6e73] mt-1 max-w-xl">
                Deewan Enterprises in Behror has been the region’s premier appliances showroom for 30+ years. Pair your rooftop solar with solar-ready inverter air conditioners, refrigerators, and heavy UPS systems.
              </p>
            </div>

            <Link
              href="/products"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0071e3] hover:underline"
            >
              <span>Explore All Electronics Catalog</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                title: 'Inverter Air Conditioners',
                brand: 'Daikin & Voltas',
                desc: '1.5-Ton 5-Star cooling tested for 52°C heat. Runs all day on solar for ₹0 cost.',
                link: '/products?category=Air%20Conditioners'
              },
              {
                title: 'Smart 4K Televisions',
                brand: 'Sony BRAVIA & Samsung',
                desc: 'Cognitive Processor XR & Crystal 4K displays with cinema Dolby Atmos sound.',
                link: '/products?category=Televisions'
              },
              {
                title: 'Frost-Free Refrigerators',
                brand: 'LG & Samsung Inverter',
                desc: 'Double-door convertible cooling that stays active 24/7 on hybrid solar power.',
                link: '/products?category=Refrigerators'
              },
              {
                title: 'Pure Sine Wave Inverters',
                brand: 'Luminous & Exide',
                desc: 'Tall tubular solar C10 batteries for unbroken power during regional grid cuts.',
                link: '/products?category=Inverters'
              }
            ].map((app, i) => (
              <div
                key={i}
                className="rounded-3xl bg-white border border-[#e5e5ea] p-6 flex flex-col justify-between apple-card-hover"
              >
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#0071e3] block">
                    {app.brand}
                  </span>
                  <h4 className="text-base font-bold text-[#1d1d1f] mt-1">{app.title}</h4>
                  <p className="text-xs text-[#6e6e73] mt-2 leading-relaxed">
                    {app.desc}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-[#f0f0f4]">
                  <Link href={app.link} className="text-xs font-bold text-[#0071e3] hover:underline inline-flex items-center gap-1">
                    <span>View Models</span>
                    <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 9. ON-SITE ROOFTOP AUDIT FORM (#solar-lead-capture) */}
      <section id="solar-lead-capture" className="w-full bg-[#ffffff] py-24 border-b border-[#f0f0f4]">
        <div className="apple-container flex flex-col gap-10">
          
          <div className="max-w-2xl mx-auto w-full text-center flex flex-col gap-2">
            <span className="text-[11px] font-semibold uppercase tracking-widest text-[#86868b]">
              Free Site Feasibility Inspection
            </span>
            <h2 className="text-[32px] sm:text-[42px] font-extrabold text-[#1d1d1f] tracking-tight">
              Request Your Free Rooftop Solar Audit
            </h2>
            <p className="text-xs text-[#6e6e73] leading-relaxed">
              Our certified solar engineers will visit your home, factory, or commercial property in Behror, Neemrana, Kotputli, Alwar, or surrounding Rajasthan districts to evaluate roof shadow orientation and JVVNL net metering feasibility. (Operating exclusively in Rajasthan; not in Haryana or UP).
            </p>
          </div>

          <div className="max-w-2xl mx-auto w-full rounded-3xl border border-[#e5e5ea] bg-[#fbfbfd] p-6 sm:p-9 shadow-md">
            <SolarLeadForm />
          </div>

        </div>
      </section>

      {/* 10. FLAGSHIP SHOWROOM VISIT & GOOGLE MAP (#showroom) */}
      <section id="showroom" className="w-full bg-[#fbfbfd] py-24 text-[#1d1d1f]">
        <div className="apple-container flex flex-col gap-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Showroom Information (5 cols) */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <span className="text-[11px] font-semibold uppercase tracking-widest text-[#86868b]">
                  Deewan Enterprises (Solar Agency)
                </span>
                <h2 className="text-[32px] sm:text-[36px] font-extrabold text-[#1d1d1f] tracking-tight leading-tight">
                  Visit Deewan Enterprises
                </h2>
                <p className="text-xs sm:text-sm text-[#515154] leading-relaxed">
                  Inspect physical Tata Power TOPCon and Adani Solar panels on display, discuss your electricity bill with senior engineers, and complete your SBI loan and subsidy paperwork in person. Located near High Secondary Ground, Under RB Health GYM, Patel Nagar in Behror.
                </p>
              </div>

              <div className="space-y-4 text-xs">
                <div className="flex gap-3 items-start p-4 rounded-2xl bg-white border border-[#e5e5ea] shadow-3xs">
                  <MapPin className="h-5 w-5 text-[#1d1d1f] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-extrabold text-[#1d1d1f] text-xs sm:text-sm block">
                      Deewan Enterprises (Solar Agency)
                    </span>
                    <span className="text-[#515154] mt-0.5 block leading-snug">
                      Near High Secondary Ground Under RB Health GYM, Patel Nagar, Behror, Rajasthan 301701
                    </span>
                  </div>
                </div>

                <div className="flex gap-3 items-center p-4 rounded-2xl bg-white border border-[#e5e5ea] shadow-3xs">
                  <Phone className="h-5 w-5 text-[#24b33e] shrink-0" />
                  <div>
                    <span className="font-bold text-[#1d1d1f] block">Direct Solar Consultation Desk</span>
                    <Link href="tel:+919571839696" className="text-[#1d1d1f] hover:underline font-extrabold text-sm block mt-0.5">
                      +91 95718 39696
                    </Link>
                  </div>
                </div>

                <div className="flex gap-3 items-start p-4 rounded-2xl bg-white border border-[#e5e5ea] shadow-3xs">
                  <Clock className="h-5 w-5 text-[#1d1d1f] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-[#1d1d1f] block">Showroom Timings</span>
                    <span className="text-[#515154] mt-0.5 block">
                      9:30 AM to 8:30 PM • Open All 7 Days (Including Sundays)
                    </span>
                  </div>
                </div>
              </div>

              {/* Direct Action Buttons */}
              <div className="flex flex-wrap gap-3 pt-2">
                <Link
                  href="tel:+919571839696"
                  className="inline-flex items-center gap-2 rounded-full bg-[#1d1d1f] text-white hover:bg-black font-bold px-6 py-3.5 text-xs sm:text-sm transition-colors shadow-2xs apple-btn-press"
                >
                  <Phone className="h-4 w-4 text-white" />
                  <span>Call Solar Desk (+91 95718 39696)</span>
                </Link>

                <a
                  href="https://www.google.com/search?kgmid=%2Fg%2F11csc74k_5&hl=en-IN&q=Deewan%20Enterprises%20(%20solar%20Agency)&shem=epsd1%2Cesd2e%2Cltae%2Crimspwouoe%2Csdpie&shndl=30&source=sh%2Fx%2Floc%2Fosrp%2Fm5%2F1&kgs=7b069aef54c490b5"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-[#d2d2d7] bg-white hover:bg-[#f5f5f7] text-[#1d1d1f] font-bold px-5 py-3.5 text-xs sm:text-sm transition-colors shadow-2xs apple-btn-press"
                >
                  <MapPin className="h-4 w-4 text-[#1d1d1f]" />
                  <span>Open in Google Maps</span>
                  <ExternalLink className="h-3 w-3 text-[#515154]" />
                </a>

                <Link
                  href="https://wa.me/919571839696?text=Namaste%20Deewan%20Solar%2C%20I%20would%20like%20directions%20to%20your%20Behror%20office%20for%20a%20solar%20consultation."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-[#d2d2d7] bg-white hover:bg-[#f5f5f7] text-[#1d1d1f] font-bold px-5 py-3.5 text-xs sm:text-sm transition-colors shadow-2xs apple-btn-press"
                >
                  <MessageSquare className="h-4 w-4 text-emerald-600" />
                  <span>Directions on WhatsApp</span>
                </Link>
              </div>
            </div>

            {/* Embedded Google Map with Accurate Location Pin (7 cols) */}
            <div className="lg:col-span-7 h-[390px] rounded-3xl overflow-hidden border border-[#e5e5ea] relative shadow-md bg-white">
              {/* Floating Apple-Style Verified Location Badge */}
              <div className="absolute top-4 left-4 z-10 bg-white/95 backdrop-blur-md border border-[#d2d2d7] rounded-2xl p-3 sm:p-3.5 shadow-md max-w-[270px] sm:max-w-[320px]">
                <div className="flex items-start gap-2.5">
                  <div className="h-8 w-8 rounded-xl bg-[#1d1d1f] text-white flex items-center justify-center shrink-0">
                    <ShieldCheck className="h-4 w-4 text-emerald-400" />
                  </div>
                  <div>
                    <span className="font-black text-xs text-[#1d1d1f] block leading-tight">
                      Deewan Enterprises (Solar Agency)
                    </span>
                    <span className="text-[11px] text-[#515154] mt-0.5 block leading-snug">
                      Near High Secondary Ground Under RB Health GYM, Patel Nagar, Behror
                    </span>
                    <a
                      href="https://www.google.com/search?kgmid=%2Fg%2F11csc74k_5&hl=en-IN&q=Deewan%20Enterprises%20(%20solar%20Agency)&shem=epsd1%2Cesd2e%2Cltae%2Crimspwouoe%2Csdpie&shndl=30&source=sh%2Fx%2Floc%2Fosrp%2Fm5%2F1&kgs=7b069aef54c490b5"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[10.5px] font-bold text-[#1d1d1f] hover:underline mt-1"
                    >
                      <span>Google Business Listing & Directions</span>
                      <ExternalLink className="h-2.5 w-2.5" />
                    </a>
                  </div>
                </div>
              </div>

              <iframe
                src="https://maps.google.com/maps?q=RB+Health+Club+Gym+Patel+Nagar+Behror+Rajasthan+301701&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
                title="Deewan Enterprises (Solar Agency) Location Map in Behror"
              />
            </div>

          </div>

        </div>
      </section>

      {/* Local SEO Structured Data Schema for DeewanSolar.com */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SolarEnergySystemContractor",
            "name": "Deewan Enterprises (Solar Agency)",
            "image": "https://thfvnext.bing.com/th/id/OIP.ia1VQNeJEKX3LVdyMU36MwHaHa?cb=thfvnextfalcon2&pid=Api",
            "url": "https://deewansolar.com",
            "telephone": "+919571839696",
            "priceRange": "₹₹",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Near High Secondary Ground Under RB Health GYM, Patel Nagar",
              "addressLocality": "Behror",
              "addressRegion": "Rajasthan",
              "postalCode": "301701",
              "addressCountry": "IN"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 27.8804683,
              "longitude": 76.2801452
            },
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday"
              ],
              "opens": "09:30",
              "closes": "20:30"
            },
            "sameAs": [
              "https://wa.me/919571839696"
            ]
          })
        }}
      />

    </div>
  );
}
