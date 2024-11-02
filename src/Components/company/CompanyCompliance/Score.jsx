import React from 'react'

const Score = ({ data }) => {
    const radius = 21
    const strokeWidth = 3
    const circumference = 2 * Math.PI * radius
    const strokeDashOffset = circumference - (circumference * data) / 10

    return (
        <div className='relative flex items-center justify-center'>
            <svg width={50} height={50} className='transform rotate-0'>
                <circle cx={25} cy={25} r={radius} stroke='transparent'
                    strokeWidth={strokeWidth} fill='transparent'
                ></circle>
                <circle cx={25} cy={25} r={radius} stroke='black'
                    strokeWidth={strokeWidth} fill='transparent'
                    strokeDasharray={circumference} strokeDashoffset={strokeDashOffset}
                    strokeLinecap='round'
                />
            </svg>
            <div className="absolute flex items-center justify-center">
                <span className='w-10 h-10 bg-gray-300 flex items-center justify-center rounded-full text-xs'>
                    {data}/10
                </span>
            </div>
        </div>
    )
}

export default Score