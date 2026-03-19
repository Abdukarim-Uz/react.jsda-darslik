import { lazy } from "react"
import Navbar from "./assets/components/navbar/Navbar"
import { Route, Routes } from "react-router-dom"
import { ToastContainer } from "react-toastify"

const Home = lazy(() => import('./assets/pages/home/Home'))
const Basket = lazy(() => import('./assets/pages/basket/Basket.jsx'))

function App() {
  return (
    <div className=" bg-black1  border min-h-screen h-auto mx-auto" >
      <div className="container border mx-auto" >
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/basket" element={<Basket />} />
      </Routes>

      <ToastContainer autoClose={1000} limit={3} theme="colored" />
    </div>
  )
}

export default App