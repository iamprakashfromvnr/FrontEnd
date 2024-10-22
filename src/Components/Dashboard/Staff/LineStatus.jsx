import React from 'react'
const LineStatus = ({ companies, currentPage, totalPages, onPageChange }) => {
    const handlePageClick = (page) => {
        onPageChange(page);
    };
    const getPaginationButtons = (currentPage, totalPages) => {
        const paginationButtons = [];
        const maxButtons = 3;

        let startPage, endPage;

        if (totalPages <= maxButtons) {
            startPage = 1;
            endPage = totalPages;
        } else {
            if (currentPage <= Math.ceil(maxButtons / 2)) {
                startPage = 1;
                endPage = maxButtons;
            } else if (currentPage + Math.floor(maxButtons / 2) >= totalPages) {
                startPage = totalPages - maxButtons + 1;
                endPage = totalPages;
            } else {
                startPage = currentPage - Math.floor(maxButtons / 2);
                endPage = currentPage + Math.floor(maxButtons / 2);
            }
        }

        for (let i = startPage; i <= endPage; i++) {
            paginationButtons.push(i);
        }

        const finalButtons = [];

        if (startPage > 1) {
            finalButtons.push(1);
            if (startPage > 2) finalButtons.push("...");
        }

        paginationButtons.forEach((button) => {
            finalButtons.push(button);
        });

        if (endPage < totalPages) {
            if (endPage < totalPages - 1) finalButtons.push("...");
            finalButtons.push(totalPages);
        }

        return finalButtons;
    };
    return (
        <div>
        <div className='border mt-5 pe-4 ps-4 pb-4 rounded'>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-5">
                <table className="min-w-full text-sm text-left rtl:text-right text-black">
                    <thead className="text-xs text-black font-semibold">
                        <tr className="bg-gray-300">
                            <th scope="col" className="px-4 py-3">S.No</th>
                            <th scope="col" className="px-4 py-3">Company Name</th>
                            <th scope="col" className="px-4 py-3">Complied</th>
                            <th scope="col" className="px-4 py-3">Not Complied</th>
                            <th scope="col" className="px-4 py-3">Partially Complied</th>
                            <th scope="col" className="px-4 py-3">Overdue</th>
                        </tr>
                    </thead>
                    <tbody>
                        {companies.map((row) => (
                            <tr key={row.SNO}>
                                <td className="px-4 py-1 border-b border-gray-300">{row.SNO}</td>
                                <td className="px-2 py-1 border-b border-gray-300">
                                    <div className='inline-flex items-center'>
                                        <img src={row.logo} alt='' width="30" className='mr-2 rounded-full' />
                                        <span className='mt-1'>{row.companyname}</span>
                                    </div>
                                </td>
                                {['complied', 'notComplied', 'partiallyComplied', 'overdue'].map((status, index) => (
                                    <td key={index} className="px-2 py-1 border-b border-gray-300">
                                        <div className="flex flex-col">
                                            <span className="mb-1">{row[status]}</span>
                                            <div className="w-40 bg-gray-200 rounded-full h-2.5">
                                                <div
                                                    className={`h-2.5 rounded-full ${status === 'complied' ? 'bg-green-500' : status === 'notComplied' ? 'bg-red-500' : status === 'partiallyComplied' ? 'bg-yellow-500' : 'bg-orange-500'}`}
                                                    style={{ width: `${row[status]}%` }}>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="flex items-center justify-between mt-4 flex-wrap">
                <div className="bg-white border border-gray-300 rounded-md px-4 py-2 mb-2">
                    <label htmlFor="page-select" className="mr-2 text-sm"> Page</label>
                    <select 
                        id="page-select" 
                        value={currentPage} 
                        onChange={(e) => handlePageClick(Number(e.target.value))}
                        className="border border-gray-300 rounded-md p-1"
                    >
                        {Array.from({ length: totalPages }, (_, index) => (
                            <option key={index} value={index + 1}>{index + 1}</option>
                        ))}
                    </select>
                    <span className="ml-2 text-sm">of {totalPages}</span>
                </div>

                <div className="flex items-center space-x-2">
                    <button onClick={() => handlePageClick(1)} disabled={currentPage === 1}
                        className={`flex items-center justify-center px-3 py-1 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-full hover:bg-gray-200 transition duration-300 ease-in-out ${currentPage === 1 ? 'cursor-not-allowed opacity-50' : ''}`}>
                        &laquo;
                    </button>

                    <button onClick={() => handlePageClick(currentPage - 1)} disabled={currentPage === 1}
                        className={`flex items-center justify-center px-3 py-1 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-full hover:bg-gray-200 transition duration-300 ease-in-out ${currentPage === 1 ? 'cursor-not-allowed opacity-50' : ''}`}>
                        &lt;
                    </button>

                    {getPaginationButtons(currentPage, totalPages).map((button, index) => {
                        if (button === '...') {
                            return (
                                <span key={index} className="px-3 py-1 text-sm font-medium text-gray-700">
                                    {button}
                                </span>
                            );
                        }
                        return (
                            <button key={index} onClick={() => handlePageClick(button)}
                                className={`flex items-center justify-center px-3 py-1 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-full hover:bg-gray-200 transition duration-300 ease-in-out ${button === currentPage ? 'bg-yellow-400 font-bold' : ''}`}>
                                {button}
                            </button>
                        );
                    })}

                    <button onClick={() => handlePageClick(currentPage + 1)} disabled={currentPage === totalPages}
                        className={`flex items-center justify-center px-3 py-1 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-full hover:bg-gray-200 transition duration-300 ease-in-out ${currentPage === totalPages ? 'cursor-not-allowed opacity-50' : ''}`}>
                        &gt;
                    </button>

                    <button onClick={() => handlePageClick(totalPages)} disabled={currentPage === totalPages}
                        className={`flex items-center justify-center px-3 py-1 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-full hover:bg-gray-200 transition duration-300 ease-in-out ${currentPage === totalPages ? 'cursor-not-allowed opacity-50' : ''}`}>
                        &raquo;
                    </button>
                </div>
            </div>
        </div>
    </div>
    )
}

export default LineStatus