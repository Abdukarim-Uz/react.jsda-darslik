import React from 'react'

import './home.css'
import Card from '../../components/card/Card'

function Home({ bags, setBags }) {
    return (
        <div className='producst-home' >
            <Card bags={bags} setBags={setBags} />
        </div>
    )
}

export default Home