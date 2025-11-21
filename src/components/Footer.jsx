
import React from 'react'
import { FaGithub, FaLinkedin, FaInstagram} from "react-icons/fa"
const Footer = () => {
    const Links = [
        {
            href: "https://instagram.com/",
            icon: FaInstagram
        },
        {
            href: "https://www.linkedin-fill",
            icon: FaGithub
        },
        {
            href: "https://github.com/",
            icon: FaLinkedin
        }
    ]
  return (
    <footer className='mt-10 bg-footer px-5'>
        <div className='  flex flex-col gap-y-3 md:gap-y-0 md:flex-row  items-center justify-between p-5'>
            <div className='flex gap-x-4'>
                {
                    Links.map((item, key) => {
                        return (
                        <a href={item.href} key={key} target='_blank'><item.icon  className='h-5 w-5 transition-all duration-100 hover:text-primary hover:scale-125'/></a>
                    )})
                }
            </div>
            <p className='text-sm md:text-base tracking-wide'>@ 2025 <span className='font-meduin text-primary'>HeroFront</span>. All Right Reserved</p>
            <p className='text-sm md:text-base tracking-wide'>Developed by <span className='font-meduin text-primary'>HeroFront</span></p>
        </div>
    </footer>
  )
}

export default Footer