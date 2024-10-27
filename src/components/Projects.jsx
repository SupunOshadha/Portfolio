import React from 'react'
import { FaGreaterThan } from 'react-icons/fa'

const Projects = () => {
  return (
    <section className=' bg-zinc-700  text-white -mt-10'>
        <div id='Portfolio'>
          <h1 className='text-center text-4xl pt-14 mb-10'>Portfolio</h1>
            <div className='m-auto flex flex-row justify-center gap-4 w-full h-screen -mt-20'>
              <div className='content-center'>
              <button className='bg-white w-7 h-7 md:w-20 md:h-20 rounded-full mix-blend-overlay hover:mix-blend-normal '></button>
              </div>  
              <div className='content-center w-1/2'>     
              <div className=' h-2/3 bg-slate-500 '></div> 
              </div>  
              <div className='content-center'>
              <button className='bg-white w-7 h-7 md:w-20 md:h-20 rounded-full mix-blend-overlay hover:mix-blend-normal'><FaGreaterThan className='m-auto bg-black size-7'/></button>
              </div>
                          
            </div>

        </div> 
    </section>
  )
}
export default Projects