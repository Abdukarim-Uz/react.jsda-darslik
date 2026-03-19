import { Route, Routes, useSearchParams } from 'react-router-dom'
import './App.css'
import Navbar from './assets/components/navbar/Navbar'
// import Home from './assets/pages/home/Home'
// import Products from './assets/pages/products/Products'
// import Sevimlilar from './assets/pages/sevimlilar/Sevimlilar'
import { lazy, useState } from 'react'
import { ToastContainer } from 'react-toastify'
const Home = lazy(() => import('./assets/pages/home/Home.jsx'))
const Products = lazy(() => import('./assets/pages/products/Products.jsx'))
const Sevimlilar = lazy(() => import('./assets/pages/sevimlilar/Sevimlilar.jsx'))
const NotFound = lazy(() => import('./assets/pages/NotFound/NotFound.jsx'))
const Basket = lazy(() => import('./assets/pages/basket/Basket.jsx'))

function App() {
  const [basketProdutcs, setBasketProducts] = useState([])
  const [likeProdutcs, setLikeProducts] = useState([])
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Products basketProdutcs={basketProdutcs} setBasketProducts={setBasketProducts} likeProdutcs={likeProdutcs} setLikeProducts={setLikeProducts} />} />
        <Route path='/sevimlilar' element={<Sevimlilar setLikeProducts={setLikeProducts} likeProdutcs={likeProdutcs} />} />
        <Route path='/*' element={<NotFound />} />
        <Route path='/basket' element={<Basket likeProdutcs={likeProdutcs} setLikeProducts={setLikeProducts} basketProdutcs={basketProdutcs} setBasketProducts={setBasketProducts} />} />
      </Routes>


      <ToastContainer autoClose={1000} limit={3} pauseOnHover={false} theme={'colored'} />
    </div>
  )
}

export default App