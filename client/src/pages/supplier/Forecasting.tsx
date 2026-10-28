import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Radio, 
  Search, 
  Bell, 
  Plus, 
  IndianRupee, 
  TrendingUp, 
  Bot, 
  ShoppingBag, 
  Truck, 
  CreditCard,
  LayoutDashboard,
  Boxes,
  Zap,
  Calendar,
  Layers,
  Sparkles,
  ArrowUpRight,
  ArrowDownRight,
  Sliders,
  CheckCircle2,
  AlertCircle,
  RefreshCw,
  Download,
  Filter,
  Info
} from 'lucide-react';

export default function SupplierForecastingPage() {
  const navigate = useNavigate();
  const [activeNav, setActiveNav] = useState('Forecasting');
  const [timeframe, setTimeframe] = useState('30D');
  const [activeTab, setActiveTab] = useState('Revenue');
  const [selectedSKUFilter, setSelectedSKUFilter] = useState('All');
  
  // Interactive What-If Simulator States
  const [priceAdjustment, setPriceAdjustment] = useState(0);
  const [promoDiscount, setPromoDiscount] = useState(10);
  const [marketInflation, setMarketInflation] = useState(2.5);

  const supplierNavItems = [
    { name: 'Overview', icon: LayoutDashboard, path: '/supplier/dashboard' },
    { name: 'Products', icon: Boxes, path: '/supplier/products' },
    { name: 'Forecasting', icon: TrendingUp, path: '/supplier/forecasting' },
    { name: 'AI Negotiation', icon: Bot, path: '/supplier/ai-negotiation' },
    { name: 'Orders', icon: ShoppingBag, path: '/supplier/orders' },
    { name: 'Logistics', icon: Truck, path: '/supplier/logistics' },
    { name: 'Payouts', icon: CreditCard, path: '/supplier/payouts' },
  ];

  // Primary Forecasting KPI Summary Cards
  const kpiData = [
    {
      title: 'Projected Demand Growth',
      value: '+28.4%',
      subtext: 'vs previous 30 days',
      trend: 'up',
      icon: TrendingUp,
      accentColor: 'text-cyan-400',
      bgColor: 'bg-cyan-950/60 border-cyan-800/50',
    },
    {
      title: 'Peak Expected Revenue',
      value: '₹24.80L',
      subtext: 'Diwali week (18–24 Oct)',
      trend: 'up',
      icon: IndianRupee,
      accentColor: 'text-emerald-400',
      bgColor: 'bg-emerald-950/60 border-emerald-800/50',
    },
    {
      title: 'Recommended Reorder Vol.',
      value: '3,850 units',
      subtext: 'To avoid stockouts',
      trend: 'warning',
      icon: Boxes,
      accentColor: 'text-amber-400',
      bgColor: 'bg-amber-950/60 border-amber-800/50',
    },
    {
      title: 'Model Confidence Rate',
      value: '94.2%',
      subtext: 'Based on 18M local points',
      trend: 'up',
      icon: Sparkles,
      accentColor: 'text-purple-400',
      bgColor: 'bg-purple-950/60 border-purple-800/50',
    },
  ];

  // Interactive Forecast Chart Visual Bar Data
  const forecastSeries = [
    { label: 'Oct 01', actual: '₹22K', height: '35%', event: null },
    { label: 'Oct 04', actual: '₹26K', height: '42%', event: null },
    { label: 'Oct 07', actual: '₹28K', height: '48%', event: null },
    { label: 'Oct 10', actual: '₹34K', height: '55%', event: 'Pre-Festive Surge' },
    { label: 'Oct 13', actual: '₹41K', height: '62%', event: null },
    { label: 'Oct 16', actual: '₹58K', height: '78%', event: null },
    { label: 'Oct 19', actual: '₹88K', height: '96%', isHighlight: true, event: 'Diwali Peak' },
    { label: 'Oct 22', actual: '₹82K', height: '90%', isHighlight: true, event: 'Dhanteras' },
    { label: 'Oct 25', actual: '₹52K', height: '70%', event: null },
    { label: 'Oct 28', actual: '₹38K', height: '58%', event: null },
    { label: 'Oct 31', actual: '₹31K', height: '46%', event: null },
  ];

  // High-priority AI Driver Insights
  const driverInsights = [
    {
      id: 1,
      tag: 'SEASONAL PEAK',
      title: 'Diwali Festival Rush (+42% demand surge)',
      description: 'Historical Pune regional data predicts edible oils & flour demand will spike by 42% between Oct 18–24.',
      action: 'Lock Warehouse Capacity',
      bg: 'bg-cyan-950/30 border-cyan-800/40',
      tagColor: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/30',
    },
    {
      id: 2,
      tag: 'PRICE SENSITIVITY',
      title: 'Competitor Price Shift on Sunflower Oil',
      description: 'Brand X lowered wholesale pricing by ₹3.5/L. Realigning price by -2% can retain 98% market share.',
      action: 'Apply Dynamic Pricing',
      bg: 'bg-emerald-950/30 border-emerald-800/40',
      tagColor: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30',
    },
    {
      id: 3,
      tag: 'STOCKOUT RISK',
      title: 'Saffola Gold 1L deplete risk in 6 days',
      description: 'Current stock level (720 units) will exhaust prior to Diwali peak. Reorder 400+ units immediately.',
      action: 'Create Stock Order',
      bg: 'bg-amber-950/30 border-amber-800/40',
      tagColor: 'text-amber-400 bg-amber-500/10 border-amber-500/30',
    },
  ];

  // Detailed SKU Demand Forecast Table Data
  const skuDemandTable = [
    {
      product: 'Fortune Sunlite Oil - 1L',
      sku: 'AAR-OIL-042',
      currentStock: 1840,
      predictedDemand: 3200,
      stockoutRisk: 'LOW',
      suggestedAction: 'Maintain Run-Rate',
      riskStyle: 'bg-emerald-950/80 text-emerald-400 border-emerald-800/80',
    },
    {
      product: 'Saffola Gold Oil - 1L',
      sku: 'AAR-OIL-048',
      currentStock: 720,
      predictedDemand: 1650,
      stockoutRisk: 'CRITICAL',
      suggestedAction: 'Reorder +930 Units',
      riskStyle: 'bg-rose-950/80 text-rose-400 border-rose-800/80 animate-pulse',
    },
    {
      product: 'Aashirvaad Atta - 5kg',
      sku: 'AAR-STA-114',
      currentStock: 2460,
      predictedDemand: 3100,
      stockoutRisk: 'MODERATE',
      suggestedAction: 'Reorder +640 Units',
      riskStyle: 'bg-amber-950/80 text-amber-400 border-amber-800/80',
    },
    {
      product: 'Tata Salt Vaccum Evaporated - 1kg',
      sku: 'AAR-SLT-088',
      currentStock: 4120,
      predictedDemand: 4300,
      stockoutRisk: 'LOW',
      suggestedAction: 'Optimal Stock',
      riskStyle: 'bg-emerald-950/80 text-emerald-400 border-emerald-800/80',
    },
    {
      product: 'Madhur Pure Sugar - 5kg',
      sku: 'AAR-SGR-019',
      currentStock: 890,
      predictedDemand: 2200,
      stockoutRisk: 'HIGH',
      suggestedAction: 'Reorder +1,310 Units',
      riskStyle: 'bg-rose-950/80 text-rose-400 border-rose-800/80',
    },
  ];

  // Calculated Simulated Revenue Output
  const baseRevenue = 24.8; // Lakhs
  const simulatedRevenue = (
    baseRevenue * 
    (1 + priceAdjustment / 100) * 
    (1 + promoDiscount / 200) * 
    (1 - marketInflation / 100)
  ).toFixed(2);

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
          <div className="text-xs text-slate-400 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            Pune Region · AI Forecast Engine v4.2 Active
          </div>

          <div className="flex items-center gap-3 flex-1 max-w-md justify-end">
            <div className="relative w-full max-w-xs">
              <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
              <input 
                type="text" 
                placeholder="Search forecasted SKUs, factors..." 
                className="w-full bg-[#0b1220] border border-slate-800 rounded-lg pl-9 pr-3 py-1.5 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-500"
              />
            </div>
            <button className="w-8 h-8 rounded-lg bg-[#0b1220] border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white">
              <Bell className="w-4 h-4" />
            </button>
          </div>
        </header>

        {/* Page Content Container */}
        <div className="p-6 lg:p-8 space-y-6 max-w-7xl">
          
          {/* Title Header & Timeframe Selectors */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-2xl font-bold text-white tracking-tight">AI Demand & Revenue Forecasting</h2>
                <span className="px-2 py-0.5 rounded-md bg-cyan-950/80 border border-cyan-800 text-[10px] font-mono text-cyan-400">
                  REAL-TIME
                </span>
              </div>
              <p className="text-xs text-slate-400 mt-1">
                Predictive order volume, market trend simulations, and stock replenishment outlook.
              </p>
            </div>

            {/* Time Horizon Selector Buttons */}
            <div className="flex items-center gap-2 self-start sm:self-auto bg-[#0b1220] p-1 rounded-xl border border-slate-800">
              {['7D', '14D', '30D', '90D'].map((tf) => (
                <button
                  key={tf}
                  onClick={() => setTimeframe(tf)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                    timeframe === tf
                      ? 'bg-cyan-500 text-slate-950 shadow-[0_0_12px_rgba(6,182,212,0.3)]'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {tf}
                </button>
              ))}
            </div>
          </div>

          {/* 4 Metric Overview Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {kpiData.map((kpi, idx) => {
              const Icon = kpi.icon;
              return (
                <div key={idx} className="bg-[#0b1220]/90 border border-slate-800/80 rounded-2xl p-4 flex flex-col justify-between space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-slate-400">{kpi.title}</span>
                    <div className={`w-7 h-7 rounded-lg border flex items-center justify-center ${kpi.bgColor} ${kpi.accentColor}`}>
                      <Icon className="w-3.5 h-3.5" />
                    </div>
                  </div>
                  <div>
                    <div className="text-2xl font-black text-white tracking-tight">{kpi.value}</div>
                    <div className={`text-[11px] mt-1 font-medium ${kpi.accentColor}`}>
                      {kpi.subtext}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Middle Main Section: Interactive Forecast Visualizer + What-If Simulator */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            
            {/* Visualizer Chart Section (8 cols) */}
            <div className="lg:col-span-8 bg-[#0b1220]/80 border border-slate-800/80 rounded-2xl p-5 flex flex-col justify-between">
              
              {/* Header with Switcher Tabs */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-800/60">
                <div>
                  <h3 className="text-sm font-bold text-white flex items-center gap-2">
                    <span>30-Day Demand Projection Curve</span>
                    <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                  </h3>
                  <p className="text-[11px] text-slate-500 mt-0.5">Incorporates seasonal sales, festival surges, and local inflation</p>
                </div>

                <div className="flex items-center gap-1 bg-slate-900/80 p-1 rounded-lg border border-slate-800 text-[11px]">
                  {['Revenue', 'Volume (Units)', 'Category Share'].map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`px-2.5 py-1 rounded-md font-medium transition-all ${
                        activeTab === tab
                          ? 'bg-cyan-950/80 text-cyan-400 border border-cyan-800/80'
                          : 'text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>
              </div>

              {/* Graphical Bar Forecast Representation */}
              <div className="h-60 pt-8 pb-3 flex items-end justify-between gap-2 px-2 relative">
                
                {/* Horizontal Guidelines */}
                <div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-10 py-6">
                  <div className="border-b border-cyan-400 w-full"></div>
                  <div className="border-b border-cyan-400 w-full"></div>
                  <div className="border-b border-cyan-400 w-full"></div>
                </div>

                {forecastSeries.map((bar, index) => (
                  <div key={index} className="flex-1 flex flex-col items-center h-full justify-end group relative z-10">
                    
                    {/* Event Tag Indicator */}
                    {bar.event && (
                      <span className="absolute -top-7 text-[9px] font-bold text-cyan-400 bg-cyan-950/90 border border-cyan-800 px-1.5 py-0.5 rounded whitespace-nowrap shadow-md">
                        {bar.event}
                      </span>
                    )}

                    {/* Value Hover Tooltip */}
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity absolute -top-12 bg-slate-900 text-white text-[10px] py-1 px-2 rounded border border-slate-700 pointer-events-none shadow-xl z-20 whitespace-nowrap">
                      {bar.label}: <span className="text-cyan-400 font-bold">{bar.actual}</span>
                    </div>

                    <div className="w-full max-w-[32px] bg-slate-900/60 rounded-t h-full flex items-end">
                      <div 
                        style={{ height: bar.height }} 
                        className={`w-full rounded-t transition-all duration-300 ${
                          bar.isHighlight 
                            ? 'bg-gradient-to-t from-cyan-600 to-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.6)]' 
                            : 'bg-cyan-950/80 group-hover:bg-cyan-800/80 border-t border-cyan-500/50'
                        }`}
                      />
                    </div>
                    <span className="text-[10px] text-slate-500 font-mono mt-2 h-3">
                      {bar.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* Chart Legend Footer */}
              <div className="pt-3 border-t border-slate-800/60 flex items-center justify-between text-[11px] text-slate-400">
                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-sm bg-cyan-900 border border-cyan-500/50"></span> Projected Baseline
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-sm bg-cyan-400 shadow-[0_0_8px_rgba(6,182,212,0.8)]"></span> Peak Festival Demand
                  </span>
                </div>
                <span className="text-slate-500 font-mono">Updated 12 mins ago</span>
              </div>
            </div>

            {/* Interactive "What-If" Market Simulator (4 cols) */}
            <div className="lg:col-span-4 bg-[#0b1220]/80 border border-slate-800/80 rounded-2xl p-5 space-y-4 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-bold text-white flex items-center gap-2">
                    <Sliders className="w-4 h-4 text-cyan-400" />
                    Demand Sensitivity Simulator
                  </h3>
                  <span className="text-[10px] text-slate-500 uppercase font-mono">Interactive</span>
                </div>
                <p className="text-[11px] text-slate-500 mt-1">
                  Adjust variables to test dynamic revenue changes
                </p>
              </div>

              <div className="space-y-4 bg-slate-900/50 p-3.5 rounded-xl border border-slate-800/80">
                
                {/* Variable 1: Wholesale Price Adjustment */}
                <div>
                  <div className="flex justify-between text-xs mb-1.5">
                    <span className="text-slate-300 font-medium">Price Delta (%)</span>
                    <span className="text-cyan-400 font-mono font-bold">{priceAdjustment > 0 ? `+${priceAdjustment}%` : `${priceAdjustment}%`}</span>
                  </div>
                  <input 
                    type="range" 
                    min="-10" 
                    max="10" 
                    step="1"
                    value={priceAdjustment}
                    onChange={(e) => setPriceAdjustment(Number(e.target.value))}
                    className="w-full accent-cyan-400 bg-slate-800 rounded-lg h-1.5 cursor-pointer"
                  />
                </div>

                {/* Variable 2: Promotional Offer */}
                <div>
                  <div className="flex justify-between text-xs mb-1.5">
                    <span className="text-slate-300 font-medium">Festival Discount (%)</span>
                    <span className="text-emerald-400 font-mono font-bold">{promoDiscount}%</span>
                  </div>
                  <input 
                    type="range" 
                    min="0" 
                    max="25" 
                    step="5"
                    value={promoDiscount}
                    onChange={(e) => setPromoDiscount(Number(e.target.value))}
                    className="w-full accent-emerald-400 bg-slate-800 rounded-lg h-1.5 cursor-pointer"
                  />
                </div>

                {/* Variable 3: Market Inflation Rate */}
                <div>
                  <div className="flex justify-between text-xs mb-1.5">
                    <span className="text-slate-300 font-medium">Regional Demand Shift</span>
                    <span className="text-amber-400 font-mono font-bold">+{marketInflation}%</span>
                  </div>
                  <input 
                    type="range" 
                    min="0" 
                    max="10" 
                    step="0.5"
                    value={marketInflation}
                    onChange={(e) => setMarketInflation(Number(e.target.value))}
                    className="w-full accent-amber-400 bg-slate-800 rounded-lg h-1.5 cursor-pointer"
                  />
                </div>

              </div>

              {/* Dynamic Output Result */}
              <div className="p-3.5 rounded-xl bg-cyan-950/40 border border-cyan-800/60 flex items-center justify-between">
                <div>
                  <div className="text-[10px] text-cyan-300/80 font-semibold uppercase tracking-wider">Simulated 30D Revenue</div>
                  <div className="text-2xl font-black text-white mt-0.5">₹{simulatedRevenue}L</div>
                </div>
                <button 
                  onClick={() => { setPriceAdjustment(0); setPromoDiscount(10); setMarketInflation(2.5); }}
                  className="p-2 rounded-lg bg-cyan-900/40 hover:bg-cyan-900/80 border border-cyan-700/50 text-cyan-300 text-xs transition-colors"
                  title="Reset Simulator"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>

          </div>

          {/* AI Demand Drivers & Actionable Insights Section */}
          <div className="bg-[#0b1220]/80 border border-slate-800/80 rounded-2xl p-5 space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-sm font-bold text-white flex items-center gap-2">
                  <Bot className="w-4 h-4 text-cyan-400" />
                  Key AI Demand Drivers & Prescriptive Recommendations
                </h3>
                <p className="text-[11px] text-slate-500 mt-0.5">Automated signal analysis from market trends, local retailers, and inventory velocity</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {driverInsights.map((driver) => (
                <div key={driver.id} className={`p-4 rounded-xl border ${driver.bg} flex flex-col justify-between space-y-3`}>
                  <div>
                    <span className={`text-[9px] font-bold px-2 py-0.5 rounded border uppercase tracking-wider ${driver.tagColor}`}>
                      {driver.tag}
                    </span>
                    <h4 className="text-xs font-bold text-white mt-2.5 leading-snug">{driver.title}</h4>
                    <p className="text-[11px] text-slate-400 mt-1 leading-relaxed">{driver.description}</p>
                  </div>

                  <button className="w-full py-2 bg-slate-900/80 hover:bg-slate-800 border border-slate-700 text-slate-200 text-xs font-bold rounded-lg flex items-center justify-center gap-1.5 transition-all">
                    <span>{driver.action}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-cyan-400" />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Detailed SKU Forecast & Stockout Risk Table */}
          <div className="bg-[#0b1220]/80 border border-slate-800/80 rounded-2xl p-5 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h3 className="text-sm font-bold text-white">SKU-Level Demand Outlook</h3>
                <p className="text-[11px] text-slate-500 mt-0.5">Granular 30-day stock requirements and depletion risk ratings</p>
              </div>

              <div className="flex items-center gap-2">
                <button className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs text-slate-300 hover:text-white flex items-center gap-1.5">
                  <Filter className="w-3.5 h-3.5" />
                  Filter Risk
                </button>
                <button className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs text-slate-300 hover:text-white flex items-center gap-1.5">
                  <Download className="w-3.5 h-3.5" />
                  Export CSV
                </button>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-slate-800/80 text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                    <th className="py-3 px-4">PRODUCT DETAILS</th>
                    <th className="py-3 px-4">SKU CODE</th>
                    <th className="py-3 px-4">CURRENT STOCK</th>
                    <th className="py-3 px-4">30D DEMAND (EST)</th>
                    <th className="py-3 px-4">STOCKOUT RISK</th>
                    <th className="py-3 px-4 text-right">RECOMMENDED ACTION</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/50 text-xs">
                  {skuDemandTable.map((item, idx) => (
                    <tr key={idx} className="hover:bg-slate-900/40 transition-colors">
                      <td className="py-3.5 px-4 font-bold text-white">
                        {item.product}
                      </td>
                      <td className="py-3.5 px-4 font-mono text-slate-400">
                        {item.sku}
                      </td>
                      <td className="py-3.5 px-4 text-slate-300">
                        {item.currentStock.toLocaleString()} units
                      </td>
                      <td className="py-3.5 px-4 font-bold text-cyan-400">
                        {item.predictedDemand.toLocaleString()} units
                      </td>
                      <td className="py-3.5 px-4">
                        <span className={`px-2.5 py-0.5 rounded border text-[10px] font-bold uppercase tracking-wider ${item.riskStyle}`}>
                          • {item.stockoutRisk}
                        </span>
                      </td>
                      <td className="py-3.5 px-4 text-right">
                        <button className="px-3 py-1 rounded-lg bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 text-xs font-bold transition-all">
                          {item.suggestedAction}
                        </button>
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