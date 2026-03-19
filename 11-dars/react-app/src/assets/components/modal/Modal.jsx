import React, { use, useState } from 'react'

import './modal.css'
import { IoMdExit } from 'react-icons/io'


function Modal({ users, finditem, hidden, setHidden, }) {
    const [newIsm, setNewIsm] = useState()
    const [newTel, setNewTel] = useState()

    const editted = () => {
        setHidden(!hidden)
        finditem.ism = newIsm,
        finditem.tel = newTel
    }




    return (
        <div className='modal' >
            <div className="modal-box">
                <button className='exit-btn' onClick={() => setHidden(!hidden)} > <IoMdExit className='icon-exit' /> </button>

                <form onSubmit={editted} >
                    <input
                        type="text"
                        required
                        placeholder='ismingizni kiriting iltimos...'
                        name='ism'
                        defaultValue={finditem.ism}
                        onChange={(e) => setNewIsm(e.target.value)} />
                    <input
                        type="text"
                        required
                        placeholder='telingizni kiriting iltimos...'
                        name='tel'
                        defaultValue={finditem.tel}
                        onChange={(e) => setNewTel(e.target.value)} />

                    <button>kirit</button>


                </form>
            </div>
        </div>
    )
}

export default Modal