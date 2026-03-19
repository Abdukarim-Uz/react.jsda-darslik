import React, { useState } from 'react'

import '../mahsulot/mahsulot.css'
import { nanoid } from 'nanoid/non-secure';

function Move() {

    const [nomi, setNomi] = useState("");

    const [yili, setYili] = useState();

    const [davlat, setDavlati] = useState();

    const [info, setInfo] = useState("");

    const [link, setLink] = useState();

    const [kinolar, setKinolar] = useState([])


    const setProduct = (event) => {

        event.preventDefault();
        const newProduct = {
            nomi: nomi,
            url: link,
            yili: yili,
            davlat: davlat,
            info:info,
            id: nanoid(5)
        }
        setKinolar([...kinolar, newProduct])

        console.log(newProduct)
    }

    return (
        <div className="product">
            <form onSubmit={setProduct}>

                <img src={link} alt={nomi} />


                <label htmlFor="nomi">
                    <h5>kino nomi</h5>

                    <input type="text" onChange={(e) => setNomi(e.target.value)} placeholder='nomi...' id='nomi' required name='nomi' />
                </label>

                <label htmlFor="Davlat">
                    <h5>Davlati</h5>

                    <input type="text" onChange={(e) => setDavlati(e.target.value)} placeholder='davlati...' id='Davlati' required name='Davlati' />
                </label>


                <label htmlFor="yili">
                    <h5>yili</h5>

                    <input type="number" onChange={(e) => setYili(e.target.value)} placeholder='yili...' id='yili' required name='yili' />
                </label>

                <label htmlFor="url">
                    <h5>link</h5>

                    <input type="text" onChange={(e) => setLink(e.target.value)} placeholder='link...' id='url' required name='link' />
                </label>


                <textarea name="info" required onChange={(e)=>setInfo(e.target.value)} >

                </textarea>

                <button>kirit</button>
            </form>

            <div className="product-card-box">
                {
                    kinolar.map((item) => (
                        <div key={item.id} className="product-card">
                            <img src={item.url} alt={item.nomi} />

                            <h5>nomi:{item.nomi}</h5>
                            <h5>yili:{item.yili}</h5>
                            <h5>davlat:{item.davlat}</h5>
                            <p>haqida:{item.info}</p>
                        </div>
                    ))
                }


            </div>
        </div>
    )
}

export default Move