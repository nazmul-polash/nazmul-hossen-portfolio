import React from 'react'
import SectionTitle from '../../components/SectionTitle'
import ServicesCard from '../../components/ServicesCard'
import { FaCode } from "react-icons/fa";

const services = [
   {
      icon: FaCode,
      title: 'Web Design',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.'
   },
   {
      icon: FaCode,
      title: 'Web Development',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.'
   },
   {
      icon: FaCode,
      title: 'Database Management',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.'
   },
   {
      icon: FaCode,
      title: 'SEO Optimization',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.'
   },

]

export default function Services() {
   return (
      <section className='py-16'>
         <SectionTitle title='My Services' />
         <div className='container mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mx-auto'>
            {services.map((services, index) => (
               <div key={index}>
                  {/* <FaCode /> */}
                  <ServicesCard services={services} />
               </div>
            ))}
         </div>
      </section>
   )
}
