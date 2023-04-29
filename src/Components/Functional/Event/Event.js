import React from 'react'

function Event() {
    function hello() {
        alert('Hello React!')
    }
  return (
    <div>
        <h1>Hello React !</h1>
        <button onClick={hello}>Click</button>
    </div>
  )
}

export default Event