import React from 'react'
import starImg from '@/public/images/Abstract Design (1).png'

import Image from 'next/image'
import Img1 from '@/public/images/Image (1).png'
import { FaBath } from "react-icons/fa";
import { MdOutlineChair } from "react-icons/md";
import { PiWarehouseBold } from "react-icons/pi";
import { propData } from '@/app/data/data'
export default function FeaturedProperies() {
    return (
        <div className='py-20'>
            <Image src={starImg} alt='' className='w-16' />
            <div className='mt-4 flex justify-center  gap-7 items-center'>
                <div>
                    <h2 className='font-bold text-3xl mb-3 '>Featured Properties</h2>
                    <span className='text-sm text-[#999999]'>Explore our handpicked selection of featured properties. Each listing offers a glimpse into exceptional homes and investments available through Estatein. Click "View Details" for more information.</span>
                </div>
                <div className=''>
                    <button className='py-2 px-5 rounded-md border text-xs'>All</button>
                </div>
            </div>
            <div className=' grid grid-cols-3 gap-5 mt-10'>
                {propData.map((item) => (
                    <div className='border rounded-md p-4 gap-7 flex flex-col'>
                        <div>
                            <Image src={item.img} alt='' />
                        </div>
                        <div>
                            <h1>{item.title}</h1>
                            <span className='text-xs text-[#999999]'>{item.detail}<span className='text-white underline cursor-pointer'> Read More</span></span>
                        </div>
                        <div className='flex justify-between gap-2 items-center text-xs'>
                            <div className='flex items-center gap-2 p-2 rounded-2xl bg-[#262626] border border-gray-600'>

                                <MdOutlineChair />
                                <span>{item.bedsize}-Bedroom</span>

                            </div>
                            <div className='flex gap-2 items-center p-2 rounded-2xl bg-[#262626] border border-gray-600'>
                                <FaBath />
                                <span>{item.bathsize}-Bathroom</span>

                            </div>
                            <div className='flex gap-2 p-2 items-center rounded-2xl bg-[#262626] border border-gray-600'>
                                <FaBath />
                                <span>Villa</span>

                            </div>

                        </div>
                        <div className='flex items-center justify-between'>
                            <div>
                                <span className='text-xs'>price</span>
                                <h2 className='text-xl font-bold'>{item.price}</h2>
                            </div>
                            <div>
                                <button className='px-4 py-2 rounded-md shadow-2xl bg-[#703BF7]'>View Property Details</button>
                            </div>

                        </div>


                    </div>
                ))}

            </div>
        </div>
    )
}
