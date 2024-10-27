import React from 'react'
import { FaGreaterThan } from 'react-icons/fa'

const Projects = () => {
  return (
    <section className=' bg-zinc-700  text-white -mt-10 '>
        <div id='Portfolio'>
          <h1 className='text-center text-4xl pt-14 mb-10'>Portfolio</h1>
            <div className='flex flex-row justify-center gap-4 min-h-svh'>
              <div className='content-center'>
              <button className='bg-white w-20 h-20 rounded-full mix-blend-overlay hover:mix-blend-normal'></button>
              </div>         
              <div className='min-w-96  w-1/2  bg-slate-500'></div> 
              <div className='content-center'>
              <button className='bg-white w-20 h-20 rounded-full mix-blend-overlay hover:mix-blend-normal'><FaGreaterThan className='m-auto bg-black size-7'/></button>
              </div>
                          
            </div>

        </div> 
    </section>
  )
}
export default Projects