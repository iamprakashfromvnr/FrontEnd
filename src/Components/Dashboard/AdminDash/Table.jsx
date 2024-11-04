// import React from 'react';

// const Table = ({ companies, currentPage, totalPages, onPageChange }) => {
//     const handlePageClick = (page) => {
//         onPageChange(page);
//     };

//     const getPaginationButtons = (currentPage, totalPages) => {
//         const paginationButtons = [];
//         const maxButtons = 3;

//         let startPage, endPage;

//         if (totalPages <= maxButtons) {
//             startPage = 1;
//             endPage = totalPages;
//         } else {
//             if (currentPage <= Math.ceil(maxButtons / 2)) {
//                 startPage = 1;
//                 endPage = maxButtons;
//             } else if (currentPage + Math.floor(maxButtons / 2) >= totalPages) {
//                 startPage = totalPages - maxButtons + 1;
//                 endPage = totalPages;
//             } else {
//                 startPage = currentPage - Math.floor(maxButtons / 2);
//                 endPage = currentPage + Math.floor(maxButtons / 2);
//             }
//         }

//         for (let i = startPage; i <= endPage; i++) {
//             paginationButtons.push(i);
//         }

//         const finalButtons = [];

//         if (startPage > 1) {
//             finalButtons.push(1);
//             if (startPage > 2) finalButtons.push("...");
//         }

//         paginationButtons.forEach((button) => {
//             finalButtons.push(button);
//         });

//         if (endPage < totalPages) {
//             if (endPage < totalPages - 1) finalButtons.push("...");
//             finalButtons.push(totalPages);
//         }

//         return finalButtons;
//     };

//     return (
//         <div className='border mt-5 p-4 rounded'>
//             <h6 className='mt-4'>Compliance for the period of April 2024 to November 2024</h6>

//             <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-5">
//                 <table className="min-w-full text-sm text-left text-black">
//                     <thead className="text-xs text-black font-semibold">
//                         <tr className="bg-gray-300">
//                             <th scope="col" className="px-4 py-3">S.No</th>
//                             <th scope="col" className="px-4 py-3">Date</th>
//                             <th scope="col" className="px-4 py-3">Company Name</th>
//                             <th scope="col" className="px-4 py-3">State</th>
//                             <th scope="col" className="px-4 py-3">Branch</th>
//                             <th scope="col" className="px-4 py-3">Activity</th>
//                             <th scope="col" className="px-4 py-3">Status</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {companies.map((row) => (
//                             <tr key={row.SNO} className="border-b border-gray-300">
//                                 <td className="px-4 py-2">{row.SNO}</td>
//                                 <td className="px-4 py-2">{row.Date}</td>
//                                 <td className="px-4 py-2">
//                                     <div className='flex items-center'>
//                                         <img src={row.logo} alt='' width="30" className='mr-2 rounded-full' />
//                                         <span>{row.CompanyName}</span>
//                                     </div>
//                                 </td>
//                                 <td className="px-4 py-2">{row.State}</td>
//                                 <td className="px-4 py-2">{row.Branch}</td>
//                                 <td className="px-4 py-2">{row.Activity}</td>
//                                 <td className="px-4 py-2">
//                                     <span className={`px-2 py-1 flex items-center justify-center w-32 h-8 text-sm font-semibold leading-tight rounded-full 
//                                          ${row.Status === 'Not Complied' ? 'bg-red-400' : row.Status === 'Partially Complied' ? 'bg-amber-500 ps-7' : row.Status === 'Complied' ? 'bg-green-400' : 'bg-gray-200'}`}>
//                                         {row.Status}
//                                     </span>
//                                 </td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             </div>

//             <div className="flex items-center justify-between mt-4 flex-wrap">
//                     <div className="bg-white border border-gray-300 rounded-md px-4 py-2 mb-2">
//                         <label htmlFor="page-select" className="mr-2 text-sm"> Page</label>
//                         <select 
//                             id="page-select" 
//                             value={currentPage} 
//                             onChange={(e) => handlePageClick(Number(e.target.value))}
//                             className="border border-gray-300 rounded-md p-1">
//                             {Array.from({ length: totalPages }, (_, index) => (
//                                 <option key={index} value={index + 1}>{index + 1}</option>
//                             ))}
//                         </select>
//                         <span className="ml-2 text-sm">of {totalPages}</span>
//                     </div>

//                 <div className="flex items-center space-x-2 mt-2 md:mt-0">
//                     <button onClick={() => handlePageClick(1)} disabled={currentPage === 1}
//                         className={`flex items-center justify-center px-3 py-1 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-full hover:bg-gray-200 transition duration-300 ease-in-out ${currentPage === 1 ? 'cursor-not-allowed opacity-50' : ''}`}>
//                         &laquo;
//                     </button>

