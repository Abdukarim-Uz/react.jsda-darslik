import React from 'react'
import { products } from '../../data/product'
import './asosiy.css'
import Card from '../card/Card'
import Navbar from '../navbar/Navbar'
function Asosiy() {
  return (
    <div>
      <Navbar name = {"sardor"} age = {12} />
      <Navbar name = {"azizbek"} age = {23} />
      <Navbar name = {"axrorbek"} age = {32} />
        <h1 style={{marginBottom:"30px"}} >div</h1>
      <div className="product">

        {products.map((item) => (
          <div key={item.id} className="products-card">
            <img src={item.rasmi} alt={item.module} />
            <h4>modeli:{item.module}</h4>
            <h4>narxi:{item.narxi}</h4>
          </div>
        ))}

      </div>

      <h1 style={{marginBottom:"30px"}} >component</h1>
      <div className="product">

      {
        products.map((item)=>(
          
          <Card key={item.id}  item = {item} />
        ))
      }
      </div>
    </div>
  )
}

export default Asosiy