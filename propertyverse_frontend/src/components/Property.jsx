import React from 'react'
import { urlFor } from '../utils/Client';
import { Link } from 'react-router-dom';
import logoImage from '../assets/logo.png';
import { BsBuildingFillDash } from 'react-icons/bs';
import { BsBuildingFillGear } from 'react-icons/bs';


export default function Property({ property, owner }) {


   // getting the pin's owner
   let postedByURL = null;
   if (property?.postedBy?.image) {
      postedByURL = urlFor(property?.postedBy.image)?.url();
   }


   const handleBuy = () => {

   }

   const handleRent = () => {
      
   }


   return (
      <div className='flex max-sm:flex-col flex-row my-3'>
         <img src={property?.bestShot.asset.url} alt='best-shot' className='lg:w-[20%] sm:w-[25%] max-sm:rounded-t-xl max-sm:rounded-b-none shadow-md  rounded-l-xl' />

         <div className='p-3 lg:w-[80%] sm:w-[75%] blue-glassmorphism max-sm:rounded-t-none max-sm:-mt-1 flex flex-col justify-between max-sm:rounded-b-xl rounded-l-none border-none'>
            <div>
               <h1 className='text-xl md:text-3xl text-gray-200'>{property?.propertyName}</h1>
               <p className='text-gray-400'>{property?.fullAdress}</p>
               <p className='text-gray-400'>Property size - {property?.interiorSize}</p>
            </div>
            <div className='flex items-center max-sm:flex-col mt-5 sm:justify-between'>
               <Link to={'/'} className='flex items-center hover:shadow-xl mr-1'>
                  <img src={!postedByURL ? logoImage : postedByURL} alt='Owner Pic' className='w-12 h-12 rounded-full mr-2' />
                  <p className='max-md:text-sm max-lg:text-sm'>{property?.ownerName}</p>
               </Link>
               <div className='max-sm:my-2 mx-5 flex'>
                  <Link to={`/property/${property?.ownerId}%${property?._id}/detail`} className='py-2 px-3 bg-blue-600 hover:bg-blue-500 transition-all duration-300 ease-linear rounded-md max-md:text-xs mr-2 max-sm:text-sm max-lg:text-sm'>More...</Link>
                  {!owner ? (
                     <div>
                        {property?.purpose === 'rent' && (
                           <button className='py-2 px-3 bg-blue-600 hover:bg-blue-500 transition-all duration-300 ease-linear rounded-md max-md:text-xs mr-2 max-sm:text-sm max-lg:text-sm'>Rent</button>
                        )}
                        {property?.purpose === 'sell' && (
                           <button className='py-2 px-3 bg-blue-600 hover:bg-blue-500 transition-all duration-300 ease-linear rounded-md max-md:text-xs max-sm:text-sm max-lg:text-sm'>Buy</button>
                        )}
                        {property?.purpose === 'rentOrSell' && (
                           <>
                              <button className='py-2 px-3 bg-blue-600 hover:bg-blue-500 transition-all duration-300 ease-linear rounded-md max-md:text-xs mr-2 max-sm:text-sm max-lg:text-sm' onClick={handleRent}>Rent</button>
                              <button className='py-2 px-3 bg-blue-600 hover:bg-blue-500 transition-all duration-300 ease-linear rounded-md max-md:text-xs max-sm:text-sm max-lg:text-sm' onClick={handleBuy}>Buy</button>
                           </>
                        )}
                     </div>
                  ) : (
                     <div className='flex'>
                        <button className='py-2 px-3 bg-blue-600 hover:bg-blue-500 transition-all duration-300 ease-linear rounded-md max-md:text-xs mr-2 max-sm:text-sm max-lg:text-sm flex items-center'><BsBuildingFillGear className='mr-1' /> Modify</button>
                        <button className='py-2 px-3 bg-blue-600 hover:bg-blue-500 transition-all duration-300 ease-linear rounded-md max-md:text-xs max-sm:text-sm max-lg:text-sm flex items-center'><BsBuildingFillDash className='mr-1' /> Remove</button>
                     </div>
                  )}
               </div>
            </div>
         </div>
      </div>
   )
}
