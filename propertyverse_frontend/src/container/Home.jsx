import React, { useState, useEffect, useRef } from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import Client from '../utils/Client';
import { userQuery } from '../utils/UserData';


import Navbar from '../components/Navbar';
import DisplayRoutes from './DisplayRoutes';
import Sidebar from '../components/Sidebar';
import Dashboard from '../components/Dashboard';
import logoImage from '../assets/logo.png';

import { AiFillCloseCircle } from 'react-icons/ai';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import { BsFillArrowLeftCircleFill } from 'react-icons/bs';


export default function Home() {
  const [user, setUser] = useState(null);
  const [role, setRole] = useState("");
  const [toggleSidebar, setToggleSidebar] = useState(false);
  const [toggleDashboard, setToggleDashboard] = useState(false);
  const scrollRef = useRef(null);
  const authToken = localStorage.getItem("PropertyVerseAuth") !== undefined ? localStorage.getItem("PropertyVerseAuth") : localStorage.clear();

  useEffect(() => {
    const query = userQuery(authToken);
    const queryData = () => {
      Client.fetch(query)
        .then((data) => {
          setUser(data[0]);
          setTheRole(data[0]);
        })
        .catch((console.error));
    }
    queryData();
  }, []);

  function setTheRole(data){
    if ( data?.role === 'owner' ){
      setRole('owner');
    } else if ( data?.role === 'tenant' ){
      setRole('tenant');
    } else {
      setRole("");
    }
  }

  useEffect(() => {
    scrollRef.current.scrollTo(0, 0);
  }, []);


  return (
    <div className='flex flex-col transition-height duration-75 ease-out bg-gradient-to-tr from-slate-900 to-red-950 min-h-screen min-w-full'>

      <div className='max-md:hidden sticky top-0 shadow-2xl transition-shadow duration-300 ease-in-out z-10 bg-gradient-to-tr from-slate-900 to-red-950'>
        <Navbar user={user && user} role={(role === "owner") || ( role === "tenant") ? role : ""} />
      </div>

      <div className='sticky top-0 left-0 flex max-md:hidden bg-gradient-to-tr from-slate-900 to-red-950'>
        {(role === "owner" || role === "tenant") && (
          <div>
            <Dashboard user={user && user} role={role} />
          </div>
        )}

        <div className='flex-1 overflow-y-scroll' ref={scrollRef}>
          <Routes>
            <Route path='/*' element={<DisplayRoutes user={user && user} role={(role === "owner") || ( role === "tenant") ? role : ""} />} />
          </Routes>
        </div>
      </div>

      {/* On small phone */}
      <div className='flex md:hidden flex-col'>
        <div className='p-2 w-full flex flex-row justify-between items-center shadow-md z-10'>
          {(role === "owner" || role === "tenant") && (
            <BsFillArrowRightCircleFill color='white' fontSize={40} className='cursor-pointer' onClick={() => {
              setToggleSidebar(false)
              setToggleDashboard(true)}} />
          )}
          <Link to={'/'}> <img src={logoImage} alt='logo' className='w-10 rounded-lg ' /> </Link>

          <BsFillArrowLeftCircleFill color='white' fontSize={40} className='cursor-pointer' onClick={() => {
            setToggleDashboard(false)
            setToggleSidebar(true)}} />

        </div>


        {toggleDashboard && (
          <div className='fixed left-0 top-0 w-4/5 h-screen overflow-y-auto shadow-md z-50 animate-fade-in flex flex-col rounded-r-3xl shadow-lg hover:shadow-2xl transition-all duration-300 bg-gradient-to-tr from-slate-900 to-red-950'>
            <div className='absolute w-full top-0 flex justify-end items-center p-2'>
              <AiFillCloseCircle color='white' fontSize={40} className='cursor-pointer z-10' onClick={() => setToggleDashboard(false)} />
            </div>
            <Dashboard user={user && user} role={(role === "owner") || ( role === "tenant") ? role : ""} closeToggle={setToggleDashboard} />
          </div>
        )}

        {toggleSidebar &&
          <div className='w-4/5 fixed top-0 right-0 h-screen overflow-y-auto z-50 animate-fade-in flex flex-col rounded-l-3xl shadow-lg hover:shadow-2xl transition-all duration-300 bg-gradient-to-tr from-slate-900 to-red-950'>
            <div className='w-full flex justify-start items-center p-2'>
              <AiFillCloseCircle color='white' fontSize={40} className='cursor-pointer z-10' onClick={() => setToggleSidebar(false)} />
            </div>
            <Sidebar user={user && user} role={role && role} closeToggle={setToggleSidebar} />
          </div>
        }

        <div className='pb-2 flex-1 h-screen overflow-y-scroll' ref={scrollRef}>

          <Routes>
            <Route path='/*' element={<DisplayRoutes user={user && user} role={(role === "owner") || ( role === "tenant") ? role : ""} />} />
          </Routes>
        </div>
      </div>
    </div>
  )
}
