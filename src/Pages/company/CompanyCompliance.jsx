import React, { useEffect, useState,useRef } from 'react'
import { LuDownload } from "react-icons/lu";
import { HiOutlineMail } from "react-icons/hi";
import { TbReportAnalytics } from 'react-icons/tb';
import { BsFiletypeCsv, BsFiletypePdf, BsSliders } from "react-icons/bs";
import { IoIosSearch } from 'react-icons/io'
import { Columns } from '../../Components/company/CompanyCompliance/Columns';
import { Data } from '../../Components/company/CompanyCompliance/Data';
import DataTable from 'react-data-table-component';
import Percent from '../../Components/company/CompanyCompliance/Percent';
import ENHR from '../../Images/sky.jpg'
import CustomPagination from '../../Components/company/CompanyCompliance/CustomPagination';
import html2pdf from 'html2pdf.js'
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const CompanyCompliance = () => {
    const componentRef = useRef(null);
    const [search, setSearch] = useState("")
    const [showMenu, setShowMenu] = useState(false)
    const [DownMenu,setDownMenu]=useState(false)
    // here we use useState variable.......
    const [tableData] = useState(Data)
    const [filter, setFilter] = useState({
        compliance: '', state: '', branch: '', staff: '', status: '', priority: '',
    })
    const [page, setPage] = useState(1)
    const [itemsPerPage, setItemsPerPage] = useState(10)
    // here we use useState variable.......
    const [cards] = useState({
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
                item.company.toLowerCase().trim().includes(search.toLowerCase()) ||
                item.state.toLowerCase().trim().includes(search.toLowerCase()) ||
                item.branch.toLowerCase().trim().includes(search.toLowerCase()) ||
                item.compliance.toLowerCase().trim().includes(search.toLowerCase()) ||
                item.staff.toLowerCase().trim().includes(search.toLowerCase()) ||
                item.status.toLowerCase().trim().includes(search.toLowerCase()) ||
                item.priority.toLowerCase().trim().includes(search.toLowerCase()))
        );
    });
    const totalPages = Math.ceil(filterData.length / itemsPerPage)
    const pagination = filterData.slice((page - 1) * itemsPerPage, page * itemsPerPage)
    useEffect(() => {
        if (page > totalPages) {
            setPage(totalPages);
        }
    }, [filterData, page, totalPages])
    const handlePageChange = (newPage) => {
        setPage(newPage);
    };
    const customStyles = {
        rows: {
            style: {
                minHeight: '10px',
            },
        },
        headCells: {
            style: {
                backgroundColor: '#000',
                color: '#fff',
                fontSize: '12px',
                width: '100%',
                wordBreak: 'break-word',
                whiteSpace: 'normal',
                padding: '8px 0px',
                // margin:'2px'
            },
        },
        cells: {
            style: {
                // borderBottom: '1px solid rgba(0,0,0,0.15)',
                fontSize: '12px',
                wordWrap: 'break-word',
                whiteSpace: 'normal',
                width:'100%',
                padding:'8px 0px',
                // margin:'2px'
            },
        },
    };
//     const downloadPDF = () => {
//     const element = componentRef.current;
//     html2pdf()
//         .set({
//             margin: 0.5,  // Reduce margin to fit content better
//             filename: 'Compliance_Report.pdf',
//             html2canvas: { scale: 3, useCORS: true },  // Lower the scale for better alignment
//             jsPDF: { unit: 'in', format: 'a3', orientation: 'landscape' }
//         })
//         .from(element)
//         .toPdf()
//         .get('pdf')
//         .then((pdf) => {
//             const totalPages = pdf.internal.getNumberOfPages();
//             for (let i = 1; i <= totalPages; i++) {
//                 pdf.setPage(i);
//                 pdf.setFontSize(10);
//                 pdf.text(`Page ${i} of ${totalPages}`, pdf.internal.pageSize.getWidth() - 1, pdf.internal.pageSize.getHeight() - 0.5);
//             }
//         })
//         .save();
// };

