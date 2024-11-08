// import React from 'react';
// import "rsuite/dist/rsuite.min.css";
// import { DatePicker } from "rsuite";
// import { CiSearch } from 'react-icons/ci';

// const Search = ({ searchTerm, setSearchTerm, dateRange, setDateRange }) => {
//     const handleDateChange = (date) => {
//         setDateRange([date, date]); 
//     };

//     return (
//         <div className="flex items-center p-5 gap-4 px-2 py-2">
//             <DatePicker 
//                 block 
//                 placeholder="Date Range" 
//                 format="dd-MM-yyyy" 
//                 value={dateRange[0]} 
//                 onChange={handleDateChange}
//             />
//             <div className="flex items-center border rounded-lg px-2 py-2">
//                 <CiSearch className="mr-2" />
//                 <input 
//                     type="text" 
//                     placeholder="Search" 
//                     value={searchTerm}
//                     onChange={(e) => setSearchTerm(e.target.value)} 
//                     className="border-none focus:outline-none" 
//                 />
//             </div>
//         </div>
//     );
// };

// export default Search;





// import React from 'react';
// import "rsuite/dist/rsuite.min.css";
// import { DatePicker } from "rsuite";
// import { CiSearch } from 'react-icons/ci';

// const Search = ({ searchTerm, setSearchTerm}) => {
//     // const handleDateChange = (date) => {
//     //     setDateRange([date, date]); 
//     // };

//     return (
//         <div className="flex flex-col md:flex-row items-center p-5 gap-4 px-2 py-2">
//             <DatePicker 
//                 block 
//                 placeholder="Date Range" 
//                 format="dd-MM-yyyy" 
//                 // value={dateRange[0]} 
//                 // onChange={handleDateChange}
//                 className="w-full md:w-auto"
//             />
//             <div className="flex items-center border rounded-lg px-2 py-2 w-full md:w-auto">
//                 <CiSearch className="mr-2" />
//                 <input 
//                     type="text" 
//                     placeholder="Search" 
//                     value={searchTerm}
//                     onChange={(e) => setSearchTerm(e.target.value)} 
//                     className="border-none focus:outline-none w-full" 
//                 />
//             </div>
//         </div>
//     );
// };

// export default Search;





import React from 'react';
import "rsuite/dist/rsuite.min.css";
import { DatePicker } from "rsuite";
import { CiSearch } from 'react-icons/ci';

const Search = ({ searchTerm, setSearchTerm, startDate, setStartDate }) => {
    return (
        <div className="flex flex-col md:flex-row items-center gap-4 text-black">
            <DatePicker 
                block 
                placeholder="Date Range" 
                format="dd-MM-yyyy" 
                value={startDate} 
                onChange={setStartDate}
                className="w-full md:w-40 placeholder:text-black text-black"
            />
            <div className="flex items-center border border-bordergray px-2 py-1 rounded-lg  w-full md:w-40">
                <CiSearch size={25} className="mr-2" />
                <input 
                    type="text" 
                    placeholder="Search" 
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)} 
                    className="border-none focus:outline-none w-full placeholder:text-black" 
                />
            </div>
        </div>
    );
};

export default Search;