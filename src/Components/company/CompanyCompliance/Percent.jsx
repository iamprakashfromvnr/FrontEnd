import React from 'react'

const Percent = ({ data, color }) => {
    const radius = 20
    const strokeWidth = 3
    const circumference = 2 * Math.PI * radius
    const strokeDashOffset = circumference - (circumference * data) / 100

    return (
        <div className='relative flex items-center justify-center'>
            <svg width={50} height={50} className='transform -rotate-90 z-10'>
                <circle cx={25} cy={25} r={radius} stroke='transparent'
                    strokeWidth={strokeWidth} fill='transparent'
                ></circle>
                <circle cx={25} cy={25} r={radius} stroke={`${color === 'Total Compliance' ? 'white'
                    : `${color === 'Complied' ? '#16a34a'
                        : `${color === 'Not Complied' ? '#dc2626'
                            : `${color === 'Partially Complied' ? '#ca8a04'
                                : `${color === 'Over Due' ? '#ea580c' : ''}`}`}`}`}`}
                    strokeWidth={strokeWidth} fill='transparent'
                    strokeDasharray={circumference} strokeDashoffset={strokeDashOffset}
                    strokeLinecap='round'
                />
            </svg>
            <div className="absolute flex items-center justify-center">
                <span className={`${color === 'Total Compliance' ? 'bg-purple-600'
                    : `${color === 'Complied' ? 'bg-green-300'
                        : `${color === 'Not Complied' ? 'bg-red-300'
                            : `${color === 'Partially Complied' ? 'bg-yellow-300'
                                : `${color === 'Over Due' ? 'bg-orange-300' : ''}`}`}`}`}
                    w-11 h-11 flex items-center justify-center rounded-full text-xs`}>
                    {data}%
                </span>
            </div>
        </div>
    )
}

export default Percent