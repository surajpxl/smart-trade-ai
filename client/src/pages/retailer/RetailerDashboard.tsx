import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Radio,
  Search,
  Bell,
  Sparkles,
  IndianRupee,
  Boxes,
  TrendingUp,
  CreditCard,
  AlertTriangle,
  Tag,
  Layers,
  LayoutDashboard,
  Store,
  ShoppingBag,
  Users,
  LogOut,
} from "lucide-react";

import { useLogout } from "../../hooks/useLogout";

export default function RetailerDashboard() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("Overview");

  const handleLogout = useLogout();

  const navItems = [
    { name: "Overview", icon: LayoutDashboard, path: "/retailer/dashboard" },
    { name: "Marketplace", icon: Store, path: "/marketplace" },
    { name: "AI Search", icon: Sparkles, path: "/retailer/ai-search" },
    { name: "Inventory", icon: Boxes, path: "/retailer/inventory" },
    { name: "Orders", icon: ShoppingBag, path: "/retailer/orders" },
    { name: "Suppliers", icon: Users, path: "/retailer/suppliers" },
    { name: "Payments", icon: CreditCard, path: "/retailer/payments" },
  ];

  const recentOrders = [
    {
      id: "ST-104829",
      supplier: "Aarav Foods Pvt Ltd",
      placed: "01 Oct · 10:18",
      total: "18,462",
      status: "IN TRANSIT",
      statusStyle: "bg-cyan-950/80 border-cyan-500/50 text-cyan-400",
    },
    {
      id: "ST-104762",
      supplier: "Metro FMCG Distribution",
      placed: "30 Sep · 16:42",
      total: "7,840",
      status: "DELIVERED",
      statusStyle: "bg-emerald-950/80 border-emerald-500/50 text-emerald-400",
    },
    {
      id: "ST-104681",
      supplier: "Sahyadri Wholesale",
      placed: "29 Sep · 11:05",
      total: "12,226",
      status: "PROCESSING",
      statusStyle: "bg-amber-950/80 border-amber-500/50 text-amber-400",
    },
  ];

  const chartHeights = [30, 45, 60, 52, 68, 62, 85, 78, 88, 100];

  return (
    <div className="min-h-screen bg-[#070b14] text-slate-100 flex font-sans selection:bg-cyan-500 selection:text-black">
      {/* Sidebar Navigation */}
      <aside className="w-64 bg-[#090e1a] border-r border-slate-800/60 flex flex-col justify-between shrink-0 hidden md:flex">
        <div>
          {/* Top Brand Block */}
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
              Retailer workspace
            </div>
          </div>

          {/* Navigation Menu */}
          <nav className="p-3 space-y-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.name;
              return (
                <button
                  key={item.name}
                  onClick={() => {
                    setActiveTab(item.name);
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

        {/* User Account Profile */}

        <div className="p-4 border-t border-slate-800/60">
          <div className="p-2.5 rounded-xl bg-[#0b1220] border border-slate-800/80">
            <div className="text-xs font-semibold text-white">
              Shree Ganesh Stores
            </div>

            <button
              type="button"
              onClick={handleLogout}
              className="flex w-full items-center gap-2 rounded-lg px-2 py-2 text-xs
    text-slate-400 transition-colors hover:bg-red-500/10 hover:text-red-400"
            >
              <LogOut className="h-4 w-4" />
              Sign out
            </button>
          </div>
        </div>
      </aside>

      {/* Main Workspace Area */}
      <main className="flex-1 flex flex-col min-w-0">
        {/* Top Navbar */}
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
          {/* Welcome Header with AI CTA */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h2 className="text-2xl font-bold text-white tracking-tight">
                Good morning, USER
              </h2>
              <p className="text-xs text-slate-400 mt-1">
                Your store is healthy. Here's what needs attention today.
              </p>
            </div>
            <button
              onClick={() => navigate("/retailer/ai-search")}
              className="px-4 py-2 bg-cyan-400 hover:bg-cyan-300 text-slate-950 rounded-xl font-bold text-xs flex items-center gap-2 shadow-[0_0_20px_rgba(6,182,212,0.25)] transition-all self-start sm:self-auto"
            >
              <Sparkles className="w-4 h-4" />
              Ask SmartTrade AI
            </button>
          </div>

          {/* Top Metrics Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Today's Sales */}
            <div className="bg-[#0b1220]/90 border border-slate-800/80 rounded-2xl p-4 flex flex-col justify-between">
              <div className="flex items-center justify-between text-xs text-slate-400">
                <span>Today's sales</span>
                <div className="w-6 h-6 rounded-md bg-emerald-950/80 text-emerald-400 border border-emerald-800/50 flex items-center justify-center">
                  <IndianRupee className="w-3.5 h-3.5" />
                </div>
              </div>
              <div className="mt-3">
                <div className="text-xl font-extrabold text-white">₹42,680</div>
                <div className="text-[10px] text-emerald-400 font-medium mt-1">
                  ↑ 12.4% vs last Thu
                </div>
              </div>
            </div>

            {/* Inventory Value */}
            <div className="bg-[#0b1220]/90 border border-slate-800/80 rounded-2xl p-4 flex flex-col justify-between">
              <div className="flex items-center justify-between text-xs text-slate-400">
                <span>Inventory value</span>
                <div className="w-6 h-6 rounded-md bg-cyan-950/80 text-cyan-400 border border-cyan-800/50 flex items-center justify-center">
                  <Boxes className="w-3.5 h-3.5" />
                </div>
              </div>
              <div className="mt-3">
                <div className="text-xl font-extrabold text-white">₹8.46L</div>
                <div className="text-[10px] text-slate-500 mt-1">
                  1,284 units · 186 SKUs
                </div>
              </div>
            </div>

            {/* Gross Margin */}
            <div className="bg-[#0b1220]/90 border border-slate-800/80 rounded-2xl p-4 flex flex-col justify-between">
              <div className="flex items-center justify-between text-xs text-slate-400">
                <span>Gross margin</span>
                <div className="w-6 h-6 rounded-md bg-cyan-950/80 text-cyan-400 border border-cyan-800/50 flex items-center justify-center">
                  <TrendingUp className="w-3.5 h-3.5" />
                </div>
              </div>
              <div className="mt-3">
                <div className="text-xl font-extrabold text-white">18.7%</div>
                <div className="text-[10px] text-cyan-400 font-medium mt-1">
                  ↑ 1.6 pts this month
                </div>
              </div>
            </div>

            {/* Credit Available */}
            <div className="bg-[#0b1220]/90 border border-slate-800/80 rounded-2xl p-4 flex flex-col justify-between">
              <div className="flex items-center justify-between text-xs text-slate-400">
                <span>Credit available</span>
                <div className="w-6 h-6 rounded-md bg-amber-950/80 text-amber-400 border border-amber-800/50 flex items-center justify-center">
                  <CreditCard className="w-3.5 h-3.5" />
                </div>
              </div>
              <div className="mt-3">
                <div className="text-xl font-extrabold text-white">₹1.25L</div>
                <div className="text-[10px] text-amber-400/90 font-medium mt-1">
                  Due 08 Oct
                </div>
              </div>
            </div>
          </div>

          {/* Middle Row: Bar Chart & AI Action Centre */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            {/* Sales & Demand Pulse Bar Chart (8 cols) */}
            <div className="lg:col-span-8 bg-[#0b1220]/90 border border-slate-800/80 rounded-2xl p-5 flex flex-col justify-between min-h-[260px]">
              <div>
                <h3 className="text-sm font-semibold text-white">
                  Sales and demand pulse
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Daily revenue · last 10 days
                </p>
              </div>

              {/* Bar Graph Visual */}
              <div className="pt-8 pb-2">
                <div className="h-32 flex items-end justify-between gap-2.5 px-2">
                  {chartHeights.map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 flex flex-col items-center h-full justify-end group"
                    >
                      <div
                        style={{ height: `${h}%` }}
                        className={`w-full rounded-t-md transition-all duration-300 ${
                          i === chartHeights.length - 1
                            ? "bg-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.4)]"
                            : "bg-slate-800/80 hover:bg-slate-700"
                        }`}
                      />
                    </div>
                  ))}
                </div>
                {/* Chart Timeline Axis */}
                <div className="flex justify-between text-[10px] text-slate-500 mt-3 border-t border-slate-800/60 pt-2 px-1">
                  <span>W1</span>
                  <span>W2</span>
                  <span>W3</span>
                  <span>W4</span>
                  <span className="text-cyan-400 font-semibold">W5</span>
                </div>
              </div>
            </div>

            {/* AI Action Centre (4 cols) */}
            <div className="lg:col-span-4 bg-[#0b1220]/90 border border-slate-800/80 rounded-2xl p-5 space-y-3.5 flex flex-col justify-between">
              <div>
                <h3 className="text-sm font-semibold text-white">
                  AI action centre
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Prioritised for profit
                </p>
              </div>

              <div className="space-y-2.5">
                {/* Action 1: Reorder */}
                <div className="p-3 rounded-xl bg-red-950/20 border border-red-900/40 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2.5 min-w-0">
                    <AlertTriangle className="w-4 h-4 text-red-400 shrink-0" />
                    <div className="truncate">
                      <div className="text-xs font-semibold text-white truncate">
                        Reorder Fortune Sunlite
                      </div>
                      <div className="text-[10px] text-red-400/90 truncate">
                        9 left · stockout in 22 hours
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => navigate("/retailer/product/1")}
                    className="px-2.5 py-1 rounded-lg bg-red-950 border border-red-800 text-red-400 text-[10px] font-bold hover:bg-red-900/80 shrink-0"
                  >
                    Order 48
                  </button>
                </div>

                {/* Action 2: Price Margin */}
                <div className="p-3 rounded-xl bg-amber-950/20 border border-amber-900/40 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2.5 min-w-0">
                    <Tag className="w-4 h-4 text-amber-400 shrink-0" />
                    <div className="truncate">
                      <div className="text-xs font-semibold text-white truncate">
                        Reduce Britannia Marie
                      </div>
                      <div className="text-[10px] text-amber-400/90 truncate">
                        ₹4 discount protects margin
                      </div>
                    </div>
                  </div>
                  <button className="px-2.5 py-1 rounded-lg bg-amber-950 border border-amber-800 text-amber-400 text-[10px] font-bold hover:bg-amber-900/80 shrink-0">
                    Review
                  </button>
                </div>

                {/* Action 3: Combine Orders */}
                <div className="p-3 rounded-xl bg-cyan-950/20 border border-cyan-900/40 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2.5 min-w-0">
                    <Layers className="w-4 h-4 text-cyan-400 shrink-0" />
                    <div className="truncate">
                      <div className="text-xs font-semibold text-white truncate">
                        Combine two orders
                      </div>
                      <div className="text-[10px] text-cyan-400/90 truncate">
                        Save ₹820 delivery
                      </div>
                    </div>
                  </div>
                  <button className="px-2.5 py-1 rounded-lg bg-cyan-950 border border-cyan-800 text-cyan-400 text-[10px] font-bold hover:bg-cyan-900/80 shrink-0">
                    Combine
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Row: Recent Orders Table & Store Health Widget */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            {/* Recent Orders Table (8 cols) */}
            <div className="lg:col-span-8 bg-[#0b1220]/90 border border-slate-800/80 rounded-2xl p-5 space-y-4">
              <h3 className="text-sm font-semibold text-white">
                Recent orders
              </h3>

              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse min-w-[500px]">
                  <thead>
                    <tr className="border-b border-slate-800/80 text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                      <th className="pb-2.5">ORDER</th>
                      <th className="pb-2.5">SUPPLIER</th>
                      <th className="pb-2.5">PLACED</th>
                      <th className="pb-2.5">TOTAL</th>
                      <th className="pb-2.5 text-right">STATUS</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/40 text-xs">
                    {recentOrders.map((ord) => (
                      <tr
                        key={ord.id}
                        className="hover:bg-slate-900/30 transition-colors"
                      >
                        <td className="py-3 font-semibold text-white">
                          {ord.id}
                        </td>
                        <td className="py-3 text-slate-300">{ord.supplier}</td>
                        <td className="py-3 text-slate-400 text-[11px]">
                          {ord.placed}
                        </td>
                        <td className="py-3 font-semibold text-white">
                          ₹{ord.total}
                        </td>
                        <td className="py-3 text-right">
                          <span
                            className={`px-2.5 py-1 rounded-md border text-[9px] font-bold tracking-wider uppercase inline-block ${ord.statusStyle}`}
                          >
                            • {ord.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Store Health Score Widget (4 cols) */}
            <div className="lg:col-span-4 bg-[#0b1220]/90 border border-slate-800/80 rounded-2xl p-5 flex flex-col justify-between items-center text-center">
              <div className="w-full text-left">
                <h3 className="text-sm font-semibold text-white">
                  Store health
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Operational score
                </p>
              </div>

              {/* Radial Donut Meter */}
              <div className="my-4 relative w-28 h-28 flex items-center justify-center">
                <svg
                  className="w-full h-full transform -rotate-90"
                  viewBox="0 0 36 36"
                >
                  {/* Track Circle */}
                  <path
                    className="text-slate-800"
                    strokeWidth="3.5"
                    stroke="currentColor"
                    fill="none"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                  {/* Progress Circle (86%) */}
                  <path
                    className="text-cyan-400"
                    strokeDasharray="86, 100"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    stroke="currentColor"
                    fill="none"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                </svg>
                {/* Center Value */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-2xl font-extrabold text-white">86</span>
                </div>
              </div>

              {/* Footer Indicator */}
              <div className="w-full space-y-1">
                <div className="inline-block px-2.5 py-0.5 rounded-md bg-emerald-950/80 border border-emerald-800/60 text-emerald-400 text-[10px] font-bold tracking-wider uppercase">
                  • STRONG
                </div>
                <div className="text-[10px] text-slate-500 pt-1">
                  Availability improved 7 points this month.
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
