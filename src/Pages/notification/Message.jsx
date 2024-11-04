// import React, { useState } from 'react'
// import Menu from './Menu'
// import Search from './Search'
// import September from './September'
// import { notifications } from './Dummy'
// import Item from './Item'
// import { data } from './Data'
// const Message = () => {
//     const [searchTerm, setSearchTerm] = useState('');

//     const filteredNotifications = notifications.filter(notification =>
//         notification.message.toLowerCase().includes(searchTerm.toLowerCase())
//     );
//     const filteredData = data.filter(item =>
//         item.message.toLowerCase().includes(searchTerm.toLowerCase())
//     );
//     return (
//         <div className='ps-5 pe-5 font-poppins'>
//             <Menu />
//             <Search
//                 searchTerm={searchTerm}
//                 setSearchTerm={setSearchTerm}
//             />
//             <div className="bg-white border rounded-lg shadow mt-5 p-5">
//                 <div className="p-2 font-semibold">Sep 12, 2024</div>
//                 {filteredNotifications.map((notification, index) => (
//                     <September
//                         key={index}
//                         time={notification.time}
//                         message={notification.message}
//                         status={notification.status}
//                     />
//                 ))}
//             </div>
//             <div className="p-6 bg-white border rounded-lg shadow  mt-5 mb-5">
//                 <h5 className=" p-2 font-semibold mb-4">Last Weeks</h5>
//                 {filteredData.map((item, index) => (
//                     <Item
//                         key={index}
//                         time={item.time}
//                         message={item.message}
//                         status={item.status}
//                     />
//                 ))}
//             </div>
//         </div>
//     )
// }
// export default Message

// import React, { useState } from 'react';
// import Menu from './Menu';
// import Search from './Search';
// import September from './September';
// import { notifications } from './Dummy';
// import Item from './Item';
// import { data } from './Data';

// const Message = () => {
//     const [searchTerm, setSearchTerm] = useState('');
//     const [dateRange, setDateRange] = useState([null, null]);

//     const filteredNotifications = notifications.filter(notification => {
//         const matchesSearch = notification.message.toLowerCase().includes(searchTerm.toLowerCase());

//         // Check if dateRange is selected
//         const matchesDate = dateRange[0] && dateRange[1]
//             ? new Date(notification.time) >= dateRange[0] && new Date(notification.time) <= dateRange[1]
//             : true; // If no date range, include all notifications

//         return matchesSearch && matchesDate;
//     });

//     const filteredData = data.filter(item => {
//         const matchesSearch = item.message.toLowerCase().includes(searchTerm.toLowerCase());

//         const matchesDate = dateRange[0] && dateRange[1]
//             ? new Date(item.time) >= dateRange[0] && new Date(item.time) <= dateRange[1]
//             : true;

//         return matchesSearch && matchesDate;
//     });

//     return (
//         <div className='ps-5 pe-5 font-poppins'>
//             <Menu />
//             <Search
//                 searchTerm={searchTerm}
//                 setSearchTerm={setSearchTerm}
//                 dateRange={dateRange}
//                 setDateRange={setDateRange}
//             />
//             <div className="bg-white border rounded-lg shadow mt-5 p-5">
//                 <div className="p-2 font-semibold">Sep 12, 2024</div>
//                 {filteredNotifications.map((notification, index) => (
//                     <September
//                         key={index}
//                         time={notification.time}
//                         message={notification.message}
//                         status={notification.status}
//                     />
//                 ))}
//             </div>
//             <div className="p-6 bg-white border rounded-lg shadow mt-5 mb-5">
//                 <h6 className="p-2 font-semibold mb-4">Last Weeks</h6>
//                 {filteredData.map((item, index) => (
//                     <Item
//                         key={index}
//                         time={item.time}
//                         message={item.message}
//                         status={item.status}
//                     />
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default Message;


// import React, { useState } from 'react';
// import Menu from './Menu';
// import Search from './Search';
// import September from './September';
// import { notifications } from './Dummy';
// import Item from './Item';
// import { data } from './Data';

// const Message = () => {
//     const [searchTerm, setSearchTerm] = useState('');
//     const [dateRange, setDateRange] = useState([null, null]);

//     const filterItems = (items) => {
//         return items.filter(item => {
//             const matchesSearch = item.message.toLowerCase().includes(searchTerm.toLowerCase());

//             const matchesDate = dateRange[0] && dateRange[1]
//                 ? new Date(item.time) >= dateRange[0] && new Date(item.time) <= dateRange[1]
//                 : true;

