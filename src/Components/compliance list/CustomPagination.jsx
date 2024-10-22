import React from 'react'

const CustomPagination = ({currentPage,totalPages,onPageChange}) => {
    const pages=Array.from({length:totalPages},(_,index)=>index+1)

  return (
    <div className='flex justify-center mt-0.5'>
        {pages.map((page)=>
        (<button key={page} onClick={()=>onPageChange(page)} className={`mx-1 h-7 w-7 rounded-full ${currentPage===page?'bg-yellow-500 text-white':'bg-white text-black'}`}>{page}</button>))}
    </div>
  )
}

export default CustomPagination