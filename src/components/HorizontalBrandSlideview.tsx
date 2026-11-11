'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, Sun, Tv, Layers } from 'lucide-react';

interface BrandItem {
  name: string;
  logo: string;
  tag: string;
}

// 1. STRICTLY SOLAR BRANDS ONLY (No electronics here)
const SOLAR_BRANDS: BrandItem[] = [
  { name: 'Tata Power Solar', logo: '/brands/tata.webp', tag: '#1 Preferred Partner' },
  { name: 'Adani Solar', logo: '/brands/adani-solar.webp', tag: 'Tier-1 Bifacial' },
  { name: 'Waaree Energies', logo: '/brands/waree.webp', tag: 'High-Efficiency TOPCon' },
  { name: 'UTL Solar', logo: '/brands/utl-solar.webp', tag: 'Rooftop PCU & Panels' },
  { name: 'Luminous Solar', logo: '/brands/luminous.webp', tag: 'Solar Inverters & Batteries' },
  { name: 'Microtek Solar', logo: '/brands/microtek.webp', tag: 'Heavy Duty MPPT' },
  { name: 'Exide Solar', logo: '/brands/exide.webp', tag: 'Deep Cycle C10 Storage' },
  { name: 'Su-Kam Solar', logo: '/brands/sukam.webp', tag: 'Solar Power Systems' },
  { name: 'Livguard Solar', logo: '/brands/livguard.webp', tag: 'Solar Inverters & Panels' },
  { name: 'Amaron Solar', logo: '/brands/amaron.webp', tag: 'Tubular Solar Batteries' }
];

// 2. STRICTLY ELECTRONICS SHOWROOM BRANDS (No solar kits here)
const ELECTRONICS_BRANDS: BrandItem[] = [
  { name: 'Daikin', logo: '/brands/daikin.webp', tag: 'Inverter Air Conditioners' },
  { name: 'Voltas', logo: '/brands/voltas.webp', tag: 'All-Weather Inverter ACs' },
  { name: 'Sony BRAVIA', logo: '/brands/sony.webp', tag: 'Smart 4K XR OLED & LED' },
  { name: 'Samsung', logo: '/brands/samsung.webp', tag: 'Smart TVs & Refrigerators' },
  { name: 'LG', logo: '/brands/lg.webp', tag: 'Dual Inverter Appliances' },
  { name: 'Panasonic', logo: '/brands/panasonic.webp', tag: 'Miraie Inverter ACs & TVs' },
  { name: 'Blue Star', logo: '/brands/bluestar.webp', tag: 'Commercial & Room ACs' },
  { name: 'Mitsubishi Electric', logo: '/brands/mitsubishi-electric.webp', tag: 'Heavy Duty Cooling' },
  { name: 'Bajaj Appliances', logo: '/brands/bajaj.webp', tag: 'Kitchen & Home Comfort' },
  { name: 'Usha', logo: '/brands/usha.webp', tag: 'Ceiling Fans & Heaters' },
  { name: 'Khaitan', logo: '/brands/khaitan.webp', tag: 'Ventilation & Air Circulators' },
  { name: 'Hisense', logo: '/brands/hisense.webp', tag: 'Google TV 4K Displays' },
  { name: 'TCL', logo: '/brands/tcl.webp', tag: 'Mini LED 4K Smart TVs' },
  { name: 'Mi', logo: '/brands/mi.webp', tag: 'Smart Living Appliances' }
];

interface HorizontalBrandSlideviewProps {
  defaultSection?: 'solar' | 'electronics' | 'both';
  showToggle?: boolean;
}

