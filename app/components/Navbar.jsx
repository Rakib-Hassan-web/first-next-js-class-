  "use client";

import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'

const Navbar = () => {
    const pathname = usePathname();
  return (
    <>
    
    <div className='bg-pink-400 py-5  w-full'>
        <ul className='flex items-center justify-center gap-10'>
            <Link
  href="/"
  className="relative text-2xl font-medium text-black 
             after:content-[''] after:absolute after:left-0 after:-bottom-1 
             after:w-0 after:h-[2px] after:bg-black after:transition-all after:duration-300 
             hover:after:w-full"
>
  Home
</Link>
                  <Link
        href="/about"
        className={`relative text-2xl font-medium text-black 
          after:content-[''] after:absolute after:left-0 after:-bottom-1 
          after:h-[2px] after:bg-black after:transition-all after:duration-300
          ${pathname === "/" ? "after:w-full" : "after:w-0"}
        `}
      >
        abbj
      </Link>
            <Link href={'/contact'}  className='text-2xl font-medium text-black'>Contact</Link>
        </ul>
    </div>
    
    
    
    
    </>
  )
}

export default Navbar