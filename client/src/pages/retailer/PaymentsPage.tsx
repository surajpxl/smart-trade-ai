import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Radio, 
  Search, 
  Bell, 
  Sparkles, 
  Users, 
  LayoutDashboard, 
  Boxes, 
  ShoppingBag, 
  CreditCard, 
  Store,
  ArrowUpRight,
  ArrowDownLeft,
  Clock,
  CheckCircle2,
  AlertCircle,
  ShieldCheck,
  Wallet,
  Download,
  Building2,
  QrCode
} from 'lucide-react';

export default function PaymentsPage() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('Payments');
  const [searchQuery, setSearchQuery] = useState('');
  const [filterType, setFilterType] = useState('All');

  const navItems = [
    { name: 'Overview', icon: LayoutDashboard, path: '/retailer/dashboard' },
    { name: 'Marketplace', icon: Store, path: '/marketplace' },
    { name: 'AI Search', icon: Sparkles, path: '/retailer/ai-search' },
    { name: 'Inventory', icon: Boxes, path: '/retailer/inventory' },
    { name: 'Orders', icon: ShoppingBag, path: '/retailer/orders' },
    { name: 'Suppliers', icon: Users, path: '/retailer/suppliers' },
    { name: 'Payments', icon: CreditCard, path: '/retailer/payments' },
  ];

  const transactions = [
    {
      id: 'TXN-8921',
      orderId: 'ORD-9012',
      supplier: 'Aarav Foods Pvt Ltd',
      amount: '₹18,400',
      type: 'Invoice Settlement',
      method: 'SmartTrade Credit',
      date: '10 May 2026, 02:30 PM',
      status: 'PAID',
    },
    {
      id: 'TXN-8920',
      orderId: 'ORD-9011',
      supplier: 'Metro FMCG Distribution',
      amount: '₹8,250',
      type: 'Advance Pay',
      method: 'UPI (GPay)',
      date: '08 May 2026, 11:15 AM',
      status: 'PAID',
    },
    {
      id: 'TXN-8919',
      orderId: 'ORD-9008',
      supplier: 'Sahyadri Wholesale',
      amount: '₹14,100',
      type: 'Credit Due',
      method: 'Net Banking',
      date: 'Due in 3 Days',
      status: 'PENDING',
    },
    {
      id: 'TXN-8918',
      orderId: 'ORD-8995',
      supplier: 'Kirloskar Personal Care',
      amount: '₹5,600',
      type: 'Direct Refund',
      method: 'Wallet Credit',
      date: '02 May 2026, 04:45 PM',
      status: 'REFUNDED',
    },
  ];

  const pendingInvoices = [
    {
      invoiceId: 'INV-2026-088',
      supplier: 'Sahyadri Wholesale',
      amount: '₹14,100',
      dueDate: '13 May 2026',
      daysLeft: 3,
      creditPeriod: '14 Days Net',
    },
    {
      invoiceId: 'INV-2026-094',
      supplier: 'Metro FMCG Distribution',
      amount: '₹6,800',
      dueDate: '18 May 2026',
      daysLeft: 8,
      creditPeriod: '7 Days Net',
    },
  ];

  const filteredTransactions = transactions.filter((txn) => {
    const matchesSearch = txn.supplier.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          txn.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          txn.orderId.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = filterType === 'All' || txn.status === filterType;
    return matchesSearch && matchesFilter;
  });

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
                <h1 className="text-sm font-bold text-white tracking-tight">SmartTrade</h1>
                <div className="text-[9px] font-bold tracking-widest text-cyan-500 uppercase">AI COMMERCE GRID</div>
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

        {/* User Account Profile */}
        <div className="p-4 border-t border-slate-800/60">
          <div className="p-2.5 rounded-xl bg-[#0b1220] border border-slate-800/80">
            <div className="text-xs font-semibold text-white">Shree Ganesh Stores</div>
            <div 
              onClick={() => navigate('/retailer/settings')} 
              className="text-[10px] text-slate-500 mt-0.5 cursor-pointer hover:text-cyan-400"
            >
              Settings · Help · Sign out
            </div>
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
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search transactions, invoices..." 
                className="w-full bg-[#0b1220] border border-slate-800 rounded-lg pl-9 pr-3 py-1.5 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-500"
              />
            </div>
            <button 
              onClick={() => navigate('/retailer/settings')}
              className="w-8 h-8 rounded-lg bg-[#0b1220] border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white relative"
            >
              <Bell className="w-4 h-4" />
              <span className="w-2 h-2 rounded-full bg-cyan-400 absolute top-2 right-2 border border-[#0b1220]" />
            </button>
          </div>
        </header>

        {/* Payments Main Content */}
        <div className="p-6 lg:p-8 space-y-6 max-w-7xl flex-1">
          
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h2 className="text-2xl font-bold text-white tracking-tight">Payments & Credit Line</h2>
              <p className="text-xs text-slate-400 mt-1">Manage working capital, supplier credit cycles, and digital settlements.</p>
            </div>

            <div className="flex items-center gap-2">
              <button 
                onClick={() => alert('Download Statement triggered')}
                className="px-3.5 py-2 bg-[#0b1220] hover:bg-slate-800/80 border border-slate-800 text-slate-300 rounded-xl text-xs font-semibold flex items-center gap-2 transition-all"
              >
                <Download className="w-3.5 h-3.5" />
                Statement
              </button>
              <button 
                onClick={() => alert('Pay Early / Quick Transfer Modal')}
                className="px-4 py-2 bg-cyan-400 hover:bg-cyan-300 text-slate-950 rounded-xl font-bold text-xs flex items-center gap-2 shadow-[0_0_20px_rgba(6,182,212,0.25)] transition-all"
              >
                <Wallet className="w-4 h-4" />
                Pay Pending Invoices
              </button>
            </div>
          </div>

          {/* Credit & Financial Summary Banner */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            
            {/* Credit Limit Card */}
            <div className="bg-gradient-to-br from-cyan-950/50 via-[#0b1220] to-[#070b14] border border-cyan-800/50 rounded-2xl p-5 space-y-3 relative overflow-hidden">
              <div className="flex items-center justify-between text-xs text-cyan-400 font-semibold">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4" />
                  SmartTrade BNPL Credit
                </span>
                <span className="text-[10px] bg-cyan-950 border border-cyan-800 px-2 py-0.5 rounded text-cyan-300">ACTIVE</span>
              </div>
              <div>
                <div className="text-2xl font-black text-white">₹1,20,000</div>
                <p className="text-xs text-slate-400 mt-0.5">Available Credit Balance</p>
              </div>
              <div className="space-y-1 pt-1">
                <div className="flex justify-between text-[11px] text-slate-400">
                  <span>Used: ₹20,900</span>
                  <span>Limit: ₹1,40,900</span>
                </div>
                <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full bg-cyan-400 rounded-full" style={{ width: '15%' }}></div>
                </div>
              </div>
            </div>

            {/* Total Due Card */}
            <div className="bg-[#0b1220]/90 border border-slate-800/80 rounded-2xl p-5 flex flex-col justify-between">
              <div className="flex items-center justify-between text-xs text-amber-400 font-semibold">
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4" />
                  Upcoming Payable
                </span>
                <span className="text-[10px] bg-amber-950/80 border border-amber-800/80 px-2 py-0.5 rounded text-amber-300">2 INVOICES</span>
              </div>
              <div>
                <div className="text-2xl font-black text-white mt-2">₹20,900</div>
                <p className="text-xs text-slate-400 mt-0.5">Due in next 7 days</p>
              </div>
              <div className="text-[11px] text-emerald-400 flex items-center gap-1 mt-2">
                <CheckCircle2 className="w-3.5 h-3.5" /> 0% Interest if paid on time
              </div>
            </div>

            {/* Quick UPI/Bank Payment Box */}
            <div className="bg-[#0b1220]/90 border border-slate-800/80 rounded-2xl p-5 flex flex-col justify-between">
              <div className="flex items-center justify-between text-xs text-slate-400 font-semibold">
                <span className="flex items-center gap-1.5">
                  <QrCode className="w-4 h-4 text-cyan-400" />
                  Linked Payment Methods
                </span>
              </div>
              <div className="space-y-2 my-1">
                <div className="flex items-center justify-between text-xs p-2 rounded-lg bg-[#070b14] border border-slate-800">
                  <span className="text-white font-medium flex items-center gap-2">
                    <Building2 className="w-3.5 h-3.5 text-cyan-400" /> HDFC Bank **** 9012
                  </span>
                  <span className="text-[10px] text-slate-500">PRIMARY</span>
                </div>
                <div className="flex items-center justify-between text-xs p-2 rounded-lg bg-[#070b14] border border-slate-800">
                  <span className="text-white font-medium flex items-center gap-2">
                    <QrCode className="w-3.5 h-3.5 text-emerald-400" /> ganesh@upi
                  </span>
                  <span className="text-[10px] text-slate-500">AUTO-PAY</span>
                </div>
              </div>
              <div className="text-[11px] text-slate-500">Instant payout clearance with SmartTrade Guarantee.</div>
            </div>

          </div>

          {/* Pending Invoices Due */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold text-white">Pending Distributor Invoices</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {pendingInvoices.map((inv) => (
                <div key={inv.invoiceId} className="bg-[#0b1220]/90 border border-amber-800/40 rounded-xl p-4 flex items-center justify-between gap-4">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-white">{inv.supplier}</span>
                      <span className="text-[10px] text-amber-400 bg-amber-950/60 px-1.5 py-0.5 rounded border border-amber-800/40">
                        Due in {inv.daysLeft} days
                      </span>
                    </div>
                    <div className="text-[11px] text-slate-400">
                      Invoice: {inv.invoiceId} · Term: {inv.creditPeriod}
                    </div>
                    <div className="text-xs text-slate-300">Due Date: <span className="font-semibold">{inv.dueDate}</span></div>
                  </div>

                  <div className="text-right shrink-0">
                    <div className="text-base font-bold text-white">{inv.amount}</div>
                    <button 
                      onClick={() => alert(`Initiated payment for ${inv.invoiceId}`)}
                      className="mt-2 px-3 py-1 bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold text-xs rounded-lg transition-all"
                    >
                      Pay Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Transaction History Table */}
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <h3 className="text-sm font-bold text-white">Transaction History</h3>

              <div className="flex items-center gap-2">
                <span className="text-xs text-slate-500">Filter:</span>
                <select 
                  value={filterType}
                  onChange={(e) => setFilterType(e.target.value)}
                  className="bg-[#0b1220] border border-slate-800 text-xs text-slate-300 rounded-lg px-2.5 py-1 focus:outline-none focus:border-cyan-500"
                >
                  <option value="All">All Statuses</option>
                  <option value="PAID">Paid</option>
                  <option value="PENDING">Pending</option>
                  <option value="REFUNDED">Refunded</option>
                </select>
              </div>
            </div>

            <div className="bg-[#0b1220]/90 border border-slate-800/80 rounded-2xl overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs text-slate-300">
                  <thead className="bg-[#070b14] border-b border-slate-800 text-slate-500 font-medium">
                    <tr>
                      <th className="py-3 px-4">Transaction ID</th>
                      <th className="py-3 px-4">Supplier / Entity</th>
                      <th className="py-3 px-4">Type & Method</th>
                      <th className="py-3 px-4">Date</th>
                      <th className="py-3 px-4">Amount</th>
                      <th className="py-3 px-4 text-right">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/60">
                    {filteredTransactions.map((txn) => (
                      <tr key={txn.id} className="hover:bg-slate-900/40 transition-colors">
                        <td className="py-3.5 px-4 font-mono text-cyan-400 font-semibold">{txn.id}</td>
                        <td className="py-3.5 px-4">
                          <div className="font-semibold text-white">{txn.supplier}</div>
                          <div className="text-[10px] text-slate-500">Ref: {txn.orderId}</div>
                        </td>
                        <td className="py-3.5 px-4">
                          <div>{txn.type}</div>
                          <div className="text-[10px] text-slate-500">{txn.method}</div>
                        </td>
                        <td className="py-3.5 px-4 text-slate-400">{txn.date}</td>
                        <td className="py-3.5 px-4 font-bold text-white">{txn.amount}</td>
                        <td className="py-3.5 px-4 text-right">
                          {txn.status === 'PAID' && (
                            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-emerald-950/80 border border-emerald-800/80 text-emerald-400 text-[10px] font-bold">
                              <CheckCircle2 className="w-3 h-3" /> PAID
                            </span>
                          )}
                          {txn.status === 'PENDING' && (
                            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-amber-950/80 border border-amber-800/80 text-amber-400 text-[10px] font-bold">
                              <Clock className="w-3 h-3" /> DUE SOON
                            </span>
                          )}
                          {txn.status === 'REFUNDED' && (
                            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-slate-800 border border-slate-700 text-slate-300 text-[10px] font-bold">
                              REFUNDED
                            </span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

          </div>

        </div>
      </main>

    </div>
  );
}