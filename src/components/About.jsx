import React from 'react'
import Cards from './Cards'

const About = () => {
  return (
    <section className='w-full h-auto  bg-zinc-700  text-white'>
      <div id='about'>
            <h1 className=' text-4xl pt-10 p-6'>About</h1>
            <p className='p-10 text-justify text-md md:text-2xl '>I am a passionate and driven Software Engineering undergraduate currently in my 3rd year at the Open University of Sri Lanka. With hands-on experience in full-stack development, I specialize in the MERN stack (MongoDB, Express, React, Node.js) and am continuously expanding my expertise in Java and Spring Boot to meet enterprise-level demands. My current focus includes cloud computing technologies such as Docker and AWS, as well as PostgreSQL for database management.
I thrive in solving complex problems and am committed to delivering high-quality, scalable solutions.I am also eager to delve deeper into DevOps practices to streamline development workflows.
With a career goal of becoming a skilled Software Engineer, I am always looking for new challenges that will allow me to grow and make an impact in the tech world. </p>
        </div>
        <div>
          <h1 className='text-center text-4xl mt-5'>My Skills</h1>
        </div> 
        <Cards  />
    </section>
  )
}

export default About