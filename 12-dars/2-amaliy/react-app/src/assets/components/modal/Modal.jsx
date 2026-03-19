import { IoIosExit } from 'react-icons/io'
import './modal.css'
import { useState } from 'react'

function Modal({ newProducts, setNewProducts, setHiddenModal, findItemModal }) {
    const [createProductName, setCreateProductName] = useState(findItemModal.nom || '')

    const [createProductCount, setCreateProductCount] = useState(findItemModal.miqdor || '')

    const [createProductPrice, setCreateProductPrice] = useState(findItemModal.narx || '')

    const [createProductImage, setCreateProductImage] = useState(findItemModal.rasmLink || '')

    const [createProductDescription, setCreateProductDescription] = useState(findItemModal.info || info)

    const hiddenModal = () => {

        setHiddenModal(false)
    }


    const updateDataItem = (event) => {
        event.preventDefault();
        setHiddenModal(false)

        const dataobj = {
            id: findItemModal.id,
            nom: createProductName,
            miqdor: createProductCount,
            narx: createProductPrice,
            rasmLink: createProductImage,
            info: createProductDescription

        }


        setNewProducts(newProducts.map(item => item.id === findItemModal.id ? dataobj : item))
    }
    return (
        <div className='modal' >
            <button className='btn-exit' ><IoIosExit className='exit' onClick={hiddenModal} /></button>
            <form className='Form-modal' onSubmit={updateDataItem} >
                <input
                    type="text"
                    required
                    placeholder='nomi...'
                    name='nom'
                    defaultValue={findItemModal.nom}
                    onChange={(e) => setCreateProductName(e.target.value)}
                />
                <input
                    type="number"
                    required
                    placeholder='soni...'
                    name='son'
                    min={0}
                    defaultValue={findItemModal.miqdor}
                    onChange={(e) => setCreateProductCount(e.target.value)}
                />
                <input
                    type="number"
                    required
                    placeholder='narxi..'
                    name='narx'
                    min={0}
                    defaultValue={findItemModal.narx}
                    onChange={(e) => setCreateProductPrice(e.target.value)}

                />
                <input
                    type="text"
                    required
                    placeholder='url...'
                    name='url'
                    defaultValue={findItemModal.rasmLink}
                    onChange={(e) => setCreateProductImage(e.target.value)}
                />
                <textarea
                    defaultValue={findItemModal.info}
                    required
                    name="about"
                    onChange={(e) => setCreateProductDescription(e.target.value)}  >

                </textarea>
                <button>kirit</button>
            </form>
        </div>
    )
}

export default Modal