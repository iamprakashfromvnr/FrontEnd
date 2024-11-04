import React, { useState } from 'react'
import { HiOutlineDownload } from "react-icons/hi";
import { IoIosSearch } from "react-icons/io";
import DataTable from 'react-data-table-component';
import { PiCaretUpDownFill } from "react-icons/pi";
import columns from '../../Components/subCategory/SubCatListColumns';
import data from '../../Components/subCategory/SubCatListData';
import { Link } from 'react-router-dom';

const Sublist = () => {
  const [Data] = useState(data)
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
    <div className='p-5 mt-5 '>
      <div className='flex flex-col justify-center gap-2 items-start lg:flex-row lg:items-center lg:justify-between'>
        <h2 className='font-semibold text-lg'>Sub Category List</h2>
        <div className='flex gap-3'>
          <button><HiOutlineDownload onClick={downloadCSV} className='w-9 h-9 p-2 rounded-full bg-primary text-light ' /></button>
          <Link to="/createsubcategory"><button className='py-2 w-44 lg:w-44 rounded-md text-white bg-primary' >Create Sub Category</button> </Link>
        </div>
      </div>

      <div className='py-6 flex justify-start items-center flex-wrap gap-6 mb-4'>
        <select  className='w-full lg:w-56 bg-selectbg py-2 px-4 rounded-md border border-bordergray' value={selectValue.subcategory} onChange={(e)=>setSelectValue({...selectValue,subcategory:e.target.value})}>
          <option value="">Sub Category</option>
          {Data.map((item)=><option value={item.subcategory}>{item.subcategory}</option>)}
        </select>
        <select  className='w-full lg:w-56 bg-selectbg py-2 px-4 rounded-md border border-bordergray'value={selectValue.category} onChange={(e)=>setSelectValue({...selectValue,category:e.target.value})}>
          <option value="">Category</option>
          {Data.map((item)=><option value={item.category}>{item.category}</option>)}
        </select>
        <span className='w-full lg:w-56 bg-selectbg relative'>
          <input type='text' className=' focus-visible focus-visible:outline-none w-full py-1.5 ps-8 border border-bordergray rounded-md ' placeholder='Search' onChange={(e) => setSearch(e.target.value)} />
          <IoIosSearch className='  absolute top-2.5 left-2' size={18} />
        </span>
      </div>


      <DataTable
      className='pb-10'
        columns={columns} sortIcon={<PiCaretUpDownFill/>}
        data={filter}
        selectableRows
        highlightOnHover
        customStyles={customStyles} >
      </DataTable>

    </div>
  )
}
export default Sublist
