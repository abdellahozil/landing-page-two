import React from 'react'
import {motion} from "framer-motion"
import { Briefcase, Code, User } from 'lucide-react'

const Features = () => {
  return (
    <section id='features' className='px-6 mb-40 pt-15'>
        <div className='max-w-6xl mx-auto'>
            <h2 className='text-3xl md:text-4xl font-bold text-center mb-40'>Our <span className='text-primary opacity-0 animate-fade-in-delay-1'>Features</span></h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10'>
              <motion.div 
               initial={{ opacity: 0, y: 40 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8 }}
               className='gradient-border p-6 card-hover flex items-start gap-4 bg-primary/10 cursor-pointer'
              >
                <div className='p-3 rounded-full bg-primary/20'>
                 <Code className='h-6 w-6 text-primary'/>
                </div>
                <div className='text-left'>
                  <h1 className='font-semibold text-lg'>Build Modern Landing Pages</h1>
                  <p className='text-muted-foreground text-gray-400'>Optimized loading for a better experience</p>
                </div>
              </motion.div>
              <motion.div 
               initial={{ opacity: 0, y: 40 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8 }}
               className='gradient-border p-6 card-hover flex items-start gap-4 bg-primary/10 cursor-pointer'
              >
                <div className='p-3 rounded-full bg-primary/20'>
                 <User className='h-6 w-6 text-primary'/>
                </div>
                <div className='text-left'>
                  <h1 className='font-semibold text-lg'>Fully Responsive</h1>
                  <p className='text-muted-foreground text-gray-400'>Works on all devices - mobile, tablet, and desktop.</p>
                </div>
              </motion.div>
              <motion.div 
               initial={{ opacity: 0, y: 40 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8 }}
               className='gradient-border p-6 card-hover flex items-start gap-4 bg-primary/10 cursor-pointer'
              >
                <div className='p-3 rounded-full bg-primary/20'>
                 <Briefcase className='h-6 w-6 text-primary'/>
                </div>
                <div className='text-left'>
                  <h1 className='font-semibold text-lg'>Modern UI</h1>
                  <p className='text-muted-foreground text-gray-400'>Clean and minimal design built with Tailwind CSS.</p>
                </div>
              </motion.div>
            </div>
        </div>
    </section>
  )
}

export default Features