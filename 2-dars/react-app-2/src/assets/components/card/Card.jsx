import React from 'react'

import "./card.css"

function Card({ rasm, ism, yosh, bgcolor }) {



    return (
        <div style={{ backgroundColor:bgcolor }} className="card">
            <img src={rasm} alt={ism} />
            <h1>ismi: {ism}</h1>
            <h1>yosh: {yosh}</h1>

           
        </div>
    )
}

export default Card