import React, { useState } from 'react'

import "./parol.css"

function Parol() {

    const [one, setOne] = useState("")

    const [Two, setTwo] = useState("")

    return (
        <div>
            <input type="password" onChange={(e) => setOne(e.target.value)} placeholder='birinichi parol..' required name='one' />

            <input type="password" onChange={(e) => setTwo(e.target.value)} placeholder='ikkinchi parol..' required name='two' />



            {
                one === Two ? <h1>demak parol to'g'ri</h1> : <h1>parol noto'gri</h1>
            }

        </div>
    )
}

export default Parol