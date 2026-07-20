
import React, { useState } from 'react'
import Child from './component/Child'

const App = () => {
  const [count,setcount]=useState(0)
  const [name]=useState("shifaaaa")
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={()=>setcount(count+1)}>+</button>
      <button onClick={()=>setcount(count-1)}>-</button>
      <Child name={name} />
    </div>
  )
}

export default App
