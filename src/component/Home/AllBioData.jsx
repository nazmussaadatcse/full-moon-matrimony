import { useState } from "react";
import { Link } from "react-router-dom";
import useUsersPublic from "../hooks/useUsersPublic";

const AllBioData = () => {
    const [users,,,] = useUsersPublic();
    const [searchInput, setSearchInput] = useState('');
    const [selectedCity, setSelectedCity] = useState('');
    const [selectedBiodata, setSelectedBiodata] = useState('');

    const handleSearchInputChange = (e) => {
        setSearchInput(e.target.value);
    };

    const handleCityChange = (e) => {
        setSelectedCity(e.target.value);
    };

    const handleBiodataChange = (e) => {
        setSelectedBiodata(e.target.value);
    };

    const filteredUsers = users.filter(user => {
        const matchesSearchInput = user.occupation.toLowerCase().includes(searchInput.toLowerCase());
        const matchesCity = selectedCity === '' || user.permanentDivisionName === selectedCity;
        const matchesBiodata = selectedBiodata === '' || user.biodataType === selectedBiodata;

        return matchesSearchInput && matchesCity && matchesBiodata;
    });
    console.log(filteredUsers);

    return (
        <div className="mx-auto">
            {/* Search Bar */}
            <div className="p-4 mx-auto flex flex-col items-center justify-center gap-2 md:flex-row md:justify-center md:items-center">
                {/* Search Input */}
                <input
                    type="text"
                    id="searchInput"
                    placeholder="Search by Profession"
                    className="border border-gray-300 px-4 py-2 rounded-md mb-4 md:mb-0 w-full md:max-w-md"
                    value={searchInput}
                    onChange={handleSearchInputChange}
                />

                {/* Selectors and Button */}
                <div className="flex flex-col w-full lg:w-auto md:flex-row gap-2 md:gap-4 items-center">
                    {/* Search Button */}
                    <button className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-md mb-4 md:mb-0 w-full md:w-auto">
                        Search
                    </button>

                    {/* City Selector */}
                    <select
                        id="citySelector"
                        className="border border-gray-300 px-4 py-2 rounded-md mb-4 md:mb-0 w-full md:w-auto"
                        value={selectedCity}
                        onChange={handleCityChange}
                    >
                        <option value="">Select city</option>
                        <option value="Dhaka">Dhaka</option>
                        <option value="Chattagram">Chattagram</option>
                        <option value="Rangpur">Rangpur</option>
                        <option value="Barisal">Barisal</option>
                        <option value="Khulna">Khulna</option>
                        <option value="Maymansign">Maymansign</option>
                        <option value="Sylhet">Sylhet</option>
                        {/* Add more city options here... */}
                    </select>

                    {/* Biodata Selector */}
                    <select
                        id="biodataSelector"
                        className="border border-gray-300 px-4 py-2 rounded-md mb-4 md:mb-0 w-full md:w-auto"
                        value={selectedBiodata}
                        onChange={handleBiodataChange}
                    >
                        <option value="">Biodata type</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        {/* Add more biodata options here... */}
                    </select>

                </div>
            </div>
            {/* Display filtered users */}
            <div className="grid grid-cols-1 gap-4 my-12 md:grid-cols-2 lg:grid-cols-3">
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

export default AllBioData;
