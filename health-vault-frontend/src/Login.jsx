import { useState } from "react";
import {
  ShieldCheck,
  HeartPulse,
  LockKeyhole,
} from "lucide-react";

function Login({ onLogin, onRegister }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    // Temporary demo login.
    // Real FastAPI authentication will be connected later.

    if (
      email === "patient@test.com" &&
      password === "123456"
    ) {
      onLogin();
    } else {
      alert(
        "Demo login details:\n\nEmail: patient@test.com\nPassword: 123456"
      );
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex">

      {/* LEFT SIDE */}
      <div className="hidden lg:flex lg:w-1/2 bg-blue-600 text-white p-12 flex-col justify-between">

        {/* Logo */}
        <div className="flex items-center gap-3">

          <div className="bg-white text-blue-600 p-3 rounded-xl">
            <HeartPulse size={30} />
          </div>

          <span className="text-2xl font-bold">
            Health Vault
          </span>

        </div>

        {/* Main message */}
        <div className="max-w-lg">

          <h1 className="text-5xl font-bold leading-tight">
            Your health.
            <br />
            Your records.
            <br />
            Your control.
          </h1>

          <p className="text-blue-100 text-lg mt-6 leading-relaxed">
            A secure digital vault for your medical history,
            health reports and important medical information.
          </p>

          <div className="mt-8 space-y-4">

            <div className="flex items-center gap-3">
              <ShieldCheck size={22} />
              <span>Secure medical records</span>
            </div>

            <div className="flex items-center gap-3">
              <LockKeyhole size={22} />
              <span>Patient-controlled access</span>
            </div>

            <div className="flex items-center gap-3">
              <HeartPulse size={22} />
              <span>AI-powered health insights</span>
            </div>

          </div>

        </div>

        {/* Footer */}
        <p className="text-blue-200 text-sm">
          © 2026 Health Vault
        </p>

      </div>

      {/* RIGHT SIDE */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6">

        <div className="w-full max-w-md">

          {/* Mobile logo */}
          <div className="lg:hidden flex justify-center mb-8">

            <div className="flex items-center gap-3">

              <div className="bg-blue-600 text-white p-3 rounded-xl">
                <HeartPulse size={28} />
              </div>

              <span className="text-2xl font-bold text-slate-900">
                Health Vault
              </span>

            </div>

          </div>

          {/* Heading */}
          <div className="mb-8">

            <h2 className="text-3xl font-bold text-slate-900">
              Welcome back
            </h2>

            <p className="text-slate-500 mt-2">
              Sign in to access your medical records.
            </p>

          </div>

          {/* Login card */}
          <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-8">

            <form onSubmit={handleLogin}>

              {/* Email */}
              <div className="mb-5">

                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Email address
                </label>

                <input
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                />

              </div>

              {/* Password */}
              <div className="mb-4">

                <div className="flex justify-between mb-2">

                  <label className="text-sm font-medium text-slate-700">
                    Password
                  </label>

                  <button
                    type="button"
                    className="text-sm text-blue-600 hover:text-blue-700"
                  >
                    Forgot password?
                  </button>

                </div>

                <input
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                />

              </div>

              {/* Sign in */}
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl transition mt-4"
              >
                Sign in
              </button>

            </form>

            {/* Register */}
            <div className="text-center mt-6">

              <span className="text-sm text-slate-500">
                Don't have an account?{" "}
              </span>

              <button
                type="button"
                onClick={onRegister}
                className="text-sm text-blue-600 font-semibold hover:text-blue-700"
              >
                Create account
              </button>

            </div>

          </div>

          {/* Security message */}
          <div className="flex items-center justify-center gap-2 mt-6 text-xs text-slate-400">

            <LockKeyhole size={14} />

            <span>
              Your medical information is protected
            </span>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Login;