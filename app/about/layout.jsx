import React from 'react'
import Sidenav from '../components/Sidenav'

const layout = ({children}) => {
  return (
    <div>
    <Sidenav/>
        {children}
    </div>
  )
}

export default layout