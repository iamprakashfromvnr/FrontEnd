// import React, { useState } from 'react'
// import {CompanyColumns} from '../../Components/reports/CompanyColumns'
// import CompanyData from '../../Components/reports/CompanyDatas'
// import DataTable from 'react-data-table-component'
// import { GoDownload } from 'react-icons/go'
// import { IoMailOutline, IoPrintOutline } from 'react-icons/io5'
// import { CiSearch } from 'react-icons/ci'

// const CompanywiseReport = () => {
//   const[tableData,setTableData]=useState(CompanyData)
//   const [search,setSearch]=useState("")
//   const [filter,setFilter]=useState({Company_Name:"",State:"",Branch:"",Activity:"",Form_name:"",Acts:"",ActType:"",state:"",Filed_Date:"",Period:"",Document:"",priority:"",Status:""})
//   const filterData=tableData.filter((item)=>{
//     return (
//       (filter.Company_Name ? item.Company_Name===filter.Company_Name:true)&&(filter.State ? item.State===filter.State:true)&&(filter.Branch ? item.Branch===filter.Branch:true)&&(filter.Activity ? item.Activity===filter.Activity:true)&&(filter.Status ? item.Status===filter.Status:true)&&(filter.Filed_Date? item.Filed_Date==filter.Filed_Date:true)&&
//       (item.Company_Name.toLowerCase().includes(search.toLowerCase())||item.Branch.toLowerCase().includes(search.toLowerCase())||item.State.toLowerCase().includes(search.toLowerCase())||item.Activity.toLowerCase().includes(search.toLowerCase())||item.Form_name.toLowerCase().includes(search.toLowerCase())||item.Acts.toLowerCase().includes(search.toLowerCase())||item.ActType.toLowerCase().includes(search.toLowerCase())||item.state.toLowerCase().includes(search.toLowerCase())||item.Filed_Date.toLowerCase().includes(search.toLowerCase())||item.Period.toLowerCase().includes(search.toLowerCase())||item.Document.toLowerCase().includes(search.toLowerCase())||item.Priority.toLowerCase().includes(search.toLowerCase())||item.Status.toLowerCase().includes(search.toLowerCase()))
//     );
//   });
//   const downloadCSV=(data)=>{
//     const csv=data.map(row=>Object.values(row).join(',')).join('\n');
//     const blob=new Blob([csv],{type:'text/csv;charset=utf-8;'});
//     const link=document.createElement('a');
//     link.href=URL.createObjectURL(blob);
//     link.setAttribute('download','data.csv');
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//   }
//   const customStyles={
//     headCells:{
//       style:{
//           backgroundColor:'#000000',
//           color:'white',
//       }
//   }
//   } 

