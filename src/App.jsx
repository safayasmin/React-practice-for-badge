import React from 'react'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Home  from './component/Home'
import User from './component/User'


const App = () => {
  return (
    <div>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}/>
       <Route path="/home" element={<Home />}/>
       <Route path='/user/:id' element={<User />}/>
    </Routes>
    </BrowserRouter>
      
    </div>
  )
}

export default App
