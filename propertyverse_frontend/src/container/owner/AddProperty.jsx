import React, { useState } from 'react'
import UploadPropertyImage from '../../components/owner/UploadPropertyImage';
import { v4 as uuidv4 } from 'uuid';
import Client from '../../utils/Client';
import { useParams, useNavigate } from 'react-router-dom'
import Spinner from '../../components/Spinner'
export default function AddProperties() {
  const { ownerId } = useParams();
  const navigate = useNavigate();

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
  const [fullAdress, setFullAdress] = useState("");
  const [percentage, setPercentage] = useState("");
  const [purpose, setPurpose] = useState("");
  const [identityCard, setIdentityCard] = useState("");
  const [loading, setLoading] = useState(false);


  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState("");
  const [fields, setFields] = useState(false);

  const textInputStyle = 'w-full p-2 outline-none rounded-sm white-glassmorphism border-none hover:border-2 hover:border-blue-500 transition-all duration-300 ease-in my-2';

  const checkFields = () => {
    if (!propertyName || !bestSnapShotId || !bedroomPicId || !kitchenPicId || !bathroomPicId || !interiorSize || !totalBedroom || !totalBathroom || !kitchenSize || !lotSizeSQFT || !ownerName || !fullAdress || !percentage || !purpose || !identityCard) {
      setFields(true);
      setTimeout(() => {
        setFields(false);
      }, 3000);
    } else {
      setOtpSent(true);
    }
  }

  const handleSubmit = () => {

    // Check if otp is correct
    // Then proceed

    setLoading(true);
    const doc = {
      _type: 'property',
      _id: uuidv4(),
      propertyName,
      interiorSize,
      totalBedroom,
      totalBathroom,
      kitchenSize,
      lotSizeSQFT,
      ownerName,
      ownerId,
      fullAdress,
      purpose,
      percentage,
      ownerIdCard: {
        _type: 'image',
        asset: {
          _type: 'reference',
          _ref: identityCard
        }
      },
      bestShot: {
        _type: 'image',
        asset: {
          _type: 'reference',
          _ref: bestSnapShotId
        }
      },
      bedroomImage: {
        _type: 'image',
        asset: {
          _type: 'reference',
          _ref: bedroomPicId
        }
      },
      bathroomImage: {
        _type: 'image',
        asset: {
          _type: 'reference',
          _ref: bathroomPicId
        }
      },
      kitchenImage: {
        _type: 'image',
        asset: {
          _type: 'reference',
          _ref: kitchenPicId
        }
      },
      postedBy: {
        _type: 'postedBy',
        _ref: ownerId,
      },
    }

    Client.create(doc).then(() => {
      setLoading(false);
      navigate(`/owner/${ownerId}/property-details`);
    });
  }

  if (loading) {
    return (
      <div className='text-gray-200 w-full flex items-start justify-start flex flex-col'>
        <div className='blue-glassmorphism md:px-5 md:pt-5 w-full my-3'>
          <Spinner />
          <h1 className='text-3xl font-bold'>Generating NFT of your property</h1>
        </div>
      </div>
    )
  }


  return (
    <div className='text-gray-200 w-full flex items-start justify-start flex flex-col'>
      <h1 className='text-2xl font-bold max-md:text-xl my-5'>Add Your Property</h1>
      <div className='blue-glassmorphism md:px-5 md:pt-5 w-full my-3'>
        {fields && (
          <p className='text-red-500 animate-fade-in text-center'>Fill all the fields</p>
        )}
        <div className='p-2 md:p-5 flex max-md:flex-col w-full justify-between mx-auto'>
          <div className='w-5/12 max-md:w-11/12 flex flex-col max-md:items-center max-md:justify-center'>
            <h1 className='text-xl max-md:text-lg max-sm:text-base text-gray-400'>Property Details</h1>
            <div className='h-[1px] border-b-2 w-full border-gray-400 my-1' />

            <input type='text' name='propertyName' value={propertyName} onChange={(e) => setPropertyName(e.target.value)} placeholder='Enter property name' className={textInputStyle} required />

            <input type='number' name='interiorSize' value={interiorSize} onChange={(e) => setInteriorSize(parseFloat(e.target.value))} placeholder='Enter interior size in sqft.' className={textInputStyle} required />

            <input type='number' name='totalBedroom' value={totalBedroom} onChange={(e) => setTotalBedroom(parseFloat(e.target.value))} placeholder='Enter total number of bedrooms' className={textInputStyle} required />

            <input type='number' name='totalBathroom' value={totalBathroom} onChange={(e) => setTotalBathroom(parseFloat(e.target.value))} placeholder='Enter total number of bathrooms' className={textInputStyle} required />

            <input type='number' name='kitchenSize' value={kitchenSize} onChange={(e) => setKitchenSize(parseFloat(e.target.value))} placeholder='Enter kitchen size in sqft.' className={textInputStyle} required />

            <input type='number' name='lotSizeSQFT' value={lotSizeSQFT} onChange={(e) => setLotSizeSQFT(parseFloat(e.target.value))} placeholder='Lot size in sqft.' className={textInputStyle} required />

            <h1 className='text-xl max-md:text-lg max-sm:text-base text-gray-400 mt-5'>Owner Details</h1>
            <div className='h-[1px] border-b-2 w-full border-gray-400 my-1' />

            <input type='text' name='ownerName' value={ownerName} onChange={(e) => setOwnerName(e.target.value)} placeholder='Enter your name' className={textInputStyle} required />

            <input type='text' name='fullAdress' value={fullAdress} onChange={(e) => setFullAdress(e.target.value)} placeholder='Enter properties full address' className={textInputStyle} required />

            <select name='purpose' className={`${textInputStyle} text-gray-300 cursor-pointer`} onChange={(e) => setPurpose(e.target.value)} placeholder='What is this property for?' required>
              <option className='text-black cursor-pointer py-1' value='others'>Others</option>
              <option className='text-black cursor-pointer py-1' value='rent'>Rent</option>
              <option className='text-black cursor-pointer py-1' value='sell'>Sell</option>
              <option className='text-black cursor-pointer py-1' value='rentOrSell'>Both</option>
            </select>

            {(purpose === 'rent' || purpose === 'rentOrSell') && (
              <input type='number' name='percentage' value={percentage} onChange={(e) => setPercentage(parseFloat(e.target.value))} placeholder='Enter rent percentage(%)' className={textInputStyle} required />
            )}
          </div>

          <div className='w-5/12 max-md:w-11/12 max-md:mt-5'>
            <h1 className='text-xl max-md:text-lg max-sm:text-base text-gray-400'>Upload Property Images</h1>
            <div className='h-[1px] border-b-2 w-full border-gray-400 my-1' />

            <UploadPropertyImage imageReference={setBestSnapShotId} message="Input the best snapshot of the property" />

            <UploadPropertyImage imageReference={setBedroomPicId} message="Input your bedroom picture" />

            <UploadPropertyImage imageReference={setBathroomPicId} message="Input your bathroom picture" />

            <UploadPropertyImage imageReference={setKitchenPicId} message="Input your kitchen picture" />

            <UploadPropertyImage imageReference={setIdentityCard} message="Input any ID (Voter ID/Aadhar ID/Any govt. license" />

          </div>
        </div>
        <div className='flex justify-between'>
          <button type='button' className='py-2 px-3 rounded-bl-3xl -ml-2 md:-ml-5 bg-blue-600 hover:bg-blue-500 rounded-tr-3xl transition-all duration-300 ease-in' onClick={checkFields}>{!otpSent ? 'Send OTP' : 'Send OTP again'}</button>

          {otpSent && (
            <input type='text' onChange={(e) => setOtp(e.target.value)} className={`${textInputStyle} rounded-t-3xl px-5 w-32`} placeholder='Send OTP' />
          )}

          {(otp.length === 6) && (
            <button type='button' className='py-2 px-3 rounded-br-3xl -mr-2 md:-mr-5 bg-blue-600 hover:bg-blue-500 rounded-tl-3xl transition-all duration-300 ease-in' onClick={handleSubmit}>{'Save Property'}</button>
          )}
        </div>
      </div>
    </div>
  )
}