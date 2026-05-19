import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";

function Search() {
  const [data, setData] = useState([]);
  async function searchFunction(key) {
    if (key === "") {
      setData([]);
    } else {
      await axios.get("/api/search/" + key).then((res) => {
        setData(res.data);
      });
    }
  }
  return (
    <div className="flex flex-col items-center">
      <label className="my-10 text-center text-4xl sm:text-5xl lg:text-5xl text-white">
        جست و جو کنید
      </label>
      <input
        type="text"
        className="bg-white w-2xl p-3 rounded-full"
        onChange={(e) => searchFunction(e.target.value)}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8 p-5">
        {data.map((post) => {
          return (
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

                {/* Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>

              {/* Card Content */}
              <div className="relative p-6 flex flex-col justify-between min-h-[240px]">
                <div>
                  {/* Title */}
                  <h2 className="text-xl sm:text-2xl font-bold text-white leading-relaxed mb-4 line-clamp-2">
                    {post.title}
                  </h2>

                  {/* Author */}
                  <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-gray-300">
                    <span>✍️</span>
                    <span>نویسنده: {post.user.name}</span>
                  </div>
                </div>

                {/* Button */}
                <div className="mt-6">
                  <Link to={`/BlogDetail/${post.id}`}>
                    <button className="group/btn relative w-full overflow-hidden rounded-2xl bg-gradient-to-r from-purple-600 via-fuchsia-600 to-indigo-600 px-5 py-3.5 text-white font-bold shadow-xl shadow-purple-900/30 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-2xl hover:shadow-purple-900/50 active:scale-[0.98]">
                      <span className="relative z-10">مشاهده مقاله</span>

                      {/* Shine Effect */}
                      <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover/btn:translate-x-full" />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Empty State */}
      {data.length === 0 && (
        <div className="text-center py-20">
          <div className="inline-flex items-center justify-center w-24 h-24 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/10 mb-6">
            <span className="text-4xl">📝</span>
          </div>
          <h3 className="text-2xl font-bold text-white mb-3">
            هنوز مقاله‌ای منتشر نشده است
          </h3>
          <p className="text-gray-400">
            به زودی مطالب جدید و جذابی در این بخش قرار خواهد گرفت.
          </p>
        </div>
      )}
    </div>
  );
}

export default Search;
