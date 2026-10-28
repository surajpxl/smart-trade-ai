import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Radio, 
  Search, 
  Bell, 
  Plus, 
  Upload, 
  Check, 
  LayoutDashboard, 
  Boxes, 
  TrendingUp, 
  Bot, 
  ShoppingBag, 
  Truck, 
  CreditCard 
} from 'lucide-react';

export default function ProductsPage() {
  const navigate = useNavigate();
  const [activeNav, setActiveNav] = useState('Products');
  const [activeFilter, setActiveFilter] = useState('ALL 146');

  // Form state for Quick product editor
  const [editorData, setEditorData] = useState({
    sku: 'AAR-GNO-1L-201',
    stock: '1,200',
    moq: '12',
    basePrice: '₹184.00'
  });

  const [isSaved, setIsSaved] = useState(false);

  const supplierNavItems = [
    { name: 'Overview', icon: LayoutDashboard, path: '/supplier/dashboard' },
    { name: 'Products', icon: Boxes, path: '/supplier/products' },
    { name: 'Forecasting', icon: TrendingUp, path: '/supplier/forecasting' },
    { name: 'AI Negotiation', icon: Bot, path: '/supplier/ai-negotiation' },
    { name: 'Orders', icon: ShoppingBag, path: '/supplier/orders' },
    { name: 'Logistics', icon: Truck, path: '/supplier/logistics' },
    { name: 'Payouts', icon: CreditCard, path: '/supplier/payouts' },
  ];

  // Catalogue Table Data
  const catalogueList = [
    {
      product: 'Fortune Sunlite Oil - 1L',
      sku: 'AAR-OIL-042',
      stock: '1,840 units',
      price: '₹112.40',
      status: 'ACTIVE',
      statusStyle: 'bg-emerald-950/80 text-emerald-400 border-emerald-800/80',
    },
    {
      product: 'Saffola Gold Oil - 1L',
      sku: 'AAR-OIL-048',
      stock: '720 units',
      price: '₹138.80',
      status: 'LOW STOCK',
      statusStyle: 'bg-amber-950/80 text-amber-400 border-amber-800/80',
    },
    {
      product: 'Aashirvaad Atta - 5kg',
      sku: 'AAR-STA-114',
      stock: '2,460 units',
      price: '₹238.00',
      status: 'ACTIVE',
      statusStyle: 'bg-emerald-950/80 text-emerald-400 border-emerald-800/80',
    },
    {
      product: 'India Gate Rice - 5kg',
      sku: 'AAR-STA-182',
      stock: '0 units',
      price: '₹684.00',
      status: 'PAUSED',
      statusStyle: 'bg-rose-950/80 text-rose-400 border-rose-800/80',
    },
  ];

  const handleInputChange = (field: string, value: string) => {
    setEditorData(prev => ({ ...prev, [field]: value }));
    setIsSaved(false);
  };

  const handleSaveDraft = () => {
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 2500);
  };

  return (
    <div className="min-h-screen bg-[#070b14] text-slate-100 flex font-sans selection:bg-cyan-500 selection:text-black">
      
      {/* Sidebar Navigation */}
      <aside className="w-64 bg-[#090e1a] border-r border-slate-800/60 flex flex-col justify-between shrink-0 hidden md:flex">
        <div>
          {/* Top Brand & Workspace Indicator */}
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
              Supplier workspace
            </div>
          </div>

          {/* Nav Links */}
          <nav className="p-3 space-y-1">
            {supplierNavItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeNav === item.name;
              return (
                <button
                  key={item.name}
                  onClick={() => {
                    setActiveNav(item.name);
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

        {/* Supplier Account Footer */}
        <div className="p-4 border-t border-slate-800/60">
          <div className="p-2.5 rounded-xl bg-[#0b1220] border border-slate-800/80">
            <div className="text-xs font-semibold text-white">Aarav Foods Pvt Ltd</div>
            <div className="text-[10px] text-slate-500 mt-0.5">Settings · Help · Sign out</div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-w-0">
        
        {/* Top Header */}
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

        {/* Page Content */}
        <div className="p-6 lg:p-8 space-y-6 max-w-7xl">
          
          {/* Header & Primary CTAs */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            <div>
              <h2 className="text-2xl font-bold text-white tracking-tight">Products & inventory</h2>
              <p className="text-xs text-slate-400 mt-1">
                146 active SKUs · add and edit listings
              </p>

              {/* Filter Pills */}
              <div className="flex items-center gap-2 mt-4">
                {[
                  { label: 'ALL 146', key: 'ALL 146' },
                  { label: 'LOW STOCK 8', key: 'LOW STOCK 8' },
                  { label: 'DRAFTS 3', key: 'DRAFTS 3' },
                ].map((pill) => {
                  const isSelected = activeFilter === pill.key;
                  return (
                    <button
                      key={pill.key}
                      onClick={() => setActiveFilter(pill.key)}
                      className={`px-3 py-1 rounded-full text-[10px] font-bold tracking-wider transition-all border ${
                        isSelected
                          ? 'bg-cyan-950/80 text-cyan-400 border-cyan-800 shadow-[0_0_10px_rgba(6,182,212,0.15)]'
                          : 'bg-[#0b1220] text-slate-400 border-slate-800 hover:text-slate-200'
                      }`}
                    >
                      • {pill.label}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Top Right Action Buttons */}
            <div className="flex items-center gap-3 self-start lg:self-auto">
              <button className="px-4 py-2.5 bg-[#0b1220] hover:bg-slate-900 text-slate-300 font-bold text-xs rounded-xl border border-slate-800 flex items-center gap-2 transition-all">
                <Upload className="w-3.5 h-3.5 text-slate-400" />
                Import CSV
              </button>

              <button className="px-4 py-2.5 bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold text-xs rounded-xl flex items-center gap-2 shadow-[0_0_20px_rgba(6,182,212,0.25)] transition-all">
                <Plus className="w-4 h-4 stroke-[2.5]" />
                Add new product
              </button>
            </div>
          </div>

          {/* Main Section 1: Catalogue Table */}
          <div className="bg-[#0b1220]/80 border border-slate-800/80 rounded-2xl p-5 space-y-4">
            <div>
              <h3 className="text-sm font-bold text-white">Catalogue</h3>
              <p className="text-[11px] text-slate-500 mt-0.5">Inventory, price and listing status</p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-slate-800/80 text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                    <th className="py-3 px-4">PRODUCT</th>
                    <th className="py-3 px-4">SKU</th>
                    <th className="py-3 px-4">STOCK</th>
                    <th className="py-3 px-4">PRICE</th>
                    <th className="py-3 px-4">STATUS</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/50 text-xs">
                  {catalogueList.map((item, idx) => (
                    <tr key={idx} className="hover:bg-slate-900/40 transition-colors">
                      <td className="py-3.5 px-4 font-bold text-white">
                        {item.product}
                      </td>
                      <td className="py-3.5 px-4 font-mono text-slate-400">
                        {item.sku}
                      </td>
                      <td className="py-3.5 px-4 text-slate-300">
                        {item.stock}
                      </td>
                      <td className="py-3.5 px-4 font-bold text-white">
                        {item.price}
                      </td>
                      <td className="py-3.5 px-4">
                        <span className={`px-2.5 py-0.5 rounded border text-[10px] font-bold uppercase tracking-wider ${item.statusStyle}`}>
                          • {item.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Main Section 2: Quick Product Editor */}
          <div className="bg-[#0b1220]/80 border border-slate-800/80 rounded-2xl p-5 space-y-4">
            <div>
              <h3 className="text-sm font-bold text-white">Quick product editor</h3>
              <p className="text-[11px] text-slate-500 mt-0.5">Draft · Aarav Select Groundnut Oil</p>
            </div>

            {/* Quick Editor Input Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-4 items-end pt-2">
              
              {/* SKU */}
              <div className="lg:col-span-3 space-y-1.5">
                <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">SKU</label>
                <input 
                  type="text" 
                  value={editorData.sku}
                  onChange={(e) => handleInputChange('sku', e.target.value)}
                  className="w-full bg-[#070b14] border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-slate-200 font-mono focus:outline-none focus:border-cyan-500/80 transition-colors"
                />
              </div>

              {/* Stock */}
              <div className="lg:col-span-3 space-y-1.5">
                <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Stock</label>
                <input 
                  type="text" 
                  value={editorData.stock}
                  onChange={(e) => handleInputChange('stock', e.target.value)}
                  className="w-full bg-[#070b14] border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-slate-200 font-mono focus:outline-none focus:border-cyan-500/80 transition-colors"
                />
              </div>

              {/* MOQ */}
              <div className="lg:col-span-2 space-y-1.5">
                <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">MOQ</label>
                <input 
                  type="text" 
                  value={editorData.moq}
                  onChange={(e) => handleInputChange('moq', e.target.value)}
                  className="w-full bg-[#070b14] border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-slate-200 font-mono focus:outline-none focus:border-cyan-500/80 transition-colors"
                />
              </div>

              {/* Base price */}
              <div className="lg:col-span-2 space-y-1.5">
                <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Base price</label>
                <input 
                  type="text" 
                  value={editorData.basePrice}
                  onChange={(e) => handleInputChange('basePrice', e.target.value)}
                  className="w-full bg-[#070b14] border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-slate-200 font-mono focus:outline-none focus:border-cyan-500/80 transition-colors"
                />
              </div>

              {/* Save Draft Action Button */}
              <div className="lg:col-span-2">
                <button 
                  onClick={handleSaveDraft}
                  className="w-full py-2.5 bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold text-xs rounded-xl flex items-center justify-center gap-1.5 shadow-[0_0_15px_rgba(6,182,212,0.2)] transition-all"
                >
                  <Check className="w-4 h-4 stroke-[2.5]" />
                  {isSaved ? 'Saved!' : 'Save draft'}
                </button>
              </div>

            </div>
          </div>

        </div>
      </main>

    </div>
  );
}