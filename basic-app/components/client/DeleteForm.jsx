"use client"

import React, { useState } from 'react'

const DeleteForm = () => {
    const [id, setId] = useState("")
    const handleDelete = async() =>{
        const response = await fetch("/api/dashboard/"+id, {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
            
          });
        
          if(response.ok){
            setId("")
            alert("Deleted successfully!!")
          }
    }
  return (
    <>
    <input className='p-2 text-xl text-black' type="number" placeholder='employee id' value={id} onChange={e=> setId(e.target.value)}/>
    <button className='border-2 border-red-500 m-5 p-2' onClick={handleDelete}>Delete</button>
    </>
  )
}

export default DeleteForm