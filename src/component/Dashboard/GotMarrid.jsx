import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import useAxiosSecure from '../hooks/useAxiosSecure';
import { AuthContext } from '../Providers/AuthProvider';


const GotMarried = () => {

    const { register, handleSubmit, formState: { errors } , reset} = useForm();
    const axiosSecure = useAxiosSecure();
    const { user } = useContext(AuthContext);


    const onSubmit = (data) => {
        console.log(`posting success story`);
        console.log(data);


        axiosSecure.post(`/successStories`, data)
            .then(res => {
                if (res.data.insertedId) {
                    reset()

                    Swal.fire({
                        position: "top-center",
                        icon: "success",
                        title: "Posted",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }

            })

    };

    return (
        <div>
            <h2 className="text-2xl font-bold mb-8 text-center text-pink-900"> Got Married?</h2>
            <h2 className=" font-bold mb-8 text-center text-pink-500">Please Share your success story here..</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="max-w-xl mx-auto">
                <div className="mb-4">
                    <label className="block mb-1" htmlFor="selfBiodataNumber">Self Biodata Number</label>
                    <input
                        {...register('selfBiodataNumber', { required: true })}
                        type="number"
                        id="selfBiodataNumber"
                        className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-pink-500"
                    />
                    {errors.selfBiodataNumber && <span className="text-red-500">This field is required</span>}
                </div>

                <div className="mb-4">
                    <label className="block mb-1" htmlFor="partnerBiodataNumber">Partner Biodata Number</label>
                    <input
                        {...register('partnerBiodataNumber', { required: true })}
                        type="number"
                        id="partnerBiodataNumber"
                        className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-pink-500"
                    />
                    {errors.partnerBiodataNumber && <span className="text-red-500">This field is required</span>}
                </div>

                <div className="mb-4">
                    <label className="block mb-1" htmlFor="coupleImageLink">Couple Image Link</label>
                    <input
                        {...register('coupleImageLink', { required: true })}
                        type="text"
                        id="coupleImageLink"
                        className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-pink-500"
                    />
                    {errors.coupleImageLink && <span className="text-red-500">This field is required</span>}
                </div>





                {/* Date field with React Hook Form */}
                <div className="mb-4">
                    <label className="block mb-1" htmlFor="selectedDate">Marriage Date</label>
                    <input
                        type="date"
                        {...register('selectedDate', { required: true })}
                        id="selectedDate"
                        className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-pink-500"
                    />
                    {errors.selectedDate && <span className="text-red-500">This field is required</span>}
                </div>

                {/* Review select field with React Hook Form */}
                <div className="mb-4">
                    <label className="block mb-1" htmlFor="selectedReview">Select Review</label>
                    <select
                        {...register('selectedReview', { required: true })}
                        id="selectedReview"
                        className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-pink-500"
                    >
                        <option value="">Select</option>
                        <option value="5">5</option>
                        <option value="4">4</option>
                        <option value="3">3</option>
                        <option value="2">2</option>
                        <option value="1">1</option>
                    </select>
                    {errors.selectedReview && <span className="text-red-500">This field is required</span>}
                </div>

                <div className="mb-4">
                    <label className="block mb-1" htmlFor="successStory">Success Story Review</label>
                    <textarea
                        {...register('successStory', { required: true, minLength: 200 })}
                        id="successStory"
                        className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-pink-500"
                        rows="4"
                    ></textarea>
                    {errors.successStory && errors.successStory.type === 'required' && (
                        <span className="text-red-500">This field is required</span>
                    )}
                    {errors.successStory && errors.successStory.type === 'minLength' && (
                        <span className="text-red-500">Minimum 200 characters required</span>
                    )}
                </div>

                <div className="mb-4">
                    <label className="block mb-1" htmlFor="email">
                        Email
                    </label>
                    <input
                        defaultValue={user.email} // Set the default value to user's email
                        {...register('email')}
                        type="email"
                        id="email"
                        className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-pink-500"
                        readOnly // Make the email field read-only
                    />

                </div>


                <button
                    type="submit"
                    className="bg-pink-500 hover:bg-pink-600 text-white py-2 px-4 rounded-md focus:outline-none"
                >
                    Save and Post
                </button>
            </form>
        </div>
    );
};

export default GotMarried;

