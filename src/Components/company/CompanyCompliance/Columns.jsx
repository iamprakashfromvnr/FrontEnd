import Actions from "./Actions"
import ENHR from '../../../Images/sky.jpg'
import { MdOutlineLocationOn } from "react-icons/md";
import Score from "./Score";

export const Columns = [
    {
        name: 'S.no',
        selector: (row) => row.sno,
        sortable: true,
        width: '80px',

    },
    {
        name: 'Company',
        cell: (row) => <span className="flex justify-center items-center gap-2">
            <img src={ENHR} alt="logo" className="w-9 h-9 rounded-full" />{row.company}
        </span>,
        sortable: true,
        width: '240px',
    },
    {
        name: 'State',
        cell: (row) => <span className="flex justify-center items-center gap-1">
            <MdOutlineLocationOn /> {row.state}
        </span>,
        sortable: true,
        width: '140px',
    },
    {
        name: 'Branch',
        cell: (row) => <span className="flex justify-center items-center gap-1">
            <MdOutlineLocationOn /> {row.branch}
        </span>,
        sortable: true,
        width: '120px'
    },
    {
        name: 'Compliance',
        selector: (row) => row.compliance,
        sortable: true,
    },
    {
        name: 'Assign Staff',
        selector: (row) => row.staff,
        sortable: true,
    },
    {
        name: 'Priority',
        selector: (row) => row.priority,
        sortable: true,
        width: '100px',
    },
    {
        name: 'Score',
        cell: (row) => <Score data={row.score} />,
        sortable: true,
        width: '100px'
    },
    {
        name: 'Status',
        selector: (row) => <span className={`${row.status === 'Complied' ? 'bg-green-400'
            : `${row.status === 'Not Complied' ? 'bg-red-400'
                : `${row.status === 'Partially Complied' ? 'bg-yellow-600'
                    : `${row.status === 'Over Due' ? 'bg-orange-600' : ''}`}`}`}
                    rounded-full flex justify-center items-center w-32 p-1 font-b`}>{row.status}</span>,
        sortable: true,
        width: '160px',
        center: true,
    },
    {
        name: 'Action',
        cell: (row) => <Actions />,
        ignoreClick: true,
        allowOverflow: true,
        center: true,
        width: '100px'
    },
]