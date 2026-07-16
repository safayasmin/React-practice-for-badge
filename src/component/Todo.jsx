
import React, { useState } from 'react'

const Todo = () => {
    const [name,setname]=useState("");
    const [email,setemail]=useState("");
    const [age,setage]=useState("");
    
  return (
    <div>
        <h1 className='text-2xl font-bold tracking-[6px] m-3'>FORM VALIDATION</h1>

        <h1 className='text-xl font-bold uppercase'>Name :-</h1>
        <input 
        type='text'
        value={name}
        placeholder='enter your name'
        onChange={(e)=>setname(e.target.value)} 
        className='border border-black-500 py-1 px-1 m-3' 
        />
        <br />
        <h1 className='text-xl font-bold uppercase'>email :-</h1>
        <input
        type='email'
        value={email}
        placeholder='enter your email'
        onChange={(e)=>setemail(e.target.value)} 
        className='border border-black-500 py-1 px-1 m-3' 
        />
        <br />
        <h1 className='text-xl font-bold uppercase'>age :-</h1>
        <input
        type='number'
        value={age}
        placeholder='enter your age'
        onChange={(e)=>setage(e.target.value)} 
        className='border border-black-500 py-1 px-1 m-3' 
        />


        <h1 className='text-xl font-bold uppercase'>gender :-</h1>
       
        <input
        type='radio'/>
        drawing 

        <input
        type='radio'/>
        swimming

        <input
        type='radio'/>
        singing

        <input
        type='radio'/>
        baking


        <br /><br />


        <h1 className='text-xl font-bold uppercase'>gender</h1>
        <select className='border border-black-500 py-2 px-2 m-1'>
            <option>male</option>
            <option>female</option>
            <option>other</option>
            
        </select>
        <br /><br />

        <h1 className='text-2xl font-bold uppercase'>Address</h1>
        
        <textarea
        placeholder='enter your address....'
        className='border'
        />

    </div>
  )
}

export default Todo


