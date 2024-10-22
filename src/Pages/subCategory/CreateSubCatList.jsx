import React, { useState } from 'react'
import { HiOutlineDownload } from "react-icons/hi";
import DataTable from 'react-data-table-component';
import { IoIosSearch } from "react-icons/io";
import { PiCaretUpDownFill } from "react-icons/pi";
import dbase from '../../Components/subCategory/SubcatData';
import columns from '../../Components/subCategory/createColumns';
import data from '../../Components/subCategory/Datas';
const CreatesubCatList = () => {
    const [Data] = useState(data)
    const [search, setSearch] = useState('')
    const [selectValue,setSelectValue]=useState({Activity:"",LabourAct:"",ActType:"",Frequency:"",Priority:""})

    const filterdata = Data.filter((row) => {
        return (
            (selectValue.Activity ? row.activity=== selectValue.Activity:true)&&     
            (selectValue.ActType ? row.typeofact === selectValue.ActType:true)&&     
            (selectValue.Priority ? row.priority === selectValue.Priority:true)&&     
            (selectValue.Frequency ? row.frequency === selectValue.Frequency:true)&&     
            (row.activity.toLowerCase().includes(search.toLowerCase())||
            row.applicablelabouract.toLowerCase().includes(search.toLowerCase())||
            row.typeofact.toLowerCase().includes(search.toLowerCase())||
            row.frequency.toLowerCase().includes(search.toLowerCase())||
            row.priority.toLowerCase().includes(search.toLowerCase()))  
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
              paddingLeft: '10px',
              paddingRight: '10px',
              backgroundColor: '#000',
              color: '#fff',
              fontSize:'14px'
            }
        },
        cells: {
            style: {
              paddingLeft: '10px',
              paddingRight: '10px',
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
        <div className='p-2'>
            <div className='p-3 lg:p-5'>
                <div className='flex justify-between items-center  mb-2'>
                    <h2 className='font-semibold text-lg'> Create Sub Category</h2>

                    <div className='flex gap-5'>
                        <button><HiOutlineDownload onClick={downloadCSV} className='text-white w-9 h-9 p-2 rounded-full mt-0.5 ' style={{ backgroundColor: '#D7B95F' }} /></button>
                        <button className='p-2  w-36 rounded-md text-white' style={{ backgroundColor: '#D7B95F' }}>Sub Category List</button>
                    </div>
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-10 '>
                    <div className='w-full'>
                        <h4 className='font-semibold mb-3'>Category</h4>
                        <select className=' focus-visible focus-visible:outline-none bg-gray-100 border text-sm border-gray-300 py-2 px-4 w-full rounded-md'>
                            {dbase.map((item) => <option value={item.category}>{item.category}</option>)}
                        </select>

                    </div>
                    <div className='w-full'>
                        <h4 className='font-semibold mb-3'>Sub Category</h4>
                        <input type='text' className=' focus-visible focus-visible:outline-none bg-gray-100 border text-sm border-gray-300  py-2 px-4 w-full rounded-md' placeholder='Enter The Sub Category'></input>

                    </div>
                </div>
            </div>

            <div className='grid grid-cols-1 w-full gap-5 lg:grid-cols-5 lg:w-4/5 px-5 pb-4' >
                    <select className=' focus-visible focus-visible:outline-none  mt-2 bg-gray-100 border text-sm border-gray-300 h-10  px-5 rounded-md w-full' value={selectValue.Activity} onChange={(e)=>setSelectValue({...selectValue,Activity:e.target.value})}>
                        <option value=""> Compliance</option>
                        {data.map((item) => <option value={item.activity}>{item.activity}  </option>)}
                    </select>
                    <select className=' focus-visible focus-visible:outline-none  mt-2 bg-gray-100 border text-sm border-gray-300 h-10  px-5 rounded-md w-full' value={selectValue.ActType} onChange={(e)=>setSelectValue({...selectValue,ActType:e.target.value})}>
                        <option value=""> Type of Act</option>
                        {data.map((item) => <option value={item.typeofact}>{item.typeofact}  </option>)}
                    </select>
                    <select className=' focus-visible focus-visible:outline-none  mt-2 bg-gray-100 border text-sm border-gray-300 h-10  px-5 rounded-md w-full' value={selectValue.Priority} onChange={(e)=>setSelectValue({...selectValue,Priority:e.target.value})}>
                        <option value=""> Priority</option>
                        {data.map((item) => <option value={item.priority}>{item.priority}  </option>)}
                    </select>
                    <select className=' focus-visible focus-visible:outline-none  mt-2 bg-gray-100 border text-sm border-gray-300 h-10  px-5 rounded-md w-full'value={selectValue.Frequency} onChange={(e)=>setSelectValue({...selectValue,Frequency:e.target.value})}>
                        <option value=""> Frequency</option>
                        {data.map((item) => <option value={item.frequency}>{item.frequency}  </option>)}
                    </select>
                <div className=' relative '>
                    <input type='text' className=' focus-visible focus-visible:outline-none w-full   bg-gray-100 border text-md text-black border-gray-300 mt-2 pl-8 py-1.5  rounded-md ' placeholder='Search' onChange={(e) => setSearch(e.target.value)} ></input>
                    <div className='absolute inset-y-0 top-5 left-2.5' style={{ opacity: '0.5' }}>
                        <IoIosSearch size={20} />
                    </div>
                </div>
            </div>
            
            <div className='px-2 -z-50'>
                <DataTable
                    columns={columns} customStyles={customStyles} selectableRows fixedHeaderScrollHeight='100vh'
                    data={filterdata} sortIcon={<PiCaretUpDownFill size={6} style={{ color: 'white' }} />}
                ></DataTable>
            </div>
            <div className='flex justify-center mt-5 gap-5'>
                <button className=' rounded-md border border-black p-1 w-36'>Cancel</button>
                <button className='p-1 w-36 rounded-md text-white' style={{ backgroundColor: '#D7B95F' }}>Save</button>
            </div>
        </div>
   )
}
export default CreatesubCatList
