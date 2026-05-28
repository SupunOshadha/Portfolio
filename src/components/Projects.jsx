import React from 'react'
import { FaGithub, FaRegFolderOpen } from 'react-icons/fa'

const Projects = () => {
  const projectData = [
    {
      title: "SILENTTALK: Sinhala Sign Language Engine",
      description: "Final-year research system published in IEEE Xplore. Engineered deep-learning preprocessing pipelines and NLP translation components to transform sign gesture tracking vectors into grammatically correct sentences.",
      stack: ["Python", "MediaPipe", "OpenCV", "Transformers", "NLP"],
      repo: "https://github.com/SupunOshadha"
    },
    {
      title: "Low-Level Compiler Architecture Engine",
      description: "A functional compiler framework built for academic module verification. Parses custom code instructions to generate optimized Three Address Code (TAC), complete with error logs and register handling schemas.",
      stack: ["C", "Flex", "GCC", "System Logic"],
      repo: "https://github.com/SupunOshadha"
    },
    {
      title: "Quick Fit Memory Allocation Simulator",
      description: "A Java-based dynamic system dashboard simulating real-time block allocation rules. Developed to measure performance, minimize fragmentation overhead, and track optimization latency profiles.",
      stack: ["Java", "Algorithms", "Data Structures"],
      repo: "https://github.com/SupunOshadha"
    }
  ];

  return (
    <section className='bg-zinc-950 text-white py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden' id='Portfolio'>
      
      {/* Subtle Background Glow Accent matching your theme */}
      <div className='absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-orange-500/[0.02] rounded-full blur-[140px] pointer-events-none'></div>

      <div className='max-w-7xl mx-auto relative z-10'>
        
        {/* Header Block Section */}
        <div className='text-center space-y-3 mb-16'>
          <div className='inline-flex items-center gap-2 bg-zinc-900 border border-zinc-800/80 px-4 py-1 rounded-full'>
            <span className='w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse'></span>
            <span className='text-zinc-400 font-medium text-xs tracking-wider uppercase font-mono'>Showcase</span>
          </div>
          <h2 className='text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-100'>Technical Portfolio</h2>
          <p className='text-zinc-500 max-w-xl mx-auto text-sm sm:text-base font-normal'>
            Production workflows, academic research frameworks, and low-level system simulations.
          </p>
        </div>
        
        {/* Premium Grid Canvas Layout */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8'>
          {projectData.map((project, index) => (
            <div 
              key={index} 
              className='bg-zinc-900/40 border border-zinc-900/80 rounded-2xl p-6 sm:p-7 flex flex-col justify-between hover:border-orange-500/30 hover:bg-zinc-900/70 hover:-translate-y-1.5 transition-all duration-300 shadow-xl group relative overflow-hidden backdrop-blur-sm'
            >
              <div>
                {/* Upper Action Bar Meta Layout */}
                <div className='flex items-center justify-between gap-4 mb-5'>
                  {/* Modern Engineering Project Icon Badge */}
                  <div className='p-2.5 bg-zinc-950/60 rounded-xl border border-zinc-800 text-orange-500/80 group-hover:text-orange-500 group-hover:border-orange-500/20 transition-all duration-300 shadow-inner'>
                    <FaRegFolderOpen className='size-5' />
                  </div>
                  
                  <a 
                    target='_blank' 
                    rel='noopener noreferrer' 
                    href={project.repo} 
                    className='text-zinc-500 hover:text-zinc-100 p-2.5 bg-zinc-950/40 rounded-xl border border-zinc-900 hover:border-zinc-800 transition-all shrink-0 group/icon hover:scale-105 shadow-md'
                    title="View Source Code"
                  >
                    <FaGithub className='size-5 group-hover/icon:text-orange-500 transition-colors' />
                  </a>
                </div>
                
                {/* Title Elements */}
                <h3 className='text-xl font-bold text-zinc-200 group-hover:text-zinc-100 transition-colors mb-3 tracking-tight'>
                  {project.title}
                </h3>
                
                {/* Preserved Project Descriptions Exactly */}
                <p className='text-zinc-400 text-sm sm:text-base leading-relaxed mb-6 text-justify font-normal'>
                  {project.description}
                </p>
              </div>

              {/* Lower Stack Badges Area */}
              <div className='flex flex-wrap gap-1.5 pt-4 border-t border-zinc-900/80'>
                {project.stack.map((tech, idx) => (
                  <span 
                    key={idx} 
                    className='bg-zinc-950/60 text-orange-400/90 border border-zinc-800 px-2.5 py-1 rounded-md text-xs font-medium tracking-wide font-mono'
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Subtle top horizontal ambient highlight bar on hover */}
              <div className='absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-orange-500/0 to-transparent group-hover:via-orange-500/20 transition-all duration-500'></div>
            </div>
          ))}
        </div>
      </div> 
    </section>
  )
}

export default Projects