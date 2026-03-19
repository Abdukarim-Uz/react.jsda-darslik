import { useState } from 'react';
import './admin.css'
import { nanoid } from 'nanoid';
import { FaEdit, FaTrash } from 'react-icons/fa';
import Modal from '../../components/modal/Modal';

function Admin({ newProducts, setNewProducts }) {
    const [createProductName, setCreateProductName] = useState()

    const [createProductCount, setCreateProductCount] = useState()

    const [createProductPrice, setCreateProductPrice] = useState()

    const [createProductImage, setCreateProductImage] = useState()

    const [createProductDescription, setCreateProductDescription] = useState()

    const [findItemModal, setFindItemModal] = useState()

    const [hiddenModal, setHiddenModal] = useState(false)

    const addArray = (event) => {
        event.preventDefault();

        const dataobj = {
            id: nanoid(5),
            nom: createProductName,
            miqdor: createProductCount,
            narx: createProductPrice,
            rasmLink: createProductImage,
            info: createProductDescription
        }

        setNewProducts([...newProducts, dataobj])

        event.target.reset()
    }

    const removeItem = (id) => {
        const filter = newProducts.filter(item => item.id !== id)
        setNewProducts(filter)
    }

    const editItem = (id) => {
        const findItem = newProducts.find(item => item.id === id)

        setFindItemModal(findItem)
        setHiddenModal(true)
    }
    return (
        <div className='admin' >

            {

                hiddenModal ? <Modal findItemModal={findItemModal} newProducts={newProducts} setNewProducts={setNewProducts} setHiddenModal={setHiddenModal} /> :
                    <form className='Form' onSubmit={addArray} >
                        <input
                            type="text"
                            required
                            placeholder='nomi...'
                            name='nom'
                            onChange={(e) => setCreateProductName(e.target.value)} />
                        <input
                            type="number"
                            required
                            placeholder='soni...'
                            name='son'
                            min={0}
                            onChange={(e) => setCreateProductCount(e.target.value)} />
                        <input
                            type="number"
                            required
                            placeholder='narxi..'
                            name='narx'
                            min={0}
                            onChange={(e) => setCreateProductPrice(e.target.value)} />
                        <input
                            type="text"
                            required
                            placeholder='url...'
                            name='url'
                            onChange={(e) => setCreateProductImage(e.target.value)} />
                        <textarea required name="about" onChange={(e) => setCreateProductDescription(e.target.value)} >

                        </textarea>
                        <button>kirit</button>
                    </form>

            }
            {

                newProducts.length === 0 ? <h2>mahsulot hali qo'shilmadi</h2> :

                    <table>
                        <thead>
                            <tr>
                                <th><h5>#</h5></th>
                                <th><h5>name</h5></th>
                                <th><h5>count</h5></th>
                                <th><h5>price</h5></th>
                                <th><h5>image</h5></th>
                                <th><h5>about</h5></th>
                                <th><h5>actions</h5></th>
                                <th><h5>id</h5></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                newProducts.map((item, index) => (

                                    <tr key={item.id} >
                                        <td><h5>{index + 1}</h5></td>
                                        <td><h5>{item.nom}</h5></td>
                                        <td><h5>{item.miqdor}</h5></td>
                                        <td><h5>{item.narx}</h5></td>
                                        <td><img src={item.rasmLink} alt={item.nom} /></td>
                                        <td><h5>{item.info}</h5></td>
                                        <td>
                                            <button> <FaTrash className='trash' onClick={() => removeItem(item.id)} /> </button>
                                            <button> <FaEdit className='edit' onClick={() => editItem(item.id)} /> </button>
                                        </td>
                                        <td><h5>{item.id}</h5></td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>

            }





        </div>
    )
}

export default Admin