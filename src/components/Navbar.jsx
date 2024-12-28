import React, { useEffect, useState } from "react";
import { assets } from "../assets/assets";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const getNavLinkClass = (isActive) => {
    if (showMobileMenu) {
      return isActive
        ? "px-4 py-2 rounded-full inline-block underline underline-offset-6 transition motion-reduce:hover:transform-none hover:-translate-y-1 duration-300 ease-in-out "
        : "px-4 py-2 rounded-full inline-block cursor-pointer motion-reduce:transition-none motion-reduce:hover:transform-none hover:-translate-y-1 transition duration-300 ease-in-out ";
    } else {
      return isActive
        ? "underline underline-offset-6 transition motion-reduce:hover:transform-none hover:-translate-y-1 duration-300 ease-in-out "
        : "cursor-pointer motion-reduce:transition-none motion-reduce:hover:transform-none hover:-translate-y-1 transition duration-300 ease-in-out ";
    }
  };

  const [showMobileMenu, setShowMobileMenu] = useState(false);

  useEffect(() => {
    if (showMobileMenu) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showMobileMenu]);

  return (
    <div className="absolute top-7 left-0 right-0 m-auto z-10 max-w-[90%]">
      <div className="container flex justify-between items-center py-2 px-6 md:px-20 lg:px-26 fixed bg-white max-w-[90%] rounded-full drop-shadow-xl">
        <a href="">
          <img src={assets.logo2} className="h-12 scale-110" alt="" />
        </a>
        <ul className="hidden md:flex gap-7 text-black text-lg">
          <NavLink
            to="/"
            className={({ isActive }) => getNavLinkClass(isActive)}
          >
            Home
          </NavLink>
          <NavLink
            to="/About"
            className={({ isActive }) => getNavLinkClass(isActive)}
          >
            About
          </NavLink>
          <NavLink
            to="/Projects"
            className="cursor-pointer motion-reduce:transition-none motion-reduce:hover:transform-none hover:-translate-y-1 transition duration-300 ease-in-out "
          >
            Projects
          </NavLink>
          <NavLink
            to="/Service"
            className={({ isActive }) => getNavLinkClass(isActive)}
          >
            Service
          </NavLink>
        </ul>
        <NavLink to={"/Contact"}>
          <button className="hidden md:block border-solid border-black border-2 px-4 py-1 rounded-full text-lg">
            Contact us
          </button>
        </NavLink>
        <img
          onClick={() => setShowMobileMenu(true)}
          src={assets.menu_icon}
          className="md:hidden w-7"
          alt=""
        />
      </div>
      {/* ----------------------- Mobile Menu ----------------------- */}
      <div
        className={`md:hidden ${
          showMobileMenu ? "fixed w-full" : "h-0 w-0"
        }  right-0 top-0 bottom-0 overflow-hidden bg-white transition-all`}
      >
        <div
          onClick={() => setShowMobileMenu(false)}
          className="flex justify-end p-6 cursor-pointer"
        >
          <img src={assets.cross_icon} className="w-6" alt="" />
        </div>
        <ul className="flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium">
          <NavLink
            onClick={() => setShowMobileMenu(false)}
            to="/"
            className={({ isActive }) => getNavLinkClass(isActive)}
          >
            Home
          </NavLink>
          <NavLink
            onClick={() => setShowMobileMenu(false)}
            to="/About"
            className={({ isActive }) => getNavLinkClass(isActive)}
          >
            About
          </NavLink>
          <NavLink
            onClick={() => setShowMobileMenu(false)}
            to="/Projects"
            className={({ isActive }) => getNavLinkClass(isActive)}
          >
            Projects
          </NavLink>
          <NavLink
            onClick={() => setShowMobileMenu(false)}
            to="/Contact"
            className="cursor-pointer motion-reduce:transition-none motion-reduce:hover:transform-none hover:-translate-y-1 transition duration-300 ease-in-out "
          >
            Contact
          </NavLink>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
