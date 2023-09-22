import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Client from '../../utils/Client';
import { tenantPropertyQuery } from '../../utils/queries/tenantPropertyQuery';
import PropertyListing from '../../components/PropertyListing';
import Spinner from '../../components/Spinner';

export default function SellBuyProperties() {
  const [properties, setProperties] = useState(null);
  const { tenantId } = useParams();


  const filterProperties = (data) => {
    const newArray = [];
    data?.forEach((property) => {
      let flag = 0;
      property?.tenants?.forEach((tenant) => {
        if (tenant?.tenantId === tenantId) {
          flag = 1;
          return;
        }
      })
      if ( !flag ){
        newArray.push(property);
      }
    })
    setProperties(newArray)
  }


  const fetchPropertyDetails = () => {
    const query = tenantPropertyQuery(tenantId);

    Client.fetch(query)
      .then((data) => {
        filterProperties(data);
      })
      .catch((console.error));
  };

  console.log(properties);

  useEffect(() => {
    fetchPropertyDetails();
  }, [tenantId]);


  if (!properties) {
    return (
      <div className='text-gray-200 w-full h-[89vh] flex items-center justify-center flex flex-col'>
        <Spinner />
      </div>
    )
  } else {
    return (
      <div className='text-gray-200 w-full flex items-center justify-center flex-col'>
        <div className='p-2 rounded-xl blue-glassmorphism text-white'>Filters</div>
        <PropertyListing properties={properties && properties} owner={false} />
      </div>
    )
  }
}
