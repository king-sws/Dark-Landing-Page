'use client'
import Link from 'next/link'
import React from 'react'
import Button from './Button'
import ArrowRight from "@/assets/icons/arrow-w.svg"
import Image from 'next/image'
import cusro from '@/assets/images/cursor.png'
import message from '@/assets/images/message.png'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <section id='home' className="bg-black py-[72px] sm:py-24 overflow-clip text-white bg-[linear-gradient(to_bottom,#000,#200D42_34%,#4F21A1_65%,#A46EDB_82%)] relative " id="">
      <div className="absolute h-[375px] w-[750px] sm:h-[750px] sm:w-[1536px] lg:w-[2400px] lg:h-[1200px] rounded-[100%] bg-black left-1/2 -translate-x-1/2 border border-[#B48CDE] bg-[radial-gradient(closest-side,#000_82%,#9560EB)] top-[calc(100%-96px)] sm:top-[calc(100%-120px)] "></div>
      <div className="container relative">
        <div className="flex justify-center items-center">
          <Link href={"#"} className='inline-flex gap-3 border border-white/30 rounded-lg px-2 py-1 ' >
            <span className='bg-gradient-to-r from-red-500 to-blue-500 text-transparent bg-clip-text'>Virsion 2.8 is Here </span>
            <span className='inline-flex items-center gap-1' >
              <span className='' >Read More</span>
              <ArrowRight />
            </span>
          </Link>
        </div>
        <div className="flex justify-center mt-8" >
          <div className="inline-flex relative ">
            <motion.div drag dragSnapToOrigin className="absolute right-[476px] top-[108px] hidden sm:inline">
              <Image src={cusro} draggable='false' alt="Message-logo" width={200} height={200} className='max-w-none' />
            </motion.div>
            <motion.div drag dragSnapToOrigin className="absolute top-[56px] left-[498px] hidden sm:inline ">
              <Image src={message} draggable='false' alt="Cusro-logo" width={200} height={200} className='max-w-none'  />
            </motion.div>
            <h1 className='text-7xl sm:text-9xl font-bold tracking-tighter inline-flex' >One Task <br/> at a Time</h1>
          </div>
        </div>
        <div className="flex justify-center">
          <p className='text-white/90 text-center max-w-md text-xl mt-8' >Celebrate the joy of acccomplishment with an app designed to track tour progress, motivate your efforts, and celebrate your successes  </p>
        </div>
          <div className="flex justify-center mt-8"> 
            <Button variant='primary'  > Get for free </Button> 
          </div>
      </div>
    </section>
  )
}

export default Hero