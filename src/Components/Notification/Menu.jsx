import React from 'react';
import { FaEnvelope, FaDownload } from 'react-icons/fa';

const Menu = () => {
    return (
        <div className="flex items-center justify-between">
            <div>
                <h3 className="p-2 text-xl font-bold">Notification</h3>
            </div>
            <div className="flex items-center space-x-2 px-5 py-5">
                <button className="rounded-full bg-primary px-3 py-3 text-white">
                    <FaEnvelope />
                </button>
                <button className="rounded-full bg-primary px-3 py-3 text-white">
                    <FaDownload size={15} />
                </button>
            </div>
        </div>
    );

}
export default Menu;