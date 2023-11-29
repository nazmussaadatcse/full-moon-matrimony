import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import useAxiosSecure from "./useAxiosSecure";
import { AuthContext } from "../Providers/AuthProvider";





const useApprovePremium = () => {

    const axiosSecure = useAxiosSecure();
    const {user} = useContext(AuthContext);

    const { refetch, data: approvePremium = [] } = useQuery({

        queryKey: ['approvePremium', user?.email],
        queryFn: async ()=>{
            const res = await axiosSecure.get(`/premiumReqCollection`)
            return res.data;
        }
    })
    return [approvePremium, refetch]
};


export default useApprovePremium;

