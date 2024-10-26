"use client"

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaBars, FaSearch, FaShoppingBag, FaTimes, FaUser } from "react-icons/fa";
import logo from "../../public/logo.png";
import { useState } from "react";

const Navbar = () => {

  const [isMenuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen)
  }

  const navItems = [
    {
        title: "Jwelery & Accessories", path: "/"
    },
    {
        title: "Clothing & Shoes", path: "/"
    },
    {
        title: "Home & Living", path: "/"
    },
    {
        title: "Wedding & Party", path: "/"
    },
    {
        title: "Toys & Entertainment", path: "/"
    },
    {
        title: "Art & Collectibles", path: "/"
    },
    {
        title: "Craft Supplies & Tools", path: "/"
    },
];

  return (


    <header className="max-w-screen-2xl xl:px-28 px-4 absolute top-0 right-0 left-0">
      <nav className="flex justify-between items-center container md:py-4 pt-6 pb-3">
        <FaSearch className="text-Black w-5 h-5 cursor-pointer hidden md:block"/>
        {/* logo section */}
        <Link href={"/"}>
          <Image src={logo} alt="Logo" />
        </Link>

        {/* account and shopping btn */}

        <div className=" text-Black sm:flex items-center gap-4 hidden">
          <Link href={"/"} className="flex items-center gap-2">
            <FaUser />
            Account
          </Link>
          <Link href={"/"} className="flex items-center gap-2">
            <FaShoppingBag />
            Shopping
          </Link>
        </div>
        {/* navbar for sm devices */}
        <div className="sm:hidden">
          <button onClick={
            toggleMenu
          }>
            {
              isMenuOpen ? <FaTimes className="w-5 h-5 text-Black"/> : <FaBars className="w-5 h-5 text-Black"/>
            }
          </button>
        </div>
      </nav>
      <hr />
      {/* category items */}

      <div className="pt-4">
        <ul className="lg:flex items-center justify-between text-Black hidden">
          {navItems.map(({title}) => (
            <li key={title}>
              <Link href={"/"} className="hover:text-orange-400">
              {title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* only mobile menu items */}

      <div>
      <ul className={`bg-Black text-white px-4 py-2 rounded ${isMenuOpen ? "" : "hidden"}`}>
          {navItems.map(({title}) => (
            <li key={title} className="hover:text-orange-500 my-3 cursor-pointer text-center">
              <Link href={"/"} >
              {title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
