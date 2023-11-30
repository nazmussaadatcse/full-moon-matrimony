import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";



const useUsers = () => {

    const axiosSecure = useAxiosSecure();
    const {user} = useContext(AuthContext);

    const { refetch, data: users = [] ,isPending: loading} = useQuery({

        queryKey: ['users', user?.email],
        queryFn: async ()=>{
            const res = await axiosSecure.get(`/allusers`)
            return res.data;
        }
    })
    const femaleUsers = users.filter(user => user.biodataType === 'female');
    const maleUsers = users.filter(user => user.biodataType === 'male');

    return [users, maleUsers, femaleUsers, refetch]
};

export default useUsers;