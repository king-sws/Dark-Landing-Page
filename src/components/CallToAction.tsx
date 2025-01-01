'use client'
import React, { useRef } from 'react'
import Button from "@/components/Button"
import emojStar from "@/assets/images/emojistar.png"
import helixImg from "@/assets/images/helix2.png"
import { motion, useScroll, useTransform } from 'framer-motion'

const CallToAction = () => {
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start']
  })
  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150])
  return (
    <section ref={sectionRef} id="help" className="py-[72px] sm:py-24 text-center text-white overflow-x-clip bg-black ">
      <div className="container max-w-xl relative">
        <motion.img style={{
                translateY,
              }} src={helixImg.src} alt='emoji' className='absolute top-6 left-[calc(100%+36px)] hidden sm:block ' />
        <motion.img
          style={{
            translateY,
          }}
        src={emojStar.src} alt='emoji' className='absolute -top-[120px] right-[calc(100%+24px)] hidden sm:block ' />
        <div className="flex justify-center flex-col items-center ">
          <h1 className='font-bold text-5xl tracking-tighter sm:text-6xl' >Get instant access</h1>
          <p className='text-white/70 text-xl mt-5' >Celebrate the joy of accomplishment with an app designed to track your progress and motivate your efforts</p>
          <form className="flex justify-center flex-col sm:flex-row  mt-7 gap-2.5 ">
            <input type="email" placeholder='Enter your email' className='bg-white/20 px-5 py-3 outline-none focus:outline-[#5D2CA8] transition-all font-medium h-12 rounded-lg placeholder:text-[#9CA3AF] flex-1 '  />
            <Button variant='secondary' className='w-full' >Get access</Button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default CallToAction