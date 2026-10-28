import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Radio,
  Search,
  Bell,
  IndianRupee,
  BarChart3,
  Percent,
  Repeat,
  Download,
  LayoutDashboard,
  FileCheck,
  Users,
  ArrowLeftRight,
  DollarSign,
  ShieldCheck,
  Sliders,
} from "lucide-react";

export default function RevenuePage() {
  const navigate = useNavigate();
  const [activeNav, setActiveNav] = useState("Revenue");

  const adminNavItems = [
    { name: "Overview", icon: LayoutDashboard, path: "/admin/dashboard" },
    { name: "KYC Review", icon: FileCheck, path: "/admin/kyc" },
    { name: "Users", icon: Users, path: "/admin/users" },
    { name: "Transactions", icon: ArrowLeftRight, path: "/admin/transactions" },
    { name: "Revenue", icon: DollarSign, path: "/admin/revenue" },
    { name: "Fraud Monitor", icon: ShieldCheck, path: "/admin/fraud" },
    { name: "System", icon: Sliders, path: "/retailer/settings" },
  ];

  // Top Financial Metrics Cards
  const revenueMetrics = [
    {
      title: "Net revenue MTD",
      value: "₹1.42Cr",
      subtitle: "↑ 22.6%",
      subtitleColor: "text-emerald-400",
      icon: IndianRupee,
      iconColor: "text-emerald-400",
      bgColor: "bg-emerald-500/10 border-emerald-500/30",
    },
    {
      title: "GMV MTD",
      value: "₹48.6Cr",
      subtitle: "2.92% take rate",
      subtitleColor: "text-cyan-400",
      icon: BarChart3,
      iconColor: "text-cyan-400",
      bgColor: "bg-cyan-500/10 border-cyan-500/30",
    },
    {
      title: "Commission",
      value: "₹1.18Cr",
      subtitle: "83% of revenue",
      subtitleColor: "text-cyan-400",
      icon: Percent,
      iconColor: "text-cyan-400",
      bgColor: "bg-cyan-500/10 border-cyan-500/30",
    },
    {
      title: "Subscriptions",
      value: "₹24.8L",
      subtitle: "2,846 seats",
      subtitleColor: "text-cyan-400",
      icon: Repeat,
      iconColor: "text-cyan-400",
      bgColor: "bg-cyan-500/10 border-cyan-500/30",
    },
  ];

  // GMV & Revenue Trend Bars Data
  const trendData = [
    { label: "W1", height: "h-16", active: false },
    { label: "W2", height: "h-20", active: false },
    { label: "W3", height: "h-24", active: false },
    { label: "W4", height: "h-28", active: false },
    { label: "W5", height: "h-36", active: true },
  ];

  // Revenue Mix Breakdown
  const revenueMix = [
    { name: "Commission", value: "₹1.18Cr", percentage: "83%" },
    { name: "Subscriptions", value: "₹24.8L", percentage: "17%" },
    { name: "Fintech", value: "₹12.6L", percentage: "9%" },
    { name: "Logistics", value: "₹8.2L", percentage: "6%" },
  ];

  // Category Commission Table Data
  const categoryCommissions = [
    {
      category: "Packaged food",
      gmv: "₹14.8Cr",
      rate: "2.74%",
      revenue: "₹40.6L",
      status: "ABOVE PLAN",
      statusClass: "border-emerald-800/80 bg-emerald-950/80 text-emerald-400",
    },
    {
      category: "Staples & oils",
      gmv: "₹12.2Cr",
      rate: "2.46%",
      revenue: "₹30.0L",
      status: "ON PLAN",
      statusClass: "border-cyan-800/80 bg-cyan-950/80 text-cyan-400",
    },
    {
      category: "Personal care",
      gmv: "₹8.6Cr",
      rate: "3.82%",
      revenue: "₹32.9L",
      status: "ABOVE PLAN",
      statusClass: "border-emerald-800/80 bg-emerald-950/80 text-emerald-400",
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
          {/* Section Heading & Action Button */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h2 className="text-2xl font-bold text-white tracking-tight">
                Revenue & commission
              </h2>
              <p className="text-xs text-slate-400 mt-1">
                Marketplace economics by role, category and region
              </p>
            </div>

            <button className="px-4 py-2 bg-[#0b1220] hover:bg-[#121c30] text-slate-200 font-medium text-xs rounded-xl border border-slate-800 flex items-center gap-2 transition-all self-start sm:self-auto">
              <Download className="w-3.5 h-3.5 text-slate-400" />
              Download report
            </button>
          </div>

          {/* Top 4 KPI Metrics Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {revenueMetrics.map((item, idx) => {
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
                    <div className="text-3xl font-bold text-white font-mono">
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

          {/* Middle Section: GMV & Revenue Trend + Revenue Mix */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* GMV and Revenue Trend Chart (8 cols) */}
            <div className="lg:col-span-8 bg-[#0b1220]/80 border border-slate-800/80 rounded-2xl p-6 flex flex-col justify-between">
              <div>
                <h3 className="text-sm font-bold text-white">
                  GMV and revenue trend
                </h3>
              </div>

              {/* Bar Visualization */}
              <div className="pt-10 pb-4 flex items-end justify-between gap-4 h-56 border-b border-slate-800/60 px-4">
                {trendData.map((trend, idx) => (
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

            {/* Revenue Mix Card (4 cols) */}
            <div className="lg:col-span-4 bg-[#0b1220]/80 border border-slate-800/80 rounded-2xl p-6 flex flex-col space-y-5 justify-between">
              <div>
                <h3 className="text-sm font-bold text-white">Revenue mix</h3>
              </div>

              <div className="space-y-4">
                {revenueMix.map((mix, idx) => (
                  <div key={idx} className="space-y-1.5">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-slate-400 font-medium">
                        {mix.name}
                      </span>
                      <span className="text-white font-mono font-bold">
                        {mix.value}
                      </span>
                    </div>
                    {/* Visual Progress Bar Indicator */}
                    <div className="w-full bg-[#070b14] h-1.5 rounded-full overflow-hidden">
                      <div
                        className="bg-cyan-400 h-full rounded-full"
                        style={{ width: mix.percentage }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Section: Category Commission Table */}
          <div className="bg-[#0b1220]/80 border border-slate-800/80 rounded-2xl p-6 space-y-4">
            <div>
              <h3 className="text-sm font-bold text-white">
                Category commission
              </h3>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-slate-800/80 text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                    <th className="py-3 px-4">CATEGORY</th>
                    <th className="py-3 px-4">GMV</th>
                    <th className="py-3 px-4">RATE</th>
                    <th className="py-3 px-4">REVENUE</th>
                    <th className="py-3 px-4">STATUS</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/50 text-xs">
                  {categoryCommissions.map((item, idx) => (
                    <tr
                      key={idx}
                      className="hover:bg-slate-900/40 transition-colors"
                    >
                      <td className="py-4 px-4 font-bold text-white">
                        {item.category}
                      </td>
                      <td className="py-4 px-4 font-bold text-slate-200 font-mono">
                        {item.gmv}
                      </td>
                      <td className="py-4 px-4 text-slate-300 font-mono">
                        {item.rate}
                      </td>
                      <td className="py-4 px-4 font-bold text-white font-mono">
                        {item.revenue}
                      </td>
                      <td className="py-4 px-4">
                        <span
                          className={`px-2.5 py-0.5 rounded border text-[10px] font-bold uppercase tracking-wider ${item.statusClass}`}
                        >
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
