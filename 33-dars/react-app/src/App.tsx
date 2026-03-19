import { Route, Routes } from "react-router-dom"
import Navbar from "./assets/components/navbar/Navbar"
import { lazy } from "react"


const Home = lazy(() => import("./assets/pages/home/Home"))

const Products = lazy(() => import("./assets/pages/products/Products"))

function App() {
  return (
    <div className="main-container">
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </div>
  )
}

export default App