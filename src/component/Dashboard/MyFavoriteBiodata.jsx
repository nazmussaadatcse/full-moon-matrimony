import { useContext } from "react";
import useFavoriteBiodata from "../hooks/useFavoriteBiodata";
import { AuthContext } from "../Providers/AuthProvider";
import useUsers from "../hooks/useUsers";
import { Link } from "react-router-dom";
import useAxiosSecure from "../hooks/useAxiosSecure";


const MyFavoriteBiodata = () => {

    const [favUsers,] = useFavoriteBiodata();
    const [users,] = useUsers();
    const { user } = useContext(AuthContext);
    const axiosSecure = useAxiosSecure();

    console.log(favUsers);

    const filteredFavIds = favUsers
        .filter(favUser => favUser.myEmail === user?.email)
        .map(favUser => favUser.favId);
    console.log('filtered _id:', filteredFavIds);
    // here array of favorite ids 

    const matchedUsers = filteredFavIds.map(favId => {
        return users.find(user => user._id === favId);
    });
    console.log('Matched users:', matchedUsers);
    // got the user details searching by ids 



    

    const handleDelete = (itemId) => {
        const userEmail = user?.email; // Assuming `user` is accessible in this scope
    
        console.log(`Deleting item with ID: ${itemId} for user email: ${userEmail}`);
    
        // Make a DELETE request to your API endpoint passing both item ID and user email
        axiosSecure.delete(`/favUsers/${itemId}`, {
            data: { userEmail: userEmail } // Pass user email as data to the API
        })
        .then(response => {
            console.log('Deletion successful');
            // Handle any further actions after successful deletion
        })
        .catch(error => {
            console.error('Deletion failed:', error);
            // Handle errors or inform the user about deletion failure
        });
    };
    
    




    // console.log(favUsers);
    return (
        <div>
            <div className="flex items-center justify-center my-4">
                <h1 className="text-2xl text-pink-700 font-semibold mb-4">My Favorite Bio Data collection</h1>

            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {matchedUsers?.map(item => (
                    <div key={item?.bioId} className="bg-white rounded-lg shadow-md p-4">
                        <img className="w-24 h-24 rounded-lg" src={item?.photo} alt="" />
                        <h2 className="text-lg font-semibold mb-2">{item?.name}</h2>
                        <p><strong>Biodata ID:</strong> {item?.bioId}</p>
                        <p><strong>Permanent Address:</strong> {item?.permanentDivisionName}</p>
                        <p><strong>Occupation:</strong> {item?.occupation}</p>
                        <div className="flex flex-col text-center items-start justify-center w-1/2">
                            <Link to={`/userDetail/${item?._id}`} className="mt-2 bg-pink-500 hover:bg-pink-600 text-white py-1 px-3 mx-1 rounded">Details
                            </Link>
                            <button onClick={() => handleDelete(item?._id)} className="mt-2 bg-pink-500 hover:bg-pink-600 text-white py-1 px-3 rounded mx-1">
                                Delete
                            </button>

                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MyFavoriteBiodata;