"use client"
import Link from 'next/link'
import Heading from '../CommonComponent/Heading'

const Alluser = () => {
    return (
        <section className='max-w-6xl mx-auto pt-10 md:pt-20 px-4'>
            <div className=" md:my-14 mb-8 mt-16 rounded-md p-5" style={{boxShadow:'1px 1px 10px'}}>

                <Heading headingText='All User'/>
               
                <div className="relative flex flex-col w-full h-full text-slate-700 bg-white rounded-xl bg-clip-border">
                    <div className="relative mx-4 mt-4 overflow-hidden text-slate-700 bg-white rounded-none bg-clip-border">
                        <div className="flex items-center justify-between ">
                            <div>
                                <h3 className="text-lg font-semibold text-slate-800">
                                    Employees List
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
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth={2}
                                                stroke="currentColor"
                                                aria-hidden="true"
                                                className="w-4 h-4"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
                                                />
                                            </svg>
                                        </p>
                                    </th>
                                    <th className="p-4 transition-colors cursor-pointer border-y border-slate-200 bg-slate-50 hover:bg-slate-100">
                                        <p className="flex items-center justify-between gap-2 font-sans text-sm font-normal leading-none text-slate-500">
                                            Function
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth={2}
                                                stroke="currentColor"
                                                aria-hidden="true"
                                                className="w-4 h-4"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
                                                />
                                            </svg>
                                        </p>
                                    </th>
                                    <th className="p-4 transition-colors cursor-pointer border-y border-slate-200 bg-slate-50 hover:bg-slate-100">
                                        <p className="flex items-center justify-between gap-2 font-sans text-sm  font-normal leading-none text-slate-500">
                                            Status
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth={2}
                                                stroke="currentColor"
                                                aria-hidden="true"
                                                className="w-4 h-4"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
                                                />
                                            </svg>
                                        </p>
                                    </th>
                                    <th className="p-4 transition-colors cursor-pointer border-y border-slate-200 bg-slate-50 hover:bg-slate-100">
                                        <p className="flex items-center justify-between gap-2 font-sans text-sm  font-normal leading-none text-slate-500">
                                            Employed
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth={2}
                                                stroke="currentColor"
                                                aria-hidden="true"
                                                className="w-4 h-4"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
                                                />
                                            </svg>
                                        </p>
                                    </th>
                                    <th className="p-4 transition-colors cursor-pointer border-y border-slate-200 bg-slate-50 hover:bg-slate-100">
                                        <p className="flex items-center justify-between gap-2 font-sans text-sm  font-normal leading-none text-slate-500"></p>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="p-4 border-b border-slate-200">
                                        <div className="flex items-center gap-3">
                                            <img
                                                src="https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-3.jpg"
                                                alt="John Michael"
                                                className="relative inline-block h-9 w-9 !rounded-full object-cover object-center"
                                            />
                                            <div className="flex flex-col">
                                                <p className="text-sm font-semibold text-slate-700">
                                                    John Michael
                                                </p>
                                                <p className="text-sm text-slate-500">
                                                    john@creative-tim.com
                                                </p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="p-4 border-b border-slate-200">
                                        <div className="flex flex-col">
                                            <p className="text-sm font-semibold text-slate-700">Manager</p>
                                            <p className="text-sm text-slate-500">Organization</p>
                                        </div>
                                    </td>
                                    <td className="p-4 border-b border-slate-200">
                                        <div className="w-max">
                                            <div className="relative grid items-center px-2 py-1 font-sans text-xs font-bold text-green-900 uppercase rounded-md select-none whitespace-nowrap bg-green-500/20">
                                                <span className="">online</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="p-4 border-b border-slate-200">
                                        <p className="text-sm text-slate-500">23/04/18</p>
                                    </td>
                                    <td className="p-4 border-b border-slate-200">
                                        <button
                                            className="relative h-10 max-h-[40px] w-10 max-w-[40px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-slate-900 transition-all hover:bg-slate-900/10 active:bg-slate-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                            type="button"
                                        >
                                            <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 24 24"
                                                    fill="currentColor"
                                                    aria-hidden="true"
                                                    className="w-4 h-4"
                                                >
                                                    <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32L19.513 8.2z"></path>
                                                </svg>
                                            </span>
                                        </button>
                                    </td>
                                </tr>
                               
                            </tbody>
                        </table>
                    </div>
                    {/* <div className="flex items-center justify-between p-3">
                        <p className="block text-sm text-slate-500">Page 1 of 10</p>
                        <div className="flex gap-1">
                            <button
                                className="rounded border border-slate-300 py-2.5 px-3 text-center text-xs font-semibold text-slate-600 transition-all hover:opacity-75 focus:ring focus:ring-slate-300 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                type="button"
                            >
                                Previous
                            </button>
                            <button
                                className="rounded border border-slate-300 py-2.5 px-3 text-center text-xs font-semibold text-slate-600 transition-all hover:opacity-75 focus:ring focus:ring-slate-300 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                type="button"
                            >
                                Next
                            </button>
                        </div>
                    </div> */}
                </div>
            </div>


        </section>

    )
}

export default Alluser