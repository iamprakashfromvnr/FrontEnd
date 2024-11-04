import React, {useState} from 'react'
import { HiOutlineDownload } from "react-icons/hi";
import DataTable from 'react-data-table-component';
import { IoIosSearch } from "react-icons/io";
import { PiCaretUpDownFill } from "react-icons/pi";
import NatureColumns from '../../Components/category/NatureColumns';
import NatureDatas from '../../Components/category/NatureDatas';
import { Link } from 'react-router-dom';

const NatureComplianceList = () => {
  const [Data] = useState(NatureDatas)
    const [search, setSearch] = useState('')
    const filterData = Data.filter((row) => {
        return (
            row.category.toLowerCase().includes(search.toLowerCase())
        );
    })
    const customStyles = {
      rows:{
        style:{
          minHeight: '60px',
        },
      },
      headCells: {
          style: {
            paddingLeft: '30px',
            paddingRight: '60px',
            backgroundColor: '#000',
            color: '#fff',
            fontSize:'14px'
          },
      },
      cells: {
        style: {
          paddingLeft: '30px',
          paddingRight: '80px',
          fontSize:'14px'
        },
      },
    }
    
    const downloadCSV = () => {
      const csv = NatureDatas.map(row => Object.values(row).join(',')).join('\n');
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
        <h2 className='  font-semibold text-lg'>Nature Of Compliance List</h2>
        <div className='flex gap-3'>
          <HiOutlineDownload onClick={downloadCSV}   className='w-9 h-9 p-2 rounded-full bg-primary text-white' />
          <Link to="/createnaturecompliance"><button className=' py-2 w-56  rounded-md text-white bg-primary' >Create Nature Of Compliance </button></Link> 
        </div>
      </div>

      <div className='relative -z-50 items-center'>
        <input type='text' className='m-5 focus-visible focus-visible:outline-none  mt-2 bg-white border text-md text-black border-bordergray  px-7 py-2 rounded-md ' placeholder='Search' onChange={(e) => setSearch(e.target.value)} ></input>
        <div className='absolute inset-y-0 top-5 left-7 text-gray'>
          <IoIosSearch size={18} />
        </div>
      </div>

      <div className='p-5'>
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
