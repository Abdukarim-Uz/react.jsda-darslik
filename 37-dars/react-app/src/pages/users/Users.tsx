import { useState, type ChangeEvent, type MouseEvent } from "react";
import { useGetUsers } from "../../api";

interface User {
    id: number;
    name: string;
    email: string;
}

function Users() {
    const [perPage, setPerPage] = useState<number>(10);
    const [nexPage, setNexPage] = useState<number>(1)
    const { data: users, isLoading, isError } = useGetUsers(perPage, nexPage); // api ga uzatdik
    const [limit, setLimit] = useState<number>(1)
    const qiymatlar: number[] = [10, 20, 30, 40, 50];

    // Select o'zgarganda ishlaydigan funksiya
    const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
        setPerPage(Number(event.target.value));
        console.log("Yangi qiymat:", event.target.value);
    };

    if (isLoading) {
        return <div className="text-white text-center mt-10">Ma'lumotlar yuklanmoqda...</div>;
    }

    if (isError) {
        return <div className="text-red-500 text-center mt-10">Ma'lumot olishda xatolik yuz berdi!</div>;
    }

    console.log(nexPage)

    console.log(users.data)

    const pageRaqam = Math.ceil(users?.items / perPage)

    console.log(pageRaqam)

    return (
        <div className="overflow-hidden mx-auto w-[90%] rounded-xl border border-gray-800 shadow-2xl m-5 bg-[#111827]">



            <table className="w-full border-collapse text-left text-sm text-gray-400">
                <thead className="bg-[#1f2937] text-gray-200 uppercase text-xs tracking-widest">
                    <tr>
                        <th scope="col" className="px-6 py-4 font-semibold">№</th>
                        <th scope="col" className="px-6 py-4 font-semibold">Name</th>
                        <th scope="col" className="px-6 py-4 font-semibold">Email</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-800">
                    {users?.data?.map((user: User, index: number) => (
                        <tr key={user.id} className="hover:bg-[#1f2937] transition-all duration-200 group">
                            <td className="px-6 py-4 font-mono text-blue-400">
                                {(index + 1).toString().padStart(2, '0')}
                            </td>
                            <td className="px-6 py-4">
                                <div className="font-medium text-white group-hover:text-blue-400 transition-colors">
                                    {user.name}
                                </div>
                            </td>
                            <td className="px-6 py-4">
                                <span className="inline-flex items-center rounded-md bg-blue-400/10 px-2 py-1 text-xs font-medium text-blue-400 ring-1 ring-inset ring-blue-400/20">
                                    {user.email}
                                </span>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <select onChange={handleSelectChange} >
                {
                    qiymatlar.map((qiymat) => (
                        <option key={qiymat} value={qiymat}>
                            {qiymat}
                        </option>
                    ))
                }
            </select>

            <div className="flex items-center gap-2 justify-center" >
                {
                    Array(pageRaqam).fill(1).map((_, index: number) => (
                        <button key={index + 1} onClick={() => setNexPage(index + 1)} className="border p-2" >
                            {index + 1}
                        </button>
                    ))
                }
            </div>
        </div>
    );
}

export default Users;