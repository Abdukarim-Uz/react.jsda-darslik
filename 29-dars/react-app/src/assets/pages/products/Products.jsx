import axios from "axios"
import { baseUrl } from "../../../global/baseUrl"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"

function Products() {
    const [newdata, setNewData] = useState([])
    async function getItem() {
        try {
            const res = await axios.get(`${baseUrl}/products`)
            console.log(res.data)
            if (res.status === 200) {
                setNewData(res.data)
                console.log(res.data)
            }
        } catch (err) {
            console.log(err)
        }

    }


    const handleSubmit = async (e) => {
        e.preventDefault();
        const formdata = new FormData();

        formdata.append("nomi", nomi)
        formdata.append("price", price)
        formdata.append("description", description)
        // for (let item of formdata.entries()) {
        //     console.log(item)
        // }
    }

    useEffect(() => {
        getItem()
    }, [])
    return (
        <div className=" container mx-auto p-4  px-12 text-[23px] ">

            <div className="w-full text-black mx-auto mb-10 max-w-xl bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">

                <div className="bg-linear-to-r from-emerald-500 to-teal-600 p-6">
                    <h2 className="text-2xl font-bold text-white text-center">Yangi mahsulot qo'shish</h2>
                    <p className="text-emerald-50 text-center text-sm mt-1">Barcha maydonlarni to'ldiring</p>
                </div>

                <form onSubmit={handleSubmit} className="p-8 space-y-5">

                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Mahsulot nomi</label>
                        <input
                            type="text"
                            placeholder="Masalan: iPhone 15 Pro"
                            name="nomi"
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all placeholder:text-gray-400"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Narxi</label>
                        <div className="relative">
                            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 font-medium">$</span>
                            <input
                                type="number"
                                placeholder="0.00"
                                name="price"
                                className="w-full pl-8 pr-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Mahsulot tavsifi</label>
                        <textarea
                            rows="4"
                            placeholder="Mahsulot haqida batafsil ma'lumot kiriting..."
                            name="description"
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all resize-none"
                        ></textarea>
                    </div>

                    <div className="flex gap-4 pt-2">
                        <button
                            type="button"
                            className="flex-1 px-6 py-3 rounded-xl border border-gray-200 text-gray-600 font-semibold hover:bg-gray-50 transition-all active:scale-95"
                        >
                            Bekor qilish
                        </button>
                        <button
                            type="submit"
                            className="flex-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 rounded-xl shadow-lg shadow-emerald-200 transition-all transform active:scale-95"
                        >
                            Saqlash
                        </button>
                    </div>

                </form>
            </div>

            <div className="w-full h-auto grid grid-cols-4 gap-9   flex-wrap " >
                {
                    newdata.map(item => (

                        <div key={item?.id} className=" shadow-xl cursor-pointer  px-3 rounded bg-[#ffffff27] p-3 flex items-center flex-col " >
                            <img src={item?.images} className="w-[40%] " />
                            <h6 className="self-start" >{item?.name}</h6>
                            <p className="text-[13px] text-center" >
                                {item?.description}
                            </p>
                            <h3 className="self-start" >{item?.price}</h3>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Products