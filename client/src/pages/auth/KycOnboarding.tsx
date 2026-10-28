import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Radio, 
  MapPin, 
  FileCheck2, 
  ArrowRight, 
  Clock, 
  Building 
} from 'lucide-react';

export default function KycOnboarding() {
  const navigate = useNavigate();

  // Local state for UI inputs
  const [formData, setFormData] = useState({
    businessName: 'Shree Ganesh Stores',
    gstin: '27AAQFK6382G1Z4',
    pan: 'AAQFK6382G',
    address: '47 Laxmi Road, Pune 411030',
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulated action for UI preview
    setTimeout(() => {
      setIsLoading(false);
      alert('Business details saved! Proceeding to Owner verification...');
      navigate('/dashboard');
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-[#070b14] text-slate-100 flex flex-col justify-between font-sans selection:bg-cyan-500 selection:text-black">
      {/* Top Banner Tag */}
      <div className="px-8 pt-4 text-xs text-slate-500 font-medium">
        KYC onboarding
      </div>

      {/* Main Grid Layout */}
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 min-h-full">
        
        {/* Left Hero Section (5 cols) */}
        <div className="lg:col-span-5 p-8 lg:p-16 flex flex-col justify-between border-r border-slate-800/40 relative overflow-hidden">
          {/* Background Glows */}
          <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute bottom-10 left-10 w-72 h-72 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />

          {/* Brand Header */}
          <div className="relative z-10 flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.15)]">
              <Radio className="w-5 h-5 animate-pulse" />
            </div>
            <span className="text-xl font-bold tracking-tight text-white">
              SmartTrade AI
            </span>
          </div>

          {/* Hero Content */}
          <div className="relative z-10 my-auto py-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/50 text-cyan-400 text-xs font-semibold tracking-wider uppercase mb-6 shadow-inner">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
              HYPER-LOCAL B2B INTELLIGENCE
            </div>

            <h1 className="text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.15] mb-6">
              Verified businesses<br />
              <span className="text-slate-100">trade with</span><br />
              <span className="text-slate-100">confidence.</span>
            </h1>

            <p className="text-slate-400 text-sm lg:text-base max-w-md leading-relaxed mb-12">
              SmartTrade cross-checks GSTN, PAN and bank ownership so every participant can transact securely.
            </p>

            {/* Key Metrics */}
            <div className="grid grid-cols-3 gap-4 border-t border-slate-800/80 pt-8">
              <div>
                <div className="text-xl lg:text-2xl font-extrabold text-cyan-400 tracking-tight">
                  18k+
                </div>
                <div className="text-[11px] text-slate-500 mt-1 font-medium">
                  verified businesses
                </div>
              </div>
              <div>
                <div className="text-xl lg:text-2xl font-extrabold text-cyan-400 tracking-tight">
                  94%
                </div>
                <div className="text-[11px] text-slate-500 mt-1 font-medium">
                  same-day fulfillment
                </div>
              </div>
              <div>
                <div className="text-xl lg:text-2xl font-extrabold text-cyan-400 tracking-tight">
                  ₹42Cr
                </div>
                <div className="text-[11px] text-slate-500 mt-1 font-medium">
                  monthly GMV
                </div>
              </div>
            </div>
          </div>

          {/* Compliance Footer */}
          <div className="relative z-10 text-[11px] text-slate-500 tracking-wide font-medium">
            AES-256 encrypted · GSTN verified · PCI DSS compliant
          </div>
        </div>

        {/* Right Form Section (7 cols) */}
        <div className="lg:col-span-7 flex items-center justify-center p-6 lg:p-12 relative">
          
          <div className="w-full max-w-lg bg-[#0b1220]/80 backdrop-blur-xl border border-slate-800/80 rounded-2xl p-8 shadow-2xl shadow-black/60 relative z-10">
            
            {/* Header Tag & Title */}
            <div className="mb-6">
              <span className="text-[10px] font-bold text-cyan-500 uppercase tracking-widest block mb-2">
                BUSINESS VERIFICATION
              </span>
              <h2 className="text-2xl lg:text-3xl font-semibold text-white tracking-tight mb-2">
                Verify {formData.businessName || 'Business'}
              </h2>
              <p className="text-xs text-slate-400 leading-relaxed">
                Complete KYC to unlock credit terms, payments and marketplace purchasing.
              </p>
            </div>

            {/* Multi-step Wizard Indicator */}
            <div className="flex items-center justify-center gap-3 my-6 pb-2 border-b border-slate-800/60 text-xs font-medium">
              <div className="flex items-center gap-1.5 text-cyan-400">
                <div className="w-5 h-5 rounded-full bg-cyan-500 text-slate-950 font-bold flex items-center justify-center text-[11px]">
                  1
                </div>
                <span className="font-semibold text-white">Business</span>
              </div>
              <div className="w-8 h-[1px] bg-slate-800" />
              <div className="flex items-center gap-1.5 text-slate-500">
                <div className="w-5 h-5 rounded-full bg-slate-800 text-slate-400 font-bold flex items-center justify-center text-[11px]">
                  2
                </div>
                <span>Owner</span>
              </div>
              <div className="w-8 h-[1px] bg-slate-800" />
              <div className="flex items-center gap-1.5 text-slate-500">
                <div className="w-5 h-5 rounded-full bg-slate-800 text-slate-400 font-bold flex items-center justify-center text-[11px]">
                  3
                </div>
                <span>Bank</span>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Legal Business Name */}
              <div className="space-y-1.5">
                <label className="text-xs font-medium text-slate-300 block">
                  Legal business name
                </label>
                <div className="relative">
                  <input
                    type="text"
                    required
                    value={formData.businessName}
                    onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                    className="w-full px-3.5 py-2 bg-[#080d1a] border border-slate-700/60 rounded-lg text-sm text-slate-100 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all font-medium"
                  />
                </div>
              </div>

              {/* GSTIN and PAN Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-slate-300 block">
                    GSTIN
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.gstin}
                    onChange={(e) => setFormData({ ...formData, gstin: e.target.value })}
                    className="w-full px-3.5 py-2 bg-[#080d1a] border border-slate-700/60 rounded-lg text-sm text-slate-100 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all font-mono"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-slate-300 block">
                    PAN
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.pan}
                    onChange={(e) => setFormData({ ...formData, pan: e.target.value })}
                    className="w-full px-3.5 py-2 bg-[#080d1a] border border-slate-700/60 rounded-lg text-sm text-slate-100 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all font-mono"
                  />
                </div>
              </div>

              {/* Registered Address */}
              <div className="space-y-1.5">
                <label className="text-xs font-medium text-slate-300 block">
                  Registered address
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <input
                    type="text"
                    required
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    className="w-full pl-10 pr-4 py-2 bg-[#080d1a] border border-slate-700/60 rounded-lg text-sm text-slate-100 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
                  />
                </div>
              </div>

              {/* GST Certificate Status Card */}
              <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800/80 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center text-slate-400">
                    <FileCheck2 className="w-4 h-4 text-cyan-400" />
                  </div>
                  <div>
                    <div className="text-xs font-medium text-slate-200">GST certificate uploaded</div>
                    <div className="text-[10px] text-slate-500">GST and PAN checks complete</div>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-md bg-emerald-950/60 border border-emerald-800/50 text-emerald-400 text-[10px] font-semibold tracking-wider uppercase flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  VERIFIED
                </span>
              </div>

              {/* Verification Status Banner */}
              <div className="p-3.5 rounded-xl bg-amber-950/20 border border-amber-800/30 flex items-center justify-between">
                <div className="space-y-0.5">
                  <div className="text-xs font-semibold text-amber-400">Verification status</div>
                  <div className="text-[10px] text-amber-300/70">
                    Bank ownership is in review · ETA 2:30 PM
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-md bg-amber-950/80 border border-amber-700/50 text-amber-400 text-[10px] font-semibold tracking-wider uppercase flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                  IN REVIEW
                </span>
              </div>

              {/* Save and Continue Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full mt-4 py-3 px-4 bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-semibold rounded-lg text-sm transition-all duration-200 flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(34,211,238,0.25)] hover:shadow-[0_0_25px_rgba(34,211,238,0.35)] active:scale-[0.99] disabled:opacity-60 disabled:cursor-not-allowed"
              >
                <span>Save and continue</span>
                <ArrowRight className="w-4 h-4" />
              </button>

            </form>

          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-4 text-center text-[11px] text-slate-600 border-t border-slate-900/80">
        © 2026 SmartTrade Technologies · Privacy · Terms
      </footer>
    </div>
  );
}