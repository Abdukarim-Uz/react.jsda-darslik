import React from 'react'

import './App.css'
import Navbar from './assets/components/navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './assets/pages/Home/Home'
import Kinolar from './assets/pages/Kinolar/Kinolar'
import Products from './assets/pages/Products/Products'
import Register from './assets/pages/Register/Register'
import Login from './assets/pages/Login/Login'
import ProductsCards from './assets/pages/detail/productsCard/productsCards'
import MovieCard from './assets/pages/detail/Moviescard/MovieCard'

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/kinolar' element={<Kinolar />} />
        <Route path='/products' element={<Products />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/card/:id' element={<ProductsCards />} />
        <Route path='/moviecard/:id' element={<MovieCard/>} /> 
      </Routes>
    </div>
  )
}

export default App