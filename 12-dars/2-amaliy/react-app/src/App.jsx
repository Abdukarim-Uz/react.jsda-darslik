import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './assets/components/navbar/Navbar'
import Home from './assets/pages/home/Home'
import Admin from './assets/pages/admin/Admin'
import Basket from './assets/pages/basket/Basket'
import Login from './assets/pages/login/Login'
import NotFound from './assets/pages/notFound/NotFound'
import Sevimlilar from './assets/pages/sevimlilar/sevimlilar'
import { useState } from 'react'

function App() {
  const [newProducts, setNewProducts] = useState([])
  const [basket, setBasket] = useState([])
  const [sevimlilar, setSevimlilar] = useState([])

  const [login, setLogin] = useState("abdukarim")
  const [password, setPassword] = useState("12345678")
  const [hiddenAdmin, setHiddenAdmin] = useState(false)

  return (
    <div className='app' >
      <Navbar hiddenAdmin={hiddenAdmin} setHiddenAdmin={setHiddenAdmin} />
      <Routes>
        <Route path='/' element={<Home sevimlilar={sevimlilar} setSevimlilar={setSevimlilar} basket={basket} setBasket={setBasket} newProducts={newProducts} setNewProducts={setNewProducts} />} />
        <Route path='/admin' element={<Admin newProducts={newProducts} setNewProducts={setNewProducts} />} />
        <Route path='/basket' element={<Basket sevimlilar={sevimlilar} setSevimlilar={setSevimlilar}  basket={basket} setBasket={setBasket} />} />
        <Route path='/login' element={<Login login={login} password={password} hiddenAdmin={hiddenAdmin} setHiddenAdmin={setHiddenAdmin} />} />
        <Route path='/*' element={<NotFound />} />
        <Route path='/sevimlilar' element={<Sevimlilar sevimlilar={sevimlilar} setSevimlilar={setSevimlilar} />} />
      </Routes>
    </div>
  )
}

export default App
