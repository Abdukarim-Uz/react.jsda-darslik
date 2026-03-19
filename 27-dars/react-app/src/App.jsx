import { Route, Routes } from "react-router-dom"
import Navbar from "./assets/components/navbar/Navbar"
import { lazy } from "react"

const Home = lazy(() => import("./assets/pages/home/Home"))

const Basket = lazy(() => import('./assets/pages/basket/Basket'))

const Products = lazy(() => import('./assets/pages/products/Products'))

function App() {
  return (
    <div className="bg-slate-800 w-full min-h-screen h-auto " >
      <div className="container h-auto mx-auto  text-white " >
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/basket" element={<Basket />} />
          <Route path="/products" element={<Products />} />
          <Route path="/*" element={<Home />} />
        </Routes>
      </div>
    </div>
  )
}

export default App