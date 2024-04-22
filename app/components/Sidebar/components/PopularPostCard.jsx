
import Link from 'next/link'
import React from 'react'

const PopularPostCard = ({post}) => {
  return (
    <Link prefetch={false} href={`/post/${post._id}`} className="p-2 row-span-1 flex items-center gap-2 shadow-md shadow-gray-400 rounded-md group">
          <img
          className="rounded-md h-[80px] max-w-[120px] w-auto"
            src={post.image}
            alt={post.title}
          />
          <div className="flex-1 text-sm flex flex-col h-[80px] justify-between">
            <div className="font-bold group-hover:text-customGreen text-sm">{post.title}</div>
            <div>{post.subtitle.length > 36 ? post.subtitle.slice(0,36)+"...":post.subtitle}</div>
            <div className="text-[10px]">{new Date(post.createdAt).toLocaleDateString("tr-TR")}</div>
          </div>
        </Link>
  )
}

export default PopularPostCard