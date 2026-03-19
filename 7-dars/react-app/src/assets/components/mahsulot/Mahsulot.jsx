import React, { useState } from 'react'

import "./mahsulot.css"
import { nanoid } from 'nanoid';

function Mahsulot() {

    const [nomi, setNomi] = useState("");

    const [soni, setSoni] = useState();

    const [narxi, setNarxi] = useState();

    const [link, setLink] = useState();

    const [mevalar, setMevalar] = useState([])


    const setProduct = (event) => {

        event.preventDefault();
        const newProduct = {
            nomi: nomi,
            narxi: narxi,
            soni: soni,
            url: link,
            jami: soni * narxi,
            id: nanoid(5)
        }
        setMevalar([...mevalar, newProduct])

        console.log(newProduct)
    }



    return (
        <div className="product">
            <form onSubmit={setProduct}>

                <label htmlFor="mahsulot">
                    <h5>mahsulot</h5>

                    <input type="text" onChange={(e) => setNomi(e.target.value)} placeholder='mahsulot...' id='mahsulot' required name='mahsulot' />
                </label>
                <label htmlFor="soni">
                    <h5>soni</h5>

                    <input type="number" onChange={(e) => setSoni(e.target.value)} placeholder='soni...' id='soni' required name='soni' />
                </label>
                <label htmlFor="narxi">
                    <h5>narxi</h5>

                    <input type="number" onChange={(e) => setNarxi(e.target.value)} placeholder='narxi...' id='narxi' required name='narxi' />
                </label>
                <label htmlFor="url">
                    <h5>link</h5>

                    <input type="text" onChange={(e) => setLink(e.target.value)} placeholder='link...' id='url' required name='link' />
                </label>

                <img src={link} alt={nomi} />

                <button>kirit</button>
            </form>

            <div className="product-card-box">
                {
                    mevalar.map((item) => (
                        <div key={item.id} className="product-card">
                            <img src={item.url} alt={item.nomi} />

                            <h5>nomi:{item.nomi}</h5>
                            <h5>soni:{item.soni}</h5>
                            <h5>narxi:{item.narxi}</h5>
                            <h5>narxi:{item.jami}</h5>

                        </div>
                    ))
                }


            </div>
        </div>
    )
}

export default Mahsulot