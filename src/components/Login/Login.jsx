// "use client";
// import React from 'react';
// import Link from 'next/link';
// import './login.css';
// import { signIn } from 'next-auth/react';


// const Login = () => {

//   const handleLogin = async (event) => {
//     event.preventDefault();
//     const email = event.target.email.value;
//     const password = event.target.password.value;


//     const result = await signIn("credentials", {
//       redirect: false, 
//       email,
//       password,
//     });

//    console.log(result)
//   };


//   return (
//     <>
//       <div
//         className="w-full bg-center bg-cover h-[38rem] pt-16 md:pt-20"
//         style={{
//           backgroundImage:
//             'url("https://i.pinimg.com/736x/1a/5d/8c/1a5d8c05200b6f1d9a56d8133b09923f.jpg")',
//         }}
//       >
//         <div className="flex items-center justify-center w-full h-full px-4 md:px-0 bg-[#000000ac]">
//           <div className="max-w-lg w-full mx-auto pt-8 md:pt-24 pb-10 md:pb-20 login-content">
//             <div
//               style={{ boxShadow: '1px 1px 20px #6DC5D5' }}
//               className="bg-gray-800 rounded-lg shadow-xl overflow-hidden"
//             >
//               <div className="p-8">
//                 <h2 className="text-center text-3xl font-extrabold text-white">
//                   Welcome Back
//                 </h2>
//                 <p className="mt-4 text-center text-gray-400">Sign in to continue</p>
//                 <form onSubmit={handleLogin} className="mt-8 space-y-6">
//                   <div className="rounded-md shadow-sm">
//                     <div>
//                       <label className="sr-only" htmlFor="email">
//                         Email address
//                       </label>
//                       <input
//                         placeholder="Email address"
//                         className="appearance-none relative block w-full px-3 py-3 border border-gray-700 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
//                         required
//                         autoComplete="email"
//                         type="email"
//                         name="email"
//                         id="email"
//                       />
//                     </div>
//                     <div className="mt-4">
//                       <label className="sr-only" htmlFor="password">
//                         Password
//                       </label>
//                       <input
//                         placeholder="Password"
//                         className="appearance-none relative block w-full px-3 py-3 border border-gray-700 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
//                         required
//                         autoComplete="current-password"
//                         type="password"
//                         name="password"
//                         id="password"
//                       />
//                     </div>
//                   </div>
//                   <div className="flex items-center justify-between mt-4">
//                     <div className="flex items-center">
//                       <input
//                         className="h-4 w-4 text-indigo-500 focus:ring-indigo-400 border-gray-600 rounded"
//                         type="checkbox"
//                         name="remember-me"
//                         id="remember-me"
//                       />
//                       <label
//                         className="ml-2 block text-sm text-gray-400"
//                         htmlFor="remember-me"
//                       >
//                         Remember me
//                       </label>
//                     </div>
//                     <div className="text-sm">
//                       <a
//                         className="font-medium text-indigo-500 hover:text-indigo-400"
//                         href="#"
//                       >
//                         Forgot your password?
//                       </a>
//                     </div>
//                   </div>
//                   <div>
//                     <button
//                       className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-gray-900 bg-indigo-500 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//                       type="submit"
//                     >
//                       Sign In
//                     </button>
//                   </div>
//                 </form>
//               </div>
//               <div className="px-8 py-4 bg-gray-700 text-center">
//                 <span className="text-gray-400">Don't have an account?</span>
//                 <Link
//                   className="font-medium text-indigo-500 hover:text-indigo-400"
//                   href="/signup"
//                 >
//                   Sign up
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Login;



"use client"; // Add this line to convert the component to a Client Component

import React from 'react';
import Link from 'next/link';
import './login.css';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import SosalLogin from '../SosalLogin/SosalLogin';

const Login = () => {
  const router = useRouter()
  const handleLogin = async (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;

    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });
    if (result.status === 200) {
      router.push('/')
    }
  };

  return (
    <div
      className="w-full bg-center bg-cover h-[48rem] pt-16 md:pt-20"
      style={{
        backgroundImage:
          'url("https://i.pinimg.com/736x/1a/5d/8c/1a5d8c05200b6f1d9a56d8133b09923f.jpg")',
      }}
    >
      <div className="flex items-center justify-center w-full h-full px-4 md:px-0 bg-[#000000ac]">
        <div className="max-w-lg w-full mx-auto pt-8 md:pt-24 pb-10 md:pb-20 login-content">
          <div
            style={{ boxShadow: '1px 1px 20px #6DC5D5' }}
            className="bg-gray-800 rounded-lg shadow-xl overflow-hidden"
          >
            <div className="p-8">
              <h2 className="text-center text-3xl font-extrabold text-white">
                Welcome Back
              </h2>
              <p className="mt-4 text-center text-gray-400">Sign in to continue</p>
              <form onSubmit={handleLogin} className="mt-8 space-y-6">
                <div className="rounded-md shadow-sm">
                  <div>
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
                      placeholder="Password"
                      className="appearance-none relative block w-full px-3 py-3 border border-gray-700 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                      required
                      autoComplete="current-password"
                      type="password"
                      name="password"
                      id="password"
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
              <SosalLogin></SosalLogin>
            </div>
            <div className="px-8 py-4 bg-gray-700 text-center">
              <span className="text-gray-400">Don't have an account?</span>
              <Link
                className="font-medium text-indigo-500 hover:text-indigo-400"
                href="/signup"
              >
                Sign up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
