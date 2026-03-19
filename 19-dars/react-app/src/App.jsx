import { lazy, use, useState } from 'react'
import './App.css'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Navbar from './assets/comnponents/navbar/Navbar'
import { toast, ToastContainer } from 'react-toastify'
import axios from 'axios'

const Home = lazy(() => import("./assets/pages/home/Home"))
const Detail = lazy(() => import("./assets/pages/detail/Detail"))
const NotFound = lazy(() => import("./assets/pages/not-found/NotFound"))
const Products = lazy(() => import("./assets/pages/products/Products"))

function App() {
  const navigat = useNavigate()
  const removeItem = async (item) => {


    try {
      const { status } = await axios.delete(` http://localhost:8000/talabalar/${item.id}`);
      if (status) {
        toast.success("usr o'chirildi !!")
        navigat(-1)
      }
    } catch (err) {
      console.log(err)
    }
  }

  
  return (
    <div>
      <div className="container-navbar">

        <Navbar />
      </div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/detail/:id' element={<Detail removeItem={removeItem} />} />
        <Route path='/*' element={<NotFound />} />
        <Route path='/products' element={<Products />} />
      </Routes>
      <ToastContainer
        position='top-right'
        pauseOnHover={false}
        autoClose={500}
        theme='colored'
      />
    </div>
  )
}

export default App