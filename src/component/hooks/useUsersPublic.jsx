import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import useAxiosPublic from "./useAxiosPublic";



const useUsersPublic = () => {

    const axiosPublic = useAxiosPublic();
    const { user } = useContext(AuthContext);

    const { refetch, data: users = [] } = useQuery({

        queryKey: ['users', user?.email],
        queryFn: async () => {
            const res = await axiosPublic.get(`/allusers`)
            return res.data;
        }
    })
    const femaleUsers = users.filter(user => user.biodataType === 'female');
    const maleUsers = users.filter(user => user.biodataType === 'male');

    return [users, refetch, femaleUsers, maleUsers];
};

export default useUsersPublic;