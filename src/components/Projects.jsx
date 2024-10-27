import React, { useState } from 'react'
import { FaChevronRight } from 'react-icons/fa'
import { FaChevronLeft } from 'react-icons/fa6'
import Beach from '../assets/images/beach.jpg'
import Books from "../assets/images/books.jpg"

const Projects = () => {
  const images = [Beach, Books];
  const[currentImage, setCurrentImage] = useState(0) ;

  const handlePrevClick = () => {
    setCurrentImage(currentImage === 0? images.length-1: currentImage-1)
  }
  const handleNextClick = () => {
    setCurrentImage(currentImage === images.length-1 ? 0 : currentImage+1 )
  }

   return (
    <section className=' bg-zinc-700  text-white -mt-10'>
        <div id='Portfolio'>
          <h1 className='text-center text-4xl pt-14 '>Portfolio</h1>
            <div className='m-auto flex flex-row justify-center gap-4 w-full h-screen -mt-20'>
              <div className='content-center'>
              <button className='bg-white w-7 h-7 md:w-20 md:h-20 rounded-full mix-blend-overlay hover:mix-blend-normal ' onClick={handlePrevClick}><FaChevronLeft className='m-auto bg-slate-700 md:size-7 '/>
              </button>
              </div>  
              <div className='content-center w-2/3 md:w-1/2'>     
              <div id="he" className=' h-1/3 md:h-2/3 bg-slate-500 mix-blend-soft-light hover:mix-blend-normal relative'>
              <a >
              <img src={images[currentImage]} className='bg-cover w-full h-full '/>
              <div className='bg-slate-500 w-full h-1/3 absolute bottom-0 opacity-75'>
              <h3 className='p-2 text-white  top-10 text-2xl md:text-4xl '>Ceylon Travel</h3><p className='p-4 text-xl md:text-2xl'>A web site which is promoting the sri lanka tourism industry. Using html,css,javascript, and vuejs </p>
              </div>            
              </a>   
              </div> 
              </div>  
              <div className='content-center'>
              <button className='bg-white w-7 h-7 md:w-20 md:h-20 rounded-full mix-blend-overlay hover:mix-blend-normal' onClick={handleNextClick}><FaChevronRight className='m-auto bg-slate-700 md:size-7 '/></button>
              </div>
                          
            </div>

        </div> 
    </section>
  )
}
export default Projects