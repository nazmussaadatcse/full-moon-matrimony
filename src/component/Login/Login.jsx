import { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from "../Providers/AuthProvider";
import SocialLogin from "./SocialLogin";




const Login = () => {

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, []);

    const location = useLocation();
    const navigate = useNavigate();
    const [loginError, setLoginError] = useState('');
    const [disabled, setDisabled] = useState(true);
    const {signIn} = useContext(AuthContext);
    const from = (location?.state?.from?.pathName || '/');
    console.log(location);

    setTimeout(() => {
        setLoginError('');
    }, 5000);

    const handleValidateCaptcha = (e) =>{
        const user_captcha_value = e.target.value;
        console.log(user_captcha_value);
        if (validateCaptcha(user_captcha_value)) {
            setDisabled(false)
        }
   
        else {
            setDisabled(true)
        }
    }


    const handleLogin = event => {
        event.preventDefault();

        const form = new FormData(event.currentTarget);
        const email = form.get('email');
        const password = form.get('password');


        signIn(email, password)
            .then(result => {
                console.log(result.user);
                Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title: 'Logged In Successfully!',
                    showConfirmButton: false,
                    timer: 1500
                })
                navigate(from, {replace: true})
            })
            .catch(error => {
                if (error.code === "auth/invalid-login-credentials") {
                    setLoginError("Email/Password is not valid");
                }
                else {
                    console.log(error.message);
                }
            });

    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-base-50">
    <div className="max-w-xl w-full bg-base-100 shadow-2xl rounded-lg p-8">
        <div className="text-center">
            <img className="w-1/3 mx-auto" src="https://i.ibb.co/kJ4Jjzm/zero-dollar-bites-logo.png" alt="" />
            <h1 className="text-3xl font-bold">Please Login</h1>
            <p className="py-6 text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate reiciendis, ex corrupti fugiat aspernatur architecto dignissimos sunt animi facere molestias inventore sed ad nostrum quod at doloribus saepe in magnam voluptatem debitis quos sapiente itaque quia? Natus, fuga alias aut magni deleniti, ipsam aperiam consequatur molestiae mollitia odit numquam quasi.
            </p>
        </div>
        <div className="flex-shrink-0 mx-auto w-full max-w-md shadow-2xl bg-white p-8 border rounded-md">
        <form onSubmit={handleLogin} className="mt-6 bg-pink-200 rounded-md p-4">
            <div className="mb-4">
                <label className="block mb-1">
                    <span className="text-sm font-semibold">Email</span>
                    <input type="email" name="email" placeholder="Email" className="block w-full border rounded-md py-1 px-2" />
                </label>
            </div>
            <div className="mb-4">
                <label className="block mb-1">
                    <span className="text-sm font-semibold">Password</span>
                    <input type="password" name="password" placeholder="Password" className="block w-full border rounded-md py-1 px-2" />
                </label>
                <label className="text-sm">
                    <a href="#" className="text-blue-500 hover:underline">
                        Forgot password?
                    </a>
                </label>
                <LoadCanvasTemplate />
                <input onBlur={handleValidateCaptcha} type="text" name="captcha" placeholder="Type captcha" className="block w-full border rounded-md py-1 px-2 mt-2" />

                <div className=" flex justify-center items-center text-center flex-col">
                <p className="hover:cursor-pointer mt-2 bg-pink-500 hover:bg-pink-700 w-1/3 rounded-full text-white">Validate</p>
            </div>
            </div>
            {loginError && (
                <p className="text-red-500">{loginError}</p>
            )}
            <div className=" flex justify-center items-center flex-col">
            <button className="hover:cursor-pointer bg-pink-500 w-1/2 rounded-full text-white disabled:opacity-50 disabled:hover:bg-pink-500 hover:bg-pink-700 disabled:hover:cursor-not-allowed" disabled={disabled}>Login</button>
            </div>
        </form>
        
        <p className="text-center text-black mt-4">
            Do not have an account? <Link className="font-semibold text-purple-700" to={"/signup"}>Signup</Link>
        </p>
        <SocialLogin></SocialLogin>
        </div>
    </div>
</div>


    );
};

export default Login;