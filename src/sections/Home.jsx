import React from 'react'
import home from "../assets/home2.png"

function Home() {
    return (

            
            <section id='home' className='w-full h-screen  flex justify-end '>
                <div className='w-[85%] h-full  flex justify-center items-center max-sm:flex-col max-sm:w-full max-md:w-full max-md:flex-col '>
                    <div className='p-10 '>
                        <h4 className=' ml-6'>Hi I am </h4>
                        <h4 className='text-xl ml-8 text-blue-500'>HAMZA </h4>
                        <h1 className='font-extrabold text-6xl gradienttext2'>UI & UX</h1>
                        <h1 className='font-extrabold text-6xl gradienttext2 ml-9 '>DESIGNER</h1>
                        <p className='ml-3'>Bringing your vision to life with stunning and innovative designs.</p>

                    </div>
                    <div>
                        <img className='p-10 ' width={450} height={400} src={home} alt="" />
                    </div>


                </div>

      
      </section>    )
}

export default Home
