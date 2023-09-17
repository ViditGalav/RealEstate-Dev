import React, { useState } from 'react';
import { HiHome } from 'react-icons/hi';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import { CgCommunity } from 'react-icons/cg';
import { FaBlogger } from 'react-icons/fa';
import { BsWechat } from 'react-icons/bs';
import { BsFillPinFill } from 'react-icons/bs';
import { MdFeedback } from 'react-icons/md';

export default function Sidebar({ user, role, closeToggle }) {
  const navigate = useNavigate();
  const [confirmLogout, setConfirmLogout] = useState(false);


  const isNoteActiveStyle = 'flex flex-col py-1 pl-5 gap-3 text-gray-300 hover:text-gray-100 transition-all duration-200 ease-in-out capitalize my-1';
  const isActiveStyle = 'flex flex-col py-2 gap-3 font-extrabold border-r-2 border-white transition-all duration-200 ease-in-out capitalize my-2 pl-2 text-gray-100';

  function handleLogout() {
    localStorage.removeItem("PropertyVerseAuth");
    localStorage.clear();
    navigate("/");
    window.location.reload();
  }

  return (
    <div className='flex flex-col h-full min-w-210 hide-scrollbar w-full justify-evenly'>

      <div className='border-gray-500 flex flex-col'>
        <div className='py-2 '>
          <NavLink to={'/'} className={({ isActive }) => isActive ? isActiveStyle : isNoteActiveStyle}onClick={()=>closeToggle(false)}><HiHome fontSize={25} />Home</NavLink>
        </div>
        <NavLink to={'/community'} className={({ isActive }) => isActive ? isActiveStyle : isNoteActiveStyle}onClick={()=>closeToggle(false)}><CgCommunity fontSize={25} />Community</NavLink>
        <NavLink to={'/blog'} className={({ isActive }) => isActive ? isActiveStyle : isNoteActiveStyle}onClick={()=>closeToggle(false)}><FaBlogger fontSize={25} />Blog</NavLink>
        <NavLink to={'/feedback'} className={({ isActive }) => isActive ? isActiveStyle : isNoteActiveStyle}onClick={()=>closeToggle(false)}><MdFeedback fontSize={25} />Feedback</NavLink>

      </div>


      <div className='w-full flex justify-center'>
        {!user ? (
          <div className='shadow-lg flex justify-evenly rounded-lg items-center cursor-pointer py-2 px-4 hover:shadow-md animate-fade-in-up w-2/3 m-auto'>
            <Link to="/login" className='py-1 px-4 bg-blue-500 text-white hover:bg-blue-400 transition-all duration-300 rounded-lg outline-none' >Login</Link>
            <Link to="/signup" className='py-1 px-4 text-blue-500 hover:text-blue-400 transition-all duration-300 rounded-lg outline-none'>Signup</Link>
          </div>
        ) : (
          !confirmLogout && !user?.role && (
            <button type='button' className='shadow-lg flex justify-center rounded-lg items-center cursor-pointer py-2 px-4 hover:shadow-md animate-fade-in-up w-2/3 mx-auto' onClick={() => setConfirmLogout(!confirmLogout)}>
              Logout
            </button>
          )
        )}
        {confirmLogout && (
          <div className='shadow-lg flex justify-evenly rounded-lg items-center cursor-pointer py-2 px-4 hover:shadow-md animate-fade-in-up w-2/3 mx-auto'>
            <button type='button' onClick={handleLogout} className='py-1 px-4 bg-red-500 text-white hover:bg-red-400 transition-all duration-300 rounded-lg outline-none' >Confirm</button>
            <button type='button' onClick={() => setConfirmLogout(false)} className='py-1 px-4 text-red-500 hover:text-red-400 transition-all duration-300 rounded-lg outline-none'>Cancel</button>
          </div>
        )}
      </div>
    </div>
  )
}
