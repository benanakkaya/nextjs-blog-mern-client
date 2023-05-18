import { GetPost, SetPostViews } from "@/app/services/PostServices";
import Link from "next/link";
import React from "react";

const PostPage = async ({ params }) => {


  SetPostViews(params.postID);

  const post = await GetPost(params.postID);

  return (
    <div className="flex flex-col gap-6">
      <div className="p-2 col-span-2 rounded-lg flex items-center gap-2 font-bold text-sm h-[43.95px] bg-customGreen text-white shadow-lg shadow-gray-400">
        <Link href="/">Home Page</Link>/
        <Link href={`/category/${post.category._id}`}>
          {post.category.name}
        </Link>
        /<Link href={`/post/${post._id}`}>{post.title}</Link>
      </div>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl font-bold">{post.title}</h1>
          <p className="text-xl text-gray-600 italic">{post.subtitle}</p>
          <div className="flex items-center gap-12">
            <div>
              by <span className="font-bold">{post.author.username}</span>
            </div>
            <div>{new Date(post.createdAt).toLocaleDateString("tr-TR")}</div>
          </div>
          <img className="rounded-lg" src={post.image} alt={post.title} />
          <div
            className="htmlcontent"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </div>
    </div>
  );
};

export default PostPage;
