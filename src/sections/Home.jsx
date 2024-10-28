import React from 'react'
import home from "../assets/home2.png"

function Home() {
    return (

            
            <section id='home' className='w-full h-screen  flex justify-end '>
                <div className='w-[85%] h-full  flex justify-center items-center max-sm:flex-col max-sm:w-full max-md:w-full max-md:flex-col '>
                    <div className='p-10 '>
                        <h4 className=' ml-6'>Hi I am </h4>
                        <h4 className='text-xl 2xl:text-4xl ml-8 text-blue-500 max-xl:text-2xl'>HAMZA </h4>
                        <h1 className='font-extrabold lg:text-6xl 2xl:text-8xl gradienttext2'>UI & UX</h1>
                        <h1 className='font-extrabold text-6xl 2xl:text-8xl gradienttext2 ml-9 '>DESIGNER</h1>
                        <p className='ml-3 text-white 2xl:text-xl'>Bringing your vision to life with stunning and innovative designs.</p>

                    </div>
                    <div>
                        <img className='p-10 max-2xl:w-[650] max-2xl:h-[650] ' src={home} alt="" />
                    </div>


                </div>

      
      </section>    )
}

export default Home
