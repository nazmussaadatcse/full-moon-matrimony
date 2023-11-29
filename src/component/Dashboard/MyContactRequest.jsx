import { useContext } from "react";
import useContactRequest from "../hooks/useContactRequest";
import useUsers from "../hooks/useUsers";
import { AuthContext } from "../Providers/AuthProvider";
import { Link } from "react-router-dom";


const MyContactRequest = () => {

    const { user } = useContext(AuthContext);
    const [reqUsers] = useContactRequest();
    const [users] = useUsers();

    // const userRequestedIds = reqUsers
    //     .filter(reqUser => reqUser?.email === user?.email) // Filter based on user email
    //     .map(reqUser => reqUser?.refUserId); // Map to extract refUserId
    // console.log(userRequestedIds);


    // const usersMatchingRequestedIds = users.filter(userData =>
    //     userRequestedIds.includes(userData._id)
    // );
    // console.log(usersMatchingRequestedIds);

    const filteredReqUsers = reqUsers.filter((reqUser) => reqUser?.email === user?.email);
    console.log(filteredReqUsers);





    return (
        <div>
            <div className="flex items-center justify-center my-4">
                <h1 className="text-2xl text-pink-700 font-semibold mb-4">My Contact Request collection</h1>
            </div>

            {/* Cards for Mobile and Tablet */}
            <div className="lg:hidden">
                {filteredReqUsers?.map((item, i) => (
                    <div key={i} className="bg-white border rounded-lg shadow-md p-4 mb-4">
                        <p className="border-b border-gray-200 pb-2"><span className="font-semibold">Name:</span> {item?.refName}</p>
                        <p className="border-b border-gray-200 pb-2"><span className="font-semibold">Bio ID:</span> {item?.refBioId}</p>
                        <p className="border-b border-gray-200 pb-2"><span className="font-semibold">Status:</span> {item?.status}</p>
                        <p className="border-b border-gray-200 pb-2"><span className="font-semibold">Email:</span> {item?.status === 'pending' ? 'Requested' : item?.refEmail}</p>
                        <p className="border-b border-gray-200 pb-2"><span className="font-semibold">Phone:</span> {item?.status === 'pending' ? 'Requested' : item?.refMobileNumber} </p>
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
                                                Status
                                            </th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Email
                                            </th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Phone
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
                                                    <div className="text-sm text-gray-500">{item?.status}</div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="text-sm text-gray-500">{item?.status === 'pending' ? 'Requested' : item?.refEmail}</div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="text-sm text-gray-500">{item?.status === 'pending' ? 'Requested' : item?.refMobileNumber}</div>
                                                </td>
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

export default MyContactRequest;