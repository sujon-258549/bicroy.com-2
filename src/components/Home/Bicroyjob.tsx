"use client"

import { FiPlus } from "react-icons/fi"



const Bicroyjob = () => {
    return (
        <div className='max-w-6xl mx-auto p-4'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5' style={}>
                <div className='flex gap-5 items-center'>
                    <div>
                        <img className=" w-[150px]" src="./image/Screenshot_3.png" alt="" />
                    </div>
                    <div>
                        <h4 className="text-xl font-bold -mt-3">Start making money!</h4>
                        <div className="py-4">
                            <p className="text-[16px]">Do you have something to sell?</p>
                            <p className="text-[16px]">Post your first ad and start making money!</p>
                        </div>
                        <button className="items-center bg-[#FFC800] flex px-5 font-bold pt-1 pb-2 rounded-full"> <FiPlus className="mr-1 bg-[#673500] text-white rounded-full mt-[3px]"></FiPlus> Post your ad for free </button>
                    </div>
                </div>
                <div className='border-l'>
                    <div>
                        <img className="w-[150px]" src="./image/Screenshot_1.png" alt="" />
                    </div>
                    <div>
                        
                        <div className="pb-4 pt-2">
                            <p className="text-[16px]">Looking to hire or get hired in Bangladesh ?
                            Get access to 800k+ CVs or browse through 800+ job vacancies!</p>
                            
                        </div>
                        <button className="items-center bg-[#FFC800] flex px-5 font-bold pt-1 pb-2 rounded-full"> <FiPlus className="mr-1 bg-[#673500] text-white rounded-full mt-[3px]"></FiPlus> Post your ad for free </button>
                    </div>
                </div>
                <div>

                </div>
            </div>
        </div>
    )
}

export default Bicroyjob
