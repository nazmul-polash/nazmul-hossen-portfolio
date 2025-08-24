import React, { useState } from 'react'
import { Link } from 'react-router'
import ToggleTheme from './ToggleTheme'
import { HiMenu, HiOutlineX } from "react-icons/hi";

export default function Navbar() {
   const [isMenuOpen, setisMenuOpen] = useState();
   const toggleManue = () => {
      setisMenuOpen(!isMenuOpen);
   }
   return (
      <>
         <header className='fixed top-0 z-50 w-full px-4 py-4'>
            <div className="container flex justify-between items-center rounded-full border-2 border-white/5 p-2
               bg-white/5 shadow-xl backdrop-blur mx-auto">
               <div className="navbar-start">
                  <div className="btn btn-ghost lg:hidden" onClick={toggleManue} area-label="Toggle Menu"
                     aria-expanded={isMenuOpen}>
                     {
                        isMenuOpen ? <HiOutlineX className='text-3xl' /> : <HiMenu className='text-3xl' />
                     }
                  </div>

                  {isMenuOpen && (
                     <div className="fixed top-16 left-0 w-full bg-gray-800/95 backdrop-blur-lg p-4 
                        lg:hidden text-white transition-transform transform duration-300
                        ease-in-out opacity-100 scale-y-100">
                        <ul className="menu menu-vertical px-1 text-xl space-y-3">
                           <li><Link to="/">About</Link></li>
                           <li><Link to="/">Experience</Link></li>
                           <li><Link to="/">Education</Link></li>
                           <li><Link to="/">Skills</Link></li>
                           <li><Link to="/">Projects</Link></li>
                           <li><Link to="/">Contact</Link></li>
                        </ul>
                     </div>
                  )}

                  <a className="text-2xl hidden lg:block ml-4">NH</a>
               </div>

               <div className="navbar-center hidden lg:flex">
                  <ul className="menu menu-horizontal px-1 text-xl">
                     <li><Link to="/">About</Link></li>
                     <li><Link to="/">Experience</Link></li>
                     <li><Link to="/">Education</Link></li>
                     <li><Link to="/">Skills</Link></li>
                     <li><Link to="/">Projects</Link></li>
                     <li><Link to="/">Contact</Link></li>
                  </ul>
               </div>

               <div className="navbar-end ">
                  <div className="mr-3">
                     <ToggleTheme />
                  </div>
                  <button className='btn btn-outline btn-primary rounded-full'>Contact Me</button>
               </div>
            </div>
         </header>
      </>
   )
}
