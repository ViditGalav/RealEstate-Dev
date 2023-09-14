import React, { useState } from 'react'
import UploadPropertyImage from '../../components/owner/UploadPropertyImage';
export default function AddProperties() {
  const [propertyName, setPropertyName] = useState("");
  const [bestSnapShotId, setBestSnapShotId] = useState("");
  const [bedroomPicId, setBedroomPicId] = useState("");
  const [kitchenPicId, setKitchenPicId] = useState("");
  const [bathroomPicId, setBathroomPicId] = useState("");
  const [interiorSize, setInteriorSize] = useState("");
  const [totalBedroom, setTotalBedroom] = useState("");
  const [totalBathroom, setTotalBathroom] = useState("");
  const [kitchenSize, setKitchenSize] = useState("");
  const [lotSizeSQFT, setLotSizeSQFT] = useState("");
  const [ownerName, setOwnerName] = useState("");
  const [password, setPassword] = useState("");
  const [fullAdress, setFullAdress] = useState("");
  const [percentageDilution, setPercentageDilution] = useState("");
  const [purpose, setPurpose] = useState("");
  const [identityCard, setIdentityCard] = useState("");

  const textInputStyle = 'w-full p-2 outline-none rounded-sm white-glassmorphism border-none hover:border-2 hover:border-blue-500 transition-all duration-300 ease-in my-2';

  return (
    <div className='text-gray-200 w-full flex items-start justify-start flex flex-col'>
      <h1 className='text-2xl font-bold max-md:text-xl my-5'>Add Your Property</h1>
      <div className='blue-glassmorphism md:px-5 md:pt-5 w-full'>
        <div className='p-2 md:p-5 flex max-md:flex-col w-11/12 justify-between mx-auto'>
          <div className='w-5/12'>
            <h1 className='text-xl max-md:text-lg max-sm:text-base text-gray-400'>Property Details</h1>
            <div className='h-[1px] border-b-2 w-full border-gray-400 my-1' />

            <input type='text' name='propertyName' value={propertyName} onChange={(e) => setPropertyName(e.target.value)} placeholder='Enter property name' className={textInputStyle} required />

            <input type='number' name='interiorSize' value={interiorSize} onChange={(e) => setInteriorSize(e.target.value)} placeholder='Enter interior size in sqft.' className={textInputStyle} required />

            <input type='number' name='totalBedroom' value={totalBedroom} onChange={(e) => setTotalBedroom(e.target.value)} placeholder='Enter total number of bedrooms' className={textInputStyle} required />

            <input type='number' name='totalBathroom' value={totalBathroom} onChange={(e) => setTotalBathroom(e.target.value)} placeholder='Enter total number of bathrooms' className={textInputStyle} required />

            <input type='number' name='kitchenSize' value={kitchenSize} onChange={(e) => setKitchenSize(e.target.value)} placeholder='Enter kitchen size in sqft.' className={textInputStyle} required />

            <input type='number' name='lotSizeSQFT' value={lotSizeSQFT} onChange={(e) => setLotSizeSQFT(e.target.value)} placeholder='Lot size in sqft.' className={textInputStyle} required />

            <h1 className='text-xl max-md:text-lg max-sm:text-base text-gray-400 mt-5'>Owner Details</h1>
            <div className='h-[1px] border-b-2 w-full border-gray-400 my-1' />

            <input type='text' name='ownerName' value={ownerName} onChange={(e) => setOwnerName(e.target.value)} placeholder='Enter your name' className={textInputStyle} required />

            <input type='password' name='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Enter your password' className={textInputStyle} required />

            <input type='text' name='fullAdress' value={fullAdress} onChange={(e) => setFullAdress(e.target.value)} placeholder='Enter properties full address' className={textInputStyle} required />

            <select name='purpose' className={textInputStyle} onChange={(e) => setPurpose(e.target.value)} placeholder='What is this property for?' required>
              <option value='others'>Others</option>
              <option value='rent'>Rent</option>
              <option value='sell'>Sell</option>
              <option value='rentOrSell'>Both</option>
            </select>

            {purpose === 'rent' && (
              <input type='number' name='percentageDilution' value={percentageDilution} onChange={(e) => setLotSizeSQFT(e.target.value)} placeholder='Enter rent percentage(%)' className={textInputStyle} required />
            )}
          </div>

          <div className='w-5/12'>
            <h1 className='text-xl max-md:text-lg max-sm:text-base text-gray-400'>Upload Property Images</h1>
            <div className='h-[1px] border-b-2 w-full border-gray-400 my-1' />

            <UploadPropertyImage imageReference={setBestSnapShotId} message="Input the best snapshot of the property" />

            <UploadPropertyImage imageReference={setBedroomPicId} message="Input your bedroom picture" />

            <UploadPropertyImage imageReference={setBathroomPicId} message="Input your bathroom picture" />

            <UploadPropertyImage imageReference={setKitchenPicId} message="Input your kitchen picture" />

            <UploadPropertyImage imageReference={setIdentityCard} message="Input any ID (Voter ID/Aadhar ID/Any govt. license" />

          </div>
        </div>
        <div>
          <button type='button' className='py-2 px-3 rounded-bl-3xl -ml-2 md:-ml-5 bg-blue-600 hover:bg-blue-500 rounded-tr-3xl transition-all duration-300 ease-in'>Save Property</button>
        </div>
      </div>
    </div>
  )
}