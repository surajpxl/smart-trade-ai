import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Radio, 
  Search, 
  Bell, 
  Activity, 
  AlertTriangle, 
  Package, 
  TrendingUp, 
  Wand2, 
  LayoutDashboard,
  Store,
  Sparkles,
  Boxes,
  ShoppingBag,
  Users,
  CreditCard
} from 'lucide-react';

export default function InventoryPage() {
  const navigate = useNavigate();
  const [activeNav, setActiveNav] = useState('Inventory');

  const navItems = [
    { name: 'Overview', icon: LayoutDashboard, path: '/retailer/dashboard' },
    { name: 'Marketplace', icon: Store, path: '/marketplace' },
    { name: 'AI Search', icon: Sparkles, path: '/retailer/ai-search' },
    { name: 'Inventory', icon: Boxes, path: '/retailer/inventory' },
    { name: 'Orders', icon: ShoppingBag, path: '/retailer/orders' },
    { name: 'Suppliers', icon: Users, path: '/retailer/suppliers' },
    { name: 'Payments', icon: CreditCard, path: '/retailer/payments' },
  ];

  // Demand forecast weekly data for bar chart
  const forecastBars = [
    { label: 'W1', height: '45%' },
    { label: '', height: '52%' },
    { label: 'W2', height: '58%' },
    { label: '', height: '64%' },
    { label: 'W3', height: '70%' },
    { label: '', height: '82%' },
    { label: 'W4', height: '76%' },
    { label: '', height: '78%' },
    { label: 'W5', height: '95%', isHighlight: true },
  ];

  // Live Alerts
  const liveAlerts = [
    {
      id: 1,
      type: 'critical',
      title: 'Oil stocks out tomorrow',
      subtitle: 'Order 48 · save ₹632',
      actionText: 'Add',
      bgStyle: 'bg-rose-950/40 border-rose-800/50',
      titleStyle: 'text-rose-200',
      iconStyle: 'text-rose-400',
      btnStyle: 'bg-rose-500/20 hover:bg-rose-500/30 text-rose-300 border-rose-500/40',
    },
    {
      id: 2,
      type: 'warning',
      title: 'Salt under 4-day cover',
      subtitle: 'Suggested 80 units',
      actionText: 'Add',
      bgStyle: 'bg-amber-950/40 border-amber-800/50',
      titleStyle: 'text-amber-200',
      iconStyle: 'text-amber-400',
      btnStyle: 'bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 border-amber-500/40',
    },
    {
      id: 3,
      type: 'info',
      title: 'Beverage demand +32%',
      subtitle: '34°C weekend forecast',
      actionText: 'Review',
      bgStyle: 'bg-cyan-950/40 border-cyan-800/50',
      titleStyle: 'text-cyan-200',
      iconStyle: 'text-cyan-400',
      btnStyle: 'bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 border-cyan-500/40',
    },
  ];

  // SKU Risk Table Data
  const skuList = [
    {
      product: 'Fortune Sunlite Oil 1L',
      onHand: '9 units',
      velocity: '12 / day',
      cover: '22 hrs',
      status: 'REORDER NOW',
      statusStyle: 'bg-rose-950/80 text-rose-400 border-rose-800/80',
    },
    {
      product: 'Tata Salt 1 kg',
      onHand: '34 units',
      velocity: '9 / day',
      cover: '3.8 days',
      status: 'SUGGESTED',
      statusStyle: 'bg-amber-950/80 text-amber-400 border-amber-800/80',
    },
    {
      product: 'Parle-G 800 g',
      onHand: '82 units',
      velocity: '7 / day',
      cover: '11.7 days',
      status: 'HEALTHY',
      statusStyle: 'bg-emerald-950/80 text-emerald-400 border-emerald-800/80',
    },
    {
      product: 'Surf Excel 1 kg',
      onHand: '16 units',
      velocity: '3 / day',
      cover: '5.3 days',
      status: 'WATCH',
      statusStyle: 'bg-cyan-950/80 text-cyan-400 border-cyan-800/80',
    },
  ];

  return (
    <div className="min-h-screen bg-[#070b14] text-slate-100 flex font-sans selection:bg-cyan-500 selection:text-black">
      
      {/* Sidebar Navigation */}
      <aside className="w-64 bg-[#090e1a] border-r border-slate-800/60 flex flex-col justify-between shrink-0 hidden md:flex">
        <div>
          {/* Top Brand */}
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

          {/* Nav Links */}
          <nav className="p-3 space-y-1">
            {navItems.map((item) => {
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

        {/* User Account Footer */}
        <div className="p-4 border-t border-slate-800/60">
          <div className="p-2.5 rounded-xl bg-[#0b1220] border border-slate-800/80">
            <div className="text-xs font-semibold text-white">Shree Ganesh Stores</div>
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

        {/* Inventory Page Content */}
        <div className="p-6 lg:p-8 space-y-6 max-w-7xl">
          
          {/* Title & Primary CTA */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h2 className="text-2xl font-bold text-white tracking-tight">Predictive inventory</h2>
              <p className="text-xs text-slate-400 mt-1">
                AI prevents stockouts and sends smart alerts
              </p>
            </div>

            <button 
              onClick={() => navigate('/cart')}
              className="px-4 py-2.5 bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold text-xs rounded-xl flex items-center gap-2 shadow-[0_0_20px_rgba(6,182,212,0.25)] transition-all self-start sm:self-auto"
            >
              <Wand2 className="w-4 h-4" />
              Create smart reorder
            </button>
          </div>

          {/* Top 4 Metric KPI Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            
            {/* Metric 1: Inventory Health */}
            <div className="bg-[#0b1220]/90 border border-slate-800/80 rounded-2xl p-4 flex flex-col justify-between space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-400">Inventory health</span>
                <div className="w-7 h-7 rounded-lg bg-emerald-950/60 border border-emerald-800/50 flex items-center justify-center text-emerald-400">
                  <Activity className="w-3.5 h-3.5" />
                </div>
              </div>
              <div>
                <div className="text-2xl font-black text-white">86 / 100</div>
                <div className="text-[11px] text-emerald-400 mt-1 font-medium">
                  ↑ 7 points
                </div>
              </div>
            </div>

            {/* Metric 2: Stockout Risk */}
            <div className="bg-[#0b1220]/90 border border-slate-800/80 rounded-2xl p-4 flex flex-col justify-between space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-400">Stockout risk</span>
                <div className="w-7 h-7 rounded-lg bg-rose-950/60 border border-rose-800/50 flex items-center justify-center text-rose-400">
                  <AlertTriangle className="w-3.5 h-3.5" />
                </div>
              </div>
              <div>
                <div className="text-2xl font-black text-white">3 SKUs</div>
                <div className="text-[11px] text-rose-400 mt-1 font-medium">
                  ₹8,420 at risk
                </div>
              </div>
            </div>

            {/* Metric 3: Excess Stock */}
            <div className="bg-[#0b1220]/90 border border-slate-800/80 rounded-2xl p-4 flex flex-col justify-between space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-400">Excess stock</span>
                <div className="w-7 h-7 rounded-lg bg-amber-950/60 border border-amber-800/50 flex items-center justify-center text-amber-400">
                  <Package className="w-3.5 h-3.5" />
                </div>
              </div>
              <div>
                <div className="text-2xl font-black text-white">₹34,800</div>
                <div className="text-[11px] text-slate-400 mt-1">
                  12 slow movers
                </div>
              </div>
            </div>

            {/* Metric 4: 7-day Demand */}
            <div className="bg-[#0b1220]/90 border border-slate-800/80 rounded-2xl p-4 flex flex-col justify-between space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-400">7-day demand</span>
                <div className="w-7 h-7 rounded-lg bg-cyan-950/60 border border-cyan-800/50 flex items-center justify-center text-cyan-400">
                  <TrendingUp className="w-3.5 h-3.5" />
                </div>
              </div>
              <div>
                <div className="text-2xl font-black text-white">₹1.64L</div>
                <div className="text-[11px] text-cyan-400 mt-1 font-medium">
                  92% confidence
                </div>
              </div>
            </div>

          </div>

          {/* Middle Section: Chart + Live Alerts Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            
            {/* Demand Forecast Bar Chart (8 cols) */}
            <div className="lg:col-span-8 bg-[#0b1220]/80 border border-slate-800/80 rounded-2xl p-5 flex flex-col justify-between">
              <div>
                <h3 className="text-sm font-bold text-white">Demand forecast</h3>
              </div>

              {/* Chart Visual Bars */}
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

            {/* Live Alerts Column (4 cols) */}
            <div className="lg:col-span-4 bg-[#0b1220]/80 border border-slate-800/80 rounded-2xl p-5 space-y-4">
              <div>
                <h3 className="text-sm font-bold text-white">Live alerts</h3>
                <p className="text-[11px] text-slate-500 mt-0.5">Prioritised by lost margin</p>
              </div>

              <div className="space-y-3">
                {liveAlerts.map((alert) => (
                  <div 
                    key={alert.id}
                    className={`p-3 rounded-xl border flex items-center justify-between gap-3 ${alert.bgStyle}`}
                  >
                    <div className="flex items-start gap-2.5 min-w-0">
                      <AlertTriangle className={`w-4 h-4 shrink-0 mt-0.5 ${alert.iconStyle}`} />
                      <div className="min-w-0">
                        <div className={`text-xs font-bold truncate ${alert.titleStyle}`}>
                          {alert.title}
                        </div>
                        <div className="text-[10px] text-slate-400 mt-0.5 truncate">
                          {alert.subtitle}
                        </div>
                      </div>
                    </div>

                    <button className={`px-2.5 py-1 rounded-lg border text-[11px] font-bold shrink-0 transition-colors ${alert.btnStyle}`}>
                      {alert.actionText}
                    </button>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Bottom Table: SKU Risk Register */}
          <div className="bg-[#0b1220]/80 border border-slate-800/80 rounded-2xl p-5 space-y-4">
            <h3 className="text-sm font-bold text-white">SKU risk register</h3>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-slate-800/80 text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                    <th className="py-3 px-4">PRODUCT</th>
                    <th className="py-3 px-4">ON HAND</th>
                    <th className="py-3 px-4">VELOCITY</th>
                    <th className="py-3 px-4">COVER</th>
                    <th className="py-3 px-4">STATUS</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/50 text-xs">
                  {skuList.map((sku, idx) => (
                    <tr key={idx} className="hover:bg-slate-900/40 transition-colors">
                      <td className="py-3.5 px-4 font-bold text-white">
                        {sku.product}
                      </td>
                      <td className="py-3.5 px-4 text-slate-300">
                        {sku.onHand}
                      </td>
                      <td className="py-3.5 px-4 text-slate-400">
                        {sku.velocity}
                      </td>
                      <td className="py-3.5 px-4 text-slate-300 font-medium">
                        {sku.cover}
                      </td>
                      <td className="py-3.5 px-4">
                        <span className={`px-2.5 py-0.5 rounded border text-[10px] font-bold uppercase tracking-wider ${sku.statusStyle}`}>
                          • {sku.status}
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