import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function BlogsDetail() {
  const [singleData, setSingleData] = useState();
  const { id } = useParams();
  useEffect(() => {
    axios.get(`/api/detail-blog/${id}`).then((res) => {
      setSingleData(res.data.blog);
    });
  }, []);
  return (
    <div className="flex flex-col justify-evenly items-center min-h-screen px-20">
      <h1 className="text-4xl text-white font-medium">
        {singleData && singleData.title}
      </h1>
      <img
        src={`http://localhost:8000/uploads/blog/${singleData && singleData.image}`}
        alt=""
      />
      <p className="backdrop-blur-xl bg-white/10 border border-white/20 shadow-2xl rounded-2xl text-white p-5 w-1/2 text-center">
        {singleData && singleData.description}
      </p>
      <p className="backdrop-blur-xl bg-white/10 border border-white/20 shadow-2xl rounded-2xl text-white p-5 w-1/5 text-center">
        {singleData && singleData.user.name}
      </p>
    </div>
  );
}

export default BlogsDetail;
