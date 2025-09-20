import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <>
    
    <div className='bg-pink-400 py-5  w-full'>
        <ul className='flex items-center justify-center gap-5'>
            <Link href={'/'} className='text-2xl font-medium text-black' >Home</Link>
            <Link href={'/about'} className='text-2xl font-medium text-black' >About</Link>
            <Link href={'/contact'}  className='text-2xl font-medium text-black'>Contact</Link>
        </ul>
    </div>
    
    
    
    
    </>
  )
}

export default Navbar