import PostCard from '@/app/components/PostList/components/PostCard'
import React from 'react'

const SearchPage = ({params}) => {

  return (
    <div  className='grid grid-cols-2 gap-6'>
        <div className='col-span-2 text-base italic'>
            Matching posts are being listed <span className='font-bold'>"{params.searchParam}"</span>
        </div>
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
    </div>
  )
}

export default SearchPage
