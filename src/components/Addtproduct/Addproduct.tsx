import React from 'react'

import './addproduct.css'

const Addproduct = () => {
    return (

        <section  style={{
            backgroundImage:
                'url("https://i.pinimg.com/736x/1a/5d/8c/1a5d8c05200b6f1d9a56d8133b09923f.jpg")', backgroundRepeat:'no-repeat',backgroundPosition:'center', backgroundSize:'cover'
        }}>
            <section className='max-w-6xl mx-auto px-4 pt-20 pb-10' >


                <div>
                    <section className=" ">
                        <div className=" p-5 bg-[#149777] mx-auto max-w-2xl box-shadow rounded-xl  my-10" >
                            <h2 className="mb-4 text-white md:text-4xl py10 text-2xl text-center font-bold  ">
                                Add a new product
                            </h2>
                            <form action="#">
                                <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 ">
                                    <div className="sm:col-span-2">
                                        <label
                                            htmlFor="name"
                                            className="block mb-2  text-white text-xl font-bold  "
                                        >
                                            Product Name
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            id="name"
                                            className=" border bg-transparent border-black  text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:border-black dark:placeholder-gray-400 dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                            placeholder="Type product name"
                                           
                                        />
                                    </div>
                                    <div className="w-full">
                                        <label
                                            htmlFor="brand"
                                            className="block mb-2  text-white text-xl font-bold  "
                                        >
                                            Brand
                                        </label>
                                        <input
                                            type="text"
                                            name="brand"
                                            id="brand"
                                            className=" border border-black  bg-transparent text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:placeholder-gray-400 dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                            placeholder="Product brand"
                                          
                                        />
                                    </div>
                                    <div className="w-full">
                                        <label
                                            htmlFor="price"
                                            className="block mb-2 bg-transparent text-white text-xl font-bold  "
                                        >
                                            Price
                                        </label>
                                        <input
                                            type="number"
                                            name="price"
                                            id="price"
                                            className=" border bg-transparent border-black  text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:placeholder-gray-400 dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                            placeholder="$2999"
                                           
                                        />
                                    </div>
                                    <div>
                                        <label
                                            htmlFor="category"
                                            className="block mb-2  text-white text-xl font-bold  "
                                        >
                                            Category
                                        </label>
                                        <select
                                            id="category"
                                            className=" border border-black  text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block bg-transparent w-full p-2.5  dark:border-black dark:placeholder-gray-400 dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                        >


                                            <option disabled selected>Select category</option>
                                            <option value="Mobiles">Mobiles</option>
                                            <option value="Electronics">Electronics</option>
                                            <option value="Vehicles">Vehicles</option>
                                            <option value="Property">Property</option>
                                            <option value="Home & Living">Home & Living</option>
                                            <option value="Pets & Animals">Pets & Animals</option>
                                            <option value="Men's Fashion & Grooming">Mens Fashion & Grooming</option>
                                            <option value="Women's Fashion & Beauty">Womens Fashion & Beauty</option>
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
                                    <div>
                                        <label
                                            htmlFor="category"
                                            className="block mb-2  text-white text-xl font-bold  "
                                        >
                                            Select subcategory
                                        </label>
                                        <select
                                            id="category"
                                            className=" border border-black  text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block bg-transparent w-full p-2.5  dark:border-black dark:placeholder-gray-400 dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                        >
                                            <option disabled selected>Select subcategory</option>

                                            {/* <!-- Mobiles Subcategories --> */}
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

                                            {/* <!-- Electronics Subcategories --> */}
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

                                            {/* <!-- Vehicles Subcategories --> */}
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

                                            {/* <!-- Property Subcategories --> */}
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

                                            {/* <!-- Home & Living Subcategories --> */}
                                            <optgroup label="Home & Living">
                                                <option value="Furniture">Furniture</option>
                                                <option value="Kitchenware">Kitchenware</option>
                                                <option value="Decor">Decor</option>
                                                <option value="Gardening">Gardening</option>
                                                <option value="Appliances">Appliances</option>
                                            </optgroup>

                                            {/* <!-- Pets & Animals Subcategories --> */}
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

                                            {/* <!-- Men's Fashion & Grooming Subcategories --> */}
                                            <optgroup label="Men's Fashion & Grooming">
                                                <option value="Clothing">Clothing</option>
                                                <option value="Footwear">Footwear</option>
                                                <option value="Accessories">Accessories</option>
                                                <option value="Grooming Products">Grooming Products</option>
                                                <option value="Watches">Watches</option>
                                                <option value="Bags">Bags</option>
                                            </optgroup>

                                            {/* <!-- Women's Fashion & Beauty Subcategories --> */}
                                            <optgroup label="Women's Fashion & Beauty">
                                                <option value="Clothing">Clothing</option>
                                                <option value="Footwear">Footwear</option>
                                                <option value="Accessories">Accessories</option>
                                                <option value="Beauty Products">Beauty Products</option>
                                                <option value="Jewelry">Jewelry</option>
                                                <option value="Watches">Watches</option>
                                            </optgroup>

                                            {/* <!-- Hobbies, Sports & Kids Subcategories --> */}
                                            <optgroup label="Hobbies, Sports & Kids">
                                                <option value="Toys">Toys</option>
                                                <option value="Sports Equipment">Sports Equipment</option>
                                                <option value="Outdoor Activities">Outdoor Activities</option>
                                                <option value="Craft Supplies">Craft Supplies</option>
                                                <option value="Books">Books</option>
                                            </optgroup>

                                            {/* <!-- Business & Industry Subcategories --> */}
                                            <optgroup label="Business & Industry">
                                                <option value="Office Equipment">Office Equipment</option>
                                                <option value="Commercial Supplies">Commercial Supplies</option>
                                                <option value="Machinery">Machinery</option>
                                                <option value="Industrial Equipment">Industrial Equipment</option>
                                                <option value="Business Services">Business Services</option>
                                            </optgroup>

                                            {/* <!-- Education Subcategories --> */}
                                            <optgroup label="Education">
                                                <option value="Books">Books</option>
                                                <option value="Stationery">Stationery</option>
                                                <option value="Online Courses">Online Courses</option>
                                                <option value="Tutoring Services">Tutoring Services</option>
                                                <option value="Educational Toys">Educational Toys</option>
                                            </optgroup>

                                            {/* <!-- Essentials Subcategories --> */}
                                            <optgroup label="Essentials">
                                                <option value="Groceries">Groceries</option>
                                                <option value="Household Items">Household Items</option>
                                                <option value="Personal Care">Personal Care</option>
                                                <option value="Medicines">Medicines</option>
                                                <option value="Clothing">Clothing</option>
                                            </optgroup>

                                            {/* <!-- Agriculture Subcategories /--> */}
                                            <optgroup label="Agriculture">
                                                <option value="Farming Equipment">Farming Equipment</option>
                                                <option value="Livestock">Livestock</option>
                                                <option value="Seeds">Seeds</option>
                                                <option value="Fertilizers">Fertilizers</option>
                                                <option value="Pesticides">Pesticides</option>
                                            </optgroup>

                                            {/* <!-- Services Subcategories --> */}
                                            <optgroup label="Services">
                                                <option value="Cleaning Services">Cleaning Services</option>
                                                <option value="Transportation Services">Transportation Services</option>
                                                <option value="Event Planning">Event Planning</option>
                                                <option value="Consulting Services">Consulting Services</option>
                                                <option value="Legal Services">Legal Services</option>
                                            </optgroup>

                                            {/* <!-- Jobs Subcategories --> */}
                                            <optgroup label="Jobs">
                                                <option value="Full-Time Jobs">Full-Time Jobs</option>
                                                <option value="Part-Time Jobs">Part-Time Jobs</option>
                                                <option value="Internships">Internships</option>
                                                <option value="Freelance Opportunities">Freelance Opportunities</option>
                                                <option value="Remote Jobs">Remote Jobs</option>
                                            </optgroup>

                                            {/* <!-- Overseas Jobs Subcategories --> */}
                                            <optgroup label="Overseas Jobs">
                                                <option value="Skilled Jobs">Skilled Jobs</option>
                                                <option value="Unskilled Jobs">Unskilled Jobs</option>
                                                <option value="Teaching Jobs">Teaching Jobs</option>
                                                <option value="Healthcare Jobs">Healthcare Jobs</option>
                                                <option value="Construction Jobs">Construction Jobs</option>
                                            </optgroup>
                                        </select>
                                    </div>

                                    <div className="sm:col-span-2">
                                        <label
                                            htmlFor="description"
                                            className="block mb-2  text-white text-xl font-bold  "
                                        >
                                            Description
                                        </label>
                                        <textarea
                                            id="description"
                                            rows={8}
                                            className="block p-2.5 w-full text-sm bg-transparent rounded-lg border border-black focus:ring-primary-500 focus:border-primary-500  dark:border-black dark:placeholder-gray-400 dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                            placeholder="Your description here"
                                            
                                        />
                                    </div>
                                </div>
                                <button
                                    type="submit"
                                    className="product-button "
                                >
                                    Add product
                                </button>
                            </form>
                        </div>
                    </section>

                </div>
            </section>
        </section>
    )
}

export default Addproduct