import { testiomonia } from '@/app/data/data'
import React from 'react'
import starImg from '@/public/images/Abstract Design (1).png'
import starreviw from '@/public/images/Container.png'
import Image from 'next/image'
export default function Testimonia() {
    return (
        <div className='md:py-20 py-10'>
            <Image src={starImg} alt='' className='w-16' />
            <div className='mt-4 flex justify-between   gap-7 items-center'>
                <div>
                    <h2 className='font-bold text-3xl mb-3 '>What Our Clients Say</h2>
                    <span className='md:text-sm text-xs text-[#999999]'>Read the success stories and heartfelt testimonials from our valued clients. Discover why they chose Estatein for their real estate needs.</span>
                </div>
               
            </div>
            <div className=' grid md:grid-cols-3 gap-5 mt-10 '>
                {testiomonia.map((item) => (
                    <div key={item.id} className='border rounded-md p-4 gap-7 flex flex-col'>
                        <div>
                            <Image src={starreviw} alt='' width={200} />
                        </div>
                        <div>
                            <h1>{item.title}</h1>
                            <span className='text-xs text-[#999999]'>{item.comments}</span>
                        </div>
                        <div className='flex  gap-2 items-center text-xs'>
                            <div>
                                <Image className='h-[40px] w-[43px] rounded-full' src={item.avatar} alt='' />

                            </div>
                            <div className='flex flex-col'>
                                <span className='text-sm'>{item.nam}</span>
                                <span className='text-xs text-gray-500'>{item.occupa}</span>
                            </div>



                        </div>



                    </div>
                ))}

            </div>
        </div>
    )
}
