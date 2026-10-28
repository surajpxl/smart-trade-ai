import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Radio, 
  Search, 
  Bell, 
  Box, 
  Minus, 
  Plus, 
  AlertTriangle, 
  ArrowRight,
  LayoutDashboard,
  Store,
  Sparkles,
  Boxes,
  ShoppingBag,
  Users,
  CreditCard
} from 'lucide-react';

export default function CartPage() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('Marketplace');

  const navItems = [
    { name: 'Overview', icon: LayoutDashboard, path: '/retailer/dashboard' },
    { name: 'Marketplace', icon: Store, path: '/marketplace' },
    { name: 'AI Search', icon: Sparkles, path: '/retailer/ai-search' },
    { name: 'Inventory', icon: Boxes, path: '/retailer/inventory' },
    { name: 'Orders', icon: ShoppingBag, path: '/retailer/orders' },
    { name: 'Suppliers', icon: Users, path: '/retailer/suppliers' },
    { name: 'Payments', icon: CreditCard, path: '/retailer/payments' },
  ];

  // Initial cart items based on the mockup image
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Fortune Sunlite Oil - 1L',
      supplier: 'Aarav Foods',
      badge: 'BULK TIER UNLOCKED',
      badgeStyle: 'bg-cyan-950/80 border-cyan-500/50 text-cyan-400',
      pricePerUnit: 109.80,
      quantity: 48,
      iconColor: 'text-amber-500',
    },
    {
      id: 2,
      name: 'Tata Salt - 1 kg',
      supplier: 'Sahyadri Wholesale',
      badge: 'LOCAL STOCK',
      badgeStyle: 'bg-emerald-950/80 border-emerald-500/50 text-emerald-400',
      pricePerUnit: 24.80,
      quantity: 80,
      iconColor: 'text-emerald-500',
    },
    {
      id: 3,
      name: 'Surf Excel - 1 kg',
      supplier: 'Nirman Consumer Goods',
      badge: 'LOCAL STOCK',
      badgeStyle: 'bg-emerald-950/80 border-emerald-500/50 text-emerald-400',
      pricePerUnit: 126.50,
      quantity: 24,
      iconColor: 'text-cyan-400',
    },
  ]);

  const updateQuantity = (id: number, delta: number) => {
    setCartItems(prev =>
      prev.map(item => {
        if (item.id === id) {
          const newQty = Math.max(0, item.quantity + delta);
          return { ...item, quantity: newQty };
        }
        return item;
      }).filter(item => item.quantity > 0)
    );
  };

  // Financial Calculations matching the image totals
  const subtotal = cartItems.reduce((acc, item) => acc + item.pricePerUnit * item.quantity, 0);
  const delivery = subtotal > 0 ? 180.00 : 0.00;
  const gst = subtotal * 0.05; // 5% GST calculation
  const smartTradeCredit = subtotal > 0 ? -500.00 : 0.00;
  const total = Math.max(0, subtotal + delivery + gst + smartTradeCredit);

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
            <h2 className="text-2xl font-bold text-white tracking-tight">Your cart</h2>
            <p className="text-xs text-slate-400 mt-1">
              {cartItems.length} products from {cartItems.length} verified suppliers
            </p>
          </div>

          {/* Grid Layout: Cart List + Order Summary */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            
            {/* Left Column: Cart Items (8 cols) */}
            <div className="lg:col-span-8 space-y-3.5">
              {cartItems.length === 0 ? (
                <div className="p-8 text-center bg-[#0b1220]/80 border border-slate-800/80 rounded-2xl">
                  <p className="text-slate-400 text-sm">Your cart is empty.</p>
                  <button 
                    onClick={() => navigate('/retailer/ai-search')} 
                    className="mt-3 px-4 py-2 bg-cyan-400 text-slate-950 font-bold text-xs rounded-xl"
                  >
                    Browse Products
                  </button>
                </div>
              ) : (
                cartItems.map((item) => (
                  <div 
                    key={item.id}
                    className="bg-[#0b1220]/80 border border-slate-800/80 rounded-2xl p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 hover:border-slate-700 transition-all"
                  >
                    {/* Item Details */}
                    <div className="flex items-center gap-3.5">
                      <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center shrink-0">
                        <Box className={`w-6 h-6 ${item.iconColor}`} />
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-white">{item.name}</h4>
                        <div className="text-xs text-slate-400 mt-0.5">{item.supplier}</div>
                        <div className="mt-2">
                          <span className={`px-2 py-0.5 rounded border text-[9px] font-bold uppercase tracking-wider ${item.badgeStyle}`}>
                            • {item.badge}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Quantity Controls & Line Total */}
                    <div className="flex items-center justify-between w-full sm:w-auto gap-6 border-t sm:border-t-0 pt-3 sm:pt-0 border-slate-800/60">
                      <div className="flex items-center bg-[#070b14] border border-slate-800 rounded-lg p-1">
                        <button 
                          onClick={() => updateQuantity(item.id, -1)}
                          className="w-6 h-6 rounded flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="w-10 text-center text-xs font-bold text-white">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.id, 1)}
                          className="w-6 h-6 rounded flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <div className="text-right min-w-[90px]">
                        <div className="text-sm font-extrabold text-white">
                          ₹{(item.pricePerUnit * item.quantity).toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Right Column: Order Summary Card (4 cols) */}
            <div className="lg:col-span-4 bg-[#0b1220]/90 border border-slate-800/80 rounded-2xl p-5 space-y-4">
              <div>
                <h3 className="text-sm font-semibold text-white">Order summary</h3>
                <p className="text-[11px] text-slate-500 mt-0.5">Discounts applied</p>
              </div>

              {/* Price Breakdown */}
              <div className="space-y-2.5 text-xs text-slate-300 border-t border-b border-slate-800/60 py-3.5">
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Subtotal</span>
                  <span className="font-medium text-white">₹{subtotal.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Delivery</span>
                  <span className="font-medium text-white">₹{delivery.toFixed(2)}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">GST</span>
                  <span className="font-medium text-white">₹{gst.toFixed(2)}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">SmartTrade credit</span>
                  <span className="font-medium text-emerald-400">-₹{Math.abs(smartTradeCredit).toFixed(2)}</span>
                </div>
              </div>

              {/* Total Price */}
              <div className="flex items-center justify-between pt-1">
                <span className="text-sm font-bold text-white">Total</span>
                <span className="text-xl font-black text-white">
                  ₹{total.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </span>
              </div>

              {/* Savings Alert Banner */}
              <div className="p-3 rounded-xl bg-emerald-950/30 border border-emerald-800/40 flex items-start gap-2.5">
                <AlertTriangle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-semibold text-emerald-400">You saved ₹1,126</div>
                  <div className="text-[10px] text-slate-400">Bulk tiers + credit</div>
                </div>
              </div>

              {/* Proceed Button */}
              <button 
                onClick={() => navigate('/retailer/checkout')}
                className="w-full py-3 bg-cyan-400 hover:bg-cyan-300 text-slate-950 rounded-xl font-bold text-xs flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(6,182,212,0.25)] transition-all"
              >
                <ArrowRight className="w-4 h-4" />
                Proceed to checkout
              </button>
            </div>

          </div>

        </div>
      </main>

    </div>
  );
}