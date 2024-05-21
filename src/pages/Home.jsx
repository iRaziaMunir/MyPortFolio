
import React from 'react';
import Typewriter from '../components/TypeWriter'
import { FaGithub } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import {Link} from 'react-router-dom'
import Hero from '../components/Hero';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';
const Home = () => {
  const texts = ["Hello, world!", "Welcome to React!", "Enjoy Typewriter Effect!"];

  return (
    <div className=' text-slate-50'>
    <Hero />
    <About />
    <Skills />
    <Projects />
    <Contact />
    </div>
  );
};

export default Home;
