import React from 'react'

export default function HeroContent() {
   return (
      <div className="hero h-4/10 ">
         <div className="hero-content flex-col lg:flex-row-reverse">
            <div>
               <h1 className="text-5xl font-bold">Nazmul Hossen</h1>
               <p className='text-sm font-semibold pt-5'>Full stact Developer</p>
               <div className='flex items-center gap-8 pt-5 text-[16px]'>
                  <small>mdpolash01980@gmail.com</small>
                  <small>Uttara, Dhaka, Bangladesh</small>
               </div>
               <p className="py-6">
                  Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                  quasi. In deleniti eaque aut repudiandae et a id nisi.
               </p>
               <div className='flex items-center gap-4 pt-5'>
                  <button className="btn btn-primary">Download Resume</button>
                  <button className="btn btn-secondary">Contact Me</button>
               </div>
            </div>
         </div>
      </div>
   )
}
