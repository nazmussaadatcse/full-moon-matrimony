import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
// import { updateProfile } from "firebase/auth";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form"
import useAxiosPublic from "../hooks/useAxiosPublic";
import { AuthContext } from "../Providers/AuthProvider";
import SocialLogin from "../Login/SocialLogin";



const SignUp = () => {


    const { createUser, updateUserProfile } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const [passwordError, setPasswordError] = useState('');
    const axiosPublic = useAxiosPublic();

    setTimeout(() => {
        setPasswordError('');
    }, 5000);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        console.log(data)
        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                // update profile and set name, photo
                updateUserProfile(data.name, data.photo)
                    .then(() => {
                        // save user to db 
                        const userInfo = {
                            name: data.name,
                            email: data.email
                        }
                        axiosPublic.post('/users', userInfo)
                            .then(res => {
                                if (res.data.insertedId) {
                                    console.log('user added to db');
                                    reset();
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


                    })
                    .catch(error => {
                        console.log(error);
                    })
            })
    }



    return (
        <div className=" flex items-center justify-center bg-gray-100">
            <div className="hero-content p-12 bg-white rounded-md shadow-2xl max-w-xl"> {/* Increased max-width */}
                <div className="text-center p-8">
                    <img className="w-1/3 mx-auto" src="https://i.ibb.co/kJ4Jjzm/zero-dollar-bites-logo.png" alt="" />
                    <h1 className="text-3xl font-bold">SignUp now!</h1>
                    <p className="py-6 text-lg">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro aperiam dolorem necessitatibus ipsum perferendis magni sapiente earum impedit delectus, quaerat.
                    </p>
                </div>
                <div className="card flex-shrink-0 mx-auto w-full max-w-md shadow-2xl bg-white p-8 border rounded-md"> {/* Increased max-width, added padding and border */}
                    <form onSubmit={handleSubmit(onSubmit)} className="bg-pink-200 rounded-md p-4 space-y-4">
                        <div className="form-control flex flex-col">
                            <label className="font-semibold">
                                <span className="">Name</span>
                            </label>
                            <input {...register("name", { required: true })} type="text" name="name" placeholder="Name" className="input input-bordered rounded-md p-2" /> {/* Added padding */}
                            {errors.name && <span className="text-red-600">Name field is required</span>}
                        </div>
                        <div className="form-control flex flex-col">
                            <label className="font-semibold">
                                <span className="">Email</span>
                            </label>
                            <input {...register("email", { required: true })} type="email" name="email" placeholder="Email" className="input input-bordered rounded-md p-2" /> {/* Added padding */}
                            {errors.email && <span className="text-red-600">Email field is required</span>}
                        </div>
                        <div className="form-control flex flex-col">
                            <label className="font-semibold">
                                <span className="">PhotoURL</span>
                            </label>
                            <input {...register("photo", { required: true })} type="text" name="photo" placeholder="Photo URL" className="input input-bordered rounded-md p-2" /> {/* Added padding */}
                        </div>
                        <div className="form-control flex flex-col">
                            <label className="font-semibold">
                                <span className="">Password</span>
                            </label>
                            <input {...register("password", {
                                required: true,
                                minLength: 6,
                                maxLength: 20,
                                pattern: /(?=.*[!@#$%^&*])(?=.*[A-Z]).{6,20}/
                            })} type="password" name="password" placeholder="Password" className="input input-bordered rounded-md p-2" /> {/*  */}
                            {errors.password?.type === 'required' && <span className="text-red-600">Password field is required</span>}
                            {errors.password?.type === 'minLength' && <span className="text-red-600">Password requires at least 6 characters</span>}
                            {errors.password?.type === 'pattern' && <span className="text-red-600">Uppercase and special character are required</span>}
                            <label className="label">
                                <a href="#" className=" ">
                                    Forgot password?
                                </a>
                            </label>
                        </div>
                        <div className="form-control flex justify-center items-center flex-col">
                            <input className="hover:cursor-pointer bg-pink-500 w-1/2 rounded-full text-white hover:border hover:bg-red-700" type="submit" value="SignUp" />
                        </div>
                    </form>
                    <p className="text-center text-black mb-4">Already have an account? <Link className="font-semibold text-purple-700" to={"/login"}>Login</Link></p>
                    <SocialLogin></SocialLogin>
                </div>
            </div>
        </div>


    );
};

export default SignUp;