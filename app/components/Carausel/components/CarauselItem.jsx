import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const CarauselItem = ({post}) => {
  return (
    <Link prefetch={false} href={`/post/${post._id}`} className='relative w-full h-[240px] sm:h-[400px] flex items-end '>
      <img className='h-[240px] sm:h-[400px] w-full absolute top-0 left-0' src={post.image} alt='carausel item'  />
      <div className='z-10 bg-gray-900 bg-opacity-75 w-full text-white p-2'>
        <div className='text-sm text-customGreen font-bold'>{post.category.name}</div>
        <strong className='text-xl font-bold'>{post.title.toUpperCase()}</strong>
        <p className='text-sm text-gray-400'>{post.subtitle}</p>
      </div>
    </Link>
  )
}

export default CarauselItem
