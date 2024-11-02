import React from 'react'

const CustomPage = ({Page, totalPages, onPageChange }) => {
    const pages=Array.from({length:totalPages},(_,index)=>index+1)
  return (
    <div  className='flex justify-center mt-1'>
        {pages.map((page)=> <button key={page} onClick={()=>onPageChange(page)} className={`mx-1 h-8 w-8 rounded-full ${Page===page?'bg-yellow-500 text-white':'bg-white text-black'}`}> {page}</button>)
        }
    </div>
  )
}

export default CustomPage
