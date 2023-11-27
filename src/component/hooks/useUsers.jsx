import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";



const useUsers = () => {

    const axiosSecure = useAxiosSecure();
    const {user} = useContext(AuthContext);

    const { refetch, data: users = [] } = useQuery({

        queryKey: ['users', user?.email],
        queryFn: async ()=>{
            const res = await axiosSecure.get(`/allusers`)
            return res.data;
        }
    })
    return [users, refetch]
};

export default useUsers;