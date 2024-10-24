import React from 'react'
import Person from '../assets/images/user.png'
import { FaFacebook } from 'react-icons/fa'
import { FaWhatsapp } from 'react-icons/fa'
import { FaLinkedinIn } from 'react-icons/fa'
import { FaEllipsisVertical } from 'react-icons/fa6'
const Hero = () => {
  return (
    <section className='w-full h-auto bg-zinc-800 p-4 box-border drop-shadow-2xl  siz-48 md:size-full flow-root'>  
    <div className='flex md:flex-row basis-3 justify-evenly items-center flex-col gap-10 p-4 relative mt-20'>
    <div className='self-end absolute md:relative'>
          <FaEllipsisVertical className='size-8 text-orange-500 '/>
          <FaEllipsisVertical className='size-8 text-orange-500 '/>
          <FaEllipsisVertical className='size-8 text-orange-500 mb-6'/>
          <FaFacebook className='size-8 text-white' href='https://google.com'  />
          <FaWhatsapp className='size-8 text-white mt-2'/>
          <FaLinkedinIn className='size-8 text-white mt-2'/> 
    </div>
    <div>  
      <h1 className='text-white text-4xl'>I'm <span className='text-orange-500 text-6xl'>Supun Oshadha</span></h1>
      <h1 className='text-white text-4xl mt-2'>Full stack developer</h1>
      <h1 className='text-white text-4xl mt-2'><span className='text-2xl'>founder of</span> NexNova</h1>
      <button className='text-orange-500 border-2 rounded-lg border-orange-500 p-2 text-xl mt-8'>Contact Me</button>
      </div>
      <div className=''>
      <img src={Person} className='bg-gradient-to-r from-zinc-800 to-orange-600  h-1/5 max-h-full md:max-h-screen'/> 
      </div>
      </div>
    </section>
  )
}


export default Hero