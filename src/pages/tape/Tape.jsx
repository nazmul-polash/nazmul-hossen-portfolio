import React from 'react'

export default function Tape() {
  return (
     <section className='overflow-hidden py-20 lg:py-20'>
        <div className='-max-1 -rotate-2 bg-gradient-to-r from-teal-300 to-blue-500 py-2 text-center 
        text-2xl font-bold text-white sm:text-3xl md:-max-2 md:py-4 lg:-max-3 lg:py-6'>
           <div className='mask-gardient-right '>
              <div className='flex flex-none gap-4 py-3 pr-4'>
                 {/* {[...new Array(2).fill(0).map((_, index) => (
                    <Fringment key={index}>
                       {
                          words.map((word) => (
                             <div className="flex items-center gap-2">
                                <span>{word }</span>
                                <span>icons</span>
                            </div>
                          ))
                       }
                       
                     </Fringment> 
                 ))]} */}
                 <span className="inline-flex items-center gap-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Molestias, quis. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Minima totam quibusdam nihil doloribus, enim aliquid!</span>
              </div>
           </div>
        </div>
      
    </section>
  )
}
