import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

function Navbar() {
  const [menu, setMenu] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(
    !!localStorage.getItem("user_name"),
  );
  const navigate = useNavigate();

  const Logout = () => {
    Cookies.remove("token");
    localStorage.clear();
    setIsLoggedIn(false);
    navigate("/Login");
  };

  return (
    <nav
      dir="rtl"
      className="fixed top-0 left-0 right-0 z-50 px-4 pt-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        {/* Main Navbar Container */}
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/10 backdrop-blur-2xl shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
          {/* Gradient Border Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-transparent to-indigo-500/10 pointer-events-none" />

          {/* Top Accent Line */}
          <div className="h-1 w-full bg-gradient-to-r from-purple-500 via-fuchsia-500 to-indigo-500" />

          {/* Navbar Content */}
          <div className="relative px-5 py-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between">
              {/* Logo */}
              <Link to="/" className="group flex items-center gap-3 shrink-0">
                <div className="flex items-center justify-center w-11 h-11 rounded-2xl bg-gradient-to-br from-purple-600 to-indigo-600 shadow-lg shadow-purple-900/40 ring-1 ring-white/20 transition-transform duration-300 group-hover:scale-110">
                  <span className="text-white text-xl">📝</span>
                </div>

                <div>
                  <h1 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
                    BlogSite
                  </h1>
                  <p className="hidden sm:block text-xs text-gray-400">
                    Modern Blogging Platform
                  </p>
                </div>
              </Link>

              {/* Desktop Menu */}
              <div className="hidden lg:flex items-center gap-2">
                {/* Navigation Links */}
                <Link
                  to="/"
                  className="px-4 py-2.5 rounded-2xl text-sm font-medium text-gray-200 hover:text-white hover:bg-white/10 transition-all duration-300"
                >
                  خانه
                </Link>

                <Link
                  to="/Blogs"
                  className="px-4 py-2.5 rounded-2xl text-sm font-medium text-gray-200 hover:text-white hover:bg-white/10 transition-all duration-300"
                >
                  بلاگ‌ها
                </Link>

                <Link
                  to="/"
                  className="px-4 py-2.5 rounded-2xl text-sm font-medium text-gray-200 hover:text-white hover:bg-white/10 transition-all duration-300"
                >
                  جستجو
                </Link>

                {/* Divider */}
                <div className="w-px h-8 bg-white/10 mx-2" />

                {/* Auth Section */}
                {isLoggedIn ? (
                  <div className="flex items-center gap-2">
                    <Link
                      to="/Create"
                      className="px-4 py-2.5 rounded-2xl text-sm font-medium text-gray-200 hover:text-white hover:bg-white/10 transition-all duration-300"
                    >
                      ارسال پست
                    </Link>
                    <Link
                      to="/blog/MyBlogs"
                      className="px-4 py-2.5 rounded-2xl text-sm font-medium text-gray-200 hover:text-white hover:bg-white/10 transition-all duration-300"
                    >
                      بلاگ های من
                    </Link>

                    <button
                      onClick={Logout}
                      className="group relative overflow-hidden rounded-2xl bg-gradient-to-r from-rose-500 to-red-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-red-900/30 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl active:scale-[0.98]"
                    >
                      <span className="relative z-10">خروج</span>
                      <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                    </button>
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    <Link
                      to="/Login"
                      className="px-4 py-2.5 rounded-2xl text-sm font-medium text-gray-200 hover:text-white hover:bg-white/10 transition-all duration-300"
                    >
                      ورود
                    </Link>

                    <Link
                      to="/Register"
                      className="group relative overflow-hidden rounded-2xl bg-gradient-to-r from-purple-600 via-fuchsia-600 to-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-purple-900/30 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl active:scale-[0.98]"
                    >
                      <span className="relative z-10">ثبت‌نام</span>
                      <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                    </Link>
                  </div>
                )}
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMenu((prev) => !prev)}
                className="lg:hidden flex items-center justify-center w-11 h-11 rounded-2xl bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-all duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.8}
                  className={`w-6 h-6 transition-transform duration-300 ${
                    menu ? "rotate-90 scale-110" : "rotate-0"
                  }`}
                >
                  {menu ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5"
                    />
                  )}
                </svg>
              </button>
            </div>

            {/* Mobile Dropdown */}
            <div
              className={`lg:hidden overflow-hidden transition-all duration-500 ${
                menu
                  ? "max-h-[500px] opacity-100 mt-4"
                  : "max-h-0 opacity-0 mt-0"
              }`}
            >
              <div className="border-t border-white/10 pt-4 space-y-2">
                <Link
                  to="/"
                  onClick={() => setMenu(false)}
                  className="block rounded-2xl px-4 py-3 text-gray-200 hover:text-white hover:bg-white/10 transition-all duration-300"
                >
                  خانه
                </Link>

                <Link
                  to="/Blogs"
                  onClick={() => setMenu(false)}
                  className="block rounded-2xl px-4 py-3 text-gray-200 hover:text-white hover:bg-white/10 transition-all duration-300"
                >
                  بلاگ‌ها
                </Link>

                <Link
                  to="/"
                  onClick={() => setMenu(false)}
                  className="block rounded-2xl px-4 py-3 text-gray-200 hover:text-white hover:bg-white/10 transition-all duration-300"
                >
                  جستجو
                </Link>

                <div className="border-t border-white/10 my-2" />

                {isLoggedIn ? (
                  <>
                    <Link
                      to="/Create"
                      onClick={() => setMenu(false)}
                      className="block rounded-2xl px-4 py-3 text-gray-200 hover:text-white hover:bg-white/10 transition-all duration-300"
                    >
                      ارسال پست
                    </Link>
                    <Link
                      to="/blog/MyBlogs"
                      onClick={() => setMenu(false)}
                      className="block rounded-2xl px-4 py-3 text-gray-200 hover:text-white hover:bg-white/10 transition-all duration-300"
                    >
                      بلاگ های من
                    </Link>

                    <button
                      onClick={() => {
                        Logout();
                        setMenu(false);
                      }}
                      className="w-full rounded-2xl bg-gradient-to-r from-rose-500 to-red-600 px-4 py-3 text-white font-semibold shadow-lg shadow-red-900/30 transition-all duration-300 hover:shadow-xl"
                    >
                      خروج از حساب
                    </button>
                  </>
                ) : (
                  <>
                    <Link
                      to="/Login"
                      onClick={() => setMenu(false)}
                      className="block rounded-2xl px-4 py-3 text-gray-200 hover:text-white hover:bg-white/10 transition-all duration-300"
                    >
                      ورود
                    </Link>

                    <Link
                      to="/Register"
                      onClick={() => setMenu(false)}
                      className="block rounded-2xl bg-gradient-to-r from-purple-600 via-fuchsia-600 to-indigo-600 px-4 py-3 text-center text-white font-semibold shadow-lg shadow-purple-900/30 transition-all duration-300"
                    >
                      ثبت‌نام
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
