import React from 'react';
import { FaEnvelope, FaDownload } from 'react-icons/fa';

const Menu = () => {
    return (
        <div className="flex flex-col mb-4 justify-center gap-2 items-start lg:flex-row lg:items-center lg:justify-between">
            <div>
                <h3 className="text-xl font-bold">Notification</h3>
            </div>
            <div className="flex items-center gap-2 ">
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