import React from 'react'


export default function ServicesCard({ services }) {
   return (
      <div className='flex flex-col gap-4 p-6 border border-gray-200 rounded-lg shadow-lg 
     hover:shadow-xl transition-shadow duration-300'>
         <services.icon className='text-6xl border rounded-full p-2 text-blue-500' />
         <div className='space-y-2'>
            <h1 className='font-semibold text-xl mt-2'>{services.title}</h1>
            <p className='text-sm mt-1'>{services.description}</p>
         </div>
      </div>
   )
}
