import { QueryClient, useMutation } from "@tanstack/react-query"
import axios from "axios"
import { useState } from "react"
import { FaBriefcase, FaMapMarkerAlt, FaPhoneAlt, FaUserAlt } from "react-icons/fa"
import { HiCake } from "react-icons/hi"
import { toast } from "react-toastify"
import Modal from "../../modal/Modal"
const queryClient = new QueryClient()
function UserMap({ item }) {

    const [showmodel, setShowmodel] = useState(false)

    const { mutate: Foydalanuvchi } = useMutation({
        mutationFn: async (id) => {
            return await axios.delete(`http://localhost:8000/users/${id}`)
        },
        queryKey: ['Foydalanuchi'],
        onSuccess: () => {


            toast.warn("user o'chirildi")
            queryClient.invalidateQueries({ queryKey: ['todos'] })
        }
    })

    const handleDelete = () => {
        Foydalanuvchi(item.id)
    }

    console.log(showmodel)
    return (

        <div>
            {
                showmodel ? <Modal item={item} setShowmodel={setShowmodel} showmodel={showmodel} /> :
                    <div className="group relative cursor-pointer *:cursor-pointer  w-full min-h-30 h-auto  max-w-sm bg-white/5 backdrop-blur-md  rounded-[2.5rem] p-8 shadow-[0_20px_50px_rgba(0,0,0,0.05)] hover:shadow-[0_30px_60px_rgba(79,70,229,0.15)]  transition-all duration-500 hover:-translate-y-2">

                        {/* Yuqori qism: Avatar va Ism */}
                        <div className="flex flex-col items-center text-center">
                            <div className="relative mb-4">
                                {/* Dekorativ xalqa */}
                                <div className="absolute inset-0 bg-indigo-500 rounded-full blur-md opacity-20 group-hover:opacity-40 transition-opacity"></div>

                                <div className="relative w-20 h-20 bg-linear-to-tr from-indigo-600 to-purple-500 rounded-full flex items-center justify-center text-white shadow-xl">
                                    <FaUserAlt size={30} />
                                </div>
                            </div>

                            <h3 className="text-2xl font-black text-white tracking-tight">
                                {item?.ism || "Ism familiya"}
                            </h3>
                            <p className="inline-flex items-center gap-2 px-4 py-1 mt-2 bg-indigo-50 text-indigo-600 rounded-full text-xs font-bold uppercase tracking-widest">
                                <FaBriefcase /> {item?.mutaxassislik || "Mutaxassislik"}
                            </p>
                        </div>

                        {/* Ma'lumotlar qismi (Grid uslubida) */}
                        <div className="mt-8 grid grid-cols-1 gap-4">

                            {/* Yosh va Tel (Yonma-yon) */}
                            <div className="flex gap-4">
                                <div className="flex-1 bg-slate-50 p-4 rounded-2xl border border-transparent group-hover:border-slate-100 transition-all">
                                    <HiCake className="text-pink-500 mb-1" size={20} />
                                    <p className="text-[10px] text-slate-400 uppercase font-bold">Yosh</p>
                                    <p className="text-sm font-bold text-slate-700">{item?.yosh || "—"}</p>
                                </div>

                                <div className="flex-1 bg-slate-50 p-4 rounded-2xl border border-transparent group-hover:border-slate-100 transition-all">
                                    <FaPhoneAlt className="text-blue-500 mb-1" size={16} />
                                    <p className="text-[10px] text-slate-400 uppercase font-bold">Tel</p>
                                    <p className="text-sm font-bold text-slate-700 truncate">{item?.nomer || "—"}</p>
                                </div>
                            </div>

                            {/* Manzil (To'liq qator) */}
                            <div className="bg-slate-50 p-4 rounded-2xl border border-transparent group-hover:border-slate-100 transition-all flex items-start gap-3">
                                <div className="mt-1 text-orange-500">
                                    <FaMapMarkerAlt size={18} />
                                </div>
                                <div>
                                    <p className="text-[10px] text-slate-400 uppercase font-bold">Manzil</p>
                                    <p className="text-sm font-bold text-slate-700">{item?.manzil || "Manzil kiritilmagan"}</p>
                                </div>
                            </div>
                        </div>

                        {/* Pastki qism: Harakatlar */}
                        <div className="mt-8 flex gap-3">
                            <button onClick={() => setShowmodel(!showmodel)} className="flex-1 bg-slate-900 text-white py-3 rounded-2xl font-bold text-sm hover:bg-indigo-600 transition-colors shadow-lg ">
                                edit
                            </button>
                            <button onClick={handleDelete} className="px-4 bg-white border border-slate-200 text-slate-400 py-3 rounded-2xl font-bold text-sm hover:text-red-500 hover:border-red-100 transition-all">
                                O'chirish
                            </button>
                        </div>
                    </div>
            }
        </div>


    )
}

export default UserMap