import axios from "axios";
import { div } from "framer-motion/client";
import React from "react";
import { useEffect, useState } from "react";
import { VscGlobe } from "react-icons/vsc";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";

function Comments() {
  const [description, setDescription] = useState("");
  const [comment, setComment] = useState([]);
  let user_id = localStorage.getItem("auth_userid");
  const { id } = useParams();
  const reset = () => {
    setDescription("");
  };
  const getComment = () => {
    axios.get("/api/comment-view/" + id).then((res) => {
      setComment(res.data);
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      description: description,
      blog_id: id,
      user_id: user_id,
    };
    await axios.post("/api/comment", data).then((res) => {
      if (res.data.status === 200) {
        Swal.fire({
          icon: "success",
          title: "ویرایش پست موفق",
          text: res.data.messages || "پست شما با موفقیت ویرایش شد",
          confirmButtonText: "باشه",
        });
        reset();
        getComment();
      } else {
        Swal.fire({
          icon: "error",
          title: "خطا",
          text: res.data.message,
          confirmButtonText: "باشه",
        });
      }
    });
  };
  useEffect(() => {
    getComment();
  }, []);
  return (
    <div className="w-full mt-5 flex flex-col">
      <h1 className="text-4xl sm:text-5xl lg:text-5xl text-center mb-10 text-white">
        نظرات
      </h1>
      {comment.map((item) => (
        <div className="w-full flex flex-col" key={item.id}>
          <p className="rounded-2xl mb-4 border border-white bg-white/50 px-4 py-4 transition-all duration-300 flex flex-col">
            <small>{item.user.name}</small>
            {item.description}
          </p>
        </div>
      ))}

      <form onSubmit={handleSubmit} className="flex flex-col">
        <h1 className="mt-20 mb-10 text-center text-4xl sm:text-5xl lg:text-5xl text-white">
          نظرتو بنویس
        </h1>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          name=""
          id=""
          placeholder="nazar"
          className="w-full resize-none rounded-2xl border border-white bg-white/10 px-4 py-4 text-white placeholder-gray-400 outline-none transition-all duration-300 focus:border-purple-400 focus:bg-white/15 focus:ring-4 focus:ring-purple-500/20"
        ></textarea>
        <button
          type="submit"
          className="rounded-2xl mt-3.5 bg-gradient-to-r from-purple-600 via-fuchsia-600 to-indigo-600 px-6 py-4 text-white font-bold shadow-xl shadow-purple-900/40 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-2xl hover:shadow-purple-900/50 active:scale-[0.98]"
        >
          send
        </button>
      </form>
    </div>
  );
}

export default Comments;
