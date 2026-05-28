import React from 'react'
import Cards from './Cards'
import { FaUserAstronaut, FaCode, FaTerminal } from 'react-icons/fa'

const About = () => {
  return (
    <section className='w-full h-auto bg-zinc-950 text-white pt-24 pb-16 relative overflow-hidden' id='about'>
      
      {/* Premium Ambient Background Light Arrays (Matches Hero Grid Theme) */}
      <div className='absolute top-1/2 right-0 w-80 h-80 bg-orange-500/5 rounded-full blur-[130px] pointer-events-none'></div>
      <div className='absolute bottom-0 left-1/4 w-72 h-72 bg-zinc-800/20 rounded-full blur-[120px] pointer-events-none'></div>

      <div className='max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
        
        {/* Modern Interactive Section Header */}
        <div className='flex items-center gap-3 mb-10 justify-center md:justify-start'>
          <div className='p-2 bg-zinc-900 border border-zinc-800 rounded-lg text-orange-500 shadow-md'>
            <FaUserAstronaut className='size-5' />
          </div>
          <div className='flex flex-col'>
            <span className='text-orange-500 font-semibold text-xs tracking-wider uppercase'>01. Profile</span>
            <h1 className='text-3xl md:text-4xl font-extrabold tracking-tight text-zinc-100'>About Me</h1>
          </div>
        </div>

        {/* Bento-Style Content Card Wrapper */}
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-20'>
          
          {/* Main Biography Block (Occupies 2 columns on large screens) */}
          <div className='lg:col-span-2 bg-zinc-900/40 border border-zinc-900 rounded-3xl p-6 sm:p-8 md:p-10 backdrop-blur-sm shadow-xl flex flex-col justify-between hover:border-zinc-800/80 transition-colors duration-300 relative group'>
            
            <p className='text-zinc-400 text-sm sm:text-base md:text-lg leading-relaxed text-justify font-normal space-y-6'>
              I am an industry-ready Software Engineering graduate from <strong className='text-zinc-200 font-medium'>The Open University of Sri Lanka</strong>. I possess a verified technical foundation in building logic-based web architectures, managing robust relational structures, and designing clean codebases.
              <br /><br />
              Through a rigorous <strong className='text-orange-500 font-semibold'>6-month Software Engineering Internship</strong> within our university's IT Division, I engineered robust backend layers using <strong className='text-zinc-200 font-medium'>Spring Boot</strong> and <strong className='text-zinc-200 font-medium'>Laravel</strong>, handled front-end modules via <strong className='text-zinc-200 font-medium'>React</strong> and <strong className='text-zinc-200 font-medium'>Angular</strong>, and verified system integration benchmarks through comprehensive <strong className='text-orange-500/90 font-medium'>Postman API workflows</strong>.
              <br /><br />
              I thrive on solving low-level algorithmic engineering obstacles—such as compiler logic engines and real-time gesture vector mapping frameworks—and am looking to contribute immediately as an efficient, entry-level Software Engineer or Technical Trainee.
            </p>

            {/* Corner Decorative Accent */}
            <div className='absolute bottom-0 right-0 w-12 h-12 border-b border-r border-zinc-800 rounded-br-3xl pointer-events-none group-hover:border-orange-500/30 transition-colors duration-500'></div>
          </div>

          {/* Sidebar Highlight Box (Occupies 1 column, summarizes your engine focus) */}
          <div className='bg-gradient-to-br from-zinc-900/60 to-zinc-950 border border-zinc-900 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-xl relative overflow-hidden group hover:border-orange-500/10 transition-colors duration-500'>
            <div className='absolute top-0 right-0 w-32 h-32 bg-orange-500/5 rounded-full blur-2xl pointer-events-none'></div>
            
            <div className='space-y-4 relative z-10'>
              <div className='size-10 bg-orange-500/10 border border-orange-500/20 text-orange-400 flex items-center justify-center rounded-xl'>
                <FaCode className='size-5' />
              </div>
              <h3 className='text-xl font-bold text-zinc-100 group-hover:text-orange-500 transition-colors'>Architecture Focus</h3>
              <p className='text-zinc-500 text-sm leading-relaxed text-justify'>
                Focused on optimizing enterprise application pipelines, designing reliable RESTful API pathways, and managing structured query optimizations.
              </p>
            </div>

            <div className='border-t border-zinc-900 pt-4 mt-6 flex items-center gap-3 text-xs text-zinc-500 font-mono'>
              <FaTerminal className='text-orange-500/60 size-3.5' />
              <span>compiled_successfully.exe</span>
            </div>
          </div>

        </div>

        {/* Technical Expertise Header Section Container */}
        <div className='flex flex-col items-center justify-center space-y-2 mb-12'>
          <div className='inline-flex items-center gap-2 bg-zinc-900 border border-zinc-800/80 px-4 py-1 rounded-full'>
            <span className='w-2 h-2 rounded-full bg-orange-500 animate-ping'></span>
            <span className='text-zinc-400 font-medium text-xs tracking-wider uppercase font-mono'>Core Capabilities Stack</span>
          </div>
          <h2 className='text-center text-3xl md:text-4xl font-extrabold tracking-tight text-zinc-100'>Technical Expertise</h2>
        </div> 

        {/* Render Cards Section Safely Below Canvas */}
        <div className='relative z-10'>
          <Cards />
        </div>

      </div>
    </section>
  )
}

export default About