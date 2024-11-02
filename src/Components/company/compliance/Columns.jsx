import Actions from "../ActionMenu";

export const Columns = [
    {
        name: 'Sno',
        selector: (row) => row.sno,
        sortable: true,
        width: '100px',
    },
    {
        name: 'Nature of activity',
        selector: (row) => row.natureOfActivity,
        sortable: true,
    },
    {
        name: 'Activity',
        selector: (row) => row.activity,
        sortable: true,
    },
    {
        name: 'Name of the form',
        selector: (row) => row.nameOfForm,
        sortable: true,
    },
    {
        name: 'Applicable Law',
        selector: (row) => row.applicationLaw,
        sortable: true,
    },
    {
        name: 'Type of act',
        selector: (row) => row.typeOfAct,
        sortable: true,
    },
    {
        name: 'Actual filling frequency',
        selector: (row) => row.actualFillingFrequency,
        sortable: true,
    },
    {
        name: 'Last filled date',
        selector: (row) => row.lastFilledDate,
        sortable: true,
    },
    {
        name: 'Filling frequency',
        selector: (row) => row.fillingFrequency,
        sortable: true,
    },
    {
        name: 'Actions',
        cell: (row) => <Actions />,
        ignoreClick: true,
        allowOverflow: true,
        width: '100px',
    },
]