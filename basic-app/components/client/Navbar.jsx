"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const Navbar = () => {
    const pathName = usePathname()
    const isActive = ( path) => pathName === path
  return (
    <div className=' border-b-2 border-red-500 p-4 flex justify-evenly '>
        <div id="option_1" className={`font-bold text-2xl ${isActive("/dashboard") && "text-red-600"} `}>
           <Link href="/dashboard">GET ALL DATA</Link> 
        </div>
        <div id="option_2"  className={`font-bold text-2xl ${isActive("/dashboard/update") && "text-red-600"} `}>
        <Link href="/dashboard/update">UPDATE A DATA</Link> 
        </div>
        <div id="option_3"  className={`font-bold text-2xl ${isActive("/dashboard/delete") && "text-red-600"} `}>
        <Link href="/dashboard/delete">DELETE A DATA</Link> 
        </div>
        <div id="option_4"  className={`font-bold text-2xl ${isActive("/dashboard/post") && "text-red-600"} `}>
        <Link href="/dashboard/post">POST A DATA</Link> 
        </div>

    </div>
  )
}

export default Navbar