import axios from 'axios';
import './home.css'
import { use, useEffect, useRef, useState } from 'react';
import { toast } from 'react-toastify';
function Home() {

    const ismRef = useRef()
    const familiyaRef = useRef()
    const yoshRef = useRef()
    const ishRef = useRef()
    const telefonRef = useRef()
    const emailRef = useRef()
    const [error, setError] = useState("")
    const addUser = async (event) => {
        event.preventDefault();
        const database = {
            ism: ismRef.current.value,
            familiya: familiyaRef.current.value,
            yosh: yoshRef.current.value,
            ish: ishRef.current.value,
            telefon: telefonRef.current.value,
            email: emailRef.current.value
        }
        try {
            const { status } = await axios.post("http://localhost:8000/talabalar", database)
            if (status === 200) {
                return
            }
        } catch (err) {
            console.log(err)
            setError("nimadir xatolik bo'ldi")
        }
        toast.success("user qo'shildi")
    }
    useEffect(() => {
        ismRef.current.focus()
    }, [])


    return (
        <div className='home' >

            <form onSubmit={addUser} >
                <input type="text" ref={ismRef} placeholder='ismni kiriting...' required name='ism' />
                <input type="text" ref={familiyaRef} placeholder='familiyangizni kiriting...' required name='familiya' />
                <input type="text" ref={yoshRef} placeholder='yoshingizni kiriting...' required name='yosh' />
                <input type="text" ref={ishRef} placeholder='ishingizni kiriting...' required name='ish' />
                <input type="text" ref={telefonRef} placeholder='telefoningizni kiriting...' required name='telefon' />
                <input type="text" ref={emailRef} placeholder='emailingizni kiriting...' required name='email' />
                <button>qo'shish</button>
            </form>

        </div>
    )
}

export default Home