import React, { useEffect, useState } from 'react'

const Todo = () => {
    const [color,setcolor]=useState("white");

    useEffect(()=>{
      const colors=["white","green","red","yellow"];
      var index=0;
      const interval=setInterval(() => {
        index=(index+1 )%colors.length;
        setcolor(colors[index]);
      }, 2000);
      return ()=>clearInterval(interval);
    },[])

  return (
    <div
    style={{
        backgroundColor:color
    }}
    className='h-screen'
    >
        <h1>{color}</h1> 
    </div>
  )
}

export default Todo
