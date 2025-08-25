import React from 'react'

export default function ProjectCard({project, index}) {
  return (
     <div>
        {/* project content  */}
        <div>
           <h2>{project.title}</h2>
           <hr />
             <p>{project.description}</p>
        </div>
        {/* project image  */}
        <div>
           <img src={project.imageUrl} alt={project.title} className='-mb-10 mt-8 h-50 w-full rounded-lg object-cover
           -md:mr-20 md:h-full'/>   
        </div>
    </div>
  )
}
