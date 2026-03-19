
import Navbar from './components/navbar/Navbar'

import Main from './components/main/Main'

import Footer from './components/footer/Footer'

import './App.css'

function App() {

  return (
    <div>
      <Navbar/> 
      <div className="container">

      <Main/>
      </div>

      <Footer/>
    </div>
  )
}

export default App
