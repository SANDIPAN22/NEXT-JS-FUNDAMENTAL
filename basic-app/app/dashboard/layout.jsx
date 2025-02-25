import Navbar from '@/components/client/Navbar'
import React from 'react'

const layout = ({children}) => {
  return (
    <>
    <Navbar/>
    {children}
    </>
  )
}

export default layout