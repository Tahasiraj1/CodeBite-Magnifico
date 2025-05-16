import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'
import { FaArrowRight } from "react-icons/fa";

const images = [
    {
        src: '/images/Picture1.png', 
        alt: 'Frame1', 
        className:'rounded-md w-[200px] h-[200px] lg:w-[400px] lg:h-[400px] mt-20 object-contain duration-300 hover:scale-110 transition-transform transform'
    },
    {
        src: '/images/Picture2.png', 
        alt: 'Frame2', 
        className:'rounded-md w-[200px] h-[200px] lg:w-[400px] lg:h-[400px] mb-10 object-contain duration-300 hover:scale-110 transition-transform transform'
    },
    {
        src: '/images/Picture3.png', 
        alt: 'Frame3', 
        className:'rounded-md w-[200px] h-[200px] lg:w-[400px] lg:h-[400px] mt-10 object-contain duration-300 hover:scale-110 transition-transform transform'
    },
]

const WorkingTime = () => {
  return (
    <div className='flex flex-col lg:flex-row items-center justify-center gap-8 py-10 px-8'>
        <div className='flex-1 flex items-cente justify-center gap-2 lg:gap-4 order-2 lg:order-1'>
            {images.map((img, index) => (
                <Image key={index} src={img.src} alt={img.alt} width={400} height={400} className={img.className} />
            ))}
        </div>
        <div className='flex-1 flex-col items-center justify-center space-y-5 order-1 lg:order-2'>
            <h1 className='text-5xl font-bold'>Working Time</h1>
            <p className='text-lg'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta.
            </p>
            <Button className='bg-white hover:bg-white text-blue-600 px-0 shadow-none'>
                See how it helped others <FaArrowRight className='ml-4' />
            </Button>
        </div>
    </div>
  )
}

export default WorkingTime
