import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import useUsers from "../hooks/useUsers";
import CustomizedTables from "./CustomizedTables";
import { Helmet } from "react-helmet";



const UserInfo = () => {
    const {user} = useContext(AuthContext);
    const [users,,,] = useUsers(); 
    console.log(users);
    
    const loggedUser = users.find(person=> person?.email === user?.email);
    console.log(loggedUser);

    return (
        <div>
            <Helmet>
                <title>FMM | View BioData</title>
            </Helmet>
            {loggedUser && <CustomizedTables data={loggedUser} />}
        </div>
    );
};

export default UserInfo;