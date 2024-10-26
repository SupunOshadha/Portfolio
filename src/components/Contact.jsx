import React from 'react'
import { FaEnvelope } from 'react-icons/fa'
import { FaPhone } from 'react-icons/fa'
import { FaMapMarker } from 'react-icons/fa'
import { FaFacebook } from 'react-icons/fa'
import { FaWhatsapp } from 'react-icons/fa'
import { FaLinkedinIn } from 'react-icons/fa'
import { FaEllipsisVertical } from 'react-icons/fa6'
import { FaGithub } from 'react-icons/fa'

const Contact = () => {
  return (
    <section className=' bg-zinc-700  text-white -mt-10'>
    <div id='Contact' className='min-w-fit h-1/2'>
    
      <div className=' '>        
        <h1 className='text-center text-4xl pt-14 '>Contact Me</h1>       
        <hr className='border-orange-400 border-b-4 w-2/5 '></hr>     
        <hr className='border-orange-400 border-b-4 w-2/5 float-right '></hr>
      </div>
        <div className='text-center mix-blend-screen grid grid-rows-2 grid-cols-8 justify-center mt-10 gap-4  text-orange-300   text-xl'>
          <div className='hover:bg-orange-500 hover:text-black col-start-3 col-end-5 bg-zinc-800 rounded-md shadow-xl
          outline-offset-4 flex flex-row justify-center items-center gap-2 '>
          <a className='flex items-center gap-2' target='_blank' href=''><FaEnvelope />supunoshadha23@gmail.com</a></div>
          <div className=' hover:bg-orange-500 hover:text-black col-end-7 col-span-2  bg-zinc-800 rounded-md shadow-xl outline-offset-4  items-center flex flex-row justify-center gap-2 '>
          <a className='flex items-center gap-2' ><FaPhone />(+94) 071-040-6742</a></div>
          <div className='hover:bg-orange-500 hover:text-black col-start-4 col-end-6   bg-zinc-800 rounded-md shadow-xl outline-offset-4  items-center flex flex-row justify-center gap-2'><a className='flex items-center gap-2'>
          <FaMapMarker />Wattala,Sri lanka
          </a></div>
        </div>
        <div className=' '>        
        <h1 className='text-center text-4xl pt-14 '></h1>       
        <hr className='border-orange-400 border-b-4 w-2/5 '></hr>     
        <hr className='border-orange-400 border-b-4 w-2/5 float-right '></hr>
      </div>
      <section className='bg-zinc-800'>
      <div className=' flex flex-row gap-3 justify-center z-20 mt-2'>
        <a target='_blank' href='https://github.com/SupunOshadha'>
        <FaGithub className='mt-2 size-8 text-white' />
        </a>
        <a target='_blank' href='https://www.facebook.com/profile.php?id=100010352081055&mibextid=ZbWKwL'>
        <FaFacebook className='size-8 text-white mt-2' />
        </a>
        <a target='_blank' href=' https://wa.me/qr/37WLE5PID5WPA1'>
        <FaWhatsapp className='size-8 text-white mt-2'/>
        </a>
        <a target='_blank' href='https://www.linkedin.com/in/supunoshadha?'>
        <FaLinkedinIn className='size-8 text-white mt-2'/> 
        </a>
    </div>
      <footer className='mt-4'>
        <h5 className='text-xl text-center'>All right reserved @Nexnova_Supun </h5>
      </footer>    
      </section>
    </div> 
</section>
  )
}

export default Contact