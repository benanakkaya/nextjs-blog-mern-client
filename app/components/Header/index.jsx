import Link from "next/link";
import React from "react";
import { FaSearch } from "react-icons/fa";
import AuthButtons from "./components/AuthButtons";

const Header = () => {
  return (
    <div className="px-3 sm:px-6 md:px-16 lg:px-32 py-4 bg-customGreen text-white flex items-center justify-between shadow-md shadow-gray-400">
      <Link href="/" className="text-3xl font-bold">
        NextBlog
      </Link>
      <nav className="flex items-center gap-4">
        <Link href="/">Home</Link>
        <AuthButtons />
      </nav>
    </div>
  );
};

export default Header;
