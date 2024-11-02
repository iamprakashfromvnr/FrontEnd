import React, { useState } from 'react'

const Dummy2 = ({ percent, className }) => {
    const radius = 20
    const strokeWidth = 3
    const circumference = 2 * Math.PI * radius
    const strokeDashOffset = circumference - (circumference * percent) / 10

    return (
        <>
            <div className='relative flex items-center justify-center'>
                <svg width={50} height={50} className='transform rotate-90 '>
                    <circle cx={25} cy={25} r={radius} stroke='transparent'
                        strokeWidth={strokeWidth} fill='transparent'
                    />
                    <circle cx={25} cy={25} r={radius} stroke='black'
                        strokeWidth={strokeWidth} fill='transparent'
                        strokeDasharray={circumference} strokeDashoffset={strokeDashOffset}
                        strokeLinecap='round'
                    />
                </svg>
                <div className="absolute flex items-center justify-center">
                    <span className="w-10 h-10 text-xs flex items-center justify-center rounded-full" style={{ backgroundColor: 'rgb(199, 199, 199)' }}>{percent}/10</span>
                </div>
            </div>
        </>
    )
}

export default Dummy2
