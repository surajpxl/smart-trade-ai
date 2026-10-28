import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Radio,
  Search,
  Bell,
  ShieldAlert,
  AlertTriangle,
  ShieldCheck,
  CheckCircle2,
  LayoutDashboard,
  FileCheck,
  Users,
  ArrowLeftRight,
  DollarSign,
  Sliders,
} from "lucide-react";

export default function FraudPage() {
  const navigate = useNavigate();
  const [activeNav, setActiveNav] = useState("Fraud Monitor");

  const adminNavItems = [
    { name: "Overview", icon: LayoutDashboard, path: "/admin/dashboard" },
    { name: "KYC Review", icon: FileCheck, path: "/admin/kyc" },
    { name: "Users", icon: Users, path: "/admin/users" },
    { name: "Transactions", icon: ArrowLeftRight, path: "/admin/transactions" },
    { name: "Revenue", icon: DollarSign, path: "/admin/revenue" },
    { name: "Fraud Monitor", icon: ShieldCheck, path: "/admin/fraud" },
    { name: "System", icon: Sliders, path: "/retailer/settings" },
  ];

  // Top Risk Metrics
  const riskMetrics = [
    {
      title: "Open cases",
      value: "23",
      subtitle: "4 high priority",
      subtitleColor: "text-rose-400",
      icon: ShieldAlert,
      iconColor: "text-rose-400",
      bgColor: "bg-rose-500/10 border-rose-500/30",
    },
    {
      title: "Exposure",
      value: "₹8.4L",
      subtitle: "0.017% of GMV",
      subtitleColor: "text-amber-400",
      icon: AlertTriangle,
      iconColor: "text-amber-400",
      bgColor: "bg-amber-500/10 border-amber-500/30",
    },
    {
      title: "Prevented today",
      value: "₹12.8L",
      subtitle: "18 transactions",
      subtitleColor: "text-emerald-400",
      icon: ShieldCheck,
      iconColor: "text-emerald-400",
      bgColor: "bg-emerald-500/10 border-emerald-500/30",
    },
    {
      title: "False positives",
      value: "1.8%",
      subtitle: "↓ 0.4 pts",
      subtitleColor: "text-cyan-400",
      icon: CheckCircle2,
      iconColor: "text-cyan-400",
      bgColor: "bg-cyan-500/10 border-cyan-500/30",
    },
  ];

  // Risk Signals Trend Chart Data
  const trendData = [
    { label: "W1", height: "h-12", active: false },
    { label: "W2", height: "h-16", active: false },
    { label: "W3", height: "h-20", active: false },
    { label: "W4", height: "h-24", active: false },
    { label: "W5", height: "h-32", active: true },
  ];

  // Signal Distribution Breakdown
  const signalDistributions = [
    { name: "Device anomaly", cases: "8 CASES" },
    { name: "Transaction velocity", cases: "6 CASES" },
    { name: "Identity mismatch", cases: "5 CASES" },
    { name: "Refund abuse", cases: "4 CASES" },
  ];

  // Investigation Queue Table Data
  const investigationQueue = [
    {
      caseId: "FR-8421",
      entity: "Pragati Distributors",
      signal: "Device + velocity",
      exposure: "₹2,84,600",
      status: "HIGH RISK",
      statusClass: "border-rose-800/80 bg-rose-950/80 text-rose-400",
    },
    {
      caseId: "FR-8418",
      entity: "Kaveri Mini Mart",
      signal: "Refund cluster",
      exposure: "₹86,240",
      status: "INVESTIGATING",
      statusClass: "border-amber-800/80 bg-amber-950/80 text-amber-400",
    },
    {
      caseId: "FR-8412",
      entity: "Omkar Foods",
      signal: "Beneficiary changed",
      exposure: "₹1,42,880",
      status: "PAYOUT HELD",
      statusClass: "border-cyan-800/80 bg-cyan-950/80 text-cyan-400",
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
          {/* Section Heading */}
          <div>
            <h2 className="text-2xl font-bold text-white tracking-tight">
              Transaction & fraud monitor
            </h2>
            <p className="text-xs text-slate-400 mt-1">
              Real-time risk across orders, credit and payouts
            </p>
          </div>

          {/* Top 4 Risk KPI Metrics Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {riskMetrics.map((item, idx) => {
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

          {/* Middle Section: Risk Signals Trend + Signal Distribution */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Risk Signals Chart (8 cols) */}
            <div className="lg:col-span-8 bg-[#0b1220]/80 border border-slate-800/80 rounded-2xl p-6 flex flex-col justify-between">
              <div>
                <h3 className="text-sm font-bold text-white">
                  Risk signals by hour
                </h3>
              </div>

              {/* Bar Visualization */}
              <div className="pt-10 pb-4 flex items-end justify-between gap-4 h-52 border-b border-slate-800/60 px-4">
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

            {/* Signal Distribution List (4 cols) */}
            <div className="lg:col-span-4 bg-[#0b1220]/80 border border-slate-800/80 rounded-2xl p-6 flex flex-col space-y-4 justify-between">
              <div>
                <h3 className="text-sm font-bold text-white">
                  Signal distribution
                </h3>
              </div>

              <div className="space-y-3.5">
                {signalDistributions.map((signal, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between text-xs"
                  >
                    <span className="text-slate-400 font-medium">
                      {signal.name}
                    </span>
                    <span className="px-2 py-0.5 rounded border border-rose-800/80 bg-rose-950/80 text-rose-400 text-[10px] font-bold tracking-wider">
                      • {signal.cases}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Section: Investigation Queue Table */}
          <div className="bg-[#0b1220]/80 border border-slate-800/80 rounded-2xl p-6 space-y-4">
            <div>
              <h3 className="text-sm font-bold text-white">
                Investigation queue
              </h3>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-slate-800/80 text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                    <th className="py-3 px-4">CASE</th>
                    <th className="py-3 px-4">ENTITY</th>
                    <th className="py-3 px-4">SIGNAL</th>
                    <th className="py-3 px-4">EXPOSURE</th>
                    <th className="py-3 px-4">STATUS</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/50 text-xs">
                  {investigationQueue.map((item) => (
                    <tr
                      key={item.caseId}
                      onClick={() => navigate(`/admin/fraud/${item.caseId}`)}
                      className="hover:bg-cyan-950/20 transition-colors cursor-pointer group"
                    >
                      <td className="py-4 px-4 font-bold text-cyan-400 group-hover:underline font-mono">
                        {item.caseId}
                      </td>
                      <td className="py-4 px-4 text-slate-300 font-medium">
                        {item.entity}
                      </td>
                      <td className="py-4 px-4 text-slate-400">
                        {item.signal}
                      </td>
                      <td className="py-4 px-4 font-bold text-white font-mono">
                        {item.exposure}
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
