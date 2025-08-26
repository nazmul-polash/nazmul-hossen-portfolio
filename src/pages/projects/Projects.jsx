import React from 'react'
import SectionTitle from '../../components/SectionTitle'
import ProjectCard from '../../components/ProjectCard';

const projects = [
  {
    id: 1,
    title: "Project One",
    description: "This is a brief description of Project One.",
    imageUrl: "https://plus.unsplash.com/premium_photo-1661962309696-c429126b237e?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    projectUrl: "#"
  },
  {
    id: 2,
    title: "Project Two",
    description: "This is a brief description of Project Two.",
    imageUrl: "https://images.unsplash.com/photo-1569060368681-889a62a8f416?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGVtb3xlbnwwfHwwfHx8MA%3D%3D",
    projectUrl: "#"
  },
  {
    id: 3,
    title: "Project Three",
    description: "This is a brief description of Project Three.",
    imageUrl: "https://images.unsplash.com/photo-1609911567691-049dc2b4d467?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZGVtb3xlbnwwfHwwfHx8MA%3D%3D",
    projectUrl: "#"
  },
  {
    id: 4,
    title: "Project Four",
    description: "This is a brief description of Project Four.",
    imageUrl: "https://plus.unsplash.com/premium_photo-1683880730492-d4ece41e8617?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZGVtb3xlbnwwfHwwfHx8MA%3D%3D",
    projectUrl: "#"
  },
];
export default function Projects() {
  return (
     <section className='py-16' id='projects'>
        <SectionTitle title="My Projects" />
        <div className='container max-w-6xl mx-auto px-4 mt-10'>
           {/* projects  */}
           <div className='space-y-6'>
              {projects.map((project, index) => (
                 <ProjectCard key={index} project={project} index={index} />
              ))}
           </div>
         </div>
    </section>
  )
}
