import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { HiMiniXCircle } from "react-icons/hi2";
import { toast } from "react-toastify";

function Modal({ item, showmodel, setShowmodel }) {


    const { mutate: Foydalanuchi } = useMutation({
        mutationFn: async ({ id, edittedData }) => {
            return await axios.put(`http://localhost:8000/users/${id}`, edittedData)
        },
        queryKey: ["Foydalanuchi"],
        onSuccess: () => {
            toast.success("ma'lumotlar yangilandi!")
        },
        onError: () => {
            toast.error("ma'lumotlar yangilanmadi")
        }
    })

    const edited = (e) => {
        e.preventDefault();

        const forma = new FormData(e.target);
        const malumotlar = Object.fromEntries(forma.entries())

        Foydalanuchi({ id: item.id, edittedData:malumotlar })
    }



    return (
        <div className={`
            fixed top-0 left-0 w-full h-full bg-black/60 text-white border 
            transition-transform duration-500 ease-in-out
            ${showmodel ? "translate-x-0" : "-translate-x-full"}
            z-50
        `}>
            <div className="p-20 relative text-center w-200 mx-auto h-full  ">
                <button className="absolute top-10 right-2 cursor-pointer  " onClick={() => setShowmodel(false)} ><HiMiniXCircle fill="red" /></button>
                <div className="flex items-center w-full rounded-2xl  justify-center mb-20 h-full bg-[#0f172a] p-4">
                    <form onSubmit={edited} className="w-full max-w-md  border border-slate-700 p-8 rounded-2xl shadow-2xl">
                        <h2 className="text-3xl font-black text-white mb-2 tracking-tight">profilni yangilash</h2>
                        <p className="text-slate-400 text-sm mb-8">Quyida professional ma'lumotlarni kiriting.</p>

                        <div className="space-y-6">
                            <div className="relative">
                                <input type="text" placeholder="Full Name"
                                    className="peer w-full bg-transparent border-b-2 border-slate-700 py-2 text-white outline-none focus:border-cyan-400 transition-colors placeholder-transparent"
                                    id="name"
                                    name="ism"
                                    defaultValue={item?.ism}
                                />
                                <label htmlFor="name" className="absolute left-0 -top-3.5 text-slate-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-cyan-400">
                                    to'liq ism
                                </label>
                            </div>

                            <div className="relative">
                                <input type="number" placeholder="Age"
                                    className="peer w-full bg-transparent border-b-2 border-slate-700 py-2 text-white outline-none focus:border-cyan-400 transition-colors placeholder-transparent"
                                    id="age"
                                    name="yosh"
                                    defaultValue={item?.yosh}
                                    min={0} />
                                <label htmlFor="age" className="absolute left-0 -top-3.5 text-slate-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-cyan-400">
                                    yosh
                                </label>
                            </div>

                            <div className="relative">
                                <input type="tel" placeholder="Phone"
                                    className="peer w-full bg-transparent border-b-2 border-slate-700 py-2 text-white outline-none focus:border-cyan-400 transition-colors placeholder-transparent"
                                    id="phone"
                                    defaultValue={item?.nomer}
                                    name="nomer" />
                                <label htmlFor="phone" className="absolute left-0 -top-3.5 text-slate-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-cyan-400">
                                    nomer
                                </label>
                            </div>

                            <div className="relative">
                                <input type="text" placeholder="Address"
                                    className="peer w-full bg-transparent border-b-2 border-slate-700 py-2 text-white outline-none focus:border-cyan-400 transition-colors placeholder-transparent"
                                    id="address"
                                    defaultValue={item?.manzil}
                                    name="manzil" />
                                <label htmlFor="address" className="absolute left-0 -top-3.5 text-slate-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-cyan-400">
                                    manzil
                                </label>
                            </div>

                            <div className="relative">
                                <input type="text" placeholder="Job Title"
                                    className="peer w-full bg-transparent border-b-2 border-slate-700 py-2 text-white outline-none focus:border-cyan-400 transition-colors placeholder-transparent"
                                    id="job"
                                    defaultValue={item?.ish}
                                    name="ish" />
                                <label htmlFor="job" className="absolute left-0 -top-3.5 text-slate-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-cyan-400">
                                    mutahassislik
                                </label>
                            </div>

                            <button type="submit"
                                className="w-full bg-cyan-500/60 hover:bg-cyan-400/70 text-xl  text-white-400 cursor-pointer font-black py-4 rounded-lg mt-4 uppercase tracking-widest transition-all shadow-[0_0_20px_rgba(34,211,238,0.3)] hover:shadow-cyan-400/50">
                                ma'lumotlarni yangilash
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Modal;