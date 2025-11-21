import React from 'react'
import ThemeToggle from '../components/ThemeToggle'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Features from '../components/Features'
import Skills from '../components/Skills'
import Contact from '../components/Contact'
import Footer from '../components/Footer'


const Home = () => {
  return (
    <div className='min-h-screen '>
      {/* theme toggle */}
      {/* <ThemeToggle/> */}
      {/* navbar */}
      <Navbar />
      {/* hero section  */}
      <Hero/>
      {/* features section  */}
      <Features />
      {/* skills section  */}
      <Skills />
      {/* contact section  */}
      <Contact />
      {/* footer  */}
      <Footer />
    </div>
  )
}

export default Home