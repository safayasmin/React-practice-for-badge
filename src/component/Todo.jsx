import React, { useRef } from 'react'

const Todo = () => {
  const count=useRef(0);

  const handlecount=()=>{
    count.curent=count.curent+1;
    console.log(count.current)
  }
  return (
    <div>
      <h1 className='text-2xl font-bold'>ref is</h1>
      <button className='border py-4 px-3' onClick={handlecount}>add</button>
      
    </div>
  )
}

export default Todo
