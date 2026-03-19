import { lazy, useRef, useState } from 'react'
import './App.css'
import Navbar from './assets/components/navbar/Navbar'
import { Route, Routes, useSearchParams } from 'react-router-dom'
import { GoContainer } from 'react-icons/go'
import { ToastContainer } from 'react-toastify'

const Home = lazy(() => import("./assets/pages/home/Home.jsx"))
const Products = lazy(() => import("./assets/pages/products/Products.jsx"))
const Users = lazy(() => import("./assets/pages/users/Users.jsx"))
const NotFound = lazy(() => import("./assets/pages/notFound/NotFound.jsx"))
const Detail = lazy(() => import("./assets/pages/detail/Detail.jsx"))
const Basket = lazy(() => import("./assets/pages/basket/Basket.jsx"))
const Sevimlilar = lazy(() => import("./assets/pages/sevimlilar/Sevimlilar.jsx"))

function App() {

  const [newBasket, setNewBasket] = useState([])
  const [likeProducts, setLikeProducts] = useState([])
  const [numberArray, setNumberArray] = useState([])
  return (
    <div>
      <Navbar numberArray={numberArray} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Products likeProducts={likeProducts} setLikeProducts={setLikeProducts} />} />
        <Route path='/users' element={<Users />} />
        <Route path='/detail/:id' element={<Detail numberArray={numberArray} setNumberArray={setNumberArray} newBasket={newBasket} setNewBasket={setNewBasket} />} />
        <Route path='/sevimlilar' element={<Sevimlilar likeProducts={likeProducts} setLikeProducts={setLikeProducts} />} />
        <Route path='/basket' element={<Basket setNumberArray={setNumberArray} numberArray={numberArray} newBasket={newBasket} setNewBasket={setNewBasket} likeProducts={likeProducts} setLikeProducts={setLikeProducts} />} />
        <Route path='/*' element={<NotFound />} />

      </Routes>
      <ToastContainer autoClose={1000} theme='colored' pauseOnHover={false} limit={2} />

    </div>
  )
}

export default App