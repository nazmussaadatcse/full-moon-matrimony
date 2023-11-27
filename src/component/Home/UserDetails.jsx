import { Link, useParams } from "react-router-dom";
import useUsersPublic from "../hooks/useUsersPublic";



const UserDetails = () => {

    const [users,] = useUsersPublic();
    const idx = useParams();
    const id = (idx.id);
    const filteredUsers = users.filter(user => user.biodataType !== '');

    const userDetails = filteredUsers.find(user => user._id === id);
    console.log(userDetails);

    const bioData = userDetails;

    return (
        <div className="grid grid-cols-2 gap-8 mt-12">
            <div className="col-span-1 bg-slate-200 p-4">
                {/* Left Side */}
                <div className="max-w-lg mx-auto bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition duration-300 ease-in-out">
                    <div key={bioData._id} className="max-w-md mx-auto bg-white rounded-xl overflow-hidden  transition duration-300 ease-in-out">
                        <div className="flex justify-center mt-8">
                            <img className="w-96 h-72 object-cover object-center" src={bioData.photo} alt="Profile" />
                        </div>
                        <div className="p-6 text-pink-800">

                            <div className="col-span-1">
                                <p className=""><strong>Biodata Type:</strong><span className="uppercase"> {bioData.biodataType}</span></p>
                                <p className="mb-4"><strong>Biodata ID:</strong><span className="uppercase"> {bioData.bioId}</span></p>
                                <p><strong>Name:</strong> {bioData.name}</p>
                                <p><strong>Date of Birth:</strong> {bioData.dateOfBirth}</p>
                                <p><strong>Height:</strong> {bioData.height}</p>
                                <p><strong>Weight:</strong> {bioData.weight}</p>
                                <p><strong>Age:</strong> {bioData.age}</p>
                                <p><strong>Occupation:</strong> {bioData.occupation}</p>
                            </div>
                            <div className="col-span-1">
                                <p><strong>Race:</strong> {bioData.race}</p>
                                <p><strong>Father's Name:</strong> {bioData.fathersName}</p>
                                <p><strong>Mother's Name:</strong> {bioData.mothersName}</p>
                                <p><strong>Permanent Division Name:</strong> {bioData.permanentDivisionName}</p>
                                <p className="mt-4"><strong>Present Division Name:</strong> {bioData.presentDivisionName}</p>
                                <p><strong>Expected Partner Age:</strong> {bioData.expectedPartnerAge}</p>
                                <p><strong>Expected Partner Height:</strong> {bioData.expectedPartnerHeight}</p>
                                <p><strong>Expected Partner Weight:</strong> {bioData.expectedPartnerWeight}</p>
                                <p><strong>Email:</strong> {bioData.email}</p>
                                <p><strong>Mobile Number:</strong> {bioData.mobileNumber}</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div className="col-span-1 bg-slate-200 p-4">
                {/* Left Side */}
                {
                    filteredUsers.map(bio => <div key={bio._id} className="max-w-lg mx-auto bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition duration-300 ease-in-out">
                        <div className="max-w-md mx-auto bg-white rounded-xl overflow-hidden  transition duration-300 ease-in-out">
                            <div className="flex justify-center mt-8">
                                <img className="w-96 h-72 object-cover object-center" src={bio.photo} alt="Profile" />
                            </div>
                            <div className="p-6 text-pink-800">

                                <div className="col-span-1">
                                    <p className=""><strong>Biodata Type:</strong><span className="uppercase"> {bio.biodataType}</span></p>
                                    <p className="mb-4"><strong>Biodata ID:</strong><span className="uppercase"> {bio.bioId}</span></p>
                                    <p><strong>Name:</strong> {bio.name}</p>
                                    <p><strong>Date of Birth:</strong> {bio.dateOfBirth}</p>
                                    <p><strong>Height:</strong> {bio.height}</p>
                                    <p><strong>Weight:</strong> {bio.weight}</p>
                                    <p><strong>Age:</strong> {bio.age}</p>
                                    <p><strong>Occupation:</strong> {bio.occupation}</p>
                                </div>
                                <div className="col-span-1">
                                    
                                </div>

                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default UserDetails;