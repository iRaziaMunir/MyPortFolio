import React from 'react'
import { IoLogoLinkedin } from "react-icons/io";
import { FaGithub } from "react-icons/fa6";
import { CgMail } from "react-icons/cg";
import { FaPhone } from "react-icons/fa";
import { Link } from 'react-router-dom';
const Contact = () => {

  const contactMe = [
    {
      icon:<IoLogoLinkedin />,name:'Linkedin',title:'Razia Munir',URL:'https://www.linkedin.com/in/raziamunir/'
    },
    {
      icon:<FaGithub />,name:'Github',title:'iRaziaMunir',URL:'https://github.com/iRaziaMunir'
    },
    {
      icon:<CgMail />,name:'E-mail',title:'irazia.munir@gmail.com',URL:'mailto:irazia.munir@gmail.com'
    },
    {
      icon:<FaPhone />,name:'Phone',title:'03097949844',
    }
  ]
  return (
    <div className='w-full h-screen bg-black flex flex-col gap-32 items-center py-40 text-white'>
      <div>
        <h2 className='text-5xl py-2 border-2 border-black border-b-blue-400 hover:border-b-pink-400'>Get in Touch</h2>
      </div>
      <div className='flex items-center justify-around flex-wrap gap-10 '>
        {contactMe.map((items) => {
          return(
            <div className='w-72 h-60 bg-slate-50 flex flex-col justify-center items-center rounded-md drop-shadow-4xl cursor-pointer outline hover:outline-blue-400'>
            <div className='w-20 h-20 bg-slate-900 rounded-full flex items-center justify-center drop-shadow-4xl text-4xl outline outline-1 hover:outline-blue-400 hover:bg-slate-100 hover:text-pink-400 mb-4 hover:animate-spin'>
              <Link to={items.URL}>{ items.icon}</Link>
            </div>
            <span className='text-black hover:text-blue-400 font-semibold text-xl'>{items.name}</span>
            <span className='text-black hover:text-pink-400 text-md'>{items.title}</span>
          </div>
          )
        })}
      </div>
    </div>
  )
}

export default Contact
