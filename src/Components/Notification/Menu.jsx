import React from 'react';
import { FaEnvelope, FaDownload } from 'react-icons/fa';

const Menu = ({ onDownload }) => {
    return (
        <div className="flex items-center justify-between">
            <div>
                <h5 className="p-5 font-semibold">Notification</h5>
            </div>
            <div className="flex items-center space-x-2 px-5 py-5">
                <button className="rounded-full bg-primary px-3 py-3 text-white">
                    <FaEnvelope />
                </button>
                <button
                    className="rounded-full bg-primary px-3 py-3 text-white"
                    onClick={onDownload}>
                    <FaDownload size={16} />
                </button>
            </div>
        </div>
    );
};

export default Menu;


// import React from 'react';
// import { FaEnvelope, FaDownload } from 'react-icons/fa';

// const Menu = () => {
//     return (
//         <div className="flex flex-col mb-4 justify-center gap-2 items-start lg:flex-row lg:items-center lg:justify-between">
//             <div>
//                 <h3 className="text-xl font-bold">Notification</h3>
//             </div>
//             <div className="flex items-center gap-2 ">
//                 <button className="rounded-full bg-primary px-3 py-3 text-white">
//                     <FaEnvelope />
//                 </button>
//                 <button className="rounded-full bg-primary px-3 py-3 text-white">
//                     <FaDownload size={15} />
//                 </button>
//             </div>
//         </div>
//     );

// }
// export default Menu;