import { useRoutes } from "react-router-dom"
import Navbar from "./components/navbar/Navbar"
import { routes } from "./routes/Routes"

function App() {

  const element = useRoutes(routes)

  return (
    <div className="bg-slate-900 mx-auto font-mono text-white w-full min-h-screen" >
      <div className="container min-h-screen py-5 border-white border mx-auto " >
        <Navbar />

        {element}

      </div>
    </div>
  )
}

export default App