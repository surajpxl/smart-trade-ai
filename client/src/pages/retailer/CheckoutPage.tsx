import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Radio, 
  Search, 
  Bell, 
  Check, 
  MapPin, 
  ShieldCheck, 
  AlertCircle,
  LayoutDashboard,
  Store,
  Sparkles,
  Boxes,
  ShoppingBag,
  Users,
  CreditCard
} from 'lucide-react';

export default function CheckoutPage() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('Marketplace');
  const [selectedPayment, setSelectedPayment] = useState('credit');
  const [poReference, setPoReference] = useState('PO-OCT-014');
  const [isConfirmed, setIsConfirmed] = useState(false);

  const navItems = [
    { name: 'Overview', icon: LayoutDashboard, path: '/retailer/dashboard' },
    { name: 'Marketplace', icon: Store, path: '/marketplace' },
    { name: 'AI Search', icon: Sparkles, path: '/retailer/ai-search' },
    { name: 'Inventory', icon: Boxes, path: '/retailer/inventory' },
    { name: 'Orders', icon: ShoppingBag, path: '/retailer/orders' },
    { name: 'Suppliers', icon: Users, path: '/retailer/suppliers' },
    { name: 'Payments', icon: CreditCard, path: '/retailer/payments' },
  ];

  const checkoutSteps = [
    { id: 1, label: 'Cart', status: 'completed' },
    { id: 2, label: 'Delivery', status: 'completed' },
    { id: 3, label: 'Payment', status: isConfirmed ? 'completed' : 'active' },
    { id: 4, label: 'Confirmed', status: isConfirmed ? 'active' : 'pending' },
  ];

  const handleConfirmOrder = () => {
    setIsConfirmed(true);
    setTimeout(() => {
      navigate('/retailer/orders');
    }, 1500);
  };

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
            <div className="text-[10px] text-slate-500 mt-0.5">Settings · Help · Sign out</div>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
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

        {/* Page Main Content */}
        <div className="p-6 lg:p-8 space-y-6 max-w-7xl">
          <div>
            <h2 className="text-2xl font-bold text-white tracking-tight">Checkout & confirmation</h2>
            <p className="text-xs text-slate-400 mt-1">
              Review delivery, pay securely and receive order confirmation
            </p>
          </div>

          {/* Checkout Steps Progress Bar */}
          <div className="py-2 flex items-center justify-between max-w-2xl text-xs font-medium">
            {checkoutSteps.map((step, idx) => (
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
                {idx < checkoutSteps.length - 1 && (
                  <div className={`h-[2px] flex-1 mx-3 ${idx < 2 || isConfirmed ? 'bg-cyan-500' : 'bg-slate-800'}`} />
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Main Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            
            {/* Left Column: Form Details (8 cols) */}
            <div className="lg:col-span-8 space-y-6">
              
              {/* Delivery Address Box */}
              <div className="bg-[#0b1220]/80 border border-slate-800/80 rounded-2xl p-5 space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-semibold text-white">Delivery address</h3>
                  <span className="text-[10px] font-bold tracking-wider text-cyan-400 uppercase bg-cyan-950/60 border border-cyan-800/60 px-2 py-0.5 rounded">
                    • DEFAULT
                  </span>
                </div>
                <p className="text-[11px] text-slate-500">GST-registered place of business</p>
                
                <div className="flex items-start gap-3 pt-1">
                  <MapPin className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <div className="text-xs text-slate-300 space-y-0.5">
                    <div className="font-semibold text-white">Shree Ganesh Stores</div>
                    <div>47 Laxmi Road, Pune 411030</div>
                    <div className="text-slate-500 text-[11px]">Rohan Kulkarni · +91 98220 18476</div>
                  </div>
                </div>
              </div>

              {/* Payment Method Selector */}
              <div className="bg-[#0b1220]/80 border border-slate-800/80 rounded-2xl p-5 space-y-4">
                <h3 className="text-sm font-semibold text-white">Payment method</h3>

                <div className="space-y-2.5">
                  {/* SmartTrade Credit Option */}
                  <div 
                    onClick={() => setSelectedPayment('credit')}
                    className={`p-4 rounded-xl border cursor-pointer transition-all flex items-start justify-between ${
                      selectedPayment === 'credit'
                        ? 'bg-cyan-950/30 border-cyan-500/60 shadow-[0_0_15px_rgba(6,182,212,0.08)]'
                        : 'bg-[#080d1a] border-slate-800 hover:border-slate-700'
                    }`}
                  >
                    <div>
                      <div className="text-xs font-semibold text-white">SmartTrade 7-day credit</div>
                      <div className="text-[11px] text-slate-400 mt-0.5">Limit ₹1,25,000 · no fee</div>
                    </div>
                    <div className={`w-4 h-4 rounded-full border flex items-center justify-center mt-0.5 ${
                      selectedPayment === 'credit' ? 'border-cyan-400 bg-cyan-400' : 'border-slate-600'
                    }`}>
                      {selectedPayment === 'credit' && <div className="w-1.5 h-1.5 rounded-full bg-slate-950" />}
                    </div>
                  </div>

                  {/* UPI / Net Banking Option */}
                  <div 
                    onClick={() => setSelectedPayment('upi')}
                    className={`p-4 rounded-xl border cursor-pointer transition-all flex items-start justify-between ${
                      selectedPayment === 'upi'
                        ? 'bg-cyan-950/30 border-cyan-500/60'
                        : 'bg-[#080d1a] border-slate-800 hover:border-slate-700'
                    }`}
                  >
                    <div>
                      <div className="text-xs font-semibold text-white">UPI / Net banking</div>
                      <div className="text-[11px] text-slate-400 mt-0.5">Pay through your bank</div>
                    </div>
                    <div className={`w-4 h-4 rounded-full border flex items-center justify-center mt-0.5 ${
                      selectedPayment === 'upi' ? 'border-cyan-400 bg-cyan-400' : 'border-slate-600'
                    }`}>
                      {selectedPayment === 'upi' && <div className="w-1.5 h-1.5 rounded-full bg-slate-950" />}
                    </div>
                  </div>

                  {/* Business Card Option */}
                  <div 
                    onClick={() => setSelectedPayment('card')}
                    className={`p-4 rounded-xl border cursor-pointer transition-all flex items-start justify-between ${
                      selectedPayment === 'card'
                        ? 'bg-cyan-950/30 border-cyan-500/60'
                        : 'bg-[#080d1a] border-slate-800 hover:border-slate-700'
                    }`}
                  >
                    <div>
                      <div className="text-xs font-semibold text-white">Business card</div>
                      <div className="text-[11px] text-slate-400 mt-0.5">Visa, Mastercard or RuPay</div>
                    </div>
                    <div className={`w-4 h-4 rounded-full border flex items-center justify-center mt-0.5 ${
                      selectedPayment === 'card' ? 'border-cyan-400 bg-cyan-400' : 'border-slate-600'
                    }`}>
                      {selectedPayment === 'card' && <div className="w-1.5 h-1.5 rounded-full bg-slate-950" />}
                    </div>
                  </div>
                </div>
              </div>

              {/* PO Reference Input */}
              <div className="space-y-2">
                <label className="text-xs font-semibold text-slate-300">PO reference</label>
                <input 
                  type="text" 
                  value={poReference}
                  onChange={(e) => setPoReference(e.target.value)}
                  className="w-full bg-[#0b1220] border border-slate-800/90 rounded-xl px-4 py-2.5 text-xs text-slate-200 focus:outline-none focus:border-cyan-500"
                />
              </div>

            </div>

            {/* Right Column: Payable Summary Side Card (4 cols) */}
            <div className="lg:col-span-4 bg-[#0b1220]/90 border border-slate-800/80 rounded-2xl p-5 space-y-4">
              <div>
                <h3 className="text-sm font-semibold text-white">Payable now</h3>
                <p className="text-[11px] text-slate-500 mt-0.5">3 supplier orders</p>
              </div>

              <div>
                <div className="text-2xl font-black text-white">₹10,484.92</div>
                <div className="mt-2 inline-block px-2.5 py-0.5 rounded bg-cyan-950/80 border border-cyan-800/60 text-cyan-400 text-[10px] font-bold uppercase tracking-wider">
                  • DUE 08 OCT 2026
                </div>
              </div>

              {/* Confirmation Ready Alert */}
              <div className="p-3 rounded-xl bg-emerald-950/30 border border-emerald-800/40 flex items-start gap-2.5">
                <AlertCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-semibold text-emerald-400">Confirmation ready</div>
                  <div className="text-[10px] text-slate-400">Order ST-104829 · delivery tomorrow 9 AM–1 PM</div>
                </div>
              </div>

              {/* Main Checkout CTA Button */}
              <button 
                onClick={handleConfirmOrder}
                disabled={isConfirmed}
                className="w-full py-3 bg-cyan-400 hover:bg-cyan-300 disabled:bg-emerald-500 text-slate-950 rounded-xl font-bold text-xs flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(6,182,212,0.25)] transition-all"
              >
                <ShieldCheck className="w-4 h-4" />
                {isConfirmed ? 'Order Confirmed!' : 'Place and confirm order'}
              </button>

              <div className="text-center text-[10px] text-slate-500 pt-1">
                GST invoice and buyer protection included.
              </div>
            </div>

          </div>

        </div>
      </main>

    </div>
  );
}