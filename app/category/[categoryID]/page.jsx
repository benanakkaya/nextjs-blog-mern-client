import PostCard from "@/app/components/PostList/components/PostCard";
import { GetCategory } from "@/app/services/CategoryServices";
import { GetCategoryPosts } from "@/app/services/PostServices";
import Link from "next/link";
import React from "react";

const CategoryPage = async ({ params }) => {

  const categoryPromise = GetCategory(params.categoryID);
  const postsPromise = GetCategoryPosts(params.categoryID);

  const [category,posts] = await Promise.all([categoryPromise, postsPromise])


  return (
    <div className="grid grid-cols-2 gap-6">
      <div className="p-2 col-span-2 rounded-lg flex items-center gap-2 font-bold text-sm h-[43.95px] bg-customGreen text-white shadow-lg shadow-gray-400">
        <Link href="/">Home Page</Link>/
        <Link href={`/category/${category._id}`}>
          {category.name}
        </Link>
      </div>
      {posts.length === 0 ? (
        <div className="col-span-2 text-center py-10 italic">
          No posts found in this category.
        </div>
      ) : (
        <>
          {posts.map((post) => (
            <PostCard post={post} />
          ))}
        </>
      )}
    </div>
  );
};

export default CategoryPage;
