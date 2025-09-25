import Link from 'next/link'
import React from 'react'

const Navbar = () => {
return (
<>

  <div className='bg-pink-400 py-5  w-full'>
    <ul className='flex items-center justify-center gap-10'>

      <Link href="/" className="relative text-2xl font-medium text-black 
             after:content-[''] after:absolute after:left-0 after:-bottom-1 
             after:w-0 after:h-[2px] after:bg-black after:transition-all after:duration-300 
             hover:after:w-full">
      Home
      </Link>  
      
       <Link href="/about" className="relative text-2xl font-medium text-black 
             after:content-[''] after:absolute after:left-0 after:-bottom-1 
             after:w-0 after:h-[2px] after:bg-black after:transition-all after:duration-300 
             hover:after:w-full">
      About
      </Link> 
      
       <Link href="/contact" className="relative text-2xl font-medium text-black 
             after:content-[''] after:absolute after:left-0 after:-bottom-1 
             after:w-0 after:h-[2px] after:bg-black after:transition-all after:duration-300 
             hover:after:w-full">
      Contact
      </Link>

    </ul>
  </div>




</>
)
}

export default Navbar