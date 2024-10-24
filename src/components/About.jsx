import React from 'react'
import Cards from './Cards'

const About = () => {
  return (
    <section className='w-full h-auto  bg-zinc-700  text-white'>
      <div id='about'>
            <h1 className=' text-4xl pt-10 p-6'>About</h1>
            <p className='p-10 text-justify text-md md:text-2xl'>I have acquired and sharpened MERN technoogy and react native  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis repudiandae delectus eveniet beatae eaque quae. Officiis hic dolor impedit velit, nulla maxime itaque rem, quis magnam suscipit eaque at dicta? Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, nulla numquam autem a saepe expedita consectetur asperiores suscipit illo est earum repellat. Doloribus quis, nemo repellendus magnam ullam nihil dolor.</p>
        </div>
        <div>
          <h1 className='text-center text-4xl mt-5'>My Skills</h1>
        </div> 
        <Cards  />
    </section>
  )
}

export default About