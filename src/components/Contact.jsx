import React from 'react'
import { FaEnvelope } from 'react-icons/fa'
import { FaPhone } from 'react-icons/fa'
import { FaMapMarker } from 'react-icons/fa'
import { FaFacebook } from 'react-icons/fa'
import { FaWhatsapp } from 'react-icons/fa'
import { FaLinkedinIn } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'

const Contact = () => {
  return (
    <section className=' bg-zinc-700  text-white -mt-10'>
    <div id='Contact' className='min-w-fit h-1/2 '>
      <div className='flex flex-row justify-between'>        
        <hr className='w-1/5 border-orange-400 border-b-2 md:w-2/5 md:border-orange-400 md:border-b-4'></hr>
        <h1 className='text-center text-xl md:text-4xl -mt-5'>Contact Me</h1>           
        <hr className='w-1/5 border-b-2 border-orange-400 md:border-b-4 md:w-2/5 float-right '></hr>
      </div>
        <div className='grid grid-rows-3 grid-cols-1 text-lg text-center mix-blend-screen md:grid md:grid-rows-2 md:grid-cols-8 justify-center mt-10 gap-1 md:gap-4  text-orange-300 md:text-xl'>
          <div className='p-2 hover:bg-orange-500 hover:text-black  md:col-start-3 md:col-end-5 bg-zinc-800 rounded-md shadow-xl
          outline-offset-4 flex flex-row justify-center items-center gap-2 '>
          <a className='flex items-center gap-4' target='_blank' href='mailto:supunoshadha23@gmail.com'><FaEnvelope />Mail Me</a></div>
          <div className='p-2 hover:bg-orange-500 hover:text-black md:col-end-7 md:col-span-2  bg-zinc-800 rounded-md shadow-xl outline-offset-4  items-center flex flex-row justify-center gap-2 col-span-3'>
          <a href='tel:+94710406742' className='flex items-center gap-4' ><FaPhone />(+94) 71-040-6742</a></div>
          <div className='p-2 hover:bg-orange-500 hover:text-black md:col-start-4 md:col-end-6   bg-zinc-800 rounded-md shadow-xl outline-offset-4  items-center flex flex-row justify-center gap-2'><a className='flex items-center gap-4 '>
          <FaMapMarker />Wattala, Sri lanka
          </a></div>
        </div>
        <div className=' flex flex-row justify-between mt-10'>              
        <hr className='w-1/5 border-b-2 border-orange-400 md:border-b-4 md:w-2/5 '></hr>    
        <div className=' flex flex-row gap-3 justify-center z-20 -mt-3 '>
        <a target='_blank' href='https://github.com/SupunOshadha'>
        <FaGithub className='size-5 md:size-8 text-white' />
        </a>
        <a target='_blank' href='https://www.facebook.com/profile.php?id=100010352081055&mibextid=ZbWKwL'>
        <FaFacebook className='size-5 md:size-8 text-white' />
        </a>
        <a target='_blank' href=' https://wa.me/qr/37WLE5PID5WPA1'>
        <FaWhatsapp className='size-5 md:size-8 text-white '/>
        </a>
        <a target='_blank' href='https://www.linkedin.com/in/supunoshadha?'>
        <FaLinkedinIn className='size-5 md:size-8 text-white '/> 
        </a>
    </div> 
        <hr className='w-1/5 border-b-2 border-orange-400 md:border-b-4 md:w-2/5 float-right '></hr>
      </div>
      <section >
      
      <footer className='mt-4'>
        <h5 className='text-sm md:text-xl text-center'>All right reserved @Nexnova_Supun </h5>
      </footer>    
      </section>
    </div> 
</section>
  )
}

export default Contact