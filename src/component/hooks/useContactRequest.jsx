import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import useAxiosSecure from "./useAxiosSecure";
import { AuthContext } from "../Providers/AuthProvider";



const useContactRequest = () => {

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


export default useContactRequest;