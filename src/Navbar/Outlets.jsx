import React, { useState } from 'react'
import SideNavbar from './SideNavbar';
import MainNavbar from './MainNavbar';
import { Outlet } from 'react-router-dom';

const Outlets = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const toggleSidebar = () => {
      setIsSidebarOpen(!isSidebarOpen);
    };
    const closeSidebar = () => {
      setIsSidebarOpen(false);
    };
  
  return (
    <div>
        <div className="flex">
        <div
          className={`shadow-lg ${isSidebarOpen ? 'translate-x-0 w-60' : '-translate-x-full w-0'}
           transition-transform-w duration-300 ease-in-out fixed lg:static z-50`}
        >
          <SideNavbar isOpen={isSidebarOpen} closeSidebar={closeSidebar} />
        </div>
        <div className="flex-1">
          <MainNavbar toggleSidebar={toggleSidebar} />
          <div className="p-4 z-20">
          <Outlet/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Outlets