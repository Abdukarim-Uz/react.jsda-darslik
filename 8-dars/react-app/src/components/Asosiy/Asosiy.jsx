import React from 'react'


import './Asosiy.css'
import Navbar from './components/navbar/Navbar'
import { Routes, Route } from 'react-router-dom'
import Home from '../../pages/home/Home'
import Kinolar from '../../pages/kinolar/Kinolar'
import Login from '../../pages/login/Login'

function Asosiy() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Kinolar' element={<Kinolar />} />
        <Route path='/Login' element={<Login />} />
      </Routes>
    </div>
  )
}

export default Asosiy