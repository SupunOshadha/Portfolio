import React from 'react'
import skillsData from '../skills.json'

const Cards = () => {
  return (
    <div className='max-w-7xl mx-auto py-4 relative z-10'>
      {/* Responsive grid */}
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 sm:gap-6'>
        {skillsData.skills.map((skill) => (
          <div 
            key={skill.name} 
            className='bg-zinc-900/40 border border-zinc-900/80 rounded-2xl p-5 sm:p-6 flex flex-col items-center justify-center gap-4 text-center backdrop-blur-sm hover:border-orange-500/30 hover:bg-zinc-900/80 hover:-translate-y-1 hover:shadow-orange-500/5 transition-all duration-300 group shadow-xl relative'
          >
            {/* The Inner Icon Frame Box wrapper */}
            <div className='w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center bg-zinc-950/60 rounded-xl p-3 border border-zinc-800 group-hover:border-orange-500/20 group-hover:scale-105 transition-all duration-300'>
              <img
                src={skill.icon}
                alt={`${skill.name} icon`}
                className='max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500'
                loading="lazy"
              />
            </div>
            
            {/* Skill Name Text Element */}
            <span className='text-xs sm:text-sm md:text-base font-medium text-zinc-400 group-hover:text-zinc-100 transition-colors tracking-wide'>
              {skill.name}
            </span>

            {/* Subtle bottom line accent on hover */}
            <div className='absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-gradient-to-r from-transparent via-orange-500/40 to-transparent group-hover:w-1/2 transition-all duration-500 rounded-full'></div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Cards