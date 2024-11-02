import { useState } from "react";
import { HiDotsVertical } from "react-icons/hi";
import { FiEye } from "react-icons/fi";
import { RiDeleteBinLine } from "react-icons/ri";
// import { HiOutlinePencil } from "react-icons/hi";
import { TbCopy } from "react-icons/tb";

const Actions = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    const optionClick = (value) => {
        setIsOpen(false);
    }

    return (
        <div className="relative cursor-pointer px-3 py-2">
            <HiDotsVertical onClick={toggleMenu} />
            {isOpen && (
                <div className="absolute top-0 -left-24 z-20 bg-white border p-3 flex flex-col justify-center items-start gap-2 rounded-md shadow-md">
                    <div className="flex gap-2 items-center" onClick={() => optionClick("Edit")}>
                        <TbCopy size={18} /><span>Edit</span>
                    </div>
                    <div className="flex gap-2 items-center" onClick={() => optionClick("View")}>
                        <FiEye size={18} /><span>View</span>
                    </div>
                    <div className="flex gap-2 items-center" onClick={() => optionClick("Delete")}>
                        <RiDeleteBinLine size={18} /><span>Delete</span>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Actions