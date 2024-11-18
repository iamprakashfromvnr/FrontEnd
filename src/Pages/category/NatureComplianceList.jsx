import React, {useRef, useState} from 'react'
import { HiOutlineDownload } from "react-icons/hi";
import DataTable from 'react-data-table-component';
import { IoIosSearch } from "react-icons/io";
import { PiCaretUpDownFill } from "react-icons/pi";
import NatureColumns from '../../Components/category/NatureColumns';
import NatureDatas from '../../Components/category/NatureDatas';
import { Link } from 'react-router-dom';
import { BsFiletypeCsv, BsFiletypePdf } from 'react-icons/bs';
import  html2pdf  from 'html2pdf.js';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { LuDownload } from 'react-icons/lu';

const NatureComplianceList = () => {
    const [Data] = useState(NatureDatas)
    const pdfref=useRef()
    const [DownMenu,setDownMenu]=useState(false)
    const [search, setSearch] = useState('')
    const filterData = Data.filter((row) => {
        return (
            row.category.toLowerCase().includes(search.toLowerCase())
        );
    })
    const customStyles = {
      rows:{
        style:{
          height:'100%'
        },
      },
      headCells: {
          style: {
            paddingLeft: '0px',
            paddingRight: '60px',
            backgroundColor: '#000',
            color: '#fff',
            fontSize:'12px'
          },
      },
      cells: {
        style: {
          paddingLeft: '0px',
          paddingRight: '80px',
          fontSize:'12px'
        },
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
      link.setAttribute('download', 'Nature of Compliance.csv');
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
  };

  const downloadPDF = () => {
    const element = pdfref.current;
    html2pdf()
        .set({
            margin: 0.5,  
            filename: 'Nature of Compliance.pdf',
            html2canvas: { scale: 2.5, useCORS: true },  // Lower the scale for better alignment
            jsPDF: { unit: 'in', format: 'a4', orientation: 'landscape' }  // Larger page format
        })
        .from(element)
        .save();
};

  return (
    <>

      <div className='flex flex-col justify-center gap-2 items-start lg:flex-row m-5 lg:items-center lg:justify-between'>
        <h2 className='  font-semibold text-lg'>Nature Of Compliance List</h2>
        <div className='flex gap-3'>
        <div className='relative'><button className="bg-primary text-white rounded-full p-2 cursor-pointer" onClick={()=>setDownMenu(!DownMenu)}><LuDownload size={20}  /></button>
                     {DownMenu && <div className='absolute mt-5 lg:right-0 left-0 w-40 h-[80px] rounded-md bg-selectbg  z-30 border border-bordergray'>
                        <span className='flex justify-start gap-5  items-center hover:bg-slate-200  hover:rounded py-2.5 px-2 cursor-pointer' onClick={downloadPDF} ><BsFiletypePdf size={18} />  Download PDF</span>
                        <span className='flex justify-start gap-5  items-center hover:bg-slate-200  hover:rounded py-2.5 px-2 cursor-pointer' onClick={downloadCSV} ><BsFiletypeCsv size={18}/>  Download CSV</span>
                     </div>

                     }
                     </div>
          <Link to="/createnaturecompliance"><button className=' py-2 w-56  rounded-md text-white bg-primary' >Create Nature Of Compliance </button></Link> 
        </div>
      </div>

      <div className='relative -z-50 items-center'>
        <input type='text' className='m-5 focus-visible focus-visible:outline-none w-44  mt-2 bg-white border text-md text-black border-bordergray  px-7 py-2 rounded-md placeholder:text-black ' placeholder='Search' onChange={(e) => setSearch(e.target.value)} ></input>
        <div className='absolute inset-y-0 top-4 left-6 text-gray'>
          <IoIosSearch size={25} className='text-slate-300' />
        </div>
      </div>

      <div className='p-5'ref={pdfref}>
        <DataTable
        className='pb-10'
          columns={NatureColumns}  
          selectableRows  
          data={filterData}  highlightOnHover
           sortIcon={<PiCaretUpDownFill style={{ color: 'white' }} />}
           customStyles={customStyles}>
        </DataTable>
      </div>


    </>
  )
}

export default NatureComplianceList
