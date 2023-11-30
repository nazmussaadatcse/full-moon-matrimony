import { Link } from "react-router-dom";
import useUsersPublic from "../hooks/useUsersPublic";

const BioDatas = () => {

    const [users, , ,] = useUsersPublic();
    // console.log(users);

    const filteredUsers = users
        .filter(user => user.userType === 'premium')
        .sort((a, b) => a.age - b.age) // Sort users by age in asc to desc
        .slice(0, 6); //first 6 users
    console.log(filteredUsers);



    return (

        <div>
            <h2 className="text-2xl font-bold my-8 text-center text-pink-900">  Premium Profiles</h2>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">

                {filteredUsers.map((bioData) => (
                    <div key={bioData._id} className="max-w-md mx-auto bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition duration-300 ease-in-out">
                        <img className="w-96 h-72 object-cover object-center" src={bioData.photo} alt="Profile" />
                        <div className="p-6 text-pink-800">
                            <div className=" text-sm mb-2">Biodata ID <span className="font-semibold">[{bioData.bioId}]</span></div>
                            <div className=" text-sm mb-2">Biodata Type <span className="font-semibold">[{bioData.biodataType}]</span></div>
                            <h2 className="mt-2 text-xl font-semibold">Name: {bioData.name}</h2>
                            <div className=" my-2">Occupation: <span className="font-semibold">{bioData.occupation}</span></div>
                            <div className=" mb-2">Age: <span className="font-semibold">[{bioData.age}]</span></div>
                            <div className=" mb-2">Permanent Division: <span className="font-semibold">{bioData.permanentDivisionName}</span></div>
                            <div className="flex justify-between">
                                <Link to={`/userDetail/${bioData._id}`} className="text-pink-800 border rounded-lg px-2 border-pink-600 bg-pink-100 hover:bg-pink-900 hover:text-white hover:transform hover:scale-95">view profile
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>



    );
};

export default BioDatas;