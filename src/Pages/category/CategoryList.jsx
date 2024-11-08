import {HiOutlineDownload } from "react-icons/hi";
import React, { useState } from 'react'
import { IoIosSearch } from "react-icons/io";
import DataTable from 'react-data-table-component';
import { PiCaretUpDownFill } from "react-icons/pi";
import data from "../../Components/category/Datas";
import columns from "../../Components/category/Columns";
import { Link } from "react-router-dom";

const CategoryList = () => {
    const [Data] = useState(data)
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
            fontSize:'14px'
          }
        },
        cells: {
          style: {
            paddingLeft: '0px',
            paddingRight: '70px',
            fontSize:'14px'
          }
        },
      }

        const downloadCSV = () => {
        const csv = Data.map(row => Object.values(row).join(',')).join('\n');
        const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.setAttribute('download', 'Factory.csv');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
    return (
        <>
            <div className='flex flex-col justify-center gap-2 items-start lg:flex-row m-5 lg:items-center lg:justify-between'>
                <h2 className='font-semibold text-lg'>Category List</h2>
                <div className='flex gap-3 items-center'>
                    <HiOutlineDownload onClick={downloadCSV} className='w-9 h-9 p-2 rounded-full bg-primary text-light'/>
                    <Link to="/category"><button className='py-2 w-36 rounded-md text-white bg-primary'>Create Category</button></Link>
                </div>
            </div>
            <div className='relative'>
                <input type='text' className='m-5 focus-visible focus-visible:outline-none  mt-2 bg-gray-100 border text-md text-black border-bordergray  px-7 py-2 rounded-md placeholder:text-black' placeholder='Search' onChange={(e) => setSearch(e.target.value)}  ></input>
                <div className='absolute inset-y-0 top-4 left-6 ' >
                    <IoIosSearch size={25} className="text-slate-400" />
                </div>
            </div>
            <div className='mx-4 mr-7'>
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
