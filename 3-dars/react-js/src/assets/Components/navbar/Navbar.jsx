import React from 'react'

import './navbar.css'

function Navbar({name,age}) {
  return (
    <div className='navbar'>
      <h1>name:{name}</h1>
      <h1>age:{age}</h1>
    </div>
  )
}

export default Navbar