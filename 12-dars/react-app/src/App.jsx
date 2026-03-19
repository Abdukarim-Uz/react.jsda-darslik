import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './assets/components/navbar/Navbar'
import Home from './assets/pages/home/Home'
import Admin from './assets/pages/admin/Admin'
import Basket from './assets/pages/basket/Basket'
import Sevimlilar from './assets/pages/sevimlilar/Sevimlilar'
import NotFound from './assets/pages/notFound/NotFound'
import { useState } from 'react'

function App() {

  const [products, setProducts] = useState([])

  const [basket, setBasket] = useState([])

  const [sevimlilar, setSevimlilar] = useState([])


  return (
    <div className='app' >
      <Navbar />
      <Routes>
        <Route path='/' element={<Home sevimlilar={sevimlilar} setSevimlilar={setSevimlilar} basket={basket} setBasket={setBasket} products={products} setProducts={setProducts} />} />
        <Route path='/admin' element={<Admin products={products} setProducts={setProducts} />} />
        <Route path='/basket' element={<Basket setSevimlilar={setSevimlilar} sevimlilar={sevimlilar} basket={basket} setBasket={setBasket} />} />
        <Route path='/sevimlilar' element={<Sevimlilar sevimlilar={sevimlilar} setSevimlilar={setSevimlilar} />} />
        <Route path='/*' element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App