//                     <button onClick={() => handlePageClick(currentPage - 1)} disabled={currentPage === 1}
//                         className={`flex items-center justify-center px-3 py-1 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-full hover:bg-gray-200 transition duration-300 ease-in-out ${currentPage === 1 ? 'cursor-not-allowed opacity-50' : ''}`}>
//                         &lt;
//                     </button>

//                     {getPaginationButtons(currentPage, totalPages).map((button, index) => {
//                         if (button === '...') {
//                             return (
//                                 <span key={index} className="px-3 py-1 text-sm font-medium text-gray-700">
//                                     {button}
//                                 </span>
//                             );
//                         }
//                         return (
//                             <button key={index} onClick={() => handlePageClick(button)}
//                                 className={`flex items-center justify-center px-3 py-1 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-full hover:bg-gray-200 transition duration-300 ease-in-out ${button === currentPage ? 'bg-yellow-400 font-bold' : ''}`}>
//                                 {button}
//                             </button>
//                         );
//                     })}

//                     <button onClick={() => handlePageClick(currentPage + 1)} disabled={currentPage === totalPages}
//                         className={`flex items-center justify-center px-3 py-1 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-full hover:bg-gray-200 transition duration-300 ease-in-out ${currentPage === totalPages ? 'cursor-not-allowed opacity-50' : ''}`}>
//                         &gt;
//                     </button>

//                     <button onClick={() => handlePageClick(totalPages)} disabled={currentPage === totalPages}
//                         className={`flex items-center justify-center px-3 py-1 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-full hover:bg-gray-200 transition duration-300 ease-in-out ${currentPage === totalPages ? 'cursor-not-allowed opacity-50' : ''}`}>
//                         &raquo;
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Table;





