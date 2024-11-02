import React, { useState } from 'react'
import data from '../../Components/compliancefilling/ConsolidateData'
import columns from '../../Components/compliancefilling/ConsolidateColumns'
import DataTable from 'react-data-table-component'
import { HiOutlineDownload } from "react-icons/hi";
import { FiMail } from "react-icons/fi";
import { PiCaretUpDownFill } from "react-icons/pi";
import { IoIosSearch } from 'react-icons/io';
import { DatePicker } from 'rsuite';
import { BsSliders } from "react-icons/bs";
import { TbReportAnalytics } from "react-icons/tb";
import 'rsuite/dist/rsuite.min.css';
import CustomPage from '../../Components/compliancefilling/CustomPage';
import Dummy from '../../Components/compliancefilling/ScoreDum';
const Consolidate = () => {
    const [Page, setPage] = useState(1)
    const [Itemsperpage] = useState(5)

    const [Percent, setPercent] = useState({
        totalCom: {
            value: 65,
            label: 'totalCom'
        },
        complied: {
            value: 15,
            label: 'complied'
        },
        notComplied: {
            value: 25,
            label: 'notComplied'
        },
        partiallyCom: {
            value: 12,
            label: 'partiallyCom'
        },
        overDue: {
            value: 16,
            label: 'overDue'
        },
    })

    console.log(Percent.overDue.label);

    const [slide, setSlide] = useState(false)
    const [Data] = useState(data)
    const [search, setSearch] = useState('')
    const [selectValue, setSelectValue] = useState({ Company: "", State: '', Status: '', Branch: '', Compliance: '', AssignStaff: '', Priority: '' })
    var filterdata = Data.filter((row) => {
        return (
            (selectValue.Company ? row.company === selectValue.Company : true) &&
            (selectValue.State ? row.state === selectValue.State : true) &&
            (selectValue.Branch ? row.branch === selectValue.Branch : true) &&
            (selectValue.Compliance ? row.compliance === selectValue.Compliance : true) &&
            (selectValue.AssignStaff ? row.assignstaff === selectValue.AssignStaff : true) &&
            (selectValue.Priority ? row.priority === selectValue.Priority : true) &&
            (selectValue.Status ? row.status === selectValue.Status : true) &&
            (row.company.toLowerCase().includes(search.toLowerCase()) ||
                row.state.toLowerCase().includes(search.toLowerCase()) ||
                row.branch.toLowerCase().includes(search.toLowerCase()) ||
                row.compliance.toLowerCase().includes(search.toLowerCase()) ||
                row.assignstaff.toLowerCase().includes(search.toLowerCase()) ||
                row.priority.toLowerCase().includes(search.toLowerCase()))

        )
    });
    const [checkFilter, setCheckFilter] = useState({
        company: true,
        state: true,
        branch: true,
        compliance: true,
        staff: true,
        priority: true,

    })
    const handleCheckBox = (getName) => {
        setCheckFilter({
            ...checkFilter,
            [getName]: !checkFilter[getName]
        })
    }

    const customStyles = {
        rows: {
            style: {
                minHeight: '75px',
            },
        },
        headCells: {
            style: {
                backgroundColor: '#000',
                color: '#fff',
                paddingLeft: '10px',
                fontSize: '14px',
            },
        },
        cells: {
            style: {
                fontSize: '14px',
            },
        },
    }
    const downloadCSV = () => {
        const headers = Object.keys(data[0]);
        const csv = [
            headers.join(','),
            ...data.map(row => Object.values(row).join(','))
        ].join('\n');

        const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.setAttribute('download', 'Factory.csv');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
    const handleMail = () => {
        window.location.href = 'mailto:';
    }

    const totalPages = Math.ceil(filterdata.length / Itemsperpage)
    var filterdata = filterdata.slice((Page - 1) * Itemsperpage, Page * Itemsperpage)


    return (
        <>
            <div className='flex justify-between p-5'>
                <h2 className='font-semibold text-lg '>Consolidated Compliance Filling</h2>
                <div className='flex gap-3'>
                    <button onClick={handleMail} ><FiMail className='rounded-full w-9 h-9 p-2 mt-0.5 text-white' style={{ backgroundColor: '#D7B95F' }} /> </button>
                    <button><HiOutlineDownload onClick={downloadCSV} className='rounded-full w-9 h-9 p-2 mt-0.5 text-white' style={{ backgroundColor: '#D7B95F' }} /> </button>
                </div>
            </div>

            <div className=' flex justify-center lg:justify-start items-center flex-wrap  m-2 gap-3 '>
                <div onClick={(e) => setSelectValue({ ...selectValue, Status: '' })} 
                style={{ width: '245px', height: '150px' }} className=' relative overflow-hidden h-36 pt-1 pe-1 bg-fuchsia-100 rounded-lg border-l-8 border-fuchsia-600  hover:border-4 hover:ps-1 hover:pt-0 hover:pe-0 hover:border-fuchsia-500'>
                    <span className='flex mt-3 items-center font-semibold  text-xl  '><TbReportAnalytics className=' text-white  border bg-fuchsia-500 w-10 h-11  m-2 rounded-lg  ' /> Total Compliance</span>
                    <div className='flex justify-between items-center mt-3 px-2'>
                        <h2 className='font-semibold text-3xl' >{Percent.totalCom.value}</h2>
                        <Dummy percent={(Percent.totalCom.value / Percent.totalCom.value * 100)} things={Percent.totalCom} />
                    </div>
                    <div className=' absolute -top-2 -left-20 bg-purple-400 w-52 h-52 rounded-full bg-opacity-5 overflow-hidden'>
                        <div className='absolute left-24 bottom-20 bg-purple-400 w-52 h-52 rounded-full bg-opacity-10'></div>
                    </div>
                </div>
                <div onClick={(e) => setSelectValue({ ...selectValue, Status: 'Complied' })} 
                style={{ width: '245px', height: '150px' }} className='relative overflow-hidden h-36 pt-1 pe-1 bg-green-100 rounded-lg border-l-8 border-green-600  hover:border-4  hover:ps-1 hover:pt-0 hover:pe-0 hover:border-green-500'>
                    <span className='flex mt-3 items-center font-semibold text-wrap text-xl '><TbReportAnalytics className=' text-white border bg-green-500 w-10 h-11 m-2 rounded-lg ' /> Complied</span>
                    <div className='flex justify-between items-center px-2 mt-3'>
                        <h2 className='font-semibold text-3xl' >{Percent.complied.value}</h2>
                        <Dummy percent={(Percent.complied.value / Percent.totalCom.value * 100).toFixed(1)} things={Percent.complied} />
                    </div>
                    <div className=' absolute -top-2 -left-20 bg-green-400 w-52 h-52 rounded-full bg-opacity-5 overflow-hidden'>
                        <div className='absolute left-24 bottom-20 bg-green-400 w-52 h-52 rounded-full bg-opacity-10'></div>
                    </div>
                    
                </div>
                <div onClick={(e) => setSelectValue({ ...selectValue, Status: 'Not Complied' })} 
                style={{ width: '245px', height: '150px' }} className='relative overflow-hidden h-36 pt-1 pe-1 bg-red-100 rounded-lg border-l-8 border-red-600  hover:border-4  hover:ps-1 hover:pt-0 hover:pe-0 hover:border-red-500'>
                    <span className='flex mt-3 items-center font-semibold text-wrap text-xl '><TbReportAnalytics className=' text-white border bg-red-500 w-10 h-11 m-2 rounded-lg ' /> Not Complied</span>
                    <div className='flex justify-between items-center px-2 mt-3'>
                        <h2 className='font-semibold text-3xl' >{Percent.notComplied.value}</h2>
                        <Dummy percent={(Percent.notComplied.value / Percent.totalCom.value * 100).toFixed(1)} things={Percent.notComplied} />
                    </div>
                    <div className=' absolute -top-2 -left-20 bg-red-400 w-52 h-52 rounded-full bg-opacity-5 overflow-hidden'>
                        <div className='absolute left-24 bottom-20 bg-red-400 w-52 h-52 rounded-full bg-opacity-10'></div>
                    </div>
                    </div>
                <div onClick={(e) => setSelectValue({ ...selectValue, Status: 'Partially Complied' })} 
                style={{ width: '245px', height: '150px' }} className='relative overflow-hidden h-36 pt-1 pe-1 bg-yellow-100 rounded-lg border-l-8 border-yellow-600  hover:border-4  hover:ps-1 hover:pt-0 hover:pe-0 hover:border-yellow-500'>
                    <span className='flex mt-3  items-center font-semibold text-wrap text-xl '><TbReportAnalytics className=' text-white border bg-yellow-500 w-10 h-11 m-2 rounded-lg' /> Partially Complied</span>
                    <div className='flex justify-between items-center px-2 mt-3'>
                        <h2 className='font-semibold text-3xl' >{Percent.partiallyCom.value}</h2>
                        <Dummy percent={(Percent.partiallyCom.value / Percent.totalCom.value * 100).toFixed(1)} things={Percent.partiallyCom} />
                    </div>
                    <div className=' absolute -top-2 -left-20 bg-yellow-400 w-52 h-52 rounded-full bg-opacity-5 overflow-hidden'>
                        <div className='absolute left-24 bottom-20 bg-yellow-400 w-52 h-52 rounded-full bg-opacity-10'></div>
                    </div>
                   </div>
                <div onClick={(e) => setSelectValue({ ...selectValue, Status: 'Over Due' })} 
                style={{ width: '245px', height: '150px' }} className='relative overflow-hidden h-36 pt-1 pe-1  bg-orange-100 rounded-lg border-l-8 border-orange-500  hover:border-4  hover:ps-1 hover:pt-0 hover:pe-0 hover:border-orange-500'>
                    <span className='flex mt-3 items-center font-semibold text-wrap text-xl '><TbReportAnalytics className='text-white border bg-orange-500 w-10 h-11 m-2 rounded-lg' /> OverDue</span>
                    <div className='flex justify-between items-center px-2 mt-3'>
                        <h2 className='font-semibold text-3xl' >{Percent.overDue.value}</h2>
                        <Dummy percent={(Percent.overDue.value / Percent.totalCom.value * 100).toFixed(1)} things={Percent.overDue} />
                    </div>
                    <div className=' absolute -top-2 -left-20 bg-orange-400 w-52 h-52 rounded-full bg-opacity-5 overflow-hidden'>
                        <div className='absolute left-24 bottom-20 bg-orange-400 w-52 h-52 rounded-full bg-opacity-10'></div>
                    </div>
                    </div>

            </div>

            <div className='grid grid-cols-1 w-full gap-2 lg:grid-cols-9 px-5 pb-4' >
                {checkFilter.company && <select className='bg-white border border-gray-200  mt-2  text-sm  h-9  px-4 rounded-md w-full' value={selectValue.Company} onChange={(e) => setSelectValue({ ...selectValue, Company: e.target.value })} >
                    <option value=""> Company</option>
                    {data.map((item) => <option value={item.company}>{item.company}  </option>)}
                </select>}
                {checkFilter.state && <select className=' bg-white border border-gray-200 mt-2 text-sm  h-9  px-4 rounded-md w-full' value={selectValue.State} onChange={(e) => setSelectValue({ ...selectValue, State: e.target.value })}>
                    <option value=""> State</option>
                    {data.map((item) => <option value={item.state}>{item.state}  </option>)}
                </select>}
                {checkFilter.branch && <select className=' bg-white border border-gray-200 mt-2  text-sm  h-9  px-4 rounded-md w-full' value={selectValue.Branch} onChange={(e) => setSelectValue({ ...selectValue, Branch: e.target.value })}>
                    <option value=""> Branch</option>
                    {data.map((item) => <option value={item.branch}>{item.branch}  </option>)}
                </select>}
                {checkFilter.compliance && <select className=' bg-white border border-gray-200 mt-2  text-sm  h-9  px-4 rounded-md w-full' value={selectValue.Compliance} onChange={(e) => setSelectValue({ ...selectValue, Compliance: e.target.value })}>
                    <option value=""> Compliance</option>
                    {data.map((item) => <option value={item.compliance}>{item.compliance}  </option>)}
                </select>}
                {checkFilter.staff && <select className=' bg-white border border-gray-200 mt-2  text-sm  h-9  px-4 rounded-md w-full' value={selectValue.AssignStaff} onChange={(e) => setSelectValue({ ...selectValue, AssignStaff: e.target.value })}>
                    <option value="">Staff</option>
                    {data.map((item) => <option value={item.assignstaff}>{item.assignstaff}  </option>)}
                </select>}
                {checkFilter.priority && <select className=' bg-white border border-gray-200 mt-2  text-sm h-9 px-4 rounded-md w-full' value={selectValue.Priority} onChange={(e) => setSelectValue({ ...selectValue, Priority: e.target.value })}>
                    <option value="">Priority</option>
                    {data.map((item) => <option value={item.priority}>{item.priority}  </option>)}
                </select>}

                <DatePicker className=' mt-2  text-sm rounded-md bg- w-full'
                    placeholder="Date Range"
                    block />

                <div className=' relative '>
                    <input type='text' className=' bg-white w-full   text-md text-black border border-gray-200 mt-2 pl-8 py-1.5  rounded-md ' placeholder='Search' onChange={(e) => setSearch(e.target.value)} ></input>
                    <div className='absolute inset-y-0 top-4 left-2.5' >
                        <IoIosSearch size={18} />
                    </div>
                </div>
                <div className='relative'>
                    <button className=' bg-white shadow-sm  p-2 w-9 h-9 mt-2  border text-md rounded-lg'> <BsSliders size={20} onClick={() => setSlide(!slide)} /></button>
                    {slide && (
                        <div className='absolute bg-white shadow-lg border z-20 top-15 py-2 px-3 rounded'>
                            <input className='me-2 accent-black' type='checkbox' checked={checkFilter.company} onChange={() => handleCheckBox('company')} id='company' />
                            <label htmlFor="company">Company</label><br />
                            <input className='me-2 accent-black' type='checkbox' checked={checkFilter.state} onChange={() => handleCheckBox('state')} id='state' />
                            <label htmlFor="state">State</label><br />
                            <input className='me-2 accent-black' type='checkbox' checked={checkFilter.branch} onChange={() => handleCheckBox('branch')} id='branch' />
                            <label htmlFor="branch">Branch</label><br />
                            <input className='me-2 accent-black' type='checkbox' checked={checkFilter.compliance} onChange={() => handleCheckBox('compliance')} id='compliance' />
                            <label htmlFor="compliance">Compliance</label><br />
                            <input className='me-2 accent-black' type='checkbox' checked={checkFilter.staff} onChange={() => handleCheckBox('staff')} id='staff' />
                            <label htmlFor="staff">Staff</label><br />
                            <input className='me-2 accent-black' type='checkbox' checked={checkFilter.priority} onChange={() => handleCheckBox('priority')} id='priority' />
                            <label htmlFor="priority">Priority</label>
                        </div>
                    )}
                </div>
            </div>
            <DataTable className='p-5'
                columns={columns} selectableRows customStyles={customStyles} sortIcon={<PiCaretUpDownFill style={{ color: 'white' }} />}
                data={filterdata} >
            </DataTable>
            <div className='flex justify-between p-5 '>
                <select className=' bg-white border border-gray-200 mt-2  text-sm h-9 px-4 shadow-md rounded-md w-full lg:w-32'>
                    <option value="">Show Option</option>
                    <option value="">Page 5</option>
                    <option value="">Page 10</option>
                    <option value="">page 15</option>

                </select>
                <CustomPage Page={Page} totalPages={totalPages} onPageChange={(page) => setPage(page)} />
            </div>
        </>
    )
}

export default Consolidate
