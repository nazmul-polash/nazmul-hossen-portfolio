import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Outlet } from 'react-router'
import Projects from './pages/projects/Projects'
import Tape from './pages/tape/Tape'
import About from './pages/about/About'
import Services from './pages/services/services'
import Contact from './pages/contact/Contact'

function App() {
  return (
    <>
    <Navbar />
      <main className="min-h-screen">
        <Outlet />
      </main>
      <Tape />
      <Projects />
      <About />
      <Services />
      <Contact />
      <Footer />
    </>
  )
}

export default App
