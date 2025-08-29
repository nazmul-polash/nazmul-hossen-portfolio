import React from 'react'
import SectionTitle from '../../components/SectionTitle'

export default function About() {
   return (
      <section className='py-10'>
         <SectionTitle title='About Me' />
         <div className='mt-10 flex flex-col items-center gap-6 md:flex-row md:gap-12'>
            {/* about image  */}
            <img
               className='w-full flex md:w-1/2'
               src="https://png.pngtree.com/png-vector/20231018/ourmid/pngtree-business-portfolio-3d-character-illustration-png-image_10204176.png" alt="" />


            {/* about content  */}
            <div className='container flex-1'>
               <div className='max-w-lg'>
                  <h1 className='font-serif text-3xl md:text-4xl  font-semibold'>Hi, I'm <span className='text-blue-500'> Nazmul Hossen</span></h1>
                  <p className='mt-3 text-sm md:text-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis qui sequi cumque modi illo tempore, esse dolor libero dolorem labore impedit quisquam at assumenda consectetur officiis maxime fuga possimus nemo?</p>
               </div>
               <div>
                  <button className='btn btn-primary mt-2'>Hire me</button>
               </div>
            </div>
         </div>
      </section>
   )
}
