import { GetPost, SetPostViews } from "@/app/services/PostServices";
import Link from "next/link";
import React from "react";

const PostPage = async ({ params }) => {


  SetPostViews(params.postID);

  const post = await GetPost(params.postID);

  return (
    <div className="flex flex-col gap-6">
      <div className="p-2 col-span-2 rounded-lg hidden md:flex items-center gap-1 font-bold text-xs h-[43.95px] bg-customGreen text-white shadow-lg shadow-gray-400">
        <Link href="/">Home Page</Link>►
        <Link href={`/category/${post.category._id}`}>
          {post.category.name}
        </Link>
        ►<Link href={`/post/${post._id}`}>{post.title}</Link>
      </div>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl font-bold">{post.title}</h1>
          <p className="text-lg text-gray-600 ">{post.subtitle}</p>
        </div>
        <img className="rounded-lg" src={post.image} alt={post.title} />
        <div className="flex items-center justify-between text-sm">
          <div className="font-bold">{new Date(post.createdAt).toLocaleDateString("tr-TR")}</div>
          <div>
            writer by <span className="font-bold">{post.author.username}</span>
          </div>
        </div>
        <div
          className="htmlcontent"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </div>
    </div>
  );
};

export default PostPage;
