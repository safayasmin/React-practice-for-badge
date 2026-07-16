import React, { useState } from 'react'

const Todo = () => {
    const [name,setname]=useState("");
    const [email,setemail]=useState("");
  return (
    <div className='m-5'>
        <h1 className='text-2xl font-bold'>TODO</h1>
        <hr />
        <input
        type='text'
        placeholder='enter your name'
        value={name}
        onChange={(e)=>setname(e.target.value)}
        className='border border-black-500 py-2 px-2 mt-3'/>
        <br /><br />

        <input 
        type='email'
        placeholder='enter your email'
        value={email}
        onChange={(e)=>setemail(e.target.value)}
        className='border border-black-500 py-2 px-2'
        />

      
    </div>
  )
}

export default Todo
