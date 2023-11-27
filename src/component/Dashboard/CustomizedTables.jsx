import React from 'react';

const SimpleTable = ({ data }) => {
    console.log(data);
    return (
        <div className="overflow-x-auto p-8">
            <div>
                <img className='w-32 h-32 rounded-sm border-2 border-pink-700 ' src={data.photo} alt="" />
                <h2 className='my-1 text-pink-700 font-bold'>Bio Data Photo</h2>
                <h2 className='my-1 text-pink-700 font-bold'>Login Email: {data.email}</h2>
            </div>

            <table className="min-w-full border table-auto">
                <tbody className="text-gray-600 text-sm font-light">

                    <tr
                        className="border-b border-gray-200 hover:bg-gray-100"
                    >
                        <td className="py-3 px-6 text-left whitespace-nowrap text-pink-950 font-semibold">
                            Bio Data ID:
                        </td>
                        <td className="py-3 px-6 text-left whitespace-nowrap text-pink-700 font-semibold">
                            # {data.bioId}
                        </td>
                    </tr>

                    <tr
                        className="border-b border-gray-200 hover:bg-gray-100"
                    >
                        <td className="py-3 px-6 text-left whitespace-nowrap text-pink-950 font-semibold">
                            Name:
                        </td>
                        <td className="py-3 px-6 text-left whitespace-nowrap text-pink-700 font-semibold">
                            {data.name}
                        </td>
                    </tr>
                    <tr
                        className="border-b border-gray-200 hover:bg-gray-100"
                    >
                        <td className="py-3 px-6 text-left whitespace-nowrap text-pink-950 font-semibold">
                            Age:
                        </td>
                        <td className="py-3 px-6 text-left whitespace-nowrap text-pink-700 font-semibold">
                            {data.age}
                        </td>
                    </tr>

                    <tr
                        className="border-b border-gray-200 hover:bg-gray-100"
                    >
                        <td className="py-3 px-6 text-left whitespace-nowrap text-pink-950 font-semibold">
                            Email:
                        </td>
                        <td className="py-3 px-6 text-left whitespace-nowrap text-pink-700 font-semibold">
                            {data.email}
                        </td>
                    </tr>

                    <tr
                        className="border-b border-gray-200 hover:bg-gray-100"
                    >
                        <td className="py-3 px-6 text-left whitespace-nowrap text-pink-950 font-semibold">
                            Bio Data Type:
                        </td>
                        <td className="py-3 px-6 text-left uppercase whitespace-nowrap text-pink-700 font-semibold">
                            {data.biodataType}
                        </td>
                    </tr>

                    <tr
                        className="border-b border-gray-200 hover:bg-gray-100"
                    >
                        <td className="py-3 px-6 text-left whitespace-nowrap text-pink-950 font-semibold">
                            Date Of Birth:
                        </td>
                        <td className="py-3 px-6 text-left whitespace-nowrap text-pink-700 font-semibold">
                            {data.dateOfBirth}
                        </td>
                    </tr>

                    <tr
                        className="border-b border-gray-200 hover:bg-gray-100"
                    >
                        <td className="py-3 px-6 text-left whitespace-nowrap text-pink-950 font-semibold">
                            Height(feet) :
                        </td>
                        <td className="py-3 px-6 text-left whitespace-nowrap text-pink-700 font-semibold">
                            {data.height}
                        </td>
                    </tr>

                    <tr
                        className="border-b border-gray-200 hover:bg-gray-100"
                    >
                        <td className="py-3 px-6 text-left whitespace-nowrap text-pink-950 font-semibold">
                            Weight(kg) :
                        </td>
                        <td className="py-3 px-6 text-left whitespace-nowrap text-pink-700 font-semibold">
                            {data.weight}
                        </td>
                    </tr>

                    <tr
                        className="border-b border-gray-200 hover:bg-gray-100"
                    >
                        <td className="py-3 px-6 text-left whitespace-nowrap text-pink-950 font-semibold">
                            Occupation :
                        </td>
                        <td className="py-3 px-6 text-left whitespace-nowrap text-pink-700 font-semibold">
                            {data.occupation}
                        </td>
                    </tr>

                    <tr
                        className="border-b border-gray-200 hover:bg-gray-100"
                    >
                        <td className="py-3 px-6 text-left whitespace-nowrap text-pink-950 font-semibold">
                            Race:
                        </td>
                        <td className="py-3 px-6 text-left whitespace-nowrap text-pink-700 font-semibold">
                            {data.race}
                        </td>
                    </tr>

                    <tr
                        className="border-b border-gray-200 hover:bg-gray-100"
                    >
                        <td className="py-3 px-6 text-left whitespace-nowrap text-pink-950 font-semibold">
                            Present Division:
                        </td>
                        <td className="py-3 px-6 text-left whitespace-nowrap text-pink-700 font-semibold">
                            {data.presentDivisionName}
                        </td>
                    </tr>
                    <tr
                        className="border-b border-gray-200 hover:bg-gray-100"
                    >
                        <td className="py-3 px-6 text-left whitespace-nowrap text-pink-950 font-semibold">
                            Permanent Division:
                        </td>
                        <td className="py-3 px-6 text-left whitespace-nowrap text-pink-700 font-semibold">
                            {data.permanentDivisionName}
                        </td>
                    </tr>
                    <tr
                        className="border-b border-gray-200 hover:bg-gray-100"
                    >
                        <td className="py-3 px-6 text-left whitespace-nowrap text-pink-950 font-semibold">
                            Father's Name:
                        </td>
                        <td className="py-3 px-6 text-left whitespace-nowrap text-pink-700 font-semibold">
                            {data.fathersName}
                        </td>
                    </tr>
                    <tr
                        className="border-b border-gray-200 hover:bg-gray-100"
                    >
                        <td className="py-3 px-6 text-left whitespace-nowrap text-pink-950 font-semibold">
                            Mother's Name:
                        </td>
                        <td className="py-3 px-6 text-left whitespace-nowrap text-pink-700 font-semibold">
                            {data.mothersName}
                        </td>
                    </tr>
                    <tr
                        className="border-b border-gray-200 hover:bg-gray-100"
                    >
                        <td className="py-3 px-6 text-left whitespace-nowrap text-pink-950 font-semibold">
                            Expected Partner Age:
                        </td>
                        <td className="py-3 px-6 text-left whitespace-nowrap text-pink-700 font-semibold">
                            {data.expectedPartnerAge}
                        </td>
                    </tr>
                    <tr
                        className="border-b border-gray-200 hover:bg-gray-100"
                    >
                        <td className="py-3 px-6 text-left whitespace-nowrap text-pink-950 font-semibold">
                            Expected Partner Height(feet):
                        </td>
                        <td className="py-3 px-6 text-left whitespace-nowrap text-pink-700 font-semibold">
                            {data.expectedPartnerHeight}
                        </td>
                    </tr>
                    <tr
                        className="border-b border-gray-200 hover:bg-gray-100"
                    >
                        <td className="py-3 px-6 text-left whitespace-nowrap text-pink-950 font-semibold">
                            Expected Partner Weight(kg):
                        </td>
                        <td className="py-3 px-6 text-left whitespace-nowrap text-pink-700 font-semibold">
                            {data.expectedPartnerWeight}
                        </td>
                    </tr>
                    <tr
                        className="border-b border-gray-200 hover:bg-gray-100"
                    >
                        <td className="py-3 px-6 text-left whitespace-nowrap text-pink-950 font-semibold">
                            Mobile Number:
                        </td>
                        <td className="py-3 px-6 text-left whitespace-nowrap text-pink-700 font-semibold">
                            {data.mobileNumber}
                        </td>
                    </tr>
                    <tr
                        className="border-b border-gray-200 hover:bg-gray-100"
                    >
                        <td className="py-3 px-6 text-left whitespace-nowrap text-pink-950 font-semibold">
                            Email Address:
                        </td>
                        <td className="py-3 px-6 text-left whitespace-nowrap text-pink-700 font-semibold">
                            {data.email}
                        </td>
                    </tr>

                </tbody>
            </table>
        </div>
    );
};

export default SimpleTable;
