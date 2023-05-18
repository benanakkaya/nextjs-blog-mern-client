import React from 'react'
import Categories from './components/Categories'
import PopularPosts from './components/PopularPosts'


const Sidebar = () => {
  return (
    <aside className='col-span-3 lg:col-span-1 flex flex-col gap-6'>
        <PopularPosts />
        <Categories />
    </aside>
  )
}

export default Sidebar