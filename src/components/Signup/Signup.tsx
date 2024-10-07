"use client";

import axios from 'axios';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Swal from 'sweetalert2';


const Signup = () => {

    const sessin = useSession()
    const router = useRouter()
    console.log(sessin)

    const [location, setLocation] = useState()
    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const locationData = e.target.value; // Accessing the input's value
        setLocation(locationData);

    };

    const acountCreateDate = new Date();

    const handelSignIn = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault(); // Prevent default form submission
        const formData = new FormData(e.currentTarget);

        // Extract values from the form
        const name = formData.get('name');
        const email = formData.get('email');
        const phone = formData.get('Phone');
        // const district = formData.get('district');
        const password = formData.get('password');
        const confirmPassword = formData.get('conframpassword');

        // Create a user info object
        const userInfo = {
            name,
            email,
            phone,
            acountCreateDate,
            location,
            password,
            confirmPassword,
        };



        axios.post('http://localhost:3000/api/userinfo', userInfo)
            .then(response => {
                if (response.status === 200) {
                    Swal.fire({
                        icon: "success",
                        title: "Success",
                        text: "Successfully created user",
                    });
                }
                router.push('/login')
            })
            .catch(error => {
                console.error("There was an error!", error);
                Swal.fire({
                    icon: "error",
                    title: "Error",
                    text: "There was an issue creating the user.",
                });
            });


    };


    return (
        <>
            <div
                className="w-full bg-center bg-cover h-[57rem] pt-16 md:pt-20"
                style={{
                    backgroundImage: 'url("https://i.pinimg.com/736x/1a/5d/8c/1a5d8c05200b6f1d9a56d8133b09923f.jpg")'
                }}
            >
                <div className="flex items-center justify-center w-full h-full px-4 md:px-0 bg-[#000000ac]">
                    <div className="max-w-lg w-full mx-auto pt-8 md:pt-24 pb-10 md:pb-20 login-content">
                        <div
                            style={{ boxShadow: '1px 1px 20px #6DC5D5' }}
                            className="bg-gray-800 rounded-lg shadow-xl overflow-hidden"
                        >
                            <div className="p-8">
                                <h2 className="text-center text-3xl font-extrabold text-white">Welcome Back</h2>
                                <p className="mt-4 text-center text-gray-400">Sign in to continue</p>
                                <form onSubmit={handelSignIn} className="mt-8 space-y-6">
                                    <div className="rounded-md shadow-sm">
                                        <div>
                                            <label className="sr-only" htmlFor="name">Name</label>
                                            <input
                                                placeholder="Enter Your Name"
                                                className="appearance-none relative block w-full px-3 py-3 border border-gray-700 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                                required
                                                autoComplete="name"
                                                type="text"
                                                name="name"
                                                id="name"
                                            />
                                        </div>
                                        <div className="mt-4">
                                            <label className="sr-only" htmlFor="email">Email address</label>
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
                                            <label className="sr-only" htmlFor="Phone">Phone Number</label>
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
                                                <select
                                                    // Set value from state
                                                    onChange={handleChange} // Handle change event
                                                    className="select select-info w-full border-gray-700 bg-gray-700 text-white"
                                                >
                                                    <option value="" disabled>Select location</option>
                                                    {/* District options */}
                                                    <optgroup label="Barisal">
                                                        <option value="Barguna District">Barguna District</option>
                                                        <option value="Barisal District">Barisal District</option>
                                                        <option value="Bhola District">Bhola District</option>
                                                        <option value="Jhalokati District">Jhalokati District</option>
                                                        <option value="Patuakhali District">Patuakhali District</option>
                                                        <option value="Pirojpur District">Pirojpur District</option>
                                                    </optgroup>
                                                    <optgroup label="Chittagong">
                                                        <option value="Bandarban District">Bandarban District</option>
                                                        <option value="Brahmanbaria District">Brahmanbaria District</option>
                                                        <option value="Chandpur District">Chandpur District</option>
                                                        <option value="Chittagong District">Chittagong District</option>
                                                        <option value="Comilla District">Comilla District</option>
                                                        <option value="Cox's Bazar District">Cox's Bazar District</option>
                                                        <option value="Feni District">Feni District</option>
                                                        <option value="Khagrachari District">Khagrachari District</option>
                                                        <option value="Lakshmipur District">Lakshmipur District</option>
                                                        <option value="Noakhali District">Noakhali District</option>
                                                        <option value="Rangamati District">Rangamati District</option>
                                                    </optgroup>
                                                    <optgroup label="Dhaka">
                                                        <option value="Dhaka District">Dhaka District</option>
                                                        <option value="Faridpur District">Faridpur District</option>
                                                        <option value="Gazipur District">Gazipur District</option>
                                                        <option value="Gopalganj District">Gopalganj District</option>
                                                        <option value="Kishoreganj District">Kishoreganj District</option>
                                                        <option value="Madaripur District">Madaripur District</option>
                                                        <option value="Manikganj District">Manikganj District</option>
                                                        <option value="Munshiganj District">Munshiganj District</option>
                                                        <option value="Narayanganj District">Narayanganj District</option>
                                                        <option value="Narsingdi District">Narsingdi District</option>
                                                        <option value="Rajbari District">Rajbari District</option>
                                                        <option value="Shariatpur District">Shariatpur District</option>
                                                        <option value="Tangail District">Tangail District</option>
                                                    </optgroup>
                                                    <optgroup label="Khulna">
                                                        <option value="Khulna District">Khulna District</option>
                                                        <option value="Bagerhat District">Bagerhat District</option>
                                                        <option value="Chuadanga District">Chuadanga District</option>
                                                        <option value="Jessore District">Jessore District</option>
                                                        <option value="Jhenaidah District">Jhenaidah District</option>
                                                        <option value="Kushtia District">Kushtia District</option>
                                                        <option value="Magura District">Magura District</option>
                                                        <option value="Meherpur District">Meherpur District</option>
                                                        <option value="Narail District">Narail District</option>
                                                        <option value="Shatkhira District">Shatkhira District</option>
                                                    </optgroup>
                                                    <optgroup label="Rajshahi">
                                                        <option value="Bogra District">Bogra District</option>
                                                        <option value="Jaipurhat District">Jaipurhat District</option>
                                                        <option value="Naogaon District">Naogaon District</option>
                                                        <option value="Natore District">Natore District</option>
                                                        <option value="Chapainawabganj District">Chapainawabganj District</option>
                                                        <option value="Pabna District">Pabna District</option>
                                                        <option value="Rajshahi District">Rajshahi District</option>
                                                        <option value="Sirajganj District">Sirajganj District</option>
                                                    </optgroup>
                                                    <optgroup label="Rangpur">
                                                        <option value="Rangpur District">Rangpur District</option>
                                                        <option value="Gaibandha District">Gaibandha District</option>
                                                        <option value="Kurigram District">Kurigram District</option>
                                                        <option value="Nilphamari District">Nilphamari District</option>
                                                        <option value="Lalmonirhat District">Lalmonirhat District</option>
                                                        <option value="Dinajpur District">Dinajpur District</option>
                                                        <option value="Thakurgaon District">Thakurgaon District</option>
                                                        <option value="Panchagarh District">Panchagarh District</option>
                                                    </optgroup>
                                                    <optgroup label="Sylhet">
                                                        <option value="Habiganj District">Habiganj District</option>
                                                        <option value="Maulvibazar District">Maulvibazar District</option>
                                                        <option value="Sunamganj District">Sunamganj District</option>
                                                        <option value="Sylhet District">Sylhet District</option>
                                                    </optgroup>
                                                    <optgroup label="Mymensingh">
                                                        <option value="Jamalpur District">Jamalpur District</option>
                                                        <option value="Mymensingh District">Mymensingh District</option>
                                                        <option value="Netrakona District">Netrakona District</option>
                                                        <option value="Sherpur District">Sherpur District</option>
                                                    </optgroup>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="mt-4">
                                            <label className="sr-only" htmlFor="password">Password</label>
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
                                            <label className="sr-only" htmlFor="conframpassword">Confirm Password</label>
                                            <input
                                                placeholder="Confirm Password"
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
                                            <label className="ml-2 block text-sm text-gray-400" htmlFor="remember-me">
                                                Remember me
                                            </label>
                                        </div>
                                        <div className="text-sm">
                                            
                                        </div>
                                    </div>
                                    <div>
                                        <button
                                            className="relative w-full mt-5 inline-flex h-12 active:scale-95 transistion overflow-hidden rounded-lg p-[1px] focus:outline-none"
                                        >
                                            <span
                                                className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#e7029a_0%,#f472b6_50%,#bd5fff_100%)]"
                                            >
                                            </span>
                                            <span
                                                className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-7 text-sm font-medium text-white backdrop-blur-3xl gap-2 undefined"
                                            >
                                               Sign up
                                                <svg
                                                    stroke="currentColor"
                                                    fill="currentColor"
                                                    stroke-width="0"
                                                    viewBox="0 0 448 512"
                                                    height="1em"
                                                    width="1em"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M429.6 92.1c4.9-11.9 2.1-25.6-7-34.7s-22.8-11.9-34.7-7l-352 144c-14.2 5.8-22.2 20.8-19.3 35.8s16.1 25.8 31.4 25.8H224V432c0 15.3 10.8 28.4 25.8 31.4s30-5.1 35.8-19.3l144-352z"
                                                    ></path>
                                                </svg>
                                            </span>
                                        </button>
                                    </div>
                                </form>
                            </div>
                            <div className="px-8 py-4 bg-gray-700 text-center">
                                <span className="text-gray-400">Already Have An Account?</span>
                                <Link className="font-medium text-indigo-500 hover:text-indigo-400" href="/login">
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
