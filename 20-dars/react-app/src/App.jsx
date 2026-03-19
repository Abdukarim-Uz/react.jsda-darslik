import { lazy } from 'react'
import './App.css'
import Navbar from './assets/components/navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

const Home = lazy(() => import("./assets/pages/home/Home"))
const Detail = lazy(() => import("./assets/pages/detail/Detail"))
const Kinolar = lazy(() => import("./assets/pages/kinolar/Kinolar"))
const NotFound = lazy(() => import("./assets/pages/notFound/NotFound"))
function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/detail/:id' element={<Detail />} />
        <Route path='/kinolar' element={<Kinolar />} />
        <Route path='/*' element={<NotFound />} />
      </Routes>
      <ToastContainer theme='colored' autoClose={300} />
    </div>
  )
}

export default App