//   return (
//     <div className='w-screen h-screen px-10 py-5 '>
//       <div className="flex justify-between ">
//             <h1 className='font-bold text-lg mt-3 ms-3'>Company Wise Report ({filterData.length})</h1>
//             <div className='flex justify-evenly gap-2 me-5 p-3'>
//                 <button className='rounded-full bg-yellow-600 h-8 w-8 text-white '><IoPrintOutline size={17} className='ms-2' /></button>    
//                 <button className='rounded-full bg-yellow-600 h-8 w-8 text-white '><IoMailOutline size={17} className='ms-2' /></button>    
//                 <button className='rounded-full bg-yellow-600 h-8 w-8 text-white ' onClick={()=>downloadCSV(filterData)}><GoDownload size={17} className='ms-2'/></button>    
//             </div>
//       </div>
//       <div className='flex-row  gap-3 xl:flex  mt-5 justify-start mb-3'>
//         <div>
//         <select onChange={(e)=>setFilter({...filter,Company_Name:e.target.value})} value={filter.Company_Name} className='bg-white rounded-lg border border-1 border-gray-500 py-1.5 px-3 text-start w-11/12 xl:w-auto mt-2'>
//           <option value="">Company</option>
//           {CompanyData.map((d)=><option key={d.Sno} value={d.Company_Name}>{d.Company_Name}</option>)}
//         </select>
//         </div>
//         <div>
//         <select onChange={(e)=>setFilter({...filter,State:e.target.value})} value={filter.State} className='bg-white rounded-lg border border-1 border-gray-500 py-1.5 px-3 text-start w-11/12 xl:w-auto mt-2'>
//           <option value="">State</option>
//           {CompanyData.map((d)=><option value={d.State}>{d.State}</option>)}
//         </select>
//         </div>
//         <div>
//         <select onChange={(e)=>setFilter({...filter,Branch:e.target.value})} value={filter.Branch} className='bg-white rounded-lg border border-1 border-gray-500 py-1.5 px-3 text-start w-11/12 xl:w-auto mt-2'>
//           <option value="">Company</option>
//           {CompanyData.map((d)=><option value={d.Branch}>{d.Branch}</option>)}
//         </select>
//         </div>
//         <div>
//         <select onChange={(e)=>setFilter({...filter,Activity:e.target.value})} value={filter.Activity} className='bg-white rounded-lg border border-1 border-gray-500 py-1.5 px-3 text-start w-11/12 xl:w-auto mt-2'>
//           <option value="">Activity</option>
//           {CompanyData.map((d)=><option value={d.Activity}>{d.Activity}</option>)}
//         </select>
//         </div>
//         <div>
//         <select onChange={(e)=>setFilter({...filter,Status:e.target.value})} value={filter.Status} className='bg-white rounded-lg border border-1 border-gray-500 py-1.5 pe-5 pl-3 text-start w-11/12 xl:w-auto mt-2'>
//           <option value="">Status</option>
//           {CompanyData.map((d)=><option value={d.Status}>{d.Status}</option>)}
//         </select>
//         </div>
//         <div className='relative'>
//         <input type="text" value={search} onChange={(e)=>setSearch(e.target.value)} className='bg-white rounded-lg border border-1 border-gray-500  w-11/12 xl:w-auto mt-2 justify-items-end px-2 h-9' placeholder='Search'/>
//         <div className="absolute inset-y-0 right-12 xl:right-2 flex items-center ">
//                 <CiSearch size={15} className='mt-1.5'/>
//               </div>
//         </div>
//         <input type="date" value={filter.Filed_Date} onChange={(e)=>setFilter({...filter,Filed_Date:e.target.value})} className='bg-white rounded-lg border border-1 border-gray-500 text-sm justify-items-end px-2 h-9 w-11/12 xl:w-auto mt-2'/>
//       </div>
//       <DataTable columns={CompanyColumns} data={filterData} pagination selectableRows highlightOnHover customStyles={customStyles} className='table-auto'/>  <br/><br/>
//     </div>
//   )
// }

// export default CompanywiseReport

