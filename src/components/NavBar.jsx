import React from 'react'


const NavBar = () => {
  return (
    <>
      <section className=' w-full h-auto bg-zinc-800 text-white text-lg md:text-2xl fixed z-10 '>
        <nav className='flex flex-row justify-center align-middle p-8 gap-8 '>
            < a href='#'>About</a>
            < a href='#Portfolio'>Portfolio</a>
            < a href='#Contact'>Contact</a>
        </nav>
        <hr className='border-2 border-orange-500 w-3/5'></hr>
      </section>
    </>
  )
}

export default NavBar