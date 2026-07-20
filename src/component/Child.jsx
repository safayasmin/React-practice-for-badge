import React from 'react'

const Child =React.memo(function Child({name}){
     console.log("name created");
     return <h1>name is {name}</h1>
})

export default Child
