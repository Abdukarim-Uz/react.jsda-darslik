import { Route, Routes } from "react-router-dom"
import Navbar from "./assets/components/navbar/Navbar"
import { lazy } from "react"
import { ToastContainer } from "react-toastify"

const Home = lazy(() => import("./assets/pages/home/Home"))

const Users = lazy(() => import("./assets/pages/users/Users"))

const NotFound = lazy(() => import("./assets/pages/notfound/NotFound"))




function App() {
  return (
    <div className="w-full min-h-300 h-auto *:text-white bg-slate-900 " >
      <div className="container mx-auto pt-5 px-5" >
        <Navbar />
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      <ToastContainer autoClose={2000} pauseOnHover={false} theme="colored" />
    </div>
  )
}

export default App