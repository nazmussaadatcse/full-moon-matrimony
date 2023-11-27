import { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from '../Providers/AuthProvider';
import useAxiosPublic from '../hooks/useAxiosPublic';


const SocialLogin = () => {

    const {handleGoogleSignIn} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const axiosPublic = useAxiosPublic();


    const handleGoogleLogIn = ()=>{
        handleGoogleSignIn()
        .then(result=>{
            const user = result.user;
            console.log(user);
             // save user to db 
             const userInfo = {
                name: user.displayName,
                email: user.email
            }
            axiosPublic.post('/users', userInfo)
            .then(res => {
                if (res.data.insertedId) {
                    console.log('user added to db');
                    Swal.fire({
                        position: 'top-center',
                        icon: 'success',
                        title: 'SignUp Successful!',
                        showConfirmButton: false,
                        timer: 1500
                    })
                    navigate(location?.state ? location.state : '/')
                }
            })

            console.log(userInfo);
            Swal.fire({
                position: 'top-center',
                icon: 'success',
                title: 'Logged In Successfully!',
                showConfirmButton: false,
                timer: 1500
              })
            navigate(location?.state ? location.state : '/')
        })
        .catch(error=>{
            console.log(error.message);
        })
    }


    return (
        <div>
            <div className="flex justify-center">
                <div className=" text-center p-2 m-2">
                    <hr/>
                <p className="font-semibold text-green-700">Login with Google</p>
            <button onClick={handleGoogleLogIn} className="rounded-full text-2xl shadow-md text-pink-900 hover:bg-green-700 hover:rounded-full p-2"><FaGoogle></FaGoogle></button>
                </div>
            </div>
        </div>
    );
};

export default SocialLogin;