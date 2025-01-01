"use client"
import React, { useEffect, useRef } from 'react'
import EcosystemIcon from "@/assets/icons/ecosystem.svg";
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';

const FeatureCard = ({ title, description }: { title: string; description: string; }) => {
  const border = useRef<HTMLDivElement>(null);
  const offsetX = useMotionValue(-100);
  const offsetY = useMotionValue(-100);
  const maskImage = useMotionTemplate`radial-gradient(100px 100px at ${offsetX}px ${offsetY}px, black, transparent)`;

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      if (!border.current) return;
      const borderRect = border.current.getBoundingClientRect();
      offsetX.set(e.x - borderRect.x);
      offsetY.set(e.y - borderRect.y);
    };
    window.addEventListener('mousemove', updateMousePosition);
    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, [offsetX, offsetY]);

  return (
    <div className="relative border border-white/30 px-5 py-10 text-center rounded-xl">
      <motion.div
        ref={border}
        className="absolute border-2 border-purple-400 rounded-xl inset-0 pointer-events-none"
        style={{
          WebkitMaskImage: maskImage,
          maskImage: maskImage,
        }}
      />
      <div className="inline-flex h-14 w-14 bg-white text-black justify-center rounded-xl items-center">
        <EcosystemIcon />
      </div>
      <h2 className="font-bold my-4">{title}</h2>
      <p className="text-white/50">{description}</p>
    </div>
  );
};

export default FeatureCard;
