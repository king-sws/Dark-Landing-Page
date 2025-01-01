import React from 'react'
import X from "@/assets/icons/x-social.svg"
import Insta from "@/assets/icons/insta.svg"
import Tik from "@/assets/icons/tiktok.svg"
import Yout from "@/assets/icons/youtube.svg"

const Footer = () => {
  return (
    <footer className='py-7 bg-black text-white/60 border-t border-white/20 ' >
      <div className="container">
        <div className="flex flex-col gap-4 sm:flex-row sm:justify-between items-center">
          <div className="text-center">
            2024 Your Company, Inc. All right reserved
          </div>
          <ul className='flex justify-center items-center gap-6  transition-all' >
            <li className='hover:text-white cursor-pointer  transition-all' >
              <X />
            </li>
            <li className='hover:text-white cursor-pointer  transition-all' >
              <Insta />
            </li>
            <li className='hover:text-white cursor-pointer  transition-all' >
              <Tik />
            </li>
            <li className='hover:text-white cursor-pointer  transition-all' >
              <Yout />
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer