import React from 'react'

import './home.css'
import { Link } from 'react-router-dom'

function Home({ data }) {
  
  return (
    <div className='box' >

      {
        data.map(item => (
          <Link key={item.id} >
            <div className="card">
              <img src={item.url} alt={item.nomi} />
              <h3>{item.nomi}</h3>
            </div>
          </Link>
        ))
      }
    </div>
  )
}

export default Home