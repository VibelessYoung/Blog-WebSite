import React from "react";

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full backdrop-blur-md bg-white/10 border-b border-white/20 shadow-lg z-50">
      <div className="max-w-6xl mx-auto px-6 py-3 flex justify-between items-center">
        <div className="text-2xl font-bold text-white tracking-wide cursor-pointer hover:text-indigo-400 transition">
          BlogSite
        </div>

        <div className="flex gap-8 text-white font-medium">
          <a href="#" className="relative group transition duration-300">
            خانه
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-purple-600 transition-all group-hover:w-full"></span>
          </a>

          <a href="#" className="relative group transition duration-300">
            جستجو
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-purple-600 transition-all group-hover:w-full"></span>
          </a>

          <a href="#" className="relative group transition duration-300">
            ورود
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-purple-600 transition-all group-hover:w-full"></span>
          </a>

          <a href="#" className="relative group transition duration-300">
            ثبت نام
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-purple-600 transition-all group-hover:w-full"></span>
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
