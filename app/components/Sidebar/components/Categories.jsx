import { GetCategories } from '@/app/services/CategoryServices';
import Link from 'next/link'
import React from 'react'
import SideBarTitle from './SideBarTitle'

const Categories = async () => {

  const categories = await GetCategories();


  return (
    <div className='flex flex-col gap-2'>
        <SideBarTitle title="Categories" />
        <div className='flex flex-col gap-2'>
          {categories.map(cat => (
            <Link href={`/category/${cat._id}`} className='p-2 font-bold text-sm hover:text-customGreen shadow-sm shadow-gray-400 hover:shadow-customGreen' >{cat.name}</Link>
            ))}
        </div>
    </div>
  )
}

export default Categories