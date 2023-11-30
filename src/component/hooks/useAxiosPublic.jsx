import axios from "axios";


const axiosPublic = axios.create({
    baseURL: 'https://full-moon-matrimony-server.vercel.app'
})

const useAxiosPublic = () => {
    
    return axiosPublic;
};

export default useAxiosPublic;