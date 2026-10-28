import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  Radio, 
  Mail, 
  Lock, 
  Clock, 
  RefreshCw, 
  ArrowLeft 
} from 'lucide-react';

export default function ForgotPassword() {
  const navigate = useNavigate();

  // Local state for UI testing
  const [identifier, setIdentifier] = useState('+91 ••••• 18476');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      setErrorMsg('Passwords do not match. Please try again.');
      return;
    }

    setIsLoading(true);
    setErrorMsg(null);

    // Simulated action for UI preview
    setTimeout(() => {
      setIsLoading(false);
      alert('Password updated successfully!');
      navigate('/login');
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-[#070b14] text-slate-100 flex flex-col justify-between font-sans selection:bg-cyan-500 selection:text-black">
      {/* Top Banner Tag */}
      <div className="px-8 pt-4 text-xs text-slate-500 font-medium">
        Forgot password
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
              Secure recovery,<br />
              <span className="text-slate-100">without slowing</span><br />
              <span className="text-slate-100">business.</span>
            </h1>

            <p className="text-slate-400 text-sm lg:text-base max-w-md leading-relaxed mb-12">
              We verify every recovery attempt and notify your business administrator to keep your account protected.
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
          
          <div className="w-full max-w-md bg-[#0b1220]/80 backdrop-blur-xl border border-slate-800/80 rounded-2xl p-8 shadow-2xl shadow-black/60 relative z-10">
            
            {/* Header */}
            <div className="mb-6">
              <span className="text-[10px] font-bold text-cyan-500 uppercase tracking-widest block mb-2">
                ACCOUNT RECOVERY
              </span>
              <h2 className="text-2xl font-semibold text-white tracking-tight mb-2">
                Reset your password
              </h2>
              <p className="text-xs text-slate-400 leading-relaxed">
                Enter your registered email or mobile number. We'll send a secure verification code.
              </p>
            </div>

            {/* Info Banner */}
            <div className="mb-6 p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-400 text-xs flex items-center gap-2.5">
              <Clock className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>Reset links expire after 15 minutes.</span>
            </div>

            {/* Error Message */}
            {errorMsg && (
              <div className="mb-4 p-3 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 text-xs">
                {errorMsg}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Business Email or Mobile Field */}
              <div className="space-y-1.5">
                <label className="text-xs font-medium text-slate-300 block">
                  Business email or mobile
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <Mail className="w-4 h-4" />
                  </div>
                  <input
                    type="text"
                    required
                    value={identifier}
                    onChange={(e) => setIdentifier(e.target.value)}
                    placeholder="+91 ••••• 18476"
                    className="w-full pl-10 pr-4 py-2 bg-[#080d1a] border border-slate-700/60 rounded-lg text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
                  />
                </div>
              </div>

              {/* OTP Verified Tag */}
              <div className="pt-1">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-emerald-950/60 border border-emerald-800/50 text-emerald-400 text-[10px] font-semibold tracking-wider uppercase">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  OTP VERIFIED
                </span>
              </div>

              {/* New Password & Confirm Password Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                
                {/* New Password */}
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-slate-300 block">
                    New password
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                      <Lock className="w-4 h-4" />
                    </div>
                    <input
                      type="password"
                      required
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                      placeholder="••••••••••••"
                      className="w-full pl-10 pr-4 py-2 bg-[#080d1a] border border-slate-700/60 rounded-lg text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
                    />
                  </div>
                </div>

                {/* Confirm Password */}
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-slate-300 block">
                    Confirm
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                      <Lock className="w-4 h-4" />
                    </div>
                    <input
                      type="password"
                      required
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      placeholder="••••••••••••"
                      className={`w-full pl-10 pr-4 py-2 bg-[#080d1a] border rounded-lg text-sm text-slate-100 placeholder-slate-500 focus:outline-none transition-all ${
                        confirmPassword && newPassword !== confirmPassword
                          ? 'border-red-500 focus:ring-1 focus:ring-red-500'
                          : 'border-slate-700/60 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500'
                      }`}
                    />
                  </div>
                </div>

              </div>

              {/* Password Specs Helper */}
              <span className="text-[10px] text-slate-500 block">
                12+ characters · uppercase · number · symbol
              </span>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full mt-4 py-2.5 px-4 bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-semibold rounded-lg text-sm transition-all duration-200 flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(34,211,238,0.25)] hover:shadow-[0_0_25px_rgba(34,211,238,0.35)] active:scale-[0.99] disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <RefreshCw className="w-4 h-4 animate-spin" />
                ) : (
                  <RefreshCw className="w-4 h-4" />
                )}
                <span>Update password</span>
              </button>

            </form>

            {/* Back to Sign In Link */}
            <div className="mt-6 text-center">
              <Link 
                to="/login" 
                className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-cyan-400 transition-colors font-medium"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Back to sign in</span>
              </Link>
            </div>

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