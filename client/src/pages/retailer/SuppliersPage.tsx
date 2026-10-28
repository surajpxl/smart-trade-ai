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
  Star,
  CheckCircle2,
  Clock,
  Phone,
  Mail,
  ExternalLink,
  Filter,
  ShieldCheck,
  PackageCheck
} from 'lucide-react';

export default function SuppliersPage() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('Suppliers');
  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('All');

  const navItems = [
    { name: 'Overview', icon: LayoutDashboard, path: '/retailer/dashboard' },
    { name: 'Marketplace', icon: Store, path: '/marketplace' },
    { name: 'AI Search', icon: Sparkles, path: '/retailer/ai-search' },
    { name: 'Inventory', icon: Boxes, path: '/retailer/inventory' },
    { name: 'Orders', icon: ShoppingBag, path: '/retailer/orders' },
    { name: 'Suppliers', icon: Users, path: '/retailer/suppliers' },
    { name: 'Payments', icon: CreditCard, path: '/retailer/payments' },
  ];

  const suppliers = [
    {
      id: 'SUP-101',
      name: 'Aarav Foods Pvt Ltd',
      category: 'Edible Oils & Grains',
      location: 'Pune Industrial Area',
      rating: 4.9,
      totalOrders: 142,
      onTimeDelivery: '98.4%',
      minOrderVal: '₹5,000',
      creditTerm: '14 Days Net',
      status: 'VERIFIED SUPPLIER',
      contactPerson: 'Sanjay Deshmukh',
      phone: '+91 98220 11421',
      skusSupplied: 48,
    },
    {
      id: 'SUP-102',
      name: 'Metro FMCG Distribution',
      category: 'Packaged Snacks & Beverages',
      location: 'Chinchwad Logistics Hub',
      rating: 4.7,
      totalOrders: 98,
      onTimeDelivery: '95.2%',
      minOrderVal: '₹2,500',
      creditTerm: '7 Days Net',
      status: 'PREMIUM PARTNER',
      contactPerson: 'Vikram Mehta',
      phone: '+91 97640 88210',
      skusSupplied: 124,
    },
    {
      id: 'SUP-103',
      name: 'Sahyadri Wholesale',
      category: 'Dairy & Staples',
      location: 'Hadapsar APMC Market',
      rating: 4.8,
      totalOrders: 215,
      onTimeDelivery: '99.1%',
      minOrderVal: '₹3,000',
      creditTerm: '21 Days Net',
      status: 'VERIFIED SUPPLIER',
      contactPerson: 'Anand Patil',
      phone: '+91 94225 33019',
      skusSupplied: 86,
    },
    {
      id: 'SUP-104',
      name: 'Kirloskar Personal Care',
      category: 'Hygiene & Cosmetics',
      location: 'Viman Nagar, Pune',
      rating: 4.6,
      totalOrders: 42,
      onTimeDelivery: '92.0%',
      minOrderVal: '₹1,500',
      creditTerm: 'Advance / COD',
      status: 'VERIFIED SUPPLIER',
      contactPerson: 'Pooja Sharma',
      phone: '+91 98901 77234',
      skusSupplied: 32,
    },
  ];

  const filteredSuppliers = suppliers.filter((sup) => {
    const matchesSearch = sup.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          sup.category.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = categoryFilter === 'All' || sup.category.includes(categoryFilter);
    return matchesSearch && matchesCategory;
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
                placeholder="Search suppliers, categories..." 
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

        {/* Suppliers Main Content */}
        <div className="p-6 lg:p-8 space-y-6 max-w-7xl flex-1">
          
          {/* Header & Overview Stats */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h2 className="text-2xl font-bold text-white tracking-tight">Suppliers Network</h2>
              <p className="text-xs text-slate-400 mt-1">Manage verified distributor contracts, credit terms, and catalog sourcing.</p>
            </div>

            <button 
              onClick={() => navigate('/marketplace')}
              className="px-4 py-2 bg-cyan-400 hover:bg-cyan-300 text-slate-950 rounded-xl font-bold text-xs flex items-center gap-2 shadow-[0_0_20px_rgba(6,182,212,0.25)] transition-all self-start sm:self-auto"
            >
              <Store className="w-4 h-4" />
              Explore Marketplace
            </button>
          </div>

          {/* Metric Summary Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-[#0b1220]/90 border border-slate-800/80 rounded-2xl p-4 flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-cyan-950/80 border border-cyan-800/50 flex items-center justify-center text-cyan-400">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs text-slate-400">Active Suppliers</div>
                <div className="text-lg font-bold text-white mt-0.5">12 Verified</div>
              </div>
            </div>

            <div className="bg-[#0b1220]/90 border border-slate-800/80 rounded-2xl p-4 flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-950/80 border border-emerald-800/50 flex items-center justify-center text-emerald-400">
                <PackageCheck className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs text-slate-400">Fulfillment Rate</div>
                <div className="text-lg font-bold text-white mt-0.5">97.8% On-Time</div>
              </div>
            </div>

            <div className="bg-[#0b1220]/90 border border-slate-800/80 rounded-2xl p-4 flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-amber-950/80 border border-amber-800/50 flex items-center justify-center text-amber-400">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs text-slate-400">Avg. Credit Limit</div>
                <div className="text-lg font-bold text-white mt-0.5">14 Days Net</div>
              </div>
            </div>
          </div>

          {/* Suppliers List Grid */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-bold text-white">Distributor Directory ({filteredSuppliers.length})</h3>
              
              <div className="flex items-center gap-2">
                <Filter className="w-3.5 h-3.5 text-slate-400" />
                <select 
                  value={categoryFilter}
                  onChange={(e) => setCategoryFilter(e.target.value)}
                  className="bg-[#0b1220] border border-slate-800 text-xs text-slate-300 rounded-lg px-2.5 py-1 focus:outline-none focus:border-cyan-500"
                >
                  <option value="All">All Categories</option>
                  <option value="Edible Oils">Edible Oils</option>
                  <option value="Snacks">Snacks & Beverages</option>
                  <option value="Dairy">Dairy & Staples</option>
                  <option value="Hygiene">Hygiene & Care</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {filteredSuppliers.map((sup) => (
                <div 
                  key={sup.id}
                  className="bg-[#0b1220]/90 border border-slate-800/80 hover:border-cyan-800/60 rounded-2xl p-5 space-y-4 transition-all"
                >
                  {/* Top Row Header */}
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="text-base font-bold text-white">{sup.name}</h4>
                        <span className="px-2 py-0.5 rounded border border-emerald-800/80 bg-emerald-950/80 text-emerald-400 text-[9px] font-bold tracking-wider">
                          • {sup.status}
                        </span>
                      </div>
                      <p className="text-xs text-slate-400 mt-0.5">{sup.category} · {sup.location}</p>
                    </div>

                    <div className="flex items-center gap-1 bg-amber-950/40 border border-amber-800/40 px-2 py-1 rounded-lg text-amber-400 text-xs font-bold shrink-0">
                      <Star className="w-3.5 h-3.5 fill-amber-400" />
                      <span>{sup.rating}</span>
                    </div>
                  </div>

                  {/* Operational Metrics */}
                  <div className="grid grid-cols-3 gap-2 p-3 bg-[#070b14] rounded-xl border border-slate-800/60 text-center">
                    <div>
                      <div className="text-[10px] text-slate-500">Total Orders</div>
                      <div className="text-xs font-bold text-white mt-0.5">{sup.totalOrders}</div>
                    </div>
                    <div>
                      <div className="text-[10px] text-slate-500">On-Time Rate</div>
                      <div className="text-xs font-bold text-emerald-400 mt-0.5">{sup.onTimeDelivery}</div>
                    </div>
                    <div>
                      <div className="text-[10px] text-slate-500">Credit Term</div>
                      <div className="text-xs font-bold text-cyan-400 mt-0.5">{sup.creditTerm}</div>
                    </div>
                  </div>

                  {/* Supplier Details & Contact */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs text-slate-400 gap-2 pt-1 border-t border-slate-800/40">
                    <div className="flex items-center gap-4">
                      <span className="flex items-center gap-1">
                        <Phone className="w-3 h-3 text-cyan-400" /> {sup.phone}
                      </span>
                      <span>• {sup.skusSupplied} SKUs</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <button 
                        onClick={() => navigate('/marketplace')}
                        className="px-3 py-1.5 rounded-lg bg-cyan-950/80 hover:bg-cyan-900/80 border border-cyan-800/60 text-cyan-400 font-bold text-xs flex items-center gap-1.5 transition-all"
                      >
                        Order Catalog
                        <ExternalLink className="w-3 h-3" />
                      </button>
                    </div>
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