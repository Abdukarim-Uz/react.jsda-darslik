
import './App.css'
import Navbar from './assets/components/Navbar/Navbar'
import Product from './assets/pages/product/product'
import Kinolar from './assets/pages/kinolar/kinolar'
import Login from './assets/pages/login/Login'
import { Route, Routes } from 'react-router-dom'
import Asosiy from './assets/components/Asosiy/Asosiy'
import Register from './assets/pages/Register/Register'
import Card from './assets/pages/details/Card/Card'
import Movies from './assets/pages/details/Movies/Movies'


function App() {

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Asosiy />} />
        <Route path='/product' element={<Product />} />
        <Route path='/kinolar' element={<Kinolar />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/card/:id' element={<Card  />} />
        <Route path='/movies/:id' element={<Movies />} />
      </Routes>

    </div>
  )
}

export default App