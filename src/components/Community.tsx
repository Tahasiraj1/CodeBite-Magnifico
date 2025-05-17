import React from 'react'
import { Button } from './ui/button'
import { FaArrowRight } from "react-icons/fa";


const Community = () => {
  return (
    <div className='w-full lg:py-10 lg:px-20 bg-white'>
        <div className='flex flex-col items-center text-center justify-center py-10 lg:py-20 px-20 space-y-4 lg:rounded-3xl text-white bg-gradient-to-br from-[#312E81] via-[#402D81] to-[#701A75]'>
            <h1 className='text-4xl font-bold'>
                Join The Community
            </h1>
            <p className='text-lg'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. 
                Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis 
                ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta.
            </p>
            <Button className='rounded-sm bg-blue-600 hover:bg-blue-500 text-white px-2 py-4 lg:px-8 lg:py-6'>
                Sign Up For Free <FaArrowRight className='ml-2' />
            </Button>
        </div>
    </div>
  )
}

export default Community
