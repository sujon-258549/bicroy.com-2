"use client";

import React, { useState } from 'react';
import './addproduct.css';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';


const Addproduct = () => {
    const sessin = useSession()
    const email = sessin.data?.user?.email
    const router = useRouter()

    const [category, setCategory] = useState('');
    const [subcategory, setSubCategory] = useState('');

    const handleCategory = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const dataValue = e.target.value;
        setCategory(dataValue);
    };

    const handleSubcategory = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const subCategory = e.target.value;
        setSubCategory(subCategory);
    };

    const handleProductAdd = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const brand = e.currentTarget.brand.value;
        const productname = e.currentTarget.productname.value;
        const price = e.currentTarget.price.value;
        const message = e.currentTarget.message.value;
        const photo = e.currentTarget.photo.value;
        const phone = e.currentTarget.phone.value;


        const productInfo = {
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
            const response = await axios.post('process.env.NEXT_PUBSICT_URL/api/productpost', productInfo);
            console.log(response.data);
            router.push('/')
        } catch (error) {
            console.error('Error adding product:', error);
        }
    };

    return (
        <section style={{
            backgroundImage:
                'url("https://i.pinimg.com/736x/1a/5d/8c/1a5d8c05200b6f1d9a56d8133b09923f.jpg")',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: 'cover'
        }}>
            <section className='max-w-6xl mx-auto px-4 pt-24 pb-1'>
                <div>
                    <section>
                        <div className="p-5 bg-[#149777] mx-auto max-w-2xl box-shadow rounded-xl my-10">
                            <h2 className="mb-4 text-white md:text-4xl py10 text-2xl text-center font-bold">
                                Add a new product
                            </h2>
                            <form onSubmit={handleProductAdd}>
                                <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                                    <div className="sm:col-span-2">
                                        <label htmlFor="name" className="block mb-2 text-white text-xl font-bold">
                                            Product Name
                                        </label>
                                        <input
                                            type="text"
                                            name="productname"
                                            id="name"
                                            className=" border bg-transparent border-black text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:border-black text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                            placeholder="Type product name"
                                            required
                                        />
                                    </div>
                                    <div className="w-full">
                                        <label htmlFor="brand" className="block mb-2 text-white text-xl font-bold">
                                            Brand
                                        </label>
                                        <input
                                            type="text"
                                            name="brand"
                                            id="brand"
                                            className="border bg-transparent border-black text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                            placeholder="Product brand"
                                            required
                                        />
                                    </div>
                                    <div className="w-full">
                                        <label htmlFor="price" className="block mb-2 bg-transparent text-white text-xl font-bold">
                                            Price
                                        </label>
                                        <input
                                            type="number"
                                            name="price"
                                            id="price"
                                            className="border bg-transparent border-black text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                            placeholder="$2999"
                                            required
                                        />
                                    </div>
                                    <div className="sm:col-span-2">
                                        <label htmlFor="name" className="block mb-2 text-white text-xl font-bold">
                                        Your Phone Number
                                        </label>
                                        <input
                                            type="number"
                                            name="phone"
                                            id="name"
                                            className=" border bg-transparent border-black text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:border-black text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                            placeholder="Enter Your Phone Number ........."
                                            required
                                        />
                                    </div>
                                    <div className="sm:col-span-2">
                                        <label htmlFor="category" className="block mb-2 text-white text-xl font-bold">
                                            Category
                                        </label>
                                        <select
                                            id="category"
                                            onChange={handleCategory}
                                            className="border bg-transparent border-black text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:border-black dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                            required
                                        >
                                            <option >Select category</option>
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
                                    <div className="sm:col-span-2">
                                        <label htmlFor="subcategory" className="block mb-2 text-white text-xl font-bold">
                                            Subcategory
                                        </label>
                                        <select
                                            id="subcategory"
                                            onChange={handleSubcategory}
                                            className="border bg-transparent border-black text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:border-black dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                            required
                                        >
                                            <option value="" disabled selected>Select subcategory</option>
                                            {/* Mobiles Subcategories */}
                                            <optgroup label="Mobiles">
                                                <option value="Samsung">Samsung</option>
                                                <option value="Xiaomi">Xiaomi</option>
                                                <option value="Realme">Realme</option>
                                                <option value="vivo">vivo</option>
                                                <option value="Oppo">Oppo</option>
                                                <option value="Apple iPhone">Apple iPhone</option>
                                                <option value="Tecno">Tecno</option>
                                                <option value="Infinix">Infinix</option>
                                                <option value="Oneplus">Oneplus</option>
                                                <option value="Nokia">Nokia</option>
                                                <option value="Symphony">Symphony</option>
                                                <option value="Walton">Walton</option>
                                                <option value="Motorola">Motorola</option>
                                                <option value="itel">itel</option>
                                                <option value="Honor">Honor</option>
                                                <option value="Nothing">Nothing</option>
                                                <option value="Lenovo">Lenovo</option>
                                                <option value="Sony">Sony</option>
                                                <option value="Blackberry">Blackberry</option>
                                                <option value="HTC">HTC</option>
                                                <option value="ZTE">ZTE</option>
                                                <option value="Meizu">Meizu</option>
                                                <option value="Asus">Asus</option>
                                                <option value="Google">Google</option>
                                                <option value="LG">LG</option>
                                                <option value="Panasonic">Panasonic</option>
                                                <option value="TCL">TCL</option>
                                                <option value="Alcatel">Alcatel</option>
                                                <option value="Sega">Sega</option>
                                                <option value="Micromax">Micromax</option>
                                                <option value="Gionee">Gionee</option>
                                                <option value="Lava">Lava</option>
                                                <option value="Oukitel">Oukitel</option>
                                                <option value="Doogee">Doogee</option>
                                                <option value="Blackview">Blackview</option>
                                                <option value="Ulefone">Ulefone</option>
                                                <option value="Coolpad">Coolpad</option>
                                                <option value="Blu">Blu</option>
                                                <option value="Lemon">Lemon</option>
                                                <option value="Fly">Fly</option>
                                                <option value="Poco">Poco</option>
                                            </optgroup>

                                            {/* Electronics Subcategories */}
                                            <optgroup label="Electronics">
                                                <option value="TV/Monitors">TV/Monitors</option>
                                                <option value="PC/Laptops">PC/Laptops</option>
                                                <option value="Gaming Consoles">Gaming Consoles</option>
                                                <option value="Cameras">Cameras</option>
                                                <option value="Audio Equipment">Audio Equipment</option>
                                                <option value="Wearable Devices">Wearable Devices</option>
                                                <option value="Home Appliances">Home Appliances</option>
                                                <option value="Smart Home Devices">Smart Home Devices</option>
                                                <option value="Accessories">Accessories</option>
                                            </optgroup>

                                            {/* Vehicles Subcategories */}
                                            <optgroup label="Vehicles">
                                                <option value="Cars">Cars</option>
                                                <option value="Motorcycles">Motorcycles</option>
                                                <option value="Bicycles">Bicycles</option>
                                                <option value="Trucks">Trucks</option>
                                                <option value="SUVs">SUVs</option>
                                                <option value="Vans">Vans</option>
                                                <option value="Boats">Boats</option>
                                                <option value="ATVs">ATVs</option>
                                                <option value="Commercial Vehicles">Commercial Vehicles</option>
                                            </optgroup>

                                            {/* Property Subcategories */}
                                            <optgroup label="Property">
                                                <option value="Apartments for Sale">Apartments for Sale</option>
                                                <option value="Houses for Sale">Houses for Sale</option>
                                                <option value="Commercial Properties">Commercial Properties</option>
                                                <option value="Land for Sale">Land for Sale</option>
                                                <option value="Rentals">Rentals</option>
                                                <option value="Office Spaces">Office Spaces</option>
                                                <option value="Shops for Rent">Shops for Rent</option>
                                                <option value="Vacation Rentals">Vacation Rentals</option>
                                                <option value="Shared Accommodation">Shared Accommodation</option>
                                                <option value="Real Estate Investment">Real Estate Investment</option>
                                                <option value="New Developments">New Developments</option>
                                                <option value="Foreclosures">Foreclosures</option>
                                                <option value="Luxury Properties">Luxury Properties</option>
                                                <option value="Student Housing">Student Housing</option>
                                                <option value="Farmhouses">Farmhouses</option>
                                                <option value="Warehouse Rentals">Warehouse Rentals</option>
                                                <option value="Industrial Properties">Industrial Properties</option>
                                                <option value="Retirement Communities">Retirement Communities</option>
                                            </optgroup>

                                            {/* Home & Living Subcategories */}
                                            <optgroup label="Home & Living">
                                                <option value="Furniture">Furniture</option>
                                                <option value="Kitchenware">Kitchenware</option>
                                                <option value="Decor">Decor</option>
                                                <option value="Gardening">Gardening</option>
                                                <option value="Appliances">Appliances</option>
                                            </optgroup>

                                            {/* Pets & Animals Subcategories */}
                                            <optgroup label="Pets & Animals">
                                                <option value="Dogs">Dogs</option>
                                                <option value="Cats">Cats</option>
                                                <option value="Birds">Birds</option>
                                                <option value="Fish">Fish</option>
                                                <option value="Small Animals">Small Animals</option>
                                                <option value="Pet Supplies">Pet Supplies</option>
                                                <option value="Pet Services">Pet Services</option>
                                                <option value="Adoptable Pets">Adoptable Pets</option>
                                            </optgroup>

                                            {/* Men's Fashion & Grooming Subcategories */}
                                            <optgroup label="Men's Fashion & Grooming">
                                                <option value="Clothing">Clothing</option>
                                                <option value="Footwear">Footwear</option>
                                                <option value="Accessories">Accessories</option>
                                                <option value="Grooming Products">Grooming Products</option>
                                                <option value="Watches">Watches</option>
                                                <option value="Bags">Bags</option>
                                            </optgroup>

                                            {/* Women's Fashion & Beauty Subcategories */}
                                            <optgroup label="Women's Fashion & Beauty">
                                                <option value="Clothing">Clothing</option>
                                                <option value="Footwear">Footwear</option>
                                                <option value="Accessories">Accessories</option>
                                                <option value="Beauty Products">Beauty Products</option>
                                                <option value="Watches">Watches</option>
                                                <option value="Bags">Bags</option>
                                            </optgroup>

                                            {/* Hobbies, Sports & Kids Subcategories */}
                                            <optgroup label="Hobbies, Sports & Kids">
                                                <option value="Toys">Toys</option>
                                                <option value="Sports Equipment">Sports Equipment</option>
                                                <option value="Arts & Crafts">Arts & Crafts</option>
                                                <option value="Books">Books</option>
                                                <option value="Musical Instruments">Musical Instruments</option>
                                                <option value="Board Games">Board Games</option>
                                            </optgroup>

                                            {/* Business & Industry Subcategories */}
                                            <optgroup label="Business & Industry">
                                                <option value="Office Supplies">Office Supplies</option>
                                                <option value="Commercial Equipment">Commercial Equipment</option>
                                                <option value="Business Services">Business Services</option>
                                                <option value="Industrial Supplies">Industrial Supplies</option>
                                                <option value="Construction Equipment">Construction Equipment</option>
                                            </optgroup>

                                            {/* Education Subcategories */}
                                            <optgroup label="Education">
                                                <option value="Books">Books</option>
                                                <option value="Study Materials">Study Materials</option>
                                                <option value="Tutoring Services">Tutoring Services</option>
                                                <option value="Online Courses">Online Courses</option>
                                                <option value="Educational Toys">Educational Toys</option>
                                            </optgroup>

                                            {/* Essentials Subcategories */}
                                            <optgroup label="Essentials">
                                                <option value="Groceries">Groceries</option>
                                                <option value="Health Products">Health Products</option>
                                                <option value="Personal Care">Personal Care</option>
                                            </optgroup>

                                            {/* Agriculture Subcategories */}
                                            <optgroup label="Agriculture">
                                                <option value="Seeds">Seeds</option>
                                                <option value="Fertilizers">Fertilizers</option>
                                                <option value="Tools">Tools</option>
                                                <option value="Livestock">Livestock</option>
                                            </optgroup>

                                            {/* Services Subcategories */}
                                            <optgroup label="Services">
                                                <option value="Home Services">Home Services</option>
                                                <option value="Pet Services">Pet Services</option>
                                                <option value="Event Planning">Event Planning</option>
                                                <option value="Cleaning Services">Cleaning Services</option>
                                                <option value="Consulting">Consulting</option>
                                            </optgroup>

                                            {/* Jobs Subcategories */}
                                            <optgroup label="Jobs">
                                                <option value="Full-time Jobs">Full-time Jobs</option>
                                                <option value="Part-time Jobs">Part-time Jobs</option>
                                                <option value="Internships">Internships</option>
                                                <option value="Freelance Jobs">Freelance Jobs</option>
                                                <option value="Remote Jobs">Remote Jobs</option>
                                            </optgroup>

                                            {/* Overseas Jobs Subcategories */}
                                            <optgroup label="Overseas Jobs">
                                                <option value="Skilled Jobs">Skilled Jobs</option>
                                                <option value="Unskilled Jobs">Unskilled Jobs</option>
                                                <option value="Seasonal Jobs">Seasonal Jobs</option>
                                                <option value="Visa Sponsorship Jobs">Visa Sponsorship Jobs</option>
                                            </optgroup>
                                        </select>
                                    </div>
                                    <div className="sm:col-span-2">
                                        <label htmlFor="name" className="block mb-2 text-white text-xl font-bold">
                                            Photm url
                                        </label>
                                        <input
                                            type="text"
                                            name="photo"
                                            id="name"
                                            className="border bg-transparent border-black text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:border-black text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                            placeholder="Type product name"
                                            required
                                        />
                                    </div>
                                    <div className="sm:col-span-2">
                                        <label htmlFor="description" className="block mb-2 text-white text-xl font-bold">
                                            Description
                                        </label>
                                        <textarea
                                            name='message'
                                            id="description"
                                            rows={8}
                                            className="block p-2.5 w-full text-sm bg-transparent rounded-lg border border-black focus:ring-primary-500 focus:border-primary-500 dark:border-black text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                            placeholder="Photo url"
                                            required
                                        />
                                    </div>
                                </div>



                                <button
                                    className="relative w-full mt-10 inline-flex h-12 active:scale-95 transistion overflow-hidden rounded-lg p-[1px] focus:outline-none"
                                >
                                    <span
                                        className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#e7029a_0%,#f472b6_50%,#bd5fff_100%)]"
                                    >
                                    </span>
                                    <span
                                        className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-7 text-sm font-medium text-white backdrop-blur-3xl gap-2 undefined"
                                    >
                                        Add Product
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




                            </form>
                        </div>
                    </section>
                </div>
            </section >
        </section >
    );
};

export default Addproduct;
