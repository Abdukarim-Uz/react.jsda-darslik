import { FaEdit, FaTrash } from "react-icons/fa"

function UsersMap({ item, index }) {

    

    const delet = (id) => {

    }

    return (
        <>
            <tr key={item.id} >
                <td className="border-collapse text-center p-2.5 border" >{index + 1}</td>
                <td className="border-collapse text-center p-2.5 border" >{item?.ism}</td>
                <td className="border-collapse text-center p-2.5 border" >{item?.yosh}</td>
                <td className="border-collapse text-center p-2.5 border" >{item?.manzil}</td>
                <td className="border-collapse text-center p-2.5 border" >{item?.ball}</td>
                <td className="border-collapse text-center p-2.5 border flex items-center gap-3 justify-center " >
                    <button className="bg-red-600 px-5 rounded-sm p-2 cursor-pointer " onClick={() => delet(item.id)} ><FaTrash /></button>
                    <button className="bg-blue-600 px-5 rounded-sm p-2 cursor-pointer " ><FaEdit /></button>
                </td>
            </tr>
        </>
    )
}

export default UsersMap