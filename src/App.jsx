import React, { useReducer } from 'react'
import Reducer from './component/Todo';

const App = () => {
  const [state,dispatch]=useReducer(Reducer ,{count:0});
  return (
    <div>
      <h1 className='text-2xl font-bold'>{state.count}</h1>
      <button className='border py-3 px-3 m-3' onClick={()=>dispatch({type:"inc"})}>+</button>
      <button className='border py-3 px-3 m-3'  onClick={()=>dispatch({type:"dec"})}>-</button>
    </div>
  )
}

export default App
