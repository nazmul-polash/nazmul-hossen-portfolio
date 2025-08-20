import React from 'react'
import { Link } from 'react-router'
import ToggleTheme from './ToggleTheme'

export default function Navbar() {
   return (
      <>
         <div className="navbar shadow-sm fixed top-0 z-50">
            <div className="navbar-start">
               <div className="dropdown">
                  <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                     <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                  </div>
                  <ul
                     tabIndex={0}
                     className="menu menu-sm dropdown-content  rounded-box z-1 mt-3 w-52 p-2 shadow">
                     <li><a>Item 1</a></li>
                     <li>
                        <a>Parent</a>
                        <ul className="p-2">
                           <li><a>Submenu 1</a></li>
                           <li><a>Submenu 2</a></li>
                        </ul>
                     </li>
                     <li><a>Item 3</a></li>
                  </ul>
               </div>
               <a className="btn btn-ghost text-xl">Nazmul Hossen</a>
            </div>
            <div className="navbar-center hidden lg:flex text-xl">
               <ul className="menu menu-horizontal px-1">
                  <li><Link to="/">About</Link></li>
                  <li><Link to="/">Experience</Link></li>
                  <li><Link to="/">Education</Link></li>
                  <li><Link to="/">Skills</Link></li>
                  <li><Link to="/">Projects</Link></li>
                  <li><Link to="/">Contact</Link></li>
               </ul>
            </div>

            <div className="navbar-end">
               <div>
                  <ToggleTheme />
               </div>
            </div>
         </div>
      </>
   )
}
