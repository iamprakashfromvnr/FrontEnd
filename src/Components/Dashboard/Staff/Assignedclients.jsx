import React from 'react'
import { TbReportAnalytics } from 'react-icons/tb';
const Assignedclients = ({ totalclients, state, district, branch }) => {
  return (
    <div>
    <div className='border rounded mt-2'>
      <div>
        <h5 className='font-semi bold ps-12 mt-3' >Assigned Clients</h5>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4 font-poppins">
        <div className="p-5 sm:ms-5 md:ms-14 rounded-lg shadow-md w-full sm:w-3/4 h-auto min-h-[8rem] border-l-4 border-l-purple-500" style={{ backgroundColor: '#eeeef7', borderColor: '#0000cc' }}>
          <div className="flex items-center ">
            <div className="p-1 rounded " style={{ backgroundColor: '#0000cc' }}>
              <TbReportAnalytics style={{ color: 'white', fontSize: '30px' }} />
            </div>
            <div className="ms-5 ps-2">
              <h5>Total Clients</h5>
              <p className="text-xl font-semibold">{totalclients}</p>
            </div>
          </div>
        </div>

        <div className="p-5 sm:ms-5 md:ms-14 rounded-lg shadow-md w-full sm:w-3/4 h-auto min-h-[8rem] border-l-4" style={{ backgroundColor: '#c1f0c1', borderColor: '#46d246' }}>
          <div className="flex items-center" >
            <div className="p-1 rounded " style={{ backgroundColor: '#46d246' }}>
              <TbReportAnalytics style={{ color: 'white', fontSize: '30px' }} />
            </div>
            <div className="ms-5 ps-2">
              <h5>State</h5>
              <p className="text-xl font-semibold">{state}</p>
            </div>
          </div>
        </div>

        <div className="p-5 sm:ms-5 md:ms-14 rounded-lg shadow-md w-full sm:w-3/4 h-auto min-h-[8rem] border-l-4" style={{ backgroundColor: '#ffece6', borderColor: '#ff9d80' }}>
        <div className="flex items-center ">
            <div className="p-1  rounded" style={{ backgroundColor: '#ff9d80' }}>
              <TbReportAnalytics style={{ color: 'white', fontSize: '30px' }} />
            </div>
            <div className="ms-5 ps-2">
              <h5>District</h5>
              <p className="text-xl font-semibold">{district}</p>
            </div>
          </div>
        </div>

        <div className="p-5 sm:ms-5 md:ms-14 rounded-lg shadow-md w-full sm:w-3/4 h-auto min-h-[8rem] border-l-4" style={{ backgroundColor: 'snow', borderColor: '#e6e600' }}>
          <div className="flex items-center">
            <div className="p-1 rounded" style={{ backgroundColor: '#e6e600' }}>
              <TbReportAnalytics style={{ color: 'white', fontSize: '30px' }} />
            </div>
            <div className="ms-5 ps-2">
              <h5>Branch</h5>
              <p className="text-xl font-semibold">{branch}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Assignedclients