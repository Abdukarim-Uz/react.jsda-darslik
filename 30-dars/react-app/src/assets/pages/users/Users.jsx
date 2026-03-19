import { QueryClient, useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { FaBriefcase, FaMapMarkerAlt, FaPhoneAlt, FaUserAlt, FaUserCircle } from "react-icons/fa";
import { HiCake } from "react-icons/hi";
import { MdOutlineCake } from "react-icons/md";
import { toast } from "react-toastify";
import UserMap from "../../components/map/userMap/UserMap";

const queryClient = new QueryClient()

function Users() {


    const { data: Foydalanuvchilar = [], isSuccess, isError, isLoading } = useQuery({
        queryFn: async () => {
            const res = await axios.get("http://localhost:8000/users")
            return res.data
        },
        queryKey: ["Foydalanuvchilar"],

        staleTime: 1000 * 60 * 5
    })


    const { mutate: addUsers } = useMutation({
        mutationFn: async (data) => {
            const res = await axios.post("http://localhost:8000/users", data)
            return res.data
        },
        queryKey: ['user'],
        onSuccess: () => {
            toast.success("mahsulot qo'shildi")
            queryClient.invalidateQueries({ queryKey: ['addUsers'] })
        }


    })

    const handleSubmit = (e) => {
        e.preventDefault()
        const forma = new FormData(e.target)
        const newUser = Object.fromEntries(forma.entries())
        addUsers(newUser)
        e.target.reset()
    }

    { isError && toast.error("xatolik sodir bo'ldi") }

    return (
        <div className="container mx-auto pt-5 px-10 text-2xl" >
            <div className="flex items-center justify-center mb-20 h-full bg-[#0f172a] p-4">
                <form onSubmit={handleSubmit} className="w-full max-w-md bg-[#1e293b] border border-slate-700 p-8 rounded-2xl shadow-2xl">
                    <h2 className="text-3xl font-black text-white mb-2 tracking-tight">hisob yaratish</h2>
                    <p className="text-slate-400 text-sm mb-8">Quyida professional ma'lumotlarni kiriting.</p>

                    <div className="space-y-6">
                        <div className="relative">
                            <input type="text" placeholder="Full Name"
                                className="peer w-full bg-transparent border-b-2 border-slate-700 py-2 text-white outline-none focus:border-cyan-400 transition-colors placeholder-transparent"
                                id="name"
                                name="ism" />
                            <label htmlFor="name" className="absolute left-0 -top-3.5 text-slate-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-cyan-400">
                                to'liq ism
                            </label>
                        </div>

                        <div className="relative">
                            <input type="number" placeholder="Age"
                                className="peer w-full bg-transparent border-b-2 border-slate-700 py-2 text-white outline-none focus:border-cyan-400 transition-colors placeholder-transparent"
                                id="age"
                                name="yosh"
                                min={0} />
                            <label htmlFor="age" className="absolute left-0 -top-3.5 text-slate-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-cyan-400">
                                yosh
                            </label>
                        </div>

                        <div className="relative">
                            <input type="tel" placeholder="Phone"
                                className="peer w-full bg-transparent border-b-2 border-slate-700 py-2 text-white outline-none focus:border-cyan-400 transition-colors placeholder-transparent"
                                id="phone"
                                name="nomer" />
                            <label htmlFor="phone" className="absolute left-0 -top-3.5 text-slate-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-cyan-400">
                                nomer
                            </label>
                        </div>

                        <div className="relative">
                            <input type="text" placeholder="Address"
                                className="peer w-full bg-transparent border-b-2 border-slate-700 py-2 text-white outline-none focus:border-cyan-400 transition-colors placeholder-transparent"
                                id="address"
                                name="manzil" />
                            <label htmlFor="address" className="absolute left-0 -top-3.5 text-slate-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-cyan-400">
                                manzil
                            </label>
                        </div>

                        <div className="relative">
                            <input type="text" placeholder="Job Title"
                                className="peer w-full bg-transparent border-b-2 border-slate-700 py-2 text-white outline-none focus:border-cyan-400 transition-colors placeholder-transparent"
                                id="job"
                                name="ish" />
                            <label htmlFor="job" className="absolute left-0 -top-3.5 text-slate-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-cyan-400">
                                mutahassislik
                            </label>
                        </div>

                        <button type="submit"
                            className="w-full bg-cyan-500 hover:bg-cyan-400 text-white-400 cursor-pointer font-black py-4 rounded-lg mt-4 uppercase tracking-widest transition-all shadow-[0_0_20px_rgba(34,211,238,0.3)] hover:shadow-cyan-400/50">
                            tizimga kirish
                        </button>
                    </div>
                </form>
            </div>

            {
                Foydalanuvchilar.length < 1 ? <h1 className="text-center text-[40px] font-mono " >Siz hali user qo'shmadingiz</h1> :
                    <div className="w-full border p-9 gap-4  grid grid-cols-4" >

                        {isLoading && <h1>Loading..</h1>}


                        {
                            Foydalanuvchilar.map(item => (

                                <UserMap item={item} key={item.id} />
                            ))
                        }

                    </div>
            }

        </div>
    )
}

export default Users