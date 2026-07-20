import React, { useMemo, useState } from 'react'

const App = () => {
  const [count,setcount]=useState(0);
  const squar=useMemo(()=>{
    console.log("calculating.....");
    return count*count;
  },[count]);
  
  return (
    <div>
      <h1>usememo eg code </h1>
      <h1>{count}</h1>
      <h1>{squar}</h1>
      <button onClick={()=>setcount(count+1)}>+</button>
      <button onClick={()=>setcount(count-1)}>-</button>
    </div>
  )
}

export default App


