import { GetPopularPosts } from "@/app/services/PostServices";
import React from "react";
import PopularPostCard from "./PopularPostCard";
import SideBarTitle from "./SideBarTitle";

const PopularPosts = async () => {

  const posts = await GetPopularPosts();

  return (
    <div className="flex flex-col gap-2 h-[400px] ">
      <SideBarTitle title={"Popular Posts"} />
      <div className="flex-1 h-full grid grid-rows-3 gap-2">
        {posts.map(post => (
        <PopularPostCard post={post} /> 
        ))} 
      </div>
    </div>
  );
};

export default PopularPosts;
