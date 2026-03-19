import { IoIosExit } from 'react-icons/io'
import './modal.css'
import { useState } from 'react';

function Modal({ products, setProducts, finded, hiddenshow, setHiddenShow }) {

    const [yangiNom, setYangiNom] = useState(finded.nom || '')
    const [yangiSon, setYangiSon] = useState(finded.son || '')
    const [yangiNarx, setYangiNarx] = useState(finded.narx || '')
    const [yangiUrl, setYangiUrl] = useState(finded.url || '')
    const [yangiInfo, setYangiInfo] = useState(finded.about || '')



    const hiddenshowed = (event) => {
        event.preventDefault();
        setHiddenShow(true)


        const data = {
            id: finded.id,
            nom: yangiNom,
            son: yangiSon,
            narx: yangiNarx,
            url: yangiUrl,
            about: yangiInfo
        }
        setProducts(products.map(item => item.id === finded.id ? data : item))



    }


    return (
        <div className='modal' >
            <button className='btn-exit' >
                <IoIosExit onClick={() => setHiddenShow(true)} className='modal-exit' />
            </button>
            <form className={`time ${!hiddenshow && 'form'}`} onSubmit={hiddenshowed} >
                <input
                    type="text"
                    required
                    placeholder='mahsulot nomi...'
                    name='nom'
                    onChange={(e) => setYangiNom(e.target.value)}
                    defaultValue={finded.nom}

                />
                <input
                    type="number"
                    required
                    placeholder='mahsulot soni'
                    name='son'
                    onChange={(e) => setYangiSon(e.target.value)}
                    defaultValue={finded.son}
                    min={0}

                />
                <input
                    type="number"
                    required
                    placeholder='mahsulot narxi'
                    name='narx'
                    onChange={(e) => setYangiNarx(e.target.value)}
                    defaultValue={finded.narx}
                    min={0}
                />
                <input
                    type="text"
                    required
                    placeholder='url ...'
                    name='url'
                    onChange={(e) => setYangiUrl(e.target.value)}
                    defaultValue={finded.url}

                />
                <textarea
                    name="about"
                    required placeholder='mahsulot haqida'
                    onChange={(e) => setYangiInfo(e.target.value)}
                    defaultValue={finded.about}

                ></textarea>
                <button>kirit</button>
            </form>

        </div>
    )
}

export default Modal