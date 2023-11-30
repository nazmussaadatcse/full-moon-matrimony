import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import useUsers from "../../hooks/useUsers";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useApprovePremium from "../../hooks/useApprovePremium";
import { Helmet } from "react-helmet";


const ApprovedPremium = () => {

    const { user } = useContext(AuthContext);
    const [approvePremium,premiumRefetch] = useApprovePremium();
    const [users, , , refetch] = useUsers();
    const axiosSecure = useAxiosSecure();
    const [premiumUsers, setPremiumUsers] = useState([]);
    const [nonPremiumApprovals, setNonPremiumApprovals] = useState([]);
    console.log(premiumUsers);

    console.log(approvePremium);


    useEffect(() => {
        // Filter the approvePremium data where userType !== 'premium'
        const filteredNonPremium = approvePremium.filter((item) => item.userType !== 'premium');
        setNonPremiumApprovals(filteredNonPremium);
    }, [approvePremium]);

    // useEffect(() => {
    //     // Filter users with userType === 'premium'
    //     const filteredPremiumUsers = users.filter((userData) => userData.userType === 'premium');
    //     setPremiumUsers(filteredPremiumUsers);
    // }, [users]);

    // console.log(premiumUsers);



    useEffect(() => {
        // Filter users with userType === 'premium'
        const filteredPremiumUsers = users.filter((userData) => userData.userType === 'premium');
        setPremiumUsers(filteredPremiumUsers);
    }, [users]);


    const handleApprove = (email) => {
        console.log("Item ID to approve:", email);
        // Perform logic to approve the request using the email

        Swal.fire({
            title: "Approve To Premium?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Approve!"
        }).then((result) => {
            if (result.isConfirmed) {

                axiosSecure.patch(`/premiumReqCollection/${email}`)
                    .then(res => {
                        if (res.data) {

                            console.log('User is Premium now');
                            Swal.fire({
                                title: "Premium Succeed!",
                                icon: "success"
                            });
                            refetch();
                            premiumRefetch();
                        }
                        else {
                            console.log('user not updating to admin..!');
                        }
                    })

            }
        });
    };



    return (
        <div>
            <Helmet>
                <title>FMM | Approved Premium</title>
            </Helmet>


            {/* ////////////////////////////////// */}
            <div className="flex items-center justify-center my-4">
                <h1 className="text-2xl text-pink-700 font-semibold mb-4">Approved Contact Request</h1>
            </div>

            {/* Cards for Mobile and Tablet */}
            <div className="lg:hidden">
                {premiumUsers?.map((item, i) => (
                    <div key={i} className="bg-white border rounded-lg shadow-md p-4 mb-4">
                        <p className="border-b border-gray-200 pb-2"><span className="font-semibold">Name:</span> {item?.name}</p>
                        <p className="border-b border-gray-200 pb-2"><span className="font-semibold">Bio ID:</span> {item?.bioId}</p>
                        <p className="border-b border-gray-200 pb-2"><span className="font-semibold">Email:</span> {item?.email}</p>
                        {
                            item?.userType === 'premium' ?
                                <button className="mt-2 bg-pink-700 hover:bg-pink-600 text-white py-1 px-3 rounded mx-1">
                                    Premium
                                </button>
                                :
                                <button onClick={() => handleApprove(item?.email)} className="mt-2 bg-pink-500 hover:bg-pink-600 text-white py-1 px-3 rounded mx-1">
                                    Approve
                                </button>
                        }

                        {/* Additional fields as needed */}
                    </div>
                ))}
                {nonPremiumApprovals?.map((item, i) => (
                    <div key={i} className="bg-white border rounded-lg shadow-md p-4 mb-4">
                        <p className="border-b border-gray-200 pb-2"><span className="font-semibold">Name:</span> {item?.name}</p>
                        <p className="border-b border-gray-200 pb-2"><span className="font-semibold">Bio ID:</span> {item?.bioId}</p>
                        <p className="border-b border-gray-200 pb-2"><span className="font-semibold">Email:</span> {item?.email}</p>
                        {
                            item?.userType === 'premium' ?
                                <button className="mt-2 bg-pink-700 hover:bg-pink-600 text-white py-1 px-3 rounded mx-1">
                                    Premium
                                </button>
                                :
                                <button onClick={() => handleApprove(item?.email)} className="mt-2 bg-pink-500 hover:bg-pink-600 text-white py-1 px-3 rounded mx-1">
                                    Approve
                                </button>
                        }

                        {/* Additional fields as needed */}
                    </div>
                ))}
            </div>


            {/* Table for Large Device */}
            <div className="hidden lg:block">
                <div className="flex flex-col">
                    <div className="-my-2 overflow-x-auto lg:-mx-8">
                        <div className="py-2 align-middle inline-block min-w-full lg:px-8">
                            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                                <table className="min-w-full divide-y divide-gray-200">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Name
                                            </th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                BioData ID
                                            </th>

                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Email
                                            </th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Action
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200">
                                        {premiumUsers?.map((item, i) => (
                                            <tr key={i} className="hover:bg-gray-100">
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="text-sm font-medium text-gray-900">{item?.name}</div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="text-sm font-medium text-gray-900">{item?.bioId}</div>
                                                </td>

                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="text-sm text-gray-500">{item?.email}</div>
                                                </td>
                                                {
                                                    item?.userType === 'premium' ?
                                                        <button className="mt-2 bg-pink-700 hover:bg-pink-600 text-white py-1 px-3 rounded mx-1">
                                                            Premium
                                                        </button>
                                                        :
                                                        <button onClick={() => handleApprove(item?.email)} className="mt-2 bg-pink-500 hover:bg-pink-600 text-white py-1 px-3 rounded mx-1">
                                                            Approve
                                                        </button>
                                                }
                                            </tr>
                                        ))}
                                        {nonPremiumApprovals?.map((item, i) => (
                                            <tr key={i} className="hover:bg-gray-100">
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="text-sm font-medium text-gray-900">{item?.name}</div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="text-sm font-medium text-gray-900">{item?.bioId}</div>
                                                </td>

                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="text-sm text-gray-500">{item?.email}</div>
                                                </td>
                                                {
                                                    item?.userType === 'premium' ?
                                                        <button className="mt-2 bg-pink-700 hover:bg-pink-600 text-white py-1 px-3 rounded mx-1">
                                                            Premium
                                                        </button>
                                                        :
                                                        <button onClick={() => handleApprove(item?.email)} className="mt-2 bg-pink-500 hover:bg-pink-600 text-white py-1 px-3 rounded mx-1">
                                                            Approve
                                                        </button>
                                                }
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default ApprovedPremium;


