import React from "react";
import { Link } from "react-router-dom";

function Page404() {
  return (
    <div
      dir="rtl"
      className="relative min-h-screen overflow-hidden flex items-center justify-center px-4 sm:px-6 lg:px-8"
    >
      {/* Animated Background Glow */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-purple-600/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl animate-pulse delay-1000" />
      <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-fuchsia-500/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />

      {/* Main Card */}
      <div className="relative z-10 w-full max-w-3xl">
        <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/10 backdrop-blur-2xl shadow-[0_25px_80px_rgba(0,0,0,0.45)]">
          {/* Top Gradient Accent */}
          <div className="h-1 w-full bg-gradient-to-r from-purple-500 via-fuchsia-500 to-indigo-500" />

          {/* Content */}
          <div className="p-8 sm:p-12 lg:p-16 text-center">
            {/* 404 Number */}
            <h1 className="text-7xl sm:text-8xl lg:text-9xl font-black tracking-tight mb-6">
              <span className="bg-gradient-to-r from-purple-400 via-fuchsia-400 to-indigo-400 bg-clip-text text-transparent drop-shadow-[0_0_40px_rgba(168,85,247,0.35)]">
                404
              </span>
            </h1>

            {/* Icon */}
            <div className="flex justify-center mb-6">
              <div className="flex items-center justify-center w-24 h-24 rounded-3xl bg-gradient-to-br from-purple-600 to-indigo-600 shadow-xl shadow-purple-900/40 ring-1 ring-white/20">
                <span className="text-5xl">🚀</span>
              </div>
            </div>

            {/* Title */}
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
              صفحه مورد نظر پیدا نشد
            </h2>

            {/* Description */}
            <p className="text-gray-300 text-base sm:text-lg leading-8 max-w-2xl mx-auto mb-10">
              به نظر می‌رسد صفحه‌ای که دنبال آن هستید وجود ندارد، حذف شده است یا
              آدرس آن به درستی وارد نشده است.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              {/* Home Button */}
              <Link
                to="/"
                className="group relative w-full sm:w-auto overflow-hidden rounded-2xl bg-gradient-to-r from-purple-600 via-fuchsia-600 to-indigo-600 px-8 py-4 text-white font-bold shadow-xl shadow-purple-900/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-purple-900/50 active:scale-[0.98]"
              >
                <span className="relative z-10">بازگشت به خانه</span>

                {/* Shine Effect */}
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              </Link>

              {/* Blogs Button */}
              <Link
                to="/Blogs"
                className="w-full sm:w-auto rounded-2xl border border-white/15 bg-white/5 px-8 py-4 text-white font-semibold backdrop-blur-xl transition-all duration-300 hover:bg-white/10 hover:border-white/25"
              >
                مشاهده بلاگ‌ها
              </Link>
            </div>

            {/* Bottom Decorative Line */}
            <div className="mt-12 flex justify-center">
              <div className="h-1 w-40 rounded-full bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-70" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page404;
