import {
    createBrowserRouter
} from "react-router-dom";
import Main from "../Main/Main";
import Home from "../Home/Home";
import SignUp from "../SignUp/SignUp";
import Login from "../Login/Login";
import Dashboard from "../Layout/Dashboard";
import UserInfo from "../Dashboard/UserInfo";
import EditBio from "../Dashboard/EditBio";
import UserDetails from "../Home/UserDetails";
import Checkout from "../Payment/Checkout";
import MyContactRequest from "../Dashboard/MyContactRequest";
import MyFavoriteBiodata from "../Dashboard/myFavoriteBiodata";
import ManageUsers from "../Dashboard/Admin/ManageUsers";
import AdminDashboard from "../Dashboard/Admin/AdminDashboard";
import ApprovedContactRequest from "../Dashboard/Admin/ApprovedContactRequest";
import ApprovedPremium from "../Dashboard/Admin/ApprovedPremium";
import AllBioData from "../Home/AllBioData";
import PrivateRoutes from "./PrivateRoutes";
import AdminRoute from "./AdminRoute";
import GotMarried from "../Dashboard/GotMarrid";
import SuccessStoriesAdminPanel from "../Dashboard/SuccessStoriesAdminPanel";
import Err404 from "../Layout/Err404";




export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement:<Err404></Err404>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/userDetail/:id',
                element: <PrivateRoutes>
                    <UserDetails></UserDetails>
                </PrivateRoutes>
            },
            {
                path: '/checkout/:id',
                element: <PrivateRoutes>
                    <Checkout></Checkout>
                </PrivateRoutes>
            },
            {
                path: '/allBioData',
                element: <AllBioData></AllBioData>
            },

        ]
    },
    {
        path: "dashboard",
        element: <PrivateRoutes>
            <Dashboard></Dashboard>
        </PrivateRoutes>,
        children: [
            {
                path: 'userInfo',
                element: <UserInfo></UserInfo>
            },

            {
                path: 'editInfo',
                element: <EditBio></EditBio>
            },
            {
                path: 'myContactRequest',
                element: <MyContactRequest></MyContactRequest>
            },
            {
                path: 'myFavoriteBiodata',
                element: <MyFavoriteBiodata></MyFavoriteBiodata>
            },
            {
                path: 'manageUsers',
                element: <AdminRoute>
                    <ManageUsers></ManageUsers>
                </AdminRoute>
            },
            {
                path: 'adminDashboard',
                element: <AdminRoute>
                    <AdminDashboard></AdminDashboard>
                </AdminRoute>
            },
            {
                path: 'approvedContactRequest',
                element: <AdminRoute>
                    <ApprovedContactRequest></ApprovedContactRequest>
                </AdminRoute>
            },
            {
                path: 'approvedPremium',
                element: <AdminRoute>
                    <ApprovedPremium></ApprovedPremium>
                </AdminRoute>
            },
            {
                path: 'gotMarried',
                element: <GotMarried></GotMarried>
            },
            {
                path: 'successStories',
                element: <AdminRoute>
                    <SuccessStoriesAdminPanel></SuccessStoriesAdminPanel>
                </AdminRoute>
            },



        ]
    },
]);