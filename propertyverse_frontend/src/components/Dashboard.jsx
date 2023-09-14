import React, { useState } from 'react';
import { HiHome } from 'react-icons/hi';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import ProfilePicture from './ProfilePicture';
import { BsBuildingFillCheck } from 'react-icons/bs';
import { GiWallet } from 'react-icons/gi';
import { BsFillBuildingsFill } from 'react-icons/bs';
import { SiPagespeedinsights } from 'react-icons/si';
import { MdRecentActors } from 'react-icons/md';
import {BsBuildingFillAdd} from 'react-icons/bs';
import {AiFillContacts} from 'react-icons/ai';
import {RiParentFill} from 'react-icons/ri';
import {FaFileInvoiceDollar} from 'react-icons/fa';
import {BsBuildingFillDash} from 'react-icons/bs';
import {BsBuildingFillGear} from 'react-icons/bs';

const isNotActiveStyle = 'flex py-1 pl-4 gap-3 text-gray-300 hover:text-gray-100 transition-all duration-200 ease-in-out capitalize my-1';
const isActiveStyle = 'flex py-2 gap-3 font-extrabold border-r-2 border-white transition-all duration-200 ease-in-out capitalize my-2 pl-6 text-gray-100';


export default function Dashboard({ user, role }) {
  const navigate = useNavigate();
  const [confirmLogout, setConfirmLogout] = useState(false);
  function handleLogout() {
    localStorage.removeItem("PropertyVerseAuth");
    localStorage.clear();
    navigate("/");
    window.location.reload();
  }
  return (
    <div className='flex flex-col justify-between bg-mainColor md:w-275 min-w-210 overflow-y-auto hide-scrollbar shadow-lg h-[89vh]'>
      <div className='p-10 pb-2 md:mt-0'>
        <ProfilePicture
          userId={user?._id}
          height={20}
          width={20}
          rounded={'full'}
          isUploadActive={true}
          classNames='cursor-pointer'
        />
      </div>
      <div>
        <div className='p-2 my-2 pr-0'>
          <NavLink to={'/'} className={({ isActive }) => isActive ? isActiveStyle : isNotActiveStyle}><HiHome fontSize={25} />Home</NavLink>
        </div>

        {role === 'owner' &&
          <>
            <div className='p-2 pr-0'>
              <NavLink to={`/owner/${user?._id}/owner-nfts`} className={({ isActive }) => isActive ? isActiveStyle : isNotActiveStyle}><BsBuildingFillCheck fontSize={25} />Your NFT's</NavLink>
            </div>
            <div className='p-2 pr-0'>
              <NavLink to={`/owner/${user?._id}/wallet`} className={({ isActive }) => isActive ? isActiveStyle : isNotActiveStyle}>
                <GiWallet fontSize={25} />Your Wallet
              </NavLink>
            </div>
            <div className='p-2 pr-0'>
              <NavLink to={`/owner/${user?._id}/property-details`} className={({isActive})=>isActive ? isActiveStyle : isNotActiveStyle}>
                <BsFillBuildingsFill fontSize={25} /> Property Details
              </NavLink>
            </div>
            <div className='p-2 pr-0'>
              <NavLink to={`/owner/${user?._id}/add-property`} className={({isActive})=>isActive ? isActiveStyle : isNotActiveStyle}>
                <BsBuildingFillAdd fontSize={25} /> Add Properties
              </NavLink>
            </div>
            <div className='p-2 pr-0'>
              <NavLink to={`/owner/${user?._id}/update-property`} className={({isActive})=>isActive ? isActiveStyle : isNotActiveStyle}>
                <BsBuildingFillGear fontSize={25} /> Modify Properties
              </NavLink>
            </div>
            <div className='p-2 pr-0'>
              <NavLink to={`/owner/${user?._id}/remove-property`} className={({isActive})=>isActive ? isActiveStyle : isNotActiveStyle}>
                <BsBuildingFillDash fontSize={25} /> Remove Properties
              </NavLink>
            </div>
            <div className='p-2 pr-0'>
              <NavLink to={`/owner/${user?._id}/tenant-details`} className={({isActive})=>isActive ? isActiveStyle : isNotActiveStyle}>
                <RiParentFill fontSize={25} /> Tenant Details
              </NavLink>
            </div>
            <div className='p-2 pr-0'>
              <NavLink to={`/owner/${user?._id}/recent-activities`} className={({ isActive }) => isActive ? isActiveStyle : isNotActiveStyle}>
                <MdRecentActors fontSize={25} />Recent activities
              </NavLink>
            </div>
            <div className='p-2 pr-0'>
              <NavLink to={`/owner/${user?._id}/insights`} className={({ isActive }) => isActive ? isActiveStyle : isNotActiveStyle}>
                <SiPagespeedinsights fontSize={25} />Useful Insights
              </NavLink>
            </div>
          </>
        }
        {role === "tenant" &&
          <>
            <div className='p-2 pr-0'>
              <NavLink to={`/tenant/${user?._id}/tenant-properties`} className={({ isActive }) => isActive ? isActiveStyle : isNotActiveStyle}><BsBuildingFillCheck fontSize={25} />Your Properties</NavLink>
            </div>
            <div className='p-2 pr-0'>
              <NavLink to={`/tenant/${user?._id}/wallet`} className={({ isActive }) => isActive ? isActiveStyle : isNotActiveStyle}>
                <GiWallet fontSize={25} />Your Wallet
              </NavLink>
            </div>
            <div className='p-2 pr-0'>
              <NavLink to={`/tenant/${user?._id}/more-properties`} className={({isActive})=> isActive ? isActiveStyle : isNotActiveStyle} >
                <BsBuildingFillAdd fontSize={25} /> More Properties
              </NavLink>
            </div>
            <div className='p-2 pr-0'>
              <NavLink to={`/tenant/${user?._id}/property-owners`} className={({isActive})=> isActive ? isActiveStyle : isNotActiveStyle} >
                <AiFillContacts fontSize={25} /> Property Owners
              </NavLink>
            </div>
            <div className='p-2 pr-0'>
              <NavLink to={`/tenant/${user?._id}/transaction-details`} className={({isActive})=> isActive ? isActiveStyle : isNotActiveStyle} >
                <FaFileInvoiceDollar fontSize={25} /> Transaction details
              </NavLink>
            </div>
          </>
        }
      </div>


      <div className='my-2 p-2'>
        <Link to={`/${user?._id}/profile`} className='w-full shadow-lg flex justify-evenly rounded-lg items-center cursor-pointer py-2 px-4  hover:shadow-md'>
          <ProfilePicture
            userId={user?._id}
            height={14}
            width={14}
            rounded={"full"}
            isUploadActive={false}
          />
          <p className='text-gray-200'>{user?.fullName}</p>
        </Link>
        {confirmLogout && (
          <div className='w-full shadow-lg flex justify-evenly rounded-lg items-center cursor-pointer py-4 px-4 hover:shadow-md animate-slide-in'>
            <button type='button' onClick={handleLogout} className='py-2 px-4 bg-red-500 text-white hover:bg-red-400 transition-all duration-300 rounded-lg outline-none' >Confirm</button>
            <button type='button' onClick={() => setConfirmLogout(false)} className='py-2 px-4 text-red-500 hover:text-red-400 transition-all duration-300 rounded-lg outline-none'>Cancel</button>
          </div>
        )}

        <button type='button' className='w-full shadow-lg flex justify-center rounded-lg items-center cursor-pointer py-4 px-4 hover:shadow-md text-gray-200' onClick={() => setConfirmLogout(!confirmLogout)}>
          Logout
        </button>


      </div>
    </div>
  )
}
