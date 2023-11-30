import Swal from "sweetalert2";
import useUsers from "../hooks/useUsers";
import useAxiosSecure from "../hooks/useAxiosSecure";
import useStories from "../hooks/useStories";




const SuccessStoriesAdminPanel = () => {
    const [users, , , ] = useUsers();
    const axiosSecure = useAxiosSecure();
    const [successStories, refetch] = useStories();

    console.log(successStories);


    const handleDelete = (id) => {
        console.log(`Making user with ID ${id} an admin`);

        Swal.fire({
            title: "Want to Deleted?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Deleted!"
        }).then((result) => {
            if (result.isConfirmed) {

                axiosSecure.delete(`/successStories/${id}`)
                    .then(res => {
                        if (res.data.deletedCount) {
                            refetch();

                            console.log('user is admin now');
                            refetch();
                            Swal.fire({
                                title: "Deleted!",
                                icon: "success"
                            });
                        }
                        else {
                            console.log(' not deleting..!');
                        }
                    })

            }
        });


    };



    return (
        <div>
            <div className="flex items-center justify-center my-4">
                <h1 className="text-2xl text-pink-700 font-semibold mb-4">Success Stories</h1>
            </div>

            {/* Cards for Mobile and Tablet */}
            <div className="lg:hidden">
                {successStories?.map((item, i) => (
                    <div key={i} className="bg-white border rounded-lg shadow-md p-4 mb-4">
                        {i + 1}.
                        <p className="border-b border-gray-200 pb-2"><span className="font-semibold">Self Bio ID:</span> {item?.selfBiodataNumber}</p>
                        <p className="border-b border-gray-200 pb-2"><span className="font-semibold">Partner Bio ID:</span> {item?.partnerBiodataNumber}</p>
                        <p className="border-b border-gray-200 pb-2"><span className="font-semibold">Email:</span> {item?.email}</p>

                        <button onClick={() => handleDelete(item?._id)} className="mt-2 bg-pink-500 hover:bg-pink-600 text-white py-1 px-3 rounded mx-1">
                            Delete
                        </button>


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
                                                Male Bio ID
                                            </th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Female Bio ID
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
                                        {successStories?.map((item, i) => (
                                            <tr key={i} className="hover:bg-gray-100">
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="text-sm font-medium text-gray-900"># {item?.selfBiodataNumber}</div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="text-sm font-medium text-gray-900"># {item?.partnerBiodataNumber}</div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="text-sm font-medium text-gray-900">{item?.email}</div>
                                                </td>
                                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                    <button onClick={() => handleDelete(item?._id)} className="mt-2 bg-pink-500 hover:bg-pink-600 text-white py-1 px-3 rounded mx-1">
                                                        Delete Story
                                                    </button>
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

export default SuccessStoriesAdminPanel;

