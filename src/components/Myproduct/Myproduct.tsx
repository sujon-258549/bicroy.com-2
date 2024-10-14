"use client";
import { useEffect, useRef, useState } from "react";
import Heading from "../CommonComponent/Heading";
import axios from "axios";
import Loding from "../Loding/Loding";
import { useSession } from "next-auth/react";

const MyProduct = () => {
    const { data: session } = useSession();
    const email = session?.user?.email;

    const [myProduct, setMyProduct] = useState([]);
    const [loading, setLoading] = useState(true);
    const isMounted = useRef(true); // Flag to track if component is still mounted

    interface Product {
        _id: string;
        productname: string;
        brand: string;
        price: number;
        phone: string;
        category: string;
        subcategory: string;
        photo: string;
        message: string;
    }
    useEffect(() => {
        if (!email) return; // Ensure email is available before making the API call

        const fetchProducts = async () => {
            setLoading(true); // Set loading to true before starting the fetch

            try {
                const response = await axios.get(`${process.env.NEXT_PUBLIC_URL}/api/yourproduct?email=${email}`);

                // Only set the products if the component is still mounted
                if (isMounted.current) {
                    setMyProduct(response?.data?.data || []);
                }
            } catch (err) {
                console.log("Error fetching products:", err);
            } finally {
                if (isMounted.current) {
                    setLoading(false);
                }
            }
        };

        fetchProducts();

        return () => {
            isMounted.current = false;
        };
    }, [email]); // Dependency array includes only `email`

    if (loading) {
        return (
            <div>
                <Loding />
            </div>
        );
    }

    return (
        <div className="max-w-6xl mx-auto px-4">
            <section className="pt-32 pb-10">
                <div className="p-5 rounded-md" style={{ boxShadow: '1px 1px 40px #149777' }}>
                    <>
                        <Heading headingText="My Product" />

                        <section className="flex items-center">
                            <div className="max-w-screen-xl px-4 mx-auto lg:px-12 w-full">
                                <div className="relative">
                                    <div className="flex flex-col items-center justify-between p-4 space-y-3 md:flex-row md:space-y-0 md:space-x-4">
                                        <div className="w-full md:w-1/2">
                                            <form>
                                                <div className="relative max-w-sm mx-auto">
                                                    <input
                                                        className="w-full py-2 px-4 border border-[#149777] rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                                        type="search"
                                                        placeholder="Search"
                                                    />
                                                    <button
                                                        className="absolute inset-y-0 right-0 flex items-center px-4 text-white bg-[#149777] border border-[#149777] rounded-r-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                                        type="submit"
                                                    >
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
                                                    <select
                                                        id="states"
                                                        className="z-50 border-2 border-[#149777] text-sm rounded-lg text-[#149777] p-2.5"
                                                    >
                                                        <option>Choose a state</option>
                                                        <option value="CA">California</option>
                                                        <option value="TX">Texas</option>
                                                        <option value="WH">Washington</option>
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
                    <h2 className="text-2xl pb-5 font-semibold pl-5">My Product: {myProduct.length}</h2>

                    {myProduct.length === 0 ? (
                        <h1 className="text-2xl md:text-5xl text-green-600 text-center py-10 md:py-20">
                            Please Add product
                        </h1>
                    ) : (
                        <div className="overflow-x-auto">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>
                                            <label>
                                                <input type="checkbox" className="checkbox" />
                                            </label>
                                        </th>
                                        <th>Name</th>
                                        <th>Brand</th>
                                        <th>Price</th>
                                        <th>Category</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {myProduct.map((product: Product) => (
                                        <tr key={product._id}>
                                            <th>
                                                <label>
                                                    <input type="checkbox" className="checkbox" />
                                                </label>
                                            </th>
                                            <td className="font-semibold">{product.productname}</td>
                                            <td>{product.brand}</td>
                                            <td>{product.price} Taka</td>
                                            <td>
                                                {product.category}
                                                <br />
                                                <span className="badge badge-ghost badge-sm">
                                                    Desktop {product.subcategory}
                                                </span>
                                            </td>
                                            <th>
                                                <button className="btn btn-ghost btn-xs">Details</button>
                                            </th>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
};

export default MyProduct;
