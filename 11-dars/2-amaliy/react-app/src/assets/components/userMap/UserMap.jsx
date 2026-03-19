import React, { useState } from 'react'

import './userMap.css'
import { FaEdit } from 'react-icons/fa'
import { BsBasket3Fill } from 'react-icons/bs'
import Modal from '../modal/Modal'
import { MdDelete } from 'react-icons/md'

function UserMap({ users, setUsers }) {
    const [hidden, setHidden] = useState(true)

    const [findItem, setFindItem] = useState()

    const finded = (id) => {
        setHidden(!hidden)

        const find = users.find(item => item.id === id)

        setFindItem(find)
    }

    const del = (id) => {

        const delItem = users.filter(item => item.id !== id)
        setUsers(delItem)

    }

    return (
        <div>

            {
                hidden ?
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
                                            <button className='icon' > <MdDelete className='basket' onClick={() => del(item.id)} /> </button>
                                            <button className='icon' > <FaEdit onClick={() => finded(item.id)} className='edit' /> </button>
                                        </td>
                                        <td>{item.id}</td>
                                    </tr>
                                ))
                            }

                        </tbody>
                    </table> : <Modal findItem={findItem} hidden={hidden} setHidden={setHidden} users={users} setUsers={setUsers} setFindItem={setFindItem} />

            }
        </div>
    )
}

export default UserMap