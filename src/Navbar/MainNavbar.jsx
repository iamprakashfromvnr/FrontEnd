import React from 'react'
import { FaBars, FaRegBell, FaRegUserCircle } from "react-icons/fa";
import { Link } from 'react-router-dom';

const MainNavbar = ({ toggleSidebar }) => {
    return (
        <div className="bg-white shadow-lg text-white py-2 px-3 flex items-center justify-between">
            <FaBars onClick={toggleSidebar} className='cursor-pointer text-2xl rounded bg-primary p-1 ' />

            <div className="flex gap-2">
                <Link to='/notification'>
                <FaRegBell className='cursor-pointer p-2 rounded-full bg-primary' size={30} />
                </Link>
                <FaRegUserCircle className='cursor-pointer p-1 rounded-full bg-primary' size={30} />
            </div>
        </div>
    );
}

export default MainNavbar