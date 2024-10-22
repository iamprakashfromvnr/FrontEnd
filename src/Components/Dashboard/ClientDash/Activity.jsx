import React from 'react';

const Activity = ({ activities }) => {
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
            {activities.map((activity, index) => (
              <tr key={index} className="text-center border-b hover:bg-gray-100">
                <td className="py-2 px-4">{index + 1}</td>
                <td className="py-2 px-4">{activity.state}</td>
                <td className="py-2 px-4">{activity.branch}</td>
                <td className="py-2 px-4">{activity.activity}</td>
                <td className="py-2 px-4">{activity.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>

  );
};

export default Activity