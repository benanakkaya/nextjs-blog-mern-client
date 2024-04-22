"use client"
import React, {useState} from 'react';
import Link from 'next/link';


const MobileMenu = ({isLogged,handleLogout}) => {

    const [menuVisibility, setMenuVisibility] = useState(false);

    const handleClick = () => {
        setMenuVisibility(prev => !prev)
    }

    return (
        <>
            <button onClick={handleClick} className='block md:hidden'>
                <svg width="30px" height="20px" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill="none">
                    <path fill="#FFFFFF" fillRule="evenodd" d="M19 4a1 1 0 01-1 1H2a1 1 0 010-2h16a1 1 0 011 1zm0 6a1 1 0 01-1 1H2a1 1 0 110-2h16a1 1 0 011 1zm-1 7a1 1 0 100-2H2a1 1 0 100 2h16z" />
                </svg>
            </button>
            {menuVisibility &&
                   <nav className="absolute bg-white z-40 text-customGreen w-full left-0 top-full flex flex-col items-center mt-1 border-b border-customGreen py-3 gap-3">
                   <Link onClick={handleClick} href="/">Home</Link>
                     {isLogged === false ? (
                       <>
                         <Link onClick={handleClick} href="/login">Login</Link>
                         <Link onClick={handleClick} href="/register" className="text-yellow-400">
                           Register
                         </Link>
                       </>
                     ) : (
                       <>
                         <Link onClick={handleClick} href="/my-posts">My Posts</Link>
                         <Link onClick={handleClick} href="/new-post" className="text-yellow-400">
                           New Post
                         </Link>
                         <button onClick={handleLogout}>Logout</button>
                       </>
                     )}
                   </nav>
            }
        </>
    )
}

export default MobileMenu;