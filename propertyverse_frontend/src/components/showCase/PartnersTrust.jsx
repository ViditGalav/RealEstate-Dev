import React from 'react';
import { howItWorks } from '../../utils/howItWorkCards';

const cardInfo = howItWorks();

export default function PartnersTrust() {
   return (
      <div className='flex w-full flex-col items-start max-md:items-center justify-between md:py-20 md:px-32 lg:px-40 xl:px-60 py-12 px-4 rounded-t-3xl shadow-lg animate-fade-in-up duration-300 ease-in -mt-5'>
         <div className='w-full flex flex-col items-center'>
            <h1 className='text-lg font-semibold'>PARTNERS WE TRUST</h1>
            <div></div>
         </div>
         <div className='w-full flex flex-col items-center mt-20 max-sm:mt-10'>
            <h1 className='text-5xl max-md:text-3xl font-bold mb-2'>eLegalVault is trusted by legal professionals</h1>
            <p>Our highly effective, fast, secure, immutable and efficient protocol ensures easy accessibility and the utmost confidentiality. Understand how eLegalVault works.</p>
            <div className='flex max-md:flex-col flex-wrap items-center justify-evenly w-full my-5'>
               {cardInfo?.map((info, index)=>(
                  <div className='px-5 py-10 mx-1 rounded-3xl shadow-lg flex flex-col items-center bg-white w-[23%] max-lg:w-5/12 max-md:w-5/6 max-sm:w-11/12 my-2' key={index+info.description}>
                     <div className='rounded-full w-16 h-16 flex items-center justify-center bg-gray-300 border-2 border-none font-bold my-3'><p className='text-black text-gradient text-3xl'>{index + 1}</p></div>
                     <h1 className='text-xl font-bold'>{info.title}</h1>
                     <p className='text-center'>{info.description}</p>
                  </div>
               ))}
            </div>
         </div>
      </div>
   )
}
