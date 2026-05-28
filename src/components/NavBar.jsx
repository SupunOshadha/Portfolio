import React from 'react'

const NavBar = () => {
  return (
    <header className='w-full fixed top-0 left-0 z-50 bg-zinc-900/80 backdrop-blur-md border-b border-zinc-800 selection:bg-orange-500'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-20'>
        {/* Brand/Logo Area */}
        <a href="#" className='text-xl md:text-2xl font-bold tracking-tight text-white hover:text-orange-500 transition-colors'>
          Supun<span className='text-orange-500'>.</span>
        </a>
        
        {/* Clean, Interactive Links Row */}
        <nav className='flex items-center gap-6 sm:gap-10 text-sm sm:text-base font-medium text-zinc-300'>
          <a href='#about' className='hover:text-orange-500 transition-colors py-2'>About</a>
          <a href='#Portfolio' className='hover:text-orange-500 transition-colors py-2'>Portfolio</a>
          <a href='#Contact' className='hover:text-orange-500 transition-colors py-2 bg-orange-500/10 text-orange-400 px-4 py-1.5 rounded-lg border border-orange-500/20 hover:bg-orange-500 hover:text-white transition-all duration-300'>Contact</a>
        </nav>
      </div>
      {/* Decorative colored anchor rule line */}
      <div className='h-[2px] bg-gradient-to-r from-orange-500 via-transparent to-transparent w-full opacity-60'></div>
    </header>
  )
}

export default NavBar