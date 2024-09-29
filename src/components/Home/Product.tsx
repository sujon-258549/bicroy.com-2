import React from 'react'
import { FaHome } from 'react-icons/fa'
import { FaMobileRetro } from 'react-icons/fa6'
import { FcBiohazard, FcBriefcase, FcBullish, FcBusinessman, FcBusinesswoman, FcCollaboration, FcGlobe, FcGraduationCap, FcHome, FcLinux, FcMindMap, FcSupport } from 'react-icons/fc'
import { GrBus, GrMonitor } from 'react-icons/gr'
import { IoIosFootball } from 'react-icons/io'
import './product.css'

const Product = () => {
    return (
        <div className='max-w-6xl mx-auto px-4'>
            <h4 className='text-[18px] font-semibold py-5 md:py-10 ml-2'>Browse items by category</h4>
            <div className='grid grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-x-20 pb-10 md:pb-20'>
                <div className='flex card-hover cursor-pointer items-center gap-2 bg-slate-300 justify-center py-8 rounded-md ' style={{boxShadow:'1px 1px 5px #000'}}>
                    <div>
                        <FaMobileRetro className='text-4xl md:text-5xl text-[#59BCD1]'></FaMobileRetro>
                    </div>
                    <div>
                        <h4 className='text-[18px] font-semibold'>Mobiles
                        </h4>
                        <p className='text-[16px]'> 60,932 ads</p>
                    </div>
                </div>
               <div className='flex items-center gap-2 h-[130px]  card-hover cursor-pointer bg-slate-300 justify-center py-8 rounded-md ' style={{boxShadow:'1px 1px 5px #000'}}>
                    <div>
                        <GrMonitor className='text-4xl md:text-5xl text-[#15191a]'></GrMonitor>
                    </div>
                    <div>
                        <h4 className='text-[18px] font-semibold'>Electronics
                        </h4>
                        <p className='text-[16px]'> 60,932 ads</p>
                    </div>
                </div>
               <div className='flex items-center gap-2 h-[130px] card-hover cursor-pointer bg-slate-300 justify-center py-8 rounded-md ' style={{boxShadow:'1px 1px 5px #000'}}>
                    <div>
                        <GrBus className='text-4xl md:text-5xl text-[#008D70]'></GrBus>
                    </div>
                    <div>
                        <h4 className='text-[18px] font-semibold'>Vehicles
                        </h4>
                        <p className='text-[16px]'> 60,932 ads</p>
                    </div>
                </div>
               <div className='flex items-center gap-2 h-[130px] card-hover cursor-pointer bg-slate-300 justify-center py-8 rounded-md ' style={{boxShadow:'1px 1px 5px #000'}}>
                    <div>
                        <FcHome className='text-4xl md:text-5xl text-[##D95247]'></FcHome>
                    </div>
                    <div>
                        <h4 className='text-[18px] font-semibold'>Property
                        </h4>
                        <p className='text-[16px]'> 60,932 ads</p>
                    </div>
                </div>
               <div className='flex items-center gap-2 h-[130px] card-hover cursor-pointer bg-slate-300 justify-center py-8 rounded-md ' style={{boxShadow:'1px 1px 5px #000'}}>
                    <div>
                        <FcCollaboration className='text-4xl md:text-5xl text-[#59BCD1]'></FcCollaboration>
                    </div>
                    <div>
                        <h4 className='text-[18px] font-semibold'>Home & Living
                        </h4>
                        <p className='text-[16px]'> 60,932 ads</p>
                    </div>
                </div>
               <div className='flex items-center gap-2 h-[130px] card-hover cursor-pointer bg-slate-300 justify-center py-8 rounded-md ' style={{boxShadow:'1px 1px 5px #000'}}>
                    <div>
                        <FcLinux className='text-4xl md:text-5xl text-[#59BCD1]'></FcLinux>
                    </div>
                    <div>
                        <h4 className='text-[18px] font-semibold'>Pets & Animals
                        </h4>
                        <p className='text-[16px]'> 60,932 ads</p>
                    </div>
                </div>
               <div className='flex items-center gap-2 h-[130px] card-hover cursor-pointer bg-slate-300 justify-center py-8 rounded-md ' style={{boxShadow:'1px 1px 5px #000'}}>
                    <div>
                        <FcBusinessman className='text-4xl md:text-5xl text-[#59BCD1]'></FcBusinessman>
                    </div>
                    <div>
                        <h4 className='text-[18px] font-semibold'>Men's Fashion & Grooming
                        </h4>
                        <p className='text-[16px]'> 60,932 ads</p>
                    </div>
                </div>
               <div className='flex items-center gap-2 h-[130px] card-hover cursor-pointer bg-slate-300 justify-center py-8 rounded-md ' style={{boxShadow:'1px 1px 5px #000'}}>
                    <div>
                        <FcBusinesswoman className='text-4xl md:text-5xl text-[#59BCD1]'></FcBusinesswoman>
                    </div>
                    <div>
                        <h4 className='text-[18px] font-semibold'>Women's Fashion & Beauty
                        </h4>
                        <p className='text-[16px]'> 60,932 ads</p>
                    </div>
                </div>
               <div className='flex items-center gap-2 h-[130px] card-hover cursor-pointer bg-slate-300 justify-center py-8 rounded-md ' style={{boxShadow:'1px 1px 5px #000'}}>
                    <div>
                        <IoIosFootball className='text-4xl md:text-5xl text-[#59BCD1]'></IoIosFootball>
                    </div>
                    <div>
                        <h4 className='text-[18px] font-semibold'>Hobbies, Sports & Kids
                        </h4>
                        <p className='text-[16px]'> 60,932 ads</p>
                    </div>
                </div>
               <div className='flex items-center gap-2 h-[130px] card-hover cursor-pointer bg-slate-300 justify-center py-8 rounded-md ' style={{boxShadow:'1px 1px 5px #000'}}>
                    <div>
                        <FcBullish className='text-4xl md:text-5xl text-[#59BCD1]'></FcBullish>
                    </div>
                    <div>
                        <h4 className='text-[18px] font-semibold'>Business & Industry
                        </h4>
                        <p className='text-[16px]'> 60,932 ads</p>
                    </div>
                </div>
               <div className='flex items-center gap-2 h-[130px] card-hover cursor-pointer bg-slate-300 justify-center py-8 rounded-md ' style={{boxShadow:'1px 1px 5px #000'}}>
                    <div>
                        <FcGraduationCap className='text-4xl md:text-5xl text-[#59BCD1]'></FcGraduationCap>
                    </div>
                    <div>
                        <h4 className='text-[18px] font-semibold'>Education
                        </h4>
                        <p className='text-[16px]'> 60,932 ads</p>
                    </div>
                </div>
               <div className='flex items-center gap-2 h-[130px] card-hover cursor-pointer bg-slate-300 justify-center py-8 rounded-md ' style={{boxShadow:'1px 1px 5px #000'}}>
                    <div>
                        <FcMindMap className='text-4xl md:text-5xl text-[#59BCD1]'></FcMindMap>
                    </div>
                    <div>
                        <h4 className='text-[18px] font-semibold'>Essentials
                        </h4>
                        <p className='text-[16px]'> 60,932 ads</p>
                    </div>
                </div>
               <div className='flex items-center gap-2 h-[130px] card-hover cursor-pointer bg-slate-300 justify-center py-8 rounded-md ' style={{boxShadow:'1px 1px 5px #000'}}>
                    <div>
                        <FcBiohazard className='text-4xl md:text-5xl text-[#59BCD1]'></FcBiohazard>
                    </div>
                    <div>
                        <h4 className='text-[18px] font-semibold'>Agriculture
                        </h4>
                        <p className='text-[16px]'> 60,932 ads</p>
                    </div>
                </div>
               <div className='flex items-center gap-2 h-[130px] card-hover cursor-pointer bg-slate-300 justify-center py-8 rounded-md ' style={{boxShadow:'1px 1px 5px #000'}}>
                    <div>
                        <FcSupport className='text-4xl md:text-5xl text-[#59BCD1]'></FcSupport>
                    </div>
                    <div>
                        <h4 className='text-[18px] font-semibold'>Services
                        </h4>
                        <p className='text-[16px]'> 60,932 ads</p>
                    </div>
                </div>
               <div className='flex items-center gap-2 h-[130px] card-hover cursor-pointer bg-slate-300 justify-center py-8 rounded-md ' style={{boxShadow:'1px 1px 5px #000'}}>
                    <div>
                    <FcBriefcase className='text-4xl md:text-5xl text-[#59BCD1]'></FcBriefcase>

                    </div>
                    <div>
                        <h4 className='text-[18px] font-semibold'>Jobs
                        </h4>
                        <p className='text-[16px]'> 60,932 ads</p>
                    </div>
                </div>
               <div className='flex items-center gap-2 h-[130px] card-hover cursor-pointer bg-slate-300 justify-center py-8 rounded-md ' style={{boxShadow:'1px 1px 5px #000'}}>
                    <div>
                        <FcGlobe className='text-4xl md:text-5xl text-[#59BCD1]'></FcGlobe>
                    </div>
                    <div>
                        <h4 className='text-[18px] font-semibold'>Overseas Jobs
                        </h4>
                        <p className='text-[16px]'> 60,932 ads</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Product