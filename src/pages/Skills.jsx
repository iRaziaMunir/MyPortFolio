import '../App.css';

const skills = () => {

  const mySkills = [
    {image: 'public/html.jfif',name: 'HTML'},
    {image: 'public/css2.png',name: 'CSS'},
    {image: 'public/js2.png',name: 'JavaScript'},
    {image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvGiFSxyg2OxZy3sLwvmPtxEYbh1bl-6hUbA&s',name: 'Bootstrap'},
    {image: 'public/tailwind.jfif',name: 'Tailwind CSS'},
    {image: 'public/react.png',name: 'React JS'},
    {image: 'public/reduxtoolkit.png',name: 'Redux Toolkit'},
    {image: 'public/wix.png',name: 'WIX'}
  ]

  return (
    <div id='skills' className="w-full flex flex-col gap-40 items-center py-4 lg:py-40 oddSection-bg-color">
      <div className=''>
        <h2 className='text-white text-5xl'>My Skills</h2>
      </div>
      <div className='flex flex-wrap gap-12 items-center justify-center'>
        {mySkills.map((skills) =>{
          return(
            <div className=' relative flex flex-col items-center drop-shadow-lg outline  hover:outline-orange-500 rounded-md bg-slate-100 '>
              <img src={skills.image} alt="" className=' rounded-md hover:scale-96 object-cover'/>
              <span className='text-yellow-500 text-xl absolute '>{skills.name}</span>
              <div className=' hover:absolute w-full h-full bg-slate-400'></div>
            </div>
            
          )
        })}
      </div>
    </div>
  );
};

export default skills;
