'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { animate as animeAnimate } from 'animejs';
import {
  Sun,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  MessageSquare,
  Building,
  Phone,
  Info
} from 'lucide-react';

interface SolarKitSpec {
  id: string;
  kw: number;
  label: string;
  tag?: string;
  monthlyBillRange: [number, number];
  baseCost: number;
  minPrice: number;
  maxPrice: number;
  subsidyMin: number;
  subsidyMax: number;
  unitsPerMonth: string;
  panelCount: number;
  panelWattage: number;
  roofAreaSqFt: number;
  bestFor: string;
  typicalAppliances: string;
  sbiEmiFrom: number;
}

// Hand-curated factory kit matrices based on handwritten quotation notes & user specifications
// 1 KW - 30k Subsidy | 2 KW - 60k Subsidy | 3 KW - 78k Subsidy (up to 95k in Rajasthan)
const TATA_KITS: SolarKitSpec[] = [
  {
    id: 'tata-1kw',
    kw: 1.0,
    label: '1 kW Kit',
    tag: 'Entry / Small Home',
    monthlyBillRange: [800, 1600],
    baseCost: 70000,
    minPrice: 65000,
    maxPrice: 75000,
    subsidyMin: 30000,
    subsidyMax: 30000,
    unitsPerMonth: '120 - 140 units/mo',
    panelCount: 2,
    panelWattage: 550,
    roofAreaSqFt: 95,
    bestFor: '1-2 Room Houses & Basic Lighting Load',
    typicalAppliances: 'LED Lights, Ceiling Fans, TV, Small Refrigerator',
    sbiEmiFrom: 510
  },
  {
    id: 'tata-2kw',
    kw: 2.0,
    label: '2 kW Kit',
    tag: 'Medium Household',
    monthlyBillRange: [1600, 2800],
    baseCost: 130000,
    minPrice: 125000,
    maxPrice: 140000,
    subsidyMin: 60000,
    subsidyMax: 60000,
    unitsPerMonth: '240 - 280 units/mo',
    panelCount: 4,
    panelWattage: 550,
    roofAreaSqFt: 190,
    bestFor: '2-3 BHK Homes with Standard Load',
    typicalAppliances: '1 Inverter AC (daytime), Refrigerator, TV, Washing Machine & Fans',
    sbiEmiFrom: 950
  },
  {
    id: 'tata-3kw',
    kw: 3.0,
    label: '3 kW Kit',
    tag: 'Most Popular in Rajasthan',
    monthlyBillRange: [2800, 4800],
    baseCost: 190000,
    minPrice: 180000,
    maxPrice: 205000,
    subsidyMin: 78000,
    subsidyMax: 95000,
    unitsPerMonth: '360 - 420 units/mo',
    panelCount: 6,
    panelWattage: 550,
    roofAreaSqFt: 280,
    bestFor: '3-4 BHK Standard Family Homes',
    typicalAppliances: '1 Inverter AC (1.5 Ton), Refrigerator, TV, Fans, Lights & RO',
    sbiEmiFrom: 1240
  },
  {
    id: 'tata-3.5kw',
    kw: 3.5,
    label: '3.5 kW Kit',
    tag: 'High Generation',
    monthlyBillRange: [4800, 6500],
    baseCost: 215000,
    minPrice: 205000,
    maxPrice: 230000,
    subsidyMin: 78000,
    subsidyMax: 95000,
    unitsPerMonth: '420 - 490 units/mo',
    panelCount: 7,
    panelWattage: 550,
    roofAreaSqFt: 330,
    bestFor: 'Medium Homes with 1-2 ACs',
    typicalAppliances: '2 ACs (alternating), Submersible Water Pump, Washing Machine',
    sbiEmiFrom: 1600
  },
  {
    id: 'tata-5.3kw',
    kw: 5.3,
    label: '5.3 kW Kit',
    tag: 'Zero Bill for 2-3 ACs',
    monthlyBillRange: [6500, 11000],
    baseCost: 300000,
    minPrice: 285000,
    maxPrice: 320000,
    subsidyMin: 78000,
    subsidyMax: 95000,
    unitsPerMonth: '640 - 740 units/mo',
    panelCount: 10,
    panelWattage: 550,
    roofAreaSqFt: 480,
    bestFor: 'Large Family Residences & Kothis',
    typicalAppliances: '3 Inverter ACs, Geysers, Submersible, Heavy Household Load',
    sbiEmiFrom: 2770
  },
  {
    id: 'tata-8kw',
    kw: 8.0,
    label: '8 kW Kit',
    tag: 'Heavy Residential / Villa',
    monthlyBillRange: [11000, 18000],
    baseCost: 375000,
    minPrice: 360000,
    maxPrice: 400000,
    subsidyMin: 78000,
    subsidyMax: 95000,
    unitsPerMonth: '960 - 1,120 units/mo',
    panelCount: 15,
    panelWattage: 550,
    roofAreaSqFt: 720,
    bestFor: 'Luxury Villas, Farmhouses & Multi-Floor Homes',
    typicalAppliances: '4-5 ACs, Multiple Refrigerators, Complete Home Autonomy',
    sbiEmiFrom: 3870
  },
  {
    id: 'tata-10kw',
    kw: 10.0,
    label: '10 kW Kit',
    tag: 'Commercial & High Load',
    monthlyBillRange: [18000, 35000],
    baseCost: 430000,
    minPrice: 410000,
    maxPrice: 460000,
    subsidyMin: 78000,
    subsidyMax: 95000,
    unitsPerMonth: '1,200 - 1,400 units/mo',
    panelCount: 18,
    panelWattage: 550,
    roofAreaSqFt: 900,
    bestFor: 'Commercial Showrooms, Clinics, Schools & Offices',
    typicalAppliances: 'Continuous Day-Long ACs, Heavy Commercial Machinery, 40% Tax Depreciation',
    sbiEmiFrom: 4600
  }
];

