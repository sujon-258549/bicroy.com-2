import React from 'react';

const Myproduct = () => {
    return (


        <div className='max-w-6xl mx-auto px-4'>
            <section className="py-3 sm:py-5 mt-20 lg:mt-32 lg:mb-10">
                <div className="p-5 rounded-md" style={{ boxShadow: '1px 1px 40px #149777' }}>
                    <>

                        <section className=" flex items-center">
                            <div className="max-w-screen-xl px-4 mx-auto lg:px-12 w-full">
                                {/* Start coding here */}
                                <div className="relative">
                                    <div className="flex flex-col items-center justify-between p-4 space-y-3 md:flex-row md:space-y-0 md:space-x-4">
                                        <div className="w-full md:w-1/2">
                                            <form className="">
                                                <div className="relative max-w-sm mx-auto">
                                                    <input
                                                        className="w-full py-2 px-4 border border-[#149777] rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                                        type="search"
                                                        placeholder="Search"
                                                    />
                                                    <button className="absolute inset-y-0 right-0 flex items-center px-4 text-white b bg-[#149777] gray-10 border border-[#149777] rounded-r-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                                                        <svg
                                                            className="h-5 w-5"
                                                            fill="currentColor"
                                                            viewBox="0 0 20 20"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path
                                                                fillRule="evenodd"
                                                                clipRule="evenodd"
                                                                d="M14.795 13.408l5.204 5.204a1 1 0 01-1.414 1.414l-5.204-5.204a7.5 7.5 0 111.414-1.414zM8.5 14A5.5 5.5 0 103 8.5 5.506 5.506 0 008.5 14z"
                                                            />
                                                        </svg>
                                                    </button>
                                                </div>

                                            </form>
                                        </div>

                                        <div>
                                            <form className="max-w-sm mx-auto">
                                                <div className="flex">
                                                    <button
                                                       
                                                        className="flex-shrink-0 z-10 inline-flex items-center  px-4 text-sm font-medium text-center rounded-s-lg border-2 text-[#149777]  border-[#149777] "
                                                        type="button"
                                                    >
                                                        <select
                                                            id="states"
                                                            className=" z-50  border-gray-300  text-sm rounded-e-lg   focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-transparent  dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                        >
                                                            <option >Choose a state</option>
                                                            <option value="CA">California</option>
                                                            <option value="TX">Texas</option>
                                                            <option value="WH">Washinghton</option>
                                                            <option value="FL">Florida</option>
                                                            <option value="VG">Virginia</option>
                                                            <option value="GE">Georgia</option>
                                                            <option value="MI">Michigan</option>
                                                        </select>
                                                    </button>


                                                    <select
                                                        id="states"
                                                        className="bg-gray-50 z-50 border-2 border-[#149777] text-sm rounded-e-lg text-[#149777]  focus:ring-blue-500 w-full p-2.5 "
                                                    >
                                                        <option >Choose a state</option>
                                                        <option value="CA">California</option>
                                                        <option value="TX">Texas</option>
                                                        <option value="WH">Washinghton</option>
                                                        <option value="FL">Florida</option>
                                                        <option value="VG">Virginia</option>
                                                        <option value="GE">Georgia</option>
                                                        <option value="MI">Michigan</option>
                                                    </select>
                                                </div>
                                            </form>

                                        </div>

                                    </div>
                                </div>
                            </div>
                        </section>


                    </>
                    <div className="overflow-x-auto ">
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th>
                                        <label>
                                            <input type="checkbox" className="checkbox" />
                                        </label>
                                    </th>
                                    <th>Name</th>
                                    <th>Job</th>
                                    <th>Favorite Color</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* row 1 */}
                                <tr>
                                    <th>
                                        <label>
                                            <input type="checkbox" className="checkbox" />
                                        </label>
                                    </th>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle h-12 w-12">
                                                    <img
                                                        src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                                                        alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">Hart Hagerty</div>
                                                <div className="text-sm opacity-50">United States</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        Zemlak, Daniel and Leannon
                                        <br />
                                        <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
                                    </td>
                                    <td>Purple</td>
                                    <th>
                                        <button className="btn btn-ghost btn-xs">details</button>
                                    </th>
                                </tr>
                                {/* row 2 */}
                                <tr>
                                    <th>
                                        <label>
                                            <input type="checkbox" className="checkbox" />
                                        </label>
                                    </th>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle h-12 w-12">
                                                    <img
                                                        src="https://img.daisyui.com/images/profile/demo/3@94.webp"
                                                        alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">Brice Swyre</div>
                                                <div className="text-sm opacity-50">China</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        Carroll Group
                                        <br />
                                        <span className="badge badge-ghost badge-sm">Tax Accountant</span>
                                    </td>
                                    <td>Red</td>
                                    <th>
                                        <button className="btn btn-ghost btn-xs">details</button>
                                    </th>
                                </tr>
                                {/* row 3 */}
                                <tr>
                                    <th>
                                        <label>
                                            <input type="checkbox" className="checkbox" />
                                        </label>
                                    </th>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle h-12 w-12">
                                                    <img
                                                        src="https://img.daisyui.com/images/profile/demo/4@94.webp"
                                                        alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">Marjy Ferencz</div>
                                                <div className="text-sm opacity-50">Russia</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        Rowe-Schoen
                                        <br />
                                        <span className="badge badge-ghost badge-sm">Office Assistant I</span>
                                    </td>
                                    <td>Crimson</td>
                                    <th>
                                        <button className="btn btn-ghost btn-xs">details</button>
                                    </th>
                                </tr>
                                {/* row 4 */}
                                <tr>
                                    <th>
                                        <label>
                                            <input type="checkbox" className="checkbox" />
                                        </label>
                                    </th>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle h-12 w-12">
                                                    <img
                                                        src="https://img.daisyui.com/images/profile/demo/5@94.webp"
                                                        alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">Yancy Tear</div>
                                                <div className="text-sm opacity-50">Brazil</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        Wyman-Ledner
                                        <br />
                                        <span className="badge badge-ghost badge-sm">Community Outreach Specialist</span>
                                    </td>
                                    <td>Indigo</td>
                                    <th>
                                        <button className="btn btn-ghost btn-xs">details</button>
                                    </th>
                                </tr>
                            </tbody>
                            {/* foot */}

                        </table>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Myproduct;
