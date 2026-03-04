import React from "react";
import bgImage from "../assets/Images/bg-l.jpg";

function Create() {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-10 relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center blur-md scale-110"
        style={{ backgroundImage: `url(${bgImage})` }}
      ></div>
      <div className="absolute inset-0 bg-black/60"></div>
      <form
        dir="rtl"
        className="flex gap-3 p-3 flex-col backdrop-blur-xl bg-white/10 border border-white/20 shadow-2xl rounded-2xl"
      >
        <h1 className="text-white text-4xl font-medium text-center my-5">ارسال پست</h1>

        <h1 className="text-white">انتخاب عکس</h1>
        <input
          type="file"
          className="bg-white text-black rounded-2xl p-1 px-3"
        ></input>
        <h1 className="text-white">عنوان</h1>
        <input className="bg-white text-black rounded-2xl p-1 px-3"></input>
        <h1 className="text-white">متن</h1>
        <textarea className="bg-white text-black rounded-2xl h-32 p-3"></textarea>
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
