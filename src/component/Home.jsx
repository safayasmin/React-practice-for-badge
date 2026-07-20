import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
        <h1 className='text-2xl font-bold'>Home page </h1>
        <Link to="/user/1" className='text-blue-500 text-xl'>user1</Link><br />
        <Link to="/user/2" className='text-blue-500 text-xl'>user2</Link><br />
        <Link to="/user/3" className='text-blue-500 text-xl'>user3</Link><br />
    </div>
  )
}

export default Home
