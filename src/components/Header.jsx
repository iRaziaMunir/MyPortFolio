
import React from 'react';
import Typewriter from './TypeWriter';
import { FaGithub } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import {Link} from 'react-router-dom'
const Header = () => {
  const texts = ["Hello, world!", "Welcome to React!", "Enjoy Typewriter Effect!"];

  return (
    <section className="w-full px-4 md:px-12 lg:px-0 flex items-center justify-between min-h-screen rounded-md ">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row gap-20">
          {/* Text Section */}
          <div className="w-full md:w-1/2 lg:w-2/3 md:pr-8 lg:pr-12 mb-8 md:mb-0">
            <span className="relative flex lg:h-40 lg:w-60 md:h-30 md:w-30 h-20 w-20">
              <span className="animate-ping absolute inline-flex h-96 w-96 rounded-full bg-pink-500 opacity-75"></span>
              {/* <span class=" absolute inline-flex h-full w-full rounded-full bg-yellow-200 opacity-96 text-green-900"></span> */}
              <span className="animate-ping relative inline-flex rounded-full h-3 w-3 bg-sky-400 p-2"></span>
            </span>
            <Typewriter text ={texts}/>
            <p className="text-lg lg:text-4xl text-gray-700 mt-10">
              I am <span className='font-semibold text-[#ffc100] hover:text-[#df1edc] hover:transition-all hover:ease-in-out hover:duration-700 uppercase motion-safe:animate-pulse drop-shadow-5xl'> Razia Munir!</span><br />
              <span className='hover:text-[#6b6d34] text-[#701219] tracking-wide'>Frontend Developer</span> 
            </p>
            <div className='flex gap-5 hover:cursor-pointer'>
              <Link to='https://github.com/iRaziaMunir' className='px-8 py-2 outline outline-1 hover:outline-[#05464f] outline-pink-400 mt-10 rounded-md hover:drop-shadow-lg cursor-pointer'>
              <FaGithub  className='text-xl hover:text-[#05464f] text-pink-400'/>
              </Link>
              <Link to='https://www.linkedin.com/in/raziamunir/' className='px-8 py-2 outline outline-1 hover:outline-[#05464f] outline-pink-400 mt-10 rounded-md hover:drop-shadow-lg cursor-pointer'>
              <FaLinkedinIn className='text-xl hover:text-[#05464f] text-pink-400'/>
              </Link>
              <Link to='mailto:irazia.munir@gmail.com' className='px-8 py-2 outline outline-1 hover:outline-[#05464f] outline-pink-400 mt-10 rounded-md hover:drop-shadow-lg cursor-pointer'>
              <CgMail className='text-xl hover:text-[#05464f] text-pink-400'/>
              </Link>
            </div>
          </div>

          {/* Image Section */}
          <div className="w-full max-w-96 md:w-1/2 lg:w-1/1">
            <img
              className="h-auto rounded-md shadow-lg md:rounded-lg hover:scale-105 drop-shadow-2xl"
              src="public\WhatsApp Image 2024-05-05 at 5.51.41 PM.jpeg"
              alt="Your Image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
