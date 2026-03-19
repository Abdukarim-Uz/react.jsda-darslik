import React, { useState } from 'react'
import './App.css'
import Navbar from './assets/components/navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './assets/pages/home/Home'
import Kinolar from './assets/pages/kinolar/Kinolar'
import Login from './assets/pages/login/Login'

function App() {

  const [movies, setMovies] = useState([])
  const [data, setdata] = useState([])



  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home data={data} />} />
        <Route path='/kinolar' element={<Kinolar movies={movies} />} />
        <Route path='/login' element={<Login movies={movies} setMovies={setMovies} data={data} setdata={setdata} />} />
      </Routes>
    </div>
  )
}

export default App