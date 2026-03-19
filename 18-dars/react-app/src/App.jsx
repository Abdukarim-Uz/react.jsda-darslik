import { lazy } from 'react'
import './App.css'
import Navbar from './assets/components/navbar/Navbar'
import { Route, Routes } from 'react-router-dom'

const Home = lazy(() => import("./assets/pages/home/Home"))

const NamozVaqtlari = lazy(() => import("./assets/pages/namozVaqtlari/NamozVaqtlari"))

const Products = lazy(() => import("./assets/pages/products/Products"))

const NotFound = lazy(() => import("./assets/pages/notFound/NotFound"))

const Detail = lazy(() => import("./assets/pages/detail/Detail"))

function App() {
  return (

    <div className='container' >
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/namoz-vaqtlari' element={<NamozVaqtlari />} />
        <Route path='/products' element={<Products />} />
        <Route path='/detail/:id' element={<Detail />} />
        <Route path='/*' element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App