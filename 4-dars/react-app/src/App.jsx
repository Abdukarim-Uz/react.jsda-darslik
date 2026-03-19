
import { useState } from 'react'
import './App.css'
import Navbar from './assets/components/navbar/Navbar'
import Asosiy from './assets/components/asosiy/Asosiy'
import Footer from './assets/components/footer/Footer'

function App() {
  // const [son,setSon] = useState(0)
  // const add = ()=>{
  //   setSon(son+1)
  // }
  // const minus = ()=>{
  //   setSon(son-1)
  // }
  // const render = ()=>{
  //   setSon(0)
  // }
  return (
    <div>
      {/* <h1>{son}</h1> */}
      {/* <button onClick={minus} style={{backgroundColor:"red"}}>-</button>
      <button onClick={add} style={{backgroundColor:"green"}} >+</button>
      <button onClick={render} style={{backgroundColor:"green"}} >render</button> */}
      <Navbar/>
      <Asosiy/>
      <Footer/>
    </div>
  )
}

export default App
