import React, { useEffect, useState } from "react";
import bgImage from "../../assets/Images/bg-l.jpg";
import bgTest from "../../assets/Images/bg-r.jpg";
import axios from "axios";

function Blogs() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const handlePost = async () => {
      const res = axios.get("/api/view-blog").then((res) => {
        setData(res.data.blog);
      });
    };
    handlePost();
  }, []);
  return (
    <div className="flex min-h-screen items-center justify-center gap-10 relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center blur-md scale-110"
        style={{ backgroundImage: `url(${bgImage})` }}
      ></div>
      <div className="absolute inset-0 bg-black/60"></div>
      {data.map((post) => {
        return (
          <div
            key={post.id}
            className="backdrop-blur-xl bg-white/10 border border-white/20 shadow-2xl rounded-2xl flex flex-col w-1/4 h-80 justify-between"
          >
            <img
              src={`http://localhost:8000/uploads/blog/${post.image}`}
              alt=""
              className="w-full h-1/2 object-cover rounded-t-2xl"
            />
            <div className="self-center text-white">
              <h1 className="font-medium text-2xl mb-5">{post.title}</h1>
              <p className="font-medium">نویسنده : {post.user.name}</p>
            </div>
            <div className="p-3">
              <button className="w-full self-center py-2 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold hover:scale-105 hover:shadow-xl transition duration-300">
                مشاهده
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Blogs;
