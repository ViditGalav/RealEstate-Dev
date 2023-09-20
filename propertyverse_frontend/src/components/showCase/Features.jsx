import React from 'react';
import {BsFillShieldLockFill} from 'react-icons/bs';
import {FaEye} from 'react-icons/fa';
import {FaHandshake} from 'react-icons/fa';

export default function Features() {
  return (
    <div className='flex w-full flex-col items-center max-md:items-center justify-center md:py-20 md:px-32 lg:px-40 xl:px-60 py-12 px-4 rounded-t-3xl shadow-lg animate-fade-in-up duration-300 ease-in -mt-5'>

      <div className='w-full h-72 rounded-3xl border-[0.5px] border-blue-300 bg-gradient-to-t from-blue-200 to-blue-50 flex justify-center items-center flex-col'>
        <h1 className='text-5xl max-md:text-3xl font-bold'>Features</h1>
        <p className='text-lg max-md:text-base font-semibold text-gray-500 text-center'>We provide a range of unique features that assist in the smooth handling of legal records</p>
      </div>


      <div className='-mt-20 flex flex-wrap max-md:flex-col w-full my-5 items-center justify-evenly'>

        <div className='px-5 py-10 mx-3 rounded-3xl shadow-lg flex flex-col items-center bg-mainColor max-md:my-3 w-[30%] max-md:w-5/6 max-sm:w-11/12 max-lg:w-[45%] max-lg:my-2'>

          <div className='rounded-full p-5 flex items-center justify-center bg-gray-300 border-2 border-none font-bold my-3'><BsFillShieldLockFill fontSize={50} className='text-black text-gradient' /></div>
          <h1 className='text-3xl max-md:text-xl font-bold my-3 px-5 text-center'>Maximum Security</h1>
          <p className='text-gray-500 px-2 text-center'>Our platform, based on blockchain technology, ensures the highest level of security, maintaining the confidentiality of your legal records.</p>
        </div>

        <div className='px-5 py-10 mx-3 rounded-3xl shadow-lg flex flex-col items-center bg-mainColor max-md:my-3 w-[30%] max-md:w-5/6 max-sm:w-11/12 max-lg:w-[45%] max-lg:my-2'>

          <div className='rounded-full p-5 flex items-center justify-center bg-gray-300 border-2 border-none font-bold my-3'><FaEye fontSize={50} className='text-black text-gradient' /></div>
          <h1 className='text-3xl max-md:text-xl font-bold my-3 px-5 text-center'>Transparency</h1>
          <p className='text-gray-500 px-2 text-center'>Our process involves smart contracts for managing transactions, ensuring a transparent process that all stakeholders can trust.</p>
        </div>

        <div className='px-5 py-10 mx-3 rounded-3xl shadow-lg flex flex-col items-center bg-mainColor max-md:my-3 w-[30%] max-md:w-5/6 max-sm:w-11/12 max-lg:w-[45%] max-lg:my-2'>

          <div className='rounded-full p-5 flex items-center justify-center bg-gray-300 border-2 border-none font-bold my-3'><FaHandshake fontSize={50} className='text-black text-gradient' /></div>
          <h1 className='text-3xl max-md:text-xl font-bold my-3 px-5 text-center'>Integration</h1>
          <p className='text-gray-500 px-2 text-center'>eVault can be integrated easily with existing legal databases and case management systems, allowing for seamless interaction and data transfer.</p>
        </div>
      </div>
    </div>
  )
}
