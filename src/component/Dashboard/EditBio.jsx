import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { useQuery } from "@tanstack/react-query";
import useUsers from "../hooks/useUsers";



const EditBio = () => {


    const [users,] = useUsers(); //todo hook 
    // console.log(users);
    const { user } = useContext(AuthContext);
    const axiosSecure = useAxiosSecure();
    const [userId, setUserId] = useState(null); // State to hold the found user ID
    const [bioId, setBioId] = useState(null);

    console.log(users);

    useEffect(() => {
        if (users) {
            const foundBioId = users?.bioId;
            if (foundBioId) {
                setBioId(foundBioId);
            } else {
                setBioId(users.length + 1);
            }
        }
    }, [users]);



    useEffect(() => {
        const loggedUser = users.find(person => person?.email === user?.email);
        if (loggedUser) {
            setUserId(loggedUser._id);
        }
    }, [users, user]);




    const idX = (userId);
    // const bioId = ([users].length + 1);
    console.log(bioId);
    console.log(idX);


    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();



    const onSubmit = (data) => {
        // Handle form submission with the collected data
        console.log(data);

        axiosSecure.put(`/users/${idX}`, data)
            .then(res => {
                console.log(res.data);
                if (res.data.modifiedCount && res.data.matchedCount) {
                    Swal.fire({
                        position: "top-center",
                        icon: "success",
                        title: "saved and Published",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })


    };



    return (
        <div className="flex items-center justify-center min-h-screen bg-base-50">
            <div className="max-w-xl w-full bg-base-100 shadow-2xl rounded-lg p-8">
                {
                    user &&
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                        <div className="text-center">
                            <h1 className="text-3xl mb-2 font-bold">Biodata Form</h1>
                            <label className="p-1 rounded-md bg-pink-100 font-semibold">Bio Data ID : {bioId} </label>
                        </div>

                        <div>
                            <input className="text-transparent" type="text" readOnly defaultValue={user ? users?.bioId : bioId} {...register('bioId')} />
                            {/* The rest of your visible content */}
                        </div>
                        <div className=" border rounded-md p-2">
                            <label className="p-1 rounded-md bg-slate-100">Biodata Type: </label>
                            <select className="mx-1 p-1" defaultValue={user ? users?.biodataType : ''} {...register('biodataType', { required: true })}>
                                <option value="">Select Type</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                            </select>
                            {errors.biodataType && <span className="text-red-500">This field is required</span>}
                        </div>
                        <div className=" border rounded-md p-2">
                            <label className="p-1 rounded-md bg-slate-100">Full Name: </label>
                            <input className="p-1 mx-1" type="text" defaultValue={user ? users?.name : user.displayName} {...register('name', { required: true })} />
                            {errors.name && <span className="text-red-500">This field is required</span>}
                        </div>
                        {/* <div>
                            <input type="hidden" defaultValue={idX} {...register('idx')} />
                        </div> */}
                        <div className=" border rounded-md p-2">
                            <label className="p-1 rounded-md bg-slate-100">PhotoURL: </label>
                            <input className="p-1 mx-1 w-4/5" type="text" defaultValue={user ? users?.photo : user.photoURL} {...register('photo')} />
                        </div>
                        <div className=" border rounded-md p-2">
                            <label className="p-1 rounded-md bg-slate-100">Date of Birth: </label>
                            <input className="p-1 mx-1" type="date" defaultValue={user ? users?.dateOfBirth : 'null'}{...register('dateOfBirth')} />
                        </div>
                        <div className="border rounded-md p-2">
                            <label className="p-1 rounded-md bg-slate-100">Height: </label>
                            <select className="p-1 mx-1" defaultValue={user ? users?.height : ''} {...register('height', { required: true })}>
                                <option value="">Select Height</option>
                                <option value="4">4 feet</option>
                                <option value="4.5">4.5 feet</option>
                                <option value="5">5 feet</option>
                                <option value="5.5">5.5 feet</option>
                                <option value="6">6 feet</option>
                                <option value="7">7 feet</option>
                            </select>
                            {errors.height && <span className="text-red-500">This field is required</span>}
                        </div>

                        <div className="border rounded-md p-2">
                            <label className="p-1 rounded-md bg-slate-100">Weight: </label>
                            <select className="p-1 mx-1" defaultValue={user ? users?.weight : ''}  {...register('weight', { required: true })}>
                                <option value="">Select Weight</option>
                                <option value="60">60 kg</option>
                                <option value="70">70 kg</option>
                                <option value="50">50 kg</option>

                            </select>
                            {errors.weight && <span className="text-red-500">This field is required</span>}
                        </div>
                        <div className=" border rounded-md p-2">
                            <label className="p-1 rounded-md bg-slate-100">Age: </label>
                            <input placeholder="18 years old" className="p-1 mx-1 w-20" type="number" defaultValue={user ? users?.age : ''} {...register('age', { required: true, min: 18 })} />
                            {errors.age && errors.age.type === 'min' && (
                                <span className="text-red-500">Age must be at least 18</span>
                            )}
                        </div>

                        <div className="border rounded-md p-2">
                            <label className="p-1 rounded-md bg-slate-100">Occupation: </label>
                            <select className="p-1 mx-1" defaultValue={user ? users?.occupation : ''} {...register('occupation', { required: true })}>
                                <option value="">Select Occupation</option>
                                <option value="Teacher">Teacher</option>
                                <option value="Engineer">Engineer</option>
                                <option value="Doctor">Doctor</option>
                                {/* Add more options as needed */}
                            </select>
                            {errors.occupation && <span className="text-red-500">This field is required</span>}
                        </div>

                        <div className="border rounded-md p-2">
                            <label className="p-1 rounded-md bg-slate-100">Race</label>
                            <select className="p-1 mx-1" defaultValue={user ? users?.race : ''} {...register('race', { required: true })}>
                                <option value="">Select Race</option>
                                <option value="Asian">Asian</option>
                                <option value="American">American</option>
                                <option value="European">European</option>
                                {/* Add more options as needed */}
                            </select>
                            {errors.race && <span className="text-red-500">This field is required</span>}
                        </div>

                        <div className=" border rounded-md p-2">
                            <label className="p-1 rounded-md bg-slate-100">Fathers name :</label>
                            <input placeholder="Your dad name " className="p-1 mx-1 w-3/5" type="text" defaultValue={user ? users?.fathersName : ''} {...register('fathersName')} />
                        </div>
                        <div className=" border rounded-md p-2">
                            <label className="p-1 rounded-md bg-slate-100">Mothers name: </label>
                            <input placeholder="Your mom name" className="p-1 mx-1 w-3/5" type="text" defaultValue={user ? users?.mothersName : ''} {...register('mothersName')} />
                        </div>
                        <div className=" border rounded-md p-2">
                            <label className="p-1 rounded-md bg-slate-100">Permanent Division: </label>
                            <select className="mx-1 p-1" defaultValue={user ? users?.permanentDivisionName : ''} {...register('permanentDivisionName', { required: true })}>
                                <option value="">Select City</option>
                                <option value="Dhaka">Dhaka</option>
                                <option value="Chattagram">Chattagram</option>
                                <option value="Rangpur">Rangpur</option>
                                <option value="Barisal">Barisal</option>
                                <option value="Khulna">Khulna</option>
                                <option value="Maymansign">Maymansign</option>
                                <option value="Sylhet">Sylhet</option>
                            </select>
                            {errors.permanentDivisionName && <span className="text-red-500">This field is required</span>}
                        </div>
                        <div className=" border rounded-md p-2">
                            <label className="p-1 rounded-md bg-slate-100">Present Division: </label>
                            <select className="mx-1 p-1" defaultValue={user ? users?.presentDivisionName : ''} {...register('presentDivisionName', { required: true })}>
                                <option value="">Select City</option>
                                <option value="Dhaka">Dhaka</option>
                                <option value="Chattagram">Chattagram</option>
                                <option value="Rangpur">Rangpur</option>
                                <option value="Barisal">Barisal</option>
                                <option value="Khulna">Khulna</option>
                                <option value="Maymansign">Maymansign</option>
                                <option value="Sylhet">Sylhet</option>
                            </select>
                            {errors.presentDivisionName && <span className="text-red-500">This field is required</span>}
                        </div>
                        <div className=" border rounded-md p-2">
                            <label className="p-1 rounded-md bg-slate-100">Expected Partner Age: </label>
                            <input placeholder="20 years old" className="p-1 mx-1 w-20" type="number" defaultValue={user ? users?.expectedPartnerAge : ''} {...register('expectedPartnerAge', { required: true, min: 18 })} />
                            {errors.expectedPartnerAge && errors.expectedPartnerAge.type === 'min' && (
                                <span className="text-red-500">Age must be at least 18</span>
                            )}
                        </div>

                        <div className="border rounded-md p-2">
                            <label className="p-1 rounded-md bg-slate-100">Expected Partner Height: </label>
                            <select className="p-1 mx-1" defaultValue={user ? users?.expectedPartnerHeight : ''} {...register('expectedPartnerHeight', { required: true })}>
                                <option value="">Select Height</option>
                                <option value="4">4 feet</option>
                                <option value="4.5">4.5 feet</option>
                                <option value="5.5">5.5 feet</option>
                                <option value="6">6 feet</option>
                                <option value="7">7 feet</option>
                                {/* Add more options as needed */}
                            </select>
                            {errors.expectedPartnerHeight && <span className="text-red-500">This field is required</span>}
                        </div>

                        <div className="border rounded-md p-2">
                            <label className="p-1 rounded-md bg-slate-100">Expected Partner Weight: </label>
                            <select className="p-1 mx-1" defaultValue={user ? users?.expectedPartnerWeight : ''} {...register('expectedPartnerWeight', { required: true })}>
                                <option value="">Select Weight</option>
                                <option value="50">50 kg</option>
                                <option value="60">60 kg</option>
                                <option value="70">70 kg</option>
                                <option value="80">80 kg</option>
                                {/* Add more options as needed */}
                            </select>
                            {errors.expectedPartnerWeight && <span className="text-red-500">This field is required</span>}
                        </div>

                        <div className=" border rounded-md p-2">
                            <label className="p-1 rounded-md bg-slate-100">Contact Email:</label>
                            <input className="p-1 mx-1 text-gray-500" type="email" readOnly value={user.email} {...register('contactEmail')} />
                        </div>
                        <div className=" border rounded-md p-2">
                            <label className="p-1 rounded-md bg-slate-100">Mobile Number: </label>
                            <input placeholder="01303033418" className="p-1 mx-1" type="tel" defaultValue={user ? users?.mobileNumber : ''} {...register('mobileNumber', { required: true })} />
                            {errors.mobileNumber && <span className="text-red-500">This field is required</span>}
                        </div>
                        <div className="text-center">
                            <button type="submit" className="bg-pink-500 hover:bg-pink-700 text-white py-2 px-4 rounded-full">
                                Save and Publish
                            </button>
                        </div>
                    </form>
                }
            </div>
        </div>
    );
};



export default EditBio;