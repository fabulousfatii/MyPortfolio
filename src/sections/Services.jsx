import React from 'react'
import services from "../assets/OBJECTS.png"
import services2 from "../assets/objects2.png"

function Services() {
    return (
        <section id='services' className='w-full h-full bg-white p-5'>
      <div className='flex justify-end' >
      <div className='w-[83%] h-full max-md:w-full max-md:flex-col '>
      <h1 className='font-extrabold text-4xl gradienttext '>MY SERVICES:</h1>
        <div className='flex text-black border-2 m-5 p-2 rounded-2xl gradientborder '>
        
          <div>
            <h1 className='text-orange-500 text-4xl font-bold'>1.</h1>
            <h1 className='text-3xl font-bold ml-6'>UI DESIGN </h1>
            <h3 className='ml-6'>Crafting intuitive interfaces</h3>

            <h1 className='text-orange-500 text-4xl font-bold'>2.</h1>
            <h1 className='text-3xl font-bold ml-6'>UX DESIGN </h1>
            <h3 className='ml-6'>Creating seamless user journeys that meet needs and expectations.</h3>
          </div>

          <div>
            <h1 className='text-orange-500 text-4xl font-bold'>3.</h1>
            <h1 className='text-3xl font-bold ml-6'>PRODUCT DESIGN</h1>
            <h3 className='ml-6'>transforming ideas into functional and aesthetically pleasing products</h3>

            <h1 className='text-orange-500 text-4xl font-bold'>4.</h1>
            <h1 className='text-3xl font-bold ml-6'>BANNER DESIGN </h1>
            <h3 className='ml-6'>Creating eye-catching banners that capture attention</h3>
          </div>

          <div>
              <img src={services} alt="" />
          </div>
        </div>


        <h1 className='font-extrabold text-4xl gradienttext '>MY DESIGN PROCESS:</h1>
        <div className='flex  justify-evenly text-black border-2 m-5 p-2 rounded-2xl border-opacity-30 gap-8 gradientborder max-sm:flex-col'>
        
          <div className='mr-8'>
            <h1 className='text-orange-500 text-4xl font-bold'>1.</h1>
            <h1 className='text-3xl font-bold ml-6'>INTRODUCTION </h1>
            <h3 className='ml-6'>meeting customers</h3>

            <h1 className='text-orange-500 text-4xl font-bold'>2.</h1>
            <h1 className='text-3xl font-bold ml-6'> DESIGN</h1>
            <h3 className='ml-6'>procedure of ui/ux design</h3>
          </div>

          <div className='mr-7'>
            <h1 className='text-orange-500 text-4xl font-bold'>3.</h1>
            <h1 className='text-3xl font-bold ml-6'>REQUIREMENTS </h1>
            <h3 className='ml-6'>gathering all ne necessary requirmnets</h3>

            <h1 className='text-orange-500 text-4xl font-bold'>4.</h1>
            <h1 className='text-3xl font-bold ml-6'>DELIEVERY </h1>
            <h3 className='ml-6'>submitting design to customer</h3>
          </div>

          <div>
              <img className='ml-7 max-md:hidden w-72'  src={services2} alt="" />
          </div>
        </div>
      </div>
      </div>
      
    </section>
    )
}

export default Services
