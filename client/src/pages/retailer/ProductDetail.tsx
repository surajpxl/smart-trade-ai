import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Radio, 
  Search, 
  Bell, 
  Sparkles, 
  Star, 
  Truck, 
  CreditCard, 
  ShieldCheck, 
  AlertCircle,
  Minus,
  Plus,
  ShoppingBag,
  LayoutDashboard,
  Store,
  Boxes,
  Users
} from 'lucide-react';

export default function ProductDetail() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('Marketplace');
  const [quantity, setQuantity] = useState(48);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const navItems = [
    { name: 'Overview', icon: LayoutDashboard, path: '/retailer/dashboard' },
    { name: 'Marketplace', icon: Store, path: '/marketplace' },
    { name: 'AI Search', icon: Sparkles, path: '/retailer/ai-search' },
    { name: 'Inventory', icon: Boxes, path: '/retailer/inventory' },
    { name: 'Orders', icon: ShoppingBag, path: '/retailer/orders' },
    { name: 'Suppliers', icon: Users, path: '/retailer/suppliers' },
    { name: 'Payments', icon: CreditCard, path: '/retailer/payments' },
  ];

  const thumbnails = [
    { label: 'Front pack', id: 'front' },
    { label: 'Case of 12', id: 'case' },
    { label: 'Nutrition', id: 'nutrition' },
  ];

  const pricingTiers = [
    { min: 24, max: 47, label: '24–47 units', price: 112.40, margin: '12.6% margin', recommended: false },
    { min: 48, max: 95, label: '48–95 units', price: 109.80, margin: '14.7% margin', recommended: true },
    { min: 96, max: Infinity, label: '96+ units', price: 106.20, margin: '17.6% margin', recommended: false },
  ];

  // Determine current unit price based on selected quantity
  const currentTier = pricingTiers.find(t => quantity >= t.min && quantity <= t.max) || pricingTiers[0];
  const totalPrice = (quantity * currentTier.price).toLocaleString('en-IN', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  const handleQuantityChange = (delta: number) => {
    setQuantity(prev => Math.max(1, prev + delta));
  };

  return (
    <div className="min-h-screen bg-[#070b14] text-slate-100 flex font-sans selection:bg-cyan-500 selection:text-black">
      
      {/* Sidebar Navigation */}
      <aside className="w-64 bg-[#090e1a] border-r border-slate-800/60 flex flex-col justify-between shrink-0 hidden md:flex">
        <div>
          {/* Top Brand Block */}
          <div className="p-5 border-b border-slate-800/60">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                <Radio className="w-4 h-4 animate-pulse" />
              </div>
              <div>
                <h1 className="text-sm font-bold text-white tracking-tight">SmartTrade</h1>
                <div className="text-[9px] font-bold tracking-widest text-cyan-500 uppercase">AI COMMERCE GRID</div>
              </div>
            </div>

            <div className="mt-3 px-3 py-1.5 rounded-lg bg-cyan-950/40 border border-cyan-800/40 text-cyan-400 text-xs font-medium">
              Retailer workspace
            </div>
          </div>

          {/* Navigation Menu */}
          <nav className="p-3 space-y-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.name;
              return (
                <button
                  key={item.name}
                  onClick={() => {
                    setActiveTab(item.name);
                    navigate(item.path);
                  }}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-xs font-medium transition-all ${
                    isActive
                      ? 'bg-cyan-950/60 text-cyan-400 border border-cyan-800/50 shadow-[0_0_15px_rgba(6,182,212,0.1)]'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900/50'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.name}</span>
                </button>
              );
            })}
          </nav>
        </div>

        {/* User Account Profile */}
        <div className="p-4 border-t border-slate-800/60">
          <div className="p-2.5 rounded-xl bg-[#0b1220] border border-slate-800/80">
            <div className="text-xs font-semibold text-white">Shree Ganesh Stores</div>
            <div className="text-[10px] text-slate-500 mt-0.5">Settings · Help · Sign out</div>
          </div>
        </div>
      </aside>

      {/* Main Workspace Area */}
      <main className="flex-1 flex flex-col min-w-0">
        
        {/* Top Navbar */}
        <header className="h-16 px-6 border-b border-slate-800/60 flex items-center justify-between gap-4 bg-[#070b14]/80 backdrop-blur-md sticky top-0 z-20">
          <div className="text-xs text-slate-400">
            Pune · delivery radius 18 km
          </div>

          <div className="flex items-center gap-3 flex-1 max-w-md justify-end">
            <div className="relative w-full max-w-xs">
              <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
              <input 
                type="text" 
                placeholder="Search products, orders, GSTIN..." 
                className="w-full bg-[#0b1220] border border-slate-800 rounded-lg pl-9 pr-3 py-1.5 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-500"
              />
            </div>
            <button className="w-8 h-8 rounded-lg bg-[#0b1220] border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white">
              <Bell className="w-4 h-4" />
            </button>
          </div>
        </header>

        {/* Workspace Content */}
        <div className="p-6 lg:p-8 space-y-6 max-w-7xl">
          
          {/* Header Title Section */}
          <div>
            <h2 className="text-2xl font-bold text-white tracking-tight">
              Fortune Sunlite Refined Sunflower Oil
            </h2>
            <p className="text-xs text-slate-400 mt-1">
              1 litre PET bottle · SKU AAR-OIL-1L-042
            </p>
          </div>

          {/* Main Grid: Gallery & Ordering Details */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Product Imagery (5 cols) */}
            <div className="lg:col-span-5 space-y-3">
              <div className="relative aspect-square w-full rounded-2xl bg-[#0b1220] border border-slate-800 overflow-hidden flex items-center justify-center p-6">
                {/* AI Top Pick Badge */}
                <div className="absolute top-4 left-4 z-10 px-2.5 py-1 rounded-md bg-cyan-950/80 border border-cyan-500/50 text-cyan-400 text-[10px] font-bold tracking-wider uppercase flex items-center gap-1.5 shadow-lg">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
                  AI TOP PICK
                </div>

                {/* Product Image Showcase */}
                <img 
                  src="https://images.unsplash.com/photo-1620706857370-e1b9770e8bb1?auto=format&fit=crop&w=600&q=80" 
                  alt="Fortune Sunlite Refined Sunflower Oil" 
                  className="w-full h-full object-contain drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)]"
                />
              </div>

              {/* Thumbnail Selector Tabs */}
              <div className="grid grid-cols-3 gap-3">
                {thumbnails.map((thumb, idx) => (
                  <button
                    key={thumb.id}
                    onClick={() => setActiveImageIndex(idx)}
                    className={`py-3 px-2 rounded-xl text-xs font-medium border text-center transition-all ${
                      activeImageIndex === idx
                        ? 'bg-slate-800/80 border-slate-600 text-white shadow-md'
                        : 'bg-[#0b1220]/60 border-slate-800/80 text-slate-400 hover:text-slate-200 hover:border-slate-700'
                    }`}
                  >
                    {thumb.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Right Column: Pricing & Purchase Controls (7 cols) */}
            <div className="lg:col-span-7 space-y-5">
              
              {/* Product Badges & Supplier Info */}
              <div className="space-y-2">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-md bg-emerald-950/80 border border-emerald-800/60 text-emerald-400 text-[10px] font-bold tracking-wider uppercase flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    LOCAL STOCK
                  </span>
                  <span className="px-2.5 py-0.5 rounded-md bg-slate-900 border border-slate-800 text-slate-300 text-[10px] font-bold tracking-wider uppercase">
                    • GST 5%
                  </span>
                  <span className="px-2.5 py-0.5 rounded-md bg-slate-900 border border-slate-800 text-slate-300 text-[10px] font-bold tracking-wider uppercase">
                    • RETURNS
                  </span>
                </div>

                <div className="flex items-center gap-2 text-xs text-slate-400 pt-1">
                  <span className="text-slate-200 font-medium">Aarav Foods Pvt Ltd</span>
                  <span>·</span>
                  <span className="text-slate-300">Verified</span>
                  <span>·</span>
                  <div className="flex items-center gap-1 text-slate-200 font-semibold">
                    <span>4.8</span>
                    <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  </div>
                  <span>·</span>
                  <span>1,842 orders</span>
                </div>
              </div>

              {/* Multi-tier Bulk Pricing Container */}
              <div className="bg-[#0b1220]/90 border border-slate-800/80 rounded-2xl p-5 space-y-3">
                <div>
                  <h3 className="text-sm font-semibold text-white">Multi-tier bulk pricing</h3>
                  <p className="text-xs text-slate-500">Price per bottle</p>
                </div>

                {/* Tiers List */}
                <div className="space-y-2 pt-1">
                  {pricingTiers.map((tier) => {
                    const isCurrentSelection = quantity >= tier.min && quantity <= tier.max;
                    return (
                      <div
                        key={tier.label}
                        className={`p-3.5 rounded-xl border flex items-center justify-between transition-all ${
                          isCurrentSelection || tier.recommended
                            ? 'bg-cyan-950/40 border-cyan-500/60 shadow-[0_0_15px_rgba(6,182,212,0.06)]'
                            : 'bg-[#080d1a] border-slate-800/80 text-slate-400'
                        }`}
                      >
                        <div className="text-xs font-medium text-slate-300">
                          {tier.label}
                        </div>

                        <div className="flex items-center gap-4">
                          <div className="text-right">
                            <span className="text-sm font-bold text-white">₹{tier.price.toFixed(2)}</span>
                          </div>

                          <div className="w-28 flex items-center justify-end gap-2">
                            <span className="text-[11px] text-emerald-400 font-medium">{tier.margin}</span>
                            {tier.recommended && (
                              <span className="px-1.5 py-0.5 rounded bg-cyan-500/20 text-cyan-400 text-[9px] font-bold tracking-wider uppercase">
                                • RECOMMENDED
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Quantity Controls & Add-to-Cart Action */}
              <div className="flex flex-col sm:flex-row items-stretch gap-3">
                {/* Quantity Stepper */}
                <div className="flex items-center bg-[#0b1220] border border-slate-800 rounded-xl px-3 py-2 justify-between shrink-0">
                  <button 
                    onClick={() => handleQuantityChange(-12)}
                    className="w-7 h-7 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white transition-colors"
                  >
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                  <span className="px-5 text-sm font-bold text-white min-w-[3rem] text-center">{quantity}</span>
                  <button 
                    onClick={() => handleQuantityChange(12)}
                    className="w-7 h-7 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white transition-colors"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Primary Add to Cart Button */}
                <button className="flex-1 py-3 px-6 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(6,182,212,0.2)] transition-all">
                  <ShoppingBag className="w-4 h-4" />
                  <span>Add {quantity} · ₹{totalPrice}</span>
                </button>
              </div>

              {/* Logistics Features Banner */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="p-3.5 rounded-xl bg-[#0b1220]/80 border border-slate-800/80 flex items-center gap-3">
                  <Truck className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span className="text-xs font-semibold text-slate-200">Tomorrow delivery</span>
                </div>

                <div className="p-3.5 rounded-xl bg-[#0b1220]/80 border border-slate-800/80 flex items-center gap-3">
                  <CreditCard className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span className="text-xs font-semibold text-slate-200">7-day credit</span>
                </div>

                <div className="p-3.5 rounded-xl bg-[#0b1220]/80 border border-slate-800/80 flex items-center gap-3">
                  <ShieldCheck className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span className="text-xs font-semibold text-slate-200">Buyer protection</span>
                </div>
              </div>

              {/* AI Sell-Through Confidence Footer Card */}
              <div className="p-4 rounded-xl bg-[#081324] border border-cyan-900/60 flex items-center gap-3">
                <AlertCircle className="w-4 h-4 text-cyan-400 shrink-0" />
                <div>
                  <div className="text-xs font-semibold text-white">96% sell-through confidence</div>
                  <div className="text-[11px] text-slate-400 mt-0.5">48 units should sell in 9–11 days.</div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </main>

    </div>
  );
}