//             return matchesSearch && matchesDate;
//         });
//     };

//     const filteredNotifications = filterItems(notifications);
//     const filteredData = filterItems(data);

//     return (
//         <div className='ps-5 pe-5 font-poppins'>
//             <Menu />
//             <Search
//                 searchTerm={searchTerm}
//                 setSearchTerm={setSearchTerm}
//                 dateRange={dateRange}
//                 setDateRange={setDateRange} 
//             />
//             <div className="bg-white border rounded-lg shadow mt-5 p-5">
//                 <div className="p-2 font-semibold">Sep 12, 2024</div>
//                 {filteredNotifications.map((notification, index) => (
//                     <September
//                         key={index}
//                         time={notification.time}
//                         message={notification.message}
//                         status={notification.status}
//                     />
//                 ))}
//             </div>
//             <div className="p-6 bg-white border rounded-lg shadow mt-5 mb-5">
//                 <h6 className="p-2 font-semibold mb-4">Last Weeks</h6>
//                 {filteredData.map((item, index) => (
//                     <Item
//                         key={index}
//                         time={item.time}
//                         message={item.message}
//                         status={item.status}
//                     />
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default Message;
 





// import React, { useState } from 'react';
// import Menu from './Menu';
// import Search from './Search';
// import September from './September';
// import { notifications } from './Dummy';
// import Item from './Item';
// import { data } from './Data';

// const Message = () => {
//     const [searchTerm, setSearchTerm] = useState('');

//     const filterItems = (items) => {
//         return items.filter(item =>
//             item.message.toLowerCase().includes(searchTerm.toLowerCase())
//         );
//     };

//     const filteredNotifications = filterItems(notifications);
//     const filteredData = filterItems(data);

//     return (
//         <div className='ps-5 pe-5 font-poppins'>
//             <Menu />
//             <Search
//                 searchTerm={searchTerm}
//                 setSearchTerm={setSearchTerm}
//             />
//             <div className="bg-white border rounded-lg shadow mt-5 p-5">
//                 <div className="p-2 font-semibold">Sep 12, 2024</div>
//                 {filteredNotifications.map((notification, index) => (
//                     <September
//                         key={index}
//                         time={notification.time}
//                         message={notification.message}
//                         status={notification.status}
//                     />
//                 ))}
//             </div>
//             <div className="p-6 bg-white border rounded-lg shadow mt-5 mb-5">
//                 <h6 className="p-2 font-semibold mb-4">Last Weeks</h6>
//                 {filteredData.map((item, index) => (
//                     <Item
//                         key={index}
//                         time={item.time}
//                         message={item.message}
//                         status={item.status}
//                     />
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default Message;





import React, { useState } from 'react';
import Menu from '../../Components/Notification/Menu';
import Search from '../../Components/Notification/Search';
import September from '../../Components/Notification/September';
import { notifications } from '../../Components/Notification/Dummy';
import Item from '../../Components/Notification/Item';
import { data } from '../../Components/Notification/Data';
import moment from 'moment';

const Message = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [startDate, setStartDate] = useState(null);

    const filterItems = (items) => {
        return items.filter(item => {
            const matchesSearch = item.message.toLowerCase().includes(searchTerm.toLowerCase());
            
            const itemDate = moment(item.time);
            const matchesDate = startDate 
                ? itemDate.isSameOrAfter(moment(startDate)) 
                : true; 

            return matchesSearch && matchesDate;
        });
    };

    const filteredNotifications = filterItems(notifications);
    const filteredData = filterItems(data);

    return (
        <div className='ps-5 pe-5'>
            <Menu />
            <Search
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                startDate={startDate}
                setStartDate={setStartDate}
            />
            <div className="bg-white border border-bordergray rounded-lg shadow-md mt-5 p-5">
                <div className="p-2 font-semibold">Sep 12, 2024</div>
                {filteredNotifications.map((notification, index) => (
                    <September
                        key={index}
                        time={notification.time}
                        message={notification.message}
                        status={notification.status}
                    />
                ))}
            </div>
            <div className="p-6 bg-white border border-bordergray rounded-lg shadow-md mt-5 mb-5">
                <h6 className="p-2 font-semibold mb-4">Last Weeks</h6>
                {filteredData.map((item, index) => (
                    <Item
                        key={index}
                        time={item.time}
                        message={item.message}
                        status={item.status}
                    />
                ))}
            </div>
        </div>
    );
};

export default Message;