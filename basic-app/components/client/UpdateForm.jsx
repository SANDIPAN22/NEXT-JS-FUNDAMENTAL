"use client"
import React, { useState } from 'react'

const UpdateForm = () => {
    const [user, setUser] = useState({eid:"", name:"", email:"", status: "", team:""})
    const handleChange = (e) =>{
        const {name, value} = e.target
        setUser(prev => ({...prev, [name]: value}))
    }
    const handleUpdate = async() => {
        console.log(user)
        const response = await fetch("/api/dashboard/"+user.eid, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(user)
          });
        
          if(response.ok){
            setUser({eid:"", name:"", email:"", status: "", team:""})
            alert("Updated successfully!!")
          }
    }
  return (
    <>
    
    <input className='m-2 p-2 w-64 text-xl text-black' type="number" placeholder='employee id' name="eid" onChange={handleChange} value={user.eid}/> <br />
    <input className='m-2 p-2 w-64 text-xl text-black' type="text" placeholder='Email' name="email" onChange={handleChange} value={user.email}/> <br />
    <input className='m-2 p-2 w-64 text-xl text-black' type="text" placeholder='Name' name="name" onChange={handleChange} value={user.name}/> <br />
    <input className='m-2 p-2 w-64 text-xl text-black' type="text" placeholder='Status (away/active/busy)' name="status" value={user.status} onChange={handleChange}/> <br />
    <input className='m-2 p-2 w-64 text-xl text-black' type="text" placeholder='Team (dev/QA/ops)' name="team" value={user.team} onChange={handleChange}/> <br />
    <button className='border-2 border-red-500 m-5 p-2' onClick={handleUpdate}>Update</button>
    </>
  )
}

export default UpdateForm