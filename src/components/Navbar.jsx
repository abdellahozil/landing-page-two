import { Menu, X } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import ThemeToggle from './ThemeToggle'
const navItems = [
    {
        name : "Home",
        href: "#hero"
    },
    {
        name : "Features",
        href: "#features"
    },
    {
        name : "Skills",
        href: "#skills"
    },
    {
        name : "Contact",
        href: "#contact"
    },
]
const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10)
            
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])
  return (
    <nav className={`fixed w-full z-40 transition-all duration-300 ${isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs lg:px-24" : "py-5 lg:px-24"}`}>
        <div className='container flex items-center justify-between mx-auto px-6'>
            <a href='#hero' className='text-xl font-bold text-primary flex items-center'>
                <span className='relative z-10'>
                  <span className='text-glow text-foreground '>HeroTech</span> Page
                </span>
            </a>
            {/* desktop version  */}
            <div className='hidden md:flex space-x-8'>
                {
                    navItems.map((item, key) => (
                        <a href={item.href} key={key} className='font-semibold text-foreground/80 hover:text-primary transition-colors duration-300'>{item.name}</a>
                    ))
                }
            </div>
            <ThemeToggle></ThemeToggle>
            {/* Mobile version  */}
            <button onClick={() => setIsMenuOpen((prev) => !prev)}
                className='md:hidden p-2 text-foreground z-50'>
                    {isMenuOpen ? <X size={24}/> : <Menu size={24}/>}
            </button>
            <div className={`fixed inset-0 bg-background/95 backdroup-blur-md z-40 flex flex-col items-center justify-center transition-all duration-300 md:hidden ${isMenuOpen ? "opacity-100 pointer-events-auto min-h-screen" : "opacity-0 pointer-events-none"}`}>
            <div className='flex flex-col space-y-8 text-xl'>
                {
                    navItems.map((item, key) => (
                        <a href={item.href} key={key} className='text-foreground/80 hover:text-primary transition-colors duration-300'
                        onClick={() => setIsMenuOpen(false)}>{item.name}</a>
                    ))
                }
            </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar