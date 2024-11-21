import ActionMenu from "./ConsolidateAction"
import { MdOutlineLocationOn } from "react-icons/md";
import img from "../../Images/sky.jpg"
import Dummy2 from "./ScoreDummy";
const columns = [
    {
        name: 'S NO',
        selector: row => row.sno,
        sortable: true,
        width: '80px'
    },
    {
        name: 'Company',
        cell: (row) => <span className="flex justify-center items-center gap-3"> <img src={img} alt="Picture" className="w-9 h-9  rounded-full" /> {row.company}</span>,
        sortable: true,
        width:'220px',
        center:1
    },
    {
        name: 'State',
        cell: (row) => <span className="flex justify-center items-center gap-0.5"><MdOutlineLocationOn size={22} /> {row.state}</span>,
        sortable: true,
        center:1,
        width:'160px'
    },
    {
        name: 'Branch',
        cell: (row) => <span className="flex justify-center items-center gap-0.5"> <MdOutlineLocationOn size={22} /> {row.branch}</span>,
        sortable: true,
        width:'130px',
        center:1
    },
    {
        name: 'Compliance',
        selector: row => row.compliance,
        sortable: true,
        width:'130px',
        center:1
    },
    {
        name: 'Assign staff',
        selector: row => row.assignstaff,
        sortable: true,
        width:'110px',
    },
    {
        name: 'Priority',
        selector: row => row.priority,
        sortable: true,
        width:'90px',     
    },
    {
        name: 'Score',
        cell: (row) => (<Dummy2 percent={row.score} />),
        selector: row => row.score,
        width:'90px',
        center:1
    },
    {
        name: 'Status',
        cell: (row) => <span className={`${row.status === 'Complied' ? 'bg-green-400'
            : `${row.status === 'Not Complied' ? 'bg-red-400'
                : `${row.status === 'Partially Complied' ? 'bg-yellow-400'
                    : `${row.status === 'Over Due' ? 'bg-orange-400' : ''}`}`}`
            } rounded-full  items-center w-44 text-center py-1 px-2 text-sm text-nowrap`}>{row.status}</span>,
        sortable: true,
        width:'160px',
        center:1
    },
    {
        name: 'Action',
        selector: row => row.action,
        cell: (row) => <ActionMenu row={row} />,
        right: 1,
        width: '100px',
        center:1
    },
]
export default columns














