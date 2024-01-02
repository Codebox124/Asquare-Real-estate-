import React from 'react'
import herImg from '@/public/images/Image.png'
import circleImg from '@/public/images/Sub Container.png'
import icon1 from '@/public/images/Icon Container.png'
import icon2 from '@/public/images/Icon Container (1).png'
import icon3 from '@/public/images/Icon Container (2).png'
import icon4 from '@/public/images/Icon Container (3).png'
import Image from 'next/image'
export default function Hero() {
    return (
        <div className='mt-10'>
            <div className='md:grid gap-4 flex-col-reverse flex md:grid-cols-2 mb-10 '>

                <div className='flex flex-col justify-center'>
                    <div className='mb-3'>
                        <h2 className=' text-2xl md:text-4xl font-bold'>Discover Your Dream Property with Asquare Flourish Homes</h2>
                    </div>
                    <div className='mb-10'>
                        <span className='text-sm text-[#999999]'>Your journey to finding the perfect property begins here. Explore our listings to find the home that matches your dreams.</span>
                    </div>
                    <div className='flex gap-4 mb-10'>
                        <div>
                            <button className='border px-4 py-3 rounded-md text-sm'>Learn More </button>
                        </div>
                        <div>
                            <button className='bg-[#703BF7] py-3 px-4 rounded-md shadow-2xl text-sm'>Browse Properties</button>
                        </div>

                    </div>
                    <div className='grid grid-cols-2 md:grid-cols-3 gap-4 justify-between'>
                        <div className='bg-[#262626] gap-2  p-2 items-center justify-start w-full flex flex-col rounded-md border-gray-500 border'>
                            <span className='text-2xl font-bold'>200+</span>
                            <span className='text-xs'>Happy Customers</span>


                        </div>
                        <div className='bg-[#262626] gap-2  p-2 items-center justify-start w-full flex flex-col rounded-md border-gray-500 border'>
                            <span className='text-2xl font-bold'>10k+</span>
                            <span className='text-xs'>Properties For Clients</span>


                        </div>
                        <div className='bg-[#262626] gap-2  p-2 items-center justify-start w-full flex flex-col rounded-md border-gray-500 border'>
                            <span className='text-2xl font-bold'>16+</span>
                            <span className='text-xs'>Years of Experience</span>


                        </div>

                    </div>

                </div>
                <div className='relative'>
                    <div className='absolute left-0 right-0 md:top-20 bottom-0'>
                        <Image src={circleImg} alt=''className='md:w-[150px] w-[100px]' />
                    </div>
                    <Image src={herImg} alt='' className='w-full' />
                </div>


            </div>
            <div className=' grid grid-cols-2 md:grid-cols-4 mb-10 gap-5 text-sm text-center'>
                <div className='flex flex-col justify-center gap-3 bg-[#262626] border-gray-500 py-5 rounded-md items-center'>
                    <Image src={icon1} alt='' width={ 70} />
                    <span>Find Your Dream Home</span>


                </div>
                <div className='flex flex-col justify-center gap-3 bg-[#262626] border-gray-500 py-5 rounded-md items-center'>
                    <Image src={icon2} alt='' width={ 70} />
                    <span>Unlock Property Value</span>


                </div>
                <div className='flex flex-col justify-center gap-3 bg-[#262626] border-gray-500 py-5 rounded-md items-center'>
                    <Image src={icon3} alt='' width={ 70} />
                    <span>Effortless Property Management</span>


                </div>
                <div className='flex flex-col justify-center gap-3 bg-[#262626] border-gray-500 py-5 rounded-md items-center'>
                    <Image src={icon4} alt='' width={ 70} />
                    <span>Smart Investments, Informed Decisions</span>


                </div>

            </div>
        </div>
    )
}
