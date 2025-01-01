"use client"
import acmeLogo from "../assets/images/acme.png";
import quantumLogo from "../assets/images/quantum.png";
import echoLogo from "../assets/images/echo.png";
import celestialLogo from "../assets/images/celestial.png";
import pulseLogo from "../assets/images/pulse.png";
import apexLogo from "../assets/images/apex.png";
import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";

const images = [
  { src: acmeLogo, alt: "Acme Logo" },
  { src: quantumLogo, alt: "Quantum Logo" },
  { src: echoLogo, alt: "Echo Logo" },
  { src: celestialLogo, alt: "Celestial Logo" },
  { src: pulseLogo, alt: "Pulse Logo" },
  { src: apexLogo, alt: "Apex Logo" },
];

const LogoTicker = () => {
  return (
    <section className="py-[72px] lg:py-24 bg-black overflow-x-hidden">
      <div className="px-5">
        <h3 className="text-center text-white/70 text-xl">Trusted by the world&apos;s most innovative teams</h3>
        <div className="flex overflow-hidden mt-12" style={{ WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)', maskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)' }}>
          <motion.div
            animate={{ x: "-50%" }}
            transition={{ duration: 40, ease: "linear", repeat: Infinity }}
            className="flex flex-none items-center gap-24 pr-24"
          >
            
            {Array.from({ length: 2 }).map((_, i) => (
              <React.Fragment key={i}>
                {images.map((logo, index) => (
                  <div key={index} className="flex-shrink-0">
                    <Image src={logo.src} alt={logo.alt} width={150} height={150} />
                  </div>
                ))}
              </React.Fragment>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default LogoTicker;
