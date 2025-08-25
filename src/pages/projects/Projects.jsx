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
    imageUrl: "https://via.placeholder.com/300",
    projectUrl: "#"
  },
  {
    id: 3,
    title: "Project Three",
    description: "This is a brief description of Project Three.",
    imageUrl: "https://via.placeholder.com/300",
    projectUrl: "#"
  },
  {
    id: 4,
    title: "Project Four",
    description: "This is a brief description of Project Four.",
    imageUrl: "https://via.placeholder.com/300",
    projectUrl: "#"
  },
];
export default function Projects() {
  return (
     <section className='py-16' id='projects'>
        <SectionTitle title="My Projects" />
        <div className='container max-w-6xl mx-auto px-4 mt-10'>
           {/* projects  */}
           <div>
              {projects.map((project, index) => (
                 <ProjectCard key={index} project={project} index={index} />
              ))}
           </div>
         </div>
    </section>
  )
}