const ADANI_KITS: SolarKitSpec[] = [
  {
    id: 'adani-1kw',
    kw: 1.0,
    label: '1 kW Kit',
    tag: 'Budget Entry',
    monthlyBillRange: [800, 1600],
    baseCost: 65000,
    minPrice: 60000,
    maxPrice: 70000,
    subsidyMin: 30000,
    subsidyMax: 30000,
    unitsPerMonth: '120 - 140 units/mo',
    panelCount: 2,
    panelWattage: 545,
    roofAreaSqFt: 95,
    bestFor: '1-2 Rooms / Basic Backup',
    typicalAppliances: 'Lights, Fans, TV, Inverter Charging',
    sbiEmiFrom: 440
  },
  {
    id: 'adani-2kw',
    kw: 2.0,
    label: '2 kW Kit',
    tag: 'Value Engineered',
    monthlyBillRange: [1600, 2800],
    baseCost: 120000,
    minPrice: 115000,
    maxPrice: 130000,
    subsidyMin: 60000,
    subsidyMax: 60000,
    unitsPerMonth: '240 - 280 units/mo',
    panelCount: 4,
    panelWattage: 545,
    roofAreaSqFt: 190,
    bestFor: 'Small Homes & Shops',
    typicalAppliances: '1 Inverter AC (daytime), Fridge, TV, Mixer, LED lights',
    sbiEmiFrom: 800
  },
  {
    id: 'adani-3kw',
    kw: 3.0,
    label: '3 kW Kit',
    tag: 'Lowest Price Entry',
    monthlyBillRange: [2800, 4800],
    baseCost: 180000,
    minPrice: 170000,
    maxPrice: 195000,
    subsidyMin: 78000,
    subsidyMax: 95000,
    unitsPerMonth: '360 - 410 units/mo',
    panelCount: 6,
    panelWattage: 545,
    roofAreaSqFt: 280,
    bestFor: 'Budget-Conscious Standard Family Homes',
    typicalAppliances: '1 Inverter AC (1.5 Ton), Fridge, TV, Fans, Lights & RO',
    sbiEmiFrom: 1090
  },
  {
    id: 'adani-3.6kw',
    kw: 3.6,
    label: '3.6 kW Kit',
    tag: 'Bifacial Double Generation',
    monthlyBillRange: [4800, 6500],
    baseCost: 200000,
    minPrice: 190000,
    maxPrice: 215000,
    subsidyMin: 78000,
    subsidyMax: 95000,
    unitsPerMonth: '430 - 500 units/mo',
    panelCount: 7,
    panelWattage: 545,
    roofAreaSqFt: 330,
    bestFor: 'Homes with 1-2 ACs + Day Usage',
    typicalAppliances: '2 ACs, Washing Machine, Kitchen Appliances, Water Motor',
    sbiEmiFrom: 1390
  },
  {
    id: 'adani-5.5kw',
    kw: 5.5,
    label: '5.5 kW Kit',
    tag: 'Optimal for 3 ACs',
    monthlyBillRange: [6500, 11000],
    baseCost: 300000,
    minPrice: 285000,
    maxPrice: 320000,
    subsidyMin: 78000,
    subsidyMax: 95000,
    unitsPerMonth: '660 - 750 units/mo',
    panelCount: 10,
    panelWattage: 545,
    roofAreaSqFt: 500,
    bestFor: 'Large Family Residences & Kothis',
    typicalAppliances: '3 ACs simultaneously, Multiple Coolers, Deep Freezer',
    sbiEmiFrom: 2770
  },
  {
    id: 'adani-8kw',
    kw: 8.0,
    label: '8 kW Kit',
    tag: 'High Wind-Load Rated',
    monthlyBillRange: [11000, 18000],
    baseCost: 375000,
    minPrice: 355000,
    maxPrice: 395000,
    subsidyMin: 78000,
    subsidyMax: 95000,
    unitsPerMonth: '960 - 1,120 units/mo',
    panelCount: 15,
    panelWattage: 545,
    roofAreaSqFt: 720,
    bestFor: 'Villas, Factories & Large Warehouses',
    typicalAppliances: '4-5 ACs, Continuous Power, Commercial Machinery',
    sbiEmiFrom: 3790
  },
  {
    id: 'adani-10kw',
    kw: 10.0,
    label: '10 kW Kit',
    tag: 'Industrial & Institutional',
    monthlyBillRange: [18000, 35000],
    baseCost: 430000,
    minPrice: 405000,
    maxPrice: 450000,
    subsidyMin: 78000,
    subsidyMax: 95000,
    unitsPerMonth: '1,200 - 1,400 units/mo',
    panelCount: 18,
    panelWattage: 545,
    roofAreaSqFt: 900,
    bestFor: 'RIICO Neemrana & Behror Factories, Hospitals, Schools',
    typicalAppliances: 'Continuous Commercial Machinery, Day-Long Air Conditioning',
    sbiEmiFrom: 4530
  }
];

interface SolarStudioProps {
  title?: string;
  subtitle?: string;
}

