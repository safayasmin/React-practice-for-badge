

import React, { useEffect, useState } from 'react'
import axios from "axios"

const Todo = () => {
  const [name,setname]=useState("");
  const [fulldata,setfulldata]=useState([]);
  const [trash,settrash]=useState([]);

  useEffect(()=>{
    getdata();
    gettrash();
  },[]);

  const gettrash=async()=>{
    const res=await axios.get("http://localhost:5000/trash");
    settrash(res.data);
  }
  const getdata=async()=>{
    const res=await axios.get("http://localhost:5000/users");
    setfulldata(res.data);
  }
  
  const senddata=async()=>{
    const handledata={
      name:name
    }
    await axios.post(`http://localhost:5000/users`,handledata);
    setname("");
    getdata();
  }

  const handledelete=async(id)=>{
    const deleteuser=fulldata.find((item)=>item.id===id);
    const res=await axios.post(`http://localhost:5000/trash`,deleteuser);
    await axios.delete(`http://localhost:5000/users/${id}`);
    
    getdata();
    gettrash();
  }

  const handleundo=async(item)=>{
    await axios.post(`http://localhost:5000/users`,{
      name:item.name,
    });
    await axios.delete(`http://localhost:5000/trash/${item.id}`);
    getdata();
    gettrash();
  }
  return (
    <div>
      <h1 className='m-2 text-2xl font-bold tracking-[3px] uppercase'>Todo</h1>
      <input
      type='text'
      placeholder='enter name'
      value={name}
      onChange={(e)=>setname(e.target.value)}
      className='border border-black-500 py-2 px-2 m-2'
      />
      <button
      onClick={()=>senddata()}
      className='border py-2 px-2'
      >add</button>

    
      {fulldata.map((n)=>(
        <div key={n.id}>
          <h1 className='text-xl font-bold '>{n.name}</h1>

          <button onClick={()=>handledelete(n.id)}
            className='border py-1 px-1 bg-red-500 mb-7'
          >delete</button>
        </div>
      ))}
      
        <hr />
        <h1 className='text-2xl font-bold'>trash</h1>

        <br /><hr />
        {trash.map((n)=>(
          <div key={n.id}>
            <h1 className='text-2xl font-bold'>{n.name}</h1>
            <button onClick={()=>handleundo(n)}className='border py-2 px-2 bg-blue-500 mb-7'>undo</button>
          </div>
        ))}     
    </div>
  )
}

export default Todo
























