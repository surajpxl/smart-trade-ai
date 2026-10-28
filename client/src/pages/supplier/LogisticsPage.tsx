import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Radio, 
  Search, 
  Bell, 
  Truck, 
  Send, 
  MapPin, 
  Navigation, 
  LayoutDashboard, 
  Boxes, 
  TrendingUp, 
  Bot, 
  ShoppingBag, 
  CreditCard 
} from 'lucide-react';

export default function LogisticsPage() {
  const navigate = useNavigate();
  const [activeNav, setActiveNav] = useState('Logistics');
  const [selectedRoute, setSelectedRoute] = useState('P-12');

  const supplierNavItems = [
    { name: 'Overview', icon: LayoutDashboard, path: '/supplier/dashboard' },
    { name: 'Products', icon: Boxes, path: '/supplier/products' },
    { name: 'Forecasting', icon: TrendingUp, path: '/supplier/forecasting' },
    { name: 'AI Negotiation', icon: Bot, path: '/supplier/ai-negotiation' },
    { name: 'Orders', icon: ShoppingBag, path: '/supplier/orders' },
    { name: 'Logistics', icon: Truck, path: '/supplier/logistics' },
    { name: 'Payouts', icon: CreditCard, path: '/supplier/payouts' },
  ];

  // Suggested Routes List
  const routesList = [
    {
      id: 'P-12',
      name: 'Route P-12',
      status: 'READY',
      statusStyle: 'bg-emerald-950/80 text-emerald-400 border-emerald-800/80',
      stops: '7 stops',
      distance: '38.4 km',
      savings: '₹1,840 saved',
    },
    {
      id: 'P-08',
      name: 'Route P-08',
      status: '1 ISSUE',
      statusStyle: 'bg-amber-950/80 text-amber-400 border-amber-800/80',
      stops: '9 stops',
      distance: '42.1 km',
      savings: '₹1,260 saved',
    },
    {
      id: 'P-15',
      name: 'Route P-15',
      status: 'READY',
      statusStyle: 'bg-emerald-950/80 text-emerald-400 border-emerald-800/80',
      stops: '6 stops',
      distance: '29.8 km',
      savings: '₹940 saved',
    },
  ];

  // Waypoints for map rendering overlay
  const waypoints = [
    { id: '54', label: 'Koregaon Park', x: 58, y: 38 },
    { id: '22', label: 'Kothrud', x: 62, y: 78 },
    { id: '28', label: 'Shivajinagar', x: 70, y: 41 },
    { id: '19', label: 'Kalyani Nagar', x: 72, y: 35 },
    { id: '34', label: 'Hadapsar', x: 74, y: 66 },
    { id: '12', label: 'Shaniwar Wada', x: 50, y: 48 },
    { id: '88', label: 'Aga Khan Palace', x: 82, y: 47 },
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

        {/* Page Content */}
        <div className="p-6 lg:p-8 space-y-6 max-w-7xl flex-1 flex flex-col">
          
          {/* Header & Primary Dispatch CTA */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h2 className="text-2xl font-bold text-white tracking-tight">Smart route planning</h2>
              <p className="text-xs text-slate-400 mt-1">
                Optimise today's 42 deliveries across Pune
              </p>
            </div>

            <button className="px-4 py-2.5 bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold text-xs rounded-xl flex items-center gap-2 shadow-[0_0_20px_rgba(6,182,212,0.25)] transition-all self-start sm:self-auto">
              <Send className="w-3.5 h-3.5 stroke-[2.5]" />
              Dispatch routes
            </button>
          </div>

          {/* Main 2-Column Grid: Left Route Cards | Right Map View */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 flex-1 min-h-[580px]">
            
            {/* Left Column: Suggested Routes Sidebar (4 cols) */}
            <div className="lg:col-span-4 bg-[#0b1220]/80 border border-slate-800/80 rounded-2xl p-5 flex flex-col space-y-4">
              <div>
                <h3 className="text-sm font-bold text-white">Suggested routes</h3>
                <p className="text-[11px] text-slate-500 mt-0.5">AI optimised for cost and SLA</p>
              </div>

              <div className="space-y-3 overflow-y-auto flex-1 pr-1">
                {routesList.map((route) => {
                  const isSelected = selectedRoute === route.id;
                  return (
                    <button
                      key={route.id}
                      onClick={() => setSelectedRoute(route.id)}
                      className={`w-full text-left p-4 rounded-xl border transition-all ${
                        isSelected
                          ? 'bg-cyan-950/40 border-cyan-800/80 shadow-[0_0_15px_rgba(6,182,212,0.1)]'
                          : 'bg-[#070b14]/50 border-slate-800/60 hover:bg-slate-900/40'
                      }`}
                    >
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-xs font-bold text-white">{route.name}</span>
                        <span className={`px-2 py-0.5 rounded border text-[9px] font-bold uppercase tracking-wider ${route.statusStyle}`}>
                          • {route.status}
                        </span>
                      </div>

                      <div className="mt-3 text-[11px] text-slate-400 font-medium">
                        {route.stops} · {route.distance}
                      </div>

                      <div className="mt-1 text-xs font-bold text-emerald-400">
                        {route.savings}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Right Column: Dark Vector GIS Map (8 cols) */}
            <div className="lg:col-span-8 bg-[#040810] border border-slate-800/80 rounded-2xl relative overflow-hidden min-h-[450px] flex flex-col">
              
              {/* Floating Top Metrics Bar */}
              <div className="absolute top-4 left-4 z-10 bg-[#070d18]/90 backdrop-blur-md border border-slate-800 px-5 py-3 rounded-xl flex items-center gap-6 shadow-2xl">
                <div>
                  <div className="text-lg font-bold text-white font-mono leading-none">3</div>
                  <div className="text-[9px] font-semibold text-slate-500 uppercase tracking-wider mt-1">routes</div>
                </div>
                <div className="w-px h-6 bg-slate-800" />
                <div>
                  <div className="text-lg font-bold text-white font-mono leading-none">22</div>
                  <div className="text-[9px] font-semibold text-slate-500 uppercase tracking-wider mt-1">stops</div>
                </div>
                <div className="w-px h-6 bg-slate-800" />
                <div>
                  <div className="text-lg font-bold text-white font-mono leading-none">110 km</div>
                  <div className="text-[9px] font-semibold text-slate-500 uppercase tracking-wider mt-1">distance</div>
                </div>
                <div className="w-px h-6 bg-slate-800" />
                <div>
                  <div className="text-lg font-bold text-cyan-400 font-mono leading-none">₹4,040</div>
                  <div className="text-[9px] font-semibold text-cyan-500 uppercase tracking-wider mt-1">saved</div>
                </div>
              </div>

              {/* Map SVG Overlay */}
              <div className="absolute inset-0 bg-[#060c18]">
                <svg className="w-full h-full opacity-60" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#0e1a2e" strokeWidth="0.8" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#grid)" />

                  {/* Stylized River Path */}
                  <path 
                    d="M 0 320 Q 200 280 350 340 T 700 250 T 1000 300" 
                    fill="none" 
                    stroke="#0b233a" 
                    strokeWidth="18" 
                    strokeLinecap="round" 
                  />

                  {/* Main Arterial Road Network Routes */}
                  <path d="M 120 50 L 380 220 L 520 380 L 780 480" fill="none" stroke="#08304b" strokeWidth="3" />
                  <path d="M 280 80 L 420 200 L 680 280 L 850 420" fill="none" stroke="#08304b" strokeWidth="2" />
                  <path d="M 500 120 L 520 380 L 320 520" fill="none" stroke="#08304b" strokeWidth="2.5" />

                  {/* Active Selected Cyan Route Vector */}
                  <path 
                    d="M 200 100 L 320 180 L 420 200 L 480 300 L 520 380 L 680 450 L 780 480" 
                    fill="none" 
                    stroke="#06b6d4" 
                    strokeWidth="2.5" 
                    strokeDasharray="6 4"
                    className="animate-pulse"
                  />
                  <path 
                    d="M 420 200 L 580 180 L 720 240 L 850 320" 
                    fill="none" 
                    stroke="#0284c7" 
                    strokeWidth="2" 
                  />
                </svg>

                {/* Interactive Map Nodes / Waypoints */}
                {waypoints.map((wp, idx) => (
                  <div 
                    key={idx}
                    style={{ left: `${wp.x}%`, top: `${wp.y}%` }}
                    className="absolute -translate-x-1/2 -translate-y-1/2 group cursor-pointer z-10"
                  >
                    <div className="relative flex items-center justify-center">
                      <span className="absolute w-7 h-7 bg-cyan-500/20 rounded-full animate-ping" />
                      <div className="w-6 h-6 rounded-full bg-[#070d18] border-2 border-cyan-400 flex items-center justify-center text-[10px] font-bold text-cyan-300 shadow-[0_0_12px_rgba(6,182,212,0.5)]">
                        {wp.id}
                      </div>
                    </div>

                    {/* Tooltip on Hover */}
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1 hidden group-hover:block bg-[#070d18] border border-cyan-800 text-white text-[10px] px-2 py-1 rounded whitespace-nowrap z-20">
                      {wp.label}
                    </div>
                  </div>
                ))}

                {/* Hub Pin */}
                <div className="absolute left-[52%] top-[68%] -translate-x-1/2 -translate-y-1/2 z-10">
                  <div className="w-8 h-8 rounded-full bg-cyan-500/20 border border-cyan-400/50 flex items-center justify-center">
                    <div className="w-5 h-5 rounded-full bg-cyan-400 flex items-center justify-center text-slate-950 font-bold text-[10px]">
                      H
                    </div>
                  </div>
                </div>

                {/* Map Directional Compass Compass Indicator */}
                <div className="absolute bottom-4 right-4 z-10 text-slate-600 flex flex-col items-center">
                  <Navigation className="w-4 h-4 text-slate-500" />
                  <span className="text-[9px] font-bold mt-0.5">N</span>
                </div>
              </div>

            </div>

          </div>

        </div>
      </main>

    </div>
  );
}