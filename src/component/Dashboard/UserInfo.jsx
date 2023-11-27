import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import useUsers from "../hooks/useUsers";
import CustomizedTables from "./CustomizedTables";



const UserInfo = () => {
    const {user} = useContext(AuthContext);
    const [users,] = useUsers(); 
    console.log(users);
    
    const loggedUser = users.find(person=> person?.email === user?.email);
    console.log(loggedUser);

    return (
        <div>
            {loggedUser && <CustomizedTables data={loggedUser} />}
        </div>
    );
};

export default UserInfo;