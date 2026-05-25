import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import bgImage from "../../assets/Images/bg-l.jpg";
import Comments from "../comments";

function BlogsDetail() {
  //STATE
  const [singleData, setSingleData] = useState();
  const { id } = useParams();
  useEffect(() => {
    //GET DATA
    axios.get(`/api/detail-blog/${id}`).then((res) => {
      setSingleData(res.data.blog);
    });
  }, []);
  return (
    <div className="relative min-h-screen overflow-hidden px-4 py-16 sm:px-6 lg:px-8">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-110 blur-sm"
        style={{ backgroundImage: `url(${bgImage})` }}
      />

      {/* Premium Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950/95 via-purple-950/85 to-indigo-950/95" />

      {/* Decorative Glow Effects */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-purple-600/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl animate-pulse delay-1000" />
      <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-fuchsia-500/10 rounded-full blur-3xl" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Article Card */}
        <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/10 backdrop-blur-2xl shadow-[0_25px_80px_rgba(0,0,0,0.45)]">
          {/* Top Accent */}
          <div className="h-1 w-full bg-gradient-to-r from-purple-500 via-fuchsia-500 to-indigo-500" />

          {/* Header Section */}
          <div className="p-6 sm:p-8 lg:p-10">
            {/* Title */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-relaxed text-center mb-8 tracking-tight">
              {singleData && singleData.title}
            </h1>

            {/* Featured Image */}
            <div className="relative overflow-hidden rounded-3xl mb-8 group">
              <img
                src={`http://localhost:8000/uploads/blog/${
                  singleData && singleData.image
                }`}
                alt={singleData?.title}
                className="w-full max-h-[550px] object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Image Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Author Badge */}
            <div className="flex justify-center mb-8">
              <div className="inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-gray-200 backdrop-blur-xl">
                <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-purple-600 to-indigo-600 shadow-lg">
                  <span className="text-white text-lg">✍️</span>
                </div>
                <div className="text-right">
                  <p className="text-xs text-gray-400 mb-0.5">نویسنده</p>
                  <p className="font-semibold text-white">
                    {singleData && singleData.user.name}
                  </p>
                </div>
              </div>
            </div>

            {/* Article Content */}
            <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 sm:p-8 lg:p-10">
              <p className="text-gray-100 text-base sm:text-lg leading-8 sm:leading-9 text-justify whitespace-pre-line">
                {singleData && singleData.description}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Decorative Element */}
        <div className="flex justify-center mt-8">
          <div className="h-1 w-40 rounded-full bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-70" />
        </div>
        <Comments />
      </div>
    </div>
  );
}

export default BlogsDetail;
