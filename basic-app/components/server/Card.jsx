import Link from 'next/link'
import React from 'react'

const Card = ({name, status, eid}) => {
    const makeName = (fullName) =>{
        let name = fullName.split(" ").length === 1 ? fullName.split(" ")[0] : (fullName.split(" ")[0] + " " + fullName.split(" ")[1][0])
        return name
    }
  return (
    <div className='border-2 border-red-400 w-72 p-5 cursor-pointer flex gap-5 m-10 rounded-lg justify-between items-center text-2xl'>
        <div id="name-status-box" className='flex justify-around gap-5 items-center'>
            <div id="name"> {makeName(name)} </div>
            {status=== "busy" && <div id="status">🔴 </div>}
            {status=== "away" && <div id="status">🟡 </div>}
            {status=== "active" && <div id="status">🟢 </div>}
        </div>
        
        <div id="cta"> <Link href={`/dashboard/${eid}`}> 🔍 </Link>  </div>
          
    </div>
  )
}

export default Card