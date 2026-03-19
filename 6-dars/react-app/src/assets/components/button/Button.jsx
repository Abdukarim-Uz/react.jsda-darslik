import React, { useState } from 'react'

import "./button.css"

function Button() {
    const [hide,setHide] = useState(false)


    return (
        <div className='img' style={{marginBottom:"100px"}} >

            <button onClick={ ()=> setHide(!hide)} >show</button>

            {
                hide ? <img src="https://img3.wallspic.com/crops/7/3/3/9/7/179337/179337-8k_nature-nature-tablet-water-water_resources-7680x4320.jpg" alt="" />:""
            }
            

        </div>
    )
}

export default Button