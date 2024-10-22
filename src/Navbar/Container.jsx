import React, { useState } from 'react';
import SideNavbar from './SideNavbar';
import MainNavbar from './MainNavbar';
import { Outlet } from 'react-router-dom';

const Container = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className='relative min-h-screen'>
            <div
                className={`fixed top-0 left-0 h-screen z-40 transition-transform-w duration-300 ease-in-out
                    ${isSidebarOpen ? 'translate-x-0 lg:w-60' : '-translate-x-full lg:w-0'}
                    lg:translate-x-0 bg-white shadow-lg`}
            >
                <SideNavbar isOpen={isSidebarOpen} closeSidebar={toggleSidebar} />
            </div>
            {isSidebarOpen && (
                <div className="fixed inset-0 z-30 bg-black opacity-50 lg:hidden" onClick={toggleSidebar}></div>
            )}
            <div className={`flex-1 ${isSidebarOpen ? 'lg:ml-60' : 'lg:ml-0'} transition-all duration-300`}>
                <MainNavbar toggleSidebar={toggleSidebar} />
                <div className="p-4 w-full">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default Container;