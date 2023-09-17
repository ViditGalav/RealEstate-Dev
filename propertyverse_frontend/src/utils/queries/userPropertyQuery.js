export const userPropertyQuery = (ownerId) => {
   const query = `*[ _type == 'property' && ownerId == '${ownerId}' ] | order(_createdAt desc) {
         propertyName,
         interiorSize,
         totalBedroom,
         totalBathroom,
         kitchenSize,
         lotSizeSQFT,
         _id,
         ownerName,
         ownerId,
         fullAdress,
         purpose,
         postedBy -> {
            _id,
            fullName,
            image
         },
         ownerIdCard {
            asset -> {
               url
            }
         },
         bestShot {
            asset -> {
               url
            }
         },
         bedroomImage {
            asset -> {
               url
            }
         },
         bathroomImage {
            asset -> {
               url
            }
         },
         kitchenImage {
            asset -> {
               url
            }
         }
   }`
   return query;
};