import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-customGreen text-white font-bold'>
      <div className='w-full container px-3 py-2 flex items-center justify-between  '>
      <div className=''>
        mern stack blog app
      </div>
      <div className=''>
        made by <Link target='_blank' className='text-yellow-400' href="https://github.com/benanakkaya">benan</Link>
      </div>
      </div>
    </footer>
  )
}

export default Footer
