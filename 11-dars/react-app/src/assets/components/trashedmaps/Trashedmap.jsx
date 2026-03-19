import React from 'react'

import './trashedmap.css'
import { FaEdit } from 'react-icons/fa'
import { FaTrashCan } from 'react-icons/fa6'
function Trashedmap({ trasheds, setTrasheds }) {

    

    const remove = (id) => {
        const filered = trasheds.filter(item => item.id !== id)

        setTrasheds(filered)

    }

    return (
        <div>
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
                        trasheds.map((item, index) => (
                            <tr key={item.id} >
                                <td>{index + 1}</td>
                                <td><h5>{item.ism}</h5></td>
                                <td><h5>{item.tel}</h5></td>
                                <td>
                                    <button onClick={() => remove(item.id)} >
                                        <FaTrashCan className='iconTrash' />
                                    </button>
                                </td>
                                <td><h5>{item.id}</h5></td>
                            </tr>
                        ))
                    }



                </tbody>
            </table>


        </div>
    )
}

export default Trashedmap