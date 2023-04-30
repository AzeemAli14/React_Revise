import React, { useState } from 'react'

function UserInput() {
    const [data, setData] = useState('')
    const [print, setPrint] = useState(false)
    function onChange(ev) {
        setData(ev.target.value)
        setPrint(false)
    }
    function printable() {
        setPrint(true)
    }
  return (
    <div>
        <h2>
            Enter your name
        </h2>
        <input type='text'onChange={onChange} />
        <button onClick={printable}>Print</button>
        <br/>
        {print?<span>Your name: <b>{data}</b></span>:null}
    </div>
  )
}

export default UserInput