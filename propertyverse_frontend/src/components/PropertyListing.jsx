import React from 'react';
import Property from './Property';

export default function PropertyListing({ properties, owner }) {

   if (properties?.length === 0) {
      return (
         <diV>Sorry, No properties to show!!</diV>
      )
   } else {
      return (
         <div className='flex flex-col my-2 md:my-4 py-2'>
            {properties && properties.map((property) => (
               <Property key={property?._id} property={property && property} owner={owner} />
            ))}
         </div>
      )
   }
}
