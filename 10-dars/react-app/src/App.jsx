import './App.css'
import Asosiy from './assets/pages/asosiy/Asosiy'
import Navbar from './assets/components/navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Kinolar from './assets/pages/kinolar/Kinolar'
import Login from './assets/pages/login/Login'
import { useState } from 'react'


function App() {
  const [nomiDisplay, setNomiDisplay] = useState()
  const [urlDisplay, setUrlDisplay] = useState()
  const [optionDisplay, setOptionDisplay] = useState()
  const [kinolar, setKinolar] = useState([])
  const [malumot, setMalumot] = useState([])




  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Asosiy malumot={malumot} />} />
        <Route path='/kinolar' element={<Kinolar kinolar={kinolar} />} />
        <Route path='/login' element={<Login malumot={malumot} setMalumot={setMalumot} kinolar={kinolar} setNomiDisplay={setNomiDisplay} setUrlDisplay={setUrlDisplay} setOptionDisplay={setOptionDisplay} setKinolar={setKinolar} />} />
      </Routes>
    </div>
  )
}

export default App
