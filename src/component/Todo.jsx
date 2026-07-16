import React, { useState } from 'react'

const Todo = () => {
    const [color,setcolor]=useState("white");

    const greenclick=()=>{
        setcolor("green")
    }

    const yellowclick=()=>{
        setcolor("yellow")
    }

    const redclick=()=>{
        setcolor("red")
    }


    const whiteclick=()=>{
        setcolor("white")
    }
    
  return (
    <div
    style={{backgroundColor:color}}
    className='h-screen'
    >
        <h1 className='text-2xl font-bold tracking-[2px]'>Color change </h1>

        <button onClick={greenclick} className='border py-2 px-3 m-3'>Green</button>
        <button onClick={yellowclick} className='border py-2 px-3 ml-3'>yellow</button>
        <button onClick={redclick} className='border py-2 px-3 ml-3'>red</button>
        <button onClick={whiteclick} className='border py-2 px-3 ml-3'>white</button>
      
    </div>
  )
}

export default Todo
