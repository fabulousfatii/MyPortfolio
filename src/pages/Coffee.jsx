import React from 'react'
import home from '../assets/coffee1.jpg'
import boarding from '../assets/coffee2.png'
import homescreen from '../assets/coffee3.png'
import finalization from '../assets/coffee4.png'


function Coffee() {
    return (
        <div className='w-full h-full coffee '>
            <img className='' width={4000} src={home} alt="" />
            <div className='p-10'>
                <h1 className='ml-20 text-5xl font-semibold'>On-boarrding</h1>
              <img src={boarding} alt="" />
              <div>
              <h1 className='ml-20 text-6xl font-semibold'>colours used</h1>
              <div className='flex flex-wrap justify-center m-10'>
                <div>
                <div className='w-[300px] h-[300px] bg-[#D97733] rounded-xl m-4'></div>
                <h3 className='text-2xl text-center'>#D97733</h3>
                </div>
                <div>
                <div className='w-[300px] h-[300px] bg-[#E8D1BD] rounded-xl m-4'></div>
                <h3 className='text-2xl text-center'>#E8D1BD</h3>
                </div>
                <div>
                <div className='w-[300px] h-[300px] bg-[#6B3125] rounded-xl m-4'></div>
                <h3 className='text-2xl text-center'>#6B3125</h3>
                </div>
                
                </div>
              </div>
              <h1 className='ml-20 text-5xl font-semibold'>Homescreen to placing order</h1>
              <img src={homescreen} alt="" />
              <h1 className='ml-20 text-5xl font-semibold'>finalization</h1>
              <img src={finalization} alt="" />
            </div>
        </div>
    )
}

export default Coffee
