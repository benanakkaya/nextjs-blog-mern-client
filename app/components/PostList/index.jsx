import React from 'react'
import SideBarTitle from '../Sidebar/components/SideBarTitle'
import PostCard from './components/PostCard'

const PostList = ({posts}) => {
  return (
    <div className='w-full grid grid-cols-2 gap-6'>
      <div className='p-2 col-span-2 rounded-lg font-bold text-lg bg-customGreen text-white shadow-lg shadow-gray-400'>
            Post List
      </div>
      {posts.map((post) => (
        <PostCard key={post._id} post={post} />
      ))}
    </div>
  )
}

export default PostList
