import React from 'react'
import AnimatedIcon from './AnimatedIcon'
import { FaReact, FaLaravel  } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaDatabase } from "react-icons/fa6";

export default function HeroImage() {
   return (
      <div className='absolute right-0 top-0 h-[550px] w-full overflow-hidden rounded-bl-full 
      rounded-br-full border-r-[10px] border-blue-500 bg-gray-700 md:h-[600px] md:w-[400px] '>

         <AnimatedIcon Icon={FaReact } className="left-10 top-35" iconClassName="text-blue-500"/>   
         <AnimatedIcon Icon={RiTailwindCssFill  } className="right-10 top-35" iconClassName="text-blue-600"/>   
         <AnimatedIcon Icon={FaDatabase } className="left-10 bottom-35" iconClassName="text-blue-300"/>   
         <AnimatedIcon Icon={FaLaravel} className="right-10  bottom-35" iconClassName="text-red-500" />
         
         <img alt="Profile" className="ablsolute mt-25 bottom-0 left-1/2 w-[650px]" 
            src="https://png.pngtree.com/png-vector/20231018/ourmid/pngtree-business-portfolio-3d-character-illustration-png-image_10204176.png"/>
      </div>
   )
}
