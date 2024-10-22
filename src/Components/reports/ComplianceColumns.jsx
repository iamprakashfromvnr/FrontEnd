import {SlOptions, SlOptionsVertical} from 'react-icons/sl';

import React, { useState } from 'react'
import { FaRegEye } from "react-icons/fa6";
import { MdDeleteOutline, MdEdit } from "react-icons/md";

export const ComplianceColumns=[
    {
        name:"Sno",
        selector:row=>row.Sno,
        sortable:true,
        width:'100px'
    },
    {
        name:"Company Name",
        selector:row=>row.Company_Name,
        sortable:true,
        width:'140px'
    },
    {
        name:"Branch",
        selector:row=>row.Branch,
        sortable:true,
        width:'100px'
    },
    {
        name:"Activity",
        selector:row=>row.Activity,
        sortable:true,
        width:'150px'
    },
    {
        name:"Name of the Form",
        selector:row=>row.Form_name,
        sortable:true
    },
    {
        name:"Applicable Labour Act",
        cell:(row)=>row.Acts,
        sortable:true
    },
    {
        name:"Type of  Act",
        selector:row=>row.ActType,
        sortable:true,
        width:'140px'
    },
    {
        name:"state",
        selector:row=>row.state,
        sortable:true,
        width:'120px'
    },
    {
        name:"Fild Date",
        selector:row=>row.Filed_Date,
        sortable:true,
        width:'100px'
    },
    {
        name:"Period",
        selector:row=>row.Period,
        sortable:true,
        width:'100px'
    },
    {
        name:"Document",
        selector:row=>row.Document,
        sortable:true
    },
    {
        name:"Priority",
        selector:row=>row.Priority,
        sortable:true,
        width:'100px'
    },
    {
        name:"Status",
        cell:(row)=><p className={`${row.Status ==='Complied' ? 'text-green-600':row.Status==='Not Complied'? 'text-red-600':'text-yellow-500'}`}>{row.Status}</p>,
        sortable:true,
        width:'100px'
    },
    {
        // name:"Action",
        // selector:row=>row.Action,
        // cell:(row)=><button><SlOptionsVertical/></button>,
        name: 'Actions',
        cell:(row)=>(<Menu/>),
        ignoreRowClick:true,
        allowOverflow:true,
        button:true,
        width:'65px'

    }


]

const Menu = () => {
    const[open,setOpen]=useState(false)
    const toggleClick=()=>{
        setOpen(!open)
    }
    const handleItemClick=(item)=>{
        alert(`your clicked ${item}`)
        setOpen(false)
    }

  return (
    <div>
        <div className="relative inline-block">
            <div>
                <button onClick={toggleClick}><SlOptionsVertical/></button>
                {open && (
                    <div className="absolute bg-white right-0 -top-20 z-10 mt-2 w-28 rounded-md ring-1 ring-black ring-opacity-5">
                        <a onClick={()=>handleItemClick('view')} className="flex gap-3 px-2.5 py-2 text-md text-black hover:bg-gray-300"><FaRegEye className="mt-0.5"/> View</a>
                        <a onClick={()=>handleItemClick('edit')} className="flex gap-3 px-2.5 py-2 text-md text-black hover:bg-gray-300"><MdEdit className="mt-0.5"/> Edit</a>
                        <a onClick={()=>handleItemClick('delete')} className="flex gap-3 px-2.5 py-2 text-md text-black hover:bg-gray-300"><MdDeleteOutline className="mt-0.5"/> Delete</a>
                    </div>
                )}
            </div>
        </div>
    </div>
  )
}

export default Menu;