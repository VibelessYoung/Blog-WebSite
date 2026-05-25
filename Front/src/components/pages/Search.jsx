import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";

function Search() {
  //STATE
  const [data, setData] = useState([]);
  //SEARCH FUNCTION
  async function searchFunction(key) {
    if (key === "") {
      setData([]);
    } else {
      //GET DATA
      await axios.get("/api/search/" + key).then((res) => {
        setData(res.data);
      });
    }
  }
  return (
    <div
      dir="rtl"
      className="relative min-h-screen overflow-hidden px-4 py-8 sm:px-6 lg:px-8"
    >
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Search Header */}
        <div className="text-center mb-10 sm:mb-14">
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br from-purple-600 to-indigo-600 shadow-xl shadow-purple-900/40 ring-1 ring-white/20 mb-6">
            <span className="text-4xl">🔍</span>
          </div>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            جستجوی پست ها
          </h1>

          {/* Subtitle */}
          <p className="text-sm sm:text-base lg:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            عنوان پست مورد نظر خود را وارد کنید تا سریع آن را پیدا کنید.
          </p>
        </div>

        {/* Search Input */}
        <div className="max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="relative group">
            {/* Glow Effect */}
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-purple-600/30 via-fuchsia-600/30 to-indigo-600/30 blur-xl opacity-60 group-focus-within:opacity-100 transition-opacity duration-500" />

            {/* Input Container */}
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/10 backdrop-blur-2xl shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
              <div className="h-1 w-full bg-gradient-to-r from-purple-500 via-fuchsia-500 to-indigo-500" />

              <div className="relative flex items-center">
                {/* Search Icon */}
                <div className="absolute right-5 text-2xl text-gray-400 pointer-events-none">
                  🔎
                </div>

                {/* Input */}
                <input
                  type="text"
                  placeholder="عنوان مقاله را جستجو کنید..."
                  onChange={(e) => searchFunction(e.target.value)}
                  className="w-full bg-transparent pr-14 pl-6 py-5 text-white text-base sm:text-lg placeholder-gray-400 outline-none"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Search Results */}
        {data.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
            {data.map((post) => (
              <div
                key={post.id}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/10 backdrop-blur-2xl shadow-[0_20px_70px_rgba(0,0,0,0.45)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_30px_90px_rgba(0,0,0,0.55)]"
              >
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                {/* Top Accent */}
                <div className="h-1 w-full bg-gradient-to-r from-purple-500 via-fuchsia-500 to-indigo-500" />

                {/* Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={`http://localhost:8000/uploads/blog/${post.image}`}
                    alt={post.title}
                    className="w-full h-56 sm:h-60 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                </div>

                {/* Content */}
                <div className="relative p-6 flex flex-col justify-between min-h-[240px]">
                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-white leading-relaxed mb-4 line-clamp-2">
                      {post.title}
                    </h2>

                    <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-gray-300">
                      <span>✍️</span>
                      <span>نویسنده: {post.user.name}</span>
                    </div>
                  </div>

                  {/* View Button */}
                  <div className="mt-6">
                    <Link to={`/BlogDetail/${post.id}`}>
                      <button className="group/btn relative w-full overflow-hidden rounded-2xl bg-gradient-to-r from-purple-600 via-fuchsia-600 to-indigo-600 px-5 py-3.5 text-white font-bold shadow-xl shadow-purple-900/30 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-2xl hover:shadow-purple-900/50 active:scale-[0.98]">
                        <span className="relative z-10">مشاهده مقاله</span>
                        <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover/btn:translate-x-full" />
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Empty State */
          <div className="text-center py-20">
            <div className="inline-flex items-center justify-center w-24 h-24 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/10 mb-6">
              <span className="text-4xl">🔍</span>
            </div>

            {/* <h3 className="text-2xl font-bold text-white mb-3">
              نتیجه‌ای یافت نشد
            </h3> */}

            <p className="text-gray-400 max-w-md mx-auto leading-relaxed">
              عنوان مقاله مورد نظر خود را وارد کنید تا نتایج مرتبط نمایش داده
              شوند.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Search;
