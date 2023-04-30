import React, { useState } from 'react'
import Students from './Students'

function Props() {
    const [number, setNumber] = useState(0)
    function num () {
       setNumber=(20)
    }
  return (
    <div className="props">
        <h1> Click the Button to find number of Students</h1>
        <button onClick={num}>Click here</button>
        <Students student= {number}/>
    </div>
  )
}

export default Props