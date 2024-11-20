import React,{ useEffect, useState }  from 'react'
import { CiBoxList, CiGrid41, CiSearch } from 'react-icons/ci'
import { GoDownload, GoPencil } from 'react-icons/go'
import {MdAdd} from "react-icons/md"
import logo from '../../Images/sky.jpg'
import { IoNotificationsOffOutline, IoTrashOutline } from 'react-icons/io5'
import { AiOutlineFileSearch, AiOutlineMail } from 'react-icons/ai'
import DataTable from 'react-data-table-component'
import ActionMenu from '../../Components/company/ActionMenu'
import { Link } from 'react-router-dom'
import { IoIosArrowBack } from 'react-icons/io'
const ClientBranchManagement = () => {
    
            
    const Branch=[
        {
            company:"ace catering equipment",
            state:'karntaka',
            Branch:"bangolore",
            pincode:"560004",
            prioriy:"complete"
        },
        {
            company:"ace catering equipment",
            state:'karntaka',
            email:"isabella235@gmail.com",
            user:"isabella",
            Branch:"agra",
            prioriy:"complete"
        },
        {
            company:"ace catering equipment",
            state:'karntaka',
            email:"paulacecatering@gmail.com",
            user:"Joshup",
            Branch:"koramangala-bangalore",
            prioriy:"incomplete"
        },
        
        {
            company:"ace catering equipment",
            state:'karntaka',
            email:"rachel@gmail.com",
            user:"rachel",
            Branch:"Mumbai",
            prioriy:"complete",
        },
    ]
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
        cell:(row)=>(<span className='flex items-center gap-4'><img src={logo} className='w-10 h-10 rounded-full'/> {row.company}</span>),
        sortable:true,
        grow:2,
        width:'300px'
    },
    {
        name:"Branch",
        selector:row=>row.Branch,
        sortable:true,
        grow:1.5

    },
    {
        name:"State",
        selector:row=>row.state,
        sortable:true,

    },
    {
        name:"Email",
        selector:row=>row.email,
        sortable:true,
    },
    {
        name:"User",
        selector:row=>row.user,
        sortable:true,

    },
    {
        name:"Priority",
        selector:row=>row.prioriy,
        sortable:true,

    },
    {
        name:"Action",
        cell:(row)=><ActionMenu row={row}/>,
        ignoreClick:true,
        
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
    const [Data, setData] = useState(Branch)
    const [search,setSearch]=useState('')
    const [filter,setFilter]=useState({company:"",email:"",user:"",Branch:"",pincode:"",prioriy:"",state:""})
    const [filterData,setfilterData]=useState(Data)
    const[view,setView]=useState('grid')
    useEffect(() => {
    const filtered = Data.filter((data) => {
        return (
            (filter.company ? data.company === filter.company : true) &&
            (filter.email ? data.email === filter.email : true) &&
            (filter.state ? data.state === filter.state : true) &&
            (filter.user ? data.user === filter.user : true) &&
            (filter.Branch ? data.Branch === filter.Branch : true) &&
            (filter.pincode ? data.pincode === filter.pincode : true) &&
            (filter.prioriy ? data.prioriy === filter.prioriy : true) &&
            (
                data.company.toLowerCase().includes(search.toLowerCase()) ||
                data.Branch.toLowerCase().includes(search.toLowerCase()) ||
                data.email.toLowerCase().includes(search.toLowerCase()) ||
                data.user.toLowerCase().includes(search.toLowerCase()) ||
                data.pincode.toLowerCase().includes(search.toLowerCase()) ||
                data.prioriy.toLowerCase().includes(search.toLowerCase())
            )
        );
    });
    setfilterData(filtered);
}, [Data, filter, search]);
  return (
    <div className='shadow-md p-2 h-full w-full'>
      <div className="flex justify-between flex-wrap">
            <h1 className='font-bold text-lg mt-3 ms-4'>Client Branch Management({Data.length})</h1>
            <div className='flex justify-evenly items-center gap-3 me-5 p-3'>    
                <GoDownload className='rounded-full bg-primary text-white h-9 w-9 p-2' size={15} onClick={()=>window.print()}/>
                <Link to="/clientmanagement">
                <IoIosArrowBack className='rounded-full bg-primary text-white h-9 w-9 p-2' size={15}/>
                </Link>
                <Link to='/branch'><button className='flex rounded-md bg-primary text-white h-10 w-36 justify-center gap-3 items-center'><MdAdd  size={15}/>Add Branch</button> </Link>    
            </div>
      </div>
      
      <div className='flex my-3 justify-between gap-3 p-2 ms-3 items-center flex-wrap'>
        <div className='flex items-center gap-3 flex-wrap'>
          <select className='bg-white rounded-lg border border-1 border-bordergray px-4 w-full lg:w-36 h-10 ' value={filter.company} onChange={(e)=>setFilter({...filter,company:e.target.value})}>
            <option value="">Company</option>
            {[...new Set(Data.map((data) => data.company))].map((company, index) => (
              <option key={index} value={company}>{company}</option>
            ))}
          </select>
          <select className='bg-white rounded-lg border border-1 border-bordergray px-4 w-full lg:w-36 h-10' value={filter.state} onChange={(e)=>setFilter({...filter,state:e.target.value})}>
            <option value="">State</option>
            {[...new Set(Data.map((data) => data.state))].map((state, index) => (
              <option key={index} value={state}>{state}</option>
            ))}
          </select>
          <select className='bg-white rounded-lg border border-1 border-bordergray px-4 w-full lg:w-36 h-10 ' value={filter.Branch} onChange={(e)=>setFilter({...filter,Branch:e.target.value})}>
            <option value="">Branch</option>
            {[...new Set(Data.map((data) => data.Branch))].map((branch, index) => (
              <option key={index} value={branch}>{branch}</option>
            ))}
          </select>
          <select className='bg-white rounded-lg border border-1 border-bordergray px-4 w-full lg:w-36 h-10 ' value={filter.prioriy} onChange={(e)=>setFilter({...filter,prioriy:e.target.value})}>
            <option value="">Priority</option>
            {[...new Set(Data.map((data) => data.prioriy))].map((prioriy, index) => (
              <option key={index} value={prioriy}>{prioriy}</option>
            ))}
          </select>
          <div className='relative w-full lg:w-36 h-10'>
            <input type="text" className='bg-white rounded-lg border border-1 border-bordergray  w-full lg:w-40 py-1.5 ps-8 ' placeholder='Search' value={search} onChange={(e)=>setSearch(e.target.value)}/>
                <CiSearch className='absolute top-2 left-2' size={20} />
          </div>
        </div>
        <div className='flex items-center gap-2 me-16 mb-1'>
            <button onClick={(e)=>setView('grid')} className={`${view ==='grid' ? 'bg-black text-white': 'bg-white text-black'} p-2.5 border-1 border-gray-400 rounded-md `}><CiGrid41 size={17}/></button>
            <button onClick={(e)=>setView('list')}className={`${view === 'list' ? 'bg-black text-white': 'bg-white text-black'} p-2.5 border-1 border-gray-400 rounded-md `}><CiBoxList size={17}/></button>
        </div>
    </div>
    {view==='list'?<div className='w-full p-5'>
      <DataTable columns={columns} data={filterData} customStyles={customStyles} fixedHeader selectableRows/>    
      </div>:
    
    <div className='p-4'>
    <div className='flex justify-center lg:justify-start gap-2 flex-wrap w-full'>
    {filterData.map((data,index)=>
        // <div className='relative py-8 px-16 rounded-md bg-white items-center' style={{borderLeft:`40px solid ${data.level == 'high' ? 'blue': data.level==='medium'?'green':data.level==='low'?'orange':'white'}`}}>
        <div key={index} className={`py-3 border border-bordergray rounded-md px-2 justify-center h-52 relative overflow-hidden ${data.prioriy==='incomplete'? 'bg-red-50':data.prioriy==='complete'?'bg-green-50':''}`}style={{width:'300px'}} > 
                <div className='w-32 h-8 absolute top-4 -right-8 '>
                     <div className={`${data.prioriy==="incomplete" ? 'text-black':'text-white'} h-full w-full bg-yellow-400 text-center leading-8 font-semibold transform rotate-45`}>{data.prioriy}</div>
                 </div>
            <div className='flex justify-start gap-4'>
                <img src={logo} className='rounded-full h-16 w-16'/>
                <div className='h-36 w-52'> 
                    <h5 className='font-semibold pe-10 text-wrap mb-0'>{data.company}</h5>
                    <p className='-mb-2 text-sm'>Branches - {data.Branch}</p>
                    {data.email && <p className='-mb-2 text-sm'>{data.email}</p>}
                    {data.user && <p className='mb-0 text-sm'>Assigned User :{data.user}</p>}

                </div>
            </div>
            {/* <h6 className='transform rotate-90 font-bold -left-8 bg-yellow-500 items-center text-white'>{data.level}</h6> */}
        
            <div className='flex gap-2 border-t w-full justify-center pt-1.5'>
                <Link to="/calendar"><AiOutlineFileSearch className={`${data.prioriy==="incomplete" ? 'bg-red-600':'bg-green-600'} h-9 w-9  text-white rounded-full p-2.5`}/></Link>
                <IoNotificationsOffOutline className='h-9 w-9 bg-primary text-white rounded-full p-2.5'/>
                <AiOutlineMail className='h-9 w-9 bg-primary text-white rounded-full p-2.5'/>
                <GoPencil className='h-9 w-9 bg-primary text-white rounded-full p-2.5'/>
                <IoTrashOutline className='h-9 w-9 bg-primary text-white rounded-full p-2.5'/>
                <AiOutlineFileSearch className='h-9 w-9 bg-primary text-white rounded-full p-2.5'/>
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

export default ClientBranchManagement
