import React from 'react'
import { FaMeta } from "react-icons/fa6";
const words = ['React', 'Next', 'Tailwind', 'Bootstrap', 'JavaScript', 'PHP', 'Laravel', 'Mysql','GitHub'];

export default function Tape() {
  return (
     <section className='overflow-x-clip py-20 lg:py-20'>
        <div className='-max-1 -rotate-2 bg-gradient-to-r from-teal-300 to-blue-500 py-2 px-2'>
           <div className='mask-gardient-right '>
              <div className='flex flex-none gap-4 py-3 pr-4'>
                 {[...new Array(2).fill(0).map((_, index) => (
                    <React.Fragment key={index}>
                       {
                          words.map((word) => (
                             <div className="flex items-center gap-2" key={word}>
                                <span>{word }</span>
                                <FaMeta className='text-2xl'/>
                            </div>
                          ))
                       }
                     </React.Fragment> 
                 ))]}
              </div>
           </div>
        </div>
      
    </section>
  )
}
