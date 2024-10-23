import { useEffect, useRef, useState } from 'react'
import emailjs from '@emailjs/browser';
import {Link} from 'react-router-dom'

import quote from "./assets/quote.png"
import About from './sections/About'
import Services from './sections/Services'
import project1 from "./assets/project1-h.png"
import project2 from "./assets/project2-h.png"
import project3 from "./assets/project3-h.png"

import Home from './sections/Home'
import name from './assets/name.png'


function App() {
  const [sent,setset]=useState(false)
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_gubw015', 'template_jlb3rjd', form.current, {
        publicKey: 'CTH9UbM7uWzXj-Vd6',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
      setset(true)
  };

  
  

  return (
   <main className='min-w-screen-sm '>
    <nav className='fixed w-[200px] h-full bg-black p-5 max-sm:hidden max-md:hidden'>
      {/* <h3 className='text-xl mt-4 font-["Prata"]'>HAMZA SALEEM</h3> */}
      <img src={name} alt="" />
      <ul className='mt-20 font-medium'>

        <li className='pl-10 p-2 text-lg duration-100 rounded-xl bg-cover hover:bg-[url("https://s3-alpha-sig.figma.com/img/ff2c/4160/67704ec28644fe6578aaa2a627ad3625?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BVRDA3kpEwPk5oy~5XiZX5sofZlECW~5cTq2agrxtsxie9rHkKWmjIPkIlfCuI~5JaZXIg3xwFYs6BEME8UfMU-xUb6Afri7QJj8XtZ77I~mqH-yqCWagD0Qwzxn-J6I0vTFgHRlkD14TJOoVB1KVEzfLkT~WVhDcNf2FbiWGCQGfCiOR5jBVxbsZydES2UnzrpbcFM4bft6iEbvIYsjz6-Yuras1P8xGOEMoATGWC4dGfWR5g37sVu89aFtSXUT9uMXyK5KFcJkzpmjkFyMrXodQKQgW9TYPM28-AZztlSpmAE~dadGJuEo8i~aFgZuRFpIqzx2SCN6B5hugnxMuA__")]'> <a href="#home">HOME</a></li>
        <li className='pl-10 p-2 text-lg duration-100 rounded-xl bg-cover hover:bg-[url("https://s3-alpha-sig.figma.com/img/ff2c/4160/67704ec28644fe6578aaa2a627ad3625?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BVRDA3kpEwPk5oy~5XiZX5sofZlECW~5cTq2agrxtsxie9rHkKWmjIPkIlfCuI~5JaZXIg3xwFYs6BEME8UfMU-xUb6Afri7QJj8XtZ77I~mqH-yqCWagD0Qwzxn-J6I0vTFgHRlkD14TJOoVB1KVEzfLkT~WVhDcNf2FbiWGCQGfCiOR5jBVxbsZydES2UnzrpbcFM4bft6iEbvIYsjz6-Yuras1P8xGOEMoATGWC4dGfWR5g37sVu89aFtSXUT9uMXyK5KFcJkzpmjkFyMrXodQKQgW9TYPM28-AZztlSpmAE~dadGJuEo8i~aFgZuRFpIqzx2SCN6B5hugnxMuA__")]'> <a href="#about">ABOUT</a></li>
        <li className='pl-10 p-2 text-lg duration-100 rounded-xl bg-cover hover:bg-[url("https://s3-alpha-sig.figma.com/img/ff2c/4160/67704ec28644fe6578aaa2a627ad3625?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BVRDA3kpEwPk5oy~5XiZX5sofZlECW~5cTq2agrxtsxie9rHkKWmjIPkIlfCuI~5JaZXIg3xwFYs6BEME8UfMU-xUb6Afri7QJj8XtZ77I~mqH-yqCWagD0Qwzxn-J6I0vTFgHRlkD14TJOoVB1KVEzfLkT~WVhDcNf2FbiWGCQGfCiOR5jBVxbsZydES2UnzrpbcFM4bft6iEbvIYsjz6-Yuras1P8xGOEMoATGWC4dGfWR5g37sVu89aFtSXUT9uMXyK5KFcJkzpmjkFyMrXodQKQgW9TYPM28-AZztlSpmAE~dadGJuEo8i~aFgZuRFpIqzx2SCN6B5hugnxMuA__")]'> <a href="#services">SERVICES</a></li>
        <li className='pl-10 p-2 text-lg  duration-100 rounded-xl bg-cover hover:bg-[url("https://s3-alpha-sig.figma.com/img/ff2c/4160/67704ec28644fe6578aaa2a627ad3625?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BVRDA3kpEwPk5oy~5XiZX5sofZlECW~5cTq2agrxtsxie9rHkKWmjIPkIlfCuI~5JaZXIg3xwFYs6BEME8UfMU-xUb6Afri7QJj8XtZ77I~mqH-yqCWagD0Qwzxn-J6I0vTFgHRlkD14TJOoVB1KVEzfLkT~WVhDcNf2FbiWGCQGfCiOR5jBVxbsZydES2UnzrpbcFM4bft6iEbvIYsjz6-Yuras1P8xGOEMoATGWC4dGfWR5g37sVu89aFtSXUT9uMXyK5KFcJkzpmjkFyMrXodQKQgW9TYPM28-AZztlSpmAE~dadGJuEo8i~aFgZuRFpIqzx2SCN6B5hugnxMuA__")]'> <a href="#projects">PROJECT</a></li>
        <li className='pl-10 p-2 text-lg duration-100 rounded-xl bg-cover hover:bg-[url("https://s3-alpha-sig.figma.com/img/ff2c/4160/67704ec28644fe6578aaa2a627ad3625?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BVRDA3kpEwPk5oy~5XiZX5sofZlECW~5cTq2agrxtsxie9rHkKWmjIPkIlfCuI~5JaZXIg3xwFYs6BEME8UfMU-xUb6Afri7QJj8XtZ77I~mqH-yqCWagD0Qwzxn-J6I0vTFgHRlkD14TJOoVB1KVEzfLkT~WVhDcNf2FbiWGCQGfCiOR5jBVxbsZydES2UnzrpbcFM4bft6iEbvIYsjz6-Yuras1P8xGOEMoATGWC4dGfWR5g37sVu89aFtSXUT9uMXyK5KFcJkzpmjkFyMrXodQKQgW9TYPM28-AZztlSpmAE~dadGJuEo8i~aFgZuRFpIqzx2SCN6B5hugnxMuA__")]'> <a href="#contact">CONTACT</a></li>
      </ul>
     </nav>

   <div>
   <Home/>
    
    <About/>
 
     <Services/>
 
     <section id='projects' className='w-full h-full bg-white '>
       <div className='flex justify-end'>
         <div className='w-[85%]  h-full  flex flex-col justify-center items-center'>
           <h1 className='text-5xl font-bold gradienttext text-white m-7'> MY PROJECTS</h1>
           <div className='flex gap-7 flex-wrap '>
                <Link to={"/eatnow"}>
                <div className='w-60 h-80 bg-slate-400 group rounded-3xl project1'>
                <img className='opacity-0 duration-500 group-hover:opacity-100' src={project1} alt="" />
                </div>
                </Link>
                <Link to={"/cheeze"}>
                <div className='w-60 h-80 bg-slate-400 group rounded-3xl project2'>
                <img className='opacity-0 duration-500 group-hover:opacity-100' src={project2} alt="" />
                </div>
                </Link>
                <Link to={"/coffee"}>
                <div className='w-60 h-80 bg-slate-400 group rounded-3xl project3'>
                <img className='opacity-0 duration-500 group-hover:opacity-100' src={project3} alt="" />
                </div>
                </Link>
 
               
           </div>
           <h1 className='text-5xl font-bold gradienttext text-white m-7 '> MANY MORE TO COME</h1>
 
 
         </div>
       </div>
       <div className='flex justify-end '>
       <div className='lg:w-[85%] md:w-[85%] h-screen xl:w-[96%] gradientbackground flex gap-7 md:gap-3 justify-center items-center p-10 max-md:w-full max-md:flex-col'>
         <p className='text-6xl p-10 text-center quote ml-16  '>
         ‘‘ design is not just what it works like and feels like. design is how it works ’’
         </p>
         <img className='p-16' src={quote} width={450} height={300} alt="" />
       </div>
       </div>
     </section>
    
     <section id='contact' className='w-full h-full bg-white  p-4 flex justify-end'>
       <div className='w-[85%] h-full max-md:w-full max-md:flex-col '>
       <h1 className='text-5xl font-bold gradienttext text-white m-7'>REACH ME OUT</h1>
       <div className='flex justify-center items-center gap-7 text-black max-sm:flex-col'>
         <div>
           <h1 className='text-3xl font-bold gradienttext text-white my-7 '> contact + Whatsapp</h1>
           <h3 className='text-lg m-2'>0325-0336511</h3>
 
           <h1 className='text-3xl font-bold gradienttext text-white my-7 cursor-pointer'>Email</h1>
           <a className='text-lg m-2'>@hamzsaleemamazon@gmail.com</a>
           <a href=""></a>
 
           <h1 className='text-3xl font-bold gradienttext text-white my-7 '>Address</h1>
           <h3 className='text-lg m-2'>Eden city,Lahore,Pakistan</h3>
         </div>
         <div className='w-1/2 h-1/3 gradientbackground p-8 py-20 max-sm:w-full '>
           <h1 className='text-2xl text-white font-semibold mb-7'>Any Project?</h1>
         <form ref={form} onSubmit={sendEmail}>
         <input name='user_name' className='w-50 text-white bg-slate-500 text-lg bg-opacity-0 border-b-2 placeholder:text-white p-2 m-2' type="text" placeholder=' Name ' />
          <input name='user_email' className='w-50 text-white bg-slate-500 text-lg bg-opacity-0 border-b-2 placeholder:text-white p-2 m-2' type="email" placeholder=' Email' />
          <textarea name='message' className='w-full text-white bg-slate-500 text-lg bg-opacity-0 border-b-2 placeholder:text-white p-2 m-2 mt-14' type="text" placeholder=' Message' />
          <input className={`${sent? "bg-orange-700":"bg-purple-600"} px-4 py-1 m-2 text-white rounded-lg cursor-pointer hover:bg-purple-900 `} type="submit" value={sent?"Sent":"Send"} />
         </form>
          
         </div>
       </div>
 
       </div>
     </section>
   </div>
   </main>
  )
}

export default App
