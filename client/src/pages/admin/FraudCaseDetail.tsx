import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  Radio,
  Search,
  Bell,
  AlertTriangle,
  Ban,
  LayoutDashboard,
  FileCheck,
  Users,
  ArrowLeftRight,
  DollarSign,
  ShieldCheck,
  Sliders,
  ArrowLeft,
} from "lucide-react";

export default function FraudCaseDetail() {
  const navigate = useNavigate();
  const { caseId } = useParams<{ caseId: string }>();
  const [activeNav, setActiveNav] = useState("Fraud Monitor");
  const [investigatorNote, setInvestigatorNote] = useState("");

  const adminNavItems = [
    { name: "Overview", icon: LayoutDashboard, path: "/admin/dashboard" },
    { name: "KYC Review", icon: FileCheck, path: "/admin/kyc" },
    { name: "Users", icon: Users, path: "/admin/users" },
    { name: "Transactions", icon: ArrowLeftRight, path: "/admin/transactions" },
    { name: "Revenue", icon: DollarSign, path: "/admin/revenue" },
    { name: "Fraud Monitor", icon: ShieldCheck, path: "/admin/fraud" },
    { name: "System", icon: Sliders, path: "/retailer/settings" },
  ];

  // Event Timeline Items
  const timelineEvents = [
    {
      time: "18:18",
      title: "Known-device login",
      detail: "Pune",
      status: null,
      dotColor: "bg-cyan-400",
    },
    {
      time: "18:23",
      title: "New device enrolled",
      detail: "Nashik IP",
      status: null,
      dotColor: "bg-cyan-400",
    },
    {
      time: "18:26",
      title: "Beneficiary changed",
      detail: "ICICI •••• 4408",
      status: "RISK",
      dotColor: "bg-rose-500",
    },
    {
      time: "18:29",
      title: "High-value orders",
      detail: "₹2,84,600",
      status: "RISK",
      dotColor: "bg-rose-500",
    },
    {
      time: "18:34",
      title: "Payout blocked",
      detail: "Risk engine",
      status: "RISK",
      dotColor: "bg-rose-500",
    },
  ];

  // Linked Transactions
  const linkedTransactions = [
    {
      id: "TX-829104",
      counterparty: "Shivam Retail",
      amount: "₹1,12,400",
      time: "10:29",
      status: "HELD",
    },
    {
      id: "TX-829110",
      counterparty: "Om Mini Mart",
      amount: "₹94,800",
      time: "10:31",
      status: "HELD",
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
          {/* Breadcrumb / Back Button & Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <button
                onClick={() => navigate("/admin/fraud")}
                className="p-2 rounded-xl bg-[#0b1220] border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-all"
                title="Back to Fraud Monitor"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>

              <div>
                <h2 className="text-2xl font-bold text-white tracking-tight">
                  Case {caseId || "FR-8421"}
                </h2>
                <p className="text-xs text-slate-400 mt-0.5">
                  Pragati Distributors · ₹2,84,600 exposure
                </p>
              </div>
            </div>

            <button className="px-4 py-2.5 bg-rose-500/90 hover:bg-rose-500 text-white font-bold text-xs rounded-xl flex items-center gap-2 shadow-[0_0_20px_rgba(244,63,94,0.3)] transition-all">
              <Ban className="w-3.5 h-3.5 stroke-[2.5]" />
              Restrict account
            </button>
          </div>

          {/* Account Takeover Warning Banner */}
          <div className="bg-rose-950/40 border border-rose-900/50 rounded-2xl p-4 flex items-start gap-3">
            <AlertTriangle className="w-4 h-4 text-rose-400 mt-0.5 shrink-0" />
            <div>
              <h4 className="text-xs font-bold text-rose-200">
                High-confidence account takeover
              </h4>
              <p className="text-[11px] text-rose-400/80 mt-0.5">
                New device, impossible travel and beneficiary change in 11
                minutes.
              </p>
            </div>
          </div>

          {/* Grid Layout for Timeline, Linked Transactions & Risk Panels */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Left Column (8 Cols): Event Timeline & Linked Transactions */}
            <div className="lg:col-span-8 space-y-6">
              {/* Event Timeline Card */}
              <div className="bg-[#0b1220]/80 border border-slate-800/80 rounded-2xl p-6 space-y-4">
                <div>
                  <h3 className="text-sm font-bold text-white">
                    Event timeline
                  </h3>
                  <p className="text-[10px] text-slate-500 font-mono mt-0.5">
                    01 Oct 2026 · IST
                  </p>
                </div>

                <div className="space-y-3 pt-2">
                  {timelineEvents.map((event, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between py-1 text-xs"
                    >
                      <div className="flex items-center gap-4">
                        <span className="text-slate-500 font-mono text-[11px] w-10">
                          {event.time}
                        </span>
                        <span
                          className={`w-2 h-2 rounded-full ${event.dotColor}`}
                        />
                        <span className="text-slate-200 font-medium">
                          {event.title}
                        </span>
                      </div>

                      <div className="flex items-center gap-3">
                        <span className="text-slate-400 font-mono text-[11px]">
                          {event.detail}
                        </span>
                        {event.status && (
                          <span className="px-2 py-0.5 rounded border border-rose-800/80 bg-rose-950/80 text-rose-400 text-[10px] font-bold tracking-wider">
                            • {event.status}
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Linked Transactions Table Card */}
              <div className="bg-[#0b1220]/80 border border-slate-800/80 rounded-2xl p-6 space-y-4">
                <div>
                  <h3 className="text-sm font-bold text-white">
                    Linked transactions
                  </h3>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="border-b border-slate-800/80 text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                        <th className="py-3 px-4">TRANSACTION</th>
                        <th className="py-3 px-4">COUNTERPARTY</th>
                        <th className="py-3 px-4">AMOUNT</th>
                        <th className="py-3 px-4">TIME</th>
                        <th className="py-3 px-4">STATUS</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800/50 text-xs">
                      {linkedTransactions.map((tx, idx) => (
                        <tr
                          key={idx}
                          className="hover:bg-slate-900/40 transition-colors"
                        >
                          <td className="py-4 px-4 font-bold text-white font-mono">
                            {tx.id}
                          </td>
                          <td className="py-4 px-4 text-slate-300 font-medium">
                            {tx.counterparty}
                          </td>
                          <td className="py-4 px-4 font-bold text-white font-mono">
                            {tx.amount}
                          </td>
                          <td className="py-4 px-4 text-slate-400 font-mono">
                            {tx.time}
                          </td>
                          <td className="py-4 px-4">
                            <span className="px-2.5 py-0.5 rounded border border-rose-800/80 bg-rose-950/80 text-rose-400 text-[10px] font-bold uppercase tracking-wider">
                              • {tx.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Right Column (4 Cols): Risk Score, Entity Profile & Investigator Note */}
            <div className="lg:col-span-4 space-y-6">
              {/* Risk Score Circle Card */}
              <div className="bg-[#0b1220]/80 border border-slate-800/80 rounded-2xl p-6 flex flex-col items-center justify-center space-y-4 text-center">
                <div className="w-full text-left">
                  <h3 className="text-sm font-bold text-white">Risk score</h3>
                </div>

                <div className="relative w-28 h-28 flex items-center justify-center my-2">
                  <svg
                    className="w-full h-full transform -rotate-90"
                    viewBox="0 0 36 36"
                  >
                    <path
                      className="text-slate-800"
                      strokeWidth="3"
                      stroke="currentColor"
                      fill="none"
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                    <path
                      className="text-rose-500"
                      strokeDasharray="98, 100"
                      strokeWidth="3.5"
                      strokeLinecap="round"
                      stroke="currentColor"
                      fill="none"
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                  </svg>
                  <span className="absolute text-3xl font-extrabold text-white font-mono">
                    94
                  </span>
                </div>

                <span className="px-3 py-1 rounded-full bg-rose-950/80 border border-rose-800/80 text-rose-400 text-[11px] font-bold tracking-wider uppercase">
                  • CRITICAL · 98.7%
                </span>
              </div>

              {/* Entity Profile Metrics */}
              <div className="bg-[#0b1220]/80 border border-slate-800/80 rounded-2xl p-6 space-y-4">
                <h3 className="text-sm font-bold text-white">Entity profile</h3>

                <div className="space-y-3 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400 font-medium">KYC</span>
                    <span className="text-white font-bold">
                      Verified · 2 years
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400 font-medium">
                      Lifetime GMV
                    </span>
                    <span className="text-white font-bold font-mono">
                      ₹84.6L
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400 font-medium">
                      Prior cases
                    </span>
                    <span className="text-white font-bold font-mono">0</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400 font-medium">
                      Payout hold
                    </span>
                    <span className="text-white font-bold font-mono">
                      ₹12.8L
                    </span>
                  </div>
                </div>
              </div>

              {/* Investigator Note Card */}
              <div className="bg-[#0b1220]/80 border border-slate-800/80 rounded-2xl p-6 space-y-4">
                <h3 className="text-sm font-bold text-white">
                  Investigator note
                </h3>

                <textarea
                  rows={3}
                  value={investigatorNote}
                  onChange={(e) => setInvestigatorNote(e.target.value)}
                  placeholder="Add decision rationale..."
                  className="w-full bg-[#070b14] border border-slate-800 rounded-xl p-3 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-500 resize-none"
                />

                <button className="w-full py-2.5 bg-[#122238] hover:bg-[#182d4a] text-cyan-400 font-bold text-xs rounded-xl border border-cyan-800/40 transition-all">
                  Escalate to Risk L2
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
