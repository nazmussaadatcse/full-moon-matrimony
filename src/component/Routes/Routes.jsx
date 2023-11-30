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
  
  
  export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
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
                element: <Checkout></Checkout>
            },
            {
                path: '/allBioData',
                element: <AllBioData></AllBioData>
            },
            
        ]
    },
    {
        path: "dashboard",
        element: <Dashboard></Dashboard>,
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
                element: <ManageUsers></ManageUsers>
            },
            {
                path: 'adminDashboard',
                element: <AdminRoute>
                    <AdminDashboard></AdminDashboard>
                </AdminRoute>
            },
            {
                path: 'approvedContactRequest',
                element: <ApprovedContactRequest></ApprovedContactRequest>
            },
            {
                path: 'approvedPremium',
                element: <ApprovedPremium></ApprovedPremium>
            },
           
          
            
        ]
    },
  ]);