import React, { useState } from "react";
import bgImage from "../../assets/Images/bg-r.jpg";
import axios from "axios";
import { VscGlobe } from "react-icons/vsc";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { name, email, password };

    try {
      const res = await axios.post("http://localhost:8000/api/register", data);
      if (res.data.status === 200) {
        console.log(res.data.messages);
        setError({});
      } else {
        setError(res.data.validation_errors);
      }
    } catch (err) {
      console.log(
        "خطا در درخواست:",
        err.response ? err.response.data : err.message,
      );
    }
  };

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

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label className="block text-white mb-2 text-sm">نام کامل</label>
              <input
                type="text"
                placeholder="نام خود را وارد کنید"
                className="w-full px-4 py-3 rounded-xl bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
                onChange={(e) => setName(e.target.value)}
                name="name"
              />
              {error.name && (
                <small className="text-red-500 mt-1">{error.name[0]}</small>
              )}
            </div>

            <div>
              <label className="block text-white mb-2 text-sm">ایمیل</label>
              <input
                type="email"
                placeholder="example@email.com"
                className="w-full px-4 py-3 rounded-xl bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
                onChange={(e) => setEmail(e.target.value)}
                name="email"
              />
              {error.email && (
                <small className="text-red-500 mt-1">{error.email[0]}</small>
              )}
            </div>

            <div>
              <label className="block text-white mb-2 text-sm">رمز عبور</label>
              <input
                type="password"
                placeholder="********"
                className="w-full px-4 py-3 rounded-xl bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
                onChange={(e) => setPassword(e.target.value)}
                name="password"
              />
              {error.password && (
                <small className="text-red-500 mt-1">{error.password[0]}</small>
              )}
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
