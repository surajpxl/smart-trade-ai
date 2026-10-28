import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Radio,
  Mail,
  Lock,
  ArrowRight,
  Check,
  Store,
  Building2,
  ShieldCheck,
  Loader2,
  User,
} from "lucide-react";

import { useRegister } from "../../hooks/useRegister";
import type { RegisterData, RegisterFormValues } from "../../types/auth.types";
const initialForm: RegisterFormValues = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
  role: "retailer",
  agreeTerms: false,
};

export default function Register() {
  const [form, setForm] = useState<RegisterFormValues>(initialForm);

  const { submitRegistration, isLoading, error, clearError } = useRegister();

  const handleRegister = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await submitRegistration(form);
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value, type } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]:
        type === "checkbox"
          ? (event.target as HTMLInputElement).checked
          : value,
    }));

    clearError();
  };

  return (
    <div className="min-h-screen bg-[#070b14] text-slate-100 flex flex-col justify-between font-sans selection:bg-cyan-500 selection:text-black">
      {/* Top Banner Tag */}
      <div className="px-8 pt-4 text-xs text-slate-500 font-medium">
        Create account
      </div>

      {/* Main Grid Layout */}
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 min-h-full">
        {/* Left Hero Section (5 cols) */}
        <div className="lg:col-span-5 p-8 lg:p-16 flex flex-col justify-between border-r border-slate-800/40 relative overflow-hidden">
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

            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-white leading-[1.15] mb-6">
              Your local growth
              <br />
              <span className="text-slate-100">engine starts here.</span>
            </h1>

            <p className="text-slate-400 text-base lg:text-lg max-w-md leading-relaxed mb-12">
              Access trusted buyers, predictive planning and AI-assisted
              commerce in one connected operating system.
            </p>

            {/* Key Metrics */}
            <div className="grid grid-cols-3 gap-4 border-t border-slate-800/80 pt-8">
              <div>
                <div className="text-2xl lg:text-3xl font-extrabold text-cyan-400 tracking-tight">
                  18k+
                </div>
                <div className="text-xs text-slate-500 mt-1 font-medium">
                  verified businesses
                </div>
              </div>
              <div>
                <div className="text-2xl lg:text-3xl font-extrabold text-cyan-400 tracking-tight">
                  94%
                </div>
                <div className="text-xs text-slate-500 mt-1 font-medium">
                  same-day fulfillment
                </div>
              </div>
              <div>
                <div className="text-2xl lg:text-3xl font-extrabold text-cyan-400 tracking-tight">
                  ₹42Cr
                </div>
                <div className="text-xs text-slate-500 mt-1 font-medium">
                  monthly GMV
                </div>
              </div>
            </div>
          </div>

          {/* Compliance Footer */}
          <div className="relative z-10 text-xs text-slate-500 tracking-wide font-medium">
            AES-256 encrypted · GSTN verified · PCI DSS compliant
          </div>
        </div>

        {/* Right Form Section (7 cols) */}
        <div className="lg:col-span-7 flex items-center justify-center p-6 lg:p-12 relative">
          <div className="w-full max-w-lg bg-[#0b1220]/80 backdrop-blur-xl border border-slate-800/80 rounded-2xl p-8 shadow-2xl shadow-black/60 relative z-10">
            {/* Header */}
            <div className="mb-6">
              <span className="text-[11px] font-bold text-cyan-500 uppercase tracking-widest block mb-2">
                CREATE YOUR WORKSPACE
              </span>
              <h2 className="text-2xl lg:text-3xl font-semibold text-white tracking-tight mb-1">
                Register your business
              </h2>
              <p className="text-xs text-slate-400 leading-relaxed">
                Use the details on your GST certificate for instant
                verification.
              </p>
            </div>

            {/* Multi-step Wizard Indicator */}
            <div className="flex items-center justify-center gap-3 my-6 pb-2 border-b border-slate-800/60 text-xs font-medium">
              <div className="flex items-center gap-1.5 text-cyan-400">
                <div className="w-5 h-5 rounded-full bg-cyan-500 text-slate-950 font-bold flex items-center justify-center text-[11px]">
                  1
                </div>
                <span>Account</span>
              </div>
              <div className="w-8 h-[1px] bg-slate-800" />
              <div className="flex items-center gap-1.5 text-cyan-400">
                <div className="w-5 h-5 rounded-full bg-cyan-500 text-slate-950 font-bold flex items-center justify-center text-[11px]">
                  2
                </div>
                <span>Role</span>
              </div>
              <div className="w-8 h-[1px] bg-slate-800" />
              <div className="flex items-center gap-1.5 text-slate-500">
                <div className="w-5 h-5 rounded-full bg-slate-800 text-slate-400 font-bold flex items-center justify-center text-[11px]">
                  3
                </div>
                <span>Verify</span>
              </div>
            </div>

            {/* Error Banner */}
            {error && (
              <p role="alert" className="text-sm text-red-500">
                {error}
              </p>
            )}

            <form onSubmit={handleRegister} className="space-y-4">
              {/* Full Name Field */}
              <div className="space-y-1.5">
                <label className="text-xs font-medium text-slate-300 block">
                  Full Name
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <User className="w-4 h-4" />
                  </div>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="SurajGupta"
                    className="w-full pl-10 pr-4 py-2 bg-[#080d1a] border border-slate-700/60 rounded-lg text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
                  />
                </div>
              </div>

              {/* Business Email Field */}
              <div className="space-y-1.5">
                <label className="text-xs font-medium text-slate-300 block">
                  Business email
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <Mail className="w-4 h-4" />
                  </div>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) =>
                      setForm({ ...form, email: e.target.value })
                    }
                    placeholder="suraj@gmail.com"
                    className="w-full pl-10 pr-4 py-2 bg-[#080d1a] border border-slate-700/60 rounded-lg text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
                  />
                </div>
              </div>

              {/* Create Password & Confirm Password Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {/* Create Password */}
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-slate-300 block">
                    Create password
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                      <Lock className="w-4 h-4" />
                    </div>
                    <input
                      type="password"
                      required
                      value={form.password}
                      onChange={(e) =>
                        setForm({ ...form, password: e.target.value })
                      }
                      placeholder="••••••••••••"
                      className="w-full pl-10 pr-4 py-2 bg-[#080d1a] border border-slate-700/60 rounded-lg text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
                    />
                  </div>
                </div>

                {/* Confirm Password */}
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-slate-300 block">
                    Confirm password
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
                        confirmPassword && form.password !== confirmPassword
                          ? "border-red-500 focus:ring-1 focus:ring-red-500"
                          : "border-slate-700/60 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
                      }`}
                    />
                  </div>
                </div>
              </div>

              {/* Helper/Mismatch Indicator */}
              {confirmPassword && form.password !== confirmPassword ? (
                <span className="text-[10px] text-red-400 block">
                  Passwords do not match
                </span>
              ) : (
                <span className="text-[10px] text-slate-500 block">
                  12+ characters with number and symbol
                </span>
              )}

              {/* Role Selector */}
              <div className="space-y-2 pt-1">
                <label className="text-xs font-medium text-slate-300 block">
                  Choose your primary role
                </label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setForm({ ...form, role: "retailer" })}
                    className={`py-2.5 px-2 rounded-lg border text-center transition-all flex flex-col items-center gap-1.5 ${
                      form.role === "retailer"
                        ? "bg-cyan-950/40 border-cyan-500 text-cyan-400"
                        : "bg-[#080d1a] border-slate-800 text-slate-400 hover:border-slate-700"
                    }`}
                  >
                    <Store className="w-4 h-4" />
                    <span className="text-xs font-medium">Retailer</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setForm({ ...form, role: "supplier" })}
                    className={`py-2.5 px-2 rounded-lg border text-center transition-all flex flex-col items-center gap-1.5 ${
                      form.role === "supplier"
                        ? "bg-cyan-950/40 border-cyan-500 text-cyan-400"
                        : "bg-[#080d1a] border-slate-800 text-slate-400 hover:border-slate-700"
                    }`}
                  >
                    <Building2 className="w-4 h-4" />
                    <span className="text-xs font-medium">Supplier</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setForm({ ...form, role: "admin" })}
                    className={`py-2.5 px-2 rounded-lg border text-center transition-all flex flex-col items-center gap-1.5 ${
                      form.role === "admin"
                        ? "bg-cyan-950/40 border-cyan-500 text-cyan-400"
                        : "bg-[#080d1a] border-slate-800 text-slate-400 hover:border-slate-700"
                    }`}
                  >
                    <ShieldCheck className="w-4 h-4" />
                    <span className="text-xs font-medium">Admin</span>
                  </button>
                </div>
              </div>

              {/* Terms Checkbox */}
              {/* <div className="pt-2">
                <label className="flex items-center gap-2 cursor-pointer text-xs text-slate-400 hover:text-slate-300">
                  <div
                    onClick={() => setAgreeTerms(!agreeTerms)}
                    className={`w-4 h-4 rounded border flex items-center justify-center transition-all ${
                      agreeTerms
                        ? "bg-cyan-500 border-cyan-500 text-black"
                        : "border-slate-600 bg-[#080d1a]"
                    }`}
                  >
                    {agreeTerms && <Check className="w-3 h-3 stroke-[3]" />}
                  </div>
                  <span>I agree to Business Terms and GSTN verification.</span>
                </label>
              </div> */}

              {/* Submit Button */}
              <button type="submit" disabled={isLoading}>
                {isLoading ? "Creating account..." : "Register"}
              </button>
            </form>

            <div className="mt-6 text-center text-xs text-slate-400">
              Already have an account?{" "}
              <Link
                to="/login"
                className="text-cyan-400 hover:text-cyan-300 font-semibold transition-colors ml-0.5"
              >
                Sign in
              </Link>
            </div>
          </div>
        </div>
      </div>

      <footer className="py-4 text-center text-[11px] text-slate-600 border-t border-slate-900/80">
        © 2026 SmartTrade Technologies · Privacy · Terms
      </footer>
    </div>
  );
}
