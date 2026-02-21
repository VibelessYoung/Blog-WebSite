import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [menu, setMenu] = useState(false);
  return (
    <nav className="fixed top-0 left-0 w-full backdrop-blur-md bg-white/10 border-b border-white/20 shadow-lg z-50">
      <div className="max-w-6xl mx-auto px-6 py-3 flex justify-between items-center">
        <div className="text-2xl font-bold text-white tracking-wide cursor-pointer hover:text-indigo-400 transition">
          BlogSite
        </div>

        <div className="hidden sm:flex items-center gap-8 text-white font-medium ml-auto">
          <Link to="/" className="relative group transition duration-300">
            خانه
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-purple-600 transition-all group-hover:w-full"></span>
          </Link>

          <Link to="/" className="relative group transition duration-300">
            جستجو
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-purple-600 transition-all group-hover:w-full"></span>
          </Link>

          <Link to="/Login" className="relative group transition duration-300">
            ورود
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-purple-600 transition-all group-hover:w-full"></span>
          </Link>

          <Link
            to="/Register"
            className="relative group transition duration-300"
          >
            ثبت نام
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-purple-600 transition-all group-hover:w-full"></span>
          </Link>
        </div>
        <button onClick={() => setMenu((prev) => !prev)} className="sm:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className={`size-6 text-white transition-transform duration-300 ${
              menu ? "rotate-90" : "rotate-0"
            }`}
          >
            {menu ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
              />
            )}
          </svg>
        </button>
        {menu && (
          <div className="absolute top-14 right-6 w-40 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg shadow-lg flex flex-col text-white sm:hidden">
            <Link
              to="/"
              className="px-4 py-2 hover:bg-white/20 transition"
              onClick={() => setMenu(false)}
            >
              خانه
            </Link>

            <Link
              to="/"
              className="px-4 py-2 hover:bg-white/20 transition"
              onClick={() => setMenu(false)}
            >
              جستجو
            </Link>

            <Link
              to="/Login"
              className="px-4 py-2 hover:bg-white/20 transition"
              onClick={() => setMenu(false)}
            >
              ورود
            </Link>

            <Link
              to="/Register"
              className="px-4 py-2 hover:bg-white/20 transition"
              onClick={() => setMenu(false)}
            >
              ثبت نام
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
