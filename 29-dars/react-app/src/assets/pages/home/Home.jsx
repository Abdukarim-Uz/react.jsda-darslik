import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { FaEdit, FaTrash } from "react-icons/fa"
import UsersMap from "../../components/map/UsersMap";

function Home() {
    const { mutate: addProduct } = useMutation({
        mutationFn: async (data) => {
            return await axios.post("http://localhost:8000/users", data)
        }
    })

    const { data: users = [] } = useQuery({
        queryFn: async () => {

            const res = await axios.get("http://localhost:8000/users");
            return res.data
        },
        staleTime: 1000 * 60 * 5,
    })

    const handleAdd = async (event) => {
        event.preventDefault()
        const forma = new FormData(event.target);
        const newProducts = Object.fromEntries(forma.entries())
        addProduct(newProducts)
    }





    return (
        <div className=" container mx-auto p-4  px-12 text-[23px] " >

            <form onSubmit={handleAdd} className="w-[40%] border mx-auto flex items-center flex-col *:border gap-5 mt-5 *:p-2 *:outline-0 *:cursor-pointer p-3 mb-3" >
                <input type="text" required name="ism" placeholder="ismni kiriting  " />
                <input type="number" required name="yosh" min={0} placeholder="yoshni kiriting  " />
                <input type="text" required name="manzil" placeholder="manzilni kiriting  " />
                <input type="number" required min={0} name="ball" placeholder="ballni kiriting  " />
                <button className="w-40 bg-green-700 rounded border-none " >kirit</button>
            </form>

            <table className="w-full border p-3 " >
                <thead className="border-collapse text-center p-2.5 border" >
                    <tr  >
                        <th className="border-collapse text-center p-2.5 border" >#</th>
                        <th className="border-collapse text-center p-2.5 border" >Ismi</th>
                        <th className="border-collapse text-center p-2.5 border" >Yoshi</th>
                        <th className="border-collapse text-center p-2.5 border" >Manzil</th>
                        <th className="border-collapse text-center p-2.5 border" >Ball</th>
                        <th className="border-collapse text-center p-2.5 border" >Amallar</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((item, index) => (

                            <UsersMap item={item} index={index} key={item.id} />
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Home