import React, { useState } from "react";
import bgImage from "../assets/Images/bg-l.jpg";
import axios from "axios";
import Swal from "sweetalert2";
import { Navigate, useNavigate } from "react-router-dom";

function Create() {
  const [image, setImage] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState([]);
  const user_id = localStorage.getItem("auth_userid");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", image);
    formData.append("title", title);
    formData.append("description", description);
    formData.append("user_id", user_id);
    await axios
      .post("/api/blog", formData)
      .then((res) => {
        console.log(res);
        if (res.data.status === 200) {
          Swal.fire({
            icon: "success",
            title: "ارسال موفقیت امیز بود",
            text: res.data.message,
            confirmButtonText: "باشه",
          });
          navigate("/");
        } else {
          setError(res.data.errors);
          // Swal.fire({
          //   icon: "error",
          //   title: "خطا",
          //   text: res.data.message,
          //   confirmButtonText: "باشه",
          // });
        }
      })
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
    <div className="flex h-screen flex-col items-center justify-center gap-10 relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center blur-md scale-110"
        style={{ backgroundImage: `url(${bgImage})` }}
      ></div>
      <div className="absolute inset-0 bg-black/60"></div>
      <form
        dir="rtl"
        onSubmit={handleSubmit}
        className="flex gap-3 p-3 flex-col backdrop-blur-xl bg-white/10 border border-white/20 shadow-2xl rounded-2xl"
      >
        <h1 className="text-white text-4xl font-medium text-center my-5">
          ارسال پست
        </h1>

        <h1 className="text-white">انتخاب عکس</h1>
        <input
          type="file"
          className="bg-white text-black rounded-2xl p-1 px-3"
          name="image"
          onChange={(e) => setImage(e.target.files[0])}
        ></input>
        {error && <small className="text-red-800">{error.image}</small>}
        <h1 className="text-white">عنوان</h1>
        <input
          className="bg-white text-black rounded-2xl p-1 px-3"
          name="title"
          onChange={(e) => setTitle(e.target.value)}
        ></input>
        {error && <small className="text-red-800">{error.title}</small>}
        <h1 className="text-white">متن</h1>
        <textarea
          className="bg-white text-black rounded-2xl h-32 p-3"
          name="direction"
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        {error && <small className="text-red-800">{error.description}</small>}
        <button
          className="p-1 px-3 bg-green-600 text-white rounded-2xl"
          type="submit"
        >
          ارسال
        </button>
      </form>
    </div>
  );
}

export default Create;
