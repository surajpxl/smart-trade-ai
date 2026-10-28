import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Radio,
  Search,
  Bell,
  FileText,
  CheckCircle2,
  HelpCircle,
  Clock,
  SlidersHorizontal,
  AlertTriangle,
  LayoutDashboard,
  FileCheck,
  Users,
  ArrowLeftRight,
  DollarSign,
  ShieldCheck,
  Sliders,
} from "lucide-react";

export default function KycQueuePage() {
  const navigate = useNavigate();
  const [activeNav, setActiveNav] = useState("KYC Review");
  const [activeFilter, setActiveFilter] = useState("ALL 38");

  const adminNavItems = [
    { name: "Overview", icon: LayoutDashboard, path: "/admin/dashboard" },
    { name: "KYC Review", icon: FileCheck, path: "/admin/kyc" },
    { name: "Users", icon: Users, path: "/admin/users" },
    { name: "Transactions", icon: ArrowLeftRight, path: "/admin/transactions" },
    { name: "Revenue", icon: DollarSign, path: "/admin/revenue" },
    { name: "Fraud Monitor", icon: ShieldCheck, path: "/admin/fraud" },
    { name: "System", icon: Sliders, path: "/retailer/settings" },
  ];

  // Top Metrics
  const kycMetrics = [
    {
      title: "Pending",
      value: "38",
      subtitle: "Median age 1h 42m",
      subtitleColor: "text-amber-400",
      icon: FileText,
      iconColor: "text-amber-400",
      bgColor: "bg-amber-500/10 border-amber-500/30",
    },
    {
      title: "Auto-approved",
      value: "126",
      subtitle: "81.4% today",
      subtitleColor: "text-emerald-400",
      icon: CheckCircle2,
      iconColor: "text-emerald-400",
      bgColor: "bg-emerald-500/10 border-emerald-500/30",
    },
    {
      title: "Need information",
      value: "14",
      subtitle: "Awaiting response",
      subtitleColor: "text-cyan-400",
      icon: HelpCircle,
      iconColor: "text-cyan-400",
      bgColor: "bg-cyan-500/10 border-cyan-500/30",
    },
    {
      title: "SLA at risk",
      value: "7",
      subtitle: "Oldest 3h 48m",
      subtitleColor: "text-rose-400",
      icon: Clock,
      iconColor: "text-rose-400",
      bgColor: "bg-rose-500/10 border-rose-500/30",
    },
  ];

  // Table Data
  const applications = [
    {
      id: "KYC-27491",
      business: "Shree Ganesh Stores",
      role: "Retailer",
      submitted: "Today - 10:42",
      status: "IN REVIEW",
      statusClass: "border-amber-800/80 bg-amber-950/80 text-amber-400",
    },
    {
      id: "KYC-27488",
      business: "Pragati Distributors",
      role: "Supplier",
      submitted: "Today - 10:18",
      status: "HIGH PRIORITY",
      statusClass: "border-rose-800/80 bg-rose-950/80 text-rose-400",
    },
    {
      id: "KYC-27474",
      business: "Sai Krupa Mart",
      role: "Retailer",
      submitted: "Today - 09:56",
      status: "CHECKS PASSED",
      statusClass: "border-emerald-800/80 bg-emerald-950/80 text-emerald-400",
    },
    {
      id: "KYC-27462",
      business: "Vardhman Foods",
      role: "Supplier",
      submitted: "Today - 09:32",
      status: "DOCS MISSING",
      statusClass: "border-cyan-800/80 bg-cyan-950/80 text-cyan-400",
    },
  ];

  const filterTabs = ["ALL 38", "UNASSIGNED 12", "MY QUEUE 8", "HIGH RISK 4"];

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
          {/* Title Header & Action Button */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h2 className="text-2xl font-bold text-white tracking-tight">
                KYC review queue
              </h2>
              <p className="text-xs text-slate-400 mt-1">
                38 pending · 7 approaching SLA
              </p>
            </div>

            <button className="px-4 py-2 bg-[#0b1220] hover:bg-[#121c30] text-slate-200 font-medium text-xs rounded-xl border border-slate-800 flex items-center gap-2 transition-all self-start sm:self-auto">
              <SlidersHorizontal className="w-3.5 h-3.5 text-slate-400" />
              Assignment rules
            </button>
          </div>

          {/* Top 4 KPI Metrics Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {kycMetrics.map((item, idx) => {
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

          {/* Applications Table Card */}
          <div className="bg-[#0b1220]/80 border border-slate-800/80 rounded-2xl p-6 space-y-6">
            {/* Filter Tabs */}
            <div className="flex flex-wrap gap-2 border-b border-slate-800/60 pb-4">
              {filterTabs.map((tab) => {
                const isActive = activeFilter === tab;
                return (
                  <button
                    key={tab}
                    onClick={() => setActiveFilter(tab)}
                    className={`px-3 py-1.5 rounded-full text-[10px] font-bold tracking-wider transition-all flex items-center gap-1.5 ${
                      isActive
                        ? "bg-cyan-950 text-cyan-400 border border-cyan-800/80"
                        : "bg-[#070b14]/60 text-slate-400 hover:text-slate-200 border border-slate-800/50"
                    }`}
                  >
                    <span
                      className={`w-1.5 h-1.5 rounded-full ${isActive ? "bg-cyan-400" : "bg-slate-600"}`}
                    />
                    {tab}
                  </button>
                );
              })}
            </div>

            <div>
              <h3 className="text-sm font-bold text-white">Applications</h3>
              <p className="text-[11px] text-slate-500 mt-0.5">
                Sorted by risk and SLA
              </p>
            </div>

            {/* Applications Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-slate-800/80 text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                    <th className="py-3 px-4">APPLICATION</th>
                    <th className="py-3 px-4">BUSINESS</th>
                    <th className="py-3 px-4">ROLE</th>
                    <th className="py-3 px-4">SUBMITTED</th>
                    <th className="py-3 px-4">STATUS</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/50 text-xs">
                  {applications.map((item, idx) => (
                    <tr
                      key={idx}
                      className="hover:bg-slate-900/40 transition-colors"
                    >
                      <td className="py-4 px-4 font-bold font-mono text-white">
                        {item.id}
                      </td>
                      <td className="py-4 px-4 text-slate-200 font-medium">
                        {item.business}
                      </td>
                      <td className="py-4 px-4 text-slate-400">{item.role}</td>
                      <td className="py-4 px-4 text-slate-400 font-mono">
                        {item.submitted}
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

          {/* Bottom System Alert Banner */}
          <div className="bg-[#1c1409] border border-amber-900/50 rounded-2xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-4 h-4 text-amber-400 mt-0.5 shrink-0" />
              <div>
                <h4 className="text-xs font-bold text-amber-200">
                  GSTN checks are slower than usual
                </h4>
                <p className="text-[11px] text-amber-400/80 mt-0.5">
                  42 seconds instead of 8 - no failures detected
                </p>
              </div>
            </div>

            <button className="px-4 py-2 bg-amber-950/60 hover:bg-amber-900/60 text-amber-300 font-bold text-xs rounded-xl border border-amber-800/80 transition-all self-start sm:self-auto shrink-0">
              Status
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
