"use client";
import { UserContext } from "@/app/context/User";
import { useAuth } from "@/app/hooks/auth";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useContext } from "react";
import { useEffect } from "react";
import Cookies from "universal-cookie";
import MobileMenu from "./MobileMenu";

const Nav = () => {
  const { isLogged, setIsLogged } = useContext(UserContext);

  const cookies = new Cookies();

  const router = useRouter();

  useEffect(() => {
    const authControl = async () => {
      const logged = await useAuth();
      setIsLogged(logged);
    };
    authControl();
  }, []);

  const handleLogout =  () => {
     cookies.remove("token");
    setIsLogged(false);
    router.push("/");
  };

  return (
    <>
    <nav className="hidden md:flex items-center gap-4">
    <Link href="/">Home</Link>
      {isLogged === false ? (
        <>
          <Link href="/login">Login</Link>
          <Link href="/register" className="text-yellow-400">
            Register
          </Link>
        </>
      ) : (
        <>
          <Link href="/my-posts">My Posts</Link>
          <Link href="/new-post" className="text-yellow-400">
            New Post
          </Link>
          <button onClick={handleLogout}>Logout</button>
        </>
      )}
    </nav>
    <MobileMenu handleLogout={handleLogout} isLogged={isLogged} />
    </>
  );
};

export default Nav;
