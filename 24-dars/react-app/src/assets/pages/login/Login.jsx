import { useContext, useRef } from "react"
import { Context } from "../../data/StateContextProvider"

function Login() {
    const ismRef = useRef(null)
    const telRef = useRef(null)
    const { setUser, show, setUserNumber, setShow } = useContext(Context)
    const addUser = (e) => {
        e.preventDefault();
        setUser(ismRef.current.value)
        setUserNumber(telRef.current.value)
        setShow(true)
    }

    return (
        <div className="w-[95%] text-black justify-between flex items-center text-2xl p-10 rounded-2xl mx-auto" >
            <form onSubmit={addUser} className="border   mx-auto mt-20 p-10 bg-olive-50 opacity-85 rounded-2xl flex items-center flex-col gap-9 justify-center *:border *:cursor-pointer  min-h-40 h-auto "   >
                <input type="text" ref={ismRef} className="outline-none p-3 rounded text-[20px]" placeholder="ismni kiriting" required name="ism" />
                <input type="text" ref={telRef} className="outline-none p-3 rounded text-[20px]" placeholder="nomerni kiriting" required name="nomer" />
                <button className="w-30 h-15 rounded-md text-white bg-green-500" >kirish</button>
            </form>
        </div>
    )
}


export default Login 