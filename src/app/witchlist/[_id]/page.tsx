"use client";

import Loding from '@/components/Loding/Loding';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

interface ProductDetailPageProps {
    params: {
        id: string; // Assuming 'id' is a part of the params
    };
}

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

const ProductDetailPage: React.FC<ProductDetailPageProps> = ({ params }) => {
    console.log("Params ID:", params.id);  // Debug: Log the params ID

    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('process.env.NEXT_PUBSICT_URL/api/productget');
                console.log("API Response Data:", response?.data?.data); // Debug: Log API response data

                // Log each product's ID
                response.data.data.forEach((product: Product) => {
                    console.log("Product ID:", product._id); // Log each product ID
                });

                // Log the params.id for comparison
                console.log("Parameter ID:", params.id);

                // Find the product using the correct type comparison (string comparison)
                const foundProduct = response.data.data.find((p: Product) => p._id === params.id);
                console.log("Found Product:", foundProduct); // Debug: Log found product

                setSelectedProduct(foundProduct || null);
            } catch (err) {
                console.log("Error fetching products:", err);
            } finally {
                setIsLoading(false);
            }
        };

        fetchProducts();
    }, [params.id]);

    if (isLoading) {
        return <div><Loding /></div>;
    }

    if (!selectedProduct) {
        return <div className="text-gray-500">Product not found.</div>; // Fallback if product is not found
    }

    return (
        <section className='max-w-4xl mx-auto pt-40 pb-10 px-4 items-center'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 items-center p-5 rounded-md' style={{ boxShadow: '1px 1px 50px #149777' }}>
                <div>
                    <img src={selectedProduct.photo} alt={selectedProduct.productname} className='w-full rounded-md' /> {/* Added alt text for accessibility */}
                </div>
                <div className='space-y-4'>
                    <h1 className='text-3xl font-bold'>Name: {selectedProduct.productname}</h1>
                    <p><strong>Brand:</strong> {selectedProduct.brand}</p>
                    <p><strong>Price:</strong> ${selectedProduct.price}</p>
                    <p><strong>Category:</strong> {selectedProduct.category}</p>
                    <p><strong>Subcategory:</strong> {selectedProduct.subcategory}</p>
                    <p><strong>Message:</strong> {selectedProduct.message}</p>
                </div>
            </div>
        </section>
    );
}

export default ProductDetailPage;
