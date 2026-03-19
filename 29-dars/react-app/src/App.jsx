import { Route, Routes } from "react-router-dom"
import { lazy } from "react"
import Prodected from "./prodected/Prodected"
import { ToastContainer } from "react-toastify"


const Home = lazy(() => import("./assets/pages/home/Home"))

const Login = lazy(() => import("./assets/pages/login/Login"))

const Register = lazy(() => import("./assets/pages/register/Register"))

const Products = lazy(() => import("./assets/pages/products/Products"))

const NotFound = lazy(() => import("./assets/pages/notfound/NotFound"))


function App() {
  return (
    <div className="w-full min-h-screen p-5 *:text-white bg-slate-800 h-auto" >

      <Routes>
        <Route element={<Prodected />} >
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      <ToastContainer autoClose={1000} pauseOnHover={false} theme="colored" />
    </div>
  )
}

export default App