import Actions from "./Actions";
import CompanyIcon from "./CompanyIcon";
import UserIcon from "./UserIcon";

export const Columns = [
    {
        name: 'Sno',
        selector: (row) => row.sno,
        sortable: true,
        width: '100px',
    },
    {
        name: 'User',
        selector: (row) => (<UserIcon user={row.user} />),
        sortable: true,
    },
    {
        name: 'Designation',
        selector: (row) => row.designation,
        sortable: true,
    },
    {
        name: 'Company',
        selector: (row) => <CompanyIcon row={row.company} />,
        sortable: true,
    },
    {
        name: 'Modules',
        selector: (row) => row.modules,
        sortable: true,
    },
    {
        name: 'Actions',
        cell: (row) => <Actions row={row} />,
        ignoreClick: true,
        allowOverflow: true,
        right: true,
        width: '100px',
    },
]