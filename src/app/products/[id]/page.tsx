'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, MessageSquare, Phone, CheckCircle, Cpu } from 'lucide-react';
import { STATIC_PRODUCTS } from '@/data/products';

export default function ProductDetailPage() {
  const { id } = useParams();
  const [product, setProduct] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  // Inquiry Form state
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [location, setLocation] = useState('Behror');
  const [notes, setNotes] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const locations = ['Behror', 'Neemrana', 'Kotputli', 'Alwar', 'Bansur', 'Shahjahanpur (Raj.)', 'Other Rajasthan Region'];

  useEffect(() => {
    // Always force light mode
    document.documentElement.classList.remove('dark');
    
    const staticProd = STATIC_PRODUCTS.find((p) => p.id === id);
    if (staticProd) {
      setProduct(staticProd);
    }
    setLoading(false);
  }, [id]);

  const handleInquirySubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone || !location) {
      setError('Please fill in all required fields.');
      return;
    }
    setError('');
    setSubmitting(true);

    try {
      // Direct lead submission straight to WhatsApp
      const messageText = `Hi Deewan Electronics, I am interested in inquiring about "${product.name}".\n\nMy Details:\n- Name: ${name}\n- Phone: ${phone}\n- Location: ${location}\n- Notes: ${notes || 'None'}`;
      const whatsappUrl = `https://wa.me/919571839696?text=${encodeURIComponent(messageText)}`;
      
      window.open(whatsappUrl, '_blank');
      setSubmitted(true);
      setName('');
      setPhone('');
      setNotes('');
    } catch (err: any) {
      console.error(err);
      setError(err.message || 'Something went wrong. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center py-40 flex-1 bg-[#ffffff]">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-[#0071e3] border-t-transparent" />
      </div>
    );
  }

  if (!product) {
    return (
      <div className="mx-auto max-w-[980px] px-6 py-20 text-center flex flex-col items-center gap-4 bg-[#ffffff]">
        <h2 className="text-xl font-bold text-primary-900">Product Not Found</h2>
        <p className="text-xs text-primary-400">The product you are looking for does not exist or has been removed.</p>
        <Link href="/products" className="text-xs font-bold text-[#0071e3] hover:underline flex items-center gap-1">
          <ArrowLeft className="h-4 w-4" />
          <span>Back to Catalog</span>
        </Link>
      </div>
    );
  }

  return (
    <div className="w-full bg-[#ffffff] py-16 overflow-hidden">
      <div className="apple-container flex flex-col gap-12">
        
        {/* Breadcrumb link */}
        <div className="reveal">
          <Link
            href="/products"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#6e6e73] hover:text-[#0071e3] transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Product Catalog</span>
          </Link>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start reveal">
          
          {/* Left: Product Images */}
          <div className="md:col-span-6 flex flex-col gap-4">
            <div className="aspect-video w-full rounded-2xl bg-[#f5f5f7] border border-[#e8e8ed] overflow-hidden relative p-4 flex items-center justify-center">
              <img
                src={product.image_url}
                alt={product.name}
                className="max-w-full max-h-full object-contain"
              />
              {!product.in_stock && (
                <span className="absolute top-4 right-4 bg-red-100 text-red-700 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full border border-red-200">
                  Out of Stock
                </span>
              )}
            </div>
          </div>

          {/* Right: Details & Action */}
          <div className="md:col-span-6 flex flex-col gap-6">
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-bold uppercase tracking-wider bg-[#ffffff] text-[#0071e3] px-3 py-1 rounded-full border border-[#e8e8ed]">
                {product.category}
              </span>
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#6e6e73]">
                Brand: {product.brand}
              </span>
            </div>

            <h1 className="text-2xl font-extrabold text-[#1d1d1f] sm:text-3xl tracking-tight leading-snug">
              {product.name}
            </h1>

            <p className="text-xs text-[#6e6e73] leading-relaxed">
              {product.description}
            </p>

            {/* Specifications Table */}
            {product.specifications && Object.keys(product.specifications).length > 0 && (
              <div className="rounded-2xl border border-[#e8e8ed] p-5 bg-[#f5f5f7]">
                <h3 className="text-[11px] font-bold text-[#1d1d1f] uppercase tracking-wider mb-4 flex items-center gap-1.5">
                  <Cpu className="h-4.5 w-4.5 text-[#0071e3]" />
                  <span>Technical Specifications</span>
                </h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3.5 text-[11px] leading-relaxed">
                  {Object.entries(product.specifications).map(([key, val]: any) => (
                    <div key={key} className="flex justify-between border-b border-[#d2d2d7] pb-2">
                      <span className="text-[#6e6e73] font-semibold">{key}</span>
                      <span className="text-[#1d1d1f] font-bold text-right pl-4">{val}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Quick Direct Actions */}
            <div className="flex flex-col sm:flex-row gap-4 border-t border-[#e8e8ed] pt-6 mt-2">
              <a
                href="tel:+919571839696"
                className="flex-1 inline-flex items-center justify-center gap-2 rounded-full border border-[#d2d2d7] text-[#1d1d1f] font-bold py-3 hover:bg-[#f5f5f7] transition-colors text-xs cursor-pointer min-h-[44px]"
              >
                <Phone className="h-4.5 w-4.5" />
                <span>Call Desk: +91 95718 39696</span>
              </a>
              
              <a
                href={`https://wa.me/919571839696?text=${encodeURIComponent(
                  `Hi Deewan Electronics, I want to inquire about: "${product.name}" (${product.category}). Please share details.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-[#1d1d1f] hover:bg-black text-white font-bold py-3 transition-colors text-xs min-h-[44px]"
              >
                <MessageSquare className="h-4.5 w-4.5" />
                <span>WhatsApp Inquiry</span>
              </a>
            </div>

          </div>

        </div>

        {/* Inquiry Form Form */}
        <section id="inquiry" className="max-w-2xl mx-auto w-full mt-10 scroll-mt-24 reveal">
          <div className="rounded-3xl border border-[#e8e8ed] p-8 bg-[#f5f5f7]">
            
            <div className="text-center mb-8 flex flex-col gap-2">
              <h2 className="text-xl font-bold text-[#1d1d1f]">Request Quotation / Callback</h2>
              <p className="text-xs text-[#6e6e73]">
                Fill in details below to receive the best price and installation configurations.
              </p>
            </div>

            {submitted ? (
              <div className="flex flex-col items-center justify-center text-center py-6 animate-fade-in">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 mb-4">
                  <CheckCircle className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-[#1d1d1f]">Request Sent!</h3>
                <p className="text-xs text-[#6e6e73] mt-1.5 max-w-sm leading-relaxed">
                  Thank you! Our sales team will call you shortly with the best quote for <span className="font-bold">{product.name}</span>.
                </p>
              </div>
            ) : (
              <form onSubmit={handleInquirySubmit} className="space-y-4">
                {error && (
                  <div className="rounded-xl bg-red-50 text-red-650 border border-red-200/50 p-3 text-xs font-bold">
                    ⚠️ {error}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] font-bold text-[#6e6e73] uppercase tracking-wider">Your Name <span className="text-red-500">*</span></label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Sunil Yadav"
                      className="w-full bg-[#ffffff] text-[#1d1d1f] rounded-xl border border-[#d2d2d7] outline-none px-4 py-2.5 text-xs focus:ring-1 focus:ring-[#0071e3] transition-shadow"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] font-bold text-[#6e6e73] uppercase tracking-wider">Phone Number <span className="text-red-500">*</span></label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="e.g. 9876543210"
                      className="w-full bg-[#ffffff] text-[#1d1d1f] rounded-xl border border-[#d2d2d7] outline-none px-4 py-2.5 text-xs focus:ring-1 focus:ring-[#0071e3] transition-shadow"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] font-bold text-[#6e6e73] uppercase tracking-wider">Your Location <span className="text-red-500">*</span></label>
                  <select
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full bg-[#ffffff] text-[#1d1d1f] rounded-xl border border-[#d2d2d7] outline-none px-4 py-2.5 text-xs focus:ring-1 focus:ring-[#0071e3] appearance-none cursor-pointer transition-shadow"
                  >
                    {locations.map((loc) => (
                      <option key={loc} value={loc}>
                        {loc}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] font-bold text-[#6e6e73] uppercase tracking-wider">Notes / Custom Requirements</label>
                  <textarea
                    rows={3}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="e.g. Please quote for home delivery to Neemrana and specify wall-mount bracket options."
                    className="w-full bg-[#ffffff] text-[#1d1d1f] rounded-xl border border-[#d2d2d7] outline-none px-4 py-2.5 text-xs focus:ring-1 focus:ring-[#0071e3] resize-none transition-shadow"
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full inline-flex items-center justify-center rounded-full bg-[#0071e3] hover:bg-[#005bc4] disabled:bg-[#f5f5f7] text-white font-bold py-3.5 transition-colors cursor-pointer text-xs min-h-[44px]"
                >
                  {submitting ? 'Submitting request...' : 'Submit Best Price Inquiry'}
                </button>
              </form>
            )}
          </div>
        </section>

      </div>
    </div>
  );
}
