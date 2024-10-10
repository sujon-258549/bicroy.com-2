"use client";

import Loding from '@/components/Loding/Loding';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './id.css'

const ProductDetailPage = ({ params }) => {
    const [product, setProduct] = useState(null); // Initialize as null
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('http://localhost:3000/api/productget');

                // Find the specific product by _id
                const foundProduct = response?.data?.data?.find(product => product._id === params._id);
                setProduct(foundProduct);
            } catch (err) {
                console.log(err);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, [params._id]); // Add params._id as a dependency

    if (loading) {
        return <div><Loding /></div>;
    }

    if (!product) {
        return <div>Product not found</div>;
    }

    return (

        <section className='max-w-4xl mx-auto pt-40 pb-10 px-4 items-center'>

            <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 items-center p-5 rounded-md' style={{ boxShadow: '1px 1px 50px #149777' }}>
                <div>
                    <img src={product.photo} className='w-full rounded-md ' alt={product.productname} />
                </div>
                <div className='space-y-4'>
                    <h1 className='text-3xl font-bold'>Name : {product.productname}</h1>
                    <p><strong>Brand:</strong> {product.brand}</p>
                    <p><strong>Price:</strong> ${product.price}</p>
                    <p><strong>Category:</strong> {product.category}</p>
                    <p><strong>Subcategory:</strong> {product.subcategory}</p>
                    <p><strong>Message:</strong> {product.message}</p>
                    
                    <button>
                      Add  Witch list
                    </button>
                </div>
            </div>
        </section>

    );
}

export default ProductDetailPage;
