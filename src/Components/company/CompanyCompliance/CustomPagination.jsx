import React from 'react';
import { FaAngleLeft, FaAngleRight, FaAnglesRight, FaAnglesLeft } from "react-icons/fa6";

const CustomPagination = ({ page, totalPages, onPageChange }) => {
    const handleFirstPage = () => onPageChange(1);
    const handleLastPage = () => onPageChange(totalPages);
    const handlePreviousPage = () => onPageChange(Math.max(page - 1, 1));
    const handleNextPage = () => onPageChange(Math.min(page + 1, totalPages));

    const renderPaginationButtons = () => {
        const buttons = [];
        const showDotsAfter = 2;
        if (totalPages > 1) {
            buttons.push(
                <button key={1} onClick={() => onPageChange(1)} className={`mx-1 h-8 w-8 border shadow rounded-full ${page === 1 ? 'bg-yellow-500 text-white' : 'bg-white text-black'}`}>1</button>
            );
        }
        if (page > showDotsAfter) {
            buttons.push(<span key="dots-start">...</span>);
        }
        for (let i = Math.max(2, page - 1); i <= Math.min(totalPages - 1, page + 1); i++) {
            buttons.push(
                <button key={i} onClick={() => onPageChange(i)} className={`mx-1 h-8 w-8 border shadow rounded-full ${page === i ? 'bg-yellow-500 text-white' : 'bg-white text-black'}`}>{i}</button>
            );
        }
        if (page < totalPages - showDotsAfter) {
            buttons.push(<span key="dots-end">...</span>);
        }
        if (totalPages > 1) {
            buttons.push(
                <button key={totalPages} onClick={() => onPageChange(totalPages)} className={`mx-1 h-8 w-8 border shadow rounded-full ${page === totalPages ? 'bg-yellow-500 text-white' : 'bg-white text-black'}`}>{totalPages}</button>
            );
        }
        return buttons;
    };

    return (
        <div className='flex justify-center items-center flex-wrap gap-2'>
            <FaAnglesLeft onClick={handleFirstPage} className='hover:bg-yellow-500 hover:text-white border-1 shadow cursor-pointer p-2 rounded-full' size={30} />
            <FaAngleLeft onClick={handlePreviousPage} className='hover:bg-yellow-500 hover:text-white border-1 shadow cursor-pointer p-2 rounded-full' size={30} />
            {renderPaginationButtons()}
            <FaAngleRight onClick={handleNextPage} className='hover:bg-yellow-500 hover:text-white border-1 shadow cursor-pointer p-2 rounded-full' size={30} />
            <FaAnglesRight onClick={handleLastPage} className='hover:bg-yellow-500 hover:text-white border-1 shadow cursor-pointer p-2 rounded-full' size={30} />
        </div>
    );
}

export default CustomPagination;