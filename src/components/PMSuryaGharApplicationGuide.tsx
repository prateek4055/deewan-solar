'use client';

import { useState } from 'react';
import {
  FileText,
  CheckCircle2,
  Copy,
  Check,
  ExternalLink,
  MessageSquare,
  HelpCircle,
  Building,
  ShieldCheck,
  ArrowRight,
  UserCheck,
  Smartphone,
  Phone,
  Sparkles
} from 'lucide-react';

export default function PMSuryaGharApplicationGuide() {
  const [activeTab, setActiveTab] = useState<'assisted' | 'self'>('assisted');
  const [copied, setCopied] = useState(false);

  const vendorSearchName = 'DEEWAN ENTERPRISES';
  const googleProfileUrl =
    'https://www.google.com/search?kgmid=%2Fg%2F11csc74k_5&hl=en-IN&q=Deewan%20Enterprises%20(%20solar%20Agency)&shem=epsd1%2Cesd2e%2Cltae%2Crimspwouoe%2Csdpie&shndl=30&source=sh%2Fx%2Floc%2Fosrp%2Fm5%2F1&kgs=7b069aef54c490b5';

  const copyToClipboard = () => {
    navigator.clipboard.writeText(vendorSearchName);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const requiredDocuments = [
    { title: 'Latest JVVNL Electricity Bill', desc: 'Showing your K-Number (Consumer ID) and sanctioned load' },
    { title: 'Aadhaar Card of Electricity Meter Holder', desc: 'For government OTP identity verification' },
    { title: 'Bank Account Passbook / Cancelled Cheque', desc: 'For direct subsidy credit (DBT) into bank account' },
    { title: 'Rooftop Photo / Usable Terrace Space', desc: 'Our engineers can take this during your free site inspection' }
  ];

  const selfSteps = [
    {
      step: '01',
      title: 'Login to National Portal',
      desc: 'Visit pmsuryaghar.gov.in, select "Consumer Login", and enter your registered mobile number with OTP.'
    },
    {
      step: '02',
      title: 'Select Rajasthan & DISCOM',
      desc: 'Select State: "Rajasthan", and Distribution Company: "Jaipur Vidyut Vitran Nigam Ltd (JVVNL)". Enter your K-Number.'
    },
    {
      step: '03',
      title: 'Select DEEWAN ENTERPRISES as Vendor',
      desc: 'In the "Choose Registered Vendor / Seller" dropdown, search for DEEWAN ENTERPRISES. Select us to authorize our team for your installation.'
    },
    {
      step: '04',
      title: 'Submit & Automatic Sanction',
      desc: 'Confirm your solar capacity (e.g. 3kW). Once submitted, Deewan Solar instantly receives your file and begins net-meter paperwork.'
    }
  ];

  return (
    <section id="how-to-apply" className="w-full bg-[#fbfbfd] py-20 border-b border-[#f0f0f4]">
      <div className="apple-container flex flex-col gap-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto flex flex-col gap-2.5">
          <div className="inline-flex items-center justify-center gap-2 px-3.5 py-1.5 rounded-full bg-[#ffffff] border border-[#d2d2d7] mx-auto shadow-3xs">
            <ShieldCheck className="h-4 w-4 text-[#1d1d1f]" />
            <span className="text-xs font-bold uppercase tracking-wider text-[#1d1d1f]">
              Official PM Surya Ghar Vendor Registration Guide
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1d1d1f] tracking-tight leading-tight">
            How to Apply for Deewan Solar on the National Portal
          </h2>
          <p className="text-sm sm:text-base text-[#424245] leading-relaxed">
            Under PM Surya Ghar: Muft Bijli Yojana, every homeowner selects their registered seller/vendor. Here is how you can easily assign <strong>Deewan Enterprises</strong> for your rooftop installation in Behror & nearby Rajasthan.
          </p>
        </div>

        {/* Apple Segmented Method Switcher */}
        <div className="flex items-center justify-center">
          <div className="inline-flex items-center gap-1.5 p-1.5 bg-[#ffffff] rounded-full border border-[#d2d2d7] shadow-2xs">
            <button
              type="button"
              onClick={() => setActiveTab('assisted')}
              className={`flex items-center gap-2 px-4 sm:px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer apple-btn-press ${
                activeTab === 'assisted'
                  ? 'bg-[#1d1d1f] text-white shadow-xs'
                  : 'text-[#515154] hover:text-[#1d1d1f]'
              }`}
            >
              <Sparkles className="h-4 w-4 text-emerald-400" />
              <span>Option A: 100% Free Assisted Service (Easiest)</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('self')}
              className={`flex items-center gap-2 px-4 sm:px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer apple-btn-press ${
                activeTab === 'self'
                  ? 'bg-[#1d1d1f] text-white shadow-xs'
                  : 'text-[#515154] hover:text-[#1d1d1f]'
              }`}
            >
              <FileText className="h-4 w-4" />
              <span>Option B: Self-Application on Portal</span>
            </button>
          </div>
        </div>

        {/* Tab 1: Option A (100% Assisted Free Doorstep Application Service) */}
        {activeTab === 'assisted' && (
          <div className="rounded-3xl bg-white border border-[#e5e5ea] p-6 sm:p-9 md:p-12 shadow-sm flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            
            <div className="flex-1 flex flex-col gap-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f5f5f7] border border-[#e5e5ea] self-start">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs font-bold text-[#1d1d1f] uppercase tracking-wider">
                  Recommended for Homeowners in Rajasthan
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-[#1d1d1f] tracking-tight">
                Never Stand in Line. We File Your Entire Application For Free.
              </h3>
              <p className="text-sm sm:text-base text-[#424245] leading-relaxed">
                The government portal requires accurate technical DISCOM entries and document uploads. Our certified portal desk at <strong>Deewan Enterprises in Behror</strong> completes your registration, selects <strong>Deewan Enterprises</strong>, and secures your JVVNL sanction with zero headache.
              </p>

              {/* 3 Simple Steps */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <div className="p-4 rounded-2xl bg-[#fbfbfd] border border-[#e5e5ea]">
                  <span className="text-lg font-black text-[#1d1d1f] block">1. Take Photo</span>
                  <p className="text-xs text-[#515154] mt-1">
                    Snap a photo of your latest JVVNL electricity bill & Aadhaar.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-[#fbfbfd] border border-[#e5e5ea]">
                  <span className="text-lg font-black text-[#1d1d1f] block">2. WhatsApp Us</span>
                  <p className="text-xs text-[#515154] mt-1">
                    Send it to our verified solar desk at <strong>+91 95718 39696</strong>.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-[#fbfbfd] border border-[#e5e5ea]">
                  <span className="text-lg font-black text-[#1d1d1f] block">3. Relax</span>
                  <p className="text-xs text-[#515154] mt-1">
                    We file the portal form, conduct the rooftop survey & handle net metering.
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href="https://wa.me/919571839696?text=Namaste%20Deewan%20Solar%2C%20I%20want%20to%20apply%20for%20PM%20Surya%20Ghar%20Yojana.%20Here%20is%20my%20JVVNL%20electricity%20bill%20for%20free%20portal%20registration."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 rounded-full bg-[#1d1d1f] hover:bg-black text-white text-sm sm:text-base font-bold px-7 py-4 transition-all shadow-md apple-btn-press"
                >
                  <MessageSquare className="h-5 w-5 text-emerald-400" />
                  <span>Send Bill on WhatsApp (+91 95718 39696)</span>
                  <ArrowRight className="h-4 w-4" />
                </a>

                <a
                  href="tel:+919571839696"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-[#d2d2d7] bg-white text-[#1d1d1f] hover:bg-[#f5f5f7] text-xs sm:text-sm font-bold px-5 py-4 transition-colors apple-btn-press"
                >
                  <Phone className="h-4 w-4 text-[#1d1d1f]" />
                  <span>Call Portal Desk (+91 95718 39696)</span>
                </a>
              </div>
            </div>

            {/* Checklist Card */}
            <div className="w-full lg:w-[420px] shrink-0 p-6 sm:p-7 rounded-2xl bg-[#fbfbfd] border border-[#d2d2d7] shadow-2xs flex flex-col gap-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#515154] block">
                Required Documents Checklist
              </span>

              <ul className="space-y-3">
                {requiredDocuments.map((doc, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="h-4 w-4 text-[#1d1d1f] shrink-0 mt-0.5" />
                    <div>
                      <span className="text-xs sm:text-sm font-bold text-[#1d1d1f] block">
                        {doc.title}
                      </span>
                      <span className="text-xs text-[#515154] leading-snug block mt-0.5">
                        {doc.desc}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="pt-3 border-t border-[#e5e5ea] text-xs text-[#515154]">
                <strong className="text-[#1d1d1f]">Walk-in Desk:</strong> Ward No. 10, Deewan Mohalla, Behror (Open all 7 days).
              </div>
            </div>

          </div>
        )}

        {/* Tab 2: Option B (Self-Application Guide) */}
        {activeTab === 'self' && (
          <div className="rounded-3xl bg-white border border-[#e5e5ea] p-6 sm:p-9 md:p-12 shadow-sm flex flex-col gap-8">
            
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h3 className="text-2xl sm:text-3xl font-black text-[#1d1d1f] tracking-tight">
                  Applying on pmsuryaghar.gov.in Yourself
                </h3>
                <p className="text-sm sm:text-base text-[#424245] mt-1">
                  Follow these 4 simple steps to ensure you select <strong>Deewan Enterprises</strong> as your official registered seller.
                </p>
              </div>

              <a
                href="https://pmsuryaghar.gov.in/#/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#1d1d1f] hover:bg-black text-white text-xs sm:text-sm font-bold transition-all shadow-xs shrink-0 apple-btn-press"
              >
                <span>Open National Portal</span>
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>

            {/* Vendor Name Copy Box - High Utility */}
            <div className="p-5 sm:p-6 rounded-2xl bg-[#fbfbfd] border-2 border-[#1d1d1f]/15 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-start gap-3.5">
                <div className="h-11 w-11 rounded-xl bg-white border border-[#d2d2d7] flex items-center justify-center shrink-0 shadow-2xs">
                  <Building className="h-6 w-6 text-[#1d1d1f]" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#515154] block">
                    Vendor Search Name for Portal Dropdown
                  </span>
                  <span className="text-xl sm:text-2xl font-black text-[#1d1d1f] tracking-wider block font-mono mt-0.5">
                    {vendorSearchName}
                  </span>
                  <span className="text-xs text-[#515154] block mt-0.5 font-medium">
                    State: Rajasthan • Discom: JVVNL • District / Circle: Alwar / Behror Circle
                  </span>
                </div>
              </div>

              <button
                type="button"
                onClick={copyToClipboard}
                className="shrink-0 inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white hover:bg-[#f5f5f7] text-[#1d1d1f] border border-[#d2d2d7] text-xs sm:text-sm font-bold transition-all shadow-2xs cursor-pointer active:scale-95"
              >
                {copied ? <Check className="h-4 w-4 text-emerald-600" /> : <Copy className="h-4 w-4 text-[#1d1d1f]" />}
                <span>{copied ? 'Copied to Clipboard!' : 'Copy Vendor Name'}</span>
              </button>
            </div>

            {/* Step-by-Step Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {selfSteps.map((s, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-[#fbfbfd] border border-[#e5e5ea] flex flex-col justify-between"
                >
                  <div>
                    <span className="text-2xl font-black text-[#1d1d1f] font-mono block mb-2">
                      {s.step}
                    </span>
                    <h4 className="text-sm sm:text-base font-black text-[#1d1d1f] leading-snug">
                      {s.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-[#424245] mt-2 leading-relaxed">
                      {s.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Helpline Callout */}
            <div className="p-4 sm:p-5 rounded-2xl bg-[#f5f5f7] border border-[#e5e5ea] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs sm:text-sm text-[#424245]">
              <div className="flex items-center gap-2.5">
                <HelpCircle className="h-5 w-5 text-[#1d1d1f] shrink-0" />
                <span>
                  <strong>Need assistance during portal submission?</strong> Call our Behror portal coordinator directly at{' '}
                  <a href="tel:+919571839696" className="text-[#1d1d1f] font-bold underline">
                    +91 95718 39696
                  </a>.
                </span>
              </div>

              <a
                href={googleProfileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold text-[#1d1d1f] hover:underline shrink-0"
              >
                Visit Deewan Enterprises on Google →
              </a>
            </div>

          </div>
        )}

      </div>
    </section>
  );
}

