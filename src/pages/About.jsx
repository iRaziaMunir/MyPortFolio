import React from 'react';

const About = () => {
  return (
    <div className=' h-screen mb-20 sm:my-0 flex flex-col justify-center items-center'>
      <div className="container sm:mt-10 mt-0 mx-auto px-4 flex flex-col lg:flex-row md:gap-10 gap-0 items-center justify-center">
      <div className="w-full lg:w-1/2 p-10">
        <div className="relative flex justify-center lg:justify-start">
          <span className="animate-ping absolute inline-flex h-40 w-40 lg:h-60 lg:w-60 rounded-full bg-pink-500 opacity-75"></span>
          <span className="animate-ping relative inline-flex rounded-full h-10 w-10 bg-sky-400 p-2"></span>
        </div>
        <h2 className="tracking-wide text-2xl md:text-4xl lg:text-6xl text-[#1e9adf] font-semibold py-10 text-center lg:text-left animate-pulse">About Me</h2>
        <p className="text-lg text-start">
          I am a passionate web developer with experience in building modern web applications using HTML, CSS, JavaScript, Bootstrap, Tailwind CSS, and React.js. This is my About page where you can learn more about my skills, experiences, and interests. My dedication to continuous learning and problem-solving ensures efficient and effective project delivery. Let's collaborate to bring your ideas to life and create impactful digital experiences together.
        </p>
      </div>
      <div className="w-full lg:w-1/3 lg:block hidden">
      <img
        className="lg:mt-20 mt-0 rounded-md md:rounded-lg drop-shadow-2xl animate-pulse mx-auto max-h-72 md:max-h-96 max-w-full h-auto"
        src="public\WhatsApp Image 2024-05-05 at 5.51.41 PM.jpeg"
        alt="Your Image"
      />
      </div>
      </div>
      <div className='mt-10 flex md:flex-row flex-col gap-4 justify-center items-center'>
  <div className='w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/2 h-20 flex flex-col items-center justify-center outline outline-1 outline-blue-500'>
    <h2>50 +</h2>
    <h3>Mini Projects</h3>
  </div>
  <div className='w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/2 h-20 flex flex-col items-center justify-center outline outline-1 outline-blue-500'>
    <h2>50 +</h2>
    <h3>Mini Projects</h3>
  </div>
  <div className='w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4 h-20 flex flex-col items-center justify-center outline outline-1 outline-blue-500'>
    <h2>50 +</h2>
    <h3>Mini Projects</h3>
  </div>
  <div className='w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 h-20 flex flex-col items-center justify-center outline outline-1 outline-blue-500'>
    <h2>50 +</h2>
    <h3>Mini Projects</h3>
  </div>
</div>

      
    </div>
  );
};

export default About;
