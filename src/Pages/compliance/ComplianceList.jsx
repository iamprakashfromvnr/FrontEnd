import React, { useEffect, useState } from 'react'
import { HiOutlineDownload } from "react-icons/hi";
import { IoIosSearch } from "react-icons/io";
import DataTable from 'react-data-table-component';
import { PiCaretUpDownFill } from "react-icons/pi";
import Data from "../../Components/compliance list/data";
import { columns } from "../../Components/compliance list/Columns";
import { Link } from 'react-router-dom';
import { FaSliders } from 'react-icons/fa6';
import CustomPagination from '../../Components/compliance list/CustomPagination';

const ComplianceList = () => {
  const [data] = useState(Data)
  const [search, setSearch] = useState('')
  const [count,setCount]=useState(0)
  const [showMenu, setShowMenu] = useState(false);
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(10)
  const [selectValue, setSelectValue] = useState({
    activity: '',
    formname: '',
    acttype: '',
    priority: '',
    frequency: ''
  });

  const [filters, setFilters] = useState({
    activity: false,
    formname: false,
    acttype: false,
    priority: false,
    frequency: false
  });
const handleCheckboxChange = (filterName) => {
    setFilters({
      ...filters,
      [filterName]: !filters[filterName],
    });
  };
  

  // const [selectValue,setSelectValue]=useState({activity: "",
  //       formname: "",
  //       applicablelaw: "",
  //       acttype: "",
  //       priority: "",
  //       frequency: ""})

  
         
  var filter = Data.filter((row) => {
    return (
      (selectValue.activity ? row.activity === selectValue.activity:true)&&
      (selectValue.formname ? row.formname === selectValue.formname:true)&&
      (selectValue.acttype ? row.acttype === selectValue.acttype:true)&&
      (selectValue.priority ? row.priority === selectValue.priority:true)&&
      (selectValue.frequency ? row.period === selectValue.frequency:true)&&
      (row.activity.toLowerCase().includes(search.toLowerCase())||row.formname.toLowerCase().includes(search.toLowerCase())||
      row.applicablelaw.toLowerCase().includes(search.toLowerCase())||row.acttype.toLowerCase().includes(search.toLowerCase())||
      row.duedate.toLowerCase().includes(search.toLowerCase())||row.period.toLowerCase().includes(search.toLowerCase())||
      row.section.toLowerCase().includes(search.toLowerCase())||row.priority.toLowerCase().includes(search.toLowerCase()))
    );
  })
  
  const totalPages = Math.ceil(filter.length / itemsPerPage)
  var filter = filter.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
  useEffect(()=>{setCount(selectValue.length)},[selectValue])
  const customStyles = {
    rows: {
      style: {
        minHeight: '55px',
      },
    },
    headCells: {
      style: {
        backgroundColor: '#000',
        color: '#fff',

      }
    },
    cells: {
      style: {
        overflowWrap: 'break-word'
    //     paddingLeft: '30px',
    //     paddingRight: '80px',
    //     fontSize:'14px'
      }
    },
  }
  const downloadCSV = () => {
    const csv = data.map(row => Object.values(row).join(',')).join('\n');
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.setAttribute('download', 'Factory.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };



  return (
    <div className='p-2 -z-50'>
      <div className='flex justify-between items-center'>
        <h2 className='font-bold  text-lg'>Compliance List</h2>
        <div className='flex gap-3 items-center'>
          <button><HiOutlineDownload onClick={downloadCSV} className='w-9 h-9 p-2 rounded-full mt-1 bg-primary' color='white' /></button>
          <Link to="/compliance"><button className='py-2 w-44 lg:w-40 rounded-md text-white bg-primary'>Create Compliance</button> </Link>
        </div>
      </div>

      <div className='relative py-6 flex justify-start items-center flex-wrap gap-4 mb-4'>
        {filters.activity&&(<select  className='w-full lg:w-40 bg-selectbg py-2 px-4 rounded-md border border-bordergray' value={selectValue.activity} onChange={(e)=>setSelectValue({...selectValue,activity:e.target.value}) }>
          <option value="">Actiivity</option>
          {Data.map((item)=><option value={item.activity}>{item.activity}</option>)}
        </select>)}
        {filters.formname&&(
        <select  className='w-full lg:w-40 bg-selectbg py-2 px-4 rounded-md border border-bordergray'value={selectValue.formname} onChange={(e)=>setSelectValue({...selectValue,formname:e.target.value})}>
          <option value="">Name of the form</option>
          {Data.map((item)=><option value={item.formname}>{item.formname}</option>)}
        </select>)}
        {filters.acttype&&(
        <select  className='w-full lg:w-40 bg-selectbg py-2 px-4 rounded-md border border-bordergray'value={selectValue.acttype} onChange={(e)=>setSelectValue({...selectValue,acttype:e.target.value})}>
          <option value="">Type of Act</option>
          {Data.map((item)=><option value={item.acttype}>{item.acttype}</option>)}
        </select>)}
        {filters.priority&&(
        <select  className='w-full lg:w-40 bg-selectbg py-2 px-4 rounded-md border border-bordergray'value={selectValue.priority} onChange={(e)=>setSelectValue({...selectValue,priority:e.target.value})}>
          <option value="">Priority</option>
          {Data.map((item)=><option value={item.priority}>{item.priority}</option>)}
        </select>)}
        {filters.frequency&&(
        <select  className='w-full lg:w-40 bg-selectbg py-2 px-4 rounded-md border border-bordergray'value={selectValue.frequency} onChange={(e)=>setSelectValue({...selectValue,frequency:e.target.value})}>
          <option value="">Frequency</option>
          {Data.map((item)=><option value={item.period}>{item.period}</option>)}
        </select>)}
        <span className='w-full lg:w-40 relative'>
          <input type='text' className=' focus-visible focus-visible:outline-none w-full py-1.5 ps-8 border border-bordergray rounded-md ' placeholder='Search' onChange={(e) => setSearch(e.target.value)} />
          <IoIosSearch className='  absolute top-2 left-2' size={20} />
        </span>
        <span className='relative'>
        <FaSliders size={35} className="p-1.5 bg-white border border-gray-400 rounded-md cursor-pointer" onClick={() => setShowMenu(!showMenu)} />
        <div className='absolute z-30 top-10'>
         {showMenu && (
        <div className='border border-bordergray rounded-md p-4 w-56 bg-white shadow-md'>
          <label >
            <input type='checkbox' checked={filters.activity} onChange={() => handleCheckboxChange('activity')}  className='me-3 accent-black'/>
            Activity
          </label><br/>
          <label>
            <input type='checkbox' checked={filters.formname} onChange={() => handleCheckboxChange('formname')} className='me-3 accent-black'/>
            Name of the Form
          </label><br/>
          <label>
            <input type='checkbox' checked={filters.acttype} onChange={() => handleCheckboxChange('acttype')} className='me-3 accent-black'/>
            Type of Act
          </label><br/>
          <label>
            <input type='checkbox' checked={filters.priority} onChange={() => handleCheckboxChange('priority')} className='me-3 accent-black'/>
            Priority
          </label><br/>
          <label>
            <input type='checkbox' checked={filters.frequency} onChange={() => handleCheckboxChange('frequency')} className='me-3 accent-black'/>
            Frequency
          </label><br/>
        </div>
      )}
      </div>
      </span>
      </div>
      
      <div className='w-auto -z-40'>
       
      <DataTable
        columns={columns} sortIcon={<PiCaretUpDownFill/>}
        data={filter}
        responsive
        selectableRows
        fixedHeader
        highlightOnHover
        customStyles={customStyles} >
      </DataTable>
      </div>
      <div className="py-2 lg:flex lg:justify-between items-center w-auto flex-row justify-center">
                <select value={itemsPerPage} onChange={(e) => setItemsPerPage(e.target.value)}
                    className="p-2 rounded w-24"
                >
                    <option value="10">Show 10</option>
                    <option value="20">Show 20</option>
                    <option value="30">Show 30</option>
                </select>
                <CustomPagination currentPage={currentPage} totalPages={totalPages} onPageChange={(page) => setCurrentPage(page)} />
            </div>

             

    </div>
  )
}
export default ComplianceList;



// import React, { useState } from "react";
// import DataTable from "react-data-table-component";
// import Data from "../../Components/compliance list/data";
// import { columns } from "../../Components/compliance list/Columns";
// import { CiSearch } from "react-icons/ci";
// import { GoDownload } from "react-icons/go";
// import { FaPlus, FaSliders } from "react-icons/fa6";
// import { Link } from "react-router-dom";
// import CustomPagination from "../../Components/compliance list/CustomPagination";

// const ComplianceList = () => {
//   const [tableData] = useState(Data);
//   const [search, setSearch] = useState("");
//   const [filter, setFilter] = useState({
//     activity: "",
//     formname: "",
//     applicablelaw: "",
//     acttype: "",
//     priority: "",
//     frequency: "",
//   });
//   const [currentPage, setCurrentPage] = useState(1);
//   const [itemsPerPage, SetItemsPerPage] = useState(10);
//   var filterData = tableData.filter((item) => {
//     return (
//       (filter.activity ? item.activity === filter.activity : true) &&
//       (filter.formname ? item.formname === filter.formname : true) &&
//       (filter.applicablelaw ? item.applicablelaw === filter.applicablelaw :true) &&
//       (filter.acttype ? item.acttype === filter.acttype : true) &&
//       (filter.priority ? item.priority === filter.priority : true) &&
//       (filter.frequency ? item.period === filter.frequency : true) &&
//       (item.activity.toLowerCase().includes(search.toLowerCase()) ||
//         item.formname.toLowerCase().includes(search.toLowerCase()) ||
//         item.applicablelaw.toLowerCase().includes(search.toLowerCase()) ||
//         item.acttype.toLowerCase().includes(search.toLowerCase()) ||
//         item.priority.toLowerCase().includes(search.toLowerCase()) ||
//         item.period.toLowerCase().includes(search.toLowerCase()))
//     );
//   });
//   const customStyles = {
//     headCells: {
//       style: {
//         backgroundColor: "#000000",
//         color: "white",
//       },
//     },
//     cells: {
//       style: {
//           borderBottom: '1px solid rgba(0,0,0,0.15)',
//           padding: '15px 20px',
//           fontSize: '12px',
//       },
//   },
//   };

//   const totalPages = Math.ceil(filterData.length / itemsPerPage);
//   var filterData = filterData.slice(
//     (currentPage - 1) * itemsPerPage,
//     currentPage * itemsPerPage
//   );
//   const downloadCSV = (data) => {
//     const csv = data.map((row) => Object.values(row).join(",")).join("\n");
//     const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
//     const link = document.createElement("a");
//     link.href = URL.createObjectURL(blob);
//     link.setAttribute("download", "data.csv");
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//   };
//   return (
//     <div className="p-5">
//       <div className="flex justify-between items-center">
//         <h1 className="font-bold text-lg">
//           Compliance List({filterData.length})
//         </h1>
//         <div className="flex gap-3 me-5 items-center">
//           <button className="rounded-full bg-yellow-600 h-9 w-9 text-white ">
//             <GoDownload
//               size={15}
//               className="ms-2.5"
//               onClick={() => downloadCSV(filterData)}
//             />
//           </button>
          
//             <Link to="/compliance" className="rounded-md bg-yellow-600 py-2 w-40 text-white text-center text-sm flex gap-2 items-center px-1">
//               <FaPlus className="text-white mt-1.5 ms-3" size={10} />
//               <span>Add Compliance</span>
//             </Link>
          
//         </div>
//       </div>
//       <div className="flex justify-start items-center gap-2 flex-wrap mt-5">
//         <select
//           onChange={(e) => setFilter({ ...filter, activity: e.target.value })}
//           value={filter.activity}
//           className="w-full px-4 py-2 rounded-md lg:w-fit bg-white border border-gray-400"
//         >
//           <option value="">Activity</option>
//           {Data.map((d) => (
//             <option value={d.activity}>{d.activity}</option>
//           ))}
//         </select>
//         <select
//           onChange={(e) => setFilter({ ...filter, formname: e.target.value })}
//           value={filter.formname}
//           className="w-full px-4 py-2 rounded-md lg:w-fit bg-white border border-gray-400"
//         >
//           <option value="">Form Type</option>
//           {Data.map((d) => (
//             <option value={decodeURIComponent.formname}>{d.formname}</option>
//           ))}
//         </select>
//         <select
//           onChange={(e) =>
//             setFilter({ ...filter, applicablelaw: e.target.value })
//           }
//           value={filter.applicablelaw}
//           className="w-full px-4 py-2 rounded-md lg:w-fit bg-white border border-gray-400"
//         >
//           <option value="">Type of act</option>
//           {Data.map((d) => (
//             <option value={d.applicablelaw}>{d.applicablelaw}</option>
//           ))}
//         </select>
//         <select
//           onChange={(e) => setFilter({ ...filter, priority: e.target.value })}
//           value={filter.priority}
//           className="w-full px-4 py-2 rounded-md lg:w-fit bg-white border border-gray-400"
//         >
//           <option value="">Priority</option>
//           {Data.map((d) => (
//             <option value={d.priority}>{d.priority}</option>
//           ))}
//         </select>
//         <select
//           onChange={(e) => setFilter({ ...filter, frequency: e.target.value })}
//           value={filter.frequency}
//           className="w-full px-4 py-2 rounded-md lg:w-fit bg-white border border-gray-400"
//         >
//           <option value="">Frequency</option>
//           {Data.map((d) => (
//             <option value={d.period}>{d.period}</option>
//           ))}
//         </select>
//         <span className="relative w-full lg:w-fit">
//           <input
//             className="border border-1 border-gray-500 w-full focus-visible:outline-none py-1.5 ps-8 rounded"
//             placeholder="Search"
//             type="text"
//             id="searchreport"
//             name="searchreport"
//             onChange={(e) => setSearch(e.target.value)}
//             value={search}
//           />
//           <CiSearch size={20} className="absolute top-2 left-2" />
//         </span>
        
//          <FaSliders size={35} className="p-1.5 bg-white border border-gray-400 rounded-md" />
//       </div>
//       <br />
//       <div className="-z-20">
//         <DataTable
//           columns={columns}
//           data={filterData}
//           selectableRows
//           fixedHeader
//           responsive
//           highlightOnHover
//           customStyles={customStyles}
//         />
//       </div>
//       <div className="flex justify-between ps-2 pe-20">
//         <select
//           value={itemsPerPage}
//           onChange={(e) => SetItemsPerPage(e.target.value)}
//           className="w-24 h-10 pl-3 bg-white rounded-md border border-gray-500"
//         >
//           <option value="10">Show 10</option>
//           <option value="20">Show 20</option>
//           <option value="30">Show 30</option>
//         </select>
//         <CustomPagination
//           currentPage={currentPage}
//           totalPages={totalPages}
//           onPageChange={(page) => setCurrentPage(page)}
//         />
//       </div>
//       <div className="flex  justify-center">
//         <div>
//           <button className="rounded-md bg-white p-2 text-black text-sm px-8 border border-1 border-black me-4">
//             Cancel
//           </button>
//           <button className="rounded-md bg-yellow-600 p-2 text-white text-sm px-8 ms-2">
//             Save
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ComplianceList;
