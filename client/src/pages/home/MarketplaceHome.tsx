import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Radio, 
  Sparkles, 
  Plus, 
  Star, 
  Search, 
  TrendingUp 
} from 'lucide-react';

export default function MarketplaceHome() {
  const [activeCategory, setActiveCategory] = useState('Staples');
  const [searchQuery, setSearchQuery] = useState('Best margin cooking oil under ₹120 near me');

  const categories = [
    'Staples',
    'Food',
    'Beverages',
    'Personal care',
    'Home care',
    'Dairy',
  ];

  const products = [
    {
      id: 1,
      name: 'Fortune Sunlite Oil · 1L',
      supplier: 'Aarav Foods',
      rating: 4.8,
      price: '112.40',
      moq: '24',
      tag: '8% BELOW MARKET',
      tagType: 'discount',
      image: 'https://images.unsplash.com/photo-1620706857370-e1b9770e8bb1?auto=format&fit=crop&w=300&q=80',
    },
    {
      id: 2,
      name: 'Tata Salt Iodised · 1kg',
      supplier: 'Sahyadri Wholesale',
      rating: 4.9,
      price: '24.80',
      moq: '48',
      tag: 'FAST MOVER',
      tagType: 'fast',
      image: 'https://images.unsplash.com/photo-1518110168401-f2877ee2c8ad?auto=format&fit=crop&w=300&q=80',
    },
    {
      id: 3,
      name: 'Parle-G Biscuits · 800g',
      supplier: 'Metro FMCG',
      rating: 4.7,
      price: '72.00',
      moq: '36',
      tag: null,
      tagType: null,
      image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&w=300&q=80',
    },
    {
      id: 4,
      name: 'Surf Excel Easy Wash · 1kg',
      supplier: 'Nirmal Consumer',
      rating: 4.8,
      price: '126.50',
      moq: '12',
      tag: 'LOCAL STOCK',
      tagType: 'local',
      image: 'https://images.unsplash.com/photo-1585832770485-e68a5fcfad52?auto=format&fit=crop&w=300&q=80',
    },
  ];

  return (
    <div className="min-h-screen bg-[#070b14] text-slate-100 flex flex-col justify-between font-sans selection:bg-cyan-500 selection:text-black">
      
      {/* Top Banner Tag */}
      <div className="px-8 pt-3 text-xs text-slate-500 font-medium">
        Marketplace home
      </div>

      {/* Main Container */}
      <div className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-4">
        
        {/* Navigation Bar */}
        <header className="flex items-center justify-between py-3 mb-10 border-b border-slate-800/60">
          <div className="flex items-center gap-8">
            {/* Brand Logo */}
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                <Radio className="w-4 h-4 animate-pulse" />
              </div>
              <span className="text-lg font-bold tracking-tight text-white">
                SmartTrade AI
              </span>
            </div>

            {/* Nav Links */}
            <nav className="hidden md:flex items-center gap-6 text-xs text-slate-400">
              <Link to="#" className="text-white font-medium hover:text-white transition-colors">Marketplace</Link>
              <Link to="#" className="hover:text-slate-200 transition-colors">For retailers</Link>
              <Link to="#" className="hover:text-slate-200 transition-colors">For suppliers</Link>
              <Link to="#" className="hover:text-slate-200 transition-colors">Credit</Link>
            </nav>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-3">
            <Link 
              to="/login" 
              className="px-4 py-2 text-xs font-semibold text-slate-300 hover:text-white transition-colors"
            >
              Sign in
            </Link>
            <Link 
              to="/register" 
              className="px-4 py-2 bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-semibold rounded-lg text-xs transition-all shadow-[0_0_15px_rgba(34,211,238,0.2)]"
            >
              Join SmartTrade
            </Link>
          </div>
        </header>

        {/* Hero Section Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-12">
          
          {/* Left Column: Headline & Natural Language Search */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/50 text-cyan-400 text-[10px] font-semibold tracking-wider uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
              PUNE'S INTELLIGENT B2B MARKETPLACE
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1]">
              Stock smarter from suppliers around you.
            </h1>

            <p className="text-slate-400 text-sm sm:text-base max-w-xl">
              Compare wholesale prices, negotiate with AI and replenish before shelves run empty.
            </p>

            {/* Prompt Search Input */}
            <div className="relative max-w-xl">
              <div className="relative flex items-center bg-white rounded-xl shadow-lg p-1.5">
                <div className="pl-3 pr-2 text-slate-400">
                  <Sparkles className="w-4 h-4 text-cyan-600" />
                </div>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Ask AI to find products, margins, or suppliers..."
                  className="w-full text-xs sm:text-sm text-slate-900 placeholder-slate-400 bg-transparent focus:outline-none font-medium"
                />
                <button className="w-8 h-8 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 flex items-center justify-center shrink-0 transition-all">
                  <Search className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Search Metadata */}
            <p className="text-[11px] text-slate-500">
              2,840 suppliers · 18 km radius · 4.6 hr median delivery
            </p>
          </div>

          {/* Right Column: Hero Banner Image & AI Signal */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-slate-800 shadow-2xl group">
              <img 
                src="https://images.unsplash.com/photo-1604719312566-8912e9227c6a?auto=format&fit=crop&w=800&q=80" 
                alt="Patel General Store" 
                className="w-full h-80 object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent" />

              {/* Store Title Badge */}
              <div className="absolute top-4 right-4 bg-slate-950/80 backdrop-blur-md px-3 py-1 rounded-md border border-slate-800 text-[11px] font-bold tracking-wider text-slate-300 uppercase">
                PATEL GENERAL STORE
              </div>

              {/* AI Reorder Signal Badge */}
              <div className="absolute bottom-4 left-4 right-4 bg-[#080d1a]/90 backdrop-blur-md border border-cyan-500/30 rounded-xl p-3 shadow-xl">
                <div className="flex items-center gap-1.5 text-[10px] font-bold text-cyan-400 tracking-wider uppercase mb-1">
                  <TrendingUp className="w-3.5 h-3.5" />
                  AI REORDER SIGNAL
                </div>
                <div className="text-xs sm:text-sm font-semibold text-white">
                  Cooking oil demand +18% this weekend
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Category Filter Tabs */}
        <div className="border-t border-slate-800/80 pt-6 mb-6">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-xl text-xs font-medium transition-all shrink-0 ${
                  activeCategory === cat
                    ? 'bg-cyan-950/60 border border-cyan-500/80 text-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.15)]'
                    : 'bg-[#080d1a] border border-slate-800/80 text-slate-400 hover:text-slate-200 hover:border-slate-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Product Section Header */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-white tracking-tight">
            Best prices near Pune today
          </h2>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {products.map((product) => (
            <div 
              key={product.id}
              className="bg-[#0b1220]/80 backdrop-blur-md border border-slate-800/80 rounded-2xl p-4 flex flex-col justify-between hover:border-slate-700 transition-all group"
            >
              <div>
                {/* Product Image & Tag Container */}
                <div className="relative w-full h-40 rounded-xl bg-slate-900 overflow-hidden mb-3">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {product.tag && (
                    <div className="absolute top-2 right-2">
                      <span className={`px-2 py-0.5 rounded text-[9px] font-bold tracking-wider uppercase border ${
                        product.tagType === 'discount' 
                          ? 'bg-cyan-950/90 border-cyan-500/80 text-cyan-400' 
                          : product.tagType === 'fast'
                          ? 'bg-emerald-950/90 border-emerald-500/80 text-emerald-400'
                          : 'bg-blue-950/90 border-blue-500/80 text-blue-400'
                      }`}>
                        • {product.tag}
                      </span>
                    </div>
                  )}
                </div>

                {/* Product Info */}
                <h3 className="text-sm font-semibold text-white line-clamp-1 mb-1">
                  {product.name}
                </h3>
                
                <div className="flex items-center justify-between text-xs text-slate-400 mb-3">
                  <span>{product.supplier}</span>
                  <div className="flex items-center gap-1 text-slate-300">
                    <span>{product.rating}</span>
                    <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                  </div>
                </div>
              </div>

              {/* Price & Add Action */}
              <div className="flex items-end justify-between pt-2 border-t border-slate-800/60">
                <div>
                  <div className="text-lg font-extrabold text-white tracking-tight">
                    ₹{product.price}
                  </div>
                  <div className="text-[10px] text-slate-500 font-medium">
                    MOQ {product.moq}
                  </div>
                </div>

                <button className="w-8 h-8 rounded-lg bg-cyan-400 hover:bg-cyan-300 text-slate-950 flex items-center justify-center transition-all shadow-[0_0_10px_rgba(34,211,238,0.2)] active:scale-95">
                  <Plus className="w-4 h-4 stroke-[3]" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Footer */}
      <footer className="py-4 text-center text-[11px] text-slate-600 border-t border-slate-900/80 mt-auto">
        © 2026 SmartTrade Technologies · Privacy · Terms
      </footer>
    </div>
  );
}