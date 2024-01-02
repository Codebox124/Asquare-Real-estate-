'use client'
import React from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link';
export default function Header() {
    const pathname = usePathname();
    return (
        <header className='bg-[#1A1A1A] py-4 md:fixed z-10 w-full top-0'>
            <div className=' max-w-7xl mx-auto px-4 md:grid items-center grid-cols-3'>
                <div>
                    <h2 className='text-xl font-bold'>Asquare Flourish Homes</h2>
                </div>
                <div className='md:flex hidden gap-6 text-xs justify-center'>
                    <Link href="/" className= {`px-2 py-2 rounded-md ${pathname === '/' ? "border border-gray-600 bg-[#141414] " : ""}`}>
                        Home
                    </Link>
                    <Link href="/about" className= {`px-2 py-2 rounded-md ${pathname === '/about' ? "border border-gray-600 bg-[#141414] " : ""}`}>
                        About Us
                    </Link>
                    <Link href="/properties" className= {`px-2 py-2 rounded-md ${pathname === '/properties' ? "border border-gray-600 bg-[#141414] " : ""}`}>
                        Properties
                    </Link>
                    <Link href="/services" className= {`px-2 py-2 rounded-md ${pathname === '/services' ? "border border-gray-600 bg-[#141414] " : ""}`}>
                        Services
                    </Link>

                </div>
                <div className='md:flex hidden justify-end items-center'>
                    <button className='py-2 px-4 rounded-md border text-xs'>Contact Us </button>
                </div>
            </div>
        </header>
    )
}
