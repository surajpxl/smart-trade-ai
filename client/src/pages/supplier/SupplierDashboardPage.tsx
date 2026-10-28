import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Radio, 
  Search, 
  Bell, 
  Plus, 
  IndianRupee, 
  PackageCheck, 
  CheckCircle, 
  Wallet, 
  AlertTriangle, 
  LayoutDashboard, 
  Boxes, 
  TrendingUp, 
  Bot, 
  ShoppingBag, 
  Truck, 
  CreditCard 
} from 'lucide-react';

export default function SupplierDashboardPage() {
  const navigate = useNavigate();
  const [activeNav, setActiveNav] = useState('Overview');

  const supplierNavItems = [
    { name: 'Overview', icon: LayoutDashboard, path: '/supplier/dashboard' },
    { name: 'Products', icon: Boxes, path: '/supplier/products' },
    { name: 'Forecasting', icon: TrendingUp, path: '/supplier/forecasting' },
    { name: 'AI Negotiation', icon: Bot, path: '/supplier/ai-negotiation' },
    { name: 'Orders', icon: ShoppingBag, path: '/supplier/orders' },
    { name: 'Logistics', icon: Truck, path: '/supplier/logistics' },
    { name: 'Payouts', icon: CreditCard, path: '/supplier/payouts' },
  ];

  // Revenue & Demand Forecast Chart Bar Data
  const forecastBars = [
    { label: 'W1', height: '42%' },
    { label: '', height: '50%' },
    { label: 'W2', height: '48%' },
    { label: '', height: '62%' },
    { label: 'W3', height: '54%' },
    { label: '', height: '60%' },
    { label: 'W4', height: '70%' },
    { label: '', height: '66%' },
    { label: 'W5', height: '92%', isHighlight: true },
  ];

  // Forecast Drivers Alerts
  const forecastDrivers = [
    {
      id: 1,
      title: 'Diwali demand +₹14.2L',
      subtitle: 'Peak expected 18–22 Oct',
      actionText: null,
      bgStyle: 'bg-cyan-950/40 border-cyan-800/50',
      titleStyle: 'text-cyan-200',
      iconStyle: 'text-cyan-400',
    },
    {
      id: 2,
      title: 'Add evening shift',
      subtitle: 'Expected production ROI 4.8x',
      actionText: 'Plan',
      bgStyle: 'bg-emerald-950/40 border-emerald-800/50',
      titleStyle: 'text-emerald-200',
      iconStyle: 'text-emerald-400',
      btnStyle: 'bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 border-emerald-500/40',
    },
    {
      id: 3,
      title: 'Saffola understocked',
      subtitle: '400 extra units recommended',
      actionText: 'Restock',
      bgStyle: 'bg-amber-950/40 border-amber-800/50',
      titleStyle: 'text-amber-200',
      iconStyle: 'text-amber-400',
      btnStyle: 'bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 border-amber-500/40',
    },
  ];

  // Fast-Moving Catalogue Data
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
  ];

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

        {/* Dashboard Content */}
        <div className="p-6 lg:p-8 space-y-6 max-w-7xl">
          
          {/* Title & Primary Action */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h2 className="text-2xl font-bold text-white tracking-tight">Supplier overview</h2>
              <p className="text-xs text-slate-400 mt-1">
                Aarav Foods · operations and AI demand outlook
              </p>
            </div>

            <button 
              onClick={() => navigate('/supplier/products')}
              className="px-4 py-2.5 bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold text-xs rounded-xl flex items-center gap-2 shadow-[0_0_20px_rgba(6,182,212,0.25)] transition-all self-start sm:self-auto"
            >
              <Plus className="w-4 h-4 stroke-[2.5]" />
              Add product
            </button>
          </div>

          {/* 4 Overview Metric Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            
            {/* Metric 1: Gross Sales */}
            <div className="bg-[#0b1220]/90 border border-slate-800/80 rounded-2xl p-4 flex flex-col justify-between space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-400">Gross sales</span>
                <div className="w-7 h-7 rounded-lg bg-cyan-950/60 border border-cyan-800/50 flex items-center justify-center text-cyan-400">
                  <IndianRupee className="w-3.5 h-3.5" />
                </div>
              </div>
              <div>
                <div className="text-2xl font-black text-white">₹6.84L</div>
                <div className="text-[11px] text-cyan-400 mt-1 font-medium">
                  ↑ 18.6% today
                </div>
              </div>
            </div>

            {/* Metric 2: Open Orders */}
            <div className="bg-[#0b1220]/90 border border-slate-800/80 rounded-2xl p-4 flex flex-col justify-between space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-400">Open orders</span>
                <div className="w-7 h-7 rounded-lg bg-amber-950/60 border border-amber-800/50 flex items-center justify-center text-amber-400">
                  <PackageCheck className="w-3.5 h-3.5" />
                </div>
              </div>
              <div>
                <div className="text-2xl font-black text-white">42</div>
                <div className="text-[11px] text-slate-400 mt-1">
                  18 dispatch by 5 PM
                </div>
              </div>
            </div>

            {/* Metric 3: Fill Rate */}
            <div className="bg-[#0b1220]/90 border border-slate-800/80 rounded-2xl p-4 flex flex-col justify-between space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-400">Fill rate</span>
                <div className="w-7 h-7 rounded-lg bg-emerald-950/60 border border-emerald-800/50 flex items-center justify-center text-emerald-400">
                  <CheckCircle className="w-3.5 h-3.5" />
                </div>
              </div>
              <div>
                <div className="text-2xl font-black text-white">97.8%</div>
                <div className="text-[11px] text-emerald-400 mt-1 font-medium">
                  Top 12% in Pune
                </div>
              </div>
            </div>

            {/* Metric 4: Available Payout */}
            <div className="bg-[#0b1220]/90 border border-slate-800/80 rounded-2xl p-4 flex flex-col justify-between space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-400">Available payout</span>
                <div className="w-7 h-7 rounded-lg bg-cyan-950/60 border border-cyan-800/50 flex items-center justify-center text-cyan-400">
                  <Wallet className="w-3.5 h-3.5" />
                </div>
              </div>
              <div>
                <div className="text-2xl font-black text-white">₹12.46L</div>
                <div className="text-[11px] text-slate-400 mt-1">
                  Settlement tomorrow
                </div>
              </div>
            </div>

          </div>

          {/* Middle Row: Revenue & Demand Chart + Forecast Drivers */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            
            {/* Chart (8 cols) */}
            <div className="lg:col-span-8 bg-[#0b1220]/80 border border-slate-800/80 rounded-2xl p-5 flex flex-col justify-between">
              <div>
                <h3 className="text-sm font-bold text-white">Revenue & demand forecast</h3>
                <p className="text-[11px] text-slate-500 mt-0.5">Actual plus 30-day AI outlook</p>
              </div>

              {/* Bar Chart Visual */}
              <div className="h-48 pt-6 pb-2 flex items-end justify-between gap-2 px-2">
                {forecastBars.map((bar, index) => (
                  <div key={index} className="flex-1 flex flex-col items-center h-full justify-end group">
                    <div className="w-full max-w-[28px] bg-slate-800/50 rounded-t h-full flex items-end">
                      <div 
                        style={{ height: bar.height }} 
                        className={`w-full rounded-t transition-all duration-300 ${
                          bar.isHighlight 
                            ? 'bg-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.5)]' 
                            : 'bg-cyan-900/60 group-hover:bg-cyan-700/80'
                        }`}
                      />
                    </div>
                    <span className="text-[10px] text-slate-500 font-mono mt-2 h-3">
                      {bar.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Forecast Drivers Alerts (4 cols) */}
            <div className="lg:col-span-4 bg-[#0b1220]/80 border border-slate-800/80 rounded-2xl p-5 space-y-4">
              <div>
                <h3 className="text-sm font-bold text-white">Forecast drivers</h3>
                <p className="text-[11px] text-slate-500 mt-0.5">92.4% model accuracy</p>
              </div>

              <div className="space-y-3">
                {forecastDrivers.map((item) => (
                  <div 
                    key={item.id}
                    className={`p-3 rounded-xl border flex items-center justify-between gap-3 ${item.bgStyle}`}
                  >
                    <div className="flex items-start gap-2.5 min-w-0">
                      <AlertTriangle className={`w-4 h-4 shrink-0 mt-0.5 ${item.iconStyle}`} />
                      <div className="min-w-0">
                        <div className={`text-xs font-bold truncate ${item.titleStyle}`}>
                          {item.title}
                        </div>
                        <div className="text-[10px] text-slate-400 mt-0.5 truncate">
                          {item.subtitle}
                        </div>
                      </div>
                    </div>

                    {item.actionText && (
                      <button className={`px-2.5 py-1 rounded-lg border text-[11px] font-bold shrink-0 transition-colors ${item.btnStyle}`}>
                        {item.actionText}
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Bottom Table: Fast-moving catalogue */}
          <div className="bg-[#0b1220]/80 border border-slate-800/80 rounded-2xl p-5 space-y-4">
            <div>
              <h3 className="text-sm font-bold text-white">Fast-moving catalogue</h3>
              <p className="text-[11px] text-slate-500 mt-0.5">Live price, inventory and forecast</p>
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

        </div>
      </main>

    </div>
  );
}