const downloadPDF = () => {
    const element = componentRef.current;
    html2pdf()
        .set({
            margin: 0.5,  
            filename: 'Compliance_Report.pdf',
            html2canvas: { scale: 2.5, useCORS: true },  // Lower the scale for better alignment
            jsPDF: { unit: 'mm', format: 'a3', orientation: 'landscape' }  // Larger page format
        })
        .from(element)
        .save();
};
const downloadCSV = () => {
    const headers = Object.keys(pagination[0]);
    const csv = [
        headers.join(','),
        ...pagination.map(row => Object.values(row).join(','))
    ].join('\n');

    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.setAttribute('download', 'companycompliance.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};

    return (
        <div className='h-full w-full p-5 shadow-lg'>
            <div className="flex items-center justify-between mb-8">
                 <h2 className='text-xl font-bold flex items-center gap-2'><div className='w-10 h-10 bg-blue-900 rounded-full' />Acme Corporation</h2>
                 <div className="flex items-center justify-center gap-2">
                     <HiOutlineMail className="bg-yellow-600 text-white rounded-full p-2 cursor-pointer" size={35}  />
                     <div className='relative'><button className="bg-yellow-600 text-white rounded-full p-2 cursor-pointer" onClick={()=>setDownMenu(!DownMenu)}><LuDownload size={20}  /></button>
                     {DownMenu && <div className='absolute mt-5 right-0 w-40 h-[80px] rounded-md bg-selectbg  z-30 border border-bordergray'>
                        <span className='flex justify-start gap-5  items-center hover:bg-slate-200  hover:rounded py-2.5 px-2 cursor-pointer' onClick={downloadPDF} ><BsFiletypePdf size={18} />  Download PDF</span>
                        <span className='flex justify-start gap-5  items-center hover:bg-slate-200  hover:rounded py-2.5 px-2 cursor-pointer' onClick={downloadCSV} ><BsFiletypeCsv size={18}/>  Download CSV</span>
                     </div>

                     }
                     </div>
                 </div>
             </div>
             <div className='flex  flex-nowrap justify-start gap-3 mb-6 pb-1 overflow-x-scroll'>
                 <div className="relative bg-purple-600 border-s-4 border-purple-600 p-4 rounded-md overflow-hidden cursor-pointer text-white min-w-60 h-[150px]"
                    onClick={() => setFilter({ ...filter, status: '' })}>
                    <p className='flex items-center gap-4 h-16 w-48'><TbReportAnalytics size={40} className='bg-white text-purple-600 p-1 rounded-md' />
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
                <div className={`relative bg-green-100 ${filter.status === 'Complied' ? 'border-4 pt-3 pe-3' : 'border-s-4'} border-green-600 p-4 rounded-md overflow-hidden cursor-pointer hover:border-4 hover:pt-3 hover:pe-3 min-w-60 h-[150px]`}
                     onClick={() => setFilter({ ...filter, status: 'Complied' })}>
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
                <div className={`relative bg-red-100 ${filter.status === 'Not Complied' ? 'border-4 pt-3 pe-3' : 'border-s-4'} border-red-600 p-4 rounded-md overflow-hidden cursor-pointer hover:border-4 hover:pt-3 hover:pe-3 min-w-60 h-[150px]`}
                    onClick={() => setFilter({ ...filter, status: 'Not Complied' })}>
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
                <div className={`relative bg-yellow-100 ${filter.status === 'Partially Complied' ? 'border-4 pt-3 pe-3' : 'border-s-4'} border-yellow-600 p-4 rounded-md overflow-hidden cursor-pointer hover:border-4 hover:pt-3 hover:pe-3 min-w-60 h-[150px]`}
                     onClick={() => setFilter({ ...filter, status: 'Partially Complied' })}>
                    <p className='flex items-center gap-4 h-16'><TbReportAnalytics size={40} className='bg-yellow-600 text-white p-1 rounded' />
                        <span className='text-xl font-semibold w-36 '>{cards.partiallyCom.label}</span></p>
                    <div className='h-14 flex justify-between items-end'>
                        <span className='text-2xl font-bold'>{cards.partiallyCom.value}</span>
                        {/* <span className='text-xs'>{(cards.partiallyCom.value / cards.totalCom.value * 100).toFixed(1)}%</span> */}
                        <Percent data={(cards.partiallyCom.value / cards.totalCom.value * 100).toFixed(1)} color={cards.partiallyCom.label} />
                    </div>
                    <div className='absolute -top-1 -left-28 w-64 h-64 rounded-full bg-yellow-400 bg-opacity-10 overflow-hidden'>
                        <div className='absolute -top-32 -right-32 w-64 h-64 rounded-full bg-yellow-400 bg-opacity-10' />
                    </div>
                </div>
                <div className={`relative bg-orange-100 ${filter.status === 'Over Due' ? 'border-4 pt-3 pe-3' : 'border-s-4'} border-orange-600 p-4 rounded-md overflow-hidden cursor-pointer hover:border-4 hover:pt-3 hover:pe-3 min-w-60 h-[150px]`}
                    onClick={() => setFilter({ ...filter, status: 'Over Due' })}>
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
            <div className='mt-6' ref={componentRef}>
                <DataTable columns={Columns} data={pagination} selectableRows customStyles={customStyles} />
            </div>  
            <div className="text-center flex justify-between items-center px-5 mt-6">
                <div className='flex justify-center items-center gap-2'>
                    Page
                    <select value={itemsPerPage} onChange={(e) => setItemsPerPage(Number(e.target.value))}
                        className='px-2 py-1 rounded bg-white border'>
                        <option value="10">10</option>
                        <option value="20">20</option>
                        <option value="30">30</option>
                    </select>
                    of {totalPages}
                </div>
                <CustomPagination page={page} totalPages={totalPages} onPageChange={handlePageChange} />
            </div>
        </div>
    )
}

export default CompanyCompliance

// import React, { useState } from 'react'
// import { LuDownload } from "react-icons/lu";
// import { HiOutlineMail } from "react-icons/hi";
// import { TbReportAnalytics } from 'react-icons/tb';
// import { BsSliders } from "react-icons/bs";
// import { IoIosSearch } from 'react-icons/io'
// import { Columns } from '../../Components/company/CompanyCompliance/Columns';
// import { Data } from '../../Components/company/CompanyCompliance/Data';
// import DataTable from 'react-data-table-component';
// import Percent from '../../Components/company/CompanyCompliance/Percent';

// const CompanyCompliance = () => {
//     const [search, setSearch] = useState("")
//     const [showMenu, setShowMenu] = useState(false)
//     const [tableData] = useState(Data)
//     const [filter, setFilter] = useState({
//         compliance: '', state: '', branch: '', staff: '', status: '', priority: '',
//     })
//     const [cards, setCards] = useState({
//         totalCom: {
//             label: 'Total Compliance',
//             value: 65,
//         },
//         complied: {
//             label: 'Complied',
//             value: 12,
//         },
//         notComplied: {
//             label: 'Not Complied',
//             value: 25,
//         },
//         partiallyCom: {
//             label: 'Partially Complied',
//             value: 12,
//         },
//         overdue: {
//             label: 'Over Due',
//             value: 16,
//         },
//     })
//     const [checkedFilter, setCheckedFilter] = useState({
//         compliance: 'true',
//         state: 'true',
//         branch: '',
//         staff: '',
//         priority: '',
//     })
//     const handleCheckedBox = (filterName) => {
//         setCheckedFilter({
//             ...checkedFilter,
//             [filterName]: !checkedFilter[filterName]
//         })
//     }
//     const filterData = tableData.filter((item) => {
//         return (
//             (filter.compliance ? item.compliance === filter.compliance : true) &&
//             (filter.state ? item.state === filter.state : true) &&
//             (filter.branch ? item.branch === filter.branch : true) &&
//             (filter.staff ? item.staff === filter.staff : true) &&
//             (filter.status ? item.status === filter.status : true) &&
//             (filter.priority ? item.priority === filter.priority : true) && (
//                 item.company.toLowerCase().includes(search.toLowerCase()) ||
//                 item.state.toLowerCase().includes(search.toLowerCase()) ||
//                 item.branch.toLowerCase().includes(search.toLowerCase()) ||
//                 item.staff.toLowerCase().includes(search.toLowerCase()) ||
//                 item.priority.toLowerCase().includes(search.toLowerCase()))
//         );
//     });
//     const customStyles = {
//         rows: {
//             style: {
//                 minHeight: '20px',
//             },
//         },
//         headCells: {
//             style: {
//                 backgroundColor: '#000',
//                 color: '#fff',
//                 fontSize: '14px',
//             },
//         },
//         cells: {
//             style: {
//                 borderBottom: '1px solid rgba(0,0,0,0.15)',
//                 fontSize: '14px',
//                 paddingTop: '10px',
//                 paddingBottom: '10px',
//             },
//         },
//     };

//     return (
//         <div className='h-full w-full p-5 shadow-lg'>
//             <div className="flex items-center justify-between mb-8">
//                 <h2 className='text-xl font-bold flex items-center gap-2'><div className='w-10 h-10 bg-blue-900 rounded-full' />Acme Corporation</h2>
//                 <div className="flex items-center justify-center gap-2">
//                     <HiOutlineMail className="bg-yellow-600 text-white rounded-full p-2 cursor-pointer" size={35} />
//                     <LuDownload className="bg-yellow-600 text-white rounded-full p-2 cursor-pointer" size={35} />
//                 </div>
//             </div>
//             <div className='flex justify-center lg:justify-start gap-3 flex-wrap mb-6'>
//                 <div className="relative bg-purple-600 border-s-4 border-purple-600 p-4 rounded-md overflow-hidden cursor-pointer text-white"
//                     style={{ width: '245px', height: '150px' }} onClick={() => setFilter({ ...filter, status: '' })}>
//                     <p className='flex items-center gap-4 h-16'><TbReportAnalytics size={40} className='bg-white text-purple-600 p-1 rounded-md' />
//                         <span className='text-xl font-semibold'>{cards.totalCom.label}</span></p>
//                     <div className='h-14 flex justify-between items-end'>
//                         <span className='text-2xl font-bold'>{cards.totalCom.value}</span>
//                         {/* <span className='text-xs'>{(cards.totalCom.value / cards.totalCom.value * 100)}%</span> */}
//                         <Percent data={(cards.totalCom.value / cards.totalCom.value * 100)} color={cards.totalCom.label}  />
//                     </div>
//                     <div className='absolute -top-1 -left-28 w-64 h-64 rounded-full bg-white bg-opacity-10 overflow-hidden'>
//                         <div className='absolute -top-32 -right-32 w-64 h-64 rounded-full bg-white bg-opacity-10' />
//                     </div>
//                 </div>
//                 <div className={`relative bg-green-100 ${filter.status === 'Complied' ? 'border-4 pt-3 pe-3' : 'border-s-4'} border-green-600 p-4 rounded-md overflow-hidden cursor-pointer hover:border-4 hover:pt-3 hover:pe-3`}
//                     style={{ width: '245px', height: '150px' }} onClick={() => setFilter({ ...filter, status: 'Complied' })}>
//                     <p className='flex items-center gap-4 h-16'><TbReportAnalytics size={40} className='bg-green-600 text-white p-1 rounded-md' />
//                         <span className='text-xl font-semibold'>{cards.complied.label}</span></p>
//                     <div className='h-14 flex justify-between items-end'>
//                         <span className='text-2xl font-bold'>{cards.complied.value}</span>
//                         {/* <span className='text-xs'>{(cards.complied.value / cards.totalCom.value * 100).toFixed(1)}%</span> */}
//                         <Percent data={(cards.complied.value / cards.totalCom.value * 100).toFixed(1)} color={cards.complied.label} />
//                     </div>
//                     <div className='absolute -top-1 -left-28 w-64 h-64 rounded-full bg-green-500 bg-opacity-10 overflow-hidden'>
//                         <div className='absolute -top-32 -right-32 w-64 h-64 rounded-full bg-green-500 bg-opacity-10' />
//                     </div>
//                 </div>
//                 <div className={`relative bg-red-100 ${filter.status === 'Not Complied' ? 'border-4 pt-3 pe-3' : 'border-s-4'} border-red-600 p-4 rounded-md overflow-hidden cursor-pointer hover:border-4 hover:pt-3 hover:pe-3`}
//                     style={{ width: '245px', height: '150px' }} onClick={() => setFilter({ ...filter, status: 'Not Complied' })}>
//                     <p className='flex items-center gap-4 h-16'><TbReportAnalytics size={40} className='bg-red-600 text-white p-1 rounded' />
//                         <span className='text-xl font-semibold'>{cards.notComplied.label}</span></p>
//                     <div className='h-14 flex justify-between items-end'>
//                         <span className='text-2xl font-bold'>{cards.notComplied.value}</span>
//                         {/* <span className='text-xs'>{(cards.notComplied.value / cards.totalCom.value * 100).toFixed(1)}%</span> */}
//                         <Percent data={(cards.notComplied.value / cards.totalCom.value * 100).toFixed(1)} color={cards.notComplied.label} />
//                     </div>
//                     <div className='absolute -top-1 -left-28 w-64 h-64 rounded-full bg-red-400 bg-opacity-10 overflow-hidden'>
//                         <div className='absolute -top-32 -right-32 w-64 h-64 rounded-full bg-red-400 bg-opacity-10' />
//                     </div>
//                 </div>
//                 <div className={`relative bg-yellow-100 ${filter.status === 'Partially Complied' ? 'border-4 pt-3 pe-3' : 'border-s-4'} border-yellow-600 p-4 rounded-md overflow-hidden cursor-pointer hover:border-4 hover:pt-3 hover:pe-3`}
//                     style={{ width: '245px', height: '150px' }} onClick={() => setFilter({ ...filter, status: 'Partially Complied' })}>
//                     <p className='flex items-center gap-4 h-16'><TbReportAnalytics size={40} className='bg-yellow-600 text-white p-1 rounded' />
//                         <span className='text-xl font-semibold'>{cards.partiallyCom.label}</span></p>
//                     <div className='h-14 flex justify-between items-end'>
//                         <span className='text-2xl font-bold'>{cards.partiallyCom.value}</span>
//                         {/* <span className='text-xs'>{(cards.partiallyCom.value / cards.totalCom.value * 100).toFixed(1)}%</span> */}
//                         <Percent data={(cards.partiallyCom.value / cards.totalCom.value * 100).toFixed(1)} color={cards.partiallyCom.label} />
//                     </div>
//                     <div className='absolute -top-1 -left-28 w-64 h-64 rounded-full bg-yellow-400 bg-opacity-10 overflow-hidden'>
//                         <div className='absolute -top-32 -right-32 w-64 h-64 rounded-full bg-yellow-400 bg-opacity-10' />
//                     </div>
//                 </div>
//                 <div className={`relative bg-orange-100 ${filter.status === 'Over Due' ? 'border-4 pt-3 pe-3' : 'border-s-4'} border-orange-600 p-4 rounded-md overflow-hidden cursor-pointer hover:border-4 hover:pt-3 hover:pe-3`}
//                     style={{ width: '245px', height: '150px' }} onClick={() => setFilter({ ...filter, status: 'Over Due' })}>
//                     <p className='flex items-center gap-4 h-16'><TbReportAnalytics size={40} className='bg-orange-600 text-white p-1 rounded' />
//                         <span className='text-xl font-semibold'>{cards.overdue.label}</span></p>
//                     <div className='h-14 flex justify-between items-end'>
//                         <span className='text-xl font-bold'>{cards.overdue.value}</span>
//                         {/* <span className='text-xs'>{(cards.overdue.value / cards.totalCom.value * 100).toFixed(1)}%</span> */}
//                         <Percent data={(cards.overdue.value / cards.totalCom.value * 100).toFixed(1)} color={cards.overdue.label} />
//                     </div>
//                     <div className='absolute -top-1 -left-28 w-64 h-64 rounded-full bg-orange-400 bg-opacity-10 overflow-hidden'>
//                         <div className='absolute -top-32 -right-32 w-64 h-64 rounded-full bg-orange-400 bg-opacity-10' />
//                     </div>
//                 </div>
//             </div>
//             <div className="flex justify-between items-center flex-wrap gap-2 lg:gap:4">
//                 <div className="flex items-center gap-4 flex-wrap">
//                     {checkedFilter.compliance && <select onChange={(e) => setFilter({ ...filter, compliance: e.target.value })} value={filter.compliance} className='w-full lg:w-40 py-2 px-4 rounded'>
//                         <option value="">Compliance</option>
//                         {/* {Data.map((data) => <option value={data.compliance}>{data.compliance}</option>)} */}
//                         {[...new Set(Data.map((data) => data.compliance))].map((compliance, index) => (
//                             <option key={index} value={compliance}>{compliance}</option>
//                         ))}
//                     </select>}
//                     {checkedFilter.state && <select onChange={(e) => setFilter({ ...filter, state: e.target.value })} value={filter.state} className='w-full lg:w-40 py-2 px-4 rounded'>
//                         <option value="">State</option>
//                         {/* {Data.map((data) => <option value={data.state}>{data.state}</option>)} */}
//                         {[...new Set(Data.map((data) => data.state))].map((state, index) => (
//                             <option key={index} value={state}>{state}</option>
//                         ))}
//                     </select>}
//                     {checkedFilter.branch && <select onChange={(e) => setFilter({ ...filter, branch: e.target.value })} value={filter.branch} className='w-full lg:w-40 py-2 px-4 rounded'>
//                         <option value="">Branch</option>
//                         {/* {Data.map((data) => <option value={data.branch}>{data.branch}</option>)} */}
//                         {[...new Set(Data.map((data) => data.branch))].map((branch, index) => (
//                             <option key={index} value={branch}>{branch}</option>
//                         ))}
//                     </select>}
//                     {checkedFilter.staff && <select onChange={(e) => setFilter({ ...filter, staff: e.target.value })} value={filter.staff} className='w-full lg:w-40 py-2 px-4 rounded'>
//                         <option value="">Staff</option>
//                         {/* {Data.map((data) => <option value={data.staff}>{data.staff}</option>)} */}
//                         {[...new Set(Data.map((data) => data.staff))].map((staff, index) => (
//                             <option key={index} value={staff}>{staff}</option>
//                         ))}
//                     </select>}
//                     {checkedFilter.priority && <select onChange={(e) => setFilter({ ...filter, priority: e.target.value })} value={filter.priority} className='w-full lg:w-40 py-2 px-4 rounded'>
//                         <option value="">Priority</option>
//                         {/* {Data.map((data) => <option value={data.priority}>{data.priority}</option>)} */}
//                         {[...new Set(Data.map((data) => data.priority))].map((priority, index) => (
//                             <option key={index} value={priority}>{priority}</option>
//                         ))}
//                     </select>}
//                     <span className='w-full lg:w-40 relative'>
//                         <input type='text' className='w-full focus-visible focus-visible:outline-none py-1.5 ps-8 border border-gray-300 rounded' placeholder='Search' onChange={(e) => setSearch(e.target.value)} value={search} />
//                         <IoIosSearch className='absolute top-2 left-2' size={20} />
//                     </span>
//                     <div className='border border-gray-300 p-2 rounded cursor-pointer relative'>
//                         <BsSliders size={20} onClick={() => setShowMenu(!showMenu)} />
//                         {showMenu && (
//                             <div className='absolute w-40 z-20 top-10 px-4 py-2 rounded bg-white shadow-md border'>
//                                 <input className='me-2' type="checkbox" checked={checkedFilter.compliance} onChange={() => handleCheckedBox('compliance')} id='compliance' />
//                                 <label className='cursor-pointer' htmlFor="compliance">Compliance</label><br />
//                                 <input className='me-2' type="checkbox" checked={checkedFilter.state} onChange={() => handleCheckedBox('state')} id='state' />
//                                 <label className='cursor-pointer' htmlFor="state">State</label><br />
//                                 <input className='me-2' type="checkbox" checked={checkedFilter.branch} onChange={() => handleCheckedBox('branch')} id='branch' />
//                                 <label className='cursor-pointer' htmlFor="branch">Branch</label><br />
//                                 <input className='me-2' type="checkbox" checked={checkedFilter.staff} onChange={() => handleCheckedBox('staff')} id='staff' />
//                                 <label className='cursor-pointer' htmlFor="staff">Staff</label><br />
//                                 <input className='me-2' type="checkbox" checked={checkedFilter.priority} onChange={() => handleCheckedBox('priority')} id='priority' />
//                                 <label className='cursor-pointer' htmlFor="priority">Priority</label>
//                             </div>
//                         )}
//                     </div>
//                 </div>
//             </div>
//             <div className='mt-6'>
//                 <DataTable columns={Columns} data={filterData} selectableRows customStyles={customStyles} />
//             </div>
//         </div>
//     )
// }

// export default CompanyCompliance