import React from 'react'
import heroImg from "../assets/hero.png"
import {ArrowDown} from "lucide-react"
const Hero = () => {
  return (
    <section id='hero' className='relative min-h-screen flex items-center'>
        <div className='container mx-auto grid md:grid-cols-2 gap-10 items-center z-10'>
            {/* left side  */}
            <div className='text-center md:text-left'>
                <h1 className='text-2xl font-bold md:text-5xl tracking-tight mb-5'><span className='opacity-0 animate-fade-in'>Built Your Perfect</span>  
                <span className='text-primary opacity-0 animate-fade-in-delay-1'> Landing</span>
                <span className='opacity-0 animate-fade-in-delay-2'> Page</span></h1>
                <p className='text-[14px] md:text-xl text-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-4 mb-7'>Create beautiful, fast, and responsive landing pages using React, Tailwind CSS</p>
                <div className='opacity-0 animate-fade-in-delay-4'>
                    <a href="" className='cosmic-button '>Get Started</a>
                </div>
            </div>
            {/* right side  */}
            <div className='flex justify-center items-center h-full relative'>
              {/* Image Tag  */}
              <img 
                src={heroImg} 
                alt="Hero illustration" 
                className='w-full max-w-sm md:max-w-md lg:max-w-lg object-contain rounded-2xl' 
              />
            </div>
        </div>
        <div className='absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce'>
          <a href="#contact">
            <ArrowDown className='h-5 w-5 text-primary rounded-full border border-solid border-primary cursor-pointer'/>
          </a>
        </div>
    </section>
  )
}

export default Hero