import React, { useState } from 'react';
import { MdDelete } from 'react-icons/md';
import { AiOutlineCloudUpload } from 'react-icons/ai';
import Spinner from '../Spinner';
import Client from '../../utils/Client';

export default function UploadPropertyImage({imageReference, message}) {


   const [loading, setLoading] = useState(false);
   const [wrongImageType, setWrongImageType] = useState(false);
   const [imageAsset, setImageAsset] = useState(null);


   function uploadImage(e) {
      // take the type of image file
      const { type, name } = e.target.files[0];
      // console.log(name);
      // check if correct image is taken or not
      if (type === 'image/png' || type === 'image/svg' || type === 'image/jpeg' || type === 'image/gif' || type === 'image/tiff') {
        setWrongImageType(false);
  
        // start working on the iamge
        setLoading(true);
  
        Client.assets
          // .upload('type of asset', 'body', 'options')
          .upload('image', e.target.files[0], { contentType: type, filename: name })
          .then((document) => {
            setImageAsset(document);
            imageReference(document?._id);
            setLoading(false);
          })
          .catch((error) => {
            console.log("Image upload error ", error);
          })
      } else {
        wrongImageType(true)
      }
    }


   return (
      <div className='flex justify-center items-center flex-col border-none p-3 w-full max-sm:text-sm h-36 max-lg:text-sm rounded-sm white-glassmorphism my-2'>
         {loading && <Spinner />}
         {wrongImageType && <p>wrong image type!!</p>}
         {!imageAsset ? (
            <label className='cursor-pointer'>
               <div className='flex flex-col items-center justify-center'>
                  <div className='flex flex-col justify-center items-center'>
                     <p className='font-bold text-2xl'>
                        <AiOutlineCloudUpload />
                     </p>
                     <p className='text-lg'>Click to upload</p>
                  </div>
                  <p className='mt-2 text-gray-400'>
                     {message}
                  </p>
               </div>
               {/* Providing the input to the entire rectangle */}
               <input type="file"
                  name='upload-image'
                  onChange={uploadImage}
                  className='w-0 h-0'
               />
            </label>
         ) : (<div className='relative h-5/6 flex'>
            <img src={imageAsset?.url} alt="uploaded-pic" className='h-full w-full rounded-lg' />
            <button
               type='button'
               className='p-3 rounded-full bg-white text-xl cursor-pointer outline-none hover:shadow-md transition-all duration-500 ease-in-out'
               onClick={() => setImageAsset(null)}
            >
               <MdDelete />
            </button>
         </div>
         )}
      </div>
   )
}
