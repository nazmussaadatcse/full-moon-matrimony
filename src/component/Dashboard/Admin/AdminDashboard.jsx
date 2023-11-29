
import useContactRequest from '../../hooks/useContactRequest';
import useUsers from '../../hooks/useUsers';
import PiChart from './PiChart';

const AdminDashboard = () => {

    const [users, maleUsers, femaleUsers, refetch] = useUsers();
    const [reqUsers] = useContactRequest();


    const maleUser = maleUsers.length;
    const femaleUser = femaleUsers.length;
    const totalUser = maleUser + femaleUser;
    const premiumUsers = users.filter(user => user.userType === 'premium');
    const premiumUser = premiumUsers.length;
    const revenue = reqUsers.reduce((total, user) => {
        return total + user.price;
    }, 0);
    // console.log(maleUser, femaleUser, totalUser, revenue, premiumUser);


    return (
        <div className='flex flex-col justify-center items-center bg-slate-100 p-16'>
            <div className='bg-100'>
                <PiChart
                    maleUser={maleUser}
                    femaleUser={femaleUser}
                    totalUser={totalUser}
                    premiumUser={premiumUser}
                    revenue={revenue}
                />
            </div>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white rounded-lg overflow-hidden divide-y divide-gray-200 shadow-md">
                    <thead className="bg-gray-50">
                        <tr className="text-left">
                            <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Male User</th>
                            <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Female User</th>
                            <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Premium User</th>
                            <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Total User</th>
                            <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Revenue (BDT)</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                        <tr className="text-center">
                            <td className=" border p-1 py-4 text-lg ">{maleUser}</td>
                            <td className=" border p-1 py-4 text-lg ">{femaleUser}</td>
                            <td className=" border p-1 py-4 text-lg ">{premiumUser}</td>
                            <td className=" border p-1 py-4 text-lg ">{totalUser}</td>
                            <td className=" border p-1 py-4 text-lg ">{revenue}</td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default AdminDashboard;