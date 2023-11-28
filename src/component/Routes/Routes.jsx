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
                element: <UserDetails></UserDetails>
            },
            {
                path: '/checkout/:id',
                element: <Checkout></Checkout>
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
           
          
            
        ]
    },
  ]);