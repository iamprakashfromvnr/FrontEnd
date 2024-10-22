import React, { useEffect, useState } from 'react'
import { HiOutlineDownload } from "react-icons/hi";
import { IoIosSearch } from "react-icons/io";
import DataTable from 'react-data-table-component';
import { PiCaretUpDownFill } from "react-icons/pi";
import { Link } from 'react-router-dom';
import { FaSliders } from 'react-icons/fa6';
import CustomPagination from '../../Components/compliance list/CustomPagination';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { CiMail } from 'react-icons/ci';
import { FiPrinter } from 'react-icons/fi';
import moment from 'moment'; 
import { MdOutlineCalendarMonth } from 'react-icons/md';
import CompanyData from '../../Components/reports/CompanyDatas';
import { ComplianceColumns } from '../../Components/reports/ComplianceColumns';
const ComplianceReport = () => {
  const [data] = useState(CompanyData);
  const [startDate, setStartDate] = useState(null);

  const [search, setSearch] = useState('');
  const [count, setCount] = useState(0);
  const [showMenu, setShowMenu] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [selectValue, setSelectValue] = useState({
    Company_Name: "",
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
    companyname: false,
    branch: false,
    status: false,
    activity: false,
    filtedate: false,
  });

  const handleCheckboxChange = (filterName) => {
    setFilters({
      ...filters,
      [filterName]: !filters[filterName],
    });
  };

  var filter = CompanyData.filter((item) => {
    const formattedFiledDate = startDate ? moment(startDate).format('DD-MM-YYYY') : '';

    return (
      (selectValue.Company_Name ? item.Company_Name === selectValue.Company_Name : true) &&
      (selectValue.Branch ? item.Branch === selectValue.Branch : true) &&
      (selectValue.Activity ? item.Activity === selectValue.Activity : true) &&
      (selectValue.Status ? item.Status === selectValue.Status : true) &&
      (formattedFiledDate ? item.Filed_Date === formattedFiledDate : true) &&
      (item.Company_Name.toLowerCase().includes(search.toLowerCase()) ||
        item.Branch.toLowerCase().includes(search.toLowerCase()) ||
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
        <h2 className='font-semibold text-lg'>Compliance Report</h2>
        <div className='flex gap-3'>
          <button><FiPrinter className='w-9 h-9 p-2 rounded-full mt-1 bg-primary text-white'  /></button>
          <button><CiMail className='w-9 h-9 p-2 rounded-full mt-1 bg-primary text-white'  /></button>
          <button><HiOutlineDownload onClick={downloadCSV} className='w-9 h-9 p-2 rounded-full mt-1' style={{ backgroundColor: '#D7B95F' }} color='white' /></button>
        </div>
      </div>

      <div className='relative py-6 flex justify-start items-center flex-wrap gap-5 mb-4'>
        {filters.companyname && (
          <select className='w-full lg:w-36 bg-selectbg py-2 px-4 rounded-md border border-bordergray' value={selectValue.Company_Name} onChange={(e) => setSelectValue({ ...selectValue, Company_Name: e.target.value })}>
            <option value="">Company</option>
            {CompanyData.map((item) => <option key={item.Company_Name} value={item.Company_Name}>{item.Company_Name}</option>)}
          </select>
        )}
        
        {filters.branch && (
          <select className='w-full lg:w-36 bg-selectbg py-2 px-4 rounded-md border border-bordergray' value={selectValue.Branch} onChange={(e) => setSelectValue({ ...selectValue, Branch: e.target.value })}>
            <option value="">Branch</option>
            {CompanyData.map((item) => <option key={item.Branch} value={item.Branch}>{item.Branch}</option>)}
          </select>
        )}
        {filters.activity && (
          <select className='w-full lg:w-36 bg-selectbg py-2 px-4 rounded-md border border-bordergray' value={selectValue.Activity} onChange={(e) => setSelectValue({ ...selectValue, Activity: e.target.value })}>
            <option value="">Activity</option>
            {CompanyData.map((item) => <option key={item.Activity} value={item.Activity}>{item.Activity}</option>)}
          </select>
        )}
        {filters.status && (
          <select className='w-full lg:w-36 bg-selectbg py-2 px-4 rounded-md border border-bordergray' value={selectValue.Status} onChange={(e) => setSelectValue({ ...selectValue, Status: e.target.value })}>
            <option value="">Status</option>
            {CompanyData.map((item) => <option key={item.Status} value={item.Status}>{item.Status}</option>)}
          </select>
        )}
        {filters.filtedate && (
          <div className='relative lg:w-auto w-96'>
            <DatePicker
              className='focus-visible focus-visible:outline-none lg:w-36 w-96  py-1.5 ps-2 border border-bordergray rounded-md z-50'
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
          <FaSliders size={35} className="p-1.5 bg-white border border-bordergray rounded-md cursor-pointer" onClick={() => setShowMenu(!showMenu)} />
          <div className='absolute z-30 top-10 lg:-left-44 lg:top-10'>
            {showMenu && (
              <div className='border border-gray-300 rounded-md p-4 w-56 bg-white shadow-md'>
                <label>
                  <input type='checkbox' checked={filters.companyname} onChange={() => handleCheckboxChange('companyname')} className='me-3 accent-black' />
                  Company Name
                </label><br />
                <label>
                  <input type='checkbox' checked={filters.branch} onChange={() => handleCheckboxChange('branch')} className='me-3 accent-black' />
                  Branch
                </label><br />
                <label>
                  <input type='checkbox' checked={filters.activity} onChange={() => handleCheckboxChange('activity')} className='me-3 accent-black' />
                  Activity
                </label><br />
                <label>
                  <input type='checkbox' checked={filters.status} onChange={() => handleCheckboxChange('status')} className='me-3 accent-black' />
                  Status
                </label><br />
                <label>
                  <input type='checkbox' checked={filters.filtedate} onChange={() => handleCheckboxChange('filtedate')} className='me-3 accent-black' />
                  Filed Date
                </label><br />
              </div>
            )}
          </div>
        </span>
      </div>
      <div className='-z-50 w-auto'>
      <DataTable className='z-0'
        columns={ComplianceColumns} sortIcon={<PiCaretUpDownFill />}
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

export default ComplianceReport;
