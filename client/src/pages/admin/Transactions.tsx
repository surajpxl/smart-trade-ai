import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
  Filter,
  Download,
  Eye,
  X,
  Copy,
  Check,
  Clock,
  RefreshCcw,
  ExternalLink,
  ChevronRight,
  ArrowUpRight,
  ArrowDownRight,
  Ban,
  Shield
} from 'lucide-react';

interface Transaction {
  id: string;
  orderId: string;
  buyer: {
    name: string;
    businessName: string;
    gstin: string;
    location: string;
  };
  seller: {
    name: string;
    businessName: string;
    gstin: string;
  };
  amount: number;
  fee: number;
  tax: number;
  payout: number;
  paymentMethod: 'UPI' | 'NEFT/RTGS' | 'Credit Card' | 'Escrow Wallet';
  status: 'Completed' | 'Pending' | 'Flagged' | 'Failed' | 'Refunded';
  utr: string;
  timestamp: string;
  riskScore: number; // 0 - 100
  riskReason?: string;
}

export default function TransactionsPage() {
  const navigate = useNavigate();
  const [activeNav, setActiveNav] = useState('Transactions');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedStatus, setSelectedStatus] = useState<string>('All');
  const [selectedMethod, setSelectedMethod] = useState<string>('All');
  const [selectedTxn, setSelectedTxn] = useState<Transaction | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const adminNavItems = [
    { name: 'Overview', icon: LayoutDashboard, path: '/admin/dashboard' },
    { name: 'KYC Review', icon: FileCheck, path: '/admin/kyc' },
    { name: 'Users', icon: Users, path: '/admin/users' },
    { name: 'Transactions', icon: ArrowLeftRight, path: '/admin/transactions' },
    { name: 'Revenue', icon: DollarSign, path: '/admin/revenue' },
    { name: 'Fraud Monitor', icon: ShieldCheck, path: '/admin/fraud' },
    { name: 'System', icon: Sliders, path: '/retailer/settings' },
  ];

  // Mock Transactions Data
  const mockTransactions: Transaction[] = [
    {
      id: 'TXN-984201',
      orderId: 'ORD-88231',
      buyer: {
        name: 'Suresh Kumar',
        businessName: 'Apex Mart & Kirana',
        gstin: '27AABCU9603R1ZM',
        location: 'Hadapsar, Pune',
      },
      seller: {
        name: 'Aarav Sharma',
        businessName: 'Aarav Foods Pvt Ltd',
        gstin: '27AAACA1122B1Z3',
      },
      amount: 148500,
      fee: 2970,
      tax: 534.6,
      payout: 144995.4,
      paymentMethod: 'UPI',
      status: 'Completed',
      utr: 'UTR39482019482',
      timestamp: 'Today, 17:42',
      riskScore: 12,
    },
    {
      id: 'TXN-984202',
      orderId: 'ORD-88232',
      buyer: {
        name: 'Ramesh Patel',
        businessName: 'Patel Supermarket',
        gstin: '27AABCP1204K1ZQ',
        location: 'Pimpri, Pune',
      },
      seller: {
        name: 'Rajesh Gupta',
        businessName: 'Swastik Traders',
        gstin: '27AAACS4433C1Z8',
      },
      amount: 420000,
      fee: 8400,
      tax: 1512,
      payout: 410088,
      paymentMethod: 'NEFT/RTGS',
      status: 'Flagged',
      utr: 'UTR88392019283',
      timestamp: 'Today, 16:15',
      riskScore: 88,
      riskReason: 'High frequency transaction velocity from unverified IP range.',
    },
    {
      id: 'TXN-984203',
      orderId: 'ORD-88233',
      buyer: {
        name: 'Vikas Joshi',
        businessName: 'Joshi Wholesale',
        gstin: '27AABCJ3321L1ZP',
        location: 'Kothrud, Pune',
      },
      seller: {
        name: 'Aarav Sharma',
        businessName: 'Aarav Foods Pvt Ltd',
        gstin: '27AAACA1122B1Z3',
      },
      amount: 82400,
      fee: 1648,
      tax: 296.64,
      payout: 80455.36,
      paymentMethod: 'Escrow Wallet',
      status: 'Pending',
      utr: 'UTR10293847561',
      timestamp: 'Today, 15:30',
      riskScore: 24,
    },
    {
      id: 'TXN-984204',
      orderId: 'ORD-88234',
      buyer: {
        name: 'Anil Deshmukh',
        businessName: 'Shivaji Traders',
        gstin: '27AABCD8822M1ZX',
        location: 'Chinchwad, Pune',
      },
      seller: {
        name: 'Sunil Mehta',
        businessName: 'Mehta Oil Mill',
        gstin: '27AAACM9911N1ZY',
      },
      amount: 310000,
      fee: 6200,
      tax: 1116,
      payout: 302684,
      paymentMethod: 'NEFT/RTGS',
      status: 'Completed',
      utr: 'UTR77281920394',
      timestamp: 'Today, 14:05',
      riskScore: 18,
    },
    {
      id: 'TXN-984205',
      orderId: 'ORD-88235',
      buyer: {
        name: 'Manoj Verma',
        businessName: 'Verma Provisions',
        gstin: '27AABCV4455P1ZR',
        location: 'Baner, Pune',
      },
      seller: {
        name: 'Rajesh Gupta',
        businessName: 'Swastik Traders',
        gstin: '27AAACS4433C1Z8',
      },
      amount: 65000,
      fee: 1300,
      tax: 234,
      payout: 63466,
      paymentMethod: 'Credit Card',
      status: 'Failed',
      utr: 'UTR55443322110',
      timestamp: 'Today, 12:20',
      riskScore: 45,
      riskReason: 'Bank gateway timeout during 2FA confirmation.',
    },
    {
      id: 'TXN-984206',
      orderId: 'ORD-88236',
      buyer: {
        name: 'Ganesh Shinde',
        businessName: 'Ganesh Kirana Stores',
        gstin: '27AABCS7788Q1ZT',
        location: 'Wagholi, Pune',
      },
      seller: {
        name: 'Aarav Sharma',
        businessName: 'Aarav Foods Pvt Ltd',
        gstin: '27AAACA1122B1Z3',
      },
      amount: 112000,
      fee: 2240,
      tax: 403.2,
      payout: 109356.8,
      paymentMethod: 'UPI',
      status: 'Refunded',
      utr: 'UTR99887766554',
      timestamp: 'Yesterday, 18:50',
      riskScore: 8,
    },
  ];

  // Filtering Logic
  const filteredTransactions = mockTransactions.filter((txn) => {
    const matchesSearch =
      txn.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      txn.orderId.toLowerCase().includes(searchQuery.toLowerCase()) ||
      txn.buyer.businessName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      txn.seller.businessName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      txn.utr.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesStatus =
      selectedStatus === 'All' || txn.status === selectedStatus;

    const matchesMethod =
      selectedMethod === 'All' || txn.paymentMethod === selectedMethod;

    return matchesSearch && matchesStatus && matchesMethod;
  });

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(text);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const getStatusBadge = (status: Transaction['status']) => {
    switch (status) {
      case 'Completed':
        return 'bg-emerald-950/80 text-emerald-400 border-emerald-800/80';
      case 'Pending':
        return 'bg-amber-950/80 text-amber-400 border-amber-800/80';
      case 'Flagged':
        return 'bg-rose-950/80 text-rose-400 border-rose-800/80 animate-pulse';
      case 'Failed':
        return 'bg-slate-800 text-slate-400 border-slate-700';
      case 'Refunded':
        return 'bg-cyan-950/80 text-cyan-400 border-cyan-800/80';
      default:
        return 'bg-slate-800 text-slate-400 border-slate-700';
    }
  };

  return (
    <div className="min-h-screen bg-[#070b14] text-slate-100 flex font-sans selection:bg-cyan-500 selection:text-black">
      {/* Sidebar Navigation */}
      <aside className="w-64 bg-[#090e1a] border-r border-slate-800/60 flex flex-col justify-between shrink-0 hidden md:flex">
        <div>
          {/* Top Brand Indicator */}
          <div className="p-5 border-b border-slate-800/60">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                <Radio className="w-4 h-4 animate-pulse" />
              </div>
              <div>
                <h1 className="text-sm font-bold text-white tracking-tight">SmartTrade</h1>
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

        {/* Footer Account Info */}
        <div className="p-4 border-t border-slate-800/60">
          <div className="p-2.5 rounded-xl bg-[#0b1220] border border-slate-800/80">
            <div className="text-xs font-semibold text-white">SmartTrade Operations</div>
            <div className="text-[10px] text-slate-500 mt-0.5">Settings · Help · Sign out</div>
          </div>
        </div>
      </aside>

      {/* Main Container */}
      <main className="flex-1 flex flex-col min-w-0">
        {/* Top Header */}
        <header className="h-16 px-6 border-b border-slate-800/60 flex items-center justify-between gap-4 bg-[#070b14]/80 backdrop-blur-md sticky top-0 z-20">
          <div className="text-xs text-slate-400 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            Pune Region · Live Settlement Engine Active
          </div>

          <div className="flex items-center gap-3 flex-1 max-w-md justify-end">
            <div className="relative w-full max-w-xs">
              <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
              <input
                type="text"
                placeholder="Search Txn ID, Order, UTR..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
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
          {/* Section Heading & Actions */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h2 className="text-2xl font-bold text-white tracking-tight">
                Transaction Audit & Settlements
              </h2>
              <p className="text-xs text-slate-400 mt-1">
                Real-time ledger, escrow verification, and banking UTR tracking across the Pune network
              </p>
            </div>

            <div className="flex items-center gap-3">
              <button className="px-3.5 py-2 rounded-xl bg-[#0b1220] border border-slate-800 text-xs text-slate-300 hover:text-white flex items-center gap-2 transition-all">
                <RefreshCcw className="w-3.5 h-3.5" />
                Sync Bank Ledger
              </button>
              <button className="px-3.5 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs flex items-center gap-2 shadow-[0_0_20px_rgba(6,182,212,0.3)] transition-all">
                <Download className="w-3.5 h-3.5" />
                Export Ledger
              </button>
            </div>
          </div>

          {/* Top 4 KPI Summary Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-[#0b1220]/80 border border-slate-800/80 rounded-2xl p-5 flex flex-col justify-between">
              <div className="flex items-center justify-between">
                <span className="text-xs text-slate-400 font-medium">Total Volume Today</span>
                <div className="p-2 rounded-xl border bg-emerald-500/10 border-emerald-500/30">
                  <IndianRupee className="w-4 h-4 text-emerald-400" />
                </div>
              </div>
              <div className="mt-4">
                <div className="text-2xl font-bold text-white font-mono">₹1.14 Cr</div>
                <div className="text-[11px] font-semibold mt-1 text-emerald-400">↑ 14.2% vs yesterday</div>
              </div>
            </div>

            <div className="bg-[#0b1220]/80 border border-slate-800/80 rounded-2xl p-5 flex flex-col justify-between">
              <div className="flex items-center justify-between">
                <span className="text-xs text-slate-400 font-medium">Settlement Success</span>
                <div className="p-2 rounded-xl border bg-cyan-500/10 border-cyan-500/30">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                </div>
              </div>
              <div className="mt-4">
                <div className="text-2xl font-bold text-white font-mono">99.2%</div>
                <div className="text-[11px] font-semibold mt-1 text-cyan-400">Average time: 1.2s</div>
              </div>
            </div>

            <div className="bg-[#0b1220]/80 border border-slate-800/80 rounded-2xl p-5 flex flex-col justify-between">
              <div className="flex items-center justify-between">
                <span className="text-xs text-slate-400 font-medium">Escrow Wallet Holds</span>
                <div className="p-2 rounded-xl border bg-amber-500/10 border-amber-500/30">
                  <Clock className="w-4 h-4 text-amber-400" />
                </div>
              </div>
              <div className="mt-4">
                <div className="text-2xl font-bold text-white font-mono">₹18.40 L</div>
                <div className="text-[11px] font-semibold mt-1 text-amber-400">14 pending fulfillment</div>
              </div>
            </div>

            <div className="bg-[#0b1220]/80 border border-slate-800/80 rounded-2xl p-5 flex flex-col justify-between">
              <div className="flex items-center justify-between">
                <span className="text-xs text-slate-400 font-medium">Flagged Exposure</span>
                <div className="p-2 rounded-xl border bg-rose-500/10 border-rose-500/30">
                  <ShieldAlert className="w-4 h-4 text-rose-400" />
                </div>
              </div>
              <div className="mt-4">
                <div className="text-2xl font-bold text-white font-mono">₹4.20 L</div>
                <div className="text-[11px] font-semibold mt-1 text-rose-400">1 transaction held</div>
              </div>
            </div>
          </div>

          {/* Filters Bar */}
          <div className="bg-[#0b1220]/80 border border-slate-800/80 rounded-2xl p-4 flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Status Pills */}
            <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
              {['All', 'Completed', 'Pending', 'Flagged', 'Failed', 'Refunded'].map((status) => (
                <button
                  key={status}
                  onClick={() => setSelectedStatus(status)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                    selectedStatus === status
                      ? 'bg-cyan-500 text-slate-950 shadow-[0_0_12px_rgba(6,182,212,0.3)]'
                      : 'text-slate-400 hover:text-white bg-slate-900/60 border border-slate-800'
                  }`}
                >
                  {status}
                </button>
              ))}
            </div>

            {/* Payment Method Select Dropdown */}
            <div className="flex items-center gap-3 w-full md:w-auto justify-end">
              <div className="flex items-center gap-2 text-xs text-slate-400">
                <Filter className="w-3.5 h-3.5" />
                <span>Method:</span>
              </div>
              <select
                value={selectedMethod}
                onChange={(e) => setSelectedMethod(e.target.value)}
                className="bg-slate-900 border border-slate-800 text-xs text-slate-200 rounded-lg px-3 py-1.5 focus:outline-none focus:border-cyan-500"
              >
                <option value="All">All Payment Types</option>
                <option value="UPI">UPI Instant</option>
                <option value="NEFT/RTGS">NEFT / RTGS</option>
                <option value="Escrow Wallet">Escrow Wallet</option>
                <option value="Credit Card">Credit Card</option>
              </select>
            </div>
          </div>

          {/* Transactions Table */}
          <div className="bg-[#0b1220]/80 border border-slate-800/80 rounded-2xl overflow-hidden flex-1 flex flex-col">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-slate-800/80 text-[10px] font-bold text-slate-500 uppercase tracking-wider bg-slate-900/40">
                    <th className="py-3.5 px-4">TRANSACTION / UTR</th>
                    <th className="py-3.5 px-4">BUYER (RETAILER)</th>
                    <th className="py-3.5 px-4">SELLER (DISTRIBUTOR)</th>
                    <th className="py-3.5 px-4">METHOD</th>
                    <th className="py-3.5 px-4">GROSS AMOUNT</th>
                    <th className="py-3.5 px-4">STATUS</th>
                    <th className="py-3.5 px-4 text-right">ACTION</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/50 text-xs">
                  {filteredTransactions.length === 0 ? (
                    <tr>
                      <td colSpan={7} className="py-12 text-center text-slate-500 text-xs">
                        No transactions found matching your filter criteria.
                      </td>
                    </tr>
                  ) : (
                    filteredTransactions.map((txn) => (
                      <tr key={txn.id} className="hover:bg-slate-900/50 transition-colors">
                        <td className="py-4 px-4">
                          <div className="font-bold text-white font-mono flex items-center gap-2">
                            {txn.id}
                            <button
                              onClick={() => copyToClipboard(txn.id)}
                              className="text-slate-500 hover:text-cyan-400 transition-colors"
                              title="Copy Transaction ID"
                            >
                              {copiedId === txn.id ? (
                                <Check className="w-3 h-3 text-emerald-400" />
                              ) : (
                                <Copy className="w-3 h-3" />
                              )}
                            </button>
                          </div>
                          <div className="text-[10px] text-slate-500 font-mono mt-0.5">{txn.utr}</div>
                          <div className="text-[9px] text-slate-600 mt-0.5">{txn.timestamp}</div>
                        </td>

                        <td className="py-4 px-4">
                          <div className="font-semibold text-slate-200">{txn.buyer.businessName}</div>
                          <div className="text-[10px] text-slate-500">{txn.buyer.location}</div>
                        </td>

                        <td className="py-4 px-4">
                          <div className="font-semibold text-slate-200">{txn.seller.businessName}</div>
                          <div className="text-[10px] text-slate-500 font-mono">{txn.seller.gstin}</div>
                        </td>

                        <td className="py-4 px-4">
                          <span className="px-2 py-1 rounded-md bg-slate-900 border border-slate-800 text-[10px] font-mono text-slate-300">
                            {txn.paymentMethod}
                          </span>
                        </td>

                        <td className="py-4 px-4 font-bold text-white font-mono">
                          ₹{txn.amount.toLocaleString('en-IN')}
                        </td>

                        <td className="py-4 px-4">
                          <span className={`px-2.5 py-0.5 rounded border text-[10px] font-bold uppercase tracking-wider ${getStatusBadge(txn.status)}`}>
                            • {txn.status}
                          </span>
                        </td>

                        <td className="py-4 px-4 text-right">
                          <button
                            onClick={() => setSelectedTxn(txn)}
                            className="p-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 text-cyan-400 hover:text-cyan-300 transition-all inline-flex items-center gap-1 text-xs font-semibold"
                          >
                            <Eye className="w-3.5 h-3.5" />
                            <span>Audit</span>
                          </button>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>

      {/* Transaction Details & Audit Modal Slide-Over */}
      {selectedTxn && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex justify-end">
          <div className="w-full max-w-xl bg-[#090e1a] border-l border-slate-800 h-full flex flex-col justify-between overflow-y-auto animate-in slide-in-from-right duration-200">
            {/* Modal Header */}
            <div>
              <div className="p-6 border-b border-slate-800/80 flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-lg font-bold text-white font-mono">{selectedTxn.id}</h3>
                    <span className={`px-2 py-0.5 rounded border text-[10px] font-bold uppercase ${getStatusBadge(selectedTxn.status)}`}>
                      {selectedTxn.status}
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 mt-1">Associated Order: {selectedTxn.orderId}</p>
                </div>
                <button
                  onClick={() => setSelectedTxn(null)}
                  className="p-1.5 rounded-lg bg-slate-900 text-slate-400 hover:text-white border border-slate-800"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-6 space-y-6">
                {/* Risk Signal Alert Box if Flagged */}
                {selectedTxn.status === 'Flagged' && (
                  <div className="p-4 rounded-xl bg-rose-950/40 border border-rose-800/60 space-y-2">
                    <div className="flex items-center gap-2 text-rose-400 font-bold text-xs">
                      <ShieldAlert className="w-4 h-4" />
                      <span>AI Risk Monitor Detection (Risk Score: {selectedTxn.riskScore}/100)</span>
                    </div>
                    <p className="text-xs text-rose-300/80 leading-relaxed">
                      {selectedTxn.riskReason}
                    </p>
                  </div>
                )}

                {/* Amount Breakdown Card */}
                <div className="p-4 rounded-xl bg-[#0b1220] border border-slate-800 space-y-3">
                  <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Settlement Financial Breakdown</div>
                  <div className="space-y-2 text-xs">
                    <div className="flex justify-between">
                      <span className="text-slate-400">Gross Buyer Payment:</span>
                      <span className="font-mono text-white font-bold">₹{selectedTxn.amount.toLocaleString('en-IN')}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">SmartTrade Fee (2%):</span>
                      <span className="font-mono text-cyan-400">-₹{selectedTxn.fee.toLocaleString('en-IN')}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">GST on Platform Fee (18%):</span>
                      <span className="font-mono text-cyan-400">-₹{selectedTxn.tax.toLocaleString('en-IN')}</span>
                    </div>
                    <div className="pt-2 border-t border-slate-800/80 flex justify-between text-sm">
                      <span className="font-bold text-slate-200">Net Seller Payout:</span>
                      <span className="font-mono font-bold text-emerald-400">₹{selectedTxn.payout.toLocaleString('en-IN')}</span>
                    </div>
                  </div>
                </div>

                {/* Banking & Gateway Technical Reference */}
                <div className="space-y-3">
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Banking & Gateway Meta</h4>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800/80">
                      <div className="text-[10px] text-slate-500">Bank UTR Reference</div>
                      <div className="text-xs font-mono font-bold text-slate-200 mt-1 flex items-center justify-between">
                        <span className="truncate">{selectedTxn.utr}</span>
                        <button onClick={() => copyToClipboard(selectedTxn.utr)}>
                          <Copy className="w-3 h-3 text-slate-400 hover:text-white" />
                        </button>
                      </div>
                    </div>

                    <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800/80">
                      <div className="text-[10px] text-slate-500">Payment Gateway</div>
                      <div className="text-xs font-semibold text-slate-200 mt-1">Razorpay Business Nod</div>
                    </div>
                  </div>
                </div>

                {/* Parties Involved */}
                <div className="space-y-3">
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Counterparties</h4>
                  <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800 space-y-3 text-xs">
                    <div>
                      <span className="text-[10px] text-cyan-400 uppercase font-bold">Buyer / Retailer</span>
                      <div className="font-bold text-white mt-0.5">{selectedTxn.buyer.businessName}</div>
                      <div className="text-[11px] text-slate-400">GSTIN: {selectedTxn.buyer.gstin} · {selectedTxn.buyer.location}</div>
                    </div>
                    <div className="border-t border-slate-800/80 pt-3">
                      <span className="text-[10px] text-cyan-400 uppercase font-bold">Seller / Distributor</span>
                      <div className="font-bold text-white mt-0.5">{selectedTxn.seller.businessName}</div>
                      <div className="text-[11px] text-slate-400">GSTIN: {selectedTxn.seller.gstin}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Modal Actions Footer */}
            <div className="p-6 border-t border-slate-800/80 bg-[#070b14] space-y-2">
              {selectedTxn.status === 'Flagged' ? (
                <div className="flex gap-3">
                  <button className="flex-1 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs flex items-center justify-center gap-2 transition-all">
                    <ShieldCheck className="w-4 h-4" />
                    Approve & Clear Risk Flag
                  </button>
                  <button className="flex-1 py-2.5 rounded-xl bg-rose-950/80 hover:bg-rose-900 border border-rose-800 text-rose-300 font-bold text-xs flex items-center justify-center gap-2 transition-all">
                    <Ban className="w-4 h-4" />
                    Freeze Escrow Funds
                  </button>
                </div>
              ) : (
                <div className="flex gap-3">
                  <button className="flex-1 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 font-semibold text-xs transition-all">
                    Re-verify Bank UTR
                  </button>
                  <button className="flex-1 py-2.5 rounded-xl bg-cyan-950/60 hover:bg-cyan-900/80 border border-cyan-800/80 text-cyan-300 font-semibold text-xs transition-all">
                    Download Tax Receipt
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}