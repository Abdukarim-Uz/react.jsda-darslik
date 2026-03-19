import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './assets/components/navbar/Navbar'
import Asosiy from './assets/pages/asosiy/Asosiy'
import Saralangan from './assets/pages/saralangan/saralangan'
import { lazy } from 'react'

const asosiylar = lazy(() => import("../../react-app/src/assets/pages/asosiy/Asosiy"))
const saralanganlar = lazy(() => import("../../react-app/src/assets/pages/saralangan/Saralangan"))

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Asosiy />} />
        <Route path='/saralangan' element={<Saralangan />} />
      </Routes>
    </div>
  )
}

export default App