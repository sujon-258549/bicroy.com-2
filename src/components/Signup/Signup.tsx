"use client";

import Link from 'next/link';


const Signup = () => {

    // const handleDistrictAdd = (e) => {
    //     const data = e.target.value;
    //     console.log(data);
    // };
    
    return (
        <>
            <div
                className="w-full bg-center bg-cover h-[50rem] mt-16  md:mt-20"
                style={{
                    backgroundImage:
                        'url("https://i.pinimg.com/736x/1a/5d/8c/1a5d8c05200b6f1d9a56d8133b09923f.jpg")'
                }}
            >
                <div className="flex items-center justify-center w-full h-full px-4 md:px-0 bg-[#000000ac]" >
                    <div className="max-w-lg w-full mx-auto pt-8 md:pt-24 pb-10 md:pb-20 login-content" >
                        <div
                            style={{ boxShadow: '1px 1px 20px #6DC5D5' }}
                            className="bg-gray-800 rounded-lg shadow-xl  overflow-hidden"
                        >
                            <div className="p-8">
                                <h2 className="text-center text-3xl font-extrabold text-white">
                                    Welcome Back
                                </h2>
                                <p className="mt-4 text-center text-gray-400">Sign in to continue</p>
                                <form method="POST" action="#" className="mt-8 space-y-6">
                                    <div className="rounded-md shadow-sm">
                                        <div>
                                            <label className="sr-only" htmlFor="email">
                                                Name
                                            </label>
                                            <input
                                                placeholder="Enter Your Name"
                                                className="appearance-none relative block w-full px-3 py-3 border border-gray-700 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                                required
                                                autoComplete="email"
                                                type="text"
                                                name="name"
                                                id="name"
                                            />
                                        </div>
                                        <div className="mt-4">
                                            <label className="sr-only" htmlFor="email">
                                                Email address
                                            </label>
                                            <input
                                                placeholder="Email address"
                                                className="appearance-none relative block w-full px-3 py-3 border border-gray-700 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                                required
                                                autoComplete="email"
                                                type="email"
                                                name="email"
                                                id="email"
                                            />
                                        </div>
                                        <div className="mt-4">
                                            <label className="sr-only" htmlFor="password">
                                                Password
                                            </label>
                                            <input
                                                placeholder="Enter Your Phone Number"
                                                className="appearance-none relative block w-full px-3 py-3 border border-gray-700 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                                required

                                                type="number"
                                                name="Phone"
                                                id="Phone"
                                            />
                                        </div>
                                        <div className="mt-4">
                                            <div className="mt-4">
                                                <div className="mt-4">
                                                    <select  className="select select-info w-full border-gray-700 bg-gray-700 text-white">
                                                        <option disabled selected>Select location</option>

                                                        {/* Division: Barisal */}
                                                        <optgroup label="Barisal">
                                                            <option>Barguna District</option>
                                                            <option>Barisal District</option>
                                                            <option>Bhola District</option>
                                                            <option>Jhalokati District</option>
                                                            <option>Patuakhali District</option>
                                                            <option>Pirojpur District</option>
                                                        </optgroup>

                                                        {/* Division: Chittagong */}
                                                        <optgroup label="Chittagong">
                                                            <option>Bandarban District</option>
                                                            <option>Brahmanbaria District</option>
                                                            <option>Chandpur District</option>
                                                            <option>Chittagong District</option>
                                                            <option>Comilla District</option>
                                                            <option>Cox s Bazar District</option>
                                                            <option>Feni District</option>
                                                            <option>Khagrachari District</option>
                                                            <option>Lakshmipur District</option>
                                                            <option>Noakhali District</option>
                                                            <option>Rangamati District</option>
                                                        </optgroup>

                                                        {/* Division: Dhaka */}
                                                        <optgroup label="Dhaka">
                                                            <option>Dhaka District</option>
                                                            <option>Faridpur District</option>
                                                            <option>Gazipur District</option>
                                                            <option>Gopalganj District</option>
                                                            <option>Kishoreganj District</option>
                                                            <option>Madaripur District</option>
                                                            <option>Manikganj District</option>
                                                            <option>Munshiganj District</option>
                                                            <option>Narayanganj District</option>
                                                            <option>Narsingdi District</option>
                                                            <option>Rajbari District</option>
                                                            <option>Shariatpur District</option>
                                                            <option>Tangail District</option>
                                                        </optgroup>

                                                        {/* Division: Khulna */}
                                                        <optgroup label="Khulna">
                                                            <option>Khulna District</option>
                                                            <option>Bagerhat District</option>
                                                            <option>Chuadanga District</option>
                                                            <option>Jessore District</option>
                                                            <option>Jhenaidah District</option>
                                                            <option>Kushtia District</option>
                                                            <option>Magura District</option>
                                                            <option>Meherpur District</option>
                                                            <option>Narail District</option>
                                                            <option>Shatkhira District</option>
                                                        </optgroup>

                                                        {/* Division: Rajshahi */}
                                                        <optgroup label="Rajshahi">
                                                            <option>Bogra District</option>
                                                            <option>Jaipurhat District</option>
                                                            <option>Naogaon District</option>
                                                            <option>Natore District</option>
                                                            <option>Chapainawabganj District</option>
                                                            <option>Pabna District</option>
                                                            <option>Rajshahi District</option>
                                                            <option>Sirajganj District</option>
                                                        </optgroup>

                                                        {/* Division: Rangpur */}
                                                        <optgroup label="Rangpur">
                                                            <option>Rangpur District</option>
                                                            <option>Gaibandha District</option>
                                                            <option>Kurigram District</option>
                                                            <option>Nilphamari District</option>
                                                            <option>Lalmonirhat District</option>
                                                            <option>Dinajpur District</option>
                                                            <option>Thakurgaon District</option>
                                                            <option>Panchagarh District</option>
                                                        </optgroup>

                                                        {/* Division: Sylhet */}
                                                        <optgroup label="Sylhet">
                                                            <option>Habiganj District</option>
                                                            <option>Maulvibazar District</option>
                                                            <option>Sunamganj District</option>
                                                            <option>Sylhet District</option>
                                                        </optgroup>

                                                        {/* Division: Mymensingh */}
                                                        <optgroup label="Mymensingh">
                                                            <option>Jamalpur District</option>
                                                            <option>Mymensingh District</option>
                                                            <option>Netrakona District</option>
                                                            <option>Sherpur District</option>
                                                        </optgroup>
                                                    </select>
                                                </div>

                                            </div>

                                        </div>

                                        <div className="mt-4">
                                            <label className="sr-only" htmlFor="password">
                                                Password
                                            </label>
                                            <input
                                                placeholder="Password"
                                                className="appearance-none relative block w-full px-3 py-3 border border-gray-700 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                                required
                                                autoComplete="current-password"
                                                type="password"
                                                name="password"
                                                id="password"
                                            />
                                        </div>
                                        <div className="mt-4">
                                            <label className="sr-only" htmlFor="password">
                                                Password
                                            </label>
                                            <input
                                                placeholder="Confram Password"
                                                className="appearance-none relative block w-full px-3 py-3 border border-gray-700 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                                required
                                                autoComplete="current-password"
                                                type="password"
                                                name="conframpassword"                               
                                            />
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between mt-4">
                                        <div className="flex items-center">
                                            <input
                                                className="h-4 w-4 text-indigo-500 focus:ring-indigo-400 border-gray-600 rounded"
                                                type="checkbox"
                                                name="remember-me"
                                                id="remember-me"
                                            />
                                            <label
                                                className="ml-2 block text-sm text-gray-400"
                                                htmlFor="remember-me"
                                            >
                                                Remember me
                                            </label>
                                        </div>
                                        <div className="text-sm">
                                            <a
                                                className="font-medium text-indigo-500 hover:text-indigo-400"
                                                href="#"
                                            >
                                                Forgot your password?
                                            </a>
                                        </div>
                                    </div>
                                    <div>
                                        <button
                                            className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-gray-900 bg-indigo-500 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                            type="submit"
                                        >
                                            Sign In
                                        </button>
                                    </div>
                                </form>
                            </div>
                            <div className="px-8 py-4 bg-gray-700 text-center">
                                <span className="text-gray-400">Alrady Have Acount</span>
                                <Link
                                    className="font-medium text-indigo-500 hover:text-indigo-400"
                                    href="/login"
                                >
                                    Login
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    );
};

export default Signup;
