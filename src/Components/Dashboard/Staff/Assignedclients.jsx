import React from 'react';
import { TbReportAnalytics } from 'react-icons/tb';

const Assignedclients = ({ totalclients, state, district, branch }) => {
  return (

    <div className='border border-selectbg shadow-md rounded mt-2 relative'>
      <div>
        <h5 className='font-semibold ps-5 mt-3'>Assigned Clients</h5>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4 font-poppins">
        <div className=" relative overflow-hidden p-4 sm:ms-5 md:ms-4 rounded-lg w-11/12 h-auto min-h-[7rem] border-l-4 border-l-purple-500" style={{ backgroundColor: '#eeeef7', borderColor: '#0000cc' }}>

          <div className=' absolute -top-2 -left-20 bg-gray-400 w-44 h-44 rounded-full bg-opacity-10'></div>
          <div className='absolute left-5 -top-20 bg-gray-400 w-44 h-44 rounded-full bg-opacity-5'></div>

          <div className="flex flex-col h-full justify-between">
            <div className="flex items-center mb-5">
              <div className="p-1 rounded" style={{ backgroundColor: '#0000cc' }}>
                <TbReportAnalytics style={{ color: 'white', fontSize: '30px' }} />
              </div>
              <div className="ms-3  ps-2">
                <h5>Total Clients</h5>
              </div>
            </div>
            <p className="text-lg font-semibold">{totalclients}</p>
          </div>
        </div>


        <div className=" relative overflow-hidden p-4 sm:ms-5 md:ms-4 rounded-lg w-11/12 h-auto min-h-[7rem] border-l-4" style={{ backgroundColor: '#d9f7d9', borderColor: '#46d246' }}>

          <div className=' absolute -top-2 -left-20 bg-green-400 w-44 h-44 rounded-full bg-opacity-15'></div>
          <div className='absolute left-5 -top-20 bg-green-400 w-44 h-44 rounded-full bg-opacity-5'></div>

          <div className="flex flex-col h-full justify-between">
            <div className="flex items-center mb-2">
              <div className="p-1 rounded" style={{ backgroundColor: '#46d246' }}>
                <TbReportAnalytics style={{ color: 'white', fontSize: '30px' }} />
              </div>
              <div className="ms-3 ps-2">
                <h5>State</h5>
              </div>
            </div>
            <p className="text-xl font-semibold ">{state}</p>
          </div>
        </div>

        <div className=" relative overflow-hidden p-4 sm:ms-5 md:ms-4 rounded-lg w-11/12 h-auto min-h-[7rem] border-l-4" style={{ backgroundColor: '#ffece6', borderColor: '#ff9d80' }}>
          <div className=' absolute -top-2 -left-20 bg-pink-400 w-44 h-44 rounded-full bg-opacity-10'></div>
          <div className='absolute left-5 -top-20 bg-pink-400 w-44 h-44 rounded-full bg-opacity-5'></div>

          <div className="flex flex-col h-full justify-between">
            <div className="flex items-center mb-2">
              <div className="p-1 rounded" style={{ backgroundColor: '#ff9d80' }}>
                <TbReportAnalytics style={{ color: 'white', fontSize: '30px' }} />
              </div>
              <div className="ms-3 ps-2">
                <h5>District</h5>
              </div>
            </div>
            <p className="text-xl font-semibold ">{district}</p>
          </div>
        </div>


        <div className=" relative overflow-hidden p-4 sm:ms-5 md:ms-4 rounded-lg w-11/12 h-auto min-h-[7rem] border-l-4" style={{ backgroundColor: 'snow', borderColor: '#e6e600' }}>
        <div className=' absolute -top-2 -left-20 bg-yellow-400 w-44 h-44 rounded-full bg-opacity-10'></div>
          <div className='absolute left-5 -top-20 bg-yellow-400 w-44 h-44 rounded-full bg-opacity-5'></div>
         
          <div className="flex flex-col h-full justify-between">
            <div className="flex items-center mb-2">
              <div className="p-1 rounded" style={{ backgroundColor: '#e6e600' }}>
                <TbReportAnalytics style={{ color: 'white', fontSize: '30px' }} />
              </div>
              <div className="ms-3 ps-2">
                <h5>Branch</h5>
              </div>
            </div>
            <p className="text-xl font-semibold">{branch}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Assignedclients;