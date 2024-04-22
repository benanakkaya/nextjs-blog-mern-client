import Link from "next/link";
import React from "react";
import Nav from "./components/Nav";


const Header = () => {
  return (
    <div className="relative bg-customGreen text-white shadow-md shadow-gray-400 ">
      <div className="container px-3 py-4 flex items-center justify-between ">
        <Link href="/" className="text-2xl font-bold">
          NextBlog
        </Link>
        <Nav />
      </div>
    </div>
  );
};

export default Header;