import React from 'react';
const Table = ({ companies, currentPage, totalPages, onPageChange, filters }) => {
    const handlePageClick = (page) => {
        onPageChange(page);
    };

    const filteredData = companies.filter((row) => {
        const [day, month, year] = row.Date.split('-');
        const rowDate = new Date(`${year}-${month}-${day}`);
        const selectedDate = filters.date ? new Date(filters.date) : null;

        return (
            (!filters.company || row.CompanyName === filters.company) &&
            (!filters.state || row.State === filters.state) &&
            (!filters.branch || row.Branch === filters.branch) &&
            (!filters.priority || row.Priority === filters.priority) &&
            (!filters.area || row.Area === filters.area) &&
            (!selectedDate || rowDate.toDateString() === selectedDate.toDateString())
        );
    });

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
        <div className='border border-bordergray mt-5 p-4 rounded'>
            <h6 className='mt-4'>Compliance for the period of April 2024 to November 2024</h6>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-5">
                <table className="min-w-full text-sm text-left text-black">
                    <thead className="text-xs text-black font-semibold">
                        <tr className="bg-gray-300">
                            <th scope="col" className="px-4 py-3">S.No</th>
                            <th scope="col" className="px-4 py-3">Date</th>
                            <th scope="col" className="px-4 py-3">Company Name</th>
                            <th scope="col" className="px-4 py-3">State</th>
                            <th scope="col" className="px-4 py-3">Branch</th>
                            <th scope="col" className="px-4 py-3">Activity</th>
                            <th scope="col" className="px-4 py-3">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredData.map((row) => (
                            <tr key={row.SNO} className="border-b border-gray-300">
                                <td className="px-4 py-2">{row.SNO}</td>
                                <td className="px-4 py-2">{row.Date}</td>
                                <td className="px-4 py-2">
                                    <div className='flex items-center'>
                                        <img src={row.logo} alt='' width="30" className='mr-2 rounded-full' />
                                        <span>{row.CompanyName}</span>
                                    </div>
                                </td>
                                <td className="px-4 py-2">{row.State}</td>
                                <td className="px-4 py-2">{row.Branch}</td>
                                <td className="px-4 py-2">{row.Activity}</td>
                                <td className="px-4 py-2">
                                    <span className={`px-2 py-1 flex items-center justify-center w-32 h-8 text-sm font-semibold leading-tight rounded-full 
                                         ${row.Status === 'Not Complied' ? 'bg-red-400' : row.Status === 'Partially Complied' ? 'bg-amber-500 ps-7' : row.Status === 'Complied' ? 'bg-green-400' : 'bg-gray-200'}`}>
                                        {row.Status}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="flex items-center justify-between mt-4">
                <div className="bg-white px-4 py-2 flex-shrink-0 mb-2">
                    <label htmlFor="page-select" className="mr-2 text-sm">Page</label>
                    <select id="page-select" value={currentPage} onChange={(e) => handlePageClick(Number(e.target.value))} className="border border-gray-300 rounded-md p-1">
                        {Array.from({ length: totalPages }, (_, index) => (
                            <option key={index} value={index + 1}>{index + 1}</option>
                        ))}
                    </select>
                    <span className="ml-2 text-sm">of {totalPages}</span>
                </div>

                <div className="flex items-center space-x-1 overflow-x-auto whitespace-nowrap mb-2">
                    <button onClick={() => handlePageClick(1)} disabled={currentPage === 1}
                        className={`flex items-center justify-center px-2 py-0 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-full hover:bg-gray-200 transition duration-300 ease-in-out ${currentPage === 1 ? 'cursor-not-allowed opacity-50' : ''}`}>
                        &laquo;
                    </button>

                    <button onClick={() => handlePageClick(currentPage - 1)} disabled={currentPage === 1}
                        className={`flex items-center justify-center px-2 py-0 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-full hover:bg-gray-200 transition duration-300 ease-in-out ${currentPage === 1 ? 'cursor-not-allowed opacity-50' : ''}`}>
                        &lt;
                    </button>

                    {getPaginationButtons(currentPage, totalPages).map((button, index) => {
                        if (button === '...') {
                            return (
                                <span key={index} className="px-2 py-0 text-sm font-medium text-gray-700">
                                    {button}
                                </span>
                            );
                        }
                        return (
                            <button key={index} onClick={() => handlePageClick(button)}
                                className={`flex items-center justify-center px-2 py-0 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-full hover:bg-gray-200 transition duration-300 ease-in-out ${button === currentPage ? 'bg-yellow-400 font-bold' : ''}`}>
                                {button}
                            </button>
                        );
                    })}

                    <button onClick={() => handlePageClick(currentPage + 1)} disabled={currentPage === totalPages}
                        className={`flex items-center justify-center px-2 py-0 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-full hover:bg-gray-200 transition duration-300 ease-in-out ${currentPage === totalPages ? 'cursor-not-allowed opacity-50' : ''}`}>
                        &gt;
                    </button>

                    <button onClick={() => handlePageClick(totalPages)} disabled={currentPage === totalPages}
                        className={`flex items-center justify-center px-2 py-0 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-full hover:bg-gray-200 transition duration-300 ease-in-out ${currentPage === totalPages ? 'cursor-not-allowed opacity-50' : ''}`}>
                        &raquo;
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Table;
// import React from 'react';
// const Table = ({ companies, currentPage, totalPages, onPageChange, filters }) => {
//     const handlePageClick = (page) => {
//         onPageChange(page);
//     };

//     const filteredData = companies.filter((row) => {
//         const [day, month, year] = row.Date.split('-');
//         const rowDate = new Date(`${year}-${month}-${day}`);
//         const selectedDate = filters.date ? new Date(filters.date) : null;

//         // console.log('Row Date:', rowDate.toDateString(), 'selected Date;', selectedDate ? selectedDate.toDateString() : 'None');
//         return (
//             (!filters.company || row.CompanyName === filters.company) &&
//             (!filters.state || row.State === filters.state) &&
//             (!filters.branch || row.Branch === filters.branch) &&
//             (!filters.priority || row.Priority === filters.priority) &&
//             (!filters.area || row.Area === filters.area) &&
//             (!selectedDate || rowDate.toDateString() === selectedDate.toDateString())
//         );
//     });

//     const getPaginationButtons = (currentPage, totalPages) => {
//         const paginationButtons = [];
//         const maxButtons = 3;

//         let startPage, endPage;

//         if (totalPages <= maxButtons) {
//             startPage = 1;
//             endPage = totalPages;
//         } else {
//             if (currentPage <= Math.ceil(maxButtons / 2)) {
//                 startPage = 1;
//                 endPage = maxButtons;
//             } else if (currentPage + Math.floor(maxButtons / 2) >= totalPages) {
//                 startPage = totalPages - maxButtons + 1;
//                 endPage = totalPages;
//             } else {
//                 startPage = currentPage - Math.floor(maxButtons / 2);
//                 endPage = currentPage + Math.floor(maxButtons / 2);
//             }
//         }

//         for (let i = startPage; i <= endPage; i++) {
//             paginationButtons.push(i);
//         }

//         const finalButtons = [];

//         if (startPage > 1) {
//             finalButtons.push(1);
//             if (startPage > 2) finalButtons.push("...");
//         }

//         paginationButtons.forEach((button) => {
//             finalButtons.push(button);
//         });

//         if (endPage < totalPages) {
//             if (endPage < totalPages - 1) finalButtons.push("...");
//             finalButtons.push(totalPages);
//         }

//         return finalButtons;
//     };

//     return (
//         <div className='border mt-5 p-4 rounded'>
//             <h6 className='mt-4'>Compliance for the period of April 2024 to November 2024</h6>
//             <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-5">
//                 <table className="min-w-full text-sm text-left text-black">
//                     <thead className="text-xs text-black font-semibold">
//                         <tr className="bg-gray-300">
//                             <th scope="col" className="px-4 py-3">S.No</th>
//                             <th scope="col" className="px-4 py-3">Date</th>
//                             <th scope="col" className="px-4 py-3">Company Name</th>
//                             <th scope="col" className="px-4 py-3">State</th>
//                             <th scope="col" className="px-4 py-3">Branch</th>
//                             <th scope="col" className="px-4 py-3">Activity</th>
//                             <th scope="col" className="px-4 py-3">Status</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {filteredData.map((row) => (
//                             <tr key={row.SNO} className="border-b border-gray-300">
//                                 <td className="px-4 py-2">{row.SNO}</td>
//                                 <td className="px-4 py-2">{row.Date}</td>
//                                 <td className="px-4 py-2">
//                                     <div className='flex items-center'>
//                                         <img src={row.logo} alt='' width="30" className='mr-2 rounded-full' />
//                                         <span>{row.CompanyName}</span>
//                                     </div>
//                                 </td>
//                                 <td className="px-4 py-2">{row.State}</td>
//                                 <td className="px-4 py-2">{row.Branch}</td>
//                                 <td className="px-4 py-2">{row.Activity}</td>
//                                 <td className="px-4 py-2">
//                                     <span className={`px-2 py-1 flex items-center justify-center w-32 h-8 text-sm font-semibold leading-tight rounded-full 
//                                          ${row.Status === 'Not Complied' ? 'bg-red-400' : row.Status === 'Partially Complied' ? 'bg-amber-500 ps-7' : row.Status === 'Complied' ? 'bg-green-400' : 'bg-gray-200'}`}>
//                                         {row.Status}
//                                     </span>
//                                 </td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             </div>

//             <div className="flex items-center justify-between mt-4 flex-wrap">
//                 <div className="bg-white px-4 py-2 mb-2">
//                     <label htmlFor="page-select" className="mr-2 text-sm"> Page</label>
//                     <select id="page-select" value={currentPage} onChange={(e) => handlePageClick(Number(e.target.value))} className="border border-gray-300 rounded-md p-1">
//                         {Array.from({ length: totalPages }, (_, index) => (
//                             <option key={index} value={index + 1}>{index + 1}</option>
//                         ))}
//                     </select>
//                     <span className="ml-2 text-sm">of {totalPages}</span>
//                 </div>

//                 <div className="flex items-center space-x-2 mt-2 md:mt-0">
//                     <button onClick={() => handlePageClick(1)} disabled={currentPage === 1}
//                         className={`flex items-center justify-center px-3 py-1 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-full hover:bg-gray-200 transition duration-300 ease-in-out ${currentPage === 1 ? 'cursor-not-allowed opacity-50' : ''}`}>
//                         &laquo;
//                     </button>

//                     <button onClick={() => handlePageClick(currentPage - 1)} disabled={currentPage === 1}
//                         className={`flex items-center justify-center px-3 py-1 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-full hover:bg-gray-200 transition duration-300 ease-in-out ${currentPage === 1 ? 'cursor-not-allowed opacity-50' : ''}`}>
//                         &lt;
//                     </button>

//                     {getPaginationButtons(currentPage, totalPages).map((button, index) => {
//                         if (button === '...') {
//                             return (
//                                 <span key={index} className="px-3 py-1 text-sm font-medium text-gray-700">
//                                     {button}
//                                 </span>
//                             );
//                         }
//                         return (
//                             <button key={index} onClick={() => handlePageClick(button)}
//                                 className={`flex items-center justify-center px-3 py-1 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-full hover:bg-gray-200 transition duration-300 ease-in-out ${button === currentPage ? 'bg-yellow-400 font-bold' : ''}`}>
//                                 {button}
//                             </button>
//                         );
//                     })}

//                     <button onClick={() => handlePageClick(currentPage + 1)} disabled={currentPage === totalPages}
//                         className={`flex items-center justify-center px-3 py-1 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-full hover:bg-gray-200 transition duration-300 ease-in-out ${currentPage === totalPages ? 'cursor-not-allowed opacity-50' : ''}`}>
//                         &gt;
//                     </button>

//                     <button onClick={() => handlePageClick(totalPages)} disabled={currentPage === totalPages}
//                         className={`flex items-center justify-center px-3 py-1 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-full hover:bg-gray-200 transition duration-300 ease-in-out ${currentPage === totalPages ? 'cursor-not-allowed opacity-50' : ''}`}>
//                         &raquo;
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Table;