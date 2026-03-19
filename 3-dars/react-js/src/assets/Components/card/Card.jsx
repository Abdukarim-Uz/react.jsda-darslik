import React from 'react'
// import "./card.css"
import "../asosiy/asosiy.css"

function Card({item}) {
  return (
         
    
            
              <div className="products-card">
                <img src={item.rasmi} alt={item.module} />
                <h4>modeli:{item.module}</h4>
                <h4>narxi:{item.narxi}</h4>
              </div>
          
    
         
  )
}

export default Card