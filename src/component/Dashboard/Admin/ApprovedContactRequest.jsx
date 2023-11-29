import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import useContactRequest from "../../hooks/useContactRequest";
import useUsers from "../../hooks/useUsers";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";


const ApprovedContactRequest = () => {

    const { user } = useContext(AuthContext);
    const [reqUsers, refetch] = useContactRequest();
    const [users] = useUsers();
    const axiosSecure = useAxiosSecure();


    const filteredReqUsers = reqUsers.filter((reqUser) => reqUser?.email === user?.email);
    console.log(filteredReqUsers);

    const handleApprove = (itemId) => {
        console.log("Item ID to approve:", itemId);
        // Perform logic to approve the request using the itemId

        Swal.fire({
            title: "Approve the Request?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Approve!"
        }).then((result) => {
            if (result.isConfirmed) {

                axiosSecure.patch(`/approvedContactRequest/${itemId}`)
                    .then(res => {
                        if (res.data.modifiedCount) {
                            refetch();

                            console.log('user is Approve now');
                            Swal.fire({
                                title: "Approved Succeed!",
                                icon: "success"
                            });
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
            <div className="flex items-center justify-center my-4">
                <h1 className="text-2xl text-pink-700 font-semibold mb-4">Approved Contact Request</h1>
            </div>

            {/* Cards for Mobile and Tablet */}
            <div className="lg:hidden">
                {filteredReqUsers?.map((item, i) => (
                    <div key={i} className="bg-white border rounded-lg shadow-md p-4 mb-4">
                        <p className="border-b border-gray-200 pb-2"><span className="font-semibold">Name:</span> {item?.refName}</p>
                        <p className="border-b border-gray-200 pb-2"><span className="font-semibold">Bio ID:</span> {item?.refBioId}</p>
                        <p className="border-b border-gray-200 pb-2"><span className="font-semibold">Email:</span> {item?.refEmail}</p>
                        {
                            item?.status === 'pending' ?
                                <button onClick={() => handleApprove(item?._id)} className="mt-2 bg-pink-500 hover:bg-pink-600 text-white py-1 px-3 rounded mx-1">
                                    Pending
                                </button>
                                :
                                <button className="mt-2 bg-pink-700 hover:bg-pink-600 text-white py-1 px-3 rounded mx-1">
                                    Approved
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
                                        {filteredReqUsers?.map((item, i) => (
                                            <tr key={i} className="hover:bg-gray-100">
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="text-sm font-medium text-gray-900">{item?.refName}</div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="text-sm font-medium text-gray-900">{item?.refBioId}</div>
                                                </td>

                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="text-sm text-gray-500">{item?.refEmail}</div>
                                                </td>
                                                {
                                                    item?.status === 'pending' ?
                                                        <button onClick={() => handleApprove(item?._id)} className="mt-2 bg-pink-500 hover:bg-pink-600 text-white py-1 px-3 rounded mx-1">
                                                            Pending
                                                        </button>
                                                        :
                                                        <button className="mt-2 bg-pink-700 hover:bg-pink-600 text-white py-1 px-3 rounded mx-1">
                                                            Approved
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

export default ApprovedContactRequest;

