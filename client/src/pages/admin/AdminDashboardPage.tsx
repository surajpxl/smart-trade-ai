import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Radio,
  Search,
  Bell,
  IndianRupee,
  Building2,
  CheckCircle2,
  ShieldAlert,
  AlertTriangle,
  Activity,
  LayoutDashboard,
  FileCheck,
  Users,
  ArrowLeftRight,
  DollarSign,
  ShieldCheck,
  Sliders,
} from "lucide-react";

export default function AdminDashboardPage() {
  const navigate = useNavigate();
  const [activeNav, setActiveNav] = useState("Overview");

  const adminNavItems = [
    { name: "Overview", icon: LayoutDashboard, path: "/admin/dashboard" },
    { name: "KYC Review", icon: FileCheck, path: "/admin/kyc" },
    { name: "Users", icon: Users, path: "/admin/users" },
    { name: "Transactions", icon: ArrowLeftRight, path: "/admin/transactions" },
    { name: "Revenue", icon: DollarSign, path: "/admin/revenue" },
    { name: "Fraud Monitor", icon: ShieldCheck, path: "/admin/fraud" },
    { name: "System", icon: Sliders, path: "/retailer/settings" },
  ];

  // Top Operations Metrics
  const networkMetrics = [
    {
      title: "GMV today",
      value: "₹2.84Cr",
      subtitle: "↑ 18.2% vs last Thu",
      subtitleColor: "text-emerald-400",
      icon: IndianRupee,
      iconColor: "text-emerald-400",
      bgColor: "bg-emerald-500/10 border-emerald-500/30",
    },
    {
      title: "Active businesses",
      value: "18,426",
      subtitle: "+142 this week",
      subtitleColor: "text-cyan-400",
      icon: Building2,
      iconColor: "text-cyan-400",
      bgColor: "bg-cyan-500/10 border-cyan-500/30",
    },
    {
      title: "Order success",
      value: "97.6%",
      subtitle: "14,820 processed",
      subtitleColor: "text-cyan-400",
      icon: CheckCircle2,
      iconColor: "text-cyan-400",
      bgColor: "bg-cyan-500/10 border-cyan-500/30",
    },
    {
      title: "Risk exposure",
      value: "₹8.4L",
      subtitle: "23 under review",
      subtitleColor: "text-rose-400",
      icon: ShieldAlert,
      iconColor: "text-rose-400",
      bgColor: "bg-rose-500/10 border-rose-500/30",
    },
  ];

  // Network GMV Bar Data
  const gmvTrends = [
    { label: "W1", height: "h-16", active: false },
    { label: "W2", height: "h-20", active: false },
    { label: "W3", height: "h-24", active: false },
    { label: "W4", height: "h-28", active: false },
    { label: "W5", height: "h-36", active: true },
  ];

  // Regional Performance Clusters
  const clusters = [
    { name: "Central", gmv: "₹72.4L", orders: "4,268 orders" },
    { name: "Pimpri", gmv: "₹64.8L", orders: "3,842 orders" },
    { name: "East Pune", gmv: "₹58.6L", orders: "3,104 orders" },
    { name: "West Pune", gmv: "₹48.2L", orders: "2,864 orders" },
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
                <h1 className="text-sm font-bold text-white tracking-tight">
                  SmartTrade
                </h1>
                <div className="text-[9px] font-bold tracking-widest text-cyan-500 uppercase">
                  AI COMMERCE GRID
                </div>
              </div>
            </div>

            <div className="mt-3 px-3 py-1.5 rounded-lg bg-cyan-950/40 border border-cyan-800/40 text-cyan-400 text-xs font-medium">
              Admin workspace
            </div>
          </div>

          {/* Nav Links */}
          <nav className="p-3 space-y-1">
            {adminNavItems.map((item) => {
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
                      ? "bg-cyan-950/60 text-cyan-400 border border-cyan-800/50 shadow-[0_0_15px_rgba(6,182,212,0.1)]"
                      : "text-slate-400 hover:text-slate-200 hover:bg-slate-900/50"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.name}</span>
                </button>
              );
            })}
          </nav>
        </div>

        {/* Admin Account Footer */}
        <div className="p-4 border-t border-slate-800/60">
          <div className="p-2.5 rounded-xl bg-[#0b1220] border border-slate-800/80">
            <div className="text-xs font-semibold text-white">
              SmartTrade Operations
            </div>
            <div className="text-[10px] text-slate-500 mt-0.5">
              Settings · Help · Sign out
            </div>
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
          {/* Section Heading */}
          <div>
            <h2 className="text-2xl font-bold text-white tracking-tight">
              Network operations
            </h2>
            <p className="text-xs text-slate-400 mt-1">
              Live health across SmartTrade's Pune commerce grid
            </p>
          </div>

          {/* Top 4 KPI Metrics Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {networkMetrics.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-[#0b1220]/80 border border-slate-800/80 rounded-2xl p-5 flex flex-col justify-between"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-slate-400 font-medium">
                      {item.title}
                    </span>
                    <div className={`p-2 rounded-xl border ${item.bgColor}`}>
                      <Icon className={`w-4 h-4 ${item.iconColor}`} />
                    </div>
                  </div>

                  <div className="mt-4">
                    <div className="text-2xl font-bold text-white font-mono">
                      {item.value}
                    </div>
                    <div
                      className={`text-[11px] font-semibold mt-1 ${item.subtitleColor}`}
                    >
                      {item.subtitle}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Middle Section: GMV Bar Chart + Operations Pulse */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Network GMV Bar Chart (8 cols) */}
            <div className="lg:col-span-8 bg-[#0b1220]/80 border border-slate-800/80 rounded-2xl p-6 flex flex-col justify-between">
              <div>
                <h3 className="text-sm font-bold text-white">Network GMV</h3>
                <p className="text-[11px] text-slate-500 mt-0.5">
                  Hourly order value
                </p>
              </div>

              {/* Weekly Bars Visualization */}
              <div className="pt-10 pb-4 flex items-end justify-between gap-4 h-56 border-b border-slate-800/60 px-4">
                {gmvTrends.map((trend, idx) => (
                  <div
                    key={idx}
                    className="flex-1 flex flex-col items-center gap-3 h-full justify-end"
                  >
                    <div
                      className={`w-full max-w-[56px] rounded-t-lg transition-all ${
                        trend.active
                          ? "bg-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.4)]"
                          : "bg-[#122338] hover:bg-[#18304d]"
                      } ${trend.height}`}
                    />
                    <span className="text-[10px] font-bold text-slate-500 font-mono">
                      {trend.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Operations Pulse Alerts Card (4 cols) */}
            <div className="lg:col-span-4 bg-[#0b1220]/80 border border-slate-800/80 rounded-2xl p-6 flex flex-col space-y-4">
              <div>
                <h3 className="text-sm font-bold text-white">
                  Operations pulse
                </h3>
              </div>

              <div className="space-y-3 flex-1 flex flex-col justify-center">
                {/* Alert 1: KYC Applications */}
                <div className="p-4 rounded-xl bg-amber-950/30 border border-amber-800/50 flex items-center justify-between gap-3">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="w-4 h-4 text-amber-400 mt-0.5 shrink-0" />
                    <div>
                      <div className="text-xs font-bold text-white">
                        38 KYC applications
                      </div>
                      <div className="text-[10px] text-amber-300/80 mt-0.5">
                        7 over four-hour SLA
                      </div>
                    </div>
                  </div>
                  <button className="px-3 py-1 rounded-lg bg-amber-500/20 text-amber-300 hover:bg-amber-500/30 border border-amber-500/40 text-[10px] font-bold uppercase tracking-wider shrink-0">
                    Review
                  </button>
                </div>

                {/* Alert 2: Fraud Signals */}
                <div className="p-4 rounded-xl bg-rose-950/30 border border-rose-800/50 flex items-center justify-between gap-3">
                  <div className="flex items-start gap-3">
                    <ShieldAlert className="w-4 h-4 text-rose-400 mt-0.5 shrink-0" />
                    <div>
                      <div className="text-xs font-bold text-white">
                        23 fraud signals
                      </div>
                      <div className="text-[10px] text-rose-300/80 mt-0.5">
                        ₹8.4L exposure
                      </div>
                    </div>
                  </div>
                  <button className="px-3 py-1 rounded-lg bg-rose-500/20 text-rose-300 hover:bg-rose-500/30 border border-rose-500/40 text-[10px] font-bold uppercase tracking-wider shrink-0">
                    Investigate
                  </button>
                </div>

                {/* Alert 3: Payout Success */}
                <div className="p-4 rounded-xl bg-emerald-950/30 border border-emerald-800/50 flex items-start gap-3">
                  <Activity className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                  <div>
                    <div className="text-xs font-bold text-white">
                      Payout success 99.8%
                    </div>
                    <div className="text-[10px] text-emerald-300/80 mt-0.5">
                      2 bank confirmations pending
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section: Regional Performance Grid */}
          <div className="bg-[#0b1220]/80 border border-slate-800/80 rounded-2xl p-6 space-y-4">
            <div>
              <h3 className="text-sm font-bold text-white">
                Regional performance
              </h3>
              <p className="text-[11px] text-slate-500 mt-0.5">
                Pune clusters · today
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {clusters.map((cluster, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-[#070b14]/60 border border-slate-800/60"
                >
                  <div className="text-xs text-slate-400 font-medium">
                    {cluster.name}
                  </div>
                  <div className="text-xl font-bold text-white font-mono mt-2">
                    {cluster.gmv}
                  </div>
                  <div className="text-[10px] text-slate-500 font-medium mt-1">
                    {cluster.orders}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
