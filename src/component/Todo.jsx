import React, { useEffect, useState } from 'react'
import axios from 'axios';

const Todo = () => {
    const [name,setname]=useState("");
    const [email,setemail]=useState("");
    const [user,setuser]=useState([]);
    const [editId,seteditId]=useState(null)
    const [search,setsearch]=useState("");


    useEffect(()=>{
    getdata();
    },[]);

    const getdata=async()=>{
        const res=await axios.get("http://localhost:5000/users");
        setuser(res.data);
    }

   
    const handleaddclick=async()=>{
        const updateuser={
            name:name,
            email:email
        }
        if(editId){
            await axios.put(`http://localhost:5000/users/${editId}`,
              updateuser
            );
            seteditId(null);
        }else{
             await axios.post(`http://localhost:5000/users`,
             updateuser
             );
              getdata();
              setname("");
              setemail("");
        }
    }

    const handledelete=async(id)=>{
        const res=await axios.delete(`http://localhost:5000/users/${id}`);
        setuser(res.data);

        getdata("")
    }

    const handleedit=async(user)=>{
           setname(user.name);
           setemail(user.email);
           seteditId(user.id);

        const res=await axios.put(`http://localhost:5000/users/${id}`);
        getdata("")  
    }

    const handlesearch=user.filter((n)=>(
        n.name.toLowerCase().includes(search.toLowerCase()) ||
        n.email.toLowerCase().includes(search.toLowerCase()) 
    ));
 
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
        
        <button
        onClick={()=>handleaddclick()}
        className='border border-black-500 py-2 px-2 ml-3'
        >{editId ?"update":"add"}</button>
        <br />

        <input
        type='text'
        placeholder='search......'
        value={search}
        onChange={(e)=>setsearch(e.target.value)} 
        className='border border-black-500 m-2 py-2 px-2'
        />


        <br /><br /><br />

        <hr />
        <h1 className='text-2xl font-bold tracking-[2px]'>DATA IS </h1>
        <br />
        {handlesearch.map((n)=>(
            <div key={n.id}>
                <h1 className='text-bold text-xl'>{n.name}</h1>
                <h1 className='text-bold text-xl'>{n.email}</h1>

                <button
                onClick={()=>handledelete(n.id)}
                className='border border-red-500 py-1 px-2 mb-5'
                >
                    delete
                </button>
                <button
                onClick={()=>handleedit(n)}
                className='border border-yellow-500 py-2 px-2 ml-4 bg-yellow-500 '
                >edit</button>
            </div>
        ))}
    </div>
  )
}

export default Todo

