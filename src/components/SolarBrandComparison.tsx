'use client';

import { useState } from 'react';
import { ShieldCheck, Award, Zap, CheckCircle2, ChevronRight, Sun } from 'lucide-react';

interface BrandSpec {
  brand: string;
  badge: string;
  model: string;
  tech: string;
  efficiency: string;
  tempCoeff: string;
  warranty: string;
  highlights: string[];
  logo: string;
}

const SOLAR_BRANDS: BrandSpec[] = [
  {
    brand: 'Tata Power Solar',
    badge: 'Flagship Choice',
    model: 'TP-550-MB Series',
    tech: 'N-Type TOPCon Dual-Glass Bifacial',
    efficiency: '22.4%',
    tempCoeff: '-0.30% / °C (Best in Class)',
    warranty: '30-Year Linear (12-Yr Product)',
    highlights: [
      'Dual-side power capture with up to 25% rear gain',
      'Ultra-low degradation (<1% in year 1, 0.4%/yr after)',
      'Engineered for extreme Rajasthan desert heat (up to 48°C)',
      '100% eligible for PM Surya Ghar subsidy'
    ],
    logo: '/brands/tata.webp'
  },
  {
    brand: 'Adani Solar',
    badge: 'Industrial Durability',
    model: 'Elan Shine 545W',
    tech: 'Mono PERC Dual-Glass Bifacial',
    efficiency: '21.8%',
    tempCoeff: '-0.34% / °C',
    warranty: '25-Year Linear (12-Yr Product)',
    highlights: [
      'Heavy-duty wind resistance (5400 Pa certified)',
      'PID and salt mist resistant for long life',
      'High mechanical resilience for dusty climates',
      'Standard on-grid and hybrid pairing'
    ],
    logo: '/brands/adani-solar.webp'
  },
  {
    brand: 'Waaree Energies',
    badge: 'Highest Market Share',
    model: 'Arka Series 545W',
    tech: 'Half-Cut Mono PERC 10-BB',
    efficiency: '21.3%',
    tempCoeff: '-0.35% / °C',
    warranty: '25-Year Linear (10-Yr Product)',
    highlights: [
      '10-busbar design for reduced internal resistance',
      'Superb generation during winter & morning low-light',
      'Proven field reliability across 10,000+ Indian installations',
      'High shadow-tolerance architecture'
    ],
    logo: '/brands/waree.webp'
  },
  {
    brand: 'UTL Solar',
    badge: 'Value & Residential',
    model: 'Gamma / Mono 540W',
    tech: 'Mono PERC 144 Half-Cell',
    efficiency: '20.8%',
    tempCoeff: '-0.37% / °C',
    warranty: '25-Year Linear (10-Yr Product)',
    highlights: [
      'Optimal cost-to-performance ratio for homes',
      'Seamless compatibility with UTL and Luminous PCUs',
      'Weather-sealed junction box with bypass diodes',
      'Quick dispatch from Behror local inventory'
    ],
    logo: '/brands/utl-solar.webp'
  }
];

