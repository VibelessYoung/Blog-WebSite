import React, { useState } from "react";
import bgImage from "../../assets/Images/bg-l.jpg";
import axios from "axios";
import Swal from "sweetalert2";
import { Navigate, useNavigate } from "react-router-dom";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({});
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { name, email, password };

    try {
      const res = await axios.post("/api/register", data);
      if (res.data.status === 200) {
        Swal.fire({
          icon: "success",
          title: "ثبت ‌نام موفق",
          text: res.data.messages || "حساب شما با موفقیت ایجاد شد",
          confirmButtonText: "باشه",
        });
        navigate("/Login");
        setError({});
      } else {
        setError(res.data.validation_errors);
      }
    } catch (err) {
      console.log(
        "خطا در درخواست:",
        err.response ? err.response.data : err.message,
      );
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden flex items-center justify-center px-4 py-8 sm:px-6 lg:px-8 pt-16">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-110 blur-sm"
        style={{ backgroundImage: `url(${bgImage})` }}
      />

      {/* Premium Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950/90 via-purple-950/80 to-indigo-950/90" />

      {/* Animated Glow Effects */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-purple-600/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-indigo-600/20 rounded-full blur-3xl animate-pulse delay-1000" />
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-fuchsia-500/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />

      {/* Register Card */}
      <div className="relative z-10 w-full max-w-md">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/10 backdrop-blur-2xl shadow-[0_25px_80px_rgba(0,0,0,0.45)]">
          {/* Gradient Border Overlay */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-purple-500/20 via-transparent to-indigo-500/20 pointer-events-none" />

          {/* Top Accent Line */}
          <div className="h-1 w-full bg-gradient-to-r from-purple-500 via-fuchsia-500 to-indigo-500" />

          {/* Content */}
          <div className="relative p-6 sm:p-8 md:p-10">
            {/* Icon */}
            <div className="flex justify-center mb-6">
              <div className="flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br from-purple-600 to-indigo-600 shadow-xl shadow-purple-900/40 ring-1 ring-white/20">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-10 h-10 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.8}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M18 9.75V6.75A3.75 3.75 0 0014.25 3h-4.5A3.75 3.75 0 006 6.75v3M4.5 9.75h15A1.5 1.5 0 0121 11.25v7.5A1.5 1.5 0 0119.5 20.25h-15A1.5 1.5 0 013 18.75v-7.5A1.5 1.5 0 014.5 9.75zm4.5-3.75A.75.75 0 019.75 5.25h4.5A.75.75 0 0115 6v3.75H9V6z"
                  />
                </svg>
              </div>
            </div>

            {/* Title */}
            <div className="text-center mb-8">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-3">
                ایجاد حساب کاربری
              </h2>
              <p dir="rtl" className="text-sm sm:text-base text-gray-300 leading-relaxed">
                برای شروع، اطلاعات خود را وارد کنید و حساب جدید بسازید.
              </p>
            </div>

            {/* Form */}
            <form className="space-y-5 sm:space-y-6" onSubmit={handleSubmit}>
              {/* Name Field */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-200">
                  نام کامل
                </label>
                <input
                  type="text"
                  placeholder="نام خود را وارد کنید"
                  className="w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-3.5 text-white placeholder-gray-400 outline-none transition-all duration-300 focus:border-purple-400 focus:bg-white/15 focus:ring-4 focus:ring-purple-500/20"
                  onChange={(e) => setName(e.target.value)}
                  name="name"
                />
                {error.name && (
                  <p className="text-sm text-red-400 mt-1 font-medium">
                    {error.name[0]}
                  </p>
                )}
              </div>

              {/* Email Field */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-200">
                  ایمیل
                </label>
                <input
                  type="email"
                  placeholder="example@email.com"
                  className="w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-3.5 text-white placeholder-gray-400 outline-none transition-all duration-300 focus:border-purple-400 focus:bg-white/15 focus:ring-4 focus:ring-purple-500/20"
                  onChange={(e) => setEmail(e.target.value)}
                  name="email"
                />
                {error.email && (
                  <p className="text-sm text-red-400 mt-1 font-medium">
                    {error.email[0]}
                  </p>
                )}
              </div>

              {/* Password Field */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-200">
                  رمز عبور
                </label>
                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-3.5 text-white placeholder-gray-400 outline-none transition-all duration-300 focus:border-purple-400 focus:bg-white/15 focus:ring-4 focus:ring-purple-500/20"
                  onChange={(e) => setPassword(e.target.value)}
                  name="password"
                />
                {error.password && (
                  <p className="text-sm text-red-400 mt-1 font-medium">
                    {error.password[0]}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="group relative w-full overflow-hidden rounded-2xl bg-gradient-to-r from-purple-600 via-fuchsia-600 to-indigo-600 px-6 py-3.5 text-white font-bold shadow-xl shadow-purple-900/40 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-2xl hover:shadow-purple-900/50 active:scale-[0.98]"
              >
                <span className="relative z-10">ثبت‌نام و ایجاد حساب</span>

                {/* Shine Effect */}
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
