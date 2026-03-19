import { Route, Routes } from "react-router-dom"
import Navbar from "./assets/components/navbar/Navbar"
import { lazy } from "react"
import Prodected from "./assets/pages/prodected/Prodected"
import { ToastContainer } from "react-toastify"

const Home = lazy(() => import("./assets/pages/home/Home"))

const Register = lazy(() => import("./assets/pages/register/Register"))

const Login = lazy(() => import("./assets/pages/login/Login"))

const Basket = lazy(() => import("./assets/pages/basket/Basket"))

const Otp = lazy(() => import("./assets/pages/otp/Otp"))

function App() {
  return (
    <div className="bg-slate-900 min-h-screen h-auto text-white " >

      <Routes>
        <Route element={<Prodected />} >
          <Route path="/basket" element={<Basket />} />
          <Route path="/" element={<Home />} />
        </Route>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/otp" element={<Otp />} />
      </Routes>

      <ToastContainer autoClose={2000} pauseOnHover={false} theme="colored" />
    </div>
  )
}

export default App