export default function SolarBrandComparison() {
  const [selectedBrand, setSelectedBrand] = useState<string>('Tata Power Solar');
  const activeBrand = SOLAR_BRANDS.find((b) => b.brand === selectedBrand) || SOLAR_BRANDS[0];

  return (
    <div className="w-full rounded-3xl bg-[#ffffff] border border-[#e5e5ea] text-[#1d1d1f] shadow-sm apple-card-hover overflow-hidden transition-all">
      
      {/* Header */}
      <div className="p-6 sm:p-8 border-b border-[#f0f0f4] bg-[#fbfbfd]">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <span className="text-[10px] font-semibold uppercase tracking-widest text-[#86868b] block mb-1">
              Tier-1 Engineering Benchmarking
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#1d1d1f]">
              Authorized Solar Brand Benchmark
            </h3>
            <p className="text-xs sm:text-sm mt-1 max-w-2xl leading-relaxed text-[#6e6e73]">
              Deewan Solar partners exclusively with India’s highest-rated solar manufacturers. Compare cell architecture, temperature coefficients for Rajasthan, and performance warranties.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#f5f5f7] border border-[#d2d2d7] text-[#1d1d1f] text-[10px] font-semibold uppercase tracking-wider">
              <CheckCircle2 className="h-3.5 w-3.5 text-[#1d1d1f]" />
              <span>100% Tier-1 Guaranteed</span>
            </span>
          </div>
        </div>

        {/* Brand Selector Pills */}
        <div className="flex flex-wrap gap-2 mt-6">
          {SOLAR_BRANDS.map((item) => (
            <button
              key={item.brand}
              type="button"
              onClick={() => setSelectedBrand(item.brand)}
              className={`flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-full border text-xs font-semibold transition-all cursor-pointer apple-btn-press ${
                selectedBrand === item.brand
                  ? 'bg-[#1d1d1f] text-white border-[#1d1d1f] shadow-xs'
                  : 'bg-white text-[#6e6e73] border-[#e5e5ea] hover:text-[#1d1d1f] hover:border-[#d2d2d7]'
              }`}
            >
              <span>{item.brand}</span>
              <span
                className={`text-[9px] px-1.5 py-0.2 rounded-full font-semibold ${
                  selectedBrand === item.brand
                    ? 'bg-white/20 text-white'
                    : 'bg-[#f5f5f7] text-[#6e6e73]'
                }`}
              >
                {item.efficiency}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Comparison Detail Panel */}
      <div className="p-5 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
        
        {/* Left: Brand Identity & Tech Specs (7 cols) */}
        <div className="lg:col-span-7 flex flex-col gap-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-12 sm:h-13 w-24 sm:w-28 rounded-xl bg-white border border-[#e5e5ea] p-2 flex items-center justify-center shadow-3xs shrink-0">
                <img
                  src={activeBrand.logo}
                  alt={`${activeBrand.brand} logo`}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <div>
                <span className="text-[10px] font-semibold uppercase tracking-wider text-[#86868b] block">
                  {activeBrand.badge}
                </span>
                <h4 className="text-lg sm:text-xl font-extrabold text-[#1d1d1f]">
                  {activeBrand.brand} • {activeBrand.model}
                </h4>
              </div>
            </div>
          </div>

          {/* 3 Metric Cards */}
          <div className="grid grid-cols-3 gap-2 sm:gap-3">
            <div className="p-2.5 sm:p-4 rounded-2xl border border-[#e5e5ea] bg-white">
              <span className="text-[9px] font-semibold uppercase tracking-wider text-[#86868b] block">
                Efficiency
              </span>
              <span className="text-base sm:text-xl font-bold text-[#1d1d1f] block mt-0.5">
                {activeBrand.efficiency}
              </span>
              <span className="text-[9px] text-[#86868b] block">N-Type / PERC</span>
            </div>

            <div className="p-2.5 sm:p-4 rounded-2xl border border-[#e5e5ea] bg-white">
              <span className="text-[9px] font-semibold uppercase tracking-wider text-[#86868b] block">
                Temp. Coeff.
              </span>
              <span className="text-base sm:text-xl font-bold text-[#1d1d1f] block mt-0.5">
                {activeBrand.tempCoeff.split(' ')[0]}
              </span>
              <span className="text-[9px] text-[#86868b] block">Heat Tested</span>
            </div>

            <div className="p-2.5 sm:p-4 rounded-2xl border border-[#e5e5ea] bg-white">
              <span className="text-[9px] font-semibold uppercase tracking-wider text-[#86868b] block">
                Warranty
              </span>
              <span className="text-base sm:text-xl font-bold text-[#1d1d1f] block mt-0.5">
                {activeBrand.warranty.split(' ')[0]}
              </span>
              <span className="text-[9px] text-[#86868b] block">Linear Yield</span>
            </div>
          </div>

          {/* Key Engineering Highlights */}
          <div className="space-y-2 mt-1">
            <span className="text-[10px] font-bold uppercase tracking-wider block text-[#6e6e73]">
              Architectural Highlights
            </span>
            <ul className="space-y-1.5 text-xs">
              {activeBrand.highlights.map((h, i) => (
                <li key={i} className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#1d1d1f] shrink-0" />
                  <span className="text-[#1d1d1f]">{h}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right: Guidance & Consultation Action (5 cols) */}
        <div className="lg:col-span-5 p-6 rounded-2xl border border-[#e5e5ea] bg-[#fbfbfd] flex flex-col justify-between gap-5">
          <div>
            <div className="flex items-center gap-2 mb-2 text-[#1d1d1f]">
              <Sun className="h-4 w-4 text-[#1d1d1f]" />
              <span className="text-xs font-bold uppercase tracking-wider">Deewan Engineering Advice</span>
            </div>
            <h5 className="text-sm font-bold text-[#1d1d1f]">
              Which brand is ideal for your rooftop?
            </h5>
            <p className="text-xs mt-2 leading-relaxed text-[#6e6e73]">
              For high-dust residential rooftops in Behror, we recommend <span className="font-semibold text-[#1d1d1f]">Tata Power TOPCon</span> or <span className="font-semibold text-[#1d1d1f]">Adani Bifacial</span> for minimum heat loss and 30-year yield stability under intense Rajasthan summers.
            </p>
          </div>

          <div className="pt-4 border-t border-[#e5e5ea] flex flex-col gap-2.5">
            <a
              href={`https://wa.me/919571839696?text=Namaste%20Deewan%20Solar%2C%20I%20am%20interested%20in%20${encodeURIComponent(activeBrand.brand)}%20${encodeURIComponent(activeBrand.model)}%20solar%20panels.%20Please%20share%20pricing%20and%20feasibility.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#1d1d1f] hover:bg-black text-white font-bold py-3.5 px-5 text-xs transition-colors shadow-xs apple-btn-press"
            >
              <span>Inquire for {activeBrand.brand} on WhatsApp (+91 95718 39696)</span>
              <ChevronRight className="h-3.5 w-3.5" />
            </a>

            <span className="text-[10px] text-center text-[#86868b]">
              Authorized stock available at Deewan Complex, Alwar Rd, Behror.
            </span>
          </div>
        </div>

      </div>
    </div>
  );
}
