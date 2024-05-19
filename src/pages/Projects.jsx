import React from 'react'

const Projects = () => {
  const miniProjects =[
    { id:'1',
      title: 'Bubble Game',
      description: 'The Bubble Game is an engaging and interactive web-based game where players must click on moving bubbles to pop them and earn points. The game features a simple yet addictive gameplay mechanic, where bubbles of varying sizes float around the screen, and players must be quick and precise to click on them before they disappear. The game incorporates visually appealing animations and responsive design to ensure an enjoyable experience across different devices. It also includes a scoring system to track the player’s progress and encourage replayability.',
      image: 'public/bubbleGame.PNG',
      github: 'https://github.com/NoMi1999/To-Do-List',
      live: 'iraziamunir.github.io/BubbleGame/',
       Techs :[
        {name:'HTML'},
        {name:'CSS'},
        {name:'JavaScript'},
      ]
    },
    { id:'2',
      title: 'Myntra Clone',
      description: 'The Myntra Clone is a web-based e-commerce platform inspired by the popular fashion retailer Myntra.',
      image: 'public/myntra.PNG',
      github: 'https://github.com/NoMi1999/To-Do-List',
      live: 'iraziamunir.github.io/MyntraClone/',
      
       Techs :[
        {name:'HTML'},
        {name:'CSS'},
        {name:'JavaScript'},
      ]
    },
    {id:'3',
      title: 'Razia Munir ',
      description: 'A simple landing page',
      image: 'public/rzMunir.PNG',
      github: 'https://github.com/NoMi1999/To-Do-List',
      live: 'https://iraziamunir.github.io/RaziaMunir/',
      Techs :[
        {name:'HTML'},
        {name:'CSS'},
        {name:'JavaScript'},
      ]
    },
    {id:'4',
      title: 'Calculator',
      description: 'The calculator supports essential functions such as addition, subtraction, multiplication, and division, providing users with the tools needed for everyday calculations.',
      image: 'public/calculater.PNG',
      github: 'https://github.com/NoMi1999/Calculator',
      live: 'https://nomi1999.github.io/Calculator/',
      Techs :[
        {name:'HTML'},
        {name:'CSS'},
        {name:'JavaScript'},
      ]
    },
    {id:'5',
      title: 'Password Generator',
      description: 'The Password generator creates highly randomized passwords, making them difficult for hackers to predict or crack.Users can customize the length of the password (e.g., 8 to 32 characters) and select the types of characters',
      image: 'public/passwordGenrater.PNG',
      github: 'https://github.com/NoMi1999/To-Do-List',
      live: 'https://nomi1999.github.io/To-Do-List/',
      Techs :[
        {name:'HTML'},
        {name:'CSS'},
        {name:'JavaScript'},
      ]
    },
    {id:'6',
      title: 'Stop Watch',
      description: 'The Stopwatch Project is a versatile and user-friendly application designed to provide accurate timing for a wide range of activities. Whether you are timing workouts, cooking, studying, or conducting experiments, this stopwatch ensures you have precise control over your time management',
      image: 'public/stopWatch.PNG',
      github: 'https://github.com/NoMi1999/To-Do-List',
      live: 'https://nomi1999.github.io/To-Do-List/',
      Techs :[
        {name:'HTML'},
        {name:'CSS'},
        {name:'JavaScript'},
      ]
    },
    {id:'7',
      title: 'Text To Speech',
      description: 'The Text-to-Speech (TTS) Project is an innovative application designed to convert written text into natural-sounding speech. This technology serves a wide array of purposes, from aiding those with visual impairments and reading disabilities to enhancing user experience in digital applications and devices.',
      image: 'public/textToSeepch.PNG',
      github: 'https://github.com/NoMi1999/To-Do-List',
      live: 'https://nomi1999.github.io/To-Do-List/',
      Techs :[
        {name:'HTML'},
        {name:'CSS'},
        {name:'JavaScript'},
      ]
    },
    {id:'8',
      title: 'Weather App',
      description: 'The Weather App Project is a sophisticated and user-friendly application designed to provide accurate and real-time weather information. ',
      image: 'public/weatherApp.PNG',
      github: 'https://github.com/NoMi1999/To-Do-List',
      live: 'https://iraziamunir.github.io/weatherApp/',
      Techs :[
        {name:'HTML'},
        {name:'CSS'},
        {name:'JavaScript'},
      ]
    },
    {id:'9',
      title: 'Time Pulse',
      description: 'The TimePulse Project is an innovative web application designed to enhance your time management skills and boost productivity. Developed with a user-centric approach, TimePulse provides a suite of tools to help you organize your tasks, track your progress, and achieve your goals efficiently.',
      image: 'public/timePulse3.PNG',
      github: 'https://github.com/NoMi1999/To-Do-List',
      live: 'https://iraziamunir.github.io/TimePulse/',
      Techs :[
        {name:'HTML'},
        {name:'CSS'},
        {name:'JavaScript'},
      ]
    },
   
  ]
  return (
    <div className='w-full py-40 flex flex-col items-center'>
      <div>
        <h2 className='text-white text-5xl pb-20'>My Projects</h2>
      </div>
      <div className=''>
        {miniProjects.map((project) => {
          return(
            <div className='flex flex-col  lg:flex-row gap-10 text-white'>
              <div className=' w-full lg:w-[50%] flex flex-col gap-4 items-center '>
                <h2 className=' text-3xl text-slate-400 font-bold'><span className=' text-blue-400'>{project.id}.</span> {project.title}</h2>
                <h3 className='text-xl text-pink-400 text-center'>Technologies used </h3>
                <div className='flex justify-center flex-col md:flex-row text-center gap-5 py-10'>
                {project.Techs.map((techItem, index) =>{
                  return(
                    <div key={index} className='md:w-32 w-60 h-12  text-white outline outline-slate-100 rounded-md flex sm:flex-row flex-col items-center justify-center'>{techItem.name}</div>
                  )
                })}
                </div>
                <div className='w-[80%]'>
                <p className='text-white lg:text-start text-center text-wrap w-100 '>{project.description}</p>
                </div>
              </div>
              <div className='w-full lg:w-[50%] mb-10 flex justify-center'>
                <img src={project.image} alt="" className='rounded-lg'/>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Projects
