import React from 'react';
import ethereumImg from '../../assets/ethereumImg.jpg';
import sellImage from '../../assets/sellImage.jpg';
import { useNavigate } from 'react-router-dom';

export default function WhatWeDo() {
  const navigate = useNavigate();

  const mainBtnCommonStyle = " w-full my-1 bg-blue-600 rounded-full cursor-pointer hover:bg-blue-500 transition-all duration-300 ease-in my-5";


  return (
    <div className="flex w-full flex-col items-start max-md:items-center justify-between md:py-20 md:px-32 lg:px-40 xl:px-60 py-12 px-4 rounded-t-3xl shadow-lg animate-fade-in-up duration-300 ease-in">
      <h1 className="text-3xl sm:text-5xl text-black semibold mb-8">Revolutionize Legal Documentation</h1>

      <div className='w-full flex max-md:flex-col items-center'>
        <div className="flex items-center justify-start md:mt-0 mt-10 w-1/2 max-md:w-5/6 max-sm:w-11/12 max-md:justify-center">
          <img src={ethereumImg} alt='contract-img' className='w-2/3 object-cover rounded-3xl' />
        </div>
        <div className="flex items-start flex-col w-1/2 max-md:w-2/3 max-sm:w-11/12 max-md:items-center">
          <p className="mt-5 text-gray-600 font-light text-base w-full md:w-11/12">eVault is a first of its kind blockchain-based system for storing, managing, and sharing legal records. We aim to bring security, transparency, and accessibility for all stakeholders in the legal documentation process.</p>
          <div className='mt-8 flex flex-col w-5/6'>
            <button type="button" onClick={()=>navigate("/initialize-case")} className={mainBtnCommonStyle}><p className="text-white text-base font-semibold py-3">Initialize a case</p></button>
          </div>
        </div>
      </div>

      <div className='h-[1px] border-b-2 border-gray-300 mt-5 w-full' />


      <div className='w-full flex max-md:flex-col-reverse my-5 items-center'>
        <div className="flex items-start flex-col w-1/2 max-md:w-2/3 max-sm:w-11/12 max-md:items-center">
          <p className="mt-5 text-gray-600 font-light text-base w-full md:w-11/12">eVault is a first of its kind blockchain-based system for storing, managing, and sharing legal records. We aim to bring security, transparency, and accessibility for all stakeholders in the legal documentation process.</p>
          <div className='mt-8 flex flex-col w-5/6'>
            <button type="button" onClick={()=>navigate('/create-contract')} className={mainBtnCommonStyle}><p className="text-white text-base font-semibold py-3">Create contract</p></button>
          </div>
        </div>
        <div className="flex items-center justify-end max-md:justify-center md:mt-0 mt-10 w-1/2 max-md:w-5/6 max-sm:w-11/12">
          <img src={sellImage} alt='contract-img' className='w-2/3 object-cover rounded-3xl' />
        </div>
      </div>
    </div>
  )
}
