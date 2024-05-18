import React, { useState } from 'react';
import { IoMdClose } from "react-icons/io";
import { IoMenu } from "react-icons/io5";
import { NavLink } from "react-router-dom";

export const navLinks = [
  {
    id: "home",
    title: "Home",
    path : "/"
  },
  {
    id: "about",
    title: "About",
    path : "/about"
  },
  {
    id: "skills",
    title: "Skills",
    path : "/skills"
  },
  {
    id: "projects",
    title: "Projects",
    path : "/projects"
  },
  {
    id: "github",
    title: "Github",
    path : "/github"
  },
  {
    id: "contact",
    title: "Contact",
    path : "/contact"
  },
];

const Navbar = () => {
  const [active, setActive] = useState(navLinks[0].id);
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <nav className="w-full py-5 lg:px-12 px-0 flex flex-wrap items-center justify-between fixed top-0  z-50 bg-black drop-shadow-4xl">
      {/* Logo */}
      <div className="flex items-center">
        <span className="relative flex h-12 w-12 ml-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-500 opacity-75"></span>
          <span className=" absolute inline-flex h-full w-full rounded-full bg-pink-300 brightness-90"></span>
          <span className="animate-ping relative inline-flex rounded-full h-3 w-3 bg-sky-400 p-2"></span>
        </span>
        <h1 className='text-3xl text-pink-400'>Rzii</h1>
      </div>
      
      {/* Desktop Navigation */}
      <ul className="list-none md:flex hidden justify-end items-center flex-wrap">
        {navLinks.map((nav) => (
          <li 
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[18px] hover:text-white py-2 border-2 border-black hover:border-b-indigo-500 ${
              active === nav.id ? "text-[#3b3467] font-semibold" : "text-[#6498ab]"
            } ${nav.id === navLinks[navLinks.length - 1].id ? "mr-0" : "mr-10"} mt-4 md:mt-0`}
            onClick={() => setActive(nav.id)}
          >
            <NavLink to={`${nav.path}`} activeClassName="text-[#3b3467] font-semibold">{nav.title}</NavLink>
          </li>
        ))}
        {/* Button after Contact */}
        <li className="font-poppins font-normal cursor-pointer text-[16px]  px-10 mt-4 md:mt-0">
          <button className="text-white focus:outline-none py-2 px-5 rounded-md bg-gradient-to-r from-pink-500 to-yellow-500 hover:from-green-400 hover:to-blue-500 transition ease-in-out animate-pulse">
          <a href='public/Resume - Razia Munir Rzi.pdf' download>Resume</a>
          </button>
        </li>
      </ul>

      {/* Mobile Navigation */}
      <div className="md:hidden flex flex-1 justify-end items-center ">
        <button
          onClick={handleToggle}
          className="focus:outline-none text-white"
        >
          {toggle ? <IoMdClose size={28} /> : <IoMenu size={28} />}
        </button>

        {/* Sidebar */}
        <div
          className={`${
            toggle ? "flex" : "hidden"
          } p-6 bg-[#c9cad1] absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex justify-end items-center flex-1 flex-col">
            {navLinks.map((nav) => (
              <li
                key={nav.id}
                className={`font-poppins font-medium cursor-pointer text-[16px] ${
                  active === nav.id ? "text-white" : "text-dimWhite"
                } ${nav.id === navLinks[navLinks.length - 1].id ? "mb-0" : "mb-4"}`}
                onClick={() => setActive(nav.id)}
              >
                <NavLink to={`${nav.path}`} activeClassName="text-white">{nav.title}</NavLink>
              </li>
            ))}
            {/* Button after Contact */}
            <li className="font-poppins font-normal cursor-pointer text-[16px] py-5">
              <button className="text-white focus:outline-none bg-[#05464f] py-2 px-10 rounded-md">
              <a href='public/Resume - Razia Munir Rzi.pdf' download>Resume</a>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
