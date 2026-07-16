import React, { useEffect, useState } from 'react'

const Todo = () => {
    const [signel ,setsignel]=useState("black");

    useEffect(()=>{
         const color=["green","red","yellow"];
         var index=0;
        const interval=setInterval(() => {
            index=(index+1)%color.length;
            setsignel(color[index]);
        },2000);
        return ()=>clearInterval(interval);
    },[])
  return (
    <div className='w-[100px] h-[200px] flex flex-col items-center justify-center gap-3 m-8 bg-gray-500'>
    <div
    className='w-[30px] h-[30px] rounded-full'
    style={{
       backgroundColor:signel==="green"?"green":"black"
    }}></div>

    <div
    className='w-[30px] h-[30px] rounded-full'
    style={{
       backgroundColor:signel==="red"?"red":"black"
    }}></div>

    <div
    className='w-[30px] h-[30px] rounded-full'
    style={{
        backgroundColor:signel==="yellow"?"yellow":"black"
    }}></div>

      
    </div>
  )
}

export default Todo


