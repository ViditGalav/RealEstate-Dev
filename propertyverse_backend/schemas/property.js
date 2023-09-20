export default {
   name: 'property',
   title: 'Property',
   type: 'document',
   fields: [
      {
         name: 'propertyName',
         title: 'PropertyName',
         type: 'string',
      },
      {
         name: 'interiorSize',
         title: 'InteriorSize',
         type: 'number',
      },
      {
         name: 'totalBedroom',
         title: 'TotalBedroom',
         type: 'number',
      },
      {
         name: 'totalBathroom',
         title: 'TotalBathroom',
         type: 'number',
      },
      {
         name: 'kitchenSize',
         title: 'KitechenSize',
         type: 'number',
      },
      {
         name: 'lotSizeSQFT',
         title: 'LotSizeSQFT',
         type: 'number',
      },
      {
         name: 'ownerName',
         title: 'OwnerName',
         type: 'string',
      },
      {
         name: 'ownerId',
         title: 'OwnerId',
         type: 'string'
      },
      {
         name: 'fullAdress',
         title: 'FullAdress',
         type: 'string',
      },
      {
         name: 'purpose',
         title: 'Purpose',
         type: 'string',
      },
      {
         name: 'percentage',
         title: 'Percentage',
         type: 'number'
      },
      {
         name: 'ownerIdCard',
         title: 'OwnerIdCard',
         type: 'image',
         Options: {
            hotspot: true,
         },
      },
      {
         name: 'bestShot',
         title: 'BedShot',
         type: 'image',
         Options: {
            hotspot: true,
         },
      },
      {
         name: 'bedroomImage',
         title: 'BedroomImage',
         type: 'image',
         Options: {
            hotspot: true,
         },
      },
      {
         name: 'bathroomImage',
         title: 'BathroomImage',
         type: 'image',
         Options: {
            hotspot: true,
         },
      },
      {
         name: 'kitchenImage',
         title: 'KitchenImage',
         type: 'image',
         Options: {
            hotspot: true,
         },
      },
      {
         name: 'postedBy',
         title: 'PostedBy',
         type: 'postedBy',
      },
      {
         name: 'tenants',
         title: 'Tenants',
         type: 'array',
         of: [{type: 'tenant'}]
      },
   ]
}