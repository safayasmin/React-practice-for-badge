import React from 'react'
import { Link, useParams } from 'react-router-dom'

const User = () => {
    const {id}=useParams();
   
  return (
  <div>
     <h1 className='text-2xl font-bold'>user id is :{id}</h1>
      <Link to="/home" className='text-xl text-blue-500'>go to home</Link>
  </div>
    
       
  )
}

export default User
