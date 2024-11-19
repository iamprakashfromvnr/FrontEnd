import { HiOutlineDownload } from "react-icons/hi";
import React, { useRef, useState } from 'react'
import { IoIosSearch } from "react-icons/io";
import DataTable from 'react-data-table-component';
import { PiCaretUpDownFill } from "react-icons/pi";
import data from "../../Components/category/Datas";
import columns from "../../Components/category/Columns";
import { Link } from "react-router-dom";
import { BsFiletypeCsv, BsFiletypePdf } from "react-icons/bs";
import  html2pdf  from "html2pdf.js";

const CategoryList = () => {
  const [Data] = useState(data)
  const pdfref=useRef();
  const [DownloadMenu, setDownloadMenu] = useState(false)
  const [search, setSearch] = useState('')
  const filterData = Data.filter((row) => {
    return (
      row.category.toLowerCase().includes(search.toLowerCase())
    );
  })
  const customStyles = {
    rows: {
      style: {
        minHeight: '55px',
      },
    },
    headCells: {
      style: {
        paddingLeft: '0px',
        paddingRight: '60px',
        backgroundColor: '#000',
        color: '#fff',
        fontSize: '14px'
      }
    },
    cells: {
      style: {
        paddingLeft: '0px',
        paddingRight: '70px',
        fontSize: '14px'
      }
    },
  }

  const downloadCSV = () => {
    const headers = Object.keys(filterData[0]);
    const csv = [
        headers.join(','),
        ...filterData.map(row => Object.values(row).join(','))
    ].join('\n');
  
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.setAttribute('download', 'categorylist.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  
  const downloadPDF = () => {
    const element = pdfref.current;
    html2pdf()
        .set({
            // margin:5,  
            filename: 'companywisereport.pdf',
            html2canvas: { scale: 5 },  // Lower the scale for better alignment
            jsPDF: { unit: 'mm', format: 'a2', orientation: 'landscape' }  // Larger page format
        })
        .from(element)
        .save();
    };
  return (
    <>
      <div className='flex flex-col justify-center gap-2 items-start lg:flex-row m-5 lg:items-center lg:justify-between'>
        <h2 className='font-semibold text-lg'>Category List</h2>
        <div className='flex gap-3 items-center'>
          <div className='relative'><button className="bg-primary text-white rounded-full p-2 cursor-pointer" onClick={() => setDownloadMenu(!DownloadMenu)}><HiOutlineDownload size={20} /></button>
            {DownloadMenu && <div className='absolute mt-5 lg:right-0 left-0 w-40 h-[80px] rounded-md bg-selectbg  z-30 border border-bordergray'>
              <span className='flex justify-start gap-5  items-center hover:bg-slate-200  hover:rounded py-2.5 px-2 cursor-pointer' onClick={downloadPDF} ><BsFiletypePdf size={18} />  Download PDF</span>
              <span className='flex justify-start gap-5  items-center hover:bg-slate-200  hover:rounded py-2.5 px-2 cursor-pointer' onClick={downloadCSV} ><BsFiletypeCsv size={18} />  Download CSV</span>
            </div>}
          </div>
          {/* <HiOutlineDownload onClick={downloadCSV} className='w-9 h-9 p-2 rounded-full bg-primary text-light' /> */}
          <Link to="/category"><button className='py-2 w-36 rounded-md text-white bg-primary'>Create Category</button></Link>
        </div>
      </div>
      <div className='relative'>
        <input type='text' className='m-5 focus-visible focus-visible:outline-none  mt-2 bg-gray-100 border text-md text-black border-bordergray  px-7 py-2 rounded-md placeholder:text-black' placeholder='Search' onChange={(e) => setSearch(e.target.value)}  ></input>
        <div className='absolute inset-y-0 top-4 left-6 ' >
          <IoIosSearch size={25} className="text-slate-400" />
        </div>
      </div>
      <div className='mx-4 mr-7' ref={pdfref}>
        <DataTable
          className="pb-10"
          columns={columns} customStyles={customStyles} selectableRows
          data={filterData} sortIcon={<PiCaretUpDownFill style={{ color: 'white' }} />}>

        </DataTable>


      </div>
    </>
  )
}
export default CategoryList
