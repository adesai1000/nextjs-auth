"use client";

import Link from "next/link";
import { Button } from "../ui/button";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-4 md:px-8 py-4 bg-[#141414] text-white">
      <Link href="/" className="text-xl font-bold">
        Product Website
      </Link>
      <ul className="flex items-center space-x-4">
        <>
          <li>
            <Link href="/login" className="hover:text-gray-400">
              Login
            </Link>
          </li>
          <li>
            <Link href="/register" className="hover:text-gray-400">
              Register
            </Link>
          </li>
        </>

        <>
          <li>
            <Link href="/private/dashboard" className="hover:text-gray-400">
              Dashboard
            </Link>
          </li>
          <li>
            <form>
              <Button type="submit" variant={"ghost"}>
                Logout
              </Button>
            </form>
          </li>
        </>
      </ul>
    </nav>
  );
};

export default Navbar;
