import React from 'react';
import { AiTwotoneHeart } from 'react-icons/ai';


export default function Footer() {
   return (
      <div className='flex bg-gradient-to-t from-black to-red-900 w-full flex-col items-center max-md:items-center justify-center md:py-20 md:px-32 lg:px-40 xl:px-60 py-12 px-4 rounded-t-3xl shadow-lg animate-fade-in-up duration-300 ease-in -mt-5 text-white '>
         <p className='flex items-center'>
            Made with <AiTwotoneHeart color='red' className='mx-2' /> in IIIT Ranchi
         </p>
      </div>
   )
}
