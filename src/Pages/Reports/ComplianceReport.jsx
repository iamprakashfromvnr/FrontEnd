import React, { useEffect, useState } from 'react'
import { HiOutlineDownload } from "react-icons/hi";
import { IoIosSearch } from "react-icons/io";
import DataTable from 'react-data-table-component';
import { PiCaretUpDownFill } from "react-icons/pi";
import { Link } from 'react-router-dom';
import { FaSliders } from 'react-icons/fa6';
import CustomPagination from '../../Components/CustomPagination';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { CiMail } from 'react-icons/ci';
import { FiPrinter } from 'react-icons/fi';
import moment from 'moment';
import { MdOutlineCalendarMonth } from 'react-icons/md';
import CompanyData from '../../Components/reports/CompanyDatas';
import { ComplianceColumns } from '../../Components/reports/ComplianceColumns';
import ActionMenu from '../../Components/category/ActionMenu';
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/themes/material_blue.css";

const ComplianceReport = () => {
  const [data] = useState(CompanyData);
  const [startDate, setStartDate] = useState(null);
  const [EndDate, setEndDate] = useState(null);
  const [isDatePickerActive, setIsDatePickerActive] = useState(false);
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
    sno: true,
    companyname: true,
    state: true,
    branch: true,
    activity: true,
    formname: true,
    act: true,
    acttype: true,
    state: true,
    period: true,
    document: true,
    priority: true,
    status: true,
    natureact: false,
    actions: true,
    filtedate: true
  });

  const handleCheckboxChange = (filterName) => {
    setFilters({
      ...filters,
      [filterName]: !filters[filterName],
    });
  };
  var filter = CompanyData.filter((item) => {
    const formattedFiledDate = moment(item.Filed_Date, 'DD-MM-YYYY');
    const dateRangeValid =
      startDate &&
      moment(startDate[0]).isSameOrBefore(formattedFiledDate) &&
      moment(startDate[1]).isSameOrAfter(formattedFiledDate);
    return (
      
      (selectValue.Company_Name ? item.Company_Name === selectValue.Company_Name : true) &&
      (selectValue.Branch ? item.Branch === selectValue.Branch : true) &&
      (selectValue.Activity ? item.Activity === selectValue.Activity : true) &&
      (selectValue.Status ? item.Status === selectValue.Status : true) &&
      (startDate ? dateRangeValid : true) &&
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

  // const filter = CompanyData.filter((item) => {
  //   const formattedFiledDate = startDate && EndDate ? moment(startDate,EndDate).format('DD-MM-YYYY') : '';

  //   return (
  //     (selectValue.Company_Name ? item.Company_Name === selectValue.Company_Name : true) &&
  //     (selectValue.Branch ? item.Branch === selectValue.Branch : true) &&
  //     (selectValue.Activity ? item.Activity === selectValue.Activity : true) &&
  //     (selectValue.Status ? item.Status === selectValue.Status : true) &&
  //     (formattedFiledDate ? item.Filed_Date === formattedFiledDate : true) &&
  //     (item.Company_Name.toLowerCase().includes(search.toLowerCase()) ||
  //       item.Branch.toLowerCase().includes(search.toLowerCase()) ||
  //       item.Activity.toLowerCase().includes(search.toLowerCase()) ||
  //       item.Form_name.toLowerCase().includes(search.toLowerCase()) ||
  //       item.Acts.toLowerCase().includes(search.toLowerCase()) ||
  //       item.ActType.toLowerCase().includes(search.toLowerCase()) ||
  //       item.state.toLowerCase().includes(search.toLowerCase()) ||
  //       item.Filed_Date.toLowerCase().includes(search.toLowerCase()) ||
  //       item.Period.toLowerCase().includes(search.toLowerCase()) ||
  //       item.Document.toLowerCase().includes(search.toLowerCase()) ||
  //       item.Priority.toLowerCase().includes(search.toLowerCase()) ||
  //       item.Status.toLowerCase().includes(search.toLowerCase()))
  //   );
  // });

  const totalPages = Math.ceil(filter.length / itemsPerPage);
  var filter = filter.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

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
  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(totalPages);
    }
  }, [filter, currentPage, totalPages])
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };


  return (
    <div className='p-2 -z-50'>
      <div className='flex flex-col justify-center gap-2 items-start lg:flex-row lg:items-center lg:justify-between'>
        <h2 className='font-semibold text-lg'>Compliance Report</h2>
        <div className='flex gap-3'>
          <button><FiPrinter className='w-9 h-9 p-2 rounded-full mt-1 bg-primary text-white' /></button>
          <button><CiMail className='w-9 h-9 p-2 rounded-full mt-1 bg-primary text-white' /></button>
          <button><HiOutlineDownload onClick={downloadCSV} className='w-9 h-9 p-2 rounded-full mt-1' style={{ backgroundColor: '#D7B95F' }} color='white' /></button>
        </div>
      </div>

      <div className='relative py-6 flex justify-start items-center flex-wrap gap-3 mb-4'>
        {filters.companyname && (
          <select className='w-full lg:w-36 bg-white py-2 px-4 rounded-md border border-bordergray' value={selectValue.Company_Name} onChange={(e) => setSelectValue({ ...selectValue, Company_Name: e.target.value })}>
            <option value="">Company</option>
            {/* {CompanyData.map((item) => <option key={item.Company_Name} value={item.Company_Name}>{item.Company_Name}</option>)} */}
            {[...new Set(CompanyData.map((data) => data.Company_Name))].map((company, index) => (
              <option key={index} value={company}>{company}</option>
            ))}
          </select>

        )}

        {filters.branch && (
          <select className='w-full lg:w-36 bg-white py-2 px-4 rounded-md border border-bordergray' value={selectValue.Branch} onChange={(e) => setSelectValue({ ...selectValue, Branch: e.target.value })}>
            <option value="">Branch</option>
            {[...new Set(CompanyData.map((data) => data.Branch))].map((branch, index) => (
              <option key={index} value={branch}>{branch}</option>
            ))}
          </select>
        )}
        {filters.activity && (
          <select className='w-full lg:w-36 bg-white py-2 px-4 rounded-md border border-bordergray' value={selectValue.Activity} onChange={(e) => setSelectValue({ ...selectValue, Activity: e.target.value })}>
            <option value="">Activity</option>
            {[...new Set(CompanyData.map((data) => data.Activity))].map((activity, index) => (
              <option key={index} value={activity}>{activity}</option>
            ))}
          </select>
        )}
        {filters.status && (
          <select className='w-full lg:w-36 bg-white py-2 px-4 rounded-md border border-bordergray' value={selectValue.Status} onChange={(e) => setSelectValue({ ...selectValue, Status: e.target.value })}>
            <option value="">Status</option>
            {[...new Set(CompanyData.map((data) => data.Status))].map((status, index) => (
              <option key={index} value={status}>{status}</option>
            ))}
          </select>
        )}
        {filters.filtedate && (
          <div className='relative z-20 lg:w-32 w-full bg-white'>
            <Flatpickr
              className='focus-visible focus-visible:outline-none lg:w-32 w-full py-1.5 ps-2 border border-bordergray rounded-md'
              value={startDate}
              onChange={(selectedDates) => {
                if (selectedDates.length === 2) {
                  setStartDate(selectedDates);
                  setSelectValue({
                    ...selectValue,
                    Filed_Date: {
                      start: moment(selectedDates[0]).format('DD-MM-YYYY'),
                      end: moment(selectedDates[1]).format('DD-MM-YYYY'),
                    },
                  });
                } else {
                  setStartDate(null);
                  setSelectValue({
                    ...selectValue,
                    Filed_Date: "",
                  });
                }
              }}
              options={{
                mode: "range",
                dateFormat: "d-m-Y",
                maxDate: "today",
              }}
              placeholder="Date Range"
            />
            {startDate && (
              <button
                className="absolute top-1 right-0.5 bg-white px-2 py-1 rounded text-gray-600 hover:text-red-600"
                onClick={() => {
                  setStartDate(null);
                  handleFilterReset();
                  setSelectValue({
                    ...selectValue,
                    Filed_Date: "",
                  });
                }}
              >
                ✖
              </button>
            )}
            {!startDate && (

              <span className='absolute top-2 right-2'>
                <MdOutlineCalendarMonth size={20} />
              </span>
            )}
          </div>
        )}
        <span className='w-full lg:w-36 relative'>
          <input type='text' className=' focus-visible focus-visible:outline-none w-full py-1.5 ps-8 border border-bordergray rounded-md placeholder:text-black' placeholder='Search' onChange={(e) => setSearch(e.target.value)} />
          <IoIosSearch className='absolute top-1.5 left-2 text-input' size={23} />
        </span>
        <span className='relative'>
          <FaSliders size={35} className="p-1.5 bg-white border border-bordergray rounded-md cursor-pointer" onClick={() => setShowMenu(!showMenu)} />
          <div className='absolute z-30 top-10 lg:-left-44 lg:top-10'>
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
                  <input type='checkbox' checked={filters.filtedate} onChange={() => handleCheckboxChange('filtedate')} className='me-3 accent-black' />
                  Filed Date
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
                  <input type='checkbox' checked={filters.state} onChange={() => handleCheckboxChange('state')} className='me-3 accent-black' />
                  State
                </label><br />
                <label>
                  <input type='checkbox' checked={filters.priority} onChange={() => handleCheckboxChange('priority')} className='me-3 accent-black' />
                  priority
                </label><br />
                <label>
                  <input type='checkbox' checked={filters.status} onChange={() => handleCheckboxChange('status')} className='me-3 accent-black' />
                  Status
                </label><br />
                <label>
                  <input type='checkbox' checked={filters.actions} onChange={() => handleCheckboxChange('actions')} className='me-3 accent-black' />
                  Actions
                </label><br />
              </div>
            )}
          </div>
        </span>
      </div>
      <div className='-z-50 w-auto'>
        <DataTable className='z-0'
          columns={
            [
              {
                name: "Sno",
                selector: row => row.Sno,
                sortable: true,
                width: '100px',
                omit: filters.sno == false
              },
              {
                name: "Company Name",
                selector: row => row.Company_Name,
                sortable: true,
                width: '140px',
                omit: filters.companyname == false
              },
              {
                name: "Branch",
                selector: row => row.Branch,
                sortable: true,
                width: '100px',
                omit: filters.branch == false
              },
              {
                name: "Activity",
                selector: row => row.Activity,
                sortable: true,
                width: '150px',
                omit: filters.activity == false
              },
              {
                name: " Nature of Activity",
                selector: row => row.NatureofActivity,
                sortable: true,
                width: '150px',
                omit: filters.natureact == false
              },
              {
                name: "Name of the Form",
                selector: row => row.Form_name,
                sortable: true,
                omit: filters.formname == false
              },
              {
                name: "Applicable Labour Act",
                cell: (row) => row.Acts,
                sortable: true,
                omit: filters.act == false
              },
              {
                name: "Type of  Act",
                selector: row => row.ActType,
                sortable: true,
                width: '140px',
                omit: filters.acttype == false
              },
              {
                name: "state",
                selector: row => row.state,
                sortable: true,
                width: '120px',
                omit: filters.state == false
              },
              {
                name: "Fild Date",
                selector: row => row.Filed_Date,
                sortable: true,
                width: '100px',
                omit: filters.filtedate == false
              },
              {
                name: "Period",
                selector: row => row.Period,
                sortable: true,
                width: '100px',
                omit: filters.period == false
              },
              {
                name: "Document",
                selector: row => row.Document,
                sortable: true,
                omit: filters.document == false
              },
              {
                name: "Priority",
                selector: row => row.Priority,
                sortable: true,
                width: '100px',
                omit: filters.priority == false
              },
              {
                name: "Status",
                cell: (row) => <p className={`${row.Status === 'Complied' ? 'text-green-600' : row.Status === 'Not Complied' ? 'text-red-600' : 'text-yellow-500'}`}>{row.Status}</p>,
                sortable: true,
                width: '100px',
                omit: filters.status == false
              },
              {
                // name:"Action",
                // selector:row=>row.Action,
                // cell:(row)=><button><SlOptionsVertical/></button>,
                name: 'Actions',
                cell: (row) => (<ActionMenu />),
                ignoreRowClick: true,
                width: '65px',
                omit: filters.actions == false

              }


            ]
          }
          sortIcon={<PiCaretUpDownFill />}
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
        <CustomPagination page={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
      </div>
    </div>
  );
};

export default ComplianceReport;
