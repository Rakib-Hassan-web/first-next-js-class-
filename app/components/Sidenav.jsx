import Link from 'next/link'
import React from 'react'

const Sidenav = () => {
  return (
    <>
    
    <div className='bg-gray-200 text-base font-medium flex items-center justify-center gap-5 flex-col h-screen w-[400px] text-black'>

        <Link href={'/about/Us'} className='text-xl font-semibold  hover:scale-130 duration-300 hover:text-green-400'>Abous Us</Link>
        <Link href={'/about/Blog'} className='text-xl font-semibold  hover:scale-130 duration-300 hover:text-green-400'>Blog</Link>
        <Link href={'/about/service'} className='text-xl font-semibold  hover:scale-130 duration-300 hover:text-green-400'>Services</Link>
        <Link href={'/about/Location'} className='text-xl font-semibold  hover:scale-130 duration-300 hover:text-green-400'>Location</Link>

    </div>
    
    
    
    
    
    
    
    </>
  )
}

export default Sidenav