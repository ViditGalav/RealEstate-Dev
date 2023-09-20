import React from 'react';
import {Route, Routes} from 'react-router-dom';
import AddProperty from './owner/AddProperty';
import OwnerNFT from './owner/OwnerNFT';
import OwnerProperties from './owner/OwnerProperties';
import OwnerWallet from './owner/OwnerWallet';
import OwnerRecentActivities from './owner/OwnerRecentActivities';
import TenantDetails from './owner/TenantDetails';
import OwnerInsights from './owner/OwnerInsights';
import PropertyOwners from './tenant/PropertyOwners';
import SellBuyProperties from './tenant/SellBuyProperties';
import TenantProperties from './tenant/TenantProperties';
import TenantWallet from './tenant/TenantWallet';
import TransactionDetails from './tenant/TransactionDetails';
import MainPage from './MainPage';

export default function DisplayRoutes() {
  return (
    <div className='p-2 md:p-5'>
      <Routes>
        {/* Home route */}
        <Route path='/' element={<MainPage />} />

        {/* Other routes */}
        {/* communities, blogs and others */}

        {/* Owner routes */}
        <Route path='/owner/:ownerId/add-property' element={<AddProperty />} />
        <Route path='/owner/:ownerId/owner-nfts' element={<OwnerNFT />} />
        <Route path='/owner/:ownerId/property-details' element={<OwnerProperties />} />
        <Route path='/owner/:ownerId/wallet' element={<OwnerWallet />} />
        <Route path='/owner/:ownerId/tenant-details' element={<OwnerRecentActivities />} />
        <Route path='/owner/:ownerId/recent-activities' element={<TenantDetails />} />
        <Route path='/owner/:ownerId/insights' element={<OwnerInsights />} />


        {/* Tenant routes */}
        <Route path='/tenant/:tenantId/tenant-properties' element={<TenantProperties />} />
        <Route path='/tenant/:tenantId/wallet' element={<TenantWallet />} />
        <Route path='/tenant/:tenantId/rent-buy-properties' element={<SellBuyProperties />} />
        <Route path='/tenant/:tenantId/property-owners' element={<PropertyOwners />} />
        <Route path='/tenant/:tenantId/transaction-details' element={<TransactionDetails />} />
      </Routes>

    </div>
  )
}
