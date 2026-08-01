import React from "react";
import bgImage from "../../assets/Images/bg-l.jpg";
import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { Navigate, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

function Login() {
  //STATE
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    //NOT REFRESH
    e.preventDefault();
    const data = { email, password };

    try {
      await axios.get("/sanctum/csrf-cookie");

      const res = await axios.post("http://localhost:8000/api/login", data);

      if (res.data.status === 200) {
        //SET COOKIES
        Cookies.set("token", res.data.token);
        localStorage.setItem("user_name", res.data.username);
        localStorage.setItem("auth_userid", res.data.user_id);
        Swal.fire({
          icon: "success",
          title: "ورود موفقیت آمیز بود",
          text: res.data.message,
          confirmButtonText: "باشه",
        }).then(() => {
          window.location.href = "/";
        });
        //BACK TO HOME PAGE
        navigate("/");
      } else {
        //ERROR HANDLING
        Swal.fire({
          icon: "error",
          title: "خطا",
          text: res.data.message,
          confirmButtonText: "باشه",
        });
      }
    } catch {
      Swal.fire({
        icon: "error",
        title: "خطای سرور",
        text: "مشکلی در ارتباط با سرور پیش آمده",
        confirmButtonText: "باشه",
      });
    }
  };
  return (
    <div className="relative min-h-screen overflow-hidden flex items-center justify-center px-4 py-8 sm:px-6 lg:px-8">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-110 blur-sm"
        style={{ backgroundImage: `url(${bgImage})` }}
      />

      {/* Premium Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950/90 via-purple-950/80 to-indigo-950/90" />

      {/* Decorative Blobs */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-purple-600/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-indigo-600/20 rounded-full blur-3xl animate-pulse delay-1000" />
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-fuchsia-500/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />

      {/* Login Card */}
      <div className="relative z-10 w-full max-w-md">
        <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/10 backdrop-blur-2xl shadow-[0_25px_80px_rgba(0,0,0,0.45)]">
          {/* Glow Border Effect */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-purple-500/20 via-transparent to-indigo-500/20 pointer-events-none" />

          {/* Top Accent Line */}
          <div className="h-1 w-full bg-gradient-to-r from-purple-500 via-fuchsia-500 to-indigo-500" />

          {/* Content */}
          <div className="relative p-6 sm:p-8 md:p-10">
            {/* Logo/Icon Circle */}
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
                    d="M15.75 9V5.25A3.75 3.75 0 0012 1.5a3.75 3.75 0 00-3.75 3.75V9m-1.5 0h10.5A1.5 1.5 0 0118.75 10.5v8.25A1.5 1.5 0 0117.25 20.25H6.75A1.5 1.5 0 015.25 18.75V10.5A1.5 1.5 0 016.75 9z"
                  />
                </svg>
              </div>
            </div>

            {/* Title */}
            <div className="text-center mb-8">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-3">
                ورود به حساب کاربری
              </h2>
              <p
                dir="rtl"
                className="text-sm sm:text-base text-gray-300 leading-relaxed"
              >
                برای ادامه، اطلاعات ورود خود را وارد کنید.
              </p>
            </div>

            {/* Form */}
            <form className="space-y-5 sm:space-y-6" onSubmit={handleSubmit}>
              {/* Email Field */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-200">
                  ایمیل
                </label>
                <div className="relative">
                  <input
                    type="email"
                    placeholder="example@email.com"
                    className="w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-3.5 text-white placeholder-gray-400 outline-none transition-all duration-300 focus:border-purple-400 focus:bg-white/15 focus:ring-4 focus:ring-purple-500/20"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>

              {/* Password Field */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-200">
                  رمز عبور
                </label>
                <div className="relative">
                  <input
                    type="password"
                    placeholder="••••••••"
                    className="w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-3.5 text-white placeholder-gray-400 outline-none transition-all duration-300 focus:border-purple-400 focus:bg-white/15 focus:ring-4 focus:ring-purple-500/20"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="group relative w-full overflow-hidden rounded-2xl bg-gradient-to-r from-purple-600 via-fuchsia-600 to-indigo-600 px-6 py-3.5 text-white font-bold shadow-xl shadow-purple-900/40 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-2xl hover:shadow-purple-900/50 active:scale-[0.98]"
              >
                <span className="relative z-10">ورود به حساب کاربری</span>

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

export default Login;
