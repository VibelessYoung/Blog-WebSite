import React from "react";

function BlogsDetail() {
  return (
    <div className="flex flex-col justify-evenly items-center min-h-screen px-20">
      <h1 className="text-4xl text-white font-medium">blog</h1>
      <p className="backdrop-blur-xl bg-white/10 border border-white/20 shadow-2xl rounded-2xl text-white p-5 w-1/2 text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut quos, porro
        reiciendis libero praesentium in sequi recusandae commodi atque fuga
        beatae quibusdam blanditiis magni vero molestias debitis. Quae illo,
        tempore ex, quia quaerat soluta libero vero itaque ipsam maiores enim
        mollitia similique? Iusto corrupti obcaecati quibusdam, eveniet error
        cumque possimus.
      </p>
      <p className="backdrop-blur-xl bg-white/10 border border-white/20 shadow-2xl rounded-2xl text-white p-5 w-1/5 text-center">
        author
      </p>
    </div>
  );
}

export default BlogsDetail;
