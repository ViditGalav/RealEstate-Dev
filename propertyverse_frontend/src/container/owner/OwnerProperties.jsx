import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { userPropertyQuery } from '../../utils/queries/userPropertyQuery';
import Client from '../../utils/Client';
import Spinner from '../../components/Spinner';
import PropertyListing from '../../components/PropertyListing';


export default function OwnerProperties() {
  const [properties, setProperties] = useState(null);
  const { ownerId } = useParams();

  const fetchPropertyDetails = () => {

    const query = userPropertyQuery(ownerId);
    Client.fetch(query)
      .then((data) => {
        setProperties(data);
      })
      .catch((console.error));

  };


  useEffect(() => {
    fetchPropertyDetails();
  }, [ownerId]);


  if (!properties) {
    return (
      <div className='text-gray-200 w-full h-[89vh] flex items-center justify-center flex flex-col'>
        <Spinner />
      </div>
    )
  } else {
    return (
      <div className='text-gray-200 w-full flex items-center justify-center flex flex-col'>
        <div className='p-2 rounded-xl blue-glassmorphism text-white'>Filters</div>
        <PropertyListing properties={properties && properties} owner={true} />
      </div>
    )
  }
}