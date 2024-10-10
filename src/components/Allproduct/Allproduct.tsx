"use client"
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Loding from '../Loding/Loding';

import './productc.css'
import Heading from '../CommonComponent/Heading';
import Link from 'next/link';


const AllProduct = () => {
    const [allProduct, setAllProduct] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('http://localhost:3000/api/productget');
                setAllProduct(response?.data?.data);
            } catch (err) {
                console.log(err)
            } finally {
                setLoading(false)
            }
        };

        fetchProducts();
    }, []);

    if (loading) {
        return <div><Loding></Loding></div>;
    }

    console.log(allProduct)

    return (
        <section className='max-w-6xl mx-auto px-4 pt-32 pb-10 md:pb-20'>
            <Heading headingText='All Product'></Heading>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {allProduct.map(product => (
                    <div
                        key={product._id}
                        className=" bg-neutral-800 rounded-3xl text-neutral-300 p-4 flex flex-col items-start justify-center gap-3 hover:bg-gray-900 hover:shadow-2xl hover:shadow-sky-400 transition-shadow"
                    >
                       
                            <img  src={product.photo} alt={product.name} className="w-full h-40 rounded-md" />
                       
                        <div>
                            <p className="">Name : {product.productname}</p>
                            <p className="">Brand : {product.brand}</p>
                            <p className="">Category : {product.category}</p>
                            <p className="">Price : {product.price}</p>

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

