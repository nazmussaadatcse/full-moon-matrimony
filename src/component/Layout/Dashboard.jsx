import { useContext } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';
import useAxiosSecure from '../hooks/useAxiosSecure';
import Swal from 'sweetalert2';
import useUsers from '../hooks/useUsers';
import useAdmin from '../hooks/useAdmin';

const Dashboard = () => {

    const { user, logOut } = useContext(AuthContext);
    const axiosSecure = useAxiosSecure();
    const [users,] = useUsers();
    const [isAdmin, isAdminLoading] = useAdmin();


    const currentUser = users.find(userData => userData?.email === user?.email);

    const userData = {
        name: currentUser?.name,
        email: currentUser?.email,
        bioId: currentUser?.bioId
    };
    // console.log(userData);
    console.log(currentUser);

    const handleLogout = () => {

        Swal.fire({
            title: "Are You Sure?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, logOut !"
        }).then((result) => {
            if (result.isConfirmed) {
                logOut()
                    .then()
                    .catch()

            }
        });

    }



    const makePremium = () => {
        console.log(`Making user with email premium`);

        Swal.fire({
            title: "Send Premium Request To Admin?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Send Request !"
        }).then((result) => {
            if (result.isConfirmed) {

                axiosSecure.post(`/userToPremium`, userData)
                    .then(res => {
                        if (res.data.insertedId) {

                            Swal.fire({
                                title: "Request Sent!!",
                                text: "Waiting for Admin Approval.",
                                icon: "success"
                            });
                        }
                        else {
                            console.log('user not updating to Premium..!');
                            Swal.fire({
                                icon: "error",
                                title: "You Already Sent A Request!",
                                text: "Wait For Admin Approval",
                            });
                        }
                    })

            }
        });

    };


    return (
        <div className="flex">
            {
                isAdmin ?
                    <div className="w-64 p-8 min-h-full bg-pink-300">
                        <ul className="rounded-md space-y-4">
                            <li className='text-red-700 font-semibold px-1'>
                                <p className='text-sm'>Admin Email (current):</p>
                                <p className='text-sm'>{user?.email}</p>
                            </li>
                            <li>
                                <NavLink to={"/dashboard/adminDashboard"} className="block py-2 bg-slate-100 border border-pink-600 px-4   rounded-md hover:bg-purple-300">Admin Dashboard</NavLink>
                            </li>
                            <li>
                                <NavLink to={"/dashboard/manageUsers"} className="block py-2 bg-slate-100   border-pink-600 px-4 border rounded-md hover:bg-purple-300">Manage Users</NavLink>
                            </li>
                            <li>
                                <NavLink to={"/dashboard/approvedPremium"} className="block py-2 bg-slate-100 border border-pink-600 px-4   rounded-md hover:bg-purple-300"> Approved Premium</NavLink>
                            </li>
                            <li>
                                <NavLink to={"/dashboard/approvedContactRequest"} className="block py-2 bg-slate-100   border-pink-600 px-4  border rounded-md hover:bg-purple-300">Approved Contact Request</NavLink>
                            </li>
                            <li>
                                <hr />
                            </li>
                            {
                                currentUser?.userType === 'premium' ?
                                    <button className="mt-2 bg-pink-500 hover:bg-pink-600 text-white py-1 px-7 rounded ">
                                        Profile is Premium
                                    </button>
                                    :
                                    <button onClick={() => makePremium()} className="mt-2 bg-pink-500 hover:bg-pink-600 text-white py-1 px-8 rounded ">
                                        Request Premium
                                    </button>
                            }

                            <li>
                                <NavLink to={"/dashboard/userInfo"} className="block py-2 bg-slate-100 border border-pink-600 px-4 rounded-md hover:bg-purple-300">View Biodata</NavLink>
                            </li>
                            <li>
                                <NavLink to={"/dashboard/editInfo"} className="block py-2 bg-slate-100 border border-pink-600 px-4 rounded-md hover:bg-purple-300">Edit Biodata</NavLink>
                            </li>
                            <li>
                                <NavLink to={"/dashboard/myContactRequest"} className="block py-2 bg-slate-100 border border-pink-600 px-4 rounded-md hover:bg-purple-300">My Contact Request</NavLink>
                            </li>
                            <li>
                                <NavLink to={"/dashboard/myFavoriteBiodata"} className="block py-2 bg-slate-100 border border-pink-600 px-4 rounded-md hover:bg-purple-300">Favourites Biodata</NavLink>
                            </li>
                            <li>
                                <NavLink to={"/"} className="block py-2 bg-slate-100 border border-pink-600 px-4 rounded-md hover:bg-purple-300">Home</NavLink>
                            </li>
                            <li>
                                <NavLink to={"/"} className="block py-2 bg-slate-100 border border-pink-600 px-4 rounded-md hover:bg-purple-300">Got Married</NavLink>
                            </li>
                            <li>
                                <button onClick={handleLogout} className="mt-2 bg-pink-500 hover:bg-pink-600 text-white py-1 px-8 rounded ">
                                    LogOut
                                </button>
                            </li>


                        </ul>
                    </div>
                    :
                    <div className="w-64 p-8 min-h-full bg-purple-200">
                        <ul className="rounded-md space-y-4">


                            {
                                currentUser?.userType === 'premium' ?
                                    <button className="mt-2 bg-pink-500 hover:bg-pink-600 text-white py-1 px-7 rounded ">
                                        Profile is Premium
                                    </button>
                                    :
                                    <button onClick={() => makePremium()} className="mt-2 bg-pink-500 hover:bg-pink-600 text-white py-1 px-8 rounded ">
                                        Request Premium
                                    </button>
                            }

                            <li>
                                <NavLink to={"/dashboard/userInfo"} className="block py-2 bg-slate-100 border border-pink-600 px-4 rounded-md hover:bg-purple-300">View Biodata</NavLink>
                            </li>
                            <li>
                                <NavLink to={"/dashboard/editInfo"} className="block py-2 bg-slate-100 border border-pink-600 px-4 rounded-md hover:bg-purple-300">Edit Biodata</NavLink>
                            </li>
                            <li>
                                <NavLink to={"/dashboard/myContactRequest"} className="block py-2 bg-slate-100 border border-pink-600 px-4 rounded-md hover:bg-purple-300">My Contact Request</NavLink>
                            </li>
                            <li>
                                <NavLink to={"/dashboard/myFavoriteBiodata"} className="block py-2 bg-slate-100 border border-pink-600 px-4 rounded-md hover:bg-purple-300">Favourites Biodata</NavLink>
                            </li>
                            <li>
                                <NavLink to={"/"} className="block py-2 bg-slate-100 border border-pink-600 px-4 rounded-md hover:bg-purple-300">Got Married</NavLink>
                            </li>
                            <li>
                                <NavLink to={"/"} className="block py-2 bg-slate-100 border border-pink-600 px-4 rounded-md hover:bg-purple-300">Home</NavLink>
                            </li>
                            <li>
                                <button onClick={handleLogout} className="mt-2 bg-pink-500 hover:bg-pink-600 text-white py-1 px-8 rounded ">
                                    logOut
                                </button>
                            </li>


                        </ul>
                    </div>
            }
            <div className="flex-1 p-8">
                <Outlet />
            </div>
        </div>
    );
};

export default Dashboard;
