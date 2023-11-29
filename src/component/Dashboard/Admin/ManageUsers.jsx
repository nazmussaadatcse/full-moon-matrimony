import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useUsers from "../../hooks/useUsers";



const ManageUsers = () => {
    const [users, refetch] = useUsers();
    const axiosSecure = useAxiosSecure();
    console.log(users);

    const adminView = () => {
        Swal.fire({
            title: "Already an Admin",
            icon: "warning"
        });
    }
    const premiumView = () => {
        Swal.fire({
            title: "Already Premium User",
            icon: "warning"
        });
    }

    const makeAdmin = (userId) => {
        console.log(`Making user with ID ${userId} an admin`);

        Swal.fire({
            title: "Making an Admin?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, make admin!"
        }).then((result) => {
            if (result.isConfirmed) {

                axiosSecure.patch(`/userToAdmin/${userId}`)
                    .then(res => {
                        if (res.data.modifiedCount) {
                            refetch();

                            console.log('user is admin now');
                            Swal.fire({
                                title: "The User is Admin Now!",
                                text: "New Admin Arrived!!.",
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

    const makePremium = (userId) => {
        console.log(`Making user with ID ${userId} premium`);

        Swal.fire({
            title: "Making Premium User?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, make premium!"
        }).then((result) => {
            if (result.isConfirmed) {

                axiosSecure.patch(`/userToPremium/${userId}`)
                    .then(res => {
                        if (res.data.modifiedCount) {
                            refetch();

                            console.log('user is Premium now');
                            Swal.fire({
                                title: "The User is Premium Now!",
                                text: "New Premium User Arrived!!.",
                                icon: "success"
                            });
                        }
                        else {
                            console.log('user not updating to Premium..!');
                        }
                    })

            }
        });
    };


    return (
        <div>
            <div className="flex items-center justify-center my-4">
                <h1 className="text-2xl text-pink-700 font-semibold mb-4">Manage Users</h1>
            </div>

            {/* Cards for Mobile and Tablet */}
            <div className="lg:hidden">
                {users?.map((item, i) => (
                    <div key={i} className="bg-white border rounded-lg shadow-md p-4 mb-4">
                        {i + 1}.
                        <p className="border-b border-gray-200 pb-2"><span className="font-semibold">Name:</span> {item?.name}</p>
                        <p className="border-b border-gray-200 pb-2"><span className="font-semibold">Email:</span> {item?.email}</p>

                        {
                            item?.role === 'admin' ?
                                <button onClick={() => adminView()} className="mt-2 bg-pink-700 hover:bg-pink-600 text-white py-1 px-3 rounded mx-1">
                                    Admin
                                </button>
                                :
                                <button onClick={() => makeAdmin(item?._id)} className="mt-2 bg-pink-500 hover:bg-pink-600 text-white py-1 px-3 rounded mx-1">
                                    Make Admin
                                </button>
                        }
                        {
                            item?.userType === 'premium' ?
                                <button onClick={() => premiumView()} className="mt-2 bg-pink-700 hover:bg-pink-600 text-white py-1 px-3 rounded mx-1">
                                    Premium User
                                </button>
                                :
                                <button onClick={() => makePremium(item?._id)} className="mt-2 bg-pink-500 hover:bg-pink-600 text-white py-1 px-3 rounded mx-1">
                                    Make Premium
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
                                                Email
                                            </th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Action
                                            </th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Action
                                            </th>



                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200">
                                        {users?.map((item, i) => (
                                            <tr key={i} className="hover:bg-gray-100">
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="text-sm font-medium text-gray-900">{i + 1}. {item?.name}</div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="text-sm font-medium text-gray-900">{item?.email}</div>
                                                </td>
                                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                    {
                                                        item?.role === 'admin' ?
                                                            <button onClick={() => adminView()} className="mt-2 bg-pink-700 hover:bg-pink-600 text-white py-1 px-3 rounded mx-1">
                                                                Admin
                                                            </button>
                                                            :
                                                            <button onClick={() => makeAdmin(item?._id)} className="mt-2 bg-pink-500 hover:bg-pink-600 text-white py-1 px-3 rounded mx-1">
                                                                Make Admin
                                                            </button>
                                                    }
                                                </th>
                                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                    {
                                                        item?.userType === 'premium' ?
                                                            <button onClick={() => premiumView()} className="mt-2 bg-pink-700 hover:bg-pink-600 text-white py-1 px-3 rounded mx-1">
                                                                Premium User
                                                            </button>
                                                            :
                                                            <button onClick={() => makeAdmin(item?._id)} className="mt-2 bg-pink-500 hover:bg-pink-600 text-white py-1 px-3 rounded mx-1">
                                                                Make Admin
                                                            </button>
                                                    }
                                                </th>


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

export default ManageUsers;