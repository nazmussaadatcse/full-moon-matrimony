import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import { AuthContext } from "../Providers/AuthProvider";



const AdminRoute = ({ children }) => {

    const [isAdmin, isAdminLoading] = useAdmin();
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading || isAdminLoading) {
        return <div className="flex justify-center ">
            <span className="loading loading-spinner loading-lg"></span>
        </div>
    }

    if (user && isAdmin) {
        return children;
    }

    return <Navigate state={location.pathname} to='/login'></Navigate>
};

export default AdminRoute;