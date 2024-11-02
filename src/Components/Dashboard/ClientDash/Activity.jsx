// import React from 'react';

// const Activity = ({ activities }) => {
//   return (
//     <div className="p-4 bg-white rounded-lg border mt-4 mb-4">
//       <h3 className="text-lg font-semibold mb-4">Upcoming Activity</h3>
//       <div className="overflow-x-auto"> 
//         <table className="min-w-full bg-white border border-gray-200">
//           <thead>
//             <tr className="bg-black text-white">
//               <th className="py-2 px-4 border-b">S.No</th>
//               <th className="py-2 px-4 border-b">State</th>
//               <th className="py-2 px-4 border-b">Branch</th>
//               <th className="py-2 px-4 border-b">Activity</th>
//               <th className="py-2 px-4 border-b">Date</th>
//             </tr>
//           </thead>
//           <tbody>
//             {activities.map((activity, index) => (
//               <tr key={index} className="text-center border-b hover:bg-gray-100">
//                 <td className="py-2 px-4">{index + 1}</td>
//                 <td className="py-2 px-4">{activity.state}</td>
//                 <td className="py-2 px-4">{activity.branch}</td>
//                 <td className="py-2 px-4">{activity.activity}</td>
//                 <td className="py-2 px-4">{activity.date}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default Activity;




import React from 'react';
const Activity = ({ activities, filters }) => {
  const filteredData = activities.filter((row) => {
    const [day, month, year] = row.date.split('-');
    const rowDate = new Date(`${year}-${month}-${day}`);
    const selectedDate = filters.date ? new Date(filters.date) : null;
    // console.log('Row Date:', rowDate.toDateString(), 'selected Date;', selectedDate ? selectedDate.toDateString() : 'None');
    return (
      (!filters.company || row.CompanyName === filters.company) &&
      (!filters.state || row.state === filters.state) &&
      (!filters.branch || row.branch === filters.branch) &&
      (!filters.priority || row.Priority === filters.priority) &&
      (!filters.area || row.Area === filters.area) &&
      (!selectedDate || rowDate.toDateString() === selectedDate.toDateString())
    );
  });
  return (
    <div className="p-4 bg-white rounded-lg border mt-4 mb-4">
      <h3 className="text-lg font-semibold mb-4">Upcoming Activity</h3>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr className="bg-black text-white">
              <th className="py-2 px-4 border-b">S.No</th>
              <th className="py-2 px-4 border-b">State</th>
              <th className="py-2 px-4 border-b">Branch</th>
              <th className="py-2 px-4 border-b">Activity</th>
              <th className="py-2 px-4 border-b">Date</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((row) => (
              <tr key={row.SNO} className="text-center border-b hover:bg-gray-100">
                <td className="py-2 px-4">{row.SNO}</td>
                <td className="py-2 px-4">{row.state}</td>
                <td className="py-2 px-4">{row.branch}</td>
                <td className="py-2 px-4">{row.activity}</td>
                <td className="py-2 px-4">{row.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default Activity;