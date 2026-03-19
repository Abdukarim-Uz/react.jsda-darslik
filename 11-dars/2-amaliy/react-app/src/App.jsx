

import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './assets/components/navbar/Navbar'
import Home from './assets/pages/home/Home'
import Products from './assets/pages/products/Products'
import Users from './assets/pages/users/users'
import Login from './assets/pages/login/Login'
import Register from './assets/pages/register/Register'
import Basket from './assets/pages/bag/Basket'
import { useState } from 'react'
import { productsdata } from './assets/data/mahsulotlar/mahsulotlardata'


function App() {

  const [users, setUsers] = useState([])

  const [basket, setBasket] = useState([])



  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Products basket={basket} setBasket={setBasket} productsdata={productsdata} />} />
        <Route path='/users' element={<Users users={users} setUsers={setUsers} />} />
        <Route path='login' element={<Login />} />
        <Route path='/register' element={<Register users={users} setUsers={setUsers} />} />
        <Route path='/basket' element={<Basket basket={basket} setBasket={setBasket} />} />
      </Routes>
    </div>
  )
}

export default App