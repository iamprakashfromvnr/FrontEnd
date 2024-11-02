import React from 'react';
import EditCompliances from './EditCompliances';

const Demo = ({ modal, onClose, }) => {
    if (!modal) return null

    return (
        <div className="absolute top-0 left-0 w-full py-40 bg-black bg-opacity-50">
            <div className="bg-white mx-auto rounded-lg shadow-lg w-4/5">
                <EditCompliances onClose={onClose} />
            </div>
        </div>
    );
};

export default Demo