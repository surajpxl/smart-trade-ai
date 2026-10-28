import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Radio, 
  Search, 
  Bell, 
  Plus, 
  IndianRupee, 
  Clock, 
  CheckCircle2, 
  Check, 
  LayoutDashboard,
  Store,
  Sparkles,
  Boxes,
  ShoppingBag,
  Users,
  CreditCard
} from 'lucide-react';

export default function RetailerOrdersPage() {
  const navigate = useNavigate();
  const [activeNav, setActiveNav] = useState('Orders');
  const [activeFilter, setActiveFilter] = useState('IN PROGRESS 4');
  const [selectedOrderId, setSelectedOrderId] = useState('ST-104829');

  const navItems = [
    { name: 'Overview', icon: LayoutDashboard, path: '/retailer/dashboard' },
    { name: 'Marketplace', icon: Store, path: '/marketplace' },
    { name: 'AI Search', icon: Sparkles, path: '/retailer/ai-search' },
    { name: 'Inventory', icon: Boxes, path: '/retailer/inventory' },
    { name: 'Orders', icon: ShoppingBag, path: '/retailer/orders' },
    { name: 'Suppliers', icon: Users, path: '/retailer/suppliers' },
    { name: 'Payments', icon: CreditCard, path: '/retailer/payments' },
  ];

  const filterTabs = [
    { label: 'ALL 126', value: 'ALL' },
    { label: 'IN PROGRESS 4', value: 'IN PROGRESS 4' },
    { label: 'DELIVERED 118', value: 'DELIVERED' },
    { label: 'RETURNS 3', value: 'RETURNS' },
  ];

  const purchaseOrders = [
    {
      id: 'ST-104829',
      supplier: 'Aarav Foods Pvt Ltd',
      placed: '01 Oct - 10:18',
      total: '₹18,462',
      status: 'IN TRANSIT',
      statusStyle: 'bg-cyan-950/80 border-cyan-500/50 text-cyan-400',
      eta: 'ETA tomorrow 9:40 AM',
      steps: [
        { id: 1, label: 'Confirmed', status: 'completed' },
        { id: 2, label: 'Packed', status: 'completed' },
        { id: 3, label: 'Picked up', status: 'completed' },
        { id: 4, label: 'Out for delivery', status: 'pending' },
        { id: 5, label: 'Delivered', status: 'pending' },
      ],
    },
    {
      id: 'ST-104762',
      supplier: 'Metro FMCG Distribution',
      placed: '30 Sep - 16:42',
      total: '₹7,840',
      status: 'DELIVERED',
      statusStyle: 'bg-emerald-950/80 border-emerald-500/50 text-emerald-400',
      eta: 'Delivered 01 Oct 11:20 AM',
      steps: [
        { id: 1, label: 'Confirmed', status: 'completed' },
        { id: 2, label: 'Packed', status: 'completed' },
        { id: 3, label: 'Picked up', status: 'completed' },
        { id: 4, label: 'Out for delivery', status: 'completed' },
        { id: 5, label: 'Delivered', status: 'completed' },
      ],
    },
    {
      id: 'ST-104681',
      supplier: 'Sahyadri Wholesale',
      placed: '29 Sep - 11:05',
      total: '₹12,226',
      status: 'PROCESSING',
      statusStyle: 'bg-amber-950/80 border-amber-500/50 text-amber-400',
      eta: 'ETA 02 Oct 2:00 PM',
      steps: [
        { id: 1, label: 'Confirmed', status: 'completed' },
        { id: 2, label: 'Packed', status: 'active' },
        { id: 3, label: 'Picked up', status: 'pending' },
        { id: 4, label: 'Out for delivery', status: 'pending' },
        { id: 5, label: 'Delivered', status: 'pending' },
      ],
    },
    {
      id: 'ST-104603',
      supplier: 'Nirman Consumer Goods',
      placed: '27 Sep - 09:24',
      total: '₹5,910',
      status: 'DELIVERED',
      statusStyle: 'bg-emerald-950/80 border-emerald-500/50 text-emerald-400',
      eta: 'Delivered 28 Sep 4:15 PM',
      steps: [
        { id: 1, label: 'Confirmed', status: 'completed' },
        { id: 2, label: 'Packed', status: 'completed' },
        { id: 3, label: 'Picked up', status: 'completed' },
        { id: 4, label: 'Out for delivery', status: 'completed' },
        { id: 5, label: 'Delivered', status: 'completed' },
      ],
    },
  ];

  const selectedOrder = purchaseOrders.find((o) => o.id === selectedOrderId) || purchaseOrders[0];

  return (
    <div className="min-h-screen bg-[#070b14] text-slate-100 flex font-sans selection:bg-cyan-500 selection:text-black">
      
      {/* Sidebar Navigation */}
      <aside className="w-64 bg-[#090e1a] border-r border-slate-800/60 flex flex-col justify-between shrink-0 hidden md:flex">
        <div>
          {/* Brand Block */}
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

          {/* Navigation Items */}
          <nav className="p-3 space-y-1">
            {navItems.map((item) => {
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

        {/* User Account Footer */}
        <div className="p-4 border-t border-slate-800/60">
          <div className="p-2.5 rounded-xl bg-[#0b1220] border border-slate-800/80">
            <div className="text-xs font-semibold text-white">Shree Ganesh Stores</div>
            <div className="text-[10px] text-slate-500 mt-0.5">Settings · Help · Sign out</div>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
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
        <div className="p-6 lg:p-8 space-y-6 max-w-7xl">
          
          {/* Header & Primary CTA */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h2 className="text-2xl font-bold text-white tracking-tight">Orders & tracking</h2>
              <p className="text-xs text-slate-400 mt-1">
                Track every purchase from confirmation to delivery
              </p>
            </div>

            <button 
              onClick={() => navigate('/marketplace')}
              className="px-4 py-2.5 bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold text-xs rounded-xl flex items-center gap-2 shadow-[0_0_20px_rgba(6,182,212,0.25)] transition-all self-start sm:self-auto"
            >
              <Plus className="w-4 h-4 stroke-[2.5]" />
              Create purchase order
            </button>
          </div>

          {/* Top 3 Metric Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            
            {/* Card 1: Spend */}
            <div className="bg-[#0b1220]/90 border border-slate-800/80 rounded-2xl p-5 flex flex-col justify-between space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-400">Spend this month</span>
                <div className="w-8 h-8 rounded-xl bg-cyan-950/60 border border-cyan-800/50 flex items-center justify-center text-cyan-400">
                  <IndianRupee className="w-4 h-4" />
                </div>
              </div>
              <div>
                <div className="text-2xl font-black text-white">₹3.82L</div>
                <div className="text-[11px] text-emerald-400 mt-1 font-medium">
                  ↑ 8.2% month-on-month
                </div>
              </div>
            </div>

            {/* Card 2: Fulfillment */}
            <div className="bg-[#0b1220]/90 border border-slate-800/80 rounded-2xl p-5 flex flex-col justify-between space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-400">Average fulfillment</span>
                <div className="w-8 h-8 rounded-xl bg-emerald-950/60 border border-emerald-800/50 flex items-center justify-center text-emerald-400">
                  <Clock className="w-4 h-4" />
                </div>
              </div>
              <div>
                <div className="text-2xl font-black text-white">7.4 hrs</div>
                <div className="text-[11px] text-cyan-400 mt-1 font-medium">
                  1.2 hrs faster
                </div>
              </div>
            </div>

            {/* Card 3: Savings */}
            <div className="bg-[#0b1220]/90 border border-slate-800/80 rounded-2xl p-5 flex flex-col justify-between space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-400">Savings captured</span>
                <div className="w-8 h-8 rounded-xl bg-cyan-950/60 border border-cyan-800/50 flex items-center justify-center text-cyan-400">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
              </div>
              <div>
                <div className="text-2xl font-black text-white">₹28,460</div>
                <div className="text-[11px] text-slate-400 mt-1">
                  Bulk + AI negotiation
                </div>
              </div>
            </div>

          </div>

          {/* Filter Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1">
            {filterTabs.map((tab) => {
              const isActive = activeFilter === tab.value;
              return (
                <button
                  key={tab.value}
                  onClick={() => setActiveFilter(tab.value)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all whitespace-nowrap ${
                    isActive
                      ? 'bg-cyan-950 border border-cyan-500 text-cyan-400 shadow-[0_0_12px_rgba(6,182,212,0.15)]'
                      : 'bg-[#0b1220] border border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700'
                  }`}
                >
                  • {tab.label}
                </button>
              );
            })}
          </div>

          {/* Table Container */}
          <div className="bg-[#0b1220]/80 border border-slate-800/80 rounded-2xl p-5 space-y-4">
            <div>
              <h3 className="text-sm font-bold text-white">Purchase orders</h3>
              <p className="text-[11px] text-slate-500 mt-0.5">
                Selected: <span className="text-slate-300 font-mono">{selectedOrderId}</span>
              </p>
            </div>

            {/* Orders Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-slate-800/80 text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                    <th className="py-3 px-4">ORDER</th>
                    <th className="py-3 px-4">SUPPLIER</th>
                    <th className="py-3 px-4">PLACED</th>
                    <th className="py-3 px-4">TOTAL</th>
                    <th className="py-3 px-4">STATUS</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/50 text-xs">
                  {purchaseOrders.map((order) => {
                    const isSelected = selectedOrderId === order.id;
                    return (
                      <tr 
                        key={order.id}
                        onClick={() => setSelectedOrderId(order.id)}
                        className={`cursor-pointer transition-colors ${
                          isSelected ? 'bg-cyan-950/20' : 'hover:bg-slate-900/40'
                        }`}
                      >
                        <td className="py-3.5 px-4 font-mono font-bold text-white">
                          {order.id}
                        </td>
                        <td className="py-3.5 px-4 text-slate-300 font-medium">
                          {order.supplier}
                        </td>
                        <td className="py-3.5 px-4 text-slate-400">
                          {order.placed}
                        </td>
                        <td className="py-3.5 px-4 font-bold text-white">
                          {order.total}
                        </td>
                        <td className="py-3.5 px-4">
                          <span className={`px-2.5 py-0.5 rounded border text-[10px] font-bold uppercase tracking-wider ${order.statusStyle}`}>
                            • {order.status}
                          </span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>

          {/* Live Tracking Card */}
          <div className="bg-[#0b1220]/80 border border-slate-800/80 rounded-2xl p-5 space-y-4">
            <div>
              <h3 className="text-sm font-bold text-white">
                Live tracking · <span className="font-mono">{selectedOrder.id}</span>
              </h3>
              <p className="text-[11px] text-slate-400 mt-0.5">
                {selectedOrder.supplier} · <span className="text-cyan-400 font-medium">{selectedOrder.eta}</span>
              </p>
            </div>

            {/* Stepper Process Bar */}
            <div className="pt-2 pb-1 overflow-x-auto">
              <div className="flex items-center justify-between min-w-[600px] text-xs font-medium">
                {selectedOrder.steps.map((step, idx) => (
                  <React.Fragment key={step.id}>
                    <div className="flex items-center gap-2">
                      {step.status === 'completed' ? (
                        <div className="w-5 h-5 rounded-full bg-cyan-400 text-slate-950 flex items-center justify-center font-bold">
                          <Check className="w-3 h-3 stroke-[3]" />
                        </div>
                      ) : step.status === 'active' ? (
                        <div className="w-5 h-5 rounded-full bg-cyan-950 border border-cyan-400 text-cyan-400 flex items-center justify-center text-[10px] font-bold">
                          {step.id}
                        </div>
                      ) : (
                        <div className="w-5 h-5 rounded-full bg-slate-900 border border-slate-800 text-slate-600 flex items-center justify-center text-[10px]">
                          {step.id}
                        </div>
                      )}
                      <span className={step.status === 'pending' ? 'text-slate-600' : 'text-slate-200'}>
                        {step.label}
                      </span>
                    </div>

                    {idx < selectedOrder.steps.length - 1 && (
                      <div className={`h-[2px] flex-1 mx-3 ${
                        selectedOrder.steps[idx + 1].status !== 'pending' || step.status === 'completed'
                          ? 'bg-cyan-500'
                          : 'bg-slate-800'
                      }`} />
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>

        </div>
      </main>

    </div>
  );
}