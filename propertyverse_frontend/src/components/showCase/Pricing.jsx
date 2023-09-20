import React from 'react'

export default function Pricing() {


  const mainBtnCommonStyle = " w-full my-1 bg-blue-600 rounded-full cursor-pointer hover:bg-blue-500 transition-all duration-300 ease-in";


  function initializeCaseBlockchain() {
    console.log("Initializing a case");
  }

  function createContractBlockchain() {
    console.log("Creating a contract");
  }

  function initializeCaseBackend() {
    console.log("Initializing a case");
  }

  function createContractBackend() {
    console.log("Creating a contract");
  }

  return (
    <div className='flex w-full flex-col items-center max-md:items-center justify-center md:py-20 md:px-32 lg:px-40 xl:px-60 py-12 px-4 rounded-t-3xl shadow-lg animate-fade-in-up duration-300 ease-in -mt-5'>

      <div className='w-full flex flex-col justify-center items-center'>
        <h1 className='text-5xl max-md:text-3xl font-bold'>Pricing</h1>
        <p className='text-lg max-md:text-base font-semibold text-gray-500 text-center md:px-20 my-2'>Choose a plan that best suits your legal needs. We have flexible options designed to cater to various requirements.</p>
      </div>

      <div className='w-full flex max-md:flex-col items-center justify-evenly'>
        <div className=' w-[45%] max-md:w-5/6 max-sm:w-5/6 px-5 py-10 max-sm:px-3 max-sm:py-5 bg-white shadow-md rounded-3xl flex justify-center flex-col items-center'>
          <h1 className='text-3xl max-md:text-xl font-bold my-3 px-5 text-center'>Web2</h1>
          <p className='text-gray-500 px-2 text-center my-2'>All your data will be stored on backend server safely</p>
          <div className='my-3'>
            <h1 className='text-5xl max-md:text-3xl font-bold my-3 px-5 text-center text-blue-600'>Free</h1>
            <p className='text-gray-500 px-2 text-center my-2'>UNLIMITED FILE UPLOAD</p>
          </div>
          <div className='mt-8 flex flex-col w-5/6'>
            <button type="button" onClick={initializeCaseBackend} className={mainBtnCommonStyle}><p className="text-white text-base font-semibold py-3">Initialize a court case</p></button>
            <button type="button" onClick={createContractBackend} className={mainBtnCommonStyle}><p className="text-white text-base font-semibold py-3">Create contract</p></button>
          </div>
        </div>

        <div className=' w-[45%] max-md:w-5/6 max-sm:w-5/6 px-5 py-10 max-sm:px-3 max-sm:py-5 bg-white shadow-md rounded-3xl  flex justify-center flex-col items-center my-5'>
          <h1 className='text-3xl max-md:text-xl font-bold my-3 px-5 text-center'>Blockchain</h1>
          <p className='text-gray-500 px-2 text-center my-2'>All your data will be stored on blockchain using smart contract which can never be tampered</p>
          <div className='my-3'>
            <h1 className='text-5xl max-md:text-3xl font-bold my-3 px-5 text-center text-blue-600'>$2</h1>
            <p className='text-gray-500 px-2 text-center my-2'>PER MONTH</p>
          </div>
          <div className='mt-8 flex flex-col w-5/6'>
            <button type="button" onClick={initializeCaseBlockchain} className={mainBtnCommonStyle}><p className="text-white text-base font-semibold py-3">Initialize a court case</p></button>
            <button type="button" onClick={createContractBlockchain} className={mainBtnCommonStyle}><p className="text-white text-base font-semibold py-3">Create contract</p></button>
          </div>
        </div>

      </div>
    </div>
  )
}
