import React from 'react'
import { Button } from '../ui/button'
import { FaArrowRight } from "react-icons/fa";
import Link from 'next/link';
import { IoIosArrowDown } from "react-icons/io";
import MobileNav from './MobileNav';

const links = [
    {name: 'Products', href: '#', icon: <IoIosArrowDown />},
    {name: 'Solutions', href: '#', icon: <IoIosArrowDown />},
    {name: 'Services', href: '#', icon: <IoIosArrowDown />},
    {name: 'Help Center', href: '#', icon: <IoIosArrowDown />},
    {name: 'Pricing', href: '#'},
]

const Header = () => {
  return (
    <div className='flex items-center justify-between py-5 px-10 bg-white text-black'>
        <h1 className='font-bold text-2xl'>Magnifico</h1>
        <ul className='hidden lg:flex items-center gap-4'>
            {links.map((link, index) => (
                <li key={index}>
                    <Link href={link.href} className='flex items-center gap-2 text-lg'>
                        {link.name} {link.icon}
                    </Link>
                </li>
            ))}
        </ul>
        <div className='hidden lg:flex items-center gap-4'>
            <Button className='bg-white text-black px-8 py-6 shadow-none hover:bg-white/80'>
                Login
            </Button>
            <Button className='bg-blue-600 hover:bg-blue-500 text-white px-8 py-6'>
                Sign Up <FaArrowRight className='ml-2' />
            </Button>
        </div>
        <MobileNav />
    </div>
  )
}

export default Header
