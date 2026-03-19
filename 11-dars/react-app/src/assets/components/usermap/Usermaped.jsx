import './usermaped.css'
import { FaBagShopping, FaTrashCan } from 'react-icons/fa6'
import { FaEdit } from 'react-icons/fa'
import { nanoid } from 'nanoid/non-secure'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import Modal from '../modal/Modal'

function Usermaped({ users, trasheds, setTrasheds }) {

    const navigate = useNavigate()

    const [hidden, setHidden] = useState(false)


    const [finditem, setFinditem] = useState()


    const trashed = (item) => {

        const dataobj = {
            id: nanoid(5),
            ism: item.ism,
            tel: item.tel,
        }
        setTrasheds([...trasheds, dataobj])
        navigate('/savatcha')


    }


    const edited = (id) => {



        setHidden(!hidden)

        const finded = users.find(item => item.id === id)

        setFinditem(finded)
    }


    return (
        <div>

            {hidden ? <Modal users={users}  finditem={finditem} hidden={hidden} setHidden={setHidden} /> :

                <table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>ism</th>
                            <th>tel</th>
                            <th>amallar</th>
                            <th>id</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            users.map((item, index) => (

                                <tr key={item.id} >
                                    <td>{index + 1}</td>
                                    <td>{item.ism}</td>
                                    <td>{item.tel}</td>
                                    <td>
                                        <button>
                                            <FaBagShopping onClick={() => trashed(item)} className='iconTrash' />
                                        </button>
                                        <button>
                                            <FaEdit className='edit' onClick={() => edited(item.id)} />
                                        </button>
                                    </td>
                                    <td>{item.id}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            }
        </div>
    )
}

export default Usermaped