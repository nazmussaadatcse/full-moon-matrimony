import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import useAxiosSecure from "./useAxiosSecure";
import { AuthContext } from "../Providers/AuthProvider";




const useContactRequest = () => {

    const axiosSecure = useAxiosSecure();
    const {user} = useContext(AuthContext);

    const { refetch, data: reqUsers = [] } = useQuery({

        queryKey: ['reqUsers', user?.email],
        queryFn: async ()=>{
            const res = await axiosSecure.get(`/requestedUsers`)
            return res.data;
        }
    })
    return [reqUsers, refetch]
};


export default useContactRequest;