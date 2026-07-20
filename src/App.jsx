import React, { lazy, Suspense } from 'react'


const Safa=lazy(()=>import("./component/Child"));
const App = () => {
  return (
    <div>
      <h1>Home page</h1>
      <Suspense fallback={<h1>loding......</h1>}>
      <Safa />
      </Suspense>
   
    </div>
  )
}

export default App
