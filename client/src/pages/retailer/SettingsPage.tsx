import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Radio, 
  Search, 
  Bell, 
  Check, 
  AlertTriangle, 
  Truck, 
  Tag, 
  HelpCircle, 
  MessageSquare, 
  Phone, 
  Plus, 
  ChevronRight,
  LayoutDashboard,
  ShoppingBag,
  Sparkles,
  Package,
  FileText,
  Users2,
  CreditCard
} from 'lucide-react';

export default function SettingsPage() {
  const navigate = useNavigate();
  const [activeNav, setActiveNav] = useState('Overview');

  // Form states
  const [businessEmail, setBusinessEmail] = useState('owner@shreeganeshstores.in');
  const [tradingHours, setTradingHours] = useState('8 AM — 10 PM');
  const [deliveryRadius, setDeliveryRadius] = useState('18 km');
  const [savedSuccess, setSavedSuccess] = useState(false);

  // Notification Preferences states
  const [preferences, setPreferences] = useState({
    criticalStock: true,
    orders: true,
    offers: true,
    digest: false,
  });

  const retailerNavItems = [
    { name: 'Overview', icon: LayoutDashboard, path: '/retailer/dashboard' },
    { name: 'Marketplace', icon: ShoppingBag, path: '/retailer/marketplace' },
    { name: 'AI Search', icon: Sparkles, path: '/retailer/search' },
    { name: 'Inventory', icon: Package, path: '/retailer/inventory' },
    { name: 'Orders', icon: FileText, path: '/retailer/orders' },
    { name: 'Suppliers', icon: Users2, path: '/retailer/suppliers' },
    { name: 'Payments', icon: CreditCard, path: '/retailer/payments' },
  ];

  const togglePreference = (key: keyof typeof preferences) => {
    setPreferences((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleSaveSettings = () => {
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 3000);
  };

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
                <h1 className="text-sm font-bold text-white tracking-tight">SmartTrade</h1>
                <div className="text-[9px] font-bold tracking-widest text-cyan-500 uppercase">AI COMMERCE GRID</div>
              </div>
            </div>

            <div className="mt-3 px-3 py-1.5 rounded-lg bg-cyan-950/40 border border-cyan-800/40 text-cyan-400 text-xs font-medium">
              Retailer workspace
            </div>
          </div>

          {/* Nav Links */}
          <nav className="p-3 space-y-1">
            {retailerNavItems.map((item) => {
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

        {/* Retailer Account Footer */}
        <div className="p-4 border-t border-slate-800/60">
          <div className="p-2.5 rounded-xl bg-[#0b1220] border border-slate-800/80">
            <div className="text-xs font-semibold text-white">Shree Ganesh Stores</div>
            <div className="text-[10px] text-slate-500 mt-0.5">Settings · Help · Sign out</div>
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
            <button className="w-8 h-8 rounded-lg bg-[#0b1220] border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white relative">
              <Bell className="w-4 h-4" />
              <span className="w-2 h-2 rounded-full bg-cyan-400 absolute top-2 right-2 border border-[#0b1220]" />
            </button>
          </div>
        </header>

        {/* Page Content */}
        <div className="p-6 lg:p-8 space-y-6 max-w-7xl flex-1 flex flex-col">
          
          {/* Section Heading */}
          <div>
            <h2 className="text-2xl font-bold text-white tracking-tight">Business settings & support</h2>
            <p className="text-xs text-slate-400 mt-1">
              Manage your profile, notifications and support in one place
            </p>
          </div>

          {/* Main Grid: Left Column (Business & Notifications) & Right Column (Notifications Widget & Support) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            
            {/* Left Column (7 Cols) */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Business Profile Card */}
              <div className="bg-[#0b1220]/80 border border-slate-800/80 rounded-2xl p-6 space-y-5">
                <div>
                  <h3 className="text-sm font-bold text-white">Business profile</h3>
                  <p className="text-[11px] text-slate-400 mt-0.5">Verified GST invoice details</p>
                </div>

                {/* Profile Header Block */}
                <div className="flex items-center justify-between bg-[#070b14] p-3.5 rounded-xl border border-slate-800/60">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-cyan-950/80 border border-cyan-800/60 flex items-center justify-center text-cyan-400 font-bold text-sm">
                      SG
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white">Shree Ganesh Stores</div>
                      <div className="text-[10px] text-slate-500 font-mono mt-0.5">27AAQFK6382G1Z4 · Pune</div>
                    </div>
                  </div>

                  <span className="px-2.5 py-0.5 rounded border border-emerald-800/80 bg-emerald-950/80 text-emerald-400 text-[10px] font-bold tracking-wider">
                    • VERIFIED
                  </span>
                </div>

                {/* Profile Form Fields */}
                <div className="space-y-4">
                  <div>
                    <label className="text-[11px] font-medium text-slate-400 block mb-1.5">Business email</label>
                    <input 
                      type="email" 
                      value={businessEmail}
                      onChange={(e) => setBusinessEmail(e.target.value)}
                      className="w-full bg-[#070b14] border border-slate-800 rounded-xl px-3.5 py-2 text-xs text-slate-200 focus:outline-none focus:border-cyan-500 font-mono"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-[11px] font-medium text-slate-400 block mb-1.5">Trading hours</label>
                      <input 
                        type="text" 
                        value={tradingHours}
                        onChange={(e) => setTradingHours(e.target.value)}
                        className="w-full bg-[#070b14] border border-slate-800 rounded-xl px-3.5 py-2 text-xs text-slate-200 focus:outline-none focus:border-cyan-500"
                      />
                    </div>
                    <div>
                      <label className="text-[11px] font-medium text-slate-400 block mb-1.5">Delivery radius</label>
                      <input 
                        type="text" 
                        value={deliveryRadius}
                        onChange={(e) => setDeliveryRadius(e.target.value)}
                        className="w-full bg-[#070b14] border border-slate-800 rounded-xl px-3.5 py-2 text-xs text-slate-200 focus:outline-none focus:border-cyan-500"
                      />
                    </div>
                  </div>

                  <button 
                    onClick={handleSaveSettings}
                    className="px-4 py-2 bg-cyan-400 hover:bg-cyan-300 text-black font-bold text-xs rounded-xl flex items-center gap-2 shadow-[0_0_15px_rgba(6,182,212,0.3)] transition-all"
                  >
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                    {savedSuccess ? 'Settings Saved!' : 'Save settings'}
                  </button>
                </div>
              </div>

              {/* Notification Preferences Card */}
              <div className="bg-[#0b1220]/80 border border-slate-800/80 rounded-2xl p-6 space-y-4">
                <div>
                  <h3 className="text-sm font-bold text-white">Notification preferences</h3>
                  <p className="text-[11px] text-slate-400 mt-0.5">App, WhatsApp, SMS and email</p>
                </div>

                <div className="flex flex-wrap gap-2.5 pt-1">
                  <button
                    onClick={() => togglePreference('criticalStock')}
                    className={`px-3 py-1 rounded border text-[10px] font-bold tracking-wider transition-all ${
                      preferences.criticalStock
                        ? 'border-emerald-800/80 bg-emerald-950/80 text-emerald-400'
                        : 'border-slate-800 bg-[#070b14] text-slate-500'
                    }`}
                  >
                    • CRITICAL STOCK - {preferences.criticalStock ? 'ON' : 'OFF'}
                  </button>

                  <button
                    onClick={() => togglePreference('orders')}
                    className={`px-3 py-1 rounded border text-[10px] font-bold tracking-wider transition-all ${
                      preferences.orders
                        ? 'border-emerald-800/80 bg-emerald-950/80 text-emerald-400'
                        : 'border-slate-800 bg-[#070b14] text-slate-500'
                    }`}
                  >
                    • ORDERS - {preferences.orders ? 'ON' : 'OFF'}
                  </button>

                  <button
                    onClick={() => togglePreference('offers')}
                    className={`px-3 py-1 rounded border text-[10px] font-bold tracking-wider transition-all ${
                      preferences.offers
                        ? 'border-emerald-800/80 bg-emerald-950/80 text-emerald-400'
                        : 'border-slate-800 bg-[#070b14] text-slate-500'
                    }`}
                  >
                    • OFFERS - {preferences.offers ? 'ON' : 'OFF'}
                  </button>

                  <button
                    onClick={() => togglePreference('digest')}
                    className={`px-3 py-1 rounded border text-[10px] font-bold tracking-wider transition-all ${
                      preferences.digest
                        ? 'border-emerald-800/80 bg-emerald-950/80 text-emerald-400'
                        : 'border-slate-800 bg-[#070b14] text-slate-500'
                    }`}
                  >
                    • DIGEST - {preferences.digest ? 'ON' : 'OFF'}
                  </button>
                </div>
              </div>

            </div>

            {/* Right Column (5 Cols) */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Notifications Widget Card */}
              <div className="bg-[#0b1220]/80 border border-slate-800/80 rounded-2xl p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-sm font-bold text-white">Notifications</h3>
                    <p className="text-[11px] text-slate-400 mt-0.5">3 unread · live business updates</p>
                  </div>
                  <button className="text-[11px] text-cyan-400 hover:text-cyan-300 font-medium">
                    Mark all read
                  </button>
                </div>

                <div className="space-y-3">
                  {/* Item 1 */}
                  <div className="p-3.5 rounded-xl bg-[#070b14] border border-slate-800/80 flex items-start gap-3">
                    <AlertTriangle className="w-4 h-4 text-rose-400 mt-0.5 shrink-0" />
                    <div>
                      <div className="text-xs font-bold text-white">Stockout predicted</div>
                      <div className="text-[10px] text-slate-500 mt-0.5">Fortune Sunlite · 9 units left</div>
                    </div>
                  </div>

                  {/* Item 2 */}
                  <div className="p-3.5 rounded-xl bg-[#070b14] border border-slate-800/80 flex items-start gap-3">
                    <Truck className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
                    <div>
                      <div className="text-xs font-bold text-white">Order picked up</div>
                      <div className="text-[10px] text-slate-500 mt-0.5 font-mono">ST-104829 · delivery tomorrow</div>
                    </div>
                  </div>

                  {/* Item 3 */}
                  <div className="p-3.5 rounded-xl bg-[#070b14] border border-slate-800/80 flex items-start gap-3">
                    <Tag className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                    <div>
                      <div className="text-xs font-bold text-white">Bulk price unlocked</div>
                      <div className="text-[10px] text-slate-500 mt-0.5">Save ₹2.60 per Tata Salt pack</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Help & Support Card */}
              <div className="bg-[#0b1220]/80 border border-slate-800/80 rounded-2xl p-6 space-y-4">
                <div>
                  <h3 className="text-sm font-bold text-white">Help & support</h3>
                  <p className="text-[11px] text-slate-400 mt-0.5">Answers and specialists when you need them</p>
                </div>

                <div className="space-y-2">
                  {/* Search Help Centre */}
                  <button className="w-full p-3 rounded-xl bg-[#070b14] hover:bg-slate-900/60 border border-slate-800/80 flex items-center justify-between text-left transition-all group">
                    <div className="flex items-center gap-3">
                      <HelpCircle className="w-4 h-4 text-cyan-400 shrink-0" />
                      <div>
                        <div className="text-xs font-bold text-white">Search help centre</div>
                        <div className="text-[10px] text-slate-500 mt-0.5">KYC, orders, credit and returns</div>
                      </div>
                    </div>
                    <ChevronRight className="w-4 h-4 text-slate-600 group-hover:text-slate-400 transition-colors" />
                  </button>

                  {/* Chat with Support */}
                  <button className="w-full p-3 rounded-xl bg-[#070b14] hover:bg-slate-900/60 border border-slate-800/80 flex items-center justify-between text-left transition-all group">
                    <div className="flex items-center gap-3">
                      <MessageSquare className="w-4 h-4 text-cyan-400 shrink-0" />
                      <div>
                        <div className="text-xs font-bold text-white">Chat with support</div>
                        <div className="text-[10px] text-slate-500 mt-0.5">Typical response under 3 minutes</div>
                      </div>
                    </div>
                    <ChevronRight className="w-4 h-4 text-slate-600 group-hover:text-slate-400 transition-colors" />
                  </button>

                  {/* Phone Support */}
                  <button className="w-full p-3 rounded-xl bg-[#070b14] hover:bg-slate-900/60 border border-slate-800/80 flex items-center justify-between text-left transition-all group">
                    <div className="flex items-center gap-3">
                      <Phone className="w-4 h-4 text-cyan-400 shrink-0" />
                      <div>
                        <div className="text-xs font-bold text-white font-mono">1800 309 4242</div>
                        <div className="text-[10px] text-slate-500 mt-0.5">8 AM–10 PM every day</div>
                      </div>
                    </div>
                    <ChevronRight className="w-4 h-4 text-slate-600 group-hover:text-slate-400 transition-colors" />
                  </button>
                </div>

                <button className="w-full py-2.5 bg-[#122238] hover:bg-[#182d4a] text-cyan-400 font-bold text-xs rounded-xl border border-cyan-800/40 flex items-center justify-center gap-2 transition-all">
                  <Plus className="w-3.5 h-3.5" />
                  Create support ticket
                </button>
              </div>

            </div>

          </div>

        </div>
      </main>

    </div>
  );
}