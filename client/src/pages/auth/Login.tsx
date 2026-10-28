import { useState } from "react";
import type { FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Radio, Mail, Lock, ArrowRight, Check, Loader2 } from "lucide-react";

import { useLogin } from "../../hooks/useLogin";
import { getDashboardRoute } from "../../utils/roleRedirect";

export default function Login() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [rememberDevice, setRememberDevice] = useState(true);

  const { mutateAsync, isLoading, error, clearError } = useLogin();

  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    clearError();

    try {
      const data = await mutateAsync(form);
      const dashboard = getDashboardRoute(data.user.role);

      if (dashboard === "/login") {
        throw new Error("Unsupported user role.");
      }

      navigate(dashboard, { replace: true });
    } catch (err: unknown) {
      if (err instanceof Error && err.message === "Unsupported user role.") {
        // Handle unsupported roles without exposing implementation details.
        return;
      }
      const message = (error as { response?: { data?: { message?: string } } })
        .response?.data?.message;
    }
  };

  return (
    <div className="min-h-screen bg-[#070b14] text-slate-100 flex flex-col justify-between font-sans selection:bg-cyan-500 selection:text-black">
      {/* Main Grid Layout */}
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 min-h-full">
        {/* Left Hero Section (5 cols) */}
        <div className="lg:col-span-5 p-8 lg:p-16 flex flex-col justify-between border-r border-slate-800/40 relative overflow-hidden">
          {/* Background Glows */}
          <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute bottom-10 left-10 w-72 h-72 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />

          {/* Header */}
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
              Trade locally.
              <br />
              <span className="text-slate-100">Operate intelligently.</span>
            </h1>

            <p className="text-slate-400 text-base lg:text-lg max-w-md leading-relaxed mb-12">
              One trusted network for retailers, manufacturers and
              suppliers—powered by real-time neighbourhood demand.
            </p>

            {/* Metrics */}
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

          {/* Footer badge */}
          <div className="relative z-10 text-xs text-slate-500 tracking-wide font-medium">
            AES-256 encrypted · GSTN verified · PCI DSS compliant
          </div>
        </div>

        {/* Right Form Section (7 cols) */}
        <div className="lg:col-span-7 flex items-center justify-center p-6 lg:p-12 relative">
          <div className="w-full max-w-md bg-[#0b1220]/80 backdrop-blur-xl border border-slate-800/80 rounded-2xl p-8 shadow-2xl shadow-black/60 relative z-10">
            <div className="mb-8">
              <span className="text-[11px] font-bold text-cyan-500 uppercase tracking-widest block mb-2">
                SECURE BUSINESS ACCESS
              </span>
              <h2 className="text-2xl lg:text-3xl font-semibold text-white tracking-tight mb-2">
                Welcome back
              </h2>
              <p className="text-sm text-slate-400 leading-relaxed">
                Sign in to manage orders, inventory and intelligent trade
                workflows.
              </p>
            </div>

            {/* Error Banner */}
            {error && (
              <div
                role="alert"
                className="mb-5 rounded-lg border border-red-500/30 bg-red-500/10 p-3 text-xs leading-relaxed text-red-400"
              >
                {error}
              </div>
            )}
            <form onSubmit={handleLogin} className="space-y-5">
              {/* Email / Username Field */}
              <div className="space-y-2">
                <label className="text-xs font-medium text-slate-300 block">
                  Business email or mobile
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
                    placeholder="owner@shreeganeshstores.in"
                    className="w-full pl-10 pr-4 py-2.5 bg-[#080d1a] border border-slate-700/60 rounded-lg text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
                  />
                </div>
              </div>

              {/* Password Field */}
              <div className="space-y-2">
                <label className="text-xs font-medium text-slate-300 block">
                  Password
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
                    className="w-full pl-10 pr-4 py-2.5 bg-[#080d1a] border border-slate-700/60 rounded-lg text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
                  />
                </div>
              </div>

              {/* Remember Me & Forgot Password */}
              <div className="flex items-center justify-between text-xs pt-1">
                <label className="flex items-center gap-2 cursor-pointer text-slate-300 hover:text-slate-200">
                  <div
                    onClick={() => setRememberDevice(!rememberDevice)}
                    className={`w-4 h-4 rounded border flex items-center justify-center transition-all ${
                      rememberDevice
                        ? "bg-cyan-500 border-cyan-500 text-black"
                        : "border-slate-600 bg-[#080d1a]"
                    }`}
                  >
                    {rememberDevice && <Check className="w-3 h-3 stroke-[3]" />}
                  </div>
                  <span>Remember this device</span>
                </label>

                <Link
                  to="/forgot-password"
                  className="text-cyan-400 hover:text-cyan-300 transition-colors font-medium"
                >
                  Forgot password?
                </Link>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full mt-2 py-3 px-4 bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-semibold rounded-lg text-sm transition-all duration-200 flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(34,211,238,0.25)] hover:shadow-[0_0_25px_rgba(34,211,238,0.35)] active:scale-[0.99] disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Signing in...</span>
                  </>
                ) : (
                  <>
                    <span>Sign in securely</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>

            <div className="relative my-6 text-center">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-slate-800" />
              </div>
              <span className="relative px-3 bg-[#0b1220] text-[10px] font-semibold tracking-wider text-slate-500 uppercase">
                OR
              </span>
            </div>

            {/* Google OAuth Button */}
            <button
              type="button"
              className="w-full py-2.5 px-4 bg-[#111928] hover:bg-[#162032] border border-slate-700/60 rounded-lg text-sm text-slate-200 font-medium transition-all flex items-center justify-center gap-2.5"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24">
                <path
                  fill="#EA4335"
                  d="M12 5c1.6 0 3 .6 4.1 1.6l3.1-3.1C17.3 1.7 14.8 1 12 1 7.5 1 3.7 3.6 1.9 7.3l3.7 2.9C6.5 7.2 9 5 12 5z"
                />
                <path
                  fill="#4285F4"
                  d="M23.5 12.3c0-.8-.1-1.6-.2-2.3H12v4.5h6.5c-.3 1.5-1.1 2.8-2.4 3.7l3.7 2.9c2.2-2 3.7-5 3.7-8.8z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.6 14.8c-.2-.7-.4-1.5-.4-2.3s.2-1.6.4-2.3L1.9 7.3C.7 9.7 0 12 0 14.8s.7 5.1 1.9 7.5l3.7-2.9z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c3.2 0 6-1.1 8-3l-3.7-2.9c-1.1.7-2.5 1.2-4.3 1.2-3 0-5.5-2.2-6.4-5.2L1.9 16c1.8 3.7 5.6 7 10.1 7z"
                />
              </svg>
              <span>Continue with Google Workspace</span>
            </button>

            <div className="mt-8 text-center text-xs text-slate-400">
              New to SmartTrade?{" "}
              <Link
                to="/register"
                className="text-cyan-400 hover:text-cyan-300 font-semibold transition-colors ml-0.5"
              >
                Create business account
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
