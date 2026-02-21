import React from "react";
import bgImage from "../../assets/Images/bg-l.jpg";

function Register() {
  return (
    <div className="relative min-h-screen overflow-hidden flex items-center justify-center">
      <div
        className="absolute inset-0 bg-cover bg-center blur-md scale-110"
        style={{ backgroundImage: `url(${bgImage})` }}
      ></div>

      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10 w-full max-w-md mx-4">
        <div className="backdrop-blur-xl bg-white/10 border border-white/20 shadow-2xl rounded-2xl p-8 sm:p-10">
          <h2 className="text-3xl font-bold text-white text-center mb-8">
            ایجاد حساب کاربری
          </h2>

          <form className="space-y-6">
            <div>
              <label className="block text-white mb-2 text-sm">نام کامل</label>
              <input
                type="text"
                placeholder="نام خود را وارد کنید"
                className="w-full px-4 py-3 rounded-xl bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
              />
            </div>

            <div>
              <label className="block text-white mb-2 text-sm">رمز عبور</label>
              <input
                type="password"
                placeholder="********"
                className="w-full px-4 py-3 rounded-xl bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold hover:scale-105 hover:shadow-xl transition duration-300"
            >
              ثبت‌نام
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
