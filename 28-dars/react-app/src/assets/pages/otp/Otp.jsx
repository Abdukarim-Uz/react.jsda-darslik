import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { setHidden } from "../../../token/tokenSlice";

function Otp() {
    const birRef = useRef()
    const ikkiRef = useRef()
    const uchRef = useRef()
    const tortRef = useRef()
    const beshRef = useRef()
    const oltiRef = useRef()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { otp } = JSON.parse(sessionStorage.getItem("user"));
    console.log(otp)

    const checkHandle = (e) => {
        e.preventDefault()
        const parol = birRef.current.value + ikkiRef.current.value + uchRef.current.value + tortRef.current.value + beshRef.current.value + oltiRef.current.value
        if (parol === otp) {
            toast.success("tizimga muvaqiyatli kirdingiz")
            dispatch(setHidden(true))
            navigate('/')
            return
        }

        toast.warn("parol xato")
    }

    return (
        <div className='container mx-auto p-6 px-15 text-[20px]'  >
            <form onSubmit={checkHandle} className="mx-auto mt-70 min-h-20 h-auto p-10 flex items-center flex-col gap-7  w-[30%] rounded-2xl cursor-pointer  *:cursor-pointer bg-white2 "  >
                <div className="flex items-center gap-4" >



                    <input
                        type="text"
                        className="border text-center w-8 outline-0 p-1 rounded-xs"
                        ref={birRef}

                    />
                    <input
                        type="text"
                        className="border text-center w-8 outline-0 p-1 rounded-xs"
                        ref={ikkiRef}
                    />
                    <input
                        type="text"
                        ref={uchRef}
                        className="border text-center w-8 outline-0 p-1 rounded-xs"
                    />
                    <input
                        type="text"
                        ref={tortRef}
                        className="border text-center w-8 outline-0 p-1 rounded-xs"
                    />
                    <input
                        type="text"
                        ref={beshRef}
                        className="border text-center w-8 outline-0 p-1 rounded-xs"
                    />
                    <input
                        type="text"
                        ref={oltiRef}
                        className="border text-center w-8 outline-0 p-1 rounded-xs"
                    />

                </div>
                <button className="rounded-[5px] bg-green-500 p-3 " >tizimga kirish</button>
            </form>
        </div>
    )
}

export default Otp