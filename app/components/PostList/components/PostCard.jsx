import Link from "next/link";
import React from "react";

const PostCard = ({post}) => {
  return (
    <Link prefetch={false} href={`/post/${post._id}`} className="col-span-2 sm:col-span-1 p-6 h-[400px] flex flex-col gap-4 shadow-md shadow-gray-400 hover:shadow-customGreen duration-300 transition-all">
      <img
        className="h-48 min-h-[192px] w-full rounded-lg "
        src={post.image}
        alt="post title"
      />
      <div className="flex flex-col justify-between flex-1 gap-2">
        <div className="flex flex-col gap-1 text-black">
          <div className="text-[10px] leading-3 font-bold text-customGreen">{post.category.name}</div>
          <div className="font-bold text-base">{post.title.length > 32 ? post.title.slice(0,32)+"..." : post.title}</div>
          <div className="text-[10px] leading-3 italic text-opacity-60">
            By {post.author.username}
          </div>
          <div className="text-gray-600 italic">{post.subtitle.length < 70 ? post.subtitle : post.subtitle.slice(0,70)+"..."}</div>
        </div> 
        <div className="text-xs font-bold text-end">{new Date(post.createdAt).toLocaleDateString("tr-TR")}</div>
      </div>
    </Link>
  );
};

export default PostCard;
