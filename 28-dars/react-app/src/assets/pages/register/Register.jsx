import { useEffect, useRef } from 'react'
import { useDispatch } from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom'
import { setUser } from '../../../userSlice/userSlice'
import { nanoid } from 'nanoid'




function Register() {
    const navigate = useNavigate()

    const ismRef = useRef()
    const emailRef = useRef()
    const raqamRef = useRef()
    const fullNameRef = useRef()
    const regionRef = useRef()
    const yilRef = useRef()
    const parolRef = useRef()
    const dispatch = useDispatch()


    const HandeSubmit = (e) => {
        e.preventDefault();
        const userData = {
            otp: nanoid(6),
            ism: ismRef.current.value,
            email: emailRef.current.value,
            raqam: raqamRef.current.value,
            fullName: fullNameRef.current.value,
            region: regionRef.current.value,
            yil: yilRef.current.value,
            parol: parolRef.current.value
        }

        dispatch(setUser(userData))
        sessionStorage.setItem("user", JSON.stringify(userData))
        navigate('/otp')
        e.target.reset()


    }

    useEffect(() => {
        ismRef.current.focus()
    }, [])



    return (
        <div className='container mx-auto p-6 px-15 text-[20px]' >
            <form onSubmit={HandeSubmit} className="mx-auto mt-10 min-h-20 h-auto p-10 flex items-start flex-col gap-7  max-w-[30%] w-full rounded-2xl cursor-pointer  *:cursor-pointer bg-white2 "  >
                <input
                    type="text"
                    placeholder="usernameni kiriting.."
                    className="border outline-0 p-2 text-[18px] rounded-xs"
                    required
                    ref={ismRef}
                    name='ism'
                />
                <input
                    type="text"
                    placeholder="email kiriting.."
                    className="border outline-0 p-2 text-[18px] rounded-xs"
                    ref={emailRef}
                    name='email'
                    required
                />

                <input
                    type="text"
                    className="border outline-0 text-[18px] p-2 rounded-xs"
                    ref={raqamRef}
                    name='raqam'
                    required
                    placeholder="telefon raqamingizni kiriting..." />
                <input
                    type="text"
                    placeholder="full name kiriting.."
                    ref={fullNameRef}
                    name='fullName'
                    required
                    className="border text-[18px] outline-0 p-2 rounded-xs"
                />
                <div className='flex gap-4 cursor-pointer  *:cursor-pointer items-center' >

                    <input
                        type="text"
                        ref={regionRef}
                        name='region'
                        placeholder="region kiriting.."
                        required
                        className="border w-[45%]  text-[18px] outline-0 p-2 rounded-xs"
                    />
                    <input
                        type="text"
                        ref={yilRef}
                        name='yil'
                        placeholder="tug'ilgan yilingizni kiriting.."
                        required
                        className="border w-[45%] text-[18px] outline-0 p-2 rounded-xs"
                    />
                </div>
                <input
                    type="text"
                    ref={parolRef}
                    name='parol'
                    placeholder="parolingiz kiriting.."
                    required
                    className="border text-[18px] outline-0 p-2 rounded-xs"
                />

                <p className="text-[15px] mx-auto " >agar siz ro'yhatdan o'tgan bo'lsez <NavLink className={'text-blue-200'} to={'/login'} >login</NavLink> </p>

                <button className="rounded-[5px]  mx-auto bg-green-500 p-3 " >tizimga kirish</button>
            </form>
        </div>
    )
}

export default Register