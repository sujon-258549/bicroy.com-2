"use client"
import React, { useState } from 'react'
import { FiChevronDown } from 'react-icons/fi'

const Card = () => {

    const [showmore, setShowmore] = useState(false)
    const [showless, setShowless] = useState(false)
    const [showtext, setShowtext] = useState(false)

    console.log(showtext)

    return (
        <div className='max-w-6xl mx-auto px-4 py-10'>
            <h4 className='text-[18px] font-bold pb-4'>Quick links</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 ">
                {/* card 1 */}
                <div className="p-4  rounded-md" style={{ boxShadow: '1px 1px 10px' }}>
                    <div className="flex rounded-lg h-full  p-1 flex-col">
                        <h4 className='text-[18px] font-bold pb-2'>Quick links</h4>
                        <div className="flex flex-col justify-between flex-grow">
                            <p className="leading-relaxed text-base ">
                                Desktop ComputersLaptopsTVsCameras, Camcorders & AccessoriesAudio & Sound Systems
                            </p>

                        </div>
                    </div>
                </div>
                {/* card 1 */}
                <div className="p-4  rounded-md" style={{ boxShadow: '1px 1px 10px' }}>
                    <div className="flex rounded-lg h-full  p-1 flex-col">
                        <h4 className='text-[18px] font-bold pb-2'>Quick links</h4>
                        <div className="flex flex-col justify-between flex-grow">
                            <p className="leading-relaxed text-base ">
                                Desktop ComputersLaptopsTVsCameras, Camcorders & AccessoriesAudio & Sound Systems
                            </p>

                        </div>
                    </div>
                </div>
                {/* card 1 */}
                <div className="p-4  rounded-md" style={{ boxShadow: '1px 1px 10px' }}>
                    <div className="flex rounded-lg h-full  p-1 flex-col">
                        <h4 className='text-[18px] font-bold pb-2'>Quick links</h4>
                        <div className="flex flex-col justify-between flex-grow">
                            <p className="leading-relaxed text-base ">
                                Desktop ComputersLaptopsTVsCameras, Camcorders & AccessoriesAudio & Sound Systems
                            </p>

                        </div>
                    </div>
                </div>
                {/* card 1 */}
                <div className="p-4  rounded-md" style={{ boxShadow: '1px 1px 10px' }}>
                    <div className="flex rounded-lg h-full  p-1 flex-col">
                        <h4 className='text-[18px] font-bold pb-2'>Quick links</h4>
                        <div className="flex flex-col justify-between flex-grow">
                            <p className="leading-relaxed text-base ">
                                Desktop ComputersLaptopsTVsCameras, Camcorders & AccessoriesAudio & Sound Systems
                            </p>

                        </div>
                    </div>
                </div>


            </div>

            <div className='pt-10'>
                <h4 className='text-[18px] font-bold pb-2'>About Bikroy, The Largest Marketplace in Bangladesh!</h4>
                <div className="flex flex-col justify-between flex-grow">
                    <p className="leading-relaxed text-base ">
                        Bikroy is a platform on which you can buy and sell almost everything! We help people buy and sell vehicles, find properties, get jobs or recruit employees, buy and sell mobile phones, purchase electronic products, and much more. With more than 50 categories our solutions are built to be safe, smart, and convenient for our customers.
                    </p>

                    <button onClick={() => {
                        setShowmore(!showmore);
                        (setShowtext(!showtext))
                        setShowless(!showless);

                    }} className={

                        showmore ? "flex justify-start py-5 items-center hidden" : 'flex justify-start py-5 items-center'


                    }>Show more <FiChevronDown className='mt-1 ml-3 text-xl'></FiChevronDown>
                    </button>

                    <div className={showtext ? "" : ""}>
                        <div className={showtext ? 'pt-5' : 'hidden'}>
                            <div className=''>
                                <h4 className='text-[16px] font-bold pb-2'>Buy, Sell, Rent, or Find Jobs in Bangladesh</h4>
                                <div className="flex flex-col justify-between flex-grow space-y-4 text-slate-500">
                                    <p className="leading-relaxed text-base ">
                                        Every month, hundreds of millions of people use Bikroy to find and sell mobiles, musical instruments, cars, houses, jobs, and more through classified ads. To sell new items or sell used items quickly, Bikroy offers Boost Ad features.
                                    </p>
                                    <p className="leading-relaxed text-base ">
                                        Bikroy has an extensive collection of new and used goods, making it easier for users to quickly buy new items or buy used items at their desired location. To buy online, users easily can reach their desired products through filtering options.
                                    </p>
                                    <p className="leading-relaxed text-base ">
                                        For businesses, Bikroy has introduced the ‘Membership’ service, which helps them expand their businesses online. Members will have their virtual shop with a Bikroy URL with free promotions of their goods. With different membership categories, businesses can flourish as verified members and authorized dealers.
                                    </p>
                                    <p className="leading-relaxed text-base ">
                                        With millions of unique monthly visitors, thousands of interested buyers, and thousands of active dealers on our platform, Bikroy is the Largest Marketplace in Bangladesh.
                                    </p>



                                </div>

                            </div>
                            <div className='pt-5'>
                                <h4 className='text-[16px] font-bold pb-2'>Buy, Sell, Rent, or Find Jobs in Bangladesh</h4>
                                <div className="flex flex-col justify-between flex-grow text-slate-500">
                                    <p className="leading-relaxed text-base ">
                                        Every month, hundreds of millions of people use Bikroy to find and sell mobiles, musical instruments, cars, houses, jobs, and more through classified ads. To sell new items or sell used items quickly, Bikroy offers Boost Ad features.
                                    </p>

                                    <div className='ml-4 space-y-3'>
                                        <li><p className="leading-relaxed text-base ">
                                            Fast & Easy Experience: Navigated buying and selling experience in Bangladesh which is simpler, faster, and easier. Shop and sell on the go and get your desired products in just a few clicks.
                                        </p></li>
                                        <li><p className="leading-relaxed text-base ">
                                            Post Ads Free: As a free classified website, we offer free ad posting features in many categories for the convenience of the users based on their locations.
                                        </p></li>
                                        <li><p className="leading-relaxed text-base ">
                                            Safe & Secure Shopping: We have listed our verified members and authorized dealers to create a safe shopping experience for our users.
                                        </p></li>


                                    </div>
                                    <p className="leading-relaxed text-base mt-5">
                                        Looking for the right buyer in  Post an ad to sell or rent anything faster on
                                    </p>





                                </div>

                            </div>
                        </div>

                    </div>
                    <button

                        onClick={() => {
                            setShowless(!showless);
                            setShowmore(!showmore);
                            (setShowtext(!showtext))
                        }}

                        className={showless ? 'flex justify-start py-5 items-center ' : "flex justify-start py-5 items-center hidden"}
                    >
                        Show less
                        <FiChevronDown className='mt-1 ml-3 text-xl' />
                    </button>

                </div>

            </div>

        </div >
    )
}

export default Card