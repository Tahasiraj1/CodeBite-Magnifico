import Image from 'next/image';
import React from 'react'
import { GoDotFill } from "react-icons/go";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { CiPlay1 } from "react-icons/ci";

interface browserProps {
    imageScr: string
    className?: string
}


const Browser = ({imageScr, className}: browserProps) => {
  return (
    <div className={`flex flex-col rounded-md shadow-md w-auto h-auto ${className}`}>
        <div className='flex items-center justify-between p-2'>
            <div className='flex'>
                <GoDotFill className='text-red-600' />
                <GoDotFill className='text-yellow-600' />
                <GoDotFill className='text-green-600' />
            </div>
            <div className="bg-gray-200 rounded-md py-2 px-8">
                app.magnifi.co
            </div>
            <div className='flex gap-4'>
                <IoIosArrowBack className='text-gray-500' />
                <IoIosArrowForward className='text-gray-500' />
            </div>
        </div>
        <div className='relative'>
            <Image
                src={imageScr}
                alt='Magnifico Logo'
                width={500}
                height={500}
                className='rounded-b-md w-auto h-auto'
            />
            <button
                className='flex items-center justify-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 lg:w-24 lg:h-24 rounded-full bg-white/80 hover:bg-white/60'
            >
                <CiPlay1 className='text-gray-600 w-6 h-6 md:w-10 md:h-10 lg:w-16 lg:h-16 translate-x-1' />
            </button>
        </div>
    </div>
  )
}

export default Browser
