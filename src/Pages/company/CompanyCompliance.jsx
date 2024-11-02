import React, { useState } from 'react'
import { LuDownload } from "react-icons/lu";
import { HiOutlineMail } from "react-icons/hi";
import { TbReportAnalytics } from 'react-icons/tb';
import { BsSliders } from "react-icons/bs";
import { IoIosSearch } from 'react-icons/io'
import { Columns } from '../../Components/company/CompanyCompliance/Columns';
import { Data } from '../../Components/company/CompanyCompliance/Data';
import DataTable from 'react-data-table-component';
import Percent from '../../Components/company/CompanyCompliance/Percent';

const CompanyCompliance = () => {
    const [search, setSearch] = useState("")
    const [showMenu, setShowMenu] = useState(false)
    const [tableData] = useState(Data)
    const [filter, setFilter] = useState({
        compliance: '', state: '', branch: '', staff: '', status: '', priority: '',
    })
    const [cards, setCards] = useState({
        totalCom: {
            label: 'Total Compliance',
            value: 65,
        },
        complied: {
            label: 'Complied',
            value: 12,
        },
        notComplied: {
            label: 'Not Complied',
            value: 25,
        },
        partiallyCom: {
            label: 'Partially Complied',
            value: 12,
        },
        overdue: {
            label: 'Over Due',
            value: 16,
        },
    })
    const [checkedFilter, setCheckedFilter] = useState({
        compliance: 'true',
        state: 'true',
        branch: '',
        staff: '',
        priority: '',
    })
    const handleCheckedBox = (filterName) => {
        setCheckedFilter({
            ...checkedFilter,
            [filterName]: !checkedFilter[filterName]
        })
    }
    const filterData = tableData.filter((item) => {
        return (
            (filter.compliance ? item.compliance === filter.compliance : true) &&
            (filter.state ? item.state === filter.state : true) &&
            (filter.branch ? item.branch === filter.branch : true) &&
            (filter.staff ? item.staff === filter.staff : true) &&
            (filter.status ? item.status === filter.status : true) &&
            (filter.priority ? item.priority === filter.priority : true) && (
                item.company.toLowerCase().includes(search.toLowerCase()) ||
                item.state.toLowerCase().includes(search.toLowerCase()) ||
                item.branch.toLowerCase().includes(search.toLowerCase()) ||
                item.staff.toLowerCase().includes(search.toLowerCase()) ||
                item.priority.toLowerCase().includes(search.toLowerCase()))
        );
    });
    const customStyles = {
        rows: {
            style: {
                minHeight: '20px',
            },
        },
        headCells: {
            style: {
                backgroundColor: '#000',
                color: '#fff',
                fontSize: '14px',
            },
        },
        cells: {
            style: {
                borderBottom: '1px solid rgba(0,0,0,0.15)',
                fontSize: '14px',
                paddingTop: '10px',
                paddingBottom: '10px',
            },
        },
    };

    return (
        <div className='h-full w-full p-5 shadow-lg'>
            <div className="flex items-center justify-between mb-8">
                <h2 className='text-xl font-bold flex items-center gap-2'><div className='w-10 h-10 bg-blue-900 rounded-full' />Acme Corporation</h2>
                <div className="flex items-center justify-center gap-2">
                    <HiOutlineMail className="bg-yellow-600 text-white rounded-full p-2 cursor-pointer" size={35} />
                    <LuDownload className="bg-yellow-600 text-white rounded-full p-2 cursor-pointer" size={35} />
                </div>
            </div>
            <div className='flex justify-center lg:justify-start gap-3 flex-wrap mb-6'>
                <div className="relative bg-purple-600 border-s-4 border-purple-600 p-4 rounded-md overflow-hidden cursor-pointer text-white"
                    style={{ width: '245px', height: '150px' }} onClick={() => setFilter({ ...filter, status: '' })}>
                    <p className='flex items-center gap-4 h-16'><TbReportAnalytics size={40} className='bg-white text-purple-600 p-1 rounded-md' />
                        <span className='text-xl font-semibold'>{cards.totalCom.label}</span></p>
                    <div className='h-14 flex justify-between items-end'>
                        <span className='text-2xl font-bold'>{cards.totalCom.value}</span>
                        {/* <span className='text-xs'>{(cards.totalCom.value / cards.totalCom.value * 100)}%</span> */}
                        <Percent data={(cards.totalCom.value / cards.totalCom.value * 100)} color={cards.totalCom.label}  />
                    </div>
                    <div className='absolute -top-1 -left-28 w-64 h-64 rounded-full bg-white bg-opacity-10 overflow-hidden'>
                        <div className='absolute -top-32 -right-32 w-64 h-64 rounded-full bg-white bg-opacity-10' />
                    </div>
                </div>
                <div className={`relative bg-green-100 ${filter.status === 'Complied' ? 'border-4 pt-3 pe-3' : 'border-s-4'} border-green-600 p-4 rounded-md overflow-hidden cursor-pointer hover:border-4 hover:pt-3 hover:pe-3`}
                    style={{ width: '245px', height: '150px' }} onClick={() => setFilter({ ...filter, status: 'Complied' })}>
                    <p className='flex items-center gap-4 h-16'><TbReportAnalytics size={40} className='bg-green-600 text-white p-1 rounded-md' />
                        <span className='text-xl font-semibold'>{cards.complied.label}</span></p>
                    <div className='h-14 flex justify-between items-end'>
                        <span className='text-2xl font-bold'>{cards.complied.value}</span>
                        {/* <span className='text-xs'>{(cards.complied.value / cards.totalCom.value * 100).toFixed(1)}%</span> */}
                        <Percent data={(cards.complied.value / cards.totalCom.value * 100).toFixed(1)} color={cards.complied.label} />
                    </div>
                    <div className='absolute -top-1 -left-28 w-64 h-64 rounded-full bg-green-500 bg-opacity-10 overflow-hidden'>
                        <div className='absolute -top-32 -right-32 w-64 h-64 rounded-full bg-green-500 bg-opacity-10' />
                    </div>
                </div>
                <div className={`relative bg-red-100 ${filter.status === 'Not Complied' ? 'border-4 pt-3 pe-3' : 'border-s-4'} border-red-600 p-4 rounded-md overflow-hidden cursor-pointer hover:border-4 hover:pt-3 hover:pe-3`}
                    style={{ width: '245px', height: '150px' }} onClick={() => setFilter({ ...filter, status: 'Not Complied' })}>
                    <p className='flex items-center gap-4 h-16'><TbReportAnalytics size={40} className='bg-red-600 text-white p-1 rounded' />
                        <span className='text-xl font-semibold'>{cards.notComplied.label}</span></p>
                    <div className='h-14 flex justify-between items-end'>
                        <span className='text-2xl font-bold'>{cards.notComplied.value}</span>
                        {/* <span className='text-xs'>{(cards.notComplied.value / cards.totalCom.value * 100).toFixed(1)}%</span> */}
                        <Percent data={(cards.notComplied.value / cards.totalCom.value * 100).toFixed(1)} color={cards.notComplied.label} />
                    </div>
                    <div className='absolute -top-1 -left-28 w-64 h-64 rounded-full bg-red-400 bg-opacity-10 overflow-hidden'>
                        <div className='absolute -top-32 -right-32 w-64 h-64 rounded-full bg-red-400 bg-opacity-10' />
                    </div>
                </div>
                <div className={`relative bg-yellow-100 ${filter.status === 'Partially Complied' ? 'border-4 pt-3 pe-3' : 'border-s-4'} border-yellow-600 p-4 rounded-md overflow-hidden cursor-pointer hover:border-4 hover:pt-3 hover:pe-3`}
                    style={{ width: '245px', height: '150px' }} onClick={() => setFilter({ ...filter, status: 'Partially Complied' })}>
                    <p className='flex items-center gap-4 h-16'><TbReportAnalytics size={40} className='bg-yellow-600 text-white p-1 rounded' />
                        <span className='text-xl font-semibold'>{cards.partiallyCom.label}</span></p>
                    <div className='h-14 flex justify-between items-end'>
                        <span className='text-2xl font-bold'>{cards.partiallyCom.value}</span>
                        {/* <span className='text-xs'>{(cards.partiallyCom.value / cards.totalCom.value * 100).toFixed(1)}%</span> */}
                        <Percent data={(cards.partiallyCom.value / cards.totalCom.value * 100).toFixed(1)} color={cards.partiallyCom.label} />
                    </div>
                    <div className='absolute -top-1 -left-28 w-64 h-64 rounded-full bg-yellow-400 bg-opacity-10 overflow-hidden'>
                        <div className='absolute -top-32 -right-32 w-64 h-64 rounded-full bg-yellow-400 bg-opacity-10' />
                    </div>
                </div>
                <div className={`relative bg-orange-100 ${filter.status === 'Over Due' ? 'border-4 pt-3 pe-3' : 'border-s-4'} border-orange-600 p-4 rounded-md overflow-hidden cursor-pointer hover:border-4 hover:pt-3 hover:pe-3`}
                    style={{ width: '245px', height: '150px' }} onClick={() => setFilter({ ...filter, status: 'Over Due' })}>
                    <p className='flex items-center gap-4 h-16'><TbReportAnalytics size={40} className='bg-orange-600 text-white p-1 rounded' />
                        <span className='text-xl font-semibold'>{cards.overdue.label}</span></p>
                    <div className='h-14 flex justify-between items-end'>
                        <span className='text-xl font-bold'>{cards.overdue.value}</span>
                        {/* <span className='text-xs'>{(cards.overdue.value / cards.totalCom.value * 100).toFixed(1)}%</span> */}
                        <Percent data={(cards.overdue.value / cards.totalCom.value * 100).toFixed(1)} color={cards.overdue.label} />
                    </div>
                    <div className='absolute -top-1 -left-28 w-64 h-64 rounded-full bg-orange-400 bg-opacity-10 overflow-hidden'>
                        <div className='absolute -top-32 -right-32 w-64 h-64 rounded-full bg-orange-400 bg-opacity-10' />
                    </div>
                </div>
            </div>
            <div className="flex justify-between items-center flex-wrap gap-2 lg:gap:4">
                <div className="flex items-center gap-4 flex-wrap">
                    {checkedFilter.compliance && <select onChange={(e) => setFilter({ ...filter, compliance: e.target.value })} value={filter.compliance} className='w-full lg:w-40 py-2 px-4 rounded'>
                        <option value="">Compliance</option>
                        {/* {Data.map((data) => <option value={data.compliance}>{data.compliance}</option>)} */}
                        {[...new Set(Data.map((data) => data.compliance))].map((compliance, index) => (
                            <option key={index} value={compliance}>{compliance}</option>
                        ))}
                    </select>}
                    {checkedFilter.state && <select onChange={(e) => setFilter({ ...filter, state: e.target.value })} value={filter.state} className='w-full lg:w-40 py-2 px-4 rounded'>
                        <option value="">State</option>
                        {/* {Data.map((data) => <option value={data.state}>{data.state}</option>)} */}
                        {[...new Set(Data.map((data) => data.state))].map((state, index) => (
                            <option key={index} value={state}>{state}</option>
                        ))}
                    </select>}
                    {checkedFilter.branch && <select onChange={(e) => setFilter({ ...filter, branch: e.target.value })} value={filter.branch} className='w-full lg:w-40 py-2 px-4 rounded'>
                        <option value="">Branch</option>
                        {/* {Data.map((data) => <option value={data.branch}>{data.branch}</option>)} */}
                        {[...new Set(Data.map((data) => data.branch))].map((branch, index) => (
                            <option key={index} value={branch}>{branch}</option>
                        ))}
                    </select>}
                    {checkedFilter.staff && <select onChange={(e) => setFilter({ ...filter, staff: e.target.value })} value={filter.staff} className='w-full lg:w-40 py-2 px-4 rounded'>
                        <option value="">Staff</option>
                        {/* {Data.map((data) => <option value={data.staff}>{data.staff}</option>)} */}
                        {[...new Set(Data.map((data) => data.staff))].map((staff, index) => (
                            <option key={index} value={staff}>{staff}</option>
                        ))}
                    </select>}
                    {checkedFilter.priority && <select onChange={(e) => setFilter({ ...filter, priority: e.target.value })} value={filter.priority} className='w-full lg:w-40 py-2 px-4 rounded'>
                        <option value="">Priority</option>
                        {/* {Data.map((data) => <option value={data.priority}>{data.priority}</option>)} */}
                        {[...new Set(Data.map((data) => data.priority))].map((priority, index) => (
                            <option key={index} value={priority}>{priority}</option>
                        ))}
                    </select>}
                    <span className='w-full lg:w-40 relative'>
                        <input type='text' className='w-full focus-visible focus-visible:outline-none py-1.5 ps-8 border border-gray-300 rounded' placeholder='Search' onChange={(e) => setSearch(e.target.value)} value={search} />
                        <IoIosSearch className='absolute top-2 left-2' size={20} />
                    </span>
                    <div className='border border-gray-300 p-2 rounded cursor-pointer relative'>
                        <BsSliders size={20} onClick={() => setShowMenu(!showMenu)} />
                        {showMenu && (
                            <div className='absolute w-40 z-20 top-10 px-4 py-2 rounded bg-white shadow-md border'>
                                <input className='me-2' type="checkbox" checked={checkedFilter.compliance} onChange={() => handleCheckedBox('compliance')} id='compliance' />
                                <label className='cursor-pointer' htmlFor="compliance">Compliance</label><br />
                                <input className='me-2' type="checkbox" checked={checkedFilter.state} onChange={() => handleCheckedBox('state')} id='state' />
                                <label className='cursor-pointer' htmlFor="state">State</label><br />
                                <input className='me-2' type="checkbox" checked={checkedFilter.branch} onChange={() => handleCheckedBox('branch')} id='branch' />
                                <label className='cursor-pointer' htmlFor="branch">Branch</label><br />
                                <input className='me-2' type="checkbox" checked={checkedFilter.staff} onChange={() => handleCheckedBox('staff')} id='staff' />
                                <label className='cursor-pointer' htmlFor="staff">Staff</label><br />
                                <input className='me-2' type="checkbox" checked={checkedFilter.priority} onChange={() => handleCheckedBox('priority')} id='priority' />
                                <label className='cursor-pointer' htmlFor="priority">Priority</label>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <div className='mt-6'>
                <DataTable columns={Columns} data={filterData} selectableRows customStyles={customStyles} />
            </div>
        </div>
    )
}

export default CompanyCompliance