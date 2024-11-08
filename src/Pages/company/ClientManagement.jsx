import React, { useEffect, useState } from 'react'
import { CiBoxList, CiGrid41, CiSearch } from 'react-icons/ci'
import { GoDownload, GoPencil } from 'react-icons/go'
import {MdAdd} from "react-icons/md"
import logo from '../../Images/sky.jpg'
import { IoNotificationsOffOutline, IoTrashOutline } from 'react-icons/io5'
import { AiOutlineFileSearch, AiOutlineMail } from 'react-icons/ai'
import DataTable from 'react-data-table-component'
import ActionMenu from '../../Components/company/ActionMenu'
import { Clients } from '../../Components/company/Data'
import { Link, useNavigate } from 'react-router-dom'
const ClientManagement = () => {
    const navigate=useNavigate()
const columns=[
    {
        name:"sno",
        selector:row=>row.sno,
        sortable:true,
        width:'90px',
        grow:1
    },
    {
        name:"Company",
        cell:(row)=>(<span className='flex items-center gap-4 '><img src={logo} className='w-10 h-10 rounded-full'/><p className='text-wrap'>{row.company}</p></span>),
        sortable:true,
        width:'300px'
    },
    {
        name:"Branch",
        selector:row=>row.branches,
        sortable:true,
        width:'200px',
        center:true
        
    },
    {
        name:"Level",
        selector:row=>row.level,
        sortable:true,
        center:true
    
    },
    {
        name:"Action",
        cell:(row)=><ActionMenu row={row}/>,
        ignoreClick:true,
        center:true
        
    }
]
    
const customStyles={
    headCells:{
        style:{
            backgroundColor:'#000000',
            color:'white',
            fontSize:'14px',
            paddingLeft:'30px'
        },
        rows:{
            minHeight:'20px',
        }
    }
}   
    const [Data, setData] = useState(Clients)
    const [search,setSearch]=useState('')
    const [filter,setFilter]=useState({company:"",branches:"",level:""})
    const [filterData,setfilterData]=useState(Data)
    const[view,setView]=useState('grid')
    useEffect(() => {
    const filtered = Data.filter((data) => {
        return (
            (filter.company ? data.company === filter.company : true) &&
            (data.company.toLowerCase().includes(search.toLowerCase()) ||
            data.branches.toLowerCase().includes(search.toLowerCase()) ||
            data.level.toLoswerCase().includes(search.toLowerCase()))
        );
    });
    setfilterData(filtered);
}, [Data, filter, search]);
   const branch=()=>{
    navigate('/clientbranchmanagement')
   }
  return (
    <div className='h-screen'>
      <div className="flex flex-col justify-center gap-2 items-start lg:flex-row lg:items-center lg:justify-between">
            <h1 className='font-bold text-lg mt-3 ms-4'>Client Management({Data.length})</h1>
            <div className='flex justify-evenly items-center gap-3 me-5 p-3'>    
                <GoDownload className='rounded-full bg-primary text-white h-8 w-8 p-1.5' size={15} onClick={()=>window.print()}/>
                <Link to='/company' className='flex rounded-md bg-primary text-white h-8 w-28 justify-center items-center'><MdAdd  size={22}/>Add Client</Link>    
            </div>
      </div>
      
      <div className='flex my-3 justify-between gap-3 p-2 ms-3 items-center flex-wrap'>
        <div className='flex items-center gap-3 flex-wrap'>
          <select className='bg-white rounded-lg border  border-bordergray px-4 h-9 w-full lg:w-44 ' value={filter.company} onChange={(e)=>setFilter({...filter,company:e.target.value})}>
            <option value="">Company</option>
            {Data.map((item)=><option value={item.company}>{item.company}</option>)}
          </select>
          <div className='relative w-full lg:w-44'>
            <input type="text" className='bg-white rounded-lg border  border-bordergray  w-full lg:w-44 py-1.5 ps-8 ' placeholder='Search' value={search} onChange={(e)=>setSearch(e.target.value)}/>
                <CiSearch className='absolute top-1.5 left-2' size={23} />
          </div>
        </div>
        <div className='flex items-start gap-2 me-6'>
            <button onClick={(e)=>setView('grid')} className={`${view ==='grid' ? 'bg-black text-white': 'bg-white text-black'} p-2.5 border-1 border-gray-400 rounded-md `}><CiGrid41 size={17}/></button>
            <button onClick={(e)=>setView('list')}className={`${view === 'list' ? 'bg-black text-white': 'bg-white text-black'} p-2.5 border-1 border-gray-400 rounded-md `}><CiBoxList size={17}/></button>
        </div>
    </div>
    {view==='list'?<div className='w-full p-5'>
      <DataTable columns={columns} data={filterData} customStyles={customStyles} fixedHeader selectableRows/>    
      </div>:
    
    <div className='p-4'>
    {/* <div className={`grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10 xl:grid-cols-4 bg-red-200 ` }> */}
    <div className="flex justify-start gap-10 flex-wrap w-full">

    {filterData.map((data)=>
        // <div className='relative py-8 px-16 rounded-md bg-white items-center' style={{borderLeft:`40px solid ${data.level == 'high' ? 'blue': data.level==='medium'?'green':data.level==='low'?'orange':'white'}`}}>
        <div className='flex items-center border border-bordergray rounded-md bg-white w-min' onClick={branch}>
            <span className={`w-8 h-full  ${data.level == 'high' ? 'bg-highBlue': data.level==='medium'?'bg-medgreen':data.level==='low'?'bg-lowOrange':'bg-white'} text-center text-white flex items-center justify-center rounded-s-md`}>
                <p className='transform -rotate-90 font-bold'>{data.level.toUpperCase()}</p>
            </span>
            <div className='p-3'>
            <div className='flex justify-start gap-4 items-center'>
                <img src={logo} className='rounded-full h-16 w-16'/>
                <div className=''> 
                    <h5 className='font-semibold flex-wrap'>{data.company}</h5>
                    <p className=''>Branches - {data.branches}</p>
                </div>
            </div>
            {/* <h6 className='transform rotate-90 font-bold -left-8 bg-yellow-500 items-center text-white'>{data.level}</h6> */}
        
            <div className='flex gap-3 border-t py-2 w-full mt-3 justify-center'>
                <button className='p-2.5 bg-primary text-white rounded-full'><IoNotificationsOffOutline/></button>
                <button className='p-2.5 bg-primary text-white rounded-full'><AiOutlineMail/></button>
                <button className='p-2.5 bg-primary text-white rounded-full'><GoPencil/></button>
                <button className='p-2.5 bg-primary text-white rounded-full'><IoTrashOutline/></button>
                <button className='p-2.5 bg-primary text-white rounded-full'><AiOutlineFileSearch/></button>
            </div>
            </div>
            {/* <div className='flex'>
                <img src={logo} className='rounded-full h-16 w-16'/>
                <h5 className='font-semibold ms-3 '>{data.company}</h5>
                
            </div>
            <h6 className='absolute transform rotate-90 font-bold -left-8 bg-yellow-500 items-center text-white'>{data.level}</h6>
            <p className='text-start ms-20'>Branches - {data.branches}</p>
            <hr/>
            <div className='flex gap-3'>
                <button className='p-2.5 bg-yellow-300 text-white rounded-full'><IoNotificationsOffOutline/></button>
                <button className='p-2.5 bg-yellow-300 text-white rounded-full'><AiOutlineMail/></button>
                <button className='p-2.5 bg-yellow-300 text-white rounded-full'><GoPencil/></button>
                <button className='p-2.5 bg-yellow-300 text-white rounded-full'><IoTrashOutline/></button>
                <button className='p-2.5 bg-yellow-300 text-white rounded-full'><AiOutlineFileSearch/></button>
            </div> */}
            
        </div>
    )}
        </div>
    </div>}
    </div>
  )
}

export default ClientManagement


// style={{borderLeft:`40px solid ${data.level == 'high' ? 'blue': data.level==='medium'?'green':data.level==='low'?'orange':'white'}`}}