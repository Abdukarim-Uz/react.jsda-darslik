import { NavLink } from "react-router-dom"

function Register() {
    return (
        <div className=" container mx-auto p-4  px-12 text-[23px] "  >
            <div className="w-full max-w-2xl mx-auto mt-10 bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl p-8 md:p-12">

                <div className="mb-10 text-center">
                    <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-purple-600 to-indigo-600">
                        Ro‘yxatdan o‘tish
                    </h2>
                    <p className="text-gray-500 mt-2 font-medium">O'z profilingizni yarating va bizga qo'shiling</p>
                </div>

                <form className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    <div className="space-y-1">
                        <label className="text-sm font-semibold text-gray-600 ml-1">Ism</label>
                        <input
                            type="text"
                            placeholder="Ali"
                            className="w-full px-4 placeholder:text-black py-3 rounded-xl bg-gray-50 border border-gray-200 focus:bg-white focus:ring-2 focus:ring-purple-400 focus:border-transparent outline-none transition-all duration-300"
                        />
                    </div>

                    <div className="space-y-1">
                        <label className="text-sm font-semibold text-gray-600 ml-1">Familiya</label>
                        <input
                            type="text"
                            placeholder="Valiyev"
                            className="w-full px-4 placeholder:text-black py-3 rounded-xl bg-gray-50 border border-gray-200 focus:bg-white focus:ring-2 focus:ring-purple-400 focus:border-transparent outline-none transition-all duration-300"
                        />
                    </div>

                    <div className="space-y-1">
                        <label className="text-sm font-semibold text-gray-600 ml-1">Telefon raqam</label>
                        <input
                            type="tel"
                            placeholder="+998 90 123 45 67"
                            className="w-full px-4 py-3 placeholder:text-black rounded-xl bg-gray-50 border border-gray-200 focus:bg-white focus:ring-2 focus:ring-purple-400 focus:border-transparent outline-none transition-all duration-300"
                        />
                    </div>

                    <div className="space-y-1">
                        <label className="text-sm font-semibold text-gray-600 ml-1">Mutaxassislik</label>
                        <select className="w-full px-4 py-3 rounded-xl text-black bg-gray-50 border border-gray-200 focus:bg-white focus:ring-2 focus:ring-purple-400 focus:border-transparent outline-none transition-all duration-300 appearance-none cursor-pointer">
                            <option value="">Tanlang...</option>
                            <option value="frontend">Frontend Dasturchi</option>
                            <option value="backend">Backend Dasturchi</option>
                            <option value="designer">UI/UX Designer</option>
                            <option value="manager">Project Manager</option>
                        </select>
                    </div>

                    <div className="space-y-1 md:col-span-2">
                        <label className="text-sm font-semibold text-gray-600 ml-1">Manzil</label>
                        <input
                            type="text"
                            placeholder="Toshkent sh., Chilonzor tumani..."
                            className="w-full px-4 py-3 rounded-xl placeholder:text-black bg-gray-50 border border-gray-200 focus:bg-white focus:ring-2 focus:ring-purple-400 focus:border-transparent outline-none transition-all duration-300"
                        />
                    </div>

                    <div className="md:col-span-2 mt-4">
                        <button
                            type="submit"
                            className="w-full cursor-pointer bg-linear-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-purple-200 transition-all duration-300 transform hover:-translate-y-1 active:scale-[0.98]"
                        >
                            Hisob yaratish
                        </button>
                    </div>
                </form>

                <p className="text-center text-gray-500 mt-8">
                    Profilingiz bormi?
                    <NavLink to={'/login'} className="text-purple-600 font-bold ml-1 hover:underline">Kirish</NavLink>
                </p>
            </div></div>
    )
}

export default Register