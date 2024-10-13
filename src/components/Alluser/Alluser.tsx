"use client";
import { useEffect, useState } from 'react';
import Heading from '../CommonComponent/Heading';
import axios from 'axios';
import Loding from '../Loding/Loding';

// Define the structure of the user object
interface User {
    _id: string;
    name: string;
    email: string;
    phone: string;
    location: string;
    acountCreateDate: string;
}

const Alluser: React.FC = () => {
    // Set the type for alluser as an array of User objects
    const [alluser, setAllUsers] = useState<User[]>([]);
    const [loding, setLoading] = useState(true);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get('https://bicroy-com-2.vercel.app/api/alluser');
                setAllUsers(response?.data?.data); // Assuming the response contains an array of users
            } catch (err) {
                console.log(err);
            } finally {
                setLoading(false);
            }
        };
        fetchUsers();
    }, []);

    if (loding) {
        return <><Loding /></>;
    }

    return (
        <section className='max-w-6xl mx-auto pt-10 md:pt-20 px-4'>
            <div className="md:my-14 mb-8 mt-16 rounded-md p-5" style={{ boxShadow: '1px 1px 10px' }}>

                <Heading headingText='All User' />

                <div className="relative flex flex-col w-full h-full text-slate-700 bg-white rounded-xl bg-clip-border">
                    <div className="relative mx-4 mt-4 overflow-hidden text-slate-700 bg-white rounded-none bg-clip-border">
                        <div className="flex items-center justify-between ">
                            <div>
                                <h3 className="text-lg font-semibold text-slate-800">
                                    All User List {alluser.length}
                                </h3>
                                <p className="text-slate-500">Review each person before edit</p>
                            </div>
                            <div className="flex flex-col gap-2 shrink-0 sm:flex-row">
                                <button
                                    className="rounded border border-slate-300 py-2.5 px-3 text-center text-xs font-semibold text-slate-600 transition-all hover:opacity-75 focus:ring focus:ring-slate-300 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                    type="button"
                                >
                                    View All
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="p-0 overflow-scroll">
                        <table className="w-full mt-4 text-left table-auto min-w-max">
                            <thead>
                                <tr>
                                    <th className="p-4 transition-colors cursor-pointer border-y border-slate-200 bg-slate-50 hover:bg-slate-100">
                                        <p className="flex items-center justify-between gap-2 font-sans text-sm font-normal leading-none text-slate-500">
                                            Member
                                        </p>
                                    </th>
                                    <th className="p-4 transition-colors cursor-pointer border-y border-slate-200 bg-slate-50 hover:bg-slate-100">
                                        <p className="flex items-center justify-between gap-2 font-sans text-sm font-normal leading-none text-slate-500">
                                           User Phone
                                        </p>
                                    </th>
                                    <th className="p-4 transition-colors cursor-pointer border-y border-slate-200 bg-slate-50 hover:bg-slate-100">
                                        <p className="flex items-center justify-between gap-2 font-sans text-sm font-normal leading-none text-slate-500">
                                           User Address
                                        </p>
                                    </th>
                                    <th className="p-4 transition-colors cursor-pointer border-y border-slate-200 bg-slate-50 hover:bg-slate-100">
                                        <p className="flex items-center justify-between gap-2 font-sans text-sm font-normal leading-none text-slate-500">
                                            Account Create Date
                                        </p>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    alluser.map((user: User) => (
                                        <tr key={user._id}>
                                            <td className="p-4 border-b border-slate-200">
                                                <div className="flex items-center gap-3">
                                                    <div className="flex flex-col">
                                                        <p className="text-sm font-semibold text-slate-700">
                                                            {user.name}
                                                        </p>
                                                        <p className="text-sm text-slate-500">
                                                           {user.email}
                                                        </p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="p-4 border-b border-slate-200">
                                                <div className="flex flex-col">
                                                    <p className="text-sm font-semibold text-slate-700">{user.phone}</p>
                                                </div>
                                            </td>
                                            <td className="p-4 border-b border-slate-200">
                                                <p className="text-sm font-semibold text-slate-700">{user.location}</p>
                                            </td>
                                            <td className="p-4 border-b border-slate-200">
                                                <p className="text-sm">
                                                    {user.acountCreateDate?.slice(0, 20)}
                                                </p>
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Alluser;
