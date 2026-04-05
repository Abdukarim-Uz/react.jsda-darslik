import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useGetUsers = (perPage: number, nextPage: number) => {
    return useQuery({
        queryKey: ["users", perPage],
        queryFn: async () => {
            const res = await axios.get(`http://localhost:3000/users?_page=${nextPage}&_per_page=${perPage}`);
            return res.data ? res.data : res.data;
        },
        refetchInterval: 200
    });

};