import clsx from 'clsx';
import React from 'react'

const Button = (props: {
    variant: "primary" | "secondary"
    children: React.ReactNode;
    className?: string;
}) => {
    const {variant = "primary", children, className } = props
    const variantClasses = { 
        primary: 'bg-white/90 text-neutral-950 hover:bg-white/80', 
        secondary: 'bg-white text-black hover:bg-white/80', 
        tertiary: 'bg-transparent text-blue-600 border border-blue-600 hover:bg-blue-50'
    };
  return (
    <button className={clsx('px-5 py-3 transition-all font-medium rounded-lg  duration-200 ease-in-out', variantClasses[variant] , className)} >
        {children}
    </button>
  )
}

export default Button