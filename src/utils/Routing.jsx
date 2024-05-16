import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../components/Header';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Github from '../pages/Github';
import Projects from '../pages/Projects';
import Skills from '../pages/Skills';

const Routing = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills/>} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/github" element={<Github />} />
        <Route path="/contact" element={<Contact />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </>
  )
}

export default Routing
