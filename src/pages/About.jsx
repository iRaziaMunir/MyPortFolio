import React from 'react';
import { FaAngellist } from "react-icons/fa";
import { Link } from 'react-router-dom';
const About = () => {
  return (
    <div id = 'about' className=' py-4 lg:py-40 sm:my-0 flex flex-col justify-center items-center evenSection-bg-color'>
      <div className="container sm:mt-10 mt-0 mx-auto px-4 flex flex-col lg:flex-row md:gap-10 gap-0 items-center justify-center">
      <div className="w-full lg:w-1/1 p-10">
        <div className="relative flex justify-center lg:justify-start">
          <span className="animate-ping absolute inline-flex h-40 w-40 lg:h-60 lg:w-60 rounded-full bg-pink-500 opacity-75"></span>
          <span className="animate-ping relative inline-flex rounded-full h-10 w-10 bg-sky-400 p-2"></span>
        </div>
        <div className='text-center '>
        <h2 className="text-5xl py-10  animate-pulse ">About Me</h2>
        </div>
        <div>
        <p className="text-lg text-start py-10">
          I am a passionate web developer with experience in building modern web applications using HTML, CSS, JavaScript, Bootstrap, Tailwind CSS, and React.js. This is my About page where you can learn more about my skills, experiences, and interests. My dedication to continuous learning and problem-solving ensures efficient and effective project delivery. Let's collaborate to bring your ideas to life and create impactful digital experiences together.
        </p>
        </div>
        <div className='mt-10 h-auto flex md:flex-row flex-col gap-10 items-center justify-start text-pink-500'>
        <div className='w-full sm:w-1/2 md:w-1/4 lg:w-1/2  h-32 flex flex-col items-center justify-center outline outline-1 outline-[#1e9adf] rounded-md hover:outline-pink-500  hover:text-[#1e9adf]'>
          <h2 className='text-2xl'>10 +</h2>
          <h3 className='text-xl'>Mini Projects</h3>
        </div>
        <div className='w-full sm:w-1/2 md:w-1/4 lg:w-1/2  h-32 flex flex-col items-center justify-center outline outline-1 outline-[#1e9adf] rounded-md hover:outline-pink-500  hover:text-[#1e9adf]'>
          <h2 className='text-2xl'>01 </h2>
          <h3 className='text-xl'>Team Project</h3>
        </div>
        <div className='w-full sm:w-1/2 md:w-1/4 lg:w-1/2  h-32 flex flex-col items-center justify-center outline outline-1 outline-[#1e9adf] hover:outline-pink-500 rounded-md hover:text-[#1e9adf]'>
          <h2 className='text-2xl'>01 </h2>
          <h3 className='text-xl'>Real Project</h3>
        </div>
        </div>
        <div className='text-blue-400 py-10 px-4 flex flex-col md:flex-row justify-start gap-20'>
          <ul className='list-disc'>
          <li className='flex gap-2 items-center hover:text-pink-500'>
              <FaAngellist className='text-orange-500 hover:text-pink-500' />
              Problem Solving
              </li>
              <li className='flex gap-2 items-center hover:text-pink-500'>
              <FaAngellist className='text-orange-500 hover:text-pink-500' />
              Adaptability
              </li>
              <li className='flex gap-2 items-center hover:text-pink-500'>
              <FaAngellist className='text-orange-500 hover:text-pink-500' />
              Team Leadership
              </li>
              
          </ul>
          <ul className='  marker:text-green-500 '>
            <li className='flex gap-2 items-center hover:text-pink-500'>
              <FaAngellist className='text-orange-500' />
              Time management
            </li>
            <li className='flex gap-2 items-center hover:text-pink-500'>
              <FaAngellist className='text-orange-500' />
              Team worker
            </li>
            <li className='flex gap-2 items-center hover:text-pink-500'>
              <FaAngellist className='text-orange-500' />
              Communication
            </li>
          </ul>
          
        </div>
        <div className=' flex justify-center'>
          <button className="text-white focus:outline-none py-4 w-[50%] rounded-md bg-gradient-to-r hover:from-pink-500 hover:to-yellow-500 from-green-400 to-blue-500 transition ease-in-out animate-pulse">
          <a href='public/Resume - Razia Munir Rzi.pdf' download>Resume</a></button>
        </div>
      </div>
      {/* <div className="w-full lg:w-1/3 outline-double outline-orange-500 ">
        <img
        className="lg:mt-20 mt-0 rounded-md md:rounded-md drop-shadow-2xl animate-pulse mx-auto w-96 h-auto"
        src="public\WhatsApp Image 2024-05-05 at 5.51.41 PM.jpeg"
        alt="Your Image"
      />
      </div> */}
      </div>
    </div>
  );
};

export default About;
