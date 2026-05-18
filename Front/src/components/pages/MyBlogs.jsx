import axios from "axios";
import React, { useEffect, useState } from "react";
import bgImage from "../../assets/Images/bg-l.jpg";
import { Link } from "react-router-dom";

function MyBlogs() {
  const handleClick = async (id) => {
    await axios.delete(`/api/blog/${id}`).then((res) => {
      console.log(res);
    });
  };
  const [data, setData] = useState([]);
  useEffect(() => {
    const loadData = async () => {
      let id = localStorage.getItem("auth_userid");
      await axios.get(`/api/blog/${id}`).then((res) => {
        setData(res.data);
        console.log("axios data:", res.data);
console.log("status:", res.status);
      });
    };
    loadData();
  }, []);
  return (
    <div className="relative min-h-screen overflow-hidden px-4 py-20 sm:px-6 lg:px-8">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-110 blur-sm"
        style={{ backgroundImage: `url(${bgImage})` }}
      />

      {/* Premium Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950/95 via-purple-950/85 to-indigo-950/95" />

      {/* Decorative Glow Blobs */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-purple-600/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl animate-pulse delay-1000" />
      <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-fuchsia-500/10 rounded-full blur-3xl" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-4">
            مقالات و وبلاگ‌ها
          </h1>
          <p className="text-gray-300 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto leading-relaxed">
            جدیدترین مقالات آموزشی و مطالب جذاب را مطالعه کنید.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
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
                      <span>نویسنده: {post.user?.name}</span>
                    </div>
                  </div>

                  {/* Button */}
                  <div className="mt-6">
                    <button className="group/btn mb-4 relative w-full overflow-hidden rounded-2xl bg-gradient-to-r from-green-600 via-green-600 to-cyan-600 px-5 py-3.5 text-white font-bold shadow-xl shadow-purple-900/30 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-2xl hover:shadow-purple-900/50 active:scale-[0.98]">
                      ویرایش
                    </button>
                    <button
                      onClick={() => handleClick(post.id)}
                      className="group/btn mb-4 relative w-full overflow-hidden rounded-2xl bg-gradient-to-r from-orange-600 via-red-600 to-orange-600 px-5 py-3.5 text-white font-bold shadow-xl shadow-purple-900/30 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-2xl hover:shadow-purple-900/50 active:scale-[0.98]"
                    >
                      حذف
                    </button>
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
    </div>
  );
}

export default MyBlogs;
