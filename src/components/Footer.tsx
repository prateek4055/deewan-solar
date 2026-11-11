import Link from 'next/link';
import { Phone, Mail, MapPin, Clock, MessageSquare, Sun, ShieldCheck, Zap, Building, CreditCard } from 'lucide-react';

export default function Footer() {
  const serviceAreas = [
    'Behror City',
    'Neemrana Industrial Zone (RIICO & Japanese Zone)',
    'Kotputli (District HQ)',
    'Alwar City & District',
    'Bansur',
    'Mandhan',
    'Bardod',
    'Shahjahanpur (Rajasthan)',
    'Paota & Viratnagar',
    'Khairthal & Tijara'
  ];

  const solarSolutions = [
    'Tata Power Solar Rooftop Installations (30-Yr Warranty)',
    'Adani Solar Elan Bifacial Systems',
    'PM Surya Ghar: Muft Bijli Yojana (Up to ₹95,000 Subsidy)',
    'JVVNL Grid-Tied Net Metering Solutions',
    'State Bank of India (SBI) Surya Ghar Solar Loans (@ 6% interest)',
    'Commercial & Industrial Turnkey Solar (10kW - 500kW)'
  ];

  const electronicsCategories = [
    'Sony BRAVIA & Samsung 4K Smart TVs',
    'Daikin & Voltas Inverter Air Conditioners (Solar-Ready)',
    'LG & Samsung Inverter Refrigerators',
    'Luminous & Microtek Pure Sine Wave Inverters',
    'Exide & Amaron Tall Tubular Batteries',
    'Bajaj Finserv 0% Downpayment Appliance EMIs'
  ];

  return (
    <footer className="bg-[#f5f5f7] text-[#424245] border-t border-[#e5e5ea] text-sm leading-relaxed">
      <div className="apple-container py-16">
        
        {/* Brand Header Bar in Footer */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-10 border-b border-[#e5e5ea] gap-6">
          <div className="flex items-center gap-3.5">
            <img
              src="/deewan-logo-mark.png"
              alt="Deewan Solar"
              className="h-12 w-auto object-contain"
            />
            <div className="flex flex-col leading-none">
              <span className="text-[24px] font-black tracking-tight text-[#1d1d1f]">
                Deewan
              </span>
              <span className="text-[11px] font-bold tracking-[0.28em] text-[#515154] uppercase mt-1">
                SOLAR & ELECTRONICS
              </span>
            </div>
          </div>
          <p className="text-xs sm:text-sm text-[#515154] max-w-lg font-medium">
            Behror’s premier solar engineering EPC & electronics authority since 1995. Authorized Tata Power Solar & Adani Solar Channel Partner.
          </p>
        </div>

        {/* Top Trust Grid - Pure Apple Monochrome Styling */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 py-8 border-b border-[#e5e5ea]">
          <div className="flex items-start gap-4 p-5 sm:p-6 rounded-2xl bg-white border border-[#e5e5ea] shadow-2xs">
            <div className="p-3 rounded-xl bg-[#f5f5f7] text-[#1d1d1f] shrink-0 border border-[#e5e5ea]">
              <Sun className="h-6 w-6" />
            </div>
            <div>
              <h4 className="text-sm sm:text-base font-black text-[#1d1d1f]">Tata Power & Adani Solar</h4>
              <p className="text-xs sm:text-sm text-[#515154] mt-1 leading-snug">
                Authorized regional EPC engineers in Behror. Up to ₹95,000 subsidy with 100% turnkey JVVNL net metering.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-5 sm:p-6 rounded-2xl bg-white border border-[#e5e5ea] shadow-2xs">
            <div className="p-3 rounded-xl bg-[#f5f5f7] text-[#1d1d1f] shrink-0 border border-[#e5e5ea]">
              <Building className="h-6 w-6" />
            </div>
            <div>
              <h4 className="text-sm sm:text-base font-black text-[#1d1d1f]">SBI Solar Loans & Bajaj EMIs</h4>
              <p className="text-xs sm:text-sm text-[#515154] mt-1 leading-snug">
                State Bank of India (SBI) collateral-free loans (6% p.a.) for Solar, and Bajaj Finserv 0% EMIs for showroom electronics.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-5 sm:p-6 rounded-2xl bg-white border border-[#e5e5ea] shadow-2xs">
            <div className="p-3 rounded-xl bg-[#f5f5f7] text-[#1d1d1f] shrink-0 border border-[#e5e5ea]">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <div>
              <h4 className="text-sm sm:text-base font-black text-[#1d1d1f]">Serving Since 1995</h4>
              <p className="text-xs sm:text-sm text-[#515154] mt-1 leading-snug">
                Deewan Group trust across 25,000+ satisfied residential & commercial solar installations and electronics buyers in Rajasthan.
              </p>
            </div>
          </div>
        </div>

        {/* Directory Columns */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 py-12 border-b border-[#e5e5ea]">
          
          {/* Solar Division (Upfront) */}
          <div>
            <h3 className="text-xs sm:text-sm font-black uppercase tracking-wider text-[#1d1d1f] mb-4 flex items-center gap-2">
              <Sun className="h-4 w-4 text-[#1d1d1f]" />
              <span>Deewan Solar Division</span>
            </h3>
            <ul className="space-y-3 text-xs sm:text-sm">
              {solarSolutions.map((item) => (
                <li key={item}>
                  <Link href="/#quotation" className="hover:text-black transition-colors block leading-snug font-medium">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Electronics Showroom (Backfront) */}
          <div>
            <h3 className="text-xs sm:text-sm font-black uppercase tracking-wider text-[#1d1d1f] mb-4 flex items-center gap-2">
              <Zap className="h-4 w-4 text-[#1d1d1f]" />
              <span>Electronics Showroom</span>
            </h3>
            <p className="text-xs text-[#515154] mb-3 leading-snug">
              Appliances curated to run cleanly on your rooftop solar system.
            </p>
            <ul className="space-y-3 text-xs sm:text-sm">
              {electronicsCategories.map((item) => (
                <li key={item}>
                  <Link href="/products" className="hover:text-black transition-colors block leading-snug font-medium">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Regional Service Areas */}
          <div>
            <h3 className="text-xs sm:text-sm font-black uppercase tracking-wider text-[#1d1d1f] mb-4">
              Rajasthan Service Regions
            </h3>
            <p className="text-xs text-[#515154] mb-3 leading-relaxed">
              Fast rooftop site inspection, drone shadow audit, and JVVNL net metering across Rajasthan:
            </p>
            <div className="flex flex-wrap gap-2">
              {serviceAreas.map((area) => (
                <span
                  key={area}
                  className="rounded-lg bg-white px-2.5 py-1 text-xs font-semibold text-[#1d1d1f] border border-[#e5e5ea] shadow-3xs"
                >
                  {area}
                </span>
              ))}
            </div>
            <p className="text-xs text-[#515154] mt-3 font-semibold">
              * Note: Operating exclusively in Rajasthan under JVVNL jurisdiction. We do not provide installations in Haryana or UP.
            </p>
          </div>

          {/* Showroom & Direct Contact */}
          <div>
            <h3 className="text-xs sm:text-sm font-black uppercase tracking-wider text-[#1d1d1f] mb-4">
              Deewan Enterprises (Solar Agency)
            </h3>
            <ul className="space-y-3.5 text-xs sm:text-sm">
              <li className="flex gap-2.5 items-start">
                <MapPin className="h-4 w-4 text-[#1d1d1f] shrink-0 mt-0.5" />
                <span className="text-[#1d1d1f] font-medium leading-relaxed">
                  Deewan Complex, Alwar Road, Opp. Shanti Market, Behror, Rajasthan 301701
                </span>
              </li>
              <li className="flex gap-2.5 items-center">
                <Phone className="h-4 w-4 text-[#1d1d1f] shrink-0" />
                <Link href="tel:+919571839696" className="hover:text-black transition-colors font-bold text-[#1d1d1f]">
                  +91 95718 39696
                </Link>
              </li>
              <li className="flex gap-2.5 items-center">
                <MessageSquare className="h-4 w-4 text-emerald-600 shrink-0" />
                <Link
                  href="https://wa.me/919571839696?text=Namaste%20Deewan%20Solar%2C%20I%20would%20like%20to%20visit%20your%20showroom%20in%20Behror."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-black transition-colors font-bold text-[#1d1d1f]"
                >
                  WhatsApp: +91 95718 39696
                </Link>
              </li>
              <li className="pt-2">
                <a
                  href="https://www.google.com/search?kgmid=%2Fg%2F11csc74k_5&hl=en-IN&q=Deewan%20Enterprises%20(%20solar%20Agency)&shem=epsd1%2Cesd2e%2Cltae%2Crimspwouoe%2Csdpie&shndl=30&source=sh%2Fx%2Floc%2Fosrp%2Fm5%2F1&kgs=7b069aef54c490b5"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white border border-[#d2d2d7] text-xs font-bold text-[#1d1d1f] hover:bg-[#f5f5f7] shadow-3xs"
                >
                  <span>Google Business Profile & Map</span>
                </a>
              </li>
              <li className="flex gap-2.5 items-start">
                <Clock className="h-4 w-4 text-[#515154] shrink-0 mt-0.5" />
                <div>
                  <span className="block text-[#1d1d1f] font-bold">9:30 AM - 8:30 PM</span>
                  <span className="text-xs text-[#515154]">Open All 7 Days (Including Sundays)</span>
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Metadata Bar */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#86868b] gap-4">
          <div className="flex flex-col gap-1 text-center sm:text-left">
            <p>&copy; {new Date().getFullYear()} DeewanSolar.com (Deewan Group). All rights reserved.</p>
            <p className="text-[10px] opacity-80">
              GSTIN: 08AABPD3394J1ZN | Authorized Channel Partner for Tata Power Solar, Adani Solar, JVVNL, MNRE. Solar financing by State Bank of India (SBI). Electronics showroom EMIs by Bajaj Finserv.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-5 text-[11px]">
            <a href="/#quotation" className="hover:text-[#0071e3] transition-colors">Solar Quotation</a>
            <a href="/#brands" className="hover:text-[#0071e3] transition-colors">Tata & Adani Solar</a>
            <a href="/#subsidy" className="hover:text-[#0071e3] transition-colors">Up to ₹95k Subsidy</a>
            <Link href="/products" className="hover:text-[#0071e3] transition-colors">Electronics Showroom</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
