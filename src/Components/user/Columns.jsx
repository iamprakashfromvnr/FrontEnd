import ActionMenu from "./ActionMenu";

export const Columns = [
    {
        name: 'sno',
        selector: (row) => row.sno,
        sortable: true,
        width: '100px',
    },
    {
        name: 'User',
        selector: (row) => row.user,
        sortable: true,
        grow: 2,
    },
    {
        name: 'Designation',
        selector: (row) => row.designation,
        sortable: true,
        grow: 2,
    },
    {
        name: 'Company',
        selector: (row) => row.company,
        sortable: true,
        grow: 2,
    },
    {
        name: 'Modules',
        selector: (row) => row.modules,
        sortable: true,
        grow: 2,
    },
    {
        name: 'Actions',
        cell: (row) => (<ActionMenu/>),
        ignoreClick: true,
        allowOverflow: true,
        right: true,
        width: '200px',
    },
]