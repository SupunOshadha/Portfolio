import React from 'react'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaWhatsapp, FaLinkedinIn, FaGithub } from 'react-icons/fa'

const Contact = () => {
  const currentYear = new Date().getFullYear();

  return (
    <section className='bg-zinc-950 text-white pt-24 pb-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden' id='Contact'>
      
      {/* Subtle bottom ambient light background bloom */}
      <div className='absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-orange-500/[0.03] rounded-full blur-[120px] pointer-events-none'></div>

      <div className='max-w-7xl mx-auto relative z-10'>
        
        {/* Modern Section Header Accent Layout */}
        <div className='flex items-center justify-between gap-6 mb-16'>        
          <div className='h-[1px] bg-gradient-to-r from-transparent via-zinc-800 to-orange-500/30 flex-1'></div>
          
          <div className='flex flex-col items-center space-y-2 px-4'>
            <div className='inline-flex items-center gap-2 bg-zinc-900 border border-zinc-800/80 px-4 py-1 rounded-full'>
              <span className='text-zinc-400 font-medium text-xs tracking-wider uppercase font-mono'>Get In Touch</span>
            </div>
            <h2 className='text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-100 text-center'>Contact Me</h2>
          </div>

          <div className='h-[1px] bg-gradient-to-l from-transparent via-zinc-800 to-orange-500/30 flex-1'></div>
        </div>

        {/* Info Grid: Converts from 1-column layout on mobile to elegant 3-column rows on desktop */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-5 max-w-4xl mx-auto mb-20'>
          
          <a href='mailto:supunoshadha23@gmail.com' className='bg-zinc-900/40 border border-zinc-900/80 hover:border-orange-500/30 p-5 rounded-2xl flex items-center gap-4 hover:bg-zinc-900/70 backdrop-blur-sm transition-all duration-300 shadow-xl group relative overflow-hidden'>
            <div className='p-3 bg-zinc-950 border border-zinc-800 rounded-xl text-orange-400 group-hover:text-orange-500 group-hover:border-orange-500/10 transition-all shadow-inner'>
              <FaEnvelope className='size-5' />
            </div>
            <div className='text-left'>
              <span className='block text-xs font-semibold text-zinc-500 uppercase tracking-wider font-mono'>Email Me</span>
              <span className='text-sm sm:text-base text-zinc-300 font-medium break-all group-hover:text-zinc-100 transition-colors'>supunoshadha23@gmail.com</span>
            </div>
          </a>

          <a href='tel:+94710406742' className='bg-zinc-900/40 border border-zinc-900/80 hover:border-orange-500/30 p-5 rounded-2xl flex items-center gap-4 hover:bg-zinc-900/70 backdrop-blur-sm transition-all duration-300 shadow-xl group relative overflow-hidden'>
            <div className='p-3 bg-zinc-950 border border-zinc-800 rounded-xl text-orange-400 group-hover:text-orange-500 group-hover:border-orange-500/10 transition-all shadow-inner'>
              <FaPhone className='size-5' />
            </div>
            <div className='text-left'>
              <span className='block text-xs font-semibold text-zinc-500 uppercase tracking-wider font-mono'>Call Me</span>
              <span className='text-sm sm:text-base text-zinc-300 font-medium group-hover:text-zinc-100 transition-colors'>(+94) 71-040-6742</span>
            </div>
          </a>

          <div className='bg-zinc-900/40 border border-zinc-900/80 p-5 rounded-2xl flex items-center gap-4 backdrop-blur-sm shadow-xl relative overflow-hidden'>
            <div className='p-3 bg-zinc-950 border border-zinc-800 rounded-xl text-orange-400 shadow-inner'>
              <FaMapMarkerAlt className='size-5' />
            </div>
            <div className='text-left'>
              <span className='block text-xs font-semibold text-zinc-500 uppercase tracking-wider font-mono'>Location</span>
              <span className='text-sm sm:text-base text-zinc-300 font-medium'>Wattala, Sri Lanka</span>
            </div>
          </div>

        </div>

        {/* Footer Link Elements Block */}
        <div className='flex flex-col sm:flex-row items-center justify-between border-t border-zinc-900/80 pt-8 gap-6 max-w-6xl mx-auto'>
          <p className='text-zinc-500 text-xs sm:text-sm order-2 sm:order-1 text-center sm:text-left font-normal'>
            © {currentYear} Supun Oshadha. All rights reserved.
          </p>
          
          <div className='flex items-center gap-5 order-1 sm:order-2'>
            <a target='_blank' rel='noopener noreferrer' href='https://github.com/SupunOshadha' aria-label="GitHub" className='text-zinc-500 hover:text-orange-500 transition-all transform hover:-translate-y-0.5 duration-200'>
              <FaGithub className='size-5 md:size-6' />
            </a>
            <a target='_blank' rel='noopener noreferrer' href='https://www.linkedin.com/in/supunoshadha' aria-label="LinkedIn" className='text-zinc-500 hover:text-orange-500 transition-all transform hover:-translate-y-0.5 duration-200'>
              <FaLinkedinIn className='size-5 md:size-6' />
            </a>
            <a target='_blank' rel='noopener noreferrer' href='https://wa.me/qr/37WLE5PID5WPA1' aria-label="WhatsApp" className='text-zinc-500 hover:text-orange-500 transition-all transform hover:-translate-y-0.5 duration-200'>
              <FaWhatsapp className='size-5 md:size-6' />
            </a>
          </div>
        </div>

      </div> 
    </section>
  )
}

export default Contact