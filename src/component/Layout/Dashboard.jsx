import { useContext } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';
import useAxiosSecure from '../hooks/useAxiosSecure';
import Swal from 'sweetalert2';
import useUsers from '../hooks/useUsers';

const Dashboard = () => {

    const { user } = useContext(AuthContext);
    const axiosSecure = useAxiosSecure();
    const [users,] = useUsers();
    // console.log(users);
    // console.log(user?.email);

    const currentUser = users.find(userData => userData?.email === user?.email);

    const userData = {
        name: currentUser?.name,
        email: currentUser?.email, 
        bioId: currentUser?.bioId
    };
    // console.log(userData);



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
            <div className="w-64 p-8 min-h-full bg-purple-200">
                <ul className="rounded-md space-y-4">
                    <li>
                        <NavLink to={"/dashboard/adminDashboard"} className="block py-2 bg-slate-100 px-4 rounded-md hover:bg-purple-300">Admin Dashboard</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/dashboard/manageUsers"} className="block py-2 bg-slate-100 px-4 rounded-md hover:bg-purple-300">Manage Users</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/dashboard/approvedPremium"} className="block py-2 bg-slate-100 px-4 rounded-md hover:bg-purple-300"> Approved Premium</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/dashboard/approvedContactRequest"} className="block py-2 bg-slate-100 px-4 rounded-md hover:bg-purple-300">Approved Contact Request</NavLink>
                    </li>
                    <li>
                        <hr className='my-8' />
                    </li>
                    <button onClick={() => makePremium()} className="mt-2 bg-pink-500 hover:bg-pink-600 text-white py-1 px-8 rounded ">
                        Request Premium
                    </button>
                   
                    <li>
                        <NavLink to={"/dashboard/editInfo"} className="block py-2 bg-slate-100 px-4 rounded-md hover:bg-purple-300">Edit Biodata</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/dashboard/userInfo"} className="block py-2 bg-slate-100 px-4 rounded-md hover:bg-purple-300">View Biodata</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/dashboard/myContactRequest"} className="block py-2 bg-slate-100 px-4 rounded-md hover:bg-purple-300">My Contact Request</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/dashboard/myFavoriteBiodata"} className="block py-2 bg-slate-100 px-4 rounded-md hover:bg-purple-300">Favourites Biodata</NavLink>
                    </li>
                    <li>
                        <button className="block py-2  px-4 rounded-md bg-purple-600 text-white hover:bg-purple-700">Logout</button>
                    </li>


                </ul>
            </div>
            <div className="flex-1 p-8">
                <Outlet />
            </div>
        </div>
    );
};

export default Dashboard;
