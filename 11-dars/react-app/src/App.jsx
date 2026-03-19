import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './assets/components/navbar/Navbar'
import Home from './assets/pages/homepage/Home'
import Login from './assets/pages/login/Login'
import Products from './assets/pages/productspage/Products'
import Register from './assets/pages/register/Register'
import Userspage from './assets/pages/userspage/Userspage'
import { useState } from 'react'
import Savatcha from './assets/pages/savatcha/Savatcha'

function App() {

  const [users, setUsers] = useState([])

  const [trasheds, setTrasheds] = useState([])

  const [bags,setBags] = useState([])
  

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home bags={bags} setBags={setBags} />} />
        <Route path='/login' element={<Login />} />
        <Route path='/products' element={<Products bags={bags}  setBags={setBags} />} />
        <Route path='/register' element={<Register users={users} setUsers={setUsers} />} />
        <Route path='/userpage' element={<Userspage users={users} setUsers={setUsers} trasheds={trasheds} setTrasheds={setTrasheds} />} />
        <Route path='/savatcha' element={<Savatcha trasheds={trasheds} setTrasheds={setTrasheds} />} />
      </Routes>

      
    </div>
  )
}

export default App