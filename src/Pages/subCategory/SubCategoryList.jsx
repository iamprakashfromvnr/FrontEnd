import React, { useRef, useState } from 'react'
import { HiOutlineDownload } from "react-icons/hi";
import { IoIosSearch } from "react-icons/io";
import DataTable from 'react-data-table-component';
import { PiCaretUpDownFill } from "react-icons/pi";
import columns from '../../Components/subCategory/SubCatListColumns';
import data from '../../Components/subCategory/SubCatListData';
import { Link } from 'react-router-dom';
import { LuDownload } from 'react-icons/lu';
import { BsFiletypeCsv, BsFiletypePdf } from 'react-icons/bs';
import  html2pdf  from 'html2pdf.js';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const Sublist = () => {
  const [Data] = useState(data)
  const pdfref=useRef()
  const[DownMenu,setDownMenu]=useState(false)
  const [search, setSearch] = useState('')
  const [selectValue,setSelectValue]=useState({subcategory:"",category:""})
  const filter = Data.filter((row) => {
    return (
      (selectValue.category ? row.category === selectValue.category:true)&&
      (selectValue.subcategory ? row.subcategory === selectValue.subcategory:true)&&
      (row.subcategory.toLowerCase().includes(search.toLowerCase())||row.category.toLowerCase().includes(search.toLowerCase()))
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
        paddingLeft: '30px',
        paddingRight: '60px',
        backgroundColor: '#000',
        color: '#fff',
        fontSize:'14px'
      }
    },
    cells: {
      style: {
        paddingLeft: '30px',
        paddingRight: '80px',
        fontSize:'14px'
      }
    },
  }
  const downloadCSV = () => {
    const headers = Object.keys(filter[0]);
    const csv = [
        headers.join(','),
        ...filter.map(row => Object.values(row).join(','))
    ].join('\n');

    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.setAttribute('download', 'subcategory.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};

const downloadPDF = () => {
  const element = pdfref.current;
  html2pdf()
      .set({
          margin: 0.5,  
          filename: 'subcategory.pdf',
          html2canvas: { scale: 2.5, useCORS: true },  // Lower the scale for better alignment
          jsPDF: { unit: 'mm', format: 'a3', orientation: 'landscape' }  // Larger page format
      })
      .from(element)
      .save();
};


  return (
    <div className='p-5 mt-5 '>
      <div className='flex flex-col justify-center gap-2 items-start lg:flex-row lg:items-center lg:justify-between'>
        <h2 className='font-semibold text-lg'>Sub Category List</h2>
        <div className='flex gap-3'>
         <div className='relative'><button className="bg-primary text-white rounded-full p-2 cursor-pointer" onClick={()=>setDownMenu(!DownMenu)}><LuDownload size={20}  /></button>
         {DownMenu && <div className='absolute mt-5 lg:right-0 left-0 w-40 h-[80px] rounded-md bg-selectbg  z-30 border border-bordergray'>
                        <span className='flex justify-start gap-5  items-center hover:bg-slate-200  hover:rounded py-2.5 px-2 cursor-pointer' onClick={downloadPDF} ><BsFiletypePdf size={18} />  Download PDF</span>
                        <span className='flex justify-start gap-5  items-center hover:bg-slate-200  hover:rounded py-2.5 px-2 cursor-pointer' onClick={downloadCSV} ><BsFiletypeCsv size={18}/>  Download CSV</span>
                     </div>}
          </div>
          <Link to="/createsubcategory"><button className='py-2 w-44 lg:w-44 rounded-md text-white bg-primary' >Create Sub Category</button> </Link>
        </div>
      </div>
      <div className='py-6 flex justify-start items-center flex-wrap gap-6 mb-4'>
        <select  className='w-full lg:w-56 bg-selectbg py-2 px-4 rounded-md border border-bordergray' value={selectValue.subcategory} onChange={(e)=>setSelectValue({...selectValue,subcategory:e.target.value})}>
          <option value="">Sub Category</option>
          {[...new Set(Data.map((data) => data.subcategory))].map((subcategory, index) => (
              <option key={index} value={subcategory}>{subcategory}</option>
            ))}
          {/* {Data.map((item)=><option value={item.subcategory}>{item.subcategory}</option>)} */}
        </select>
        <select  className='w-full lg:w-56 bg-selectbg py-2 px-4 rounded-md border border-bordergray'value={selectValue.category} onChange={(e)=>setSelectValue({...selectValue,category:e.target.value})}>
          <option value="">Category</option>
          {[...new Set(Data.map((data) => data.category))].map((category, index) => (
              <option key={index} value={category}>{category}</option>
            ))}
          {/* {Data.map((item)=><option value={item.category}>{item.category}</option>)} */}
        </select>
        <span className='w-full lg:w-56 bg-selectbg relative'>
          <input type='text' className=' focus-visible focus-visible:outline-none w-full py-1.5 ps-8 border border-bordergray rounded-md ' placeholder='Search' onChange={(e) => setSearch(e.target.value)} />
          <IoIosSearch className='  absolute top-2.5 left-2' size={18} />
        </span>
      </div>
      <div ref={pdfref}>
      <DataTable
      className='pb-10' 
        columns={columns} sortIcon={<PiCaretUpDownFill/>}
        data={filter}
        selectableRows
        highlightOnHover
        customStyles={customStyles} >
      </DataTable>
      </div>
    </div>
  )
}
export default Sublist
