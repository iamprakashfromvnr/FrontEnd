import React from 'react';
import { useState } from 'react';
import { FaCheckCircle, FaExclamationCircle, FaEllipsisV, FaEdit, FaTrash } from 'react-icons/fa';

const Item = ({ time, message, status }) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const handleEdit = () => {
        setDropdownOpen(false);
    };

    const handleDelete = () => {
        setDropdownOpen(false);
    };

    const toggleDropdown = () => {
        setDropdownOpen(prev => !prev);
    };
    return (
        <div className="flex justify-between md:items-start lg:items-center p-5 ">
      <div className="flex items-start gap-2"> 
        <span className='flex items-start lg:items-center justify-center gap-2 '>
          <input type="checkbox"className="text-black font-semi-bold"/>
          <p className="text-sm text-black w-10 lg:w-40">{time}</p>
        </span>

        <div className="flex flex-col sm:flex-row md:flex-row lg:ps-32 md:ps-20">
          <div>
            {status === 'success' ? (
              <FaCheckCircle className="text-green-500 h-5 w-5" />
            ) : (
              <FaExclamationCircle className="text-red-500 h-5 w-5" />
            )}
          </div>
        </div>
        <div>
          <p className={`text-sm ${status === 'success' ? 'text-black' : 'text-black'}`}>
            {message}
          </p>
        </div>
      </div>


      <div className="relative text-black cursor-pointer sm:ps-10">
        <div onClick={toggleDropdown}>
          <FaEllipsisV />
        </div>
        {dropdownOpen && (
          <div className="absolute right-0 mt-1 w-32 bg-white border rounded-md shadow-lg">
            <button
              onClick={handleEdit}
              className="flex items-center  w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
              <FaEdit className="mr-2 h-4 w-4" /> Edit
            </button>
            <button
              onClick={handleDelete}
              className="flex items-center w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
              <FaTrash className="mr-2 h-4 w-4" /> Delete
            </button>
          </div>
        )}
      </div>
    </div> 

    );
};

export default Item;