import React, { useState, useEffect } from 'react';
import { IoMdClose } from 'react-icons/io';
import { IoMenu } from 'react-icons/io5';
import { NavLink } from 'react-router-dom';
import { navLinks } from './navLinks'; // Assuming you have this file for navLinks array

const Navbar = () => {
  const [active, setActive] = useState(navLinks[0].id);
  const [toggle, setToggle] = useState(false);
  const [isScroll, setIsScroll] = useState(false);

  const scrollToPage = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const scrollToY = element.offsetTop;
      window.scrollTo({ top: scrollToY, behavior: 'smooth' });
    }
  };

  const determineScrollPage = () => {
    const scrollPosition = window.scrollY + window.innerHeight / 2;
    for (let i = navLinks.length - 1; i >= 0; i--) {
      const page = document.getElementById(navLinks[i].id);
      if (page) {
        const offsetTop = page.offsetTop;
        const offsetBottom = offsetTop + page.clientHeight;
        if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
          setActive(navLinks[i].id);
          break;
        }
      }
    }
  };

  const handleToggle = () => {
    setToggle(!toggle);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
      determineScrollPage();
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className="w-full py-5 lg:px-12 px-0 flex flex-wrap items-center justify-between fixed top-0 z-50 bg-black drop-shadow-4xl">
      <div className="flex items-center">
        <span className="relative flex h-12 w-12 ml-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-500 opacity-75"></span>
          <span className="absolute inline-flex h-full w-full rounded-full bg-pink-300 brightness-90"></span>
          <span className="animate-ping relative inline-flex rounded-full h-3 w-3 bg-sky-400 p-2"></span>
        </span>
        <h1 className="text-3xl text-pink-400">Rzii</h1>
      </div>

      <ul className="list-none md:flex hidden justify-end items-center flex-wrap transition-colors 0.3s ease-in-out">
        {navLinks.map((navLink) => (
          <li
            key={navLink.id}
            className={`font-poppins font-normal cursor-pointer text-[18px] hover:text-white py-2 ${
              active === navLink.id
                ? 'text-[#9585ff] font-semibold border-2 border-black border-b-indigo-500'
                : 'text-[#93cce1]'
            } ${navLink.id === navLinks[navLinks.length - 1].id ? 'mr-0' : 'mr-10'} mt-4 md:mt-0`}
            onClick={() => {
              setActive(navLink.id);
              scrollToPage(navLink.id);
            }}
          >
            <NavLink to={`#${navLink.id}`}>{navLink.title}</NavLink>
          </li>
        ))}
        <li className="font-poppins font-normal cursor-pointer text-[16px] px-10 mt-4 md:mt-0">
          <button className="text-white focus:outline-none py-2 px-5 rounded-md bg-gradient-to-r from-pink-500 to-yellow-500 hover:from-green-400 hover:to-blue-500 transition ease-in-out animate-pulse">
            <a href="public/Resume - Razia Munir Rzi.pdf" download>Resume</a>
          </button>
        </li>
      </ul>

      <div className="md:hidden flex flex-1 justify-end items-center">
        <button
          onClick={handleToggle}
          className="focus:outline-none text-white"
        >
          {toggle ? <IoMdClose size={28} /> : <IoMenu size={28} />}
        </button>

        <div
          className={`${
            toggle ? 'flex' : 'hidden'
          } p-6 bg-[#c9cad1] absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex justify-end items-center flex-1 flex-col">
            {navLinks.map((navLink) => (
              <li
                key={navLink.id}
                className={`font-poppins font-medium cursor-pointer text-[16px] ${
                  active === navLink.id ? 'text-white' : 'text-dimWhite'
                } ${navLink.id === navLinks[navLinks.length - 1].id ? 'mb-0' : 'mb-4'}`}
                onClick={() => {
                  setActive(navLink.id);
                  setToggle(false); // Close the menu on selection
                  scrollToPage(navLink.id);
                }}
              >
                <NavLink to='/' className={({ isActive }) => isActive ? 'text-white' : ''}>{navLink.title}</NavLink>
              </li>
            ))}
            <li className="font-poppins font-normal cursor-pointer text-[16px] py-5">
              <button className="text-white focus:outline-none bg-[#05464f] py-2 px-10 rounded-md">
                <a href="public/Resume - Razia Munir Rzi.pdf" download>Resume</a>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
