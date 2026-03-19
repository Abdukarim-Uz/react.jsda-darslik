
import React from 'react'

import './kinolar.css'
import { Link } from 'react-router-dom'

function Kinolar({ movies }) {
    return (
        <div className='box' >

            {
                movies.map(item => (
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

export default Kinolar