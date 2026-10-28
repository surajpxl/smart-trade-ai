import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Radio, 
  Search, 
  Bell, 
  Send, 
  Check, 
  Edit3, 
  Sliders, 
  LayoutDashboard, 
  Boxes, 
  TrendingUp, 
  Bot, 
  ShoppingBag, 
  Truck, 
  CreditCard 
} from 'lucide-react';

export default function AINegotiationPage() {
  const navigate = useNavigate();
  const [activeNav, setActiveNav] = useState('AI Negotiation');
  const [selectedChatId, setSelectedChatId] = useState(1);
  const [messageInput, setMessageInput] = useState('');

  const supplierNavItems = [
    { name: 'Overview', icon: LayoutDashboard, path: '/supplier/dashboard' },
    { name: 'Products', icon: Boxes, path: '/supplier/products' },
    { name: 'Forecasting', icon: TrendingUp, path: '/supplier/forecasting' },
    { name: 'AI Negotiation', icon: Bot, path: '/supplier/ai-negotiation' },
    { name: 'Orders', icon: ShoppingBag, path: '/supplier/orders' },
    { name: 'Logistics', icon: Truck, path: '/supplier/logistics' },
    { name: 'Payouts', icon: CreditCard, path: '/supplier/payouts' },
  ];

  // Conversations List
  const conversations = [
    {
      id: 1,
      initials: 'SG',
      name: 'Shree Ganesh Stores',
      time: '2m',
      itemInfo: 'Oil · 96 units',
      statusText: 'Buyer proposed ₹104.80',
      statusColor: 'text-cyan-400',
      isActive: true,
    },
    {
      id: 2,
      initials: 'MS',
      name: 'Mahadev Super Mart',
      time: '14m',
      itemInfo: 'Atta · 120 units',
      statusText: 'AI counter-offer ready',
      statusColor: 'text-cyan-400',
      isActive: false,
    },
    {
      id: 3,
      initials: 'FB',
      name: 'Fresh Basket Baner',
      time: '1h',
      itemInfo: 'Mixed staples · ₹82k',
      statusText: 'Accepted · awaiting PO',
      statusColor: 'text-emerald-400',
      isActive: false,
    },
    {
      id: 4,
      initials: 'OP',
      name: 'Om Provision Store',
      time: '3h',
      itemInfo: 'Oil · 48 units',
      statusText: 'Below margin guardrail',
      statusColor: 'text-rose-400',
      isActive: false,
    },
  ];

  // Selected Chat Thread Messages
  const [chatMessages, setChatMessages] = useState([
    {
      id: 1,
      sender: 'buyer',
      text: 'We need 96 bottles tomorrow. Can you do ₹104 per unit?',
      timestamp: '10:26',
    },
    {
      id: 2,
      sender: 'ai',
      text: 'I can offer ₹106.20 with free delivery before 1 PM.',
      timestamp: '10:27',
      senderName: 'SmartTrade AI',
    },
    {
      id: 3,
      sender: 'buyer',
      text: 'Include 2% credit discount and we can confirm now.',
      timestamp: '10:28',
    },
    {
      id: 4,
      sender: 'ai-recommendation',
      text: 'Recommended: ₹105.80, 7-day credit, 17.2% margin.',
      timestamp: '10:29',
      senderName: 'SmartTrade AI',
      hasActions: true,
    },
  ]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!messageInput.trim()) return;

    setChatMessages(prev => [
      ...prev,
      {
        id: Date.now(),
        sender: 'supplier',
        text: messageInput,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      }
    ]);
    setMessageInput('');
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
              Supplier workspace
            </div>
          </div>

          {/* Nav Links */}
          <nav className="p-3 space-y-1">
            {supplierNavItems.map((item) => {
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

        {/* Supplier Account Footer */}
        <div className="p-4 border-t border-slate-800/60">
          <div className="p-2.5 rounded-xl bg-[#0b1220] border border-slate-800/80">
            <div className="text-xs font-semibold text-white">Aarav Foods Pvt Ltd</div>
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
            <button className="w-8 h-8 rounded-lg bg-[#0b1220] border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white">
              <Bell className="w-4 h-4" />
            </button>
          </div>
        </header>

        {/* Workspace Content */}
        <div className="p-6 lg:p-8 space-y-6 max-w-7xl flex-1 flex flex-col">
          
          {/* Active Conversation Title Header */}
          <div>
            <h2 className="text-2xl font-bold text-white tracking-tight">Shree Ganesh Stores</h2>
            <p className="text-xs text-slate-400 mt-1">
              Fortune Sunlite Oil · 96 units · ST-N-8294
            </p>
          </div>

          {/* Main 3-Column Layout: Inbox (Left) | Chat Thread (Center) | Guardrails (Right) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 flex-1 min-h-[560px]">
            
            {/* Left Column: Inbox List (3 cols) */}
            <div className="lg:col-span-3 bg-[#0b1220]/80 border border-slate-800/80 rounded-2xl p-4 flex flex-col space-y-4">
              <div>
                <h3 className="text-sm font-bold text-white">Inbox</h3>
                <p className="text-[11px] text-slate-500 mt-0.5">4 active conversations</p>
              </div>

              <div className="space-y-2 overflow-y-auto flex-1 pr-1">
                {conversations.map((item) => {
                  const isSelected = selectedChatId === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => setSelectedChatId(item.id)}
                      className={`w-full text-left p-3 rounded-xl border transition-all ${
                        isSelected
                          ? 'bg-cyan-950/40 border-cyan-800/80 shadow-[0_0_15px_rgba(6,182,212,0.1)]'
                          : 'bg-[#070b14]/50 border-slate-800/60 hover:bg-slate-900/40'
                      }`}
                    >
                      <div className="flex items-center justify-between gap-2">
                        <div className="flex items-center gap-2.5 min-w-0">
                          <div className="w-7 h-7 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-[11px] font-bold text-slate-300 shrink-0">
                            {item.initials}
                          </div>
                          <div className="text-xs font-bold text-white truncate">
                            {item.name}
                          </div>
                        </div>
                        <span className="text-[10px] text-slate-500 shrink-0">{item.time}</span>
                      </div>

                      <div className="mt-2 text-[10px] text-slate-400">
                        {item.itemInfo}
                      </div>

                      <div className={`mt-1 text-[10px] font-semibold truncate ${item.statusColor}`}>
                        {item.statusText}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Middle Column: Chat Thread (6 cols) */}
            <div className="lg:col-span-6 bg-[#0b1220]/80 border border-slate-800/80 rounded-2xl p-4 flex flex-col justify-between">
              
              {/* Chat Status Pill Banner */}
              <div className="flex items-center justify-between border-b border-slate-800/60 pb-3 mb-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-800 text-[10px] font-bold text-cyan-400 uppercase tracking-wider">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
                  • AI NEGOTIATING WITHIN GUARDRAILS
                </div>
              </div>

              {/* Chat Messages Body */}
              <div className="space-y-4 overflow-y-auto flex-1 pr-1 pb-4">
                {chatMessages.map((msg) => {
                  
                  // Buyer Message Bubble (Left)
                  if (msg.sender === 'buyer') {
                    return (
                      <div key={msg.id} className="flex flex-col items-start max-w-[85%]">
                        <div className="bg-[#0e172a] border border-slate-800 text-slate-200 text-xs p-3.5 rounded-2xl rounded-tl-sm leading-relaxed">
                          {msg.text}
                        </div>
                        <span className="text-[9px] text-slate-500 mt-1 ml-1">
                          Buyer · {msg.timestamp}
                        </span>
                      </div>
                    );
                  }

                  // Standard AI Counter Message Bubble (Right)
                  if (msg.sender === 'ai') {
                    return (
                      <div key={msg.id} className="flex flex-col items-end max-w-[85%] ml-auto">
                        <div className="bg-cyan-950/60 border border-cyan-800/60 text-slate-200 text-xs p-3.5 rounded-2xl rounded-tr-sm leading-relaxed">
                          {msg.text}
                        </div>
                        <span className="text-[9px] text-cyan-500 mt-1 mr-1">
                          {msg.senderName} · {msg.timestamp}
                        </span>
                      </div>
                    );
                  }

                  // AI Recommendation Card with Action Buttons (Right)
                  if (msg.sender === 'ai-recommendation') {
                    return (
                      <div key={msg.id} className="flex flex-col items-end max-w-[88%] ml-auto">
                        <div className="bg-[#0b1f2b] border border-cyan-800/80 text-slate-200 text-xs p-4 rounded-2xl rounded-tr-sm space-y-3 shadow-[0_0_20px_rgba(6,182,212,0.1)]">
                          <div>
                            <div className="font-bold text-cyan-200">{msg.text}</div>
                          </div>

                          {/* Approval Actions */}
                          {msg.hasActions && (
                            <div className="flex items-center gap-2 pt-1">
                              <button className="px-3 py-1.5 bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold text-xs rounded-lg flex items-center gap-1 transition-all">
                                <Check className="w-3.5 h-3.5 stroke-[3]" />
                                Approve
                              </button>
                              <button className="px-3 py-1.5 bg-slate-900/80 hover:bg-slate-800 text-slate-300 border border-slate-700 font-bold text-xs rounded-lg flex items-center gap-1 transition-all">
                                <Edit3 className="w-3.5 h-3.5 text-slate-400" />
                                Edit
                              </button>
                            </div>
                          )}
                        </div>
                        <span className="text-[9px] text-cyan-500 mt-1 mr-1">
                          {msg.senderName} · {msg.timestamp}
                        </span>
                      </div>
                    );
                  }

                  // Supplier Direct Custom Message (Right)
                  return (
                    <div key={msg.id} className="flex flex-col items-end max-w-[85%] ml-auto">
                      <div className="bg-slate-800 border border-slate-700 text-slate-100 text-xs p-3.5 rounded-2xl rounded-tr-sm">
                        {msg.text}
                      </div>
                      <span className="text-[9px] text-slate-400 mt-1 mr-1">
                        You · {msg.timestamp}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* Chat Input Bar */}
              <form onSubmit={handleSendMessage} className="relative mt-2">
                <input 
                  type="text" 
                  value={messageInput}
                  onChange={(e) => setMessageInput(e.target.value)}
                  placeholder="Message buyer or instruct the AI..." 
                  className="w-full bg-[#070b14] border border-slate-800 rounded-xl pl-4 pr-10 py-3 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-500/80"
                />
                <button 
                  type="submit" 
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 p-1.5 text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>

            </div>

            {/* Right Column: Margin Guardrails (3 cols) */}
            <div className="lg:col-span-3 bg-[#0b1220]/80 border border-slate-800/80 rounded-2xl p-5 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-bold text-white">Margin guardrails</h3>
                  <p className="text-[11px] text-slate-500 mt-0.5">Private to your team</p>
                </div>

                {/* Guardrail Metrics List */}
                <div className="space-y-3 text-xs pt-2">
                  <div className="flex items-center justify-between text-slate-400">
                    <span>Floor</span>
                    <span className="font-mono font-bold text-slate-200">₹104.80</span>
                  </div>

                  <div className="flex items-center justify-between text-slate-400">
                    <span>Target</span>
                    <span className="font-mono font-bold text-slate-200">18.8%</span>
                  </div>

                  <div className="flex items-center justify-between text-slate-400">
                    <span>Minimum</span>
                    <span className="font-mono font-bold text-slate-200">16.5%</span>
                  </div>

                  <div className="flex items-center justify-between text-slate-400">
                    <span>Credit</span>
                    <span className="font-mono font-bold text-slate-200">7 days</span>
                  </div>

                  <div className="flex items-center justify-between text-slate-400">
                    <span>Delivery</span>
                    <span className="font-mono font-bold text-slate-200">Above ₹8k</span>
                  </div>
                </div>

                {/* Live Margin Status Badge */}
                <div className="pt-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-800 text-[10px] font-bold text-emerald-400 uppercase tracking-wider">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    • 17.2% MARGIN
                  </span>
                </div>
              </div>

              {/* Adjust Controls CTA */}
              <button className="w-full py-2.5 bg-[#070b14] hover:bg-slate-900 border border-slate-800 text-slate-200 font-bold text-xs rounded-xl flex items-center justify-center gap-2 transition-all">
                <Sliders className="w-3.5 h-3.5 text-slate-400" />
                Adjust controls
              </button>

            </div>

          </div>

        </div>
      </main>

    </div>
  );
}