export default function SolarStudioCalculator({
  title = 'Deewan Solar Instant Quotation Studio',
  subtitle = 'Official factory kit pricing for Tata Power Solar and Adani Solar. Compare estimated price ranges, claim up to ₹95,000 government subsidy, and lock in the lowest price on WhatsApp.'
}: SolarStudioProps) {
  const [selectedBrand, setSelectedBrand] = useState<'tata' | 'adani' | 'all'>('tata');
  // Default to 3 kW Kit (Index 2 in updated array: [1kW, 2kW, 3kW, ...])
  const [selectedKitIndex, setSelectedKitIndex] = useState<number>(2);
  const [billAmount, setBillAmount] = useState<number>(4500);
  const [, setSelectionMode] = useState<'kit' | 'bill'>('kit');
  const [locationArea, setLocationArea] = useState<string>('Behror');
  // Rajasthan subsidy rule: claim +₹17,000 state top-up (making it ₹95,000) by waiving 100 free units
  const [waive100UnitsFor17k, setWaive100UnitsFor17k] = useState<boolean>(true);

  const activeKits = selectedBrand === 'adani' ? ADANI_KITS : TATA_KITS;
  const selectedKit = activeKits[selectedKitIndex] || activeKits[2] || activeKits[0];

  // Match kit by electricity bill slider
  const handleBillSliderChange = (newBill: number) => {
    setBillAmount(newBill);
    const matchedIdx = activeKits.findIndex(
      (k) => newBill >= k.monthlyBillRange[0] && newBill <= k.monthlyBillRange[1]
    );
    if (matchedIdx !== -1) {
      setSelectedKitIndex(matchedIdx);
    } else if (newBill > 18000) {
      setSelectedKitIndex(activeKits.length - 1);
    } else {
      setSelectedKitIndex(0);
    }
  };

  // Switch brand while preserving capacity index if possible
  const handleBrandChange = (brand: 'tata' | 'adani' | 'all') => {
    setSelectedBrand(brand);
    const targetKits = brand === 'adani' ? ADANI_KITS : TATA_KITS;
    if (selectedKitIndex >= targetKits.length) {
      setSelectedKitIndex(0);
    }
  };

  // Subsidy calculation based on user rule:
  // 1 KW - 30k (₹30,000)
  // 2 KW - 60k (₹60,000)
  // 3 KW - 78k (₹78,000, or ₹95,000 if removing 100 free units)
  const currentSubsidy =
    selectedKit.kw >= 3
      ? waive100UnitsFor17k
        ? 95000
        : 78000
      : selectedKit.kw === 2
      ? 60000
      : selectedKit.kw === 1
      ? 30000
      : selectedKit.subsidyMin;

  // Calculations for display
  const minNetPrice = Math.max(0, selectedKit.minPrice - currentSubsidy);
  const maxNetPrice = Math.max(0, selectedKit.maxPrice - currentSubsidy);
  const monthlySavingsEst = Math.round(selectedKit.kw * 120 * 7.5);

  // Recalculate SBI EMI based on net price at 6% interest rate (84 months / 7 years)
  const annualInterestRate = 0.06; // 6% p.a.
  const monthlyInterestRate = annualInterestRate / 12;
  const totalMonths = 84;
  const sbiEmiCalc = Math.round(
    (minNetPrice * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, totalMonths)) /
    (Math.pow(1 + monthlyInterestRate, totalMonths) - 1)
  );

  // Anime.js smooth number counter animation
  const priceMinRef = useRef<HTMLSpanElement>(null);
  const priceMaxRef = useRef<HTMLSpanElement>(null);
  const prevPrices = useRef({ min: minNetPrice, max: maxNetPrice });

  useEffect(() => {
    if (typeof window !== 'undefined' && priceMinRef.current && priceMaxRef.current) {
      const obj = { min: prevPrices.current.min, max: prevPrices.current.max };
      animeAnimate(obj, {
        min: minNetPrice,
        max: maxNetPrice,
        duration: 500,
        ease: 'outQuart',
        onUpdate: () => {
          if (priceMinRef.current) {
            priceMinRef.current.textContent = `₹${Math.round(obj.min).toLocaleString('en-IN')}`;
          }
          if (priceMaxRef.current) {
            priceMaxRef.current.textContent = `₹${Math.round(obj.max).toLocaleString('en-IN')}`;
          }
        }
      });
      prevPrices.current = { min: minNetPrice, max: maxNetPrice };
    }
  }, [minNetPrice, maxNetPrice]);

  const handleWhatsAppQuote = () => {
    const text =
      `Namaste Deewan Solar Team, I checked the Solar Quotation on DeewanSolar.com for my property in ${locationArea}:\n\n` +
      `☀️ SELECTED FACTORY KIT: ${selectedKit.kw} kW ${selectedBrand === 'tata' ? 'Tata Power Solar' : 'Adani Solar'} All-in-One Kit\n` +
      `• Estimated Price Range: ₹${selectedKit.minPrice.toLocaleString('en-IN')} – ₹${selectedKit.maxPrice.toLocaleString('en-IN')}\n` +
      `• Government Subsidy Option: ₹${currentSubsidy.toLocaleString('en-IN')} (${selectedKit.kw >= 3 ? (waive100UnitsFor17k ? 'Full ₹95,000 with +₹17k state top-up by waiving 100 free units' : '₹78,000 retaining 100 free units on meter') : selectedKit.kw === 2 ? '₹60,000 PM Surya Ghar DBT' : '₹30,000 PM Surya Ghar DBT'})\n` +
      `• Effective Net Starting Price: ₹${minNetPrice.toLocaleString('en-IN')} – ₹${maxNetPrice.toLocaleString('en-IN')}*\n` +
      `• Subsidized SBI Solar Loan EMI (@ 6% p.a.): From ~₹${sbiEmiCalc.toLocaleString('en-IN')}/month\n` +
      `• Expected Generation: ${selectedKit.unitsPerMonth}\n` +
      `• Required Shadow-Free Rooftop: ~${selectedKit.roofAreaSqFt} sq. ft.\n` +
      `• My Monthly Electricity Bill: ₹${billAmount.toLocaleString('en-IN')}\n` +
      `• Property Location: ${locationArea}\n\n` +
      `Please provide me your best price guarantee quotation and schedule a free on-site roof inspection.`;

    const url = `https://wa.me/919571839696?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  const googleProfileUrl =
    'https://www.google.com/search?kgmid=%2Fg%2F11csc74k_5&hl=en-IN&q=Deewan%20Enterprises%20(%20solar%20Agency)&shem=epsd1%2Cesd2e%2Cltae%2Crimspwouoe%2Csdpie&shndl=30&source=sh%2Fx%2Floc%2Fosrp%2Fm5%2F1&kgs=7b069aef54c490b5';

  return (
    <div className="w-full rounded-3xl bg-[#ffffff] border border-[#e5e5ea] text-[#1d1d1f] shadow-sm apple-card-hover overflow-hidden transition-all duration-300">
      {/* Studio Header */}
      <div className="p-6 sm:p-9 border-b border-[#f0f0f4] bg-[#fbfbfd]">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5">
          <div className="flex items-start gap-4">
            <img
              src="/deewan-logo-mark.png"
              alt="Deewan Solar"
              className="h-12 w-auto object-contain shrink-0 mt-1"
            />
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f5f5f7] border border-[#d2d2d7] text-[#1d1d1f] text-xs font-bold uppercase tracking-wider mb-2.5">
                <Sun className="h-4 w-4 text-[#1d1d1f]" />
                <span>Authorized Solar Kit Quotation Studio</span>
              </div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-[#1d1d1f]">
                {title}
              </h3>
              <p className="text-sm sm:text-base mt-1.5 max-w-3xl leading-relaxed text-[#424245]">
                {subtitle}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2.5 self-start sm:self-auto shrink-0">
            <span className="text-xs font-bold uppercase tracking-wider text-[#515154]">
              Rajasthan Region:
            </span>
            <select
              value={locationArea}
              onChange={(e) => setLocationArea(e.target.value)}
              className="text-xs sm:text-sm font-bold rounded-xl px-3.5 py-2 border border-[#d2d2d7] bg-white text-[#1d1d1f] outline-none cursor-pointer hover:border-[#1d1d1f] transition-colors shadow-2xs"
            >
              <option value="Behror (City & Alwar Rd)">Behror (Alwar Rd / City)</option>
              <option value="Neemrana (RIICO / Japanese Zone)">Neemrana (RIICO & Japanese Zone)</option>
              <option value="Kotputli (District HQ)">Kotputli (District HQ)</option>
              <option value="Alwar (City & District)">Alwar (City & District)</option>
              <option value="Bansur">Bansur</option>
              <option value="Mandhan & Bardod">Mandhan & Bardod</option>
              <option value="Shahjahanpur (Rajasthan)">Shahjahanpur (Rajasthan)</option>
              <option value="Paota & Viratnagar">Paota & Viratnagar</option>
              <option value="Khairthal & Tijara">Khairthal & Tijara</option>
              <option value="Other Rajasthan Region">Other Region in Rajasthan</option>
            </select>
          </div>
        </div>

        {/* Brand Selector Tabs - Clean Monochrome */}
        <div className="mt-6 flex flex-wrap gap-2.5 pt-5 border-t border-[#f0f0f4]">
          <button
            type="button"
            onClick={() => handleBrandChange('tata')}
            className={`flex-1 min-w-[160px] sm:flex-none flex items-center justify-center sm:justify-start gap-2.5 px-4 py-3 rounded-2xl text-xs sm:text-sm font-bold transition-all cursor-pointer apple-btn-press ${
              selectedBrand === 'tata'
                ? 'bg-[#1d1d1f] text-white shadow-xs border border-[#1d1d1f]'
                : 'bg-white text-[#1d1d1f] border border-[#d2d2d7] hover:border-[#1d1d1f]'
            }`}
          >
            <div className="h-6 w-10 rounded bg-white p-0.5 flex items-center justify-center shrink-0">
              <img src="/brands/tata.webp" alt="Tata Solar" className="max-h-5 max-w-full object-contain" />
            </div>
            <span>Tata Power Solar</span>
            <span className={`text-[10px] px-2 py-0.5 rounded font-bold ${selectedBrand === 'tata' ? 'bg-white/25 text-white' : 'bg-[#f5f5f7] text-[#1d1d1f]'}`}>
              #1 Preferred
            </span>
          </button>

          <button
            type="button"
            onClick={() => handleBrandChange('adani')}
            className={`flex-1 min-w-[160px] sm:flex-none flex items-center justify-center sm:justify-start gap-2.5 px-4 py-3 rounded-2xl text-xs sm:text-sm font-bold transition-all cursor-pointer apple-btn-press ${
              selectedBrand === 'adani'
                ? 'bg-[#1d1d1f] text-white shadow-xs border border-[#1d1d1f]'
                : 'bg-white text-[#1d1d1f] border border-[#d2d2d7] hover:border-[#1d1d1f]'
            }`}
          >
            <div className="h-6 w-10 rounded bg-white p-0.5 flex items-center justify-center shrink-0">
              <img src="/brands/adani-solar.webp" alt="Adani Solar" className="max-h-5 max-w-full object-contain" />
            </div>
            <span>Adani Solar</span>
            <span className={`text-[10px] px-2 py-0.5 rounded font-bold ${selectedBrand === 'adani' ? 'bg-white/25 text-white' : 'bg-[#f5f5f7] text-[#1d1d1f]'}`}>
              Bifacial
            </span>
          </button>

          <button
            type="button"
            onClick={() => handleBrandChange('all')}
            className={`w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-3 rounded-2xl text-xs sm:text-sm font-bold transition-all cursor-pointer apple-btn-press ${
              selectedBrand === 'all'
                ? 'bg-[#1d1d1f] text-white shadow-xs border border-[#1d1d1f]'
                : 'bg-white text-[#1d1d1f] border border-[#d2d2d7] hover:border-[#1d1d1f]'
            }`}
          >
            <span>All Authorized EPC Brands (Waaree, UTL, Luminous)</span>
          </button>
        </div>
      </div>

      {/* Studio Body: Interactive Grid */}
      <div className="p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Kit Selectors & Quick Bill Slider (5 cols) */}
        <div className="lg:col-span-5 flex flex-col gap-5">
          {/* 1. CAPACITY KIT SELECTION PILLS (Includes 1 kW, 2 kW, 3 kW, etc.) */}
          <div className="p-5 rounded-2xl border border-[#e5e5ea] bg-[#fbfbfd]">
            <div className="flex items-center justify-between mb-3">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#6e6e73]">
                1. Select Factory Kit Capacity
              </span>
              <span className="text-[10px] text-[#1d1d1f] font-bold bg-white px-2 py-0.5 rounded-full border border-[#d2d2d7]">
                Pre-Engineered All-In-One
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {activeKits.map((kit, idx) => {
                const isSelected = selectedKitIndex === idx;
                return (
                  <motion.button
                    key={kit.id}
                    type="button"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => {
                      setSelectedKitIndex(idx);
                      setSelectionMode('kit');
                      setBillAmount(Math.round((kit.monthlyBillRange[0] + kit.monthlyBillRange[1]) / 2));
                    }}
                    className={`p-3 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                      isSelected
                        ? 'border-[#1d1d1f] bg-white ring-2 ring-[#1d1d1f]/15 shadow-2xs'
                        : 'border-[#e5e5ea] bg-white hover:border-[#d2d2d7]'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-black text-[#1d1d1f]">{kit.label}</span>
                        {isSelected && <CheckCircle2 className="h-3.5 w-3.5 text-[#1d1d1f]" />}
                      </div>
                      <span className="text-[9px] text-[#515154] font-semibold block mt-0.5 line-clamp-1">
                        {kit.tag}
                      </span>
                    </div>

                    <div className="mt-2 pt-1.5 border-t border-[#f0f0f4]">
                      <span className="text-[10px] font-bold text-[#1d1d1f] block">
                        ₹{(kit.minPrice / 100000).toFixed(2)}L*
                      </span>
                      <span className="text-[9px] text-[#86868b] block">Est. Lowest</span>
                    </div>
                  </motion.button>
                );
              })}
            </div>

            {/* Note about Complete Factory Kit */}
            <div className="mt-3 pt-3 border-t border-[#f0f0f4] flex items-center gap-1.5 text-[10px] text-[#6e6e73]">
              <Info className="h-3.5 w-3.5 text-[#1d1d1f] shrink-0" />
              <span>
                Kits include <strong>{selectedBrand === 'tata' ? 'Tata TOPCon' : 'Adani Bifacial'} Panels</strong>, Grid-Tied Inverter, Elevated Structure, AC/DC Protection & Net-Meter File.
              </span>
            </div>
          </div>

          {/* 2. MATCH BY MONTHLY ELECTRICITY BILL SLIDER */}
          <div className="p-5 rounded-2xl border border-[#e5e5ea] bg-[#fbfbfd]">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#6e6e73]">
                2. Or Match by Monthly Power Bill
              </span>
              <span className="text-xl font-extrabold text-[#1d1d1f]">
                ₹{billAmount.toLocaleString('en-IN')}
              </span>
            </div>

            <input
              type="range"
              min="800"
              max="30000"
              step="500"
              value={billAmount}
              onChange={(e) => handleBillSliderChange(Number(e.target.value))}
              className="w-full h-2 bg-[#e5e5ea] rounded-lg appearance-none cursor-pointer accent-[#1d1d1f]"
            />

            <div className="flex items-center justify-between text-[10px] text-[#86868b] mt-2 font-medium">
              <span>₹800/mo</span>
              <span>₹10,000/mo</span>
              <span>₹30,000+/mo</span>
            </div>

            {/* Quick Bill Selectors */}
            <div className="flex flex-wrap gap-1.5 mt-3 pt-2.5 border-t border-[#f0f0f4]">
              {[1200, 2500, 4500, 7500, 12000, 20000].map((b) => (
                <button
                  key={b}
                  type="button"
                  onClick={() => handleBillSliderChange(b)}
                  className={`text-[10px] font-bold px-2.5 py-1 rounded-lg border transition-all cursor-pointer ${
                    billAmount === b
                      ? 'bg-[#1d1d1f] text-white border-[#1d1d1f]'
                      : 'bg-white text-[#1d1d1f] border-[#e5e5ea] hover:border-[#1d1d1f]'
                  }`}
                >
                  ₹{(b / 1000).toFixed(b % 1000 !== 0 ? 1 : 0)}k/mo
                </button>
              ))}
            </div>
          </div>

          {/* 3. EXCLUSIVE SOLAR LOAN PARTNER: STATE BANK OF INDIA (SBI ONLY @ 6% INTEREST) */}
          <div className="p-4 rounded-2xl bg-[#fbfbfd] border border-[#e5e5ea] space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#6e6e73]">
                Official Solar Financing Partner
              </span>
              <span className="text-[9px] font-semibold bg-white border border-[#d2d2d7] text-[#1d1d1f] px-2 py-0.5 rounded-full">
                SBI Exclusive for Solar
              </span>
            </div>

            <div className="p-3.5 rounded-xl bg-white border border-[#e5e5ea] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-3xs">
              <div className="flex items-start gap-2.5">
                <div className="p-2 rounded-lg bg-[#f5f5f7] border border-[#e5e5ea] text-[#1d1d1f] shrink-0 mt-0.5">
                  <Building className="h-4 w-4 text-[#1d1d1f]" />
                </div>
                <div>
                  <span className="font-extrabold text-xs text-[#1d1d1f] block">
                    State Bank of India (SBI) Surya Ghar Loan
                  </span>
                  <span className="text-[10.5px] text-[#515154] block mt-0.5">
                    Subsidized <strong>6% interest p.a.</strong> • Collateral-Free up to 10 Yrs • Bill savings exceed loan EMI
                  </span>
                </div>
              </div>
              <span className="text-[11px] font-black text-[#1d1d1f] bg-[#f5f5f7] px-3 py-1.5 rounded-lg border border-[#e5e5ea] shrink-0">
                From ~₹{sbiEmiCalc.toLocaleString('en-IN')}/mo
              </span>
            </div>

            <span className="text-[9.5px] text-[#86868b] block">
              * Note: Rooftop solar is financed exclusively through SBI at 6% interest. (Bajaj Finserv EMIs are available exclusively for electronics showroom appliances).
            </span>
          </div>
        </div>

        {/* Right Column: Estimated Price Range & WhatsApp Lead Hook (7 cols) */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          {/* THE MASTER ESTIMATED PRICE RANGE SHOWCASE CARD */}
          <div className="p-6 sm:p-7 rounded-3xl border border-[#e5e5ea] bg-white relative overflow-hidden shadow-sm">
            {/* Top Badge */}
            <div className="flex flex-wrap items-center justify-between gap-2.5 mb-5">
              <span className="text-xs font-black uppercase tracking-wider text-[#1d1d1f] bg-[#f5f5f7] px-3.5 py-1.5 rounded-full border border-[#d2d2d7]">
                ★ {selectedKit.kw} kW {selectedBrand === 'tata' ? 'Tata Power Solar' : 'Adani Solar'} Factory Kit
              </span>
              <span className="text-xs font-bold bg-[#f5f5f7] border border-[#d2d2d7] text-[#1d1d1f] px-3 py-1 rounded-full">
                Guaranteed Lowest Price in Behror Circle
              </span>
            </div>

            {/* Price Comparison Range Rows */}
            <div className="space-y-5">
              {/* Row 1: Estimated Retail Market Range */}
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between border-b border-[#f0f0f4] pb-4 gap-2">
                <div>
                  <span className="text-sm font-bold text-[#515154] block uppercase tracking-wider">
                    Estimated Complete Kit Price (Before Subsidy)
                  </span>
                  <span className="text-xs sm:text-sm text-[#6e6e73]">
                    Includes Tier-1 Panels + Inverter + Elevated Galvanized Structure + JVVNL Net Metering
                  </span>
                </div>
                <div className="text-left sm:text-right">
                  <span className="text-2xl sm:text-3xl md:text-4xl font-black text-[#1d1d1f]">
                    ₹{selectedKit.minPrice.toLocaleString('en-IN')} – ₹{selectedKit.maxPrice.toLocaleString('en-IN')}
                  </span>
                  <span className="text-xs text-[#515154] block mt-0.5 font-medium">
                    (Retail Market Bracket)
                  </span>
                </div>
              </div>

              {/* Row 2: Government Subsidy Deduction (1kW: 30k, 2kW: 60k, 3kW: 78k to 95k) */}
              <div className="rounded-2xl border border-[#d2d2d7] bg-[#f5f5f7] p-5 sm:p-6 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-sm font-black text-[#1d1d1f] uppercase tracking-wider">
                        Less: Government Subsidy Deduction (DBT)
                      </span>
                      <span className="text-xs font-bold bg-white border border-[#d2d2d7] text-[#1d1d1f] px-2.5 py-0.5 rounded-full shadow-2xs">
                        Direct Bank Credit
                      </span>
                    </div>
                    <span className="text-xs sm:text-sm text-[#424245] block mt-1 leading-relaxed">
                      {selectedKit.kw === 1
                        ? 'PM Surya Ghar Central Subsidy: ₹30,000 (30k) DBT'
                        : selectedKit.kw === 2
                        ? 'PM Surya Ghar Central Subsidy: ₹60,000 (60k) DBT'
                        : waive100UnitsFor17k
                        ? 'Full ₹95,000 Subsidy (Central ₹78,000 + Rajasthan State ₹17,000 by waiving 100 free units)'
                        : 'Standard ₹78,000 Central Subsidy (Retains your 100 Free Units on JVVNL meter)'}
                    </span>
                  </div>

                  <div className="text-left sm:text-right">
                    <span className="text-2xl sm:text-3xl md:text-4xl font-black text-[#1d1d1f]">
                      -₹{currentSubsidy.toLocaleString('en-IN')}
                    </span>
                    <span className="text-xs text-[#515154] block font-bold mt-0.5">
                      {selectedKit.kw === 1
                        ? '1 kW - ₹30,000 Subsidy'
                        : selectedKit.kw === 2
                        ? '2 kW - ₹60,000 Subsidy'
                        : waive100UnitsFor17k
                        ? '3 kW - Max ₹95,000 Subsidy'
                        : '3 kW - ₹78,000 Central Subsidy'}
                    </span>
                  </div>
                </div>

                {/* Rajasthan 100-Unit Waiver Interactive Selector for 3kW+ */}
                {selectedKit.kw >= 3 && (
                  <div className="pt-3 border-t border-[#e5e5ea]">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#1d1d1f] block mb-2">
                      Choose Your Rajasthan Subsidy Scheme:
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <button
                        type="button"
                        onClick={() => setWaive100UnitsFor17k(true)}
                        className={`p-4 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between apple-btn-press ${
                          waive100UnitsFor17k
                            ? 'bg-white border-[#1d1d1f] ring-2 ring-[#1d1d1f]/10 shadow-2xs'
                            : 'bg-white/60 border-[#e5e5ea] hover:bg-white text-[#515154]'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-xs sm:text-sm font-black text-[#1d1d1f]">₹95,000 Subsidy (Recommended)</span>
                          <span className="text-[11px] font-bold bg-[#f5f5f7] text-[#1d1d1f] border border-[#d2d2d7] px-2 py-0.5 rounded-md">
                            +₹17k Extra Cash
                          </span>
                        </div>
                        <p className="text-xs text-[#424245] mt-1.5 leading-snug">
                          Waive 100 free monthly units on meter. (Best value: Solar generates ~{selectedKit.unitsPerMonth} for ₹0 bill anyway!)
                        </p>
                      </button>

                      <button
                        type="button"
                        onClick={() => setWaive100UnitsFor17k(false)}
                        className={`p-4 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between apple-btn-press ${
                          !waive100UnitsFor17k
                            ? 'bg-white border-[#1d1d1f] ring-2 ring-[#1d1d1f]/10 shadow-2xs'
                            : 'bg-white/60 border-[#e5e5ea] hover:bg-white text-[#515154]'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-xs sm:text-sm font-black text-[#1d1d1f]">₹78,000 Central Subsidy</span>
                          <span className="text-[11px] font-bold bg-[#f5f5f7] text-[#515154] border border-[#d2d2d7] px-2 py-0.5 rounded-md">
                            Keep 100 Free Units
                          </span>
                        </div>
                        <p className="text-xs text-[#424245] mt-1.5 leading-snug">
                          Retain your 100 free units/month scheme on your existing JVVNL meter.
                        </p>
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* Row 3: EFFECTIVE NET OUT-OF-POCKET INVESTMENT */}
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between pt-2 gap-2">
                <div>
                  <span className="text-sm font-black text-[#1d1d1f] uppercase tracking-wider block">
                    Effective Net Investment (After Subsidy)
                  </span>
                  <span className="text-xs sm:text-sm text-[#424245] font-semibold flex items-center gap-1.5 mt-1">
                    <CheckCircle2 className="h-4 w-4 text-[#1d1d1f]" />
                    <span>Compare with any retailer in Behror & Nearby</span>
                  </span>
                </div>
                <div className="text-left sm:text-right">
                  <span className="text-3xl sm:text-4xl md:text-5xl font-black text-[#1d1d1f] tracking-tight">
                    <span ref={priceMinRef}>₹{minNetPrice.toLocaleString('en-IN')}</span> – <span ref={priceMaxRef}>₹{maxNetPrice.toLocaleString('en-IN')}</span>*
                  </span>
                  <span className="text-xs text-[#515154] block mt-1 font-semibold">
                    Starting Net Price with 100% Turnkey Execution
                  </span>
                </div>
              </div>
            </div>

            {/* Note explaining the Range & Subsidy Trade-off */}
            <div className="mt-5 p-3.5 rounded-2xl bg-[#f5f5f7] border border-[#e5e5ea] text-[10.5px] text-[#6e6e73] leading-relaxed space-y-2">
              <div className="flex items-start gap-2">
                <Info className="h-4 w-4 text-[#1d1d1f] shrink-0 mt-0.5" />
                <p>
                  <strong className="text-[#1d1d1f]">Government Subsidy Scale:</strong> 1 kW receives <strong>₹30,000</strong>, 2 kW receives <strong>₹60,000</strong>, and 3 kW receives <strong>₹78,000</strong> (Central) or up to <strong>₹95,000</strong> with Rajasthan 100-free-units surrender.
                </p>
              </div>
              <div className="flex items-start gap-2 pt-1.5 border-t border-[#e5e5ea]">
                <ShieldCheck className="h-4 w-4 text-[#1d1d1f] shrink-0 mt-0.5" />
                <p>
                  <strong className="text-[#1d1d1f]">Why a price range?</strong> Rooftop heights, wire distances, and elevated pergola structures vary per house. We provide a <strong>100% free site inspection</strong> across Behror, Neemrana, Kotputli, Alwar, and surrounding Rajasthan regions to lock in your lowest final quote. <span className="font-semibold text-[#1d1d1f]">(Notice: We operate exclusively within Rajasthan under JVVNL; we do not service Haryana or UP).</span>
                </p>
              </div>
            </div>
          </div>

          {/* 4 QUICK METRICS BENTO - Equal Height & Clean Typography */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {/* 1. Monthly Units Generation */}
            <div className="p-4 rounded-2xl border border-[#e5e5ea] bg-white flex flex-col justify-between">
              <span className="text-[10px] font-semibold uppercase tracking-wider text-[#86868b] block">
                Generation
              </span>
              <span className="text-base sm:text-lg font-bold text-[#1d1d1f] block mt-1">
                {selectedKit.unitsPerMonth}
              </span>
              <span className="text-[10px] text-[#86868b] block mt-0.5">
                {selectedKit.panelCount} x {selectedKit.panelWattage}W Modules
              </span>
            </div>

            {/* 2. Bill Savings */}
            <div className="p-4 rounded-2xl border border-[#e5e5ea] bg-white flex flex-col justify-between">
              <span className="text-[10px] font-semibold uppercase tracking-wider text-[#86868b] block">
                Bill Savings
              </span>
              <span className="text-base sm:text-lg font-bold text-[#1d1d1f] block mt-1">
                ~₹{monthlySavingsEst.toLocaleString('en-IN')}/mo
              </span>
              <span className="text-[10px] text-[#86868b] block mt-0.5 font-medium">
                ₹0 Discom Bill Target
              </span>
            </div>

            {/* 3. SBI Solar Loan EMI @ 6% Interest */}
            <div className="p-4 rounded-2xl border border-[#e5e5ea] bg-white flex flex-col justify-between">
              <span className="text-[10px] font-semibold uppercase tracking-wider text-[#86868b] block">
                SBI Loan EMI
              </span>
              <span className="text-base sm:text-lg font-bold text-[#1d1d1f] block mt-1">
                ~₹{sbiEmiCalc.toLocaleString('en-IN')}/mo
              </span>
              <span className="text-[10px] text-[#86868b] block mt-0.5 font-medium">
                @ 6% p.a. Subsidized
              </span>
            </div>

            {/* 4. Roof Area */}
            <div className="p-4 rounded-2xl border border-[#e5e5ea] bg-white flex flex-col justify-between">
              <span className="text-[10px] font-semibold uppercase tracking-wider text-[#86868b] block">
                Roof Space
              </span>
              <span className="text-base sm:text-lg font-bold text-[#1d1d1f] block mt-1">
                ~{selectedKit.roofAreaSqFt} sq. ft.
              </span>
              <span className="text-[10px] text-[#86868b] block mt-0.5">
                Shadow-free terrace
              </span>
            </div>
          </div>

          {/* APPLICATION & LOAD COVERAGE */}
          <div className="p-4 rounded-2xl border border-[#e5e5ea] bg-[#fbfbfd] text-xs">
            <span className="text-[10px] font-semibold uppercase tracking-wider text-[#86868b] block mb-1">
              Recommended Household / Commercial Load for {selectedKit.label}:
            </span>
            <p className="text-[#1d1d1f] font-semibold">
              {selectedKit.bestFor}
            </p>
            <p className="text-[#6e6e73] text-[11px] mt-1">
              Runs: {selectedKit.typicalAppliances}
            </p>
          </div>

          {/* PRIMARY HIGH-CONVERTING WHATSAPP LEAD BUTTON & BALANCED ACTIONS */}
          {/* Note: Fixes the circular deformity from earlier flex collapse */}
          <div className="flex flex-col gap-3">
            {/* Primary Action: WhatsApp Lowest Price Quote */}
            <motion.button
              type="button"
              onClick={handleWhatsAppQuote}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              className="w-full flex items-center justify-between gap-4 rounded-2xl bg-[#1d1d1f] hover:bg-black text-white font-bold py-4.5 px-6 sm:px-8 text-base sm:text-lg transition-all shadow-md group cursor-pointer border border-[#1d1d1f]"
            >
              <div className="flex items-center gap-3.5 min-w-0">
                <div className="h-10 w-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                  <MessageSquare className="h-5 w-5 text-emerald-400" />
                </div>
                <div className="text-left min-w-0">
                  <span className="block text-sm sm:text-base font-extrabold text-white tracking-tight truncate">
                    Get Lowest Price & Free Site Survey on WhatsApp
                  </span>
                  <span className="block text-[11px] text-[#a1a1a6] font-medium">
                    Send quotation directly to +91 95718 39696 • Behror team
                  </span>
                </div>
              </div>
              <div className="h-9 w-9 rounded-full bg-white/10 flex items-center justify-center shrink-0 group-hover:translate-x-1 transition-transform">
                <ArrowRight className="h-4 w-4 text-white" />
              </div>
            </motion.button>

            {/* Secondary Action Row: Showroom Visit & Call Desk */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <a
                href={googleProfileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2.5 rounded-xl border border-[#d2d2d7] bg-white hover:bg-[#f5f5f7] px-4 py-3.5 text-xs sm:text-sm font-bold text-[#1d1d1f] transition-colors shadow-2xs text-center"
              >
                <Building className="h-4 w-4 text-[#1d1d1f] shrink-0" />
                <span>Visit Showroom in Behror</span>
              </a>

              <a
                href="tel:+919571839696"
                className="flex items-center justify-center gap-2.5 rounded-xl border border-[#d2d2d7] bg-white hover:bg-[#f5f5f7] px-4 py-3.5 text-xs sm:text-sm font-bold text-[#1d1d1f] transition-colors shadow-2xs text-center"
              >
                <Phone className="h-4 w-4 text-[#1d1d1f] shrink-0" />
                <span>Call Solar Desk: +91 95718 39696</span>
              </a>
            </div>
          </div>

          {/* Clean Address & Verification Banner */}
          <div className="p-3.5 rounded-xl bg-[#f5f5f7] border border-[#e5e5ea] flex flex-col sm:flex-row items-center justify-center gap-2 text-xs text-[#424245] text-center">
            <a
              href={googleProfileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 font-bold text-[#1d1d1f] hover:underline"
            >
              <ShieldCheck className="h-4 w-4 text-[#1d1d1f] shrink-0" />
              <span>Deewan Enterprises (Solar Agency)</span>
            </a>
            <span className="hidden sm:inline text-[#86868b]">•</span>
            <span>Deewan Complex, Alwar Road, Opp. Shanti Market, Behror, Rajasthan 301701</span>
          </div>
        </div>
      </div>

      {/* Footer Info Strip */}
      <div className="px-6 py-4 border-t border-[#f0f0f4] text-xs sm:text-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-[#424245] bg-[#fafafc]">
        <span className="flex items-center gap-2 font-semibold">
          <CheckCircle2 className="h-4 w-4 text-[#1d1d1f] shrink-0" />
          <span>Authorized EPC Channel Partner for Tata Power Solar & Adani Solar in Rajasthan (Behror, Neemrana, Kotputli, Alwar circle).</span>
        </span>
        <span className="font-bold text-[#1d1d1f]">
          SBI Surya Ghar Solar Loans (@ 6% interest p.a.). (Bajaj Finserv EMIs exclusively for showroom electronics).
        </span>
      </div>
    </div>
  );
}
