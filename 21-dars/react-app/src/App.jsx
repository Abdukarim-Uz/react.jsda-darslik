import { Route, Routes } from "react-router-dom"
import Navbar from "./assets/components/navbar/Navbar"
import { lazy } from "react"

const Home = lazy(() => import("./assets/pages/home/Home"))
const NotFound = lazy(() => import("./assets/pages/notFound/NotFound"))

function App() {
  return (
    <div className="max-w-480 w-full mx-auto h-auto" >
      <div className="max-w-480 w-full mx-auto h-auto  bg-white pl-93.75 pr-93.75 top-0 left-0" >
        <Navbar />
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </div >
  )
}

export default App