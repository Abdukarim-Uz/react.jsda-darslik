import { Route, Routes } from "react-router-dom"
import Navbar from "./assets/components/navbar/Navbar"
import { lazy } from "react"
import { ToastContainer } from "react-toastify"

const Home = lazy(() => import("./assets/pages/home/Home"))
const Basket = lazy(() => import("./assets/pages/basket/Basket"))
const Login = lazy(() => import("./assets/pages/login/Login"))

function App() {
  return (
    <div className=" bg-gray-800" >

      <div className="container mx-auto min-h-screen  px-10 py-2 "  >
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/basket" element={<Basket />} />
        </Routes>
      </div>
      <ToastContainer autoClose={1000} theme="colored" />
    </div>
  )
}

export default App