import { Route, Routes } from "react-router-dom"
import Navbar from "./components/navbar/Navbar"
import { lazy } from "react"

const Home = lazy(() => import("./pages/home/Home"))

const Users = lazy(() => import("./pages/users/Users"))

function App() {


  return (
    <div className="bg-slate-900  " >
      <div className="container py-7 mx-auto min-h-screen font-mono text-white " >
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<Users />} />
          <Route path="/*" element={<Home />} />
        </Routes>
      </div>
    </div>
  )
}

export default App