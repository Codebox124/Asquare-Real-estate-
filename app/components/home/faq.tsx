import React from 'react'
import Image from 'next/image'
import starImg from '@/public/images/Abstract Design (1).png'
import { faq } from '@/app/data/data'
export default function Faq() {
    return (
        <div key={1} className='md:py-20 py-10'>
            <Image src={starImg} alt='' className='w-16' />
            <div className='mt-4 flex justify-between   gap-7 items-center'>
                <div>
                    <h2 className='font-bold text-3xl mb-3 '>Frequently Asked Questions</h2>
                    <span className='md:text-sm text-xs text-[#999999]'>Find answers to common questions about Estateins services, property listings, and the real estate process. Were here to provide clarity and assist you every step of the way.</span>
                </div>

            </div>
            <div className=' grid md:grid-cols-3 gap-5 mt-10 '>
                {faq.map((item) => (
                    <div key={item.id} className='border rounded-md px-4 py-6 gap-7 flex flex-col'>

                        <div className='flex flex-col gap-3'>
                            <h1>{item.title}</h1>
                            <span className='text-xs text-[#999999]'>{item.comments}</span>
                        </div>




                    </div>
                ))}

            </div>
        </div>
    )
}
