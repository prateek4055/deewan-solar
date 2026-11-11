import Link from 'next/link';
import {
  Sun,
  ShieldCheck,
  CheckCircle2,
  TrendingUp,
  Zap,
  Building,
  CreditCard,
  ArrowRight,
  Phone,
  MessageSquare,
  FileCheck,
  Layers,
  Award,
  HelpCircle,
  MapPin
} from 'lucide-react';
import SolarStudioCalculator from '@/components/SolarStudioCalculator';
import SolarBrandComparison from '@/components/SolarBrandComparison';
import SolarLeadForm from '@/components/SolarLeadForm';
import HorizontalBrandSlideview from '@/components/HorizontalBrandSlideview';
import CustomerReviews from '@/components/CustomerReviews';
import PMSuryaGharTrust from '@/components/PMSuryaGharTrust';

export const metadata = {
  title: 'Deewan Solar Division | Up to ₹95,000 Subsidy & Tata/Adani Solar Behror',
  description: 'Authorized solar power EPC engineers in Behror. Up to ₹95,000 subsidy under PM Surya Ghar & Rajasthan incentives, JVVNL Net Metering, Tata Power TOPCon & Adani Solar panels. Exclusive Solar Loans by State Bank of India (SBI).',
};

export default function SolarPage() {
  const subsidyTiers = [
    {
      capacity: '1 kW System',
      subsidy: '₹30,000',
      units: '~120 units / mo',
      suitability: 'Small homes, 1-2 fans, LED lights, small refrigerator',
      savings: '₹1,000 - ₹1,200 / mo'
    },
    {
      capacity: '2 kW System',
      subsidy: '₹60,000',
      units: '~240 units / mo',
      suitability: 'Standard homes, refrigerator, washing machine, water pump, 1-ton AC',
      savings: '₹2,000 - ₹2,400 / mo'
    },
    {
      capacity: '3 kW to 10 kW',
      subsidy: 'Up to ₹95,000 (Max)',
      units: '~360 to 1,200+ units / mo',
      suitability: 'Large homes & villas with multiple 1.5-ton ACs, geysers & heavy loads',
      savings: '₹3,500 - ₹12,000+ / mo'
    }
  ];

  const turnkeySteps = [
    {
      step: '01',
      title: 'Free Rooftop Feasibility Audit',
      desc: 'Our engineers conduct drone or on-site shadow analysis, assess roof structural load, and determine optimal azimuth tilt.'
    },
    {
      step: '02',
      title: 'National Portal & JVVNL Sanction',
      desc: 'We register your file on the PM Surya Ghar National Portal and file for DISCOM load approval with JVVNL Behror.'
    },
    {
      step: '03',
      title: 'Elevated Structure & Module Mounting',
      desc: 'Hot-dip galvanized iron structures elevated up to 8-10 feet to preserve your usable terrace space, wired with Tata/Adani Tier-1 modules.'
    },
    {
      step: '04',
      title: 'Bidirectional Net-Meter Sanction',
      desc: 'JVVNL junior engineer inspection, bidirectional energy meter installation, and official grid commissioning.'
    },
    {
      step: '05',
      title: 'Direct Bank Subsidy Credit (DBT)',
      desc: 'Within 30 days of commissioning, the ₹30,000 to ₹95,000 subsidy is credited directly to your bank account.'
    }
  ];

  const solarSolutions = [
    {
      tag: 'Residential Rooftops',
      title: 'Tata Power On-Grid Net Metering',
      desc: 'The gold standard in reliability. India\'s #1 brand trust with 30-year performance warranty. Excess solar watts spin your JVVNL meter backwards for ₹0 bills.',
      specs: ['1kW to 10kW capacities', 'Up to ₹95,000 combined subsidy', 'Elevated pergola structures', 'Payback within 2.5 to 3.5 years']
    },
    {
      tag: 'Heavy Industrial',
      title: 'Adani Bifacial Solar (10kW - 500kW)',
      desc: 'Dual-glass bifacial technology engineered for high wind load and harsh heat. Ideal for Neemrana Japanese Zone and RIICO Behror industrial plants.',
      specs: ['40% Accelerated Tax Depreciation (Sec 32)', 'Custom LT/HT transformer matching', 'Dual MPPT string inverters', 'Full industrial ROI under 3 years']
    },
    {
      tag: 'Continuous Power',
      title: 'Hybrid Solar with Battery Backup',
      desc: 'Combines grid-tied savings with high-capacity lithium or tall tubular battery storage, giving you 24/7 power during regional grid cuts.',
      specs: ['Zero interruption micro-switchover', 'Pure sine wave wave-shaping', 'Smart priority algorithm (Solar > Battery > Grid)', 'Protects sensitive electronics']
    }
  ];

  const faqs = [
    {
      q: 'How much subsidy will I receive, and what is the 100 free units rule in Rajasthan?',
      a: 'On a standard 3kW or higher system, you receive ₹78,000 from the Central PM Surya Ghar scheme while keeping your 100 free units/month on your JVVNL meter. Alternatively, you can claim up to ₹95,000 (+₹17,000 extra cash upfront) if you choose to surrender the 100 free units scheme. Because a 3kW system generates 360–420+ units to make your power bill ₹0 anyway, taking the full ₹95,000 upfront subsidy is almost always the smartest option. For 1kW and 2kW systems, subsidies are ₹30,000 and ₹60,000 respectively.'
    },
    {
      q: 'Why should I choose Tata Power Solar panels over local brands?',
      a: 'Tata is India’s most trusted engineering brand with proven durability. Tata Power Solar panels feature N-Type TOPCon bifacial cells with a 30-year linear performance warranty. They suffer far less heat degradation in Rajasthan’s 46°C summer climate compared to generic panels.'
    },
    {
      q: 'Can I get a loan from State Bank of India (SBI) for solar?',
      a: 'Yes! SBI offers the PM Surya Ghar Solar Loan scheme at an ultra-low subsidized interest rate (6% interest p.a.) with zero property collateral. Deewan Solar handles your SBI application in-store so your loan EMI is less than your previous electricity bill.'
    },
    {
      q: 'Can I install solar on Bajaj Finserv EMI without downpayment?',
      a: 'No. Bajaj Finserv EMIs are offered exclusively for home electronics and appliances at our Deewan Enterprises showroom in Behror. For Solar rooftop systems, financing is provided exclusively through State Bank of India (SBI) under the PM Surya Ghar Solar Loan scheme (6% interest p.a., collateral-free, up to 10 years).'
    },
    {
      q: 'Will installing solar ruin my rooftop terrace space?',
      a: 'Not at all. We specialize in custom elevated hot-dip galvanized iron pergola structures (elevated 8 to 10 feet). This allows your family to walk, relax, and use the terrace underneath while the panels create a shaded rooftop awning.'
    }
  ];

  return (
    <div className="flex flex-col bg-[#ffffff] text-[#1d1d1f] overflow-hidden">
      
      {/* 1. HERO SECTION (Apple Clean Monochrome Luxury) */}
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

          <div className="inline-flex items-center justify-center gap-2 mx-auto mt-1">
            <span className="rounded-full bg-[#f5f5f7] border border-[#d2d2d7] px-4 py-2 text-xs sm:text-sm font-bold tracking-wider text-[#1d1d1f]">
              Authorized EPC Partner for Tata Power Solar & Adani Solar
            </span>
          </div>

          <h1 className="text-[36px] min-[400px]:text-[46px] sm:text-[68px] lg:text-[84px] font-black tracking-tight text-[#1d1d1f] leading-[1.04] max-w-5xl mx-auto">
            The Architecture of Energy Autonomy.
          </h1>

          <p className="text-[17px] sm:text-[20px] md:text-[22px] text-[#424245] max-w-3xl mx-auto leading-[1.5] font-normal px-2 sm:px-4">
            Turn relentless Rajasthan sunlight into zero electricity bills. Tier-1 N-Type TOPCon & Bifacial solar engineering, <strong>up to ₹95,000 direct subsidy</strong>, guaranteed JVVNL net metering, and collateral-free <strong>SBI solar loans</strong> (@ 6% interest). (Bajaj Finserv EMIs available for showroom electronics).
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3.5 mt-3">
            <a
              href="#calculator"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#1d1d1f] hover:bg-black active:scale-[0.98] text-white font-bold px-7 sm:px-8 py-4 text-sm sm:text-base transition-all shadow-md min-h-[48px] apple-btn-press"
            >
              <Sun className="h-5 w-5" />
              <span>Launch Quotation Studio</span>
              <ArrowRight className="h-4 w-4" />
            </a>

            <Link
              href="https://wa.me/919571839696?text=Namaste%20Deewan%20Solar%2C%20I%20would%20like%20to%20request%20a%20solar%20consultation%20with%20Tata%20%2F%20Adani%20panels."
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

            <a
              href="#solar-lead-capture"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-[#d2d2d7] text-[#1d1d1f] hover:bg-[#f5f5f7] font-bold px-6 py-4 text-xs sm:text-sm transition-all min-h-[48px] apple-btn-press"
            >
              <ShieldCheck className="h-4 w-4 text-[#1d1d1f]" />
              <span>Book Rooftop Feasibility Audit</span>
            </a>
          </div>

        </div>
      </section>

      {/* 2. SOLAR PARTNERS SLIDESHOW (Pure Logo Showcase) */}
      <section className="w-full bg-[#fbfbfd] py-14 border-b border-[#f0f0f4]">
        <div className="apple-container flex flex-col gap-6 text-center">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#0071e3] block mb-1">
              Authorized Tier-1 Manufacturers
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#1d1d1f]">
              Official Solar Partners
            </h2>
          </div>
          <HorizontalBrandSlideview defaultSection="solar" />
        </div>
      </section>

      {/* 3. PM SURYA GHAR SUBSIDY BREAKDOWN (Up to ₹95,000) */}
      <section id="subsidy" className="w-full bg-[#ffffff] py-24 border-b border-[#f0f0f4]">
        <div className="apple-container flex flex-col gap-12">
          
          {/* Prime Minister Narendra Modi PM Surya Ghar Trust Card */}
          <PMSuryaGharTrust />

          <div className="text-center max-w-2xl mx-auto flex flex-col gap-2 pt-4">
            <span className="text-[11px] font-semibold uppercase tracking-widest text-[#86868b]">
              Central & State Government Initiative
            </span>
            <h2 className="text-[34px] sm:text-[46px] font-extrabold text-[#1d1d1f] tracking-tight leading-tight">
              Subsidy Slab & Savings Overview
            </h2>
            <p className="text-xs sm:text-sm text-[#6e6e73] leading-relaxed">
              Central PM Surya Ghar DBT subsidy combined with Rajasthan clean energy incentives. Direct bank account credit upon JVVNL bidirectional commissioning.
            </p>
          </div>

          {/* 3 Subsidy Cards Bento - Apple Clean Styling */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {subsidyTiers.map((tier, idx) => (
              <div
                key={idx}
                className="rounded-3xl border border-[#e5e5ea] bg-white p-8 flex flex-col justify-between apple-card-hover shadow-3xs"
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

                  <p className="text-xs text-[#6e6e73] mt-4 leading-relaxed">
                    {tier.suitability}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-[#f0f0f4] flex items-center justify-between text-xs">
                  <span className="text-[#86868b]">Estimated Savings:</span>
                  <span className="text-[#1d1d1f] font-semibold">{tier.savings}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Rajasthan 100-Unit Waiver vs ₹95,000 Transparency Card - Clean Monochrome */}
          <div className="rounded-3xl border border-[#e5e5ea] bg-white p-7 flex flex-col md:flex-row items-start md:items-center justify-between gap-5 shadow-3xs">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#f5f5f7] border border-[#e5e5ea] text-[#1d1d1f] shrink-0 shadow-3xs">
                <Sun className="h-6 w-6" />
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2 flex-wrap">
                  <h4 className="text-base font-extrabold text-[#1d1d1f]">
                    Rajasthan Subsidy Rule: ₹78,000 vs ₹95,000 Explained
                  </h4>
                  <span className="text-[9px] font-semibold bg-[#f5f5f7] text-[#1d1d1f] px-2 py-0.5 rounded-full border border-[#e5e5ea]">
                    100 Free Units Trade-Off
                  </span>
                </div>
                <p className="text-xs text-[#6e6e73] leading-relaxed max-w-3xl">
                  Under Rajasthan Discom regulations, you receive <strong>₹78,000</strong> central subsidy on a 3kW system while retaining your 100 free units/month scheme on your meter, <strong>OR up to ₹95,000</strong> (+₹17,000 extra state subsidy) if you surrender the 100 free units. Because a 3kW system generates 360–420+ units to make your power bill zero anyway, claiming the extra ₹17,000 cash upfront provides the highest financial ROI.
                </p>
              </div>
            </div>

            <a
              href="#calculator"
              className="inline-flex items-center gap-1.5 rounded-full bg-[#1d1d1f] hover:bg-black text-white text-xs font-semibold px-5 py-3 transition-colors whitespace-nowrap shadow-xs"
            >
              <span>Compare in Studio</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </div>

          {/* Document Checklist Callout */}
          <div className="rounded-3xl border border-[#e5e5ea] bg-white p-8 flex flex-col lg:flex-row items-center justify-between gap-6 apple-card-hover">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#f4f9ff] text-[#0071e3] shrink-0 border border-[#c0dfff]">
                <FileCheck className="h-6 w-6" />
              </div>
              <div>
                <h4 className="text-base font-bold text-[#1d1d1f]">Documents Required for JVVNL Net Metering</h4>
                <p className="text-xs text-[#6e6e73] mt-1">
                  1. Latest JVVNL Electricity Bill • 2. Aadhaar Card • 3. Bank Passbook / Cheque (DBT) • 4. Roof Ownership / Registry Proof
                </p>
              </div>
            </div>

            <Link
              href="https://wa.me/919571839696?text=Namaste%20Deewan%20Solar%2C%20I%20have%20my%20documents%20ready%20for%20the%20PM%20Surya%20Ghar%20subsidy%20in%20Behror."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#1d1d1f] hover:bg-black text-white font-bold px-6 py-3 text-xs transition-colors whitespace-nowrap shadow-xs"
            >
              <MessageSquare className="h-4 w-4" />
              <span>Verify My Subsidy Eligibility</span>
            </Link>
          </div>

        </div>
      </section>

      {/* 4. INTERACTIVE SOLAR STUDIO CALCULATOR (#calculator) */}
      <section id="calculator" className="w-full bg-[#fbfbfd] py-24 border-b border-[#f0f0f4]">
        <div className="apple-container flex flex-col gap-10">
          
          <SolarStudioCalculator
            title="Interactive Solar Quotation Studio"
            subtitle="Compare quotations with Tata Power Solar (#1 Recommendation) vs Adani Solar. Up to ₹95,000 subsidy and subsidized 6% SBI solar loans."
          />

        </div>
      </section>

      {/* 5. TATA & ADANI SOLAR COMPARISON BENCHMARK (#brands) */}
      <section id="brands" className="w-full bg-[#ffffff] py-24 border-b border-[#f0f0f4]">
        <div className="apple-container flex flex-col gap-10">
          
          <SolarBrandComparison />

        </div>
      </section>

      {/* 6. SOLAR FINANCING PARTNER: STATE BANK OF INDIA (EXCLUSIVE FOR SOLAR) */}
      <section className="w-full bg-[#fbfbfd] py-20 border-b border-[#f0f0f4]">
        <div className="apple-container flex flex-col gap-10">
          
          <div className="text-center max-w-xl mx-auto flex flex-col gap-2">
            <span className="text-[11px] font-semibold uppercase tracking-widest text-[#86868b]">
              Official Solar Financing Partner
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1d1d1f] tracking-tight">
              State Bank of India (SBI) Surya Ghar Loans
            </h2>
            <p className="text-xs text-[#6e6e73] leading-relaxed">
              Rooftop solar systems are financed exclusively through the State Bank of India (SBI) under the PM Surya Ghar scheme. (Bajaj Finserv is exclusively for home electronics and appliances).
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto w-full">
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
                <h4 className="text-base font-bold text-[#1d1d1f]">SBI Surya Ghar Collateral-Free Loan</h4>
                <p className="text-xs text-[#6e6e73] mt-2 leading-relaxed">
                  Repay your solar installation in flexible monthly installments up to 10 years at a subsidized rate of 6% interest p.a. Zero property mortgage required; monthly bill savings exceed the loan EMI.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#f0f0f4] flex items-center justify-between text-xs">
                <span className="font-bold text-[#1d1d1f]">Interest: 6% p.a. Subsidized</span>
                <span className="text-[10px] text-[#86868b]">10-Yr Flexible Tenure</span>
              </div>
            </div>

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
                <h4 className="text-base font-bold text-[#1d1d1f]">Electronics Showroom EMIs</h4>
                <p className="text-xs text-[#6e6e73] mt-2 leading-relaxed">
                  Bajaj Finserv provides 0% downpayment EMIs exclusively for home electronics and appliances (Inverter ACs, TVs, Refrigerators) at our showroom. Not available for solar systems.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#f0f0f4] flex items-center justify-between text-xs">
                <span className="font-bold text-[#1d1d1f]">0% Downpayment</span>
                <span className="text-[10px] text-[#86868b]">Electronics Showroom</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 7. VERIFIED CUSTOMER REVIEWS (DEFAULT IN HINDI + ENGLISH TOGGLE) */}
      <section className="w-full bg-[#ffffff] py-24 border-b border-[#f0f0f4]">
        <div className="apple-container flex flex-col gap-10">
          <CustomerReviews />
        </div>
      </section>

      {/* 8. THE 5-STEP TURNKEY DEEWAN PROCESS */}
      <section className="w-full bg-[#fbfbfd] py-24 border-b border-[#f0f0f4]">
        <div className="apple-container flex flex-col gap-14">
          
          <div className="text-center max-w-2xl mx-auto flex flex-col gap-2">
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#0071e3]">
              Hassle-Free Execution
            </span>
            <h2 className="text-[34px] sm:text-[46px] font-extrabold text-[#1d1d1f] tracking-tight leading-tight">
              From Rooftop Survey to ₹0 Bill
            </h2>
            <p className="text-xs sm:text-sm text-[#6e6e73]">
              We handle 100% of the technical, structural, and regulatory paperwork so you never have to stand in line at government offices.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {turnkeySteps.map((s, idx) => (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-white border border-[#e5e5ea] flex flex-col justify-between apple-card-hover"
              >
                <div>
                  <span className="text-2xl font-black text-[#0071e3] block mb-3 font-mono">
                    {s.step}
                  </span>
                  <h4 className="text-sm font-bold text-[#1d1d1f] leading-snug">{s.title}</h4>
                  <p className="text-[11px] text-[#6e6e73] mt-2.5 leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 9. FREQUENTLY ASKED QUESTIONS */}
      <section className="w-full bg-[#ffffff] py-24 border-b border-[#f0f0f4]">
        <div className="apple-container flex flex-col gap-12">
          
          <div className="text-center max-w-xl mx-auto flex flex-col gap-2">
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#0071e3]">
              Clarity & Transparency
            </span>
            <h2 className="text-[32px] sm:text-[42px] font-extrabold text-[#1d1d1f] tracking-tight">
              Solar Installation FAQs
            </h2>
            <p className="text-xs sm:text-sm text-[#6e6e73]">
              Direct answers to the most common queries from homeowners and factory managers in Rajasthan.
            </p>
          </div>

          <div className="max-w-3xl mx-auto w-full space-y-4">
            {faqs.map((f, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl bg-[#fbfbfd] border border-[#e5e5ea] flex flex-col gap-2 apple-card-hover"
              >
                <div className="flex items-start gap-3">
                  <HelpCircle className="h-4 w-4 text-[#0071e3] shrink-0 mt-0.5" />
                  <h4 className="text-sm font-bold text-[#1d1d1f]">{f.q}</h4>
                </div>
                <p className="text-xs text-[#6e6e73] leading-relaxed pl-7">
                  {f.a}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 10. SOLAR LEAD CAPTURE FORM (#solar-lead-capture) */}
      <section id="solar-lead-capture" className="w-full bg-[#fbfbfd] py-24 text-[#1d1d1f]">
        <div className="apple-container flex flex-col gap-10">
          
          <div className="max-w-2xl mx-auto w-full text-center flex flex-col gap-2">
            <span className="text-[11px] font-semibold uppercase tracking-widest text-[#86868b]">
              Schedule On-Site Inspection
            </span>
            <h2 className="text-[32px] sm:text-[42px] font-extrabold text-[#1d1d1f] tracking-tight">
              Request Your Free Rooftop Audit
            </h2>
            <p className="text-xs text-[#6e6e73] leading-relaxed">
              Our certified solar engineers will visit your property in Behror, Neemrana, Kotputli, Alwar, or surrounding Rajasthan districts to evaluate structural orientation and net metering points. (Exclusively servicing Rajasthan; not in Haryana or UP).
            </p>
          </div>

          <div className="max-w-2xl mx-auto w-full rounded-3xl border border-[#e5e5ea] bg-white p-7 sm:p-9 shadow-lg">
            <SolarLeadForm />
          </div>

        </div>
      </section>

    </div>
  );
}
