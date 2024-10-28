import React from 'react'
import about from "../assets/about.png"
import about2 from "../assets/education.png"

function About() {
    return (
            <section id='about' className='w-full h-full bg-slate-50 p-8 pr-0 text-black '>
      <div className='flex justify-end '>
      <div className='w-[85%] h-full max-md:w-full max-md:flex-col '>
        <h4 className='italic'>Nice to meet you!</h4>
        <h1 className='font-bold text-4xl gradienttext'>Welcome...</h1>
        <div className='flex gap-8'>
          <img className='p-6 w-1/3 max-md:hidden' src={about} alt="" />
          <div className='pt-16'>
            <h2 className='text-5xl font-extrabold px-3 gradienttext'>ABOUT ME</h2>
            <p className='p-3 font-serif text-xl'>I am <span className='text-pink-500'>21</span> years old from <span className='text-orange-500'>Lahore</span>. From a young age, I was captivated by the world of <span className='text-pink-600'>design</span> and art. I spent countless hours experimenting with <span className='text-teal-500'>colors</span>, <span className='text-pink-500'>shapes</span>, and <span className='text-purple-500'>materials</span>, discovering the power of design to convey emotions and tell stories.
 
 <br /><br /> Today, that childhood <span className='text-teal-500'>curiosity</span> fuels my work as a UI/UX designer, where I <span className='text-pink-500'>strive</span> to create <span className='text-orange-500'>meaningful</span> interactions that resonate with users and celebrate the <span className='text-purple-800'>artistry</span> behind every pixel. </p>

          </div>
            
        </div>
        

      </div></div>

      <div className='flex justify-end'>
      <div className='max-lg:w-[87%] md:w-[87%] xl:w-[94%] h-full rounded-2xl gradientbackground p-10  text-white max-md:w-full max-md:flex-col '>
          <div className='flex max-sm:flex-col p-3 ml-10 justify-center xl:justify-between gap-32 max-md:flex-col'>
            <div>
              <h1 className='text-4xl 2xl:text-6xl font-serif '>My Education</h1>
              <h2 className=' text-2xl 2xl:text-6xl m-3 c font-serif'>Schooling:</h2>
              <p className='2xl:text-xl'>The Educators School with 85% marks</p>
              <h2 className=' text-2xl 2xl:text-6xl m-3 font-serif '>Intermediate:</h2>
              <p className='2xl:text-xl'>from Superior college with 75% marks</p>
              <h2 className=' text-2xl 2xl:text-6xl m-3 font-serif '>Bachelors:</h2>
              <p className='2xl:text-xl'>BSCS from Virtual University of Pakistan . <br /> Continue</p>
            </div>
            <img className='p-6 w-1/3' src={about2} alt="" />
          </div>
          </div>

        </div>
        <div  className='flex justify-end'>
        <div className='w-[85%] h-full flex justify-between  p-4 px-10 max-md:w-full max-md:px-0 max-sm:flex-col'>
      <div className='p-7 w-1/3 max-sm:w-full'>
      <h1 className='font-bold text-4xl gradienttext '>My skills</h1>
      <p className='text-lg text-wrap'>My <span className='text-purple-600'>passion</span> lies in creating seamless interactions that <span className='text-orange-600'>elevate</span> digital products to new levels of <span className='text-teal-600'>usability</span> and <span className='text-pink-600'>aesthetics</span>.</p>
      </div>        
      <div className='mr-8'>
       <h2 className='font-semibold text-lg'>User Interface</h2>
      <div className='flex'>
      <div className='w-72 h-2 bg-pink-400 mt-[6px] rounded-l-xl'></div><div className='w-5 h-5 bg-white rounded-full border-pink-400 border-2 mb-4'></div>
      </div>
       
       <h2 className='font-semibold text-lg'>User Expereience</h2>
       <div className='flex'>
      <div className='w-60 h-2 bg-pink-400 mt-[6px] rounded-l-xl'></div><div className='w-5 h-5 bg-white rounded-full border-pink-400 border-2 mb-4'></div><div className='w-10 h-2 bg-gray-700 mt-[6px] rounded-r-xl'></div>
      </div>
       <h2 className='font-semibold text-lg'>Graphic Designing</h2>
       <div className='flex'>
      <div className='w-60 h-2 bg-pink-400 mt-[6px] rounded-l-xl'></div><div className='w-5 h-5 bg-white rounded-full border-pink-400 border-2 mb-4'></div><div className='w-10 h-2 bg-gray-700 mt-[6px] rounded-r-xl'></div>
      </div>
       <h2 className='font-semibold text-lg'>product designing</h2>
       <div className='flex'>
      <div className='w-60 h-2 bg-pink-400 mt-[6px] rounded-l-xl'></div><div className='w-5 h-5 bg-white rounded-full border-pink-400 border-2 mb-4'></div><div className='w-10 h-2 bg-gray-700 mt-[6px] rounded-r-xl'></div>
      </div>
        </div>
      </div> 
          </div> 
      
    </section>
        
    )
}

export default About
