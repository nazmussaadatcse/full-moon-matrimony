import React from 'react';
import useUsersPublic from '../hooks/useUsersPublic';
import useContactRequest from '../hooks/useContactRequest';

const SuccessCounter = () => {

    const [users, , femaleUsers, maleUsers] = useUsersPublic();
    const [reqUsers,] = useContactRequest();



    return (
        <div>
            <h2 className="text-2xl font-bold mb-4 text-center text-pink-900">Our Member Overview</h2>
            <div className="container w-11/12 bg-pink-600 rounded-md border border-red-500 text-white mx-auto p-8 m-8 ">
                <div className="flex  flex-col sm:flex-row justify-between">
                    <div className="flex-1 border p-8 flex flex-col justify-center items-center">
                        <p className="text-4xl font-bold">{maleUsers.length + femaleUsers.length}</p>
                        <p className="text-xl font-bold mb-2">Total Users</p>
                    </div>
                    <div className="flex-1 border p-8 flex flex-col justify-center items-center">
                        <p className="text-4xl font-bold">{maleUsers.length}</p>
                        <p className="text-xl font-bold mb-2">Male Users</p>
                    </div>
                    <div className="flex-1 border p-8 flex flex-col justify-center items-center">
                        <p className="text-4xl font-bold">{femaleUsers.length}</p>
                        <p className="text-xl font-bold mb-2">Female Users</p>
                    </div>
                    <div className="flex-1 border p-8 flex flex-col justify-center items-center">
                        <p className="text-4xl font-bold">{reqUsers.length}</p>
                        <p className="text-xl font-bold mb-2">Premium Members</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default SuccessCounter;