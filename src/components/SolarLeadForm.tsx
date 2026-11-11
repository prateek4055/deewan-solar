'use client';

import { useState } from 'react';
import { CheckCircle2, ArrowRight, ShieldCheck, MessageSquare } from 'lucide-react';

export default function SolarLeadForm() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [location, setLocation] = useState('Behror');
  const [systemType, setSystemType] = useState('Residential Rooftop (1kW - 10kW)');
  const [monthlyBill, setMonthlyBill] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const locations = [
    'Behror City',
    'Neemrana Industrial Zone / Japanese Zone',
    'Kotputli (District HQ)',
    'Alwar City & District',
    'Bansur',
    'Mandhan',
    'Bardod',
    'Shahjahanpur (Rajasthan)',
    'Khairthal & Tijara',
    'Paota & Viratnagar',
    'Other Region in Rajasthan'
  ];

  const systemTypes = [
    'Residential Rooftop (1kW - 10kW with up to ₹95,000 Subsidy)',
    'Commercial / Industrial Grid-Tied (10kW - 500kW)',
    'Hybrid Solar with Battery Backup (Zero Grid Cut)',
    'Agricultural Solar Water Pump (PM KUSUM)'
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone || !location) {
      setError('Please provide your name, phone number, and location.');
      return;
    }
    setError('');
    setLoading(true);

    try {
      const messageText =
        `Namaste Deewan Solar Team,\n\n` +
        `I would like to request a Free Rooftop Solar Feasibility Audit & Quotation:\n\n` +
        `• Name: ${name}\n` +
        `• Phone: ${phone}\n` +
        `• Location / City: ${location}\n` +
        `• System Requirement: ${systemType}\n` +
        `• Current Monthly Bill: ${monthlyBill || 'Not Specified'}\n` +
        `• Additional Notes: ${message || 'None'}\n\n` +
        `Please contact me to schedule a visit in ${location}.`;

      const whatsappUrl = `https://wa.me/919571839696?text=${encodeURIComponent(messageText)}`;
      window.open(whatsappUrl, '_blank');
      setSubmitted(true);
    } catch (err: any) {
      console.error(err);
      setError('Unable to open inquiry. Please call +91 95718 39696 directly.');
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center text-center py-10 px-4 animate-fade-in bg-[#fbfbfd] rounded-3xl border border-[#e5e5ea]">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#f2fcf5] text-[#24b33e] mb-4 border border-[#bbf0c8]">
          <CheckCircle2 className="h-8 w-8" />
        </div>
        <h3 className="text-xl font-bold text-[#1d1d1f]">Rooftop Audit Request Received</h3>
        <p className="text-xs text-[#6e6e73] mt-2 max-w-md leading-relaxed">
          Thank you, <span className="font-semibold text-[#1d1d1f]">{name}</span>. The <span className="font-bold text-[#1d1d1f]">Deewan Solar Engineering Team</span> has received your inquiry. Our senior technician will contact you to confirm your site audit.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <button
            type="button"
            onClick={() => {
              setSubmitted(false);
              setName('');
              setPhone('');
              setMonthlyBill('');
              setMessage('');
            }}
            className="rounded-full border border-[#d2d2d7] bg-white px-5 py-2.5 text-xs font-semibold text-[#1d1d1f] hover:bg-[#f5f5f7] transition-colors cursor-pointer"
          >
            Submit Another Inquiry
          </button>
          <a
            href="tel:+919571839696"
            className="rounded-full bg-[#1d1d1f] hover:bg-black px-5 py-2.5 text-xs font-semibold text-white transition-colors"
          >
            Call Desk Now: +91 95718 39696
          </a>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {error && (
        <div className="rounded-xl bg-red-50 text-red-600 border border-red-200 p-3 text-xs font-medium">
          {error}
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Name */}
        <div className="flex flex-col gap-1.5">
          <label className="text-[10px] font-bold text-[#6e6e73] uppercase tracking-wider">
            Your Full Name <span className="text-[#0071e3]">*</span>
          </label>
          <input
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="e.g. Ramesh Kumar Sharma"
            className="w-full bg-[#ffffff] text-[#1d1d1f] rounded-xl border border-[#d2d2d7] outline-none px-4 py-3 text-xs focus:ring-1 focus:ring-[#0071e3] placeholder-[#86868b] transition-all shadow-2xs"
          />
        </div>

        {/* Phone */}
        <div className="flex flex-col gap-1.5">
          <label className="text-[10px] font-bold text-[#6e6e73] uppercase tracking-wider">
            Mobile Number (WhatsApp Preferred) <span className="text-[#0071e3]">*</span>
          </label>
          <input
            type="tel"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="e.g. 98765 43210"
            className="w-full bg-[#ffffff] text-[#1d1d1f] rounded-xl border border-[#d2d2d7] outline-none px-4 py-3 text-xs focus:ring-1 focus:ring-[#0071e3] placeholder-[#86868b] transition-all shadow-2xs"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Location */}
        <div className="flex flex-col gap-1.5">
          <label className="text-[10px] font-bold text-[#6e6e73] uppercase tracking-wider">
            Property Location / Tehsil <span className="text-[#0071e3]">*</span>
          </label>
          <select
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full bg-[#ffffff] text-[#1d1d1f] rounded-xl border border-[#d2d2d7] outline-none px-4 py-3 text-xs focus:ring-1 focus:ring-[#0071e3] cursor-pointer transition-all shadow-2xs"
          >
            {locations.map((loc) => (
              <option key={loc} value={loc} className="bg-white text-[#1d1d1f]">
                {loc}
              </option>
            ))}
          </select>
        </div>

        {/* System Requirement */}
        <div className="flex flex-col gap-1.5">
          <label className="text-[10px] font-bold text-[#6e6e73] uppercase tracking-wider">
            System Requirement
          </label>
          <select
            value={systemType}
            onChange={(e) => setSystemType(e.target.value)}
            className="w-full bg-[#ffffff] text-[#1d1d1f] rounded-xl border border-[#d2d2d7] outline-none px-4 py-3 text-xs focus:ring-1 focus:ring-[#0071e3] cursor-pointer transition-all shadow-2xs"
          >
            {systemTypes.map((st) => (
              <option key={st} value={st} className="bg-white text-[#1d1d1f]">
                {st}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Monthly Bill */}
      <div className="flex flex-col gap-1.5">
        <label className="text-[10px] font-bold text-[#6e6e73] uppercase tracking-wider">
          Approximate Monthly Electricity Bill
        </label>
        <input
          type="text"
          value={monthlyBill}
          onChange={(e) => setMonthlyBill(e.target.value)}
          placeholder="e.g. ₹4,500 per month"
          className="w-full bg-[#ffffff] text-[#1d1d1f] rounded-xl border border-[#d2d2d7] outline-none px-4 py-3 text-xs focus:ring-1 focus:ring-[#0071e3] placeholder-[#86868b] transition-all shadow-2xs"
        />
      </div>

      {/* Message */}
      <div className="flex flex-col gap-1.5">
        <label className="text-[10px] font-bold text-[#6e6e73] uppercase tracking-wider">
          Rooftop Details or Special Requests
        </label>
        <textarea
          rows={2}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="e.g. Looking for elevated pergola structure on my 2-story building in Behror."
          className="w-full bg-[#ffffff] text-[#1d1d1f] rounded-xl border border-[#d2d2d7] outline-none px-4 py-3 text-xs focus:ring-1 focus:ring-[#0071e3] placeholder-[#86868b] resize-none transition-all shadow-2xs"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-[#0071e3] hover:bg-[#0077ed] active:scale-[0.98] disabled:opacity-50 text-white font-bold py-3.5 transition-all cursor-pointer text-xs min-h-[44px] shadow-sm"
      >
        <MessageSquare className="h-4 w-4" />
        <span>{loading ? 'Submitting...' : 'Dispatch Request to Deewan Solar Engineers on WhatsApp'}</span>
        <ArrowRight className="h-4 w-4" />
      </button>

      <div className="flex flex-col items-center justify-center gap-1 pt-1 text-[10px] text-[#86868b] text-center">
        <div className="flex items-center gap-1.5">
          <ShieldCheck className="h-3.5 w-3.5 text-[#1d1d1f]" />
          <span>100% Free Feasibility Audit • No Obligation • JVVNL Registered</span>
        </div>
        <span className="font-semibold text-[#1d1d1f]">
          We operate exclusively within Rajasthan (JVVNL territory). We do not service Haryana or UP.
        </span>
      </div>
    </form>
  );
}
