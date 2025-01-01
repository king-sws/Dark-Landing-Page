"use client"
import React, { useState } from 'react'
import Logo from '@/assets/images/logosaas.png'
import Link from 'next/link'
import Image from 'next/image'
import Menu from '@/assets/menu.svg'
import { AnimatePresence, motion } from 'framer-motion'
import { BiMenu, BiX } from 'react-icons/bi'

const NavbarLinks = [
  { label: "#home", name: "Home" },
  { label: "#features", name: "Features" },
  { label: "#updates", name: "Updates" },
  { label: "#custmoers", name: "Custmoers" },
  { label: "#help", name: "Help" },
];

const Header = () => {

  const [isOpen, setIsOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
   <header className='fexied w-full z-[100] top-0 bg-black backdrop-blur-sm' >
      <div className="flex justify-center items-center text-white  bg-[linear-gradient(to_right,#FCD6FF,#29D8FF,#FFFD80,#F89ABF,#FCD6FF)] gap-1 text-sm py-2">
        <p className="text-black font-medium hidden md:flex">Introducing a completely redesigned interface  — </p>
        <div className="inline-flex fap-1 items-center">
          <h1 className='underline hover:no-underline transition-all cursor-pointer font-medium text-black' >Explore the demo</h1>
        </div>
      </div>
      <div className="py-5">
          <div className="container relative ">
            <div className="flex justify-between items-center">
                <Link href={"/"} className="relative">
                  <div className="absolute w-full top-2 bottom-0 bg-[linear-gradient(to_right,#F87BFF,#FFDD9B,#FB92CF,#C2F8FE)] blur-md " />
                  <Image src={Logo} alt="Logo" width={40} height={40} className="cursor-pointer relative" />
                </Link>
                <nav className='hidden md:flex text-black/60 justify-between items-center gap-6' >
                  {NavbarLinks.map((link) => (
                    <Link href={link.label} key={link.label} className="hidden md:inline-block hover:text-white transition-all text-white/90 cursor-pointer">{link.name}</Link>
                  ))}
                  <button className="bg-white/95 hover:bg-white/75 transition-all text-black px-4 py-2 rounded-lg cursor-pointer align-items -tracking-tight hidden md:inline-block">Get For Free</button>
                </nav>

                {/* Mobile Menu */}
                <div className="md:hidden flex items-center">
                  <button onClick={handleMenuToggle} className="focus:outline-none text-white transition">
                    {!isOpen ? <BiMenu size={24} /> : <BiX size={24} />}
                  </button>
                </div>
              </div>
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: "auto" }}
                    exit={{ height: 0 }} // Set exit animation for smoother closing
                    className="overflow-hidden relative"
                  >
                    <div className="md:hidden  bg-black backdrop-blur z-[99999] flex flex-col p-4 rounded-xl items-center mt-4 gap-3">
                      {NavbarLinks.map((link, index) => (
                        <Link key={index} href={link.label} className='font-medium text-white'>
                          {link.name}
                        </Link>
                      ))}
                      
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </div>

   </header>
  )
}

export default Header
