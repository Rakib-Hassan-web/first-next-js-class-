import React from 'react'
import Sidenav from '../components/Sidenav'

const layout = ({children}) => {
  return (
    <div className='flex items-center'>
    <Sidenav/>
        {children}
    </div>
  )
}

export default layout