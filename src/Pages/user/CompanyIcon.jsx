import React from 'react'
import ENHR from '../../Images/ENHR.png'

const CompanyIcon = ({ row }) => {
    return (
        <div className='flex justify-center items-center gap-2 text-white relative'>
            <div className='w-10 rounded-full h-10 bg-blue-500 flex justify-center items-center absolute left-0'><img src={ENHR} alt="Event" /></div>
            <div className='w-10 rounded-full h-10 bg-red-500 flex justify-center items-center absolute left-5'>F</div>
            <div className='w-10 rounded-full h-10 bg-teal-500 flex justify-center items-center absolute left-10'></div>
            <div className='w-10 rounded-full h-10 bg-green-500 flex justify-center items-center absolute left-16'></div>
            <div className='w-10 rounded-full h-10 bg-yellow-500 flex justify-center items-center absolute left-20 font-bold'>35</div>
            <span className='h-11 w-32 bg-white rounded-md'></span>
        </div>
    )
}

export default CompanyIcon