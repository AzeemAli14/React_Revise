import React, { useState } from 'react'

function State() {
    const [data, setData] = useState("Javascript")
    function hello() {
        setData("I\'m using ReactJS")
    }
  return (
    <div>
        <h1>{data}</h1>
        <button onClick={hello}>Find Technology</button>
    </div>
  )
}

export default State