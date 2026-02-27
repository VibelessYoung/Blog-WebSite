import React from "react";
import bgImage from "../../assets/Images/bg-r.jpg";
import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { Navigate, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { email, password };

    try {
      await axios.get("/sanctum/csrf-cookie");

      const res = await axios.post("http://localhost:8000/api/login", data);
      console.log(res);

      if (res.data.status === 200) {
        Cookies.set("token", res.data.token);
        localStorage.setItem("user_name", res.data.username);
        localStorage.setItem("auth_userid", res.data.user_id);
        Swal.fire({
          icon: "success",
          title: "ورود موفقیت آمیز بود",
          text: res.data.message,
          confirmButtonText: "باشه",
        });
        navigate("/");
        window.location.reload();
      } else {
        Swal.fire({
          icon: "error",
          title: "خطا",
          text: res.data.message,
          confirmButtonText: "باشه",
        });
      }
    } catch (err) {
      console.log(err);
      Swal.fire({
        icon: "error",
        title: "خطای سرور",
        text: "مشکلی در ارتباط با سرور پیش آمده",
        confirmButtonText: "باشه",
      });
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
            ورود به حساب کاربری
          </h2>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label className="block text-white mb-2 text-sm">ایمیل</label>
              <input
                type="email"
                placeholder="ایمیل خود را وارد کنید"
                className="w-full px-4 py-3 rounded-xl bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div>
              <label className="block text-white mb-2 text-sm">رمز عبور</label>
              <input
                type="password"
                placeholder="********"
                className="w-full px-4 py-3 rounded-xl bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold hover:scale-105 hover:shadow-xl transition duration-300"
            >
              ورود
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
