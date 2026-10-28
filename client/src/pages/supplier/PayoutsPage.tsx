import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Radio, 
  Search, 
  Bell, 
  Wallet, 
  Clock, 
  CheckCircle2, 
  Percent, 
  AlertTriangle, 
  Building2, 
  LayoutDashboard, 
  Boxes, 
  TrendingUp, 
  Bot, 
  ShoppingBag, 
  Truck, 
  CreditCard 
} from 'lucide-react';

export default function PayoutsPage() {
  const navigate = useNavigate();
  const [activeNav, setActiveNav] = useState('Payouts');

  const supplierNavItems = [
    { name: 'Overview', icon: LayoutDashboard, path: '/supplier/dashboard' },
    { name: 'Products', icon: Boxes, path: '/supplier/products' },
    { name: 'Forecasting', icon: TrendingUp, path: '/supplier/forecasting' },
    { name: 'AI Negotiation', icon: Bot, path: '/supplier/ai-negotiation' },
    { name: 'Orders', icon: ShoppingBag, path: '/supplier/orders' },
    { name: 'Logistics', icon: Truck, path: '/supplier/logistics' },
    { name: 'Payouts', icon: CreditCard, path: '/supplier/payouts' },
  ];

  // Top Metric Summary Cards Data
  const payoutMetrics = [
    {
      title: 'Available',
      value: '₹12.46L',
      subtitle: '182 cleared orders',
      icon: Wallet,
      iconColor: 'text-emerald-400',
      bgColor: 'bg-emerald-500/10 border-emerald-500/30',
      subtitleColor: 'text-cyan-400',
    },
    {
      title: 'Pending',
      value: '₹4.82L',
      subtitle: 'Within 48 hours',
      icon: Clock,
      iconColor: 'text-amber-400',
      bgColor: 'bg-amber-500/10 border-amber-500/30',
      subtitleColor: 'text-amber-400',
    },
    {
      title: 'Paid MTD',
      value: '₹48.6L',
      subtitle: '12 settlements',
      icon: CheckCircle2,
      iconColor: 'text-emerald-400',
      bgColor: 'bg-emerald-500/10 border-emerald-500/30',
      subtitleColor: 'text-cyan-400',
    },
    {
      title: 'Commission',
      value: '2.84%',
      subtitle: '↓ 0.12 pts',
      icon: Percent,
      iconColor: 'text-cyan-400',
      bgColor: 'bg-cyan-500/10 border-cyan-500/30',
      subtitleColor: 'text-slate-400',
    },
  ];

  // Payout Trend Bar Chart Data
  const weeklyTrends = [
    { week: 'W1', height: 'h-16', active: false },
    { week: 'W2', height: 'h-20', active: false },
    { week: 'W3', height: 'h-24', active: false },
    { week: 'W4', height: 'h-28', active: false },
    { week: 'W5', height: 'h-36', active: true },
  ];

  // Settlement History Table Data
  const settlementHistory = [
    {
      id: 'SET-29841',
      period: '22–28 Sep',
      gross: '₹13.42L',
      net: '₹13.02L',
      status: 'PAID',
    },
    {
      id: 'SET-29602',
      period: '15–21 Sep',
      gross: '₹11.84L',
      net: '₹11.48L',
      status: 'PAID',
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

        {/* Page Content */}
        <div className="p-6 lg:p-8 space-y-6 max-w-7xl flex-1 flex flex-col">
          
          {/* Header & Withdrawal Action Button */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h2 className="text-2xl font-bold text-white tracking-tight">Payouts & plan</h2>
              <p className="text-xs text-slate-400 mt-1">
                Reconcile settlements and manage your Growth subscription
              </p>
            </div>

            <button className="px-4 py-2.5 bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold text-xs rounded-xl flex items-center gap-2 shadow-[0_0_20px_rgba(6,182,212,0.25)] transition-all self-start sm:self-auto">
              <Building2 className="w-3.5 h-3.5 stroke-[2.5]" />
              Withdraw ₹12.46L
            </button>
          </div>

          {/* Top KPI Metrics Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {payoutMetrics.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="bg-[#0b1220]/80 border border-slate-800/80 rounded-2xl p-5 flex flex-col justify-between">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-slate-400 font-medium">{item.title}</span>
                    <div className={`p-2 rounded-xl border ${item.bgColor}`}>
                      <Icon className={`w-4 h-4 ${item.iconColor}`} />
                    </div>
                  </div>

                  <div className="mt-4">
                    <div className="text-2xl font-bold text-white font-mono">{item.value}</div>
                    <div className={`text-[11px] font-semibold mt-1 ${item.subtitleColor}`}>{item.subtitle}</div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Subscription Banner */}
          <div className="bg-[#091a24] border border-cyan-800/60 rounded-2xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-start gap-3">
              <div className="p-1.5 rounded-lg bg-cyan-950 text-cyan-400 border border-cyan-800/60 mt-0.5 shrink-0">
                <AlertTriangle className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-white">Growth plan · ₹4,999/month</h4>
                <p className="text-[11px] text-slate-400 mt-0.5">
                  Renews 12 Oct · 18 of 25 AI negotiations used · 146 of 500 SKUs
                </p>
              </div>
            </div>

            <button className="px-4 py-2 bg-cyan-950/80 hover:bg-cyan-900 text-cyan-300 font-bold text-xs rounded-xl border border-cyan-800 transition-all self-start sm:self-auto shrink-0">
              Manage plan
            </button>
          </div>

          {/* Middle Section: Payout Trend Chart + Next Settlement Card */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            
            {/* Payout Trend Bar Chart (8 cols) */}
            <div className="lg:col-span-8 bg-[#0b1220]/80 border border-slate-800/80 rounded-2xl p-6 flex flex-col justify-between">
              <div>
                <h3 className="text-sm font-bold text-white">Payout trend</h3>
                <p className="text-[11px] text-slate-500 mt-0.5">Net settlement by week</p>
              </div>

              {/* Weekly Bars Visualization */}
              <div className="pt-10 pb-4 flex items-end justify-between gap-4 h-56 border-b border-slate-800/60 px-4">
                {weeklyTrends.map((trend, idx) => (
                  <div key={idx} className="flex-1 flex flex-col items-center gap-3 h-full justify-end">
                    <div 
                      className={`w-full max-w-[56px] rounded-t-lg transition-all ${
                        trend.active 
                          ? 'bg-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.4)]' 
                          : 'bg-[#122338] hover:bg-[#18304d]'
                      } ${trend.height}`} 
                    />
                    <span className="text-[10px] font-bold text-slate-500 font-mono">{trend.week}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Next Settlement Breakdown Card (4 cols) */}
            <div className="lg:col-span-4 bg-[#0b1220]/80 border border-slate-800/80 rounded-2xl p-6 flex flex-col justify-between space-y-6">
              <div>
                <div className="text-xs text-slate-400">Next settlement</div>
                <div className="text-[11px] text-slate-500 font-medium mt-0.5">02 Oct 2026</div>

                <div className="text-3xl font-bold text-white font-mono mt-4">
                  ₹12,46,280
                </div>

                <div className="mt-3">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-800 text-[10px] font-bold text-emerald-400 uppercase tracking-wider">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    • HDFC **** 4821 VERIFIED
                  </span>
                </div>
              </div>

              <div className="space-y-3 text-xs border-t border-slate-800/80 pt-4">
                <div className="flex items-center justify-between text-slate-400">
                  <span>Gross sales</span>
                  <span className="font-mono font-bold text-slate-200">₹12,82,640</span>
                </div>

                <div className="flex items-center justify-between text-slate-400">
                  <span>Commission</span>
                  <span className="font-mono font-bold text-rose-400">-₹34,220</span>
                </div>

                <div className="flex items-center justify-between text-slate-400">
                  <span>TDS</span>
                  <span className="font-mono font-bold text-rose-400">-₹2,140</span>
                </div>
              </div>
            </div>

          </div>

          {/* Bottom Section: Settlement History Table */}
          <div className="bg-[#0b1220]/80 border border-slate-800/80 rounded-2xl p-6 space-y-4">
            <div>
              <h3 className="text-sm font-bold text-white">Settlement history</h3>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-slate-800/80 text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                    <th className="py-3 px-4">SETTLEMENT</th>
                    <th className="py-3 px-4">PERIOD</th>
                    <th className="py-3 px-4">GROSS</th>
                    <th className="py-3 px-4">NET</th>
                    <th className="py-3 px-4">STATUS</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/50 text-xs">
                  {settlementHistory.map((item, idx) => (
                    <tr key={idx} className="hover:bg-slate-900/40 transition-colors">
                      <td className="py-4 px-4 font-bold font-mono text-white">
                        {item.id}
                      </td>
                      <td className="py-4 px-4 text-slate-300 font-medium">
                        {item.period}
                      </td>
                      <td className="py-4 px-4 font-bold text-slate-200 font-mono">
                        {item.gross}
                      </td>
                      <td className="py-4 px-4 font-bold text-white font-mono">
                        {item.net}
                      </td>
                      <td className="py-4 px-4">
                        <span className="px-2.5 py-0.5 rounded border border-emerald-800/80 bg-emerald-950/80 text-emerald-400 text-[10px] font-bold uppercase tracking-wider">
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