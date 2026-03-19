import { use, useState } from 'react'
import { FaTrash, FaEdit } from "react-icons/fa";
import './admin.css'
import { nanoid } from 'nanoid'
import Modal from '../../components/modal/Modal';

function Admin({ products, setProducts }) {

    const [nom, setNom] = useState()
    const [son, setSon] = useState()
    const [narx, setNarx] = useState()
    const [url, setUrl] = useState()
    const [about, setAbout] = useState()

    const [hiddenshow, setHiddenShow] = useState(true)

    const [finded, setFinded] = useState()

    const handlerSubmit = (event) => {
        event.preventDefault();

        const dataobj = {
            id: nanoid(5),
            nom,
            son,
            narx,
            url,
            about,
        }
        setProducts([...products, dataobj])

        event.target.reset()
    }

    const trashed = (id) => {
        const filterItem = products.filter(item => item.id !== id)

        setProducts(filterItem)


    }

    const editModal = (id) => {
        setHiddenShow(!hiddenshow)
        const finditem = products.find(item => item.id === id)
        setFinded(finditem)

    }


    return (
        <>
            {
                hiddenshow ?
                    <div className='admin' >
                        <form className='form' onSubmit={handlerSubmit} >
                            <input
                                type="text"
                                required
                                placeholder='mahsulot nomi...'
                                name='nom'
                                onChange={(e) => setNom(e.target.value)}
                            />
                            <input
                                type="number"
                                required
                                placeholder='mahsulot soni'
                                name='son'
                                onChange={(e) => setSon(e.target.value)}
                                min={0}
                            />
                            <input
                                type="number"
                                required
                                placeholder='mahsulot narxi'
                                name='narx'
                                onChange={(e) => setNarx(e.target.value)}
                                min={0}
                            />
                            <input
                                type="text"
                                required
                                placeholder='url ...'
                                name='url'
                                onChange={(e) => setUrl(e.target.value)}
                            />
                            <textarea
                                name="about"
                                required placeholder='mahsulot haqida'
                                onChange={(e) => setAbout(e.target.value)}
                            ></textarea>
                            <button>kirit</button>
                        </form>




                        {
                            products.length === 0 ? <h1>mahsulot qo'shilmagan</h1> :
                                <table>
                                    <thead>
                                        <tr>
                                            <th>
                                                <h5>
                                                    #
                                                </h5>
                                            </th>
                                            <th>
                                                <h5>nom</h5>
                                            </th>
                                            <th>
                                                <h5>miqdor</h5>
                                            </th>
                                            <th>
                                                <h5>narx</h5>
                                            </th>
                                            <th>
                                                <h5>rasm</h5>
                                            </th>
                                            <th>
                                                <h5>info</h5>
                                            </th>
                                            <th>
                                                <h5>amallar</h5>
                                            </th>
                                            <th>
                                                <h5>id</h5>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {

                                            products.map((item, index) => (

                                                <tr key={item.id} >
                                                    <td>
                                                        <h5>{index + 1}</h5>
                                                    </td>
                                                    <td>
                                                        <h5>{item.nom}</h5>
                                                    </td>
                                                    <td>
                                                        <h5>{item.son}</h5>
                                                    </td>
                                                    <td>
                                                        <h5>{item.narx}</h5>
                                                    </td>
                                                    <td><img src={item.url} alt={item.nom} /></td>
                                                    <td>
                                                        <h5>{item.about}</h5>
                                                    </td>
                                                    <td>
                                                        <button>
                                                            <FaTrash className='trash' onClick={() => trashed(item.id)} />
                                                        </button>
                                                        <button>
                                                            <FaEdit className='edit' onClick={() => editModal(item.id)} />
                                                        </button>
                                                    </td>
                                                    <td>
                                                        <h5>{item.id}</h5>
                                                    </td>
                                                </tr>
                                            ))
                                        }
                                    </tbody>
                                </table>
                        }


                    </div> :
                    <Modal products={products} setProducts={setProducts} setFinded={setFinded}  finded={finded} hiddenshow={hiddenshow} setHiddenShow={setHiddenShow} />
            }


        </>
    )
}

export default Admin