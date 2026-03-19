import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './assets/pages/home/Home'
import Navbar from './assets/components/navbar/Navbar'
import Kirish from './assets/pages/kirish/Kirish'
import Saralangan from './assets/pages/saralangan/Saralangan'
import Savatcha from './assets/pages/savatcha/savatcha'
import NotFound from './assets/pages/notfound/NotFound'
import Katalog from './assets/pages/katalog/Katalog'
import { useState } from 'react'
import { Mahsulotlar } from './assets/data/mahsulotlar'

function App() {
  const [hiddenbutton, setHiddenbutton] = useState(false)
  const [hiddenbtn, setHiddenbtn] = useState(false)
  const [counterShop, setCountershop] = useState(0)
  const [likeProducts, setLikeProducts] = useState([])
  const [basketPrducts, setBasketProducts] = useState([])



  console.log(basketPrducts)
  return (
    <div>
      <Navbar setHiddenbtn={setHiddenbtn} counterShop={counterShop} setHiddenbutton={setHiddenbutton} />
      <Routes>
        <Route path='/' element={<Home basketPrducts={basketPrducts} setBasketProducts={setBasketProducts} likeProducts={likeProducts} setLikeProducts={setLikeProducts} setCountershop={setCountershop} counterShop={counterShop} setHiddenbtn={setHiddenbtn} hiddenbutton={hiddenbutton} setHiddenbutton={setHiddenbutton} />} />
        <Route path='/kirish' element={<Kirish />} />
        <Route path='/saralangan' element={<Saralangan likeProducts={likeProducts} setCountershop={setCountershop} counterShop={counterShop} setHiddenbutton={setHiddenbutton} hiddenbutton={hiddenbutton} hiddenbtn={hiddenbtn} setHiddenbtn={setHiddenbtn} />} />
        <Route path='/savatcha' element={<Savatcha basketPrducts={basketPrducts} />} />
        <Route path='/*' element={<NotFound />} />
        <Route path='/katalog' element={<Katalog />} />
      </Routes>
    </div>
  )
}

export default App