import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import useAxiosSecure from "./useAxiosSecure";
import { AuthContext } from "../Providers/AuthProvider";



const useStories = () => {

    const axiosSecure = useAxiosSecure();
    const {user} = useContext(AuthContext);

    const { refetch, data: successStories = [] } = useQuery({

        queryKey: ['successStories', user?.email],
        queryFn: async ()=>{
            const res = await axiosSecure.get(`/successStories`)
            return res.data;
        }
    })
    return [successStories, refetch]
};


export default useStories;

