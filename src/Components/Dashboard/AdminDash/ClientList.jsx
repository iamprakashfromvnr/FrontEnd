import React from 'react';
import { TbReportAnalytics } from 'react-icons/tb';
const ClientList = ({ totalCompany, state, district, branch }) => {
  return (
    <div className='border rounded mt-2'>
      <div>
        <h5 className='font-semibold ps-10 mt-3' >Client list</h5>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4 font-poppins">
      <div className=" p-5 sm:ms-5 md:ms-14 rounded-lg shadow-md w-full sm:w-3/4 h-auto min-h-[8rem] border-l-4 border-l-purple-500 " style={{  backgroundColor: '#e6e6e6', borderColor: '#003366' }}>
          <div className="flex items-center ">
            <div className="p-1 rounded " style={{ backgroundColor: '#0d3d6e' }}>
              <TbReportAnalytics style={{ color: 'white', fontSize: '30px' }} />
            </div>
            <div className="ms-5 ps-2">
              <h5>Total company</h5>
              <p className="text-xl font-semibold">{totalCompany}</p>
            </div>
          </div>
        </div>

        <div className=" p-5 sm:ms-5 md:ms-14 rounded-lg shadow-md w-full sm:w-3/4 h-auto min-h-[8rem] border-l-4 " style={{ backgroundColor: '#ffece6', borderColor: '#ff9d80' }}>
          <div className="flex items-center">
            <div className="p-1 rounded" style={{ backgroundColor: '#ff9d80' }}>
              <TbReportAnalytics style={{ color: 'white', fontSize: '30px' }} />
            </div>
            <div className="ms-5 ps-2">
              <h5>State</h5>
              <p className="text-xl font-semibold">{state}</p>
            </div>
          </div>
        </div>

        <div className="p-5 sm:ms-5 md:ms-14 rounded-lg shadow-md w-full sm:w-3/4 h-auto min-h-[8rem] border-l-4 " style={{ backgroundColor: '#f4fafd', borderColor: '#00bfff' }}>
          <div className="flex items-center">
            <div className="p-1  rounded" style={{ backgroundColor: '#00bfff' }}>
              <TbReportAnalytics style={{ color: 'white', fontSize: '30px' }} />
            </div>
            <div className="ms-5 ps-2">
              <h5>District</h5>
              <p className="text-xl font-semibold">{district}</p>
            </div>
          </div>
        </div>

        <div className="p-5 sm:ms-5 md:ms-14 rounded-lg shadow-md w-full sm:w-3/4 h-auto min-h-[8rem] border-l-4 " style={{ backgroundColor: '#c4ede0', borderColor: '#36b089' }}>
          <div className="flex items-center">
            <div className="p-1 rounded" style={{ backgroundColor: '#36b089' }}>
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
  )
}
export default ClientList