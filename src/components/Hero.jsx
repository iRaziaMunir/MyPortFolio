
import React from 'react';
import '../App.css';
import Typewriter from './TypeWriter';
import { FaGithub } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import {Link} from 'react-router-dom'
const Hero = () => {
  const texts = ["Hello, world!", "Welcome to React!", "Enjoy Typewriter Effect!"];

  return (
<<<<<<< HEAD:src/components/Header.jsx
    <section className="w-full py-40 px-4 md:px-12 lg:px-0 flex items-center rounded-md ">
=======
    <section id='hero' className="w-full lg:py-40 py-4 px-4 md:px-12 lg:px-0 flex items-center rounded-md oddSection-bg-color">
>>>>>>> 19a50227fe9c55dfd3d073945bdb7908c4e26b23:src/components/Hero.jsx
        <div className="w-full flex flex-col md:flex-row items-center justify-center">
          {/* Text Section */}
          <div className=" w-full md:w-1/2 lg:w-2/2 md:pr-8 lg:pr-12 mb-8 md:mb-0">
            <span className="relative flex lg:h-40 lg:w-60 md:h-30 md:w-30 h-20 w-20">
              <span className="animate-ping absolute inline-flex h-96 w-96 rounded-full bg-pink-100 opacity-75"></span>
              {/* <span class=" absolute inline-flex h-full w-full rounded-full bg-yellow-200 opacity-96 text-green-900"></span> */}
              <span className="animate-ping relative inline-flex rounded-full h-3 w-3 bg-sky-400 p-2"></span>
            </span>
            <Typewriter text ={texts}/>
            <p className="text-lg lg:text-4xl text-gray-50 mt-10">
              I am <span className='font-semibold text-[#ffc100] hover:text-[#df1edc] hover:transition-all hover:ease-in-out hover:duration-700 uppercase motion-safe:animate-pulse drop-shadow-5xl'> Razia Munir!</span><br />
              {/* <span className='hover:text-[#6b6d34] text-[#701219] tracking-wide'>Frontend Developer</span>  */}
            </p>
<<<<<<< HEAD:src/components/Header.jsx
            <h1 className="text-[4vw] font-semibold uppercase opacity-60 leading-none ml-8 lg:ml-10 text-slate-50">Frontend</h1>
            <div id="headingdiv2" className="w-fit">
              <h1 id="heading2" className="text-[4vw] font-semibold uppercase opacity-60 leading-none ml-40 text-slate-50 ">Developer</h1>
=======
            <h1 className="text-[5vw] font-semibold uppercase opacity-60 leading-none ml-8 lg:ml-10 text-slate-100">Frontend</h1>
            <div id="headingdiv2" className="w-fit">
              <h1 id="heading2" className="text-[5vw] font-semibold uppercase opacity-60 leading-none ml-40 text-slate-50">Developer</h1>
>>>>>>> 19a50227fe9c55dfd3d073945bdb7908c4e26b23:src/components/Hero.jsx
              <h4 id="text" className="text-right opacity-60 text-sm uppercase text-white">lives in Lahore</h4>
            </div>
            <div className='flex flex-wrap gap-5 hover:cursor-pointer'>
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
          <div className="w-full h-full max-w-96 md:w-1/2 lg:w-1/1">
            <img
              className="h-auto rounded-md shadow-lg md:rounded-lg hover:scale-105 drop-shadow-2xl"
              src="public\WhatsApp Image 2024-05-17 at 3.35.46 PM (1).jpeg"
              alt="Your Image"
            />
          </div>
        </div>
    </section>
  );
};

export default Hero;
