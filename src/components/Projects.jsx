import React from 'react'
import { FaChevronRight } from 'react-icons/fa'
import { FaChevronLeft } from 'react-icons/fa6'
import Beach from '../assets/images/beach.jpg'

const Projects = () => {
  return (
    <section className=' bg-zinc-700  text-white -mt-10'>
        <div id='Portfolio'>
          <h1 className='text-center text-4xl pt-14 mb-10'>Portfolio</h1>
            <div className='m-auto flex flex-row justify-center gap-4 w-full h-screen -mt-20'>
              <div className='content-center'>
              <button className='bg-white w-7 h-7 md:w-20 md:h-20 rounded-full mix-blend-overlay hover:mix-blend-normal '><FaChevronLeft className='m-auto bg-slate-700 size-7 '/>
              </button>
              </div>  
              <div className='content-center w-1/2'>     
              <div className=' h-1/3 md:h-2/3 bg-slate-500 mix-blend-soft-light hover:mix-blend-normal'>
              <a href=''>
              <img src={Beach} className='bg-cover w-full h-full'/>
              </a>   
              </div> 
              </div>  
              <div className='content-center'>
              <button className='bg-white w-7 h-7 md:w-20 md:h-20 rounded-full mix-blend-overlay hover:mix-blend-normal'><FaChevronRight className='m-auto bg-slate-700 md:size-7 '/></button>
              </div>
                          
            </div>

        </div> 
    </section>
  )
}
export default Projects