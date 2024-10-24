import React from 'react'


const NavBar = () => {
  return (
    <>
      <section className=' w-full h-auto bg-zinc-800 text-white text-2xl'>
        <nav className='flex flex-row justify-center align-middle p-8 gap-8'>
            < a href='#about'>About</a>
            < a href='#Portfolio'>Portfolio</a>
            < a href='#Contact'>Contact</a>
        </nav>
      </section>
    </>
  )
}

export default NavBar