import { cookies } from "next/headers";
import React from "react";
import PostCard from "../components/PostList/components/PostCard";
import { GetMyPosts } from "../services/PostServices";

const MyPosts = async () => {

  const cookieStore = cookies();

  const {value:token} = cookieStore.get("token");
  
  const posts =  await GetMyPosts(token);

 

  

  return (
    <div>
      <div className="grid grid-cols-2 gap-6">
        <div className="p-2 col-span-2 rounded-lg font-bold text-xl bg-customGreen text-white shadow-lg shadow-gray-400">
          My Posts
        </div>
        {posts.map((post) => (
          <PostCard key={post._id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default MyPosts;
