import React from 'react' 
import Person from '../assets/images/user.png'
import { FaWhatsapp, FaLinkedinIn, FaGithub, FaAward, FaRegFilePdf } from 'react-icons/fa'
import { FaEllipsisVertical } from 'react-icons/fa6'
import { HiOutlineDocumentCheck } from 'react-icons/hi2'

const Hero = () => {
  return (
    <section className='w-full min-h-screen bg-zinc-950 text-white flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 box-border relative overflow-hidden selection:bg-orange-500 selection:text-white' id='Home'>  
      
      {/* Premium Ambient Background Lights */}
      <div className='absolute top-1/4 left-1/4 w-72 h-72 bg-orange-500/10 rounded-full blur-[120px] animate-pulse pointer-events-none'></div>
      <div className='absolute bottom-1/3 right-1/4 w-96 h-96 bg-zinc-800/40 rounded-full blur-[150px] pointer-events-none'></div>

      <div className='max-w-7xl w-full mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-12 md:gap-8 relative z-10'>
        
        {/* Social Navigation Column */}
        <div className='flex flex-row md:flex-col items-center gap-5 w-full md:w-auto justify-center md:justify-start border-t md:border-t-0 border-zinc-900 pt-6 md:pt-0'>
          <div className='hidden md:flex flex-col items-center text-orange-500/30 select-none'>
            <FaEllipsisVertical className='size-5 -mb-2' />
            <FaEllipsisVertical className='size-5 -mb-2' />
            <FaEllipsisVertical className='size-5 mb-3' />
          </div>
          
          <a target='_blank' rel='noopener noreferrer' href='https://github.com/SupunOshadha' aria-label="GitHub Profile" className='p-3.5 bg-zinc-900 border border-zinc-800 rounded-xl hover:border-orange-500/40 hover:text-orange-500 hover:-translate-y-1 transition-all duration-300 shadow-xl group'>
            <FaGithub className='size-5 text-zinc-400 group-hover:text-orange-500 transition-colors' />
          </a>
          <a target='_blank' rel='noopener noreferrer' href='https://www.linkedin.com/in/supunoshadha' aria-label="LinkedIn Profile" className='p-3.5 bg-zinc-900 border border-zinc-800 rounded-xl hover:border-orange-500/40 hover:text-orange-500 hover:-translate-y-1 transition-all duration-300 shadow-xl group'>
            <FaLinkedinIn className='size-5 text-zinc-400 group-hover:text-orange-500 transition-colors'/> 
          </a>
          <a target='_blank' rel='noopener noreferrer' href='https://wa.me/qr/37WLE5PID5WPA1' aria-label="WhatsApp Contact" className='p-3.5 bg-zinc-900 border border-zinc-800 rounded-xl hover:border-orange-500/40 hover:text-orange-500 hover:-translate-y-1 transition-all duration-300 shadow-xl group'>
            <FaWhatsapp className='size-5 text-zinc-400 group-hover:text-orange-500 transition-colors'/>
          </a>
        </div>

        {/* Text Content Block */}
        <div className='flex-1 text-center md:text-left space-y-5 max-w-2xl'>  
          <div className='inline-flex items-center gap-2 bg-gradient-to-r from-orange-500/10 to-transparent border border-orange-500/20 px-4 py-1.5 rounded-full shadow-inner'>
            <FaAward className='text-orange-500 size-4 animate-bounce' />
            <span className='text-orange-400 font-medium tracking-wide text-xs uppercase'>Industry Ready</span>
          </div>
          
          <h1 className='text-zinc-100 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-none'>
            {"I'm"} <span className='bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent block sm:inline'>Supun Oshadha</span>
          </h1>
          
          <h2 className='text-zinc-300 text-xl sm:text-2xl font-semibold tracking-wide'>
            Software Engineering Graduate (Infrastructure & Operations)
          </h2>
          
          <p className='text-zinc-400 text-sm sm:text-base md:text-lg leading-relaxed max-w-xl mx-auto md:mx-0 text-justify md:text-left font-normal'>
            Expanding technical capabilities into Enterprise Networking and Systems Administration. Backed by hands-on university internship experience in technical support, baseline IT operations, and comprehensive API testing workflows.
          </p>
          
          {/* Action CTAs */}
          <div className='flex flex-col sm:flex-row justify-center md:justify-start gap-4 pt-4'>
            <a href='#Contact' className='bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white font-medium px-8 py-3.5 rounded-xl shadow-lg shadow-orange-500/10 hover:shadow-orange-500/20 transform hover:-translate-y-0.5 transition-all duration-200 text-center text-sm md:text-base whitespace-nowrap'>
              Contact Me
            </a>

            {/* RESUME DOWNLOAD BUTTON */}
            <a 
              target='_blank' 
              rel='noopener noreferrer' 
              href='/K.D.S_Oshadha_Resume.pdf' 
              download="K.D.S_Oshadha_Resume.pdf"
              className='flex items-center justify-center gap-2 text-zinc-100 bg-zinc-900 border border-zinc-800 font-medium rounded-xl px-7 py-3.5 hover:text-white hover:border-orange-500/40 hover:bg-zinc-900/40 transform hover:-translate-y-0.5 transition-all duration-200 text-center text-sm md:text-base group shadow-xl'
            >
              <FaRegFilePdf className='size-4 text-orange-500 group-hover:scale-110 transition-transform' />
              Download CV
            </a>

            {/* OUSL INTERNSHIP VERIFY LINK BUTTON */}
            <a 
              target='_blank' 
              rel='noopener noreferrer' 
              href='https://drive.google.com/file/d/1sbAhV-o4UDpDwM8anfFYM2QXeKE07d6N/view' 
              className='flex items-center justify-center gap-2 text-zinc-400 bg-transparent border border-zinc-900/60 font-medium rounded-xl px-5 py-3.5 hover:text-orange-400 hover:border-zinc-800 transform hover:-translate-y-0.5 transition-all duration-200 text-center text-xs md:text-sm group'
            >
              <HiOutlineDocumentCheck className='size-4 text-zinc-500 group-hover:text-orange-500 transition-colors' />
              Verify Internship
            </a>
          </div>
        </div>

        {/* Profile Image Container */}
        <div className='w-56 sm:w-64 md:w-80 lg:w-96 flex justify-center items-center relative group'>
          <div className='absolute inset-0 bg-gradient-to-tr from-orange-500/30 to-amber-500/10 blur-2xl rounded-full group-hover:from-orange-500/40 transition-all duration-500 pointer-events-none'></div>
          
          <div className='relative border border-zinc-800 p-3 bg-zinc-900/60 rounded-3xl backdrop-blur-sm shadow-2xl group-hover:border-orange-500/20 transition-colors duration-500 overflow-hidden'>
            
            <img 
              src={Person} 
              className='relative z-10 w-full h-auto object-cover opacity-85 rounded-2xl group-hover:opacity-100 transition-all duration-700 -scale-x-100 mix-blend-screen filter contrast-125 brightness-95' 
              alt="Supun Oshadha"
            /> 
            
            {/* Edge Shadow Overlay */}
            <div className='absolute inset-0 z-20 rounded-2xl bg-gradient-to-t from-zinc-950/40 via-transparent to-transparent pointer-events-none'></div>

            {/* Corner Tech Trims */}
            <div className='absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-orange-500/40 rounded-tr-2xl group-hover:border-orange-500 pointer-events-none transition-colors'></div>
            <div className='absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-orange-500/40 rounded-bl-2xl group-hover:border-orange-500 pointer-events-none transition-colors'></div>
          </div>
        </div>

      </div> 
    </section>
  )
}

export default Hero