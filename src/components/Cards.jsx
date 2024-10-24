
import React from 'react'
import skillsData from '../skills.json'

const Cards = () => {
  return (
    <section>
        <div className='grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 grid  md:grid-flow-row p-7 m-4  justify-items-between '>
            {skillsData.skills.map(skill => (
                <div className='max-w-sm md:max-w-md bg-zinc-800 overflow-auto shadow-2xl hover:bg-orange-400 rounded-3xl justify-items-center shadow-green content-center ' key={skill}>
          
              <img
                src={skill.icon}
                alt={skill.name}
                className='w-1/2 h-1/2 m-auto ' /><figcaption className='text-center'>{skill.name}</figcaption>
                </div>
            ))}          
        </div>
    </section>
  )
}

export default Cards