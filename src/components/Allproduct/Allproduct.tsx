"use client";
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Loding from '../Loding/Loding';
import './productc.css';
import Heading from '../CommonComponent/Heading';
import Link from 'next/link';

const AllProduct = () => {
    const [allProduct, setAllProduct] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null); // Error state
    const [dynamicColumn, setDynamicColumn] = useState(4); // Default to 4 columns
    const [category, setCategory] = useState<string>(); // For category filtering

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

    interface ApiResponse {
        message: string; // Add message property
        data: Product[]; // Ensure this is the correct structure
    }

    useEffect(() => {
        const fetchProducts = async () => {
            setLoading(true); // Reset loading state before fetching
            try {
                const apiUrl = category 
                    ? `https://bicroy-com-2.vercel.app/productget?category=${category}` 
                    : 'https://bicroy-com-2.vercel.app/productget'; // Fetch all products if no category
                
                const response = await axios.get<ApiResponse>(apiUrl);
                
                setAllProduct(response.data.data); // Correctly accessing data
                setError(null); // Reset error state
            } catch (err) {
                console.error("Error fetching products:", err);
                setError("Failed to fetch products. Please try again later."); // Set error message
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, [category]);

    const handleColumn: React.ChangeEventHandler<HTMLSelectElement> = (e) => {
        const valuedata = Number(e.currentTarget.value); // Convert to number
        console.log("Selected column:", valuedata); // Debug log
        setDynamicColumn(valuedata);
    };

    const handelCategory: React.ChangeEventHandler<HTMLSelectElement> = (e) => {
        const categoryData = e.currentTarget.value;
        setCategory(categoryData);
    };

    if (loading) {
        return <div><Loding /></div>;
    }

    if (error) {
        return <div>{error}</div>; // Display error message
    }

    return (
        <section className='max-w-6xl mx-auto px-4 pt-32 pb-10 md:pb-20'>
            <div>
                <Heading headingText='All Product' />
            </div>
            <div className='pb-10 flex gap-5 flex-wrap justify-center'>
                <select 
                    className="select border-2 select-accent w-full max-w-xs border-[#149777]" 
                    onChange={handleColumn}
                >
                    <option value={4}>Dynamic column set</option>
                    <option value={1}>Column 1</option>
                    <option value={2}>Column 2</option>
                    <option value={3}>Column 3</option>
                    <option value={4}>Column 4</option>
                    <option value={5}>Column 5</option>
                </select>
                <select 
                    className="select select-accent w-full max-w-xs border-2 border-[#149777]" 
                    onChange={handelCategory}
                >
                    <option value="" disabled>Select category</option>
                    <option value="Mobiles">Mobiles</option>
                    <option value="Electronics">Electronics</option>
                    <option value="Vehicles">Vehicles</option>
                    <option value="Property">Property</option>
                    <option value="Home & Living">Home & Living</option>
                    <option value="Pets & Animals">Pets & Animals</option>
                    <option value="Men's Fashion & Grooming">Men,s Fashion & Grooming</option>
                    <option value="Women's Fashion & Beauty">Women,s Fashion & Beauty</option>
                    <option value="Hobbies, Sports & Kids">Hobbies, Sports & Kids</option>
                    <option value="Business & Industry">Business & Industry</option>
                    <option value="Education">Education</option>
                    <option value="Essentials">Essentials</option>
                    <option value="Agriculture">Agriculture</option>
                    <option value="Services">Services</option>
                    <option value="Jobs">Jobs</option>
                    <option value="Overseas Jobs">Overseas Jobs</option>
                </select>
            </div>
            <div className={`grid grid-cols-1 md:grid-cols-3 lg:grid-cols-${dynamicColumn} gap-4`}>
                {allProduct.map((product: Product) => (
                    <div
                        key={product._id}
                        className="bg-neutral-800 rounded-3xl text-neutral-300 p-4 flex flex-col items-start justify-center gap-3 hover:bg-gray-900 hover:shadow-2xl hover:shadow-sky-400 transition-shadow"
                    >
                        <img src={product.photo} alt={product.productname} className="w-full h-40 rounded-md" />
                        <div>
                            <p>Name: {product.productname}</p>
                            <p>Brand: {product.brand}</p>
                            <p>Category: {product.category}</p>
                            <p>Price: {product.price}</p>
                        </div>
                        <div className='flex justify-end'>
                            <Link href={`allproducts/${product._id}`} className="bg-sky-700 font-extrabold p-2 px-6 rounded-xl hover:bg-sky-500 transition-colors">
                                See more
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default AllProduct;
