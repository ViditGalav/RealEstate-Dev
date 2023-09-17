export const propertyDetails = [
   {
      name: 'interiorSize',
      title: 'Property Size',
      inputType: 'number'
   },
   {
      name: 'bedroomDetail',
      title: 'Bedroom Details',
      inputType: 'array',
      bedroomDetails: [
         {
            name: 'totalBedroom',
            title: 'Total Bedrooms',
            inputType: 'number'
         },
         {
            name: 'bedroomSizes',
            title: 'All bedroom sizes (Length x Breadth)',
            inputType: 'text',
         }
      ]
   },
   {
      name: 'bathroomDetail',
      title: 'Bathroom Details',
      inputType: 'array',
      bathroomDetails: [
         {
            name: 'totalBathroom',
            title: 'Total Bathrooms',
            inputType: 'number',
         },
         {
            name: 'bathroomSizes',
            title: 'All bathroom details (Length x Breadth)',
            inputType: 'text'
         }
      ]
   },
   {
      name: 'lotSize',
      title: 'Lot Size'
   }
]
