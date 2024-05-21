import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Github from '../pages/Github';
import Projects from '../pages/Projects';
import Skills from '../pages/Skills';

const Routing = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} id="/"/>
        {/* <Route path="/about" element={<About />} id="about"/>
        <Route path="/skills" element={<Skills/>} id="skills"/>
        <Route path="/projects" element={<Projects id="projects"/>} />
        <Route path="/github" element={<Github />} id="github"/>
        <Route path="/contact" element={<Contact />} id="contact"/> */}
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </>
  )
}

export default Routing
