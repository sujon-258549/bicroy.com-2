"use client";

import Loding from '@/components/Loding/Loding';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './id.css';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';

// Define the Product interface
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

interface ProductDetailPageProps {
    params: {
        id: string; // Assuming 'id' is a part of the params
    };
}

const ProductDetailPage: React.FC<ProductDetailPageProps> = ({ params }) => {
    const router = useRouter();
    const { data: session } = useSession();
    const [product, setProduct] = useState<Product | null>(null); // Initialize as null with Product type
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('https://bicroy-com-2.vercel.app/api/productget');

                // Find the specific product by _id
                const foundProduct = response?.data?.data?.find((product: Product) => product._id === params.id);
                setProduct(foundProduct || null); // Set product or null if not found
            } catch (err) {
                console.log(err);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, [params.id]); // Ensure the correct param is used

    if (loading) {
        return <div><Loding /></div>;
    }

    if (!product) {
        return <div>Product not found</div>;
    }

    const email = session?.user?.email;

    const handleWishlist = async () => {
        const { productname, brand, price, phone, category, subcategory, photo, message } = product;

        const wishlist = {
            productname,
            brand,
            price,
            email,
            phone,
            category,
            subcategory,
            photo,
            message,
        };

        try {
            const response = await axios.post('https://bicroy-com-2.vercel.app/api/addwishlist', wishlist);
            console.log(response.data);
            router.push('/');
        } catch (error) {
            console.error('Error adding product to wishlist:', error);
        }
    };

    return (
        <section className='max-w-4xl mx-auto pt-40 pb-10 px-4 items-center'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 items-center p-5 rounded-md' style={{ boxShadow: '1px 1px 50px #149777' }}>
                <div>
                    <img src={product.photo} className='w-full rounded-md' alt={product.productname} />
                </div>
                <div className='space-y-4'>
                    <h1 className='text-3xl font-bold'>Name: {product.productname}</h1>
                    <p><strong>Brand:</strong> {product.brand}</p>
                    <p><strong>Price:</strong> ${product.price}</p>
                    <p><strong>Category:</strong> {product.category}</p>
                    <p><strong>Subcategory:</strong> {product.subcategory}</p>
                    <p><strong>Message:</strong> {product.message}</p>

                    <button className="btn-primary" onClick={handleWishlist}>
                        Add Wishlist
                    </button>
                </div>
            </div>
        </section>
    );
}

export default ProductDetailPage;
