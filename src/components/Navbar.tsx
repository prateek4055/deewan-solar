'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, MessageSquare, Phone, Sun } from 'lucide-react';

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Force light mode
    document.documentElement.classList.remove('dark');
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Solar Quotation', href: '/#quotation' },
    { name: 'Tata & Adani Solar', href: '/#brands' },
    { name: 'Subsidy (₹95,000)', href: '/#subsidy' },
    { name: 'Customer Reviews', href: '/#reviews' },
    { name: 'Electronics Showroom', href: '/products' }
  ];

  return (
    <>
      {/* Top micro banner - Apple Minimalist Clean Monochrome Theme */}
      <div className="w-full bg-[#f5f5f7] text-[#1d1d1f] text-[11px] py-1.5 sm:py-2 px-3 sm:px-4 text-center border-b border-[#e5e5ea] font-medium tracking-tight">
        <div className="max-w-[1040px] mx-auto flex items-center justify-center gap-1.5 sm:gap-2 flex-wrap">
          <span className="inline-flex items-center gap-1 font-semibold text-[#86868b]">
            <Sun className="h-3.5 w-3.5 text-[#1d1d1f]" />
            <span className="hidden sm:inline">PM Surya Ghar Scheme:</span>
            <span className="sm:hidden">PM Surya Ghar:</span>
          </span>
          <span>
            Claim <strong className="text-[#1d1d1f]">Up to ₹95,000 Subsidy</strong>
            <span className="hidden md:inline"> (Rajasthan Discoms). Authorized Tata & Adani Partner.</span>
          </span>
          <a href="/#quotation" className="text-[#0071e3] hover:underline font-semibold ml-0.5 sm:ml-1 inline-flex items-center gap-0.5">
            <span>Instant Quote</span>
            <span>&rarr;</span>
          </a>
        </div>
      </div>

      <nav className="sticky top-0 z-40 w-full glass-nav transition-all duration-300">
        <div className="mx-auto max-w-[1040px] px-4 sm:px-6">
          <div className="flex h-16 items-center justify-between gap-4">
            
            {/* Left: Official Deewan Solar Brand Identity */}
            <div className="flex items-center gap-3 shrink-0">
              <Link href="/" className="flex items-center gap-2.5 sm:gap-3 group">
                <img
                  src="/deewan-logo-mark.webp"
                  alt="Deewan Solar Official Logo"
                  className="h-7 sm:h-8 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                />
                <div className="flex flex-col leading-none">
                  <span className="text-[16px] sm:text-[17px] font-bold tracking-tight text-[#1d1d1f]">
                    Deewan
                  </span>
                  <span className="text-[8px] font-semibold tracking-[0.26em] text-[#86868b] uppercase mt-0.5">
                    SOLAR
                  </span>
                </div>
                <span className="hidden sm:inline-flex items-center rounded-full bg-[#f5f5f7] border border-[#d2d2d7] px-2.5 py-0.5 text-[9px] font-semibold uppercase tracking-wider text-[#6e6e73]">
                  Tata & Adani Partner
                </span>
              </Link>
            </div>

            {/* Center: Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-5">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`text-[12px] font-medium tracking-tight transition-colors py-1 whitespace-nowrap ${
                      isActive
                        ? 'text-[#0071e3] font-bold'
                        : 'text-[#6e6e73] hover:text-[#1d1d1f]'
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>

            {/* Right: Quick Actions (No phone number on header as requested) */}
            <div className="flex items-center gap-2 sm:gap-3">
              <Link
                href="https://wa.me/919571839696?text=Namaste%20Deewan%20Solar%2C%20I%20would%20like%20to%20request%20a%20solar%20quotation%20with%20Tata%20%2F%20Adani%20panels."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full bg-[#1d1d1f] hover:bg-black active:scale-[0.98] text-white text-[11px] font-semibold px-3.5 sm:px-4 py-1.5 shadow-xs transition-all apple-btn-press"
              >
                <MessageSquare className="h-3.5 w-3.5 text-[#24b33e]" />
                <span className="hidden sm:inline">WhatsApp Quote</span>
                <span className="sm:hidden">Quote</span>
              </Link>

              {/* Mobile Menu Toggle Button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden rounded-full p-2 text-[#1d1d1f] hover:bg-[#f5f5f7] transition-colors border border-[#e5e5ea] active:scale-95"
                aria-label="Toggle Navigation Menu"
              >
                {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Drawer Overlay */}
        {isOpen && (
          <div className="lg:hidden w-full bg-white/98 backdrop-blur-2xl border-b border-[#e5e5ea] animate-fade-in shadow-xl">
            <div className="space-y-1 px-4 py-4 max-w-[1040px] mx-auto">
              <div className="px-3 py-1 mb-2">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#86868b]">Deewan Solar Menu</span>
              </div>
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center justify-between rounded-xl px-3.5 py-2.5 text-xs font-semibold transition-colors ${
                      isActive
                        ? 'bg-[#f4f9ff] text-[#0071e3]'
                        : 'text-[#1d1d1f] hover:bg-[#f5f5f7]'
                    }`}
                  >
                    <span>{link.name}</span>
                    <span className="text-[#86868b] text-[10px]">&rarr;</span>
                  </Link>
                );
              })}

              <div className="pt-3 border-t border-[#e5e5ea] mt-3 space-y-2 px-2">
                <Link
                  href="tel:+919571839696"
                  className="flex items-center justify-center gap-2 rounded-xl border border-[#d2d2d7] bg-[#ffffff] text-[#1d1d1f] font-semibold py-2.5 text-xs hover:bg-[#f5f5f7] transition-colors apple-btn-press"
                >
                  <Phone className="h-3.5 w-3.5 text-[#1d1d1f]" />
                  <span>Call Solar Desk: +91 95718 39696</span>
                </Link>

                <Link
                  href="https://wa.me/919571839696?text=Namaste%20Deewan%20Solar%2C%20I%20am%20interested%20in%20a%20solar%20quotation."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-xl bg-[#1d1d1f] hover:bg-black text-white font-semibold py-2.5 text-xs transition-colors shadow-xs apple-btn-press"
                >
                  <MessageSquare className="h-3.5 w-3.5 text-[#24b33e]" />
                  <span>Direct WhatsApp Quotation</span>
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
