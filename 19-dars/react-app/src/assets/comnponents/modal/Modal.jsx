import { useEffect, useRef } from 'react'
import './modal.css'
import { FaDoorClosed } from 'react-icons/fa'
import axios from 'axios'
import { toast } from 'react-toastify'

function Modal({ shoModal, itemData, setHidden,getItem }) {
    const ismRef = useRef(itemData.ism)
    const familiyaRef = useRef(itemData.familiya)
    const yoshRef = useRef(itemData.yosh)
    const ishRef = useRef(itemData.ish)
    const telefonRef = useRef(itemData.telefon)
    const emailRef = useRef(itemData.email)
    const editUser = async (e) => {
        e.preventDefault();

        const newData = {
            id: itemData.id,
            ism: ismRef.current.value,
            familiya: familiyaRef.current.value,
            yosh: yoshRef.current.value,
            ish: ishRef.current.value,
            telefon: telefonRef.current.value,
            email: emailRef.current.value

        }

        try {
            const { status } = await axios.put(`http://localhost:8000/talabalar/${itemData.id}`, newData)
            if (status === 200) {
                toast.success("user o'zgartirildi !!!")
                setHidden(false)
                getItem()
                return;
            }
        } catch (err) {
            console.log(err)
        }


    }

    useEffect(() => {
        ismRef.current.focus()
    }, [])
    return (
        <div className='modal' >
            <div className='modal-card' >
                <div onClick={shoModal} className="exit-btn">
                    <FaDoorClosed className='icon-door ' />
                </div>

                <form onSubmit={editUser} >
                    <input type="text" defaultValue={itemData.ism} ref={ismRef} placeholder='ismni kiriting...' required name='ism' />
                    <input type="text" defaultValue={itemData.familiya} ref={familiyaRef} placeholder='familiyangizni kiriting...' required name='familiya' />
                    <input type="text" defaultValue={itemData.yosh} ref={yoshRef} placeholder='yoshingizni kiriting...' required name='yosh' />
                    <input type="text" defaultValue={itemData.ish} ref={ishRef} placeholder='ishingizni kiriting...' required name='ish' />
                    <input type="text" defaultValue={itemData.telefon} ref={telefonRef} placeholder='telefoningizni kiriting...' required name='telefon' />
                    <input type="text" defaultValue={itemData.email} ref={emailRef} placeholder='emailingizni kiriting...' required name='email' />
                    <button>tahrirlash</button>
                </form>
            </div>

        </div>
    )
}

export default Modal