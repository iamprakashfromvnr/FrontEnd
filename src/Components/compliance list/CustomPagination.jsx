import React from 'react'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import { IoBackspace } from 'react-icons/io5'
import { MdKeyboardDoubleArrowLeft, MdKeyboardDoubleArrowRight } from 'react-icons/md'

const CustomPagination = ({currentPage,totalPages,onPageChange}) => {
    const pages=Array.from({length:totalPages},(_,index)=>index+1)

  return (
    <div className='flex justify-center mt-0.5 gap-3'>
      <MdKeyboardDoubleArrowLeft className={`h-7 w-7 rounded-full border p-1 ${currentPage==pages[0]?'cursor-pointer pointer-events-none':'cursor-pointer'}`} onClick={()=>onPageChange(pages[0])}/>
      <IoIosArrowBack onClick={()=>onPageChange(currentPage-1)}  className={`h-7 w-7 rounded-full border p-1 ${currentPage==pages[0]?'cursor-pointer pointer-events-none':'cursor-pointer'}`}/>
        {pages.map((page)=>
        (<button key={page} onClick={()=>onPageChange(page)} className={`mx-1 h-7 w-7 rounded-full ${currentPage===page?'bg-yellow-500 text-white':'bg-white text-black'}`}>{page}</button>))}
        <IoIosArrowForward onClick={()=>onPageChange(currentPage+1)}  className={`h-7 w-7 rounded-full border p-1 ${currentPage==pages.length ?'cursor-pointer pointer-events-none':'cursor-pointer'}`}/>
      <MdKeyboardDoubleArrowRight onClick={()=>onPageChange(pages.length)}  className={`h-7 w-7 rounded-full border p-1 ${currentPage==pages.length ?'cursor-pointer pointer-events-none':'cursor-pointer'}`}/>
      
    </div>
  )
}

export default CustomPagination