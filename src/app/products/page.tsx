'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Search, Filter, MessageSquare, Cpu, Eye } from 'lucide-react';
import { STATIC_PRODUCTS } from '@/data/products';

const SUPER_CATEGORIES: Record<string, string[]> = {
  'Big Electronics': [
    'Televisions',
    'Air Conditioners',
    'Refrigerators',
    'Washing Machines',
    'Inverters',
    'Batteries',
    'Coolers',
    'Fans'
  ],
  'Furniture': [
    'Chairs',
    'Ladders'
  ],
  'Solar': [
    'Solar Panels',
    'Solar Inverters'
  ]
};

const SUBCAT_TO_SUPERCAT: Record<string, string> = {};
Object.entries(SUPER_CATEGORIES).forEach(([superCat, subCats]) => {
  subCats.forEach(subCat => {
    SUBCAT_TO_SUPERCAT[subCat] = superCat;
  });
});

const CATEGORIES = ['All', 'Televisions', 'Air Conditioners', 'Refrigerators', 'Washing Machines', 'Inverters', 'Batteries', 'Coolers', 'Fans', 'Solar Panels', 'Solar Inverters', 'Chairs', 'Ladders'];

export default function ProductsPage() {
  const [products] = useState<any[]>(STATIC_PRODUCTS);
  const [search, setSearch] = useState('');
  const [selectedSuperCategory, setSelectedSuperCategory] = useState('All');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedBrand, setSelectedBrand] = useState('All');
  const [loading, setLoading] = useState(false);

  // Read initial category filter from URL if present
  useEffect(() => {
    // Force light mode
    document.documentElement.classList.remove('dark');

    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const catParam = params.get('category');
      if (catParam && CATEGORIES.includes(catParam)) {
        const superCat = SUBCAT_TO_SUPERCAT[catParam] || 'All';
        setSelectedSuperCategory(superCat);
        setSelectedCategory(catParam);
      }
    }
  }, []);

  // Dynamically filter options based on selected super-category
  const availableSubcategories = selectedSuperCategory === 'All'
    ? CATEGORIES
    : ['All', ...SUPER_CATEGORIES[selectedSuperCategory]];

  // Filter products by Super-Category first
  const productsMatchingSuperCategory = products.filter((p) => {
    if (selectedSuperCategory === 'All') return true;
    return SUBCAT_TO_SUPERCAT[p.category] === selectedSuperCategory;
  });

  // Calculate brands that have products in the currently active super-category
  const activeBrands = ['All', ...Array.from(new Set(
    productsMatchingSuperCategory.map(p => p.brand).filter(b => b && b !== 'N/A')
  ))];

  // Filtering Logic
  const filteredProducts = productsMatchingSuperCategory.filter((p) => {
    const matchesSearch = p.name.toLowerCase().includes(search.toLowerCase()) || 
                          p.description.toLowerCase().includes(search.toLowerCase()) ||
                          p.brand.toLowerCase().includes(search.toLowerCase());
    
    const matchesCategory = selectedCategory === 'All' || p.category === selectedCategory;
    const matchesBrand = selectedBrand === 'All' || p.brand === selectedBrand;

    return matchesSearch && matchesCategory && matchesBrand;
  });

  const handleSuperCategoryChange = (superCat: string) => {
    setSelectedSuperCategory(superCat);
    setSelectedCategory('All');
    setSelectedBrand('All');
  };

  return (
    <div className="w-full bg-[#ffffff] py-16 overflow-hidden">
      <div className="apple-container flex flex-col gap-10">
        
        {/* Page Header */}
        <div className="flex flex-col gap-3 reveal">
          <span className="text-[10px] font-bold uppercase tracking-widest text-[#6e6e73]">Deewan Solar & Electronics Authority</span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[#1d1d1f]">
            Flagship Product Showcase.
          </h1>
          <p className="text-xs sm:text-sm text-[#6e6e73] leading-relaxed max-w-2xl">
            Explore authorized rooftop solar panels, hybrid inverters, 4K Smart TVs, inverter air conditioners, refrigerators, and furniture. Complete manufacturer warranty with doorstep delivery across Behror and nearby regions.
          </p>
        </div>

        {/* Super-Category Filter Tabs */}
        <div className="flex flex-wrap gap-2 p-1.5 bg-[#f5f5f7] rounded-2xl border border-[#e8e8ed] max-w-2xl reveal">
          {['All', 'Big Electronics', 'Furniture', 'Solar'].map((superCat) => {
            const isActive = selectedSuperCategory === superCat;
            return (
              <button
                key={superCat}
                onClick={() => handleSuperCategoryChange(superCat)}
                className={`flex-1 min-w-[100px] text-center rounded-xl py-2.5 text-xs font-semibold transition-all duration-200 cursor-pointer apple-btn-press ${
                  isActive
                    ? 'bg-[#1d1d1f] text-white shadow-sm border border-[#1d1d1f]'
                    : 'text-[#6e6e73] hover:text-[#1d1d1f]'
                }`}
              >
                {superCat}
              </button>
            );
          })}
        </div>

        {/* Filters Bar */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 bg-[#f5f5f7] p-4 rounded-2xl border border-[#e8e8ed] relative z-30 reveal">
          
          {/* Search Input */}
          <div className="md:col-span-4 relative flex items-center">
            <Search className="absolute left-3.5 h-4.5 w-4.5 text-[#86868b]" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by name, brand, spec..."
              className="w-full bg-[#ffffff] text-[#1d1d1f] rounded-xl border border-[#d2d2d7] outline-none pl-11 pr-4 py-3 text-xs focus:ring-1 focus:ring-[#0071e3] placeholder-[#86868b] transition-shadow"
            />
          </div>

          {/* Subcategory Select (Scoped to selected Super-Category) */}
          <div className="md:col-span-4 relative flex items-center">
            <Filter className="absolute left-3.5 h-4.5 w-4.5 text-[#86868b]" />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full bg-[#ffffff] text-[#1d1d1f] rounded-xl border border-[#d2d2d7] outline-none pl-11 pr-4 py-3 text-xs focus:ring-1 focus:ring-[#0071e3] appearance-none cursor-pointer transition-shadow"
            >
              {availableSubcategories.map((cat) => (
                <option key={cat} value={cat}>
                  Category: {cat}
                </option>
              ))}
            </select>
          </div>

          {/* Brand Select (Scoped to selected Super-Category) */}
          <div className="md:col-span-4 relative flex items-center">
            <Cpu className="absolute left-3.5 h-4.5 w-4.5 text-[#86868b]" />
            <select
              value={selectedBrand}
              onChange={(e) => setSelectedBrand(e.target.value)}
              className="w-full bg-[#ffffff] text-[#1d1d1f] rounded-xl border border-[#d2d2d7] outline-none pl-11 pr-4 py-3 text-xs focus:ring-1 focus:ring-[#0071e3] appearance-none cursor-pointer transition-shadow"
            >
              {activeBrands.map((br) => (
                <option key={br} value={br}>
                  Brand: {br}
                </option>
              ))}
            </select>
          </div>

        </div>

        {/* Products Grid */}
        {loading ? (
          <div className="flex justify-center py-20">
            <div className="h-8 w-8 animate-spin rounded-full border-4 border-[#0071e3] border-t-transparent" />
          </div>
        ) : filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 reveal">
            {filteredProducts.map((prod) => (
              <div
                key={prod.id}
                className="flex flex-col justify-between rounded-2xl p-5 bg-[#f5f5f7] relative overflow-hidden group border border-[#e8e8ed]"
              >
                {/* Product Info */}
                <div>
                  {/* Product Image */}
                  <div className="aspect-video w-full rounded-xl bg-[#ffffff] overflow-hidden relative border border-[#e8e8ed] mb-5 p-2 flex items-center justify-center">
                    <img
                      src={prod.image_url}
                      alt={prod.name}
                      className="max-w-full max-h-full object-contain transition-transform duration-[400ms] ease-out group-hover:scale-[1.03]"
                      loading="lazy"
                    />
                    {!prod.in_stock && (
                      <span className="absolute top-3 right-3 bg-red-100 text-red-700 text-[8px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full border border-red-200">
                        Out of Stock
                      </span>
                    )}
                    {prod.featured && (
                      <span className="absolute top-3 left-3 bg-[#0071e3] text-white text-[8px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full">
                        Popular
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-1.5">
                    <span className="text-[9px] uppercase font-bold text-[#0071e3] bg-[#ffffff] px-2 py-0.5 rounded border border-[#e8e8ed]">
                      {prod.category}
                    </span>
                    <span className="text-[9px] uppercase font-bold text-[#6e6e73]">
                      {prod.brand}
                    </span>
                  </div>

                  <h3 className="text-sm font-bold text-[#1d1d1f] mt-3 line-clamp-1 group-hover:text-[#0071e3] transition-colors">
                    {prod.name}
                  </h3>
                  
                  <p className="text-[11px] text-[#6e6e73] mt-2 line-clamp-2 leading-relaxed">
                    {prod.description}
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="mt-6 flex flex-col gap-2.5 border-t border-[#e8e8ed] pt-4 relative z-10">
                  <Link
                    href={`/products/${prod.id}`}
                    className="w-full inline-flex items-center justify-center gap-1.5 rounded-full border border-[#d2d2d7] hover:bg-[#ffffff] text-[#1d1d1f] text-xs font-bold py-2.5 transition-colors"
                  >
                    <Eye className="h-4 w-4" />
                    <span>View Details & Specs</span>
                  </Link>

                  <div className="grid grid-cols-2 gap-2">
                    <Link
                      href={`/products/${prod.id}#inquiry`}
                      className="inline-flex items-center justify-center rounded-full bg-[#0071e3] hover:bg-[#0077ed] text-white text-[10px] font-bold py-2.5 transition-colors shadow-2xs"
                    >
                      <span>Get Best Price</span>
                    </Link>

                    <a
                      href={`https://wa.me/919571839696?text=${encodeURIComponent(
                        `Hi Deewan Electronics, I am interested in inquiring about "${prod.name}" (ID: ${prod.id}). Please let me know the best price and availability.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-1 rounded-full border border-[#24b33e] text-[#156e26] bg-[#f2fcf5] hover:bg-[#bbf0c8] text-[10px] font-bold py-2.5 transition-colors"
                    >
                      <MessageSquare className="h-3.5 w-3.5" />
                      <span>WhatsApp</span>
                    </a>
                  </div>
                </div>

              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 border border-dashed border-[#d2d2d7] rounded-3xl reveal">
            <Cpu className="h-12 w-12 text-[#86868b] mx-auto" />
            <h3 className="text-base font-bold text-[#1d1d1f] mt-4">No products found</h3>
            <p className="text-xs text-[#6e6e73] mt-1">
              Try adjusting your search filters or browse categories.
            </p>
          </div>
        )}

      </div>
    </div>
  );
}