import React, { useEffect, useState } from 'react'
import { HiOutlineDownload } from "react-icons/hi";
import { IoIosSearch } from "react-icons/io";
import DataTable from 'react-data-table-component';
import { PiCaretUpDownFill } from "react-icons/pi";
import CompanyData from '../../Components/reports/CompanyDatas';
import { Link } from 'react-router-dom';
import { FaSliders } from 'react-icons/fa6';
import CustomPagination from '../../Components/compliance list/CustomPagination';
import { CompanyColumns } from '../../Components/reports/CompanyColumns';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { CiMail } from 'react-icons/ci';
import { FiPrinter } from 'react-icons/fi';
import moment from 'moment'; 
import { MdOutlineCalendarMonth } from 'react-icons/md';
import ActionMenu from '../../Components/compliance list/ActionMenu';
const CompanyWiseReport = () => {
  const [data] = useState(CompanyData);
  const [startDate, setStartDate] = useState(null);

  const [search, setSearch] = useState('');
  const [count, setCount] = useState(0);
  const [showMenu, setShowMenu] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [selectValue, setSelectValue] = useState({
    Company_Name: "",
    State: "",
    Branch: "",
    Activity: "",
    Form_name: "",
    Acts: "",
    ActType: "",
    state: "",
    Filed_Date: "",
    Period: "",
    Document: "",
    priority: "",
    Status: ""
  });

  const [filters, setFilters] = useState({
    sno:true,
    companyname: true,
    state: true,
    branch: true,
    activity: true,
    formname:true,
    act:true,
    acttype:true,
    state2:true,
    filedate:true,
    period:true,
    document:true,
    priority:true,
    status: true,
    natureact:false,
    actions:true,
  });

  const handleCheckboxChange = (filterName) => {
    setFilters({
      ...filters,
      [filterName]: !filters[filterName],
    });
  };

  // Filter the data based on the selected filters
  var filter = CompanyData.filter((item) => {
    const formattedFiledDate = startDate ? moment(startDate).format('DD-MM-YYYY') : '';

    return (
      (selectValue.Company_Name ? item.Company_Name === selectValue.Company_Name : true) &&
      (selectValue.State ? item.State === selectValue.State : true) &&
      (selectValue.Branch ? item.Branch === selectValue.Branch : true) &&
      (selectValue.Activity ? item.Activity === selectValue.Activity : true) &&
      (selectValue.Status ? item.Status === selectValue.Status : true) &&
      (formattedFiledDate ? item.Filed_Date === formattedFiledDate : true) &&
      (item.Company_Name.toLowerCase().includes(search.toLowerCase()) ||
        item.Branch.toLowerCase().includes(search.toLowerCase()) ||
        item.State.toLowerCase().includes(search.toLowerCase()) ||
        item.Activity.toLowerCase().includes(search.toLowerCase()) ||
        item.Form_name.toLowerCase().includes(search.toLowerCase()) ||
        item.Acts.toLowerCase().includes(search.toLowerCase()) ||
        item.ActType.toLowerCase().includes(search.toLowerCase()) ||
        item.state.toLowerCase().includes(search.toLowerCase()) ||
        item.Filed_Date.toLowerCase().includes(search.toLowerCase()) ||
        item.Period.toLowerCase().includes(search.toLowerCase()) ||
        item.Document.toLowerCase().includes(search.toLowerCase()) ||
        item.Priority.toLowerCase().includes(search.toLowerCase()) ||
        item.Status.toLowerCase().includes(search.toLowerCase()))
    );
  });

  const totalPages = Math.ceil(filter.length / itemsPerPage);
  filter = filter.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  useEffect(() => {
    setCount(selectValue.length);
  }, [selectValue]);

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
        overflowWrap: 'break-word',
      }
    },
  };

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
        <h2 className='font-semibold text-lg'>Companywise Report ({filter.length})</h2>
        <div className='flex gap-3'>
          <button><FiPrinter className='w-9 h-9 p-2 rounded-full mt-1 bg-primary text-white'  /></button>
          <button><CiMail className='w-9 h-9 p-2 rounded-full mt-1 bg-primary text-white'  /></button>
          <button><HiOutlineDownload onClick={downloadCSV} className='w-9 h-9 p-2 rounded-full mt-1 bg-primary text-white' /></button>
        </div>
      </div>

      <div className='relative py-6 flex justify-start items-center flex-wrap gap-5 mb-4'>
        {filters.companyname && (
          <select className='w-full lg:w-36 py-2 px-4 rounded-md border border-bordergray bg-selectbg ' value={selectValue.Company_Name} onChange={(e) => setSelectValue({ ...selectValue, Company_Name: e.target.value })}>
            <option value="">Company</option>
            {CompanyData.map((item) => <option key={item.Company_Name} value={item.Company_Name}>{item.Company_Name}</option>)}
          </select>
        )}
        {filters.state && (
          <select className='w-full lg:w-36 py-2 px-4 rounded-md border border-bordergray bg-selectbg ' value={selectValue.State} onChange={(e) => setSelectValue({ ...selectValue, State: e.target.value })}>
            <option value="">State</option>
            {CompanyData.map((item) => <option key={item.State} value={item.State}>{item.State}</option>)}
          </select>
        )}
        {filters.branch && (
          <select className='w-full lg:w-36 py-2 px-4 rounded-md border border-bordergray bg-selectbg ' value={selectValue.Branch} onChange={(e) => setSelectValue({ ...selectValue, Branch: e.target.value })}>
            <option value="">Branch</option>
            {CompanyData.map((item) => <option key={item.Branch} value={item.Branch}>{item.Branch}</option>)}
          </select>
        )}
        {filters.activity && (
          <select className='w-full lg:w-36 py-2 px-4 rounded-md border border-bordergray bg-selectbg ' value={selectValue.Activity} onChange={(e) => setSelectValue({ ...selectValue, Activity: e.target.value })}>
            <option value="">Activity</option>
            {CompanyData.map((item) => <option key={item.Activity} value={item.Activity}>{item.Activity}</option>)}
          </select>
        )}
        {filters.status && (
          <select className='w-full lg:w-36 py-2 px-4 rounded-md border border-bordergray bg-selectbg ' value={selectValue.Status} onChange={(e) => setSelectValue({ ...selectValue, Status: e.target.value })}>
            <option value="">Status</option>
            {CompanyData.map((item) => <option key={item.Status} value={item.Status}>{item.Status}</option>)}
          </select>
        )}
        {filters.filedate && (
          <div className='relative z-20 lg:w-36 w-96'>
            <DatePicker
              className='focus-visible focus-visible:outline-none lg:w-36 w-96 py-1.5 ps-2 border border-bordergray  rounded-md '
              selected={startDate}
              onChange={(date) => {
                setStartDate(date);
                setSelectValue({
                  ...selectValue,
                  Filed_Date: date
                });
              }}
              placeholderText="Select Date"
              dateFormat="dd-MM-yyyy"
            />
            <span className='absolute top-2 right-2'><MdOutlineCalendarMonth size={20}/></span>
            </div>
            
        )}
        <span className='w-full lg:w-36 relative'>
          <input type='text' className=' focus-visible focus-visible:outline-none w-full py-1.5 ps-8 border border-bordergray rounded-md ' placeholder='Search' onChange={(e) => setSearch(e.target.value)} />
          <IoIosSearch className='absolute top-2.5 left-2' size={20} />
        </span>
        <span className='relative'>
          <FaSliders size={35} className="p-1.5 bg-white border border-gray-400 rounded-md cursor-pointer" onClick={() => setShowMenu(!showMenu)} />
          <div className='absolute z-30 lg:-left-44 left-0 top-10'>
            {showMenu && (
              <div className='border border-gray-300 rounded-md p-4 w-56 bg-white shadow-md'>
                 <label>
                  <input type='checkbox' checked={filters.sno} onChange={() => handleCheckboxChange('sno')} className='me-3 accent-black' />
                  S No
                </label><br />
                <label>
                  <input type='checkbox' checked={filters.companyname} onChange={() => handleCheckboxChange('companyname')} className='me-3 accent-black' />
                  Company Name
                </label><br />
                <label>
                  <input type='checkbox' checked={filters.branch} onChange={() => handleCheckboxChange('branch')} className='me-3 accent-black' />
                  Branch
                </label><br />
                <label>
                  <input type='checkbox' checked={filters.state} onChange={() => handleCheckboxChange('state')} className='me-3 accent-black' />
                  State
                </label><br />
                <label>
                  <input type='checkbox' checked={filters.activity} onChange={() => handleCheckboxChange('activity')} className='me-3 accent-black' />
                  Activity
                </label><br />
                <label>
                  <input type='checkbox' checked={filters.natureact} onChange={() => handleCheckboxChange('natureact')} className='me-3 accent-black' />
                  Nature of Activity
                </label><br />
                <label>
                  <input type='checkbox' checked={filters.formname} onChange={() => handleCheckboxChange('formname')} className='me-3 accent-black' />
                  Name of the Form
                </label><br />
                <label>
                  <input type='checkbox' checked={filters.act} onChange={() => handleCheckboxChange('act')} className='me-3 accent-black' />
                  Applicable Labour Act 
                </label><br />
                <label>
                  <input type='checkbox' checked={filters.acttype} onChange={() => handleCheckboxChange('acttype')} className='me-3 accent-black' />
                  Type of Act 
                </label><br />
                <label>
                  <input type='checkbox' checked={filters.state2} onChange={() => handleCheckboxChange('state2')} className='me-3 accent-black' />
                  state
                </label><br />
                <label>
                  <input type='checkbox' checked={filters.filedate} onChange={() => handleCheckboxChange('filedate')} className='me-3 accent-black' />
                  File Date
                </label><br />
                <label>
                  <input type='checkbox' checked={filters.period} onChange={() => handleCheckboxChange('period')} className='me-3 accent-black' />
                  Period
                </label><br />
                <label>
                  <input type='checkbox' checked={filters.document} onChange={() => handleCheckboxChange('document')} className='me-3 accent-black' />
                  Document
                </label><br />
                <label> 
                  <input type='checkbox' checked={filters.status} onChange={() => handleCheckboxChange('status')} className='me-3 accent-black' />
                  Status
                </label><br />
                <label> 
                  <input type='checkbox' checked={filters.actions} onChange={() => handleCheckboxChange('actions')} className='me-3 accent-black' />
                  actions
                </label><br />
              </div>
            )}
          </div>
        </span>
      </div>

      <DataTable 
        columns={
          [
            {
                name:"Sno",
                selector:row=>row.Sno,
                sortable:true,
                width:'100px',
                omit:filters.sno==false,
            },
            {
                name:"Company Name",
                selector:row=>row.Company_Name,
                sortable:true,
                width:'140px',
                omit:filters.companyname==false,
            },
            {
                name:"State",
                selector:row=>row.State,
                sortable:true,
                width:'100px',
                omit:filters.state==false,
            },
            {
                name:"Branch",
                selector:row=>row.Branch,
                sortable:true,
                width:'100px',
                omit:filters.branch==false,
            },
            {
                name:"Activity",
                selector:row=>row.Activity,
                sortable:true,
                width:'150px',
                omit:filters.activity==false,
              },
              {
                name:"Nature of Activity",
                selector:row=>row.NatureofActivity,
                sortable:true,
                width:'100px',
                omit:filters.natureact==false,
            },
            {
                name:"Name of the Form",
                selector:row=>row.Form_name,
                sortable:true,
                omit:filters.formname==false,
            },
            {
                name:"Applicable Labour Act",
                cell:(row)=>row.Acts,
                sortable:true,
                omit:filters.act==false,
            },
            {
                name:"Type of  Act",
                selector:row=>row.ActType,
                sortable:true,
                width:'140px',
                omit:filters.acttype==false,
            },
            {
              name:"state",
                selector:row=>row.state,
                sortable:true,
                width:'120px',
                omit:filters.state2==false,

            },
            {
                name:"Fild Date",
                selector:row=>row.Filed_Date,
                sortable:true,
                width:'100px',
                omit:filters.filedate==false,
            },
            {
                name:"Period",
                selector:row=>row.Period,
                sortable:true,
                width:'100px',
                omit:filters.period==false,
            },
            {
                name:"Document",
                selector:row=>row.Document,
                sortable:true,
                omit:filters.document==false,
            },
            {
                name:"Priority",
                selector:row=>row.Priority,
                sortable:true,
                width:'100px',
                omit:filters.priority==false,
            },
            {
                name:"Status",
                cell:(row)=><p className={`${row.Status ==='Complied' ? 'text-green-600':row.Status==='Not Complied'? 'text-red-600':'text-yellow-500'}`}>{row.Status}</p>,
                sortable:true,
                width:'100px',
                omit:filters.status==false,
            },
            {
                // name:"Action",
                // selector:row=>row.Action,
                // cell:(row)=><button><SlOptionsVertical/></button>,
                name: 'Actions',
                cell:(row)=>(<ActionMenu/>),
                ignoreRowClick:true,
                allowOverflow:true,
                button:true,
                width:'65px',
                omit:filters.actions==false
            }
        
        
        ]
        } sortIcon={<PiCaretUpDownFill />}
        data={filter}
        responsive
        selectableRows
        fixedHeader
        highlightOnHover
        customStyles={customStyles} >
      </DataTable>
      <div className="py-2 lg:flex lg:justify-between items-center w-auto flex-row justify-center">
        <select value={itemsPerPage} onChange={(e) => setItemsPerPage(e.target.value)}
          className="p-2 rounded w-24 items-center justify-center"
        >
          <option value="10">Show 10</option>
          <option value="20">Show 20</option>
          <option value="30">Show 30</option>
        </select>
        <CustomPagination currentPage={currentPage} totalPages={totalPages} onPageChange={(page) => setCurrentPage(page)} />
      </div>
    </div>
  );
};

export default CompanyWiseReport;


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
