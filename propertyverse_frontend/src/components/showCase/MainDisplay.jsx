import React, { useState } from 'react'
import { SiEthereum } from 'react-icons/si';
import { BsInfoCircle } from 'react-icons/bs';


export default function MainDisplay() {
   const [ethereumAddress, setEthereumAddress] = useState("");
   const [recordAvailable, setRecordAvailable] = useState(null);


   const connectWallet = () => {
      console.log("Wallet connecting");
   }



   const checkRecord = () => {
      console.log("Check record, address: ", ethereumAddress);
   }

   const mintNFT = () => {
      console.log("Minting the NFT");
   }


   const commonStyles = 'min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-gray-400';

   const mainBtnCommonStyle = " w-full my-1 bg-blue-600 rounded-full cursor-pointer hover:bg-blue-500 transition-all duration-300 ease-in";


   return (
      <div className="flex w-full max-lg:flex-col items-start max-md:items-center justify-between py-8 px-4">

         <div className="flex items-start flex-col w-1/2 max-lg:w-5/6 max-sm:w-11/12 max-lg:items-center">

            <h1 className="text-3xl sm:text-5xl text-black text-gradient py-1 w-full md:w-11/12">Create Properties <br />Become a professional Owner</h1>

            <p className="mt-5 text-gray-400 font-light text-base w-full md:w-11/12">We are PropertyVerse providing secure and easy to use platform to monetize your property in much more fruitfull way</p>

            <div className='mt-8 flex flex-col w-5/6'>
               <button type="button" onClick={connectWallet} className={mainBtnCommonStyle}><p className="text-white text-base font-semibold py-3">Connect Wallet</p></button>
               {localStorage.getItem("PropertyVerseAuth") && (
                  <button type="button" onClick={mintNFT} className={mainBtnCommonStyle}><p className="text-white text-base font-semibold py-3">Mint NFT</p></button>
               )}
            </div>


            <div className="grid sm:grid-cols-3 grid-cols-2 w-full mt-10">
               <div className={`sm:rounded-tl-2xl rounded-tl-2xl ${commonStyles}`}>
                  Security
               </div>
               <div className={`${commonStyles} max-sm:rounded-tr-2xl`}>Reliability</div>
               <div className={`sm:rounded-tr-2xl ${commonStyles}`}>Safe Contracts</div>
               <div className={`sm:rounded-bl-2xl ${commonStyles}`}>Efficient</div>
               <div className={`${commonStyles} max-sm:rounded-bl-2xl`}>NFT</div>
               <div className={`sm:rounded-br-2xl rounded-br-2xl ${commonStyles}`}>Blockhain</div>
            </div>
         </div>


         <div className="flex flex-col flex-1 items-center justify-start md:mt-0 mt-10 w-1/2 max-lg:w-5/6 max-sm:w-11/12">

            <div className="p-3 justify-end items-end flex-col rounded-xl h-44 w-80 my-5 eth-card white-glassmorphism">
               <div className="flex flex-col justify-between h-full">
                  <div className="flex justify-between items-start">
                     <div className="w-10 h-10 rounded-full border-2 border-white flex justify-center items-center"><SiEthereum fontSize={21} color="#fff" /></div>
                     <BsInfoCircle fontSize={17} color="#fff" />
                  </div>
                  <div className='h-16'>
                     <p className="text-gray-600 text-sm font-light">0xdsfvsd...qwewe</p>
                     <p className="text-gray-50 text-lg mt-1 font-semibold">Ethereum</p>
                  </div>
               </div>
            </div>
            <div className='flex flex-col flex-1 items-center justify-start w-80 md:mt-0 mt-10'>
               <div className='blue-glassmorphism w-full my-5 flex flex-col rounded-xl items-center justify-end'>
                  <h1 className='text-xl text-white my-4'>Check transaction detail</h1>
                  <div className='flex flex-col p-2 w-full'>
                     <input type='text' name='recordAddress' value={ethereumAddress} onChange={(e) => setEthereumAddress(e.target.value)} className='white-glassmorphism w-full
                my-1 py-2 px-3 rounded-full outline-none border-none text-white' placeholder='Input transaction hash...' />
                     <button className='bg-blue-600 hover:bg-blue-500 transition-all duration-300 ease-in w-full
                my-1 py-1 px-2 rounded-full text-white' onClick={checkRecord}>Check here</button>
                  </div>
                  {recordAvailable && (
                     <div className='w-full'>
                        If Available case will be shown here
                     </div>
                  )}
               </div>
            </div>
         </div>
      </div>
   )
}
