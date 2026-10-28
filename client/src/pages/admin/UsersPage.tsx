import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Radio,
  Search,
  Bell,
  Users,
  Store,
  Truck,
  UserX,
  UserPlus,
  AlertTriangle,
  LayoutDashboard,
  FileCheck,
  ArrowLeftRight,
  DollarSign,
  ShieldCheck,
  Sliders,
} from "lucide-react";

export default function UsersPage() {
  const navigate = useNavigate();
  const [activeNav, setActiveNav] = useState("Users");
  const [searchQuery, setSearchQuery] = useState("");

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
  const userMetrics = [
    {
      title: "Active users",
      value: "32,814",
      subtitle: "71% weekly active",
      subtitleColor: "text-cyan-400",
      icon: Users,
      iconColor: "text-cyan-400",
      bgColor: "bg-cyan-500/10 border-cyan-500/30",
    },
    {
      title: "Retailers",
      value: "14,286",
      subtitle: "+384 this month",
      subtitleColor: "text-cyan-400",
      icon: Store,
      iconColor: "text-cyan-400",
      bgColor: "bg-cyan-500/10 border-cyan-500/30",
    },
    {
      title: "Suppliers",
      value: "4,140",
      subtitle: "+86 this month",
      subtitleColor: "text-cyan-400",
      icon: Truck,
      iconColor: "text-cyan-400",
      bgColor: "bg-cyan-500/10 border-cyan-500/30",
    },
    {
      title: "Restricted",
      value: "42",
      subtitle: "12 pending appeal",
      subtitleColor: "text-amber-400",
      icon: UserX,
      iconColor: "text-amber-400",
      bgColor: "bg-amber-500/10 border-amber-500/30",
    },
  ];

  // User Directory Data
  const usersList = [
    {
      user: "Rohan Kulkarni",
      business: "Shree Ganesh Stores",
      role: "Retailer",
      lastActive: "2 min",
      status: "ACTIVE",
      statusClass: "border-emerald-800/80 bg-emerald-950/80 text-emerald-400",
    },
    {
      user: "Neha Deshmukh",
      business: "Aarav Foods",
      role: "Supplier",
      lastActive: "8 min",
      status: "ACTIVE",
      statusClass: "border-emerald-800/80 bg-emerald-950/80 text-emerald-400",
    },
    {
      user: "Vikram Shah",
      business: "Pragati Distributors",
      role: "Supplier",
      lastActive: "1 day",
      status: "RESTRICTED",
      statusClass: "border-amber-800/80 bg-amber-950/80 text-amber-400",
    },
    {
      user: "Aditi Jagtap",
      business: "Sai Krupa Mart",
      role: "Retailer",
      lastActive: "3 days",
      status: "INVITED",
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
          {/* Title Header & Action Button */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h2 className="text-2xl font-bold text-white tracking-tight">
                Users & businesses
              </h2>
              <p className="text-xs text-slate-400 mt-1">
                18,426 businesses · 32,814 active users
              </p>
            </div>

            <button className="px-4 py-2.5 bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold text-xs rounded-xl flex items-center gap-2 shadow-[0_0_20px_rgba(6,182,212,0.25)] transition-all self-start sm:self-auto">
              <UserPlus className="w-3.5 h-3.5 stroke-[2.5]" />
              Invite internal user
            </button>
          </div>

          {/* Top 4 KPI Metrics Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {userMetrics.map((item, idx) => {
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

          {/* Directory Search Bar Input */}
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search name, business, GSTIN or mobile..."
              className="w-full bg-[#0b1220]/90 border border-slate-800/80 rounded-xl px-4 py-3 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors"
            />
          </div>

          {/* User Directory Table Card */}
          <div className="bg-[#0b1220]/80 border border-slate-800/80 rounded-2xl p-6 space-y-4">
            <div>
              <h3 className="text-sm font-bold text-white">User directory</h3>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-slate-800/80 text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                    <th className="py-3 px-4">USER</th>
                    <th className="py-3 px-4">BUSINESS</th>
                    <th className="py-3 px-4">ROLE</th>
                    <th className="py-3 px-4">LAST ACTIVE</th>
                    <th className="py-3 px-4">STATUS</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/50 text-xs">
                  {usersList.map((item, idx) => (
                    <tr
                      key={idx}
                      className="hover:bg-slate-900/40 transition-colors"
                    >
                      <td className="py-4 px-4 font-bold text-white">
                        {item.user}
                      </td>
                      <td className="py-4 px-4 text-slate-300 font-medium">
                        {item.business}
                      </td>
                      <td className="py-4 px-4 text-slate-400">{item.role}</td>
                      <td className="py-4 px-4 text-slate-400 font-mono">
                        {item.lastActive}
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
                  12 dormant admin accounts
                </h4>
                <p className="text-[11px] text-amber-400/80 mt-0.5">
                  No activity for 90+ days
                </p>
              </div>
            </div>

            <button className="px-4 py-2 bg-amber-950/60 hover:bg-amber-900/60 text-amber-300 font-bold text-xs rounded-xl border border-amber-800/80 transition-all self-start sm:self-auto shrink-0">
              Review access
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
