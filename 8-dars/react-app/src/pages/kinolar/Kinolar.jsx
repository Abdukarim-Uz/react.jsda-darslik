import React from 'react'

import { movies } from '../../data/kinolar.js'

import "./Kinolar.css"

function Kinolar() {

    return (
        <div className='box' >

            {
                movies.map((item) => (

                    <div className="card" key={item.movieId}>
                        <img src={item.rasm} alt={item.movieTitle} />
                        <h1>{item.movieTitle}</h1>
                    </div>
                ))
            }

        </div>
    )
}

export default Kinolar