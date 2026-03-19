import { Route, Routes } from "react-router-dom"
import Navbar from "./assets/components/navbar/Navbar"
import { lazy, useState } from "react"

const Home = lazy(() => import("./assets/pages/home/Home"))

const Products = lazy(() => import("./assets/pages/products/Products"))


const Basket = lazy(() => import("./assets/pages/basket/Basket"))





function App() {



  const friends: string[] = ["abdukarim", "sardor"]

  const isLogged: boolean = false

  const user: string = "aziz"

  const paid: boolean = true

  return (
    <div className="container py-10 px-15 w-full min-h-screen h-auto  mx-auto " >

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Products />} />
        <Route path="/basket" element={<Basket friends={friends} isLogged={isLogged} user={user} paid={paid} />} />
      </Routes>
    </div>
  )
}

export default App