export default function HorizontalBrandSlideview({
  defaultSection = 'both',
  showToggle = true
}: HorizontalBrandSlideviewProps) {
  const [activeTab, setActiveTab] = useState<'both' | 'solar' | 'electronics'>(defaultSection);

  // Triple array to ensure smooth infinite seamless loop
  const solarRow = [...SOLAR_BRANDS, ...SOLAR_BRANDS, ...SOLAR_BRANDS];
  const electronicsRow = [...ELECTRONICS_BRANDS, ...ELECTRONICS_BRANDS, ...ELECTRONICS_BRANDS];

  return (
    <div className="w-full flex flex-col gap-8">
      
      {/* Apple-style Section Pill Filter */}
      {showToggle && (
        <div className="flex items-center justify-center">
          <div className="inline-flex items-center gap-1.5 p-1.5 bg-[#f5f5f7] rounded-full border border-[#d2d2d7]">
            <button
              type="button"
              onClick={() => setActiveTab('both')}
              className={`flex items-center gap-2 px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer apple-btn-press ${
                activeTab === 'both'
                  ? 'bg-white text-[#1d1d1f] shadow-2xs border border-[#d2d2d7]'
                  : 'text-[#515154] hover:text-[#1d1d1f]'
              }`}
            >
              <Layers className="h-4 w-4" />
              <span>All Authorized Brands</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('solar')}
              className={`flex items-center gap-2 px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer apple-btn-press ${
                activeTab === 'solar'
                  ? 'bg-white text-[#1d1d1f] shadow-2xs border border-[#d2d2d7]'
                  : 'text-[#515154] hover:text-[#1d1d1f]'
              }`}
            >
              <Sun className="h-4 w-4" />
              <span>Solar Partners Only</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('electronics')}
              className={`flex items-center gap-2 px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer apple-btn-press ${
                activeTab === 'electronics'
                  ? 'bg-white text-[#1d1d1f] shadow-2xs border border-[#d2d2d7]'
                  : 'text-[#515154] hover:text-[#1d1d1f]'
              }`}
            >
              <Tv className="h-4 w-4" />
              <span>Electronics Showroom</span>
            </button>
          </div>
        </div>
      )}

      {/* SECTION 1: SOLAR MANUFACTURERS TRACK (Strictly Solar Brands) */}
      {(activeTab === 'both' || activeTab === 'solar') && (
        <div className="flex flex-col gap-3.5">
          <div className="flex items-center justify-between px-2">
            <div className="flex items-center gap-2.5">
              <Sun className="h-5 w-5 text-[#1d1d1f]" />
              <span className="text-sm sm:text-base font-black text-[#1d1d1f] tracking-tight">
                Tier-1 Solar Manufacturers & Inverter EPC Partners
              </span>
            </div>
            <span className="text-xs font-bold text-[#515154] uppercase tracking-wider hidden sm:inline">
              Tata Power • Adani • Waaree • UTL • Luminous • Microtek
            </span>
          </div>

          <div className="relative w-full overflow-hidden py-2 apple-marquee-mask">
            <div className="animate-marquee gap-4 sm:gap-6 py-2 items-center">
              {solarRow.map((b, i) => (
                <div
                  key={`solar-logo-${b.name}-${i}`}
                  title={`${b.name} (${b.tag})`}
                  className="flex items-center justify-center px-5 sm:px-7 py-3 sm:py-3.5 rounded-2xl bg-[#ffffff] border border-[#e5e5ea] h-18 sm:h-22 w-40 sm:w-52 shadow-2xs hover:shadow-md hover:border-[#1d1d1f] transition-all duration-300 cursor-pointer shrink-0 apple-card-hover group"
                >
                  <img
                    src={b.logo}
                    alt={`${b.name} Solar Authorized Logo`}
                    className="max-h-10 sm:max-h-13 max-w-[120px] sm:max-w-[150px] w-auto h-auto object-contain select-none transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* SECTION 2: ELECTRONICS SHOWROOM TRACK (Strictly Appliances & Electronics) */}
      {(activeTab === 'both' || activeTab === 'electronics') && (
        <div className="flex flex-col gap-3.5">
          <div className="flex items-center justify-between px-2">
            <div className="flex items-center gap-2.5">
              <Tv className="h-5 w-5 text-[#1d1d1f]" />
              <span className="text-sm sm:text-base font-black text-[#1d1d1f] tracking-tight">
                Authorized Showroom Electronics & Home Appliances
              </span>
            </div>
            <span className="text-xs font-bold text-[#515154] uppercase tracking-wider hidden sm:inline">
              Daikin • Voltas • Sony • Samsung • LG • Panasonic • Blue Star
            </span>
          </div>

          <div className="relative w-full overflow-hidden py-2 apple-marquee-mask">
            <div className="animate-marquee-reverse gap-4 sm:gap-6 py-2 items-center">
              {electronicsRow.map((b, i) => (
                <div
                  key={`elec-logo-${b.name}-${i}`}
                  title={`${b.name} (${b.tag})`}
                  className="flex items-center justify-center px-5 sm:px-7 py-3 sm:py-3.5 rounded-2xl bg-[#ffffff] border border-[#e5e5ea] h-18 sm:h-22 w-40 sm:w-52 shadow-2xs hover:shadow-md hover:border-[#1d1d1f] transition-all duration-300 cursor-pointer shrink-0 apple-card-hover group"
                >
                  <img
                    src={b.logo}
                    alt={`${b.name} Authorized Showroom Logo`}
                    className="max-h-10 sm:max-h-13 max-w-[120px] sm:max-w-[150px] w-auto h-auto object-contain select-none transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Trust Footer Note */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-2 text-center text-xs sm:text-sm text-[#424245] px-4 pt-1">
        <div className="flex items-center gap-2 font-semibold">
          <ShieldCheck className="h-4.5 w-4.5 text-[#1d1d1f] shrink-0" />
          <span>
            Authorized Direct EPC Partner for <strong className="text-[#1d1d1f]">Tata Power Solar</strong> & <strong className="text-[#1d1d1f]">Adani Solar</strong> kits in Rajasthan.
          </span>
        </div>
        <span className="hidden sm:inline">•</span>
        <span>0% EMIs available on appliances via <strong className="text-[#1d1d1f]">Bajaj Finserv</strong> at our Behror showroom desk.</span>
      </div>

    </div>
  );
}
