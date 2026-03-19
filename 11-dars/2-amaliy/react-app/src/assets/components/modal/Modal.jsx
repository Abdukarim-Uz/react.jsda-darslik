import React, { useState } from 'react'

import './modal.css'
import { IoIosExit } from 'react-icons/io'

function Modal({ findItem, hidden, setHidden, setUsers, users }) {

    const [createIsm, setCreateIsm] = useState(findItem.ism)

    const [createTel, setCreateTel] = useState(findItem.tel)

    const handlersub = (event) => {
        event.preventDefault();
        setHidden(!hidden)

        const dataobj = {
            id: findItem.id,
            ism: createIsm,
            tel: createTel
        }

        setUsers(users.map(item => item.id === findItem.id ? dataobj : item))


    }



    return (
        <div className='modal-box' >
            <button className='icon-exit' onClick={() => setHidden(!hidden)} ><IoIosExit className='exit-page' /></button>
            <div className="login-form">
                <form onSubmit={handlersub} >
                    <input
                        type="text"
                        placeholder='ismni kiriting...'
                        required
                        name='ism'
                        defaultValue={findItem.ism}
                        onChange={(e) => setCreateIsm(e.target.value)}
                    />
                    <input
                        type="text"
                        required
                        placeholder='telefon raqamingizni kiriting...'
                        name='tel'
                        defaultValue={findItem.tel}
                        onChange={(e) => setCreateTel(e.target.value)} />
                    <button>kiriting</button>
                </form>
            </div>
        </div>
    )
}

export default Modal