import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Radio, 
  Search, 
  Bell, 
  Mic, 
  Upload, 
  Sparkles, 
  Plus, 
  Star, 
  AlertCircle,
  LayoutDashboard,
  Store,
  Boxes,
  ShoppingBag,
  Users,
  CreditCard
} from 'lucide-react';

export default function AiSearch() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('AI Search');

  const navItems = [
    { name: 'Overview', icon: LayoutDashboard, path: '/retailer/dashboard' },
    { name: 'Marketplace', icon: Store, path: '/marketplace' },
    { name: 'AI Search', icon: Sparkles, path: '/retailer/ai-search' },
    { name: 'Inventory', icon: Boxes, path: '/retailer/inventory' },
    { name: 'Orders', icon: ShoppingBag, path: '/retailer/orders' },
    { name: 'Suppliers', icon: Users, path: '/retailer/suppliers' },
    { name: 'Payments', icon: CreditCard, path: '/retailer/payments' },
  ];

  const products = [
    {
      id: 1,
      name: 'Fortune Sunlite Oil - 1L',
      supplier: 'Aarav Foods',
      rating: 4.8,
      price: '112.40',
      moq: '24',
      tag: '8% BELOW MARKET',
      image: 'https://images.unsplash.com/photo-1620706857370-e1b9770e8bb1?auto=format&fit=crop&w=300&q=80',
    },
    {
      id: 2,
      name: 'Tata Salt Iodised - 1kg',
      supplier: 'Sahyadri Wholesale',
      rating: 4.9,
      price: '24.80',
      moq: '40',
      tag: 'FAST MOVER',
      image: 'https://images.unsplash.com/photo-1518110168401-f2877ee2c8ad?auto=format&fit=crop&w=300&q=80',
    },
    {
      id: 3,
      name: 'Parle-G Biscuits - 800g',
      supplier: 'Metro FMCG',
      rating: 4.7,
      price: '72.00',
      moq: '24',
      tag: null,
      image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&w=300&q=80',
    },
  ];

  return (
    <div className="min-h-screen bg-[#070b14] text-slate-100 flex font-sans selection:bg-cyan-500 selection:text-black">
      
      {/* Sidebar Navigation */}
      <aside className="w-64 bg-[#090e1a] border-r border-slate-800/60 flex flex-col justify-between shrink-0 hidden md:flex">
        <div>
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

        <div className="p-4 border-t border-slate-800/60">
          <div className="p-2.5 rounded-xl bg-[#0b1220] border border-slate-800/80">
            <div className="text-xs font-semibold text-white">Shree Ganesh Stores</div>
            <div className="text-[10px] text-slate-500 mt-0.5">Settings · Help · Sign out</div>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col min-w-0">
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

        <div className="p-6 lg:p-8 space-y-6 max-w-7xl">
          <div>
            <h2 className="text-2xl font-bold text-white tracking-tight">AI Search</h2>
            <p className="text-xs text-slate-400 mt-1">
              Voice and image search understands packs, margins and local stock
            </p>
          </div>

          {/* Voice Prompt Banner */}
          <div className="p-4 rounded-xl bg-[#0b1220]/90 border border-cyan-500/40 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-[0_0_20px_rgba(6,182,212,0.08)]">
            <div className="flex items-center gap-3">
              <div className="w-7 h-7 rounded-lg bg-cyan-500/10 text-cyan-400 flex items-center justify-center shrink-0">
                <Sparkles className="w-4 h-4" />
              </div>
              <div>
                <div className="text-[10px] font-bold text-cyan-400 uppercase tracking-wider">
                  INTERPRETED FROM VOICE
                </div>
                <div className="text-sm font-semibold text-white mt-0.5">
                  "Show 1 litre sunflower oils below ₹120, delivered tomorrow"
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <button className="px-3 py-1.5 bg-slate-900 hover:bg-slate-800 border border-slate-700 rounded-lg text-xs font-medium text-slate-200 flex items-center gap-1.5 transition-all">
                <Mic className="w-3.5 h-3.5 text-cyan-400" />
                Speak again
              </button>
              <button className="px-3 py-1.5 bg-slate-900 hover:bg-slate-800 border border-slate-700 rounded-lg text-xs font-medium text-slate-200 flex items-center gap-1.5 transition-all">
                <Upload className="w-3.5 h-3.5 text-cyan-400" />
                Upload image
              </button>
            </div>
          </div>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            
            {/* Left Column: Filters */}
            <div className="lg:col-span-4 bg-[#0b1220]/80 border border-slate-800/80 rounded-2xl p-5 space-y-5">
              <div>
                <h3 className="text-sm font-semibold text-white">Smart filters</h3>
                <p className="text-xs text-slate-500 mt-0.5">12 matching SKUs</p>
              </div>

              <div className="space-y-1.5">
                <label className="text-[11px] font-medium text-slate-400">Delivery</label>
                <div className="px-3 py-2 bg-[#080d1a] border border-slate-800 rounded-lg text-xs font-medium text-slate-200">
                  By tomorrow
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-[11px] font-medium text-slate-400">Unit price</label>
                <div className="px-3 py-2 bg-[#080d1a] border border-slate-800 rounded-lg text-xs font-medium text-slate-200">
                  ₹95 — ₹120
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-[11px] font-medium text-slate-400">Pack size</label>
                <div className="px-3 py-2 bg-[#080d1a] border border-slate-800 rounded-lg text-xs font-medium text-slate-200">
                  1 litre
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-[11px] font-medium text-slate-400">Rating</label>
                <div className="px-3 py-2 bg-[#080d1a] border border-slate-800 rounded-lg text-xs font-medium text-slate-200">
                  4.5+
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-[11px] font-medium text-slate-400">Payment</label>
                <div className="px-3 py-2 bg-[#080d1a] border border-slate-800 rounded-lg text-xs font-medium text-slate-200">
                  7-day credit
                </div>
              </div>
            </div>

            {/* Right Column: Search Results */}
            <div className="lg:col-span-8 space-y-4">
              
              {/* Best Landed Price Banner */}
              <div className="p-3.5 rounded-xl bg-emerald-950/40 border border-emerald-800/40 flex items-center justify-between gap-4">
                <div className="flex items-center gap-2.5">
                  <AlertCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  <div>
                    <span className="text-xs font-semibold text-emerald-400">Best landed price ₹108.60</span>
                    <span className="text-xs text-slate-400 ml-2">Aarav Foods · 11% below last order · 14.8% margin</span>
                  </div>
                </div>
                <button 
                  onClick={() => navigate('/retailer/product/1')} 
                  className="text-xs font-semibold text-emerald-400 hover:underline shrink-0"
                >
                  Compare
                </button>
              </div>

              {/* CLICKABLE PRODUCT CARD GRID */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {products.map((p) => (
                  <div 
                    key={p.id}
                    onClick={() => navigate(`/retailer/product/${p.id}`)}
                    className="bg-[#0b1220]/80 border border-slate-800/80 rounded-2xl p-3 flex flex-col justify-between hover:border-cyan-500/50 transition-all cursor-pointer group"
                  >
                    <div>
                      <div className="relative w-full h-32 rounded-xl bg-slate-900 overflow-hidden mb-3">
                        <img 
                          src={p.image} 
                          alt={p.name} 
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
                        />
                        {p.tag && (
                          <span className="absolute top-2 right-2 px-2 py-0.5 rounded bg-cyan-950/90 border border-cyan-500/80 text-cyan-400 text-[9px] font-bold uppercase">
                            • {p.tag}
                          </span>
                        )}
                      </div>

                      <h4 className="text-xs font-semibold text-white line-clamp-1 mb-1 group-hover:text-cyan-400 transition-colors">
                        {p.name}
                      </h4>
                      <div className="flex items-center justify-between text-[11px] text-slate-400 mb-2">
                        <span>{p.supplier}</span>
                        <div className="flex items-center gap-0.5 text-slate-300">
                          <span>{p.rating}</span>
                          <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                        </div>
                      </div>
                    </div>

                    <div className="flex items-end justify-between pt-2 border-t border-slate-800/60">
                      <div>
                        <div className="text-base font-extrabold text-white">₹{p.price}</div>
                        <div className="text-[10px] text-slate-500">MOQ {p.moq}</div>
                      </div>
                      <button 
                        onClick={(e) => {
                          e.stopPropagation(); // Prevents navigating when clicking the '+' button directly
                          navigate(`/retailer/product/${p.id}`);
                        }}
                        className="w-7 h-7 rounded-lg bg-cyan-400 hover:bg-cyan-300 text-slate-950 flex items-center justify-center transition-all"
                      >
                        <Plus className="w-4 h-4 stroke-[3]" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* AI Reasoning Banner */}
              <div className="p-4 rounded-xl bg-[#081324] border border-cyan-900/60 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <AlertCircle className="w-4 h-4 text-cyan-400 shrink-0" />
                  <div>
                    <div className="text-xs font-semibold text-white">AI recommends Fortune Sunlite</div>
                    <div className="text-[11px] text-slate-400">96% sell-through confidence and reliable 6-hour delivery.</div>
                  </div>
                </div>
                <button 
                  onClick={() => navigate('/retailer/product/1')} 
                  className="text-xs font-semibold text-cyan-400 hover:underline shrink-0"
                >
                  View reasoning
                </button>
              </div>

            </div>

          </div>

        </div>
      </main>

    </div>
  );
}