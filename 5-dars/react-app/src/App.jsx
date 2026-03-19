import React, { useState } from 'react'
import "./App.css"

function App() {

  const [ism,setIsm] = useState("")

  const [display,setDisplay] = useState("")

  const bajar = ()=>{
    setDisplay(ism)
  }

  return (
    <div>
      <input 
      type="text"
      placeholder='isimni kiriting..'

      onChange={(e)=>setIsm(e.target.value)}
      />

      <button onClick={bajar} >kirit</button>

      <h1>{display}</h1>
    </div>
  )
}

export default App