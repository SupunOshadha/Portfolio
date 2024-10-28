import React from 'react'
import Person from '../assets/images/user.png'
import { FaFacebook } from 'react-icons/fa'
import { FaWhatsapp } from 'react-icons/fa'
import { FaLinkedinIn } from 'react-icons/fa'
import { FaEllipsisVertical } from 'react-icons/fa6'
import { FaGithub } from 'react-icons/fa'
const Hero = () => {
  return (
    <section className='w-full h-auto bg-zinc-800 p-4 box-border drop-shadow-2xl  siz-48 md:size-full flow-root'>  
    <div className='flex  md:flex-row basis-3 justify-evenly items-center flex-col gap-10 p-4 relative mt-20'>
    <div className='self-end absolute md:relative z-20'>
          <FaEllipsisVertical className='size-8 text-orange-500 '/>
          <FaEllipsisVertical className='size-8 text-orange-500 '/>
          <FaEllipsisVertical className='size-8 text-orange-500 mb-6'/>
          <a target='_blank' href='https://github.com/SupunOshadha'>
        <FaGithub className='size-6 md:size-8 text-white' />
        </a>
        <a target='_blank' href='https://www.facebook.com/profile.php?id=100010352081055&mibextid=ZbWKwL'>
        <FaFacebook className='size-6 md:size-8 text-white mt-2' />
        </a>
        <a target='_blank' href=' https://wa.me/qr/37WLE5PID5WPA1'>
        <FaWhatsapp className='size-6 md:size-8 text-white mt-2'/>
        </a>
        <a target='_blank' href='https://www.linkedin.com/in/supunoshadha?'>
        <FaLinkedinIn className='size-6 md:size-8 text-white mt-2'/> 
        </a>
    </div>
    <div className='z-20'>  
      <h1 className='text-white text-2xl md:text-4xl'>I'm <span className='text-orange-500 text-4xl md:text-6xl'>Supun Oshadha</span></h1>
      <h1 className='text-white text-2xl md:text-4xl mt-2'>Full stack developer</h1>
      <h1 className=' text-2xl text-orange-500 md:text-4xl mt-2'><span className='text-xl md:text-2xl text-white'>Founder of</span> NexNova</h1>
      <button onClick={()=> (href="#Contact")} className='text-orange-500 border-2 rounded-lg border-orange-500 p-2 tex-lg md:text-xl mt-8'>Contact Me</button>
      </div>
      <div className='relative '>
      <img src={Person} className='grayscale  max-h-96 rounded w-full min-h-96 min-w-72 md:max-h-screen z-10 opacity-60  mix-blend-lighten  hover:filter-none hover:animate-bounce
      '/> 
      </div>
      </div>
    </section>
  )
}

export default Hero


// grayscale  max-h-96 rounded w-full min-h-96 min-w-72 md:max-h-screen z-10 opacity-60  mix-blend-lighten  hover:filter-none hover:animate-bounce