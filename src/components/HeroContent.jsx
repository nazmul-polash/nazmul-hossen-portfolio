import React from 'react'

export default function HeroContent() {
   return (
      <div className='text-center lg:text-left'>
         <h1 className="text-4xl font-bold">Nazmul Hossen</h1>
         <p className='text-sm font-semibold pt-5'>Full stact Developer</p>
         <div className='flex items-center gap-8 pt-5 text-[16px]'>
            <small>mdpolash01980@gmail.com</small>
            <small>Uttara, Dhaka, Bangladesh</small>
         </div>
         <p className='text-sm font-medium pt-5 justify-between w-2/3'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus hic quaerat assumenda,
            unde dignissimos porro, reiciendis commodi esse illum suscipit, et saepe repellendus?
            Tenetur adipisci cum voluptate minima ea atque reiciendis
         </p>

         <div className='flex items-center gap-4 pt-5'>
            <button className="btn btn-primary">Download Resume</button>
            <button className="btn btn-secondary">Contact Me</button>
         </div>
      </div>
   )
}
