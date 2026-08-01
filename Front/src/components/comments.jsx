import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { VscGlobe } from "react-icons/vsc";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

function Comments() {
  //STATES
  const [description, setDescription] = useState("");
  const [comment, setComment] = useState([]);
  //GET USER ID
  let user_id = localStorage.getItem("auth_userid");
  const { id } = useParams();
  //RESET FOR DESCRIPTION
  const reset = () => {
    setDescription("");
  };
  //GET COMMENT
  const getComment = () => {
    axios.get("/api/comment-view/" + id).then((res) => {
      setComment(res.data);
    });
  };
  const handleSubmit = async (e) => {
    //NOT REFRESH
    e.preventDefault();
    //DATA
    const data = {
      description: description,
      blog_id: id,
      user_id: user_id,
    };
    //POST COMMENT
    await axios.post("/api/comment", data).then((res) => {
      if (res.data.status === 200) {
        Swal.fire({
          icon: "success",
          title: "ارسال نظر موفق",
          text: res.data.messages || "نظر شما با موفقیت ارسال شد",
          confirmButtonText: "باشه",
        });
        reset();
        getComment();
      } else {
        //ERROR HANDLING
        Swal.fire({
          icon: "error",
          title: "خطا",
          text: res.data.message,
          confirmButtonText: "باشه",
        });
      }
    });
  };
  //USEEFFECT
  useEffect(() => {
    getComment();
  }, []);
  return (
    <div dir="rtl" className="w-full mt-12 sm:mt-16">
      {/* Section Header */}
      <div className="text-center mb-10 sm:mb-12">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br from-purple-600 to-indigo-600 shadow-xl shadow-purple-900/40 ring-1 ring-white/20 mb-6">
          <span className="text-4xl">💬</span>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-3">
          نظرات کاربران
        </h1>

        <p className="text-sm sm:text-base text-gray-300 max-w-2xl mx-auto leading-relaxed">
          دیدگاه‌ها و نظرات خود را درباره این پست با دیگران به اشتراک بگذارید.
        </p>
      </div>

      {/* Comments List */}
      <div className="space-y-4 sm:space-y-5">
        {comment.length > 0 ? (
          comment.map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/10 backdrop-blur-2xl shadow-[0_15px_50px_rgba(0,0,0,0.35)] transition-all duration-300 hover:bg-white/15 hover:shadow-[0_20px_60px_rgba(0,0,0,0.45)]"
            >
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

              <div className="relative p-5 sm:p-6">
                {/* Author */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex items-center justify-center w-11 h-11 rounded-2xl bg-gradient-to-br from-purple-600 to-indigo-600 shadow-lg shadow-purple-900/30 ring-1 ring-white/10">
                    <span className="text-white text-lg">👤</span>
                  </div>

                  <div>
                    <p className="text-white font-semibold text-sm sm:text-base">
                      {item.user.name}
                    </p>
                    <p className="text-gray-400 text-xs">کاربر سایت</p>
                  </div>
                </div>

                {/* Comment Text */}
                <p className="text-gray-100 leading-8 text-sm sm:text-base whitespace-pre-line">
                  {item.description}
                </p>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-12 sm:py-16 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-white/10 border border-white/10 mb-6">
              <span className="text-4xl">💭</span>
            </div>

            <h3 className="text-2xl font-bold text-white mb-3">
              هنوز نظری ثبت نشده است
            </h3>

            <p className="text-gray-400">
              اولین نفری باشید که درباره این پست نظر می‌دهد.
            </p>
          </div>
        )}
      </div>

      {/* Comment Form */}
      {user_id ? (
        <form
          onSubmit={handleSubmit}
          className="mt-16 sm:mt-20 overflow-hidden rounded-3xl border border-white/10 bg-white/10 backdrop-blur-2xl shadow-[0_25px_80px_rgba(0,0,0,0.45)]"
        >
          {/* Top Accent */}
          <div className="h-1 w-full bg-gradient-to-r from-purple-500 via-fuchsia-500 to-indigo-500" />

          <div className="p-6 sm:p-8 lg:p-10">
            <div className="text-center mb-8">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-3">
                نظرتو بنویس ✍️
              </h2>

              <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                تجربه و دیدگاهت رو با بقیه به اشتراک بگذار.
              </p>
            </div>

            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows="6"
              placeholder="نظر خود را اینجا بنویسید..."
              className="w-full resize-none rounded-2xl border border-white/10 bg-white/10 px-4 py-4 text-white placeholder-gray-400 outline-none transition-all duration-300 focus:border-purple-400 focus:bg-white/15 focus:ring-4 focus:ring-purple-500/20"
            />

            <button
              type="submit"
              className="group relative mt-5 w-full overflow-hidden rounded-2xl bg-gradient-to-r from-purple-600 via-fuchsia-600 to-indigo-600 px-6 py-4 text-white font-bold shadow-xl shadow-purple-900/40 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-2xl hover:shadow-purple-900/50 active:scale-[0.98]"
            >
              <span className="relative z-10">ارسال نظر</span>
            </button>
          </div>
        </form>
      ) : (
        <div className="mt-16 rounded-3xl border border-yellow-500/20 bg-yellow-500/10 p-8 text-center">
          <h3 className="text-xl font-bold text-white mb-3">
            برای ثبت نظر ابتدا وارد حساب کاربری شوید
          </h3>

          <p className="text-gray-300 mb-5">
            فقط کاربران وارد شده می‌توانند دیدگاه ثبت کنند.
          </p>

          <Link
            to="/login"
            className="inline-flex items-center rounded-xl bg-purple-600 px-6 py-3 text-white font-semibold hover:bg-purple-700 transition"
          >
            ورود به حساب کاربری
          </Link>
          <Link
            to="/login"
            className="inline-flex m-2 items-center rounded-xl bg-purple-600 px-6 py-3 text-white font-semibold hover:bg-purple-700 transition"
          >
            ایجاد حساب کاربری
          </Link>
        </div>
      )}
    </div>
  );
}

export default Comments;
