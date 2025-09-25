import Link from 'next/link'
import React from 'react'

const Sidenav = () => {
  return (
    <>
    
    <div className='bg-gray-200 text-base font-medium flex items-center justify-center gap-5 flex-col h-screen w-[400px]'>

        <Link href={'/'}>Abous Us</Link>
        <Link href={'/'}>Blog</Link>
        <Link href={'/'}>Services</Link>
        <Link href={'/'}>Location</Link>

    </div>
    
    
    
    
    
    
    
    </>
  )
}

export default Sidenav