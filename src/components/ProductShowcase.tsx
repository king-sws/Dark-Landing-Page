'use client'
import React, { useRef } from 'react'
import appScreen from "../assets/images/app-screen.png";
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';

const ProductShowcase = () => {
  const appImg = useRef(null)
  const { scrollYProgress } = useScroll({
    target: appImg,
    offset: ['start end',"end end"]
  })
  const rotateX = useTransform(scrollYProgress, [0, 1], [15, 0])
  const opacity = useTransform(scrollYProgress, [0, 1], [.5, 1])
  return (
    <section id="updates" className="bg-black overflow-x-clip bg-gradient-to-b from-black to-[#5D2CA8] text-white py-[78px] lg:py-24 ">
      <div className="container">
        <div className="max-w-xl mx-auto ">
          <h1 className='text-5xl text-center font-bold tracking-tighter ' >Intuitive interface </h1>
          <p className='text-xl text-center text-white/70 mt-5 ' >
            Celebrate the joy of accomplishment with an app designed to track your
            progress, motivate your efforts, and celebrate your successes, one task at a time.
          </p>
        </div>
        <motion.div 
          style={{
            opacity,
            rotateX,
            transformPerspective: '800px'
          }}
          className=" flex justify-center ">
          <Image src={appScreen} alt='App' className='mt-14' ref={appImg} />
        </motion.div>
      </div>
    </section>
  )
}

export default ProductShowcase