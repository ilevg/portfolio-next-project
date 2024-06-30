'use client'
import React from 'react'
import { Projects } from '@/constants'
import ProjectsCard from '@/components/ProjectsCard'



const Page = () => {
  return (
    <div style={{ backgroundImage: 'url(/mountains.jpg)' }} className='h-screen w-screen flex items-center justify-center bg-cover bg-center'>
      <div className="grid grid-cols-2 gap-5 max-w-[90%] max-h-[90%]">
          {Projects.map((project, index) => (
            <ProjectsCard
              key={index}
              title={project.title}
              text={project.text}
              image={project.src}
            />
          ))}
      </div>
    </div>
  )
}

export default Page
