
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './assets/components/navbar/Navbar'
import Home from './assets/pages/home/Home'
import MovieShows from './assets/pages/Movies&Shows/MovieShows'
import Subscriptions from './assets/pages/Subscriptions/Subscriptions'
import Support from './assets/pages/Support/Support'

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Movies-Shows' element={<MovieShows />} />
        <Route path='/subscriptions' element={<Subscriptions />} />
        <Route path='/Support' element={<Support />} />
      </Routes>
    </div>
  )
}

export default App