import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import useAxiosSecure from "./useAxiosSecure";
import { AuthContext } from "../Providers/AuthProvider";



const useFavoriteBiodata = () => {

    const axiosSecure = useAxiosSecure();
    const {user} = useContext(AuthContext);

    const { refetch, data: favUsers = [] } = useQuery({

        queryKey: ['favUsers', user?.email],
        queryFn: async ()=>{
            const res = await axiosSecure.get(`/favorite`)
            return res.data;
        }
    })
    return [favUsers, refetch]
};


export default useFavoriteBiodata;