import React, { useState } from "react";
import bgImage from "../assets/Images/bg-l.jpg";
import axios from "axios";
import Swal from "sweetalert2";
import { Navigate, useNavigate } from "react-router-dom";

function Create() {
  //STATES
  const [image, setImage] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState([]);
  const user_id = localStorage.getItem("auth_userid");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    //NOT REFRESH
    e.preventDefault();
    //FORM DATA
    const formData = new FormData();
    formData.append("image", image);
    formData.append("title", title);
    formData.append("description", description);
    formData.append("user_id", user_id);
    //POST
    await axios
      .post("/api/blog", formData)
      .then((res) => {
        console.log(res);
        //STATUS CHECKING
        if (res.data.status === 200) {
          //USE SWAL
          Swal.fire({
            icon: "success",
            title: "ارسال موفقیت امیز بود",
            text: res.data.message,
            confirmButtonText: "باشه",
          });
          //BACK TO HOME PAGE
          navigate("/");
        } else {
          //ERROR HANDLING
          setError(res.data.errors);
          Swal.fire({
            icon: "error",
            title: "خطا",
            text: res.data.message,
            confirmButtonText: "باشه",
          });
        }
      })
      //ERROR HANDLING
      .catch(() => {
        Swal.fire({
          icon: "error",
          title: "خطای سرور",
          text: "مشکلی در ارتباط با سرور پیش آمده",
          confirmButtonText: "باشه",
        });
      });
  };
  return (
    <div className="relative min-h-screen overflow-hidden px-4 py-16 sm:px-6 lg:px-8 flex items-center justify-center">
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

      {/* Form Container */}
      <div className="relative z-10 w-full max-w-3xl">
        <form
          dir="rtl"
          onSubmit={handleSubmit}
          className="overflow-hidden rounded-3xl border border-white/10 bg-white/10 backdrop-blur-2xl shadow-[0_25px_80px_rgba(0,0,0,0.45)]"
        >
          {/* Top Accent Line */}
          <div className="h-1 w-full bg-gradient-to-r from-purple-500 via-fuchsia-500 to-indigo-500" />

          {/* Content */}
          <div className="p-6 sm:p-8 lg:p-10">
            {/* Header */}
            <div className="text-center mb-8 sm:mb-10">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br from-purple-600 to-indigo-600 shadow-xl shadow-purple-900/40 ring-1 ring-white/20 mb-6">
                <span className="text-4xl">✍️</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-3">
                ایجاد پست جدید
              </h1>

              <p className="text-sm sm:text-base text-gray-300 leading-relaxed max-w-2xl mx-auto">
                تصویر، عنوان و محتوای پست خود را وارد کنید و آن را منتشر کنید.
              </p>
            </div>

            {/* Fields */}
            <div className="space-y-6">
              {/* Image Upload */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-200">
                  تصویر پست
                </label>

                <div className="rounded-2xl border border-dashed border-white/20 bg-white/5 p-4 sm:p-6 hover:bg-white/10 transition-colors duration-300">
                  <input
                    type="file"
                    name="image"
                    accept="image/*"
                    onChange={(e) => setImage(e.target.files[0])}
                    className="block w-full text-sm text-gray-300
                    file:ml-4 file:rounded-xl file:border-0
                    file:bg-gradient-to-r file:from-purple-600 file:to-indigo-600
                    file:px-4 file:py-2.5
                    file:text-sm file:font-semibold
                    file:text-white
                    file:shadow-lg
                    file:cursor-pointer
                    cursor-pointer"
                  />
                </div>

                {error?.image && (
                  <p className="text-sm text-red-400 font-medium mt-1">
                    {Array.isArray(error.image) ? error.image[0] : error.image}
                  </p>
                )}
              </div>

              {/* Title */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-200">
                  عنوان پست
                </label>

                <input
                  type="text"
                  name="title"
                  placeholder="عنوان جذاب مقاله را وارد کنید..."
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-3.5 text-white placeholder-gray-400 outline-none transition-all duration-300 focus:border-purple-400 focus:bg-white/15 focus:ring-4 focus:ring-purple-500/20"
                />

                {error?.title && (
                  <p className="text-sm text-red-400 font-medium mt-1">
                    {Array.isArray(error.title) ? error.title[0] : error.title}
                  </p>
                )}
              </div>

              {/* Description */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-200">
                  محتوای پست
                </label>

                <textarea
                  rows="8"
                  name="description"
                  placeholder="متن کامل مقاله خود را اینجا بنویسید..."
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full resize-none rounded-2xl border border-white/10 bg-white/10 px-4 py-4 text-white placeholder-gray-400 outline-none transition-all duration-300 focus:border-purple-400 focus:bg-white/15 focus:ring-4 focus:ring-purple-500/20"
                />

                {error?.description && (
                  <p className="text-sm text-red-400 font-medium mt-1">
                    {Array.isArray(error.description)
                      ? error.description[0]
                      : error.description}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="group relative w-full overflow-hidden rounded-2xl bg-gradient-to-r from-purple-600 via-fuchsia-600 to-indigo-600 px-6 py-4 text-white font-bold shadow-xl shadow-purple-900/40 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-2xl hover:shadow-purple-900/50 active:scale-[0.98]"
              >
                <span className="relative z-10">انتشار پست</span>

                {/* Shine Effect */}
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Create;
