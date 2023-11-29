import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className="flex">
            <div className="w-64 p-8 min-h-full bg-purple-200">
                <ul className="rounded-md space-y-4">
                    <li>
                        <NavLink to={"/dashboard/adminDashboard"} className="block py-2 bg-slate-100 px-4 rounded-md hover:bg-purple-300">Admin Dashboard</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/dashboard/manageUsers"}  className="block py-2 bg-slate-100 px-4 rounded-md hover:bg-purple-300">Manage Users</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/dashboard/myContactRequest"} className="block py-2 bg-slate-100 px-4 rounded-md hover:bg-purple-300">My Contact Request</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/dashboard/myFavoriteBiodata"} className="block py-2 bg-slate-100 px-4 rounded-md hover:bg-purple-300">Favourites Biodata</NavLink>
                    </li>
                    <li>
                        <hr className='my-8' />
                    </li>
                    <li>
                        <NavLink to={"/dashboard/editInfo"} className="block py-2 bg-slate-100 px-4 rounded-md hover:bg-purple-300">Edit Biodata</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/dashboard/userInfo"}  className="block py-2 bg-slate-100 px-4 rounded-md hover:bg-purple-300">View Biodata</NavLink>
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
