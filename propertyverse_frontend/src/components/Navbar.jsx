import React, { useState } from 'react';
import logoImage from '../assets/logo.png';
import { HiHome } from 'react-icons/hi';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import { CgCommunity } from 'react-icons/cg';
import { FaBlogger } from 'react-icons/fa';
import { MdFeedback } from 'react-icons/md';


const isNotActiveStyle = 'flex flex-col items-center py-2 gap-3 transition-all duration-200 ease-in-out capitalize mx-5 text-gray-300 hover:text-gray-100';
const isActiveStyle = 'flex flex-col items-center py-2 gap-3 font-extrabold border-b-2 border-white transition-all duration-200 ease-in-out capitalize mx-4 text-gray-100';



export default function Navbar({ user, role }) {
  const navigate = useNavigate();
  const [confirmLogout, setConfirmLogout] = useState(false);

  function handleLogout() {
    localStorage.removeItem("PropertyVerseAuth");
    localStorage.clear();
    navigate("/");
    window.location.reload();
  }
  return (
    <div className='px-4 flex items-center justify-evenly'>
      <div className='flex items-center'>
        <img src={logoImage} alt="logo" className='w-14 h-14 rounded-full' />
        <div className='flex flex-col ml-4'>
          <h1 className='text-xl font-bold text-gray-200'>PropertyVerse</h1>
          <p className='text-xs text-gray-400'>POWERED BY WEB3.0</p>
        </div>
      </div>

      <div className='border-gray-500 flex '>
        <div className='mx-2'>
          <NavLink to={'/'} className={({ isActive }) => isActive ? isActiveStyle : isNotActiveStyle}><HiHome fontSize={25} />Home</NavLink>
        </div>

          <NavLink to={'/community'} className={({ isActive }) => isActive ? isActiveStyle : isNotActiveStyle}><CgCommunity fontSize={25} />Community</NavLink>
          <NavLink to={'/blog'} className={({ isActive }) => isActive ? isActiveStyle : isNotActiveStyle}><FaBlogger fontSize={25} />Blogs</NavLink>
          <NavLink to={'/feedback'} className={({ isActive }) => isActive ? isActiveStyle : isNotActiveStyle}><MdFeedback fontSize={25} />Feedback</NavLink>
      </div>

      {!user ? (
        <div className='flex justify-evenly rounded-lg items-center cursor-pointer py-2 px-4'>
          <Link to="/login" className='py-1 px-4 bg-blue-500 text-white hover:bg-blue-400 transition-all duration-300 rounded-lg outline-none' >Login</Link>
          <Link to="/signup" className='py-1 px-4 text-blue-500 hover:text-blue-400 transition-all duration-300 rounded-lg outline-none'>Signup</Link>
        </div>
      ) : (
        !confirmLogout && !user?.role && (
          <button type='button' className='shadow-lg flex justify-center rounded-lg items-center cursor-pointer py-2 px-4 hover:shadow-md animate-fade-in-up' onClick={() => setConfirmLogout(!confirmLogout)}>
            Logout
          </button>
        )
      )}
      {confirmLogout && (
        <div className='shadow-lg flex justify-evenly rounded-lg items-center cursor-pointer py-2 px-4 hover:shadow-md animate-fade-in-up'>
          <button type='button' onClick={handleLogout} className='py-1 px-4 bg-red-500 text-white hover:bg-red-400 transition-all duration-300 rounded-lg outline-none' >Confirm</button>
          <button type='button' onClick={() => setConfirmLogout(false)} className='py-1 px-4 text-red-500 hover:text-red-400 transition-all duration-300 rounded-lg outline-none'>Cancel</button>
        </div>
      )}
    </div>
  )
}