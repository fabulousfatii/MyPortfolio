import React from 'react'
import cheeze from "../assets/cheeze.png"

function Cheeze() {
    return (
        <div className='w-full bg-black p-10 sm:min-w-[40rem] md:min-w-[48px] flex justify-center text-white'>
       
              <div   className="w-[80vw]   rounded-lg flex-col  backdrop-filter backdrop-blur-lg bg-opacity-35 p-4 my-14 justify-between sm:flex-none lg:flex sm:h-screen'">
                
               <img
              src={cheeze}
              alt="Laptop"
              className="h-[350px] w-full rounded-md object-cover p-4"
            />
           
            <h1 className="mx-4  font-semibold  text-3xl  ">Fast food Desktop website</h1>
            <h3 className='text-2xl  mt-4 ml-7 '>Link</h3>
            <a className='text-yellow-400 p-2  mx-4  ' href="https://www.figma.com/design/fqN6u7CVS09PLeu0IzZjUg/Untitled?node-id=179-778&node-type=frame&t=VsMeIE2TxSPlRYk0-0"> https://www.figma.com/design/fqN6u7CVS09PLeu0IzZjUg/Untitled?node-id=179-778&node-type=frame&t=VsMeIE2TxSPlRYk0-0</a>
            <h3 className='text-2xl  mt-4 ml-7 '>Description:</h3>
              <p className="mt-1 mx-4 text-lg px-3 mb-4 ">
                This is a website named cheese in based on desktop design. Colour theme is yellow and orange. Its design is responsive with many animantions included. 
              </p>
              
             </div>
          

      </div>
    )
}

export default Cheeze
