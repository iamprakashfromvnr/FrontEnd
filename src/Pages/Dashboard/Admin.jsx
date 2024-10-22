import React, { useState } from 'react';
import Dropdown from '../../Components/Dashboard/AdminDash/Dropdown';
import ClientList from '../../Components/Dashboard/AdminDash/ClientList';
import Status from '../../Components/Dashboard/AdminDash/Status';
import Table from '../../Components/Dashboard/AdminDash/Table';
import companies from '../../Components/Dashboard/AdminDash/companies'; 
import Graph from '../../Components/Dashboard/AdminDash/CustomLegend';
import Stafftable from '../../Components/Dashboard/AdminDash/Stafftable';
import Staffdata from '../../Components/Dashboard/AdminDash/Staffdata';
const Index = () => {
    const company = { totalCompany: 1567, state: 454, district: 219, branch: 53 };
    const complianceData = { complied: 60, notComplied: 20, partiallyComplied: 12, overdue: 8 };

    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(10);
    const totalPages = 10;

    const chartData = [
        { name: "Jan", Complied: 30, "NotComplied": 40, Partially: 20, Overdue: 10 },
        { name: "Feb", Complied: 35, "NotComplied": 30, Partially: 25, Overdue: 10 },
        { name: "Mar", Complied: 40, "NotComplied": 20, Partially: 30, Overdue: 10 },
        { name: "Apr", Complied: 50, "NotComplied": 25, Partially: 45, Overdue: 10 },
        { name: "May", Complied: 45, "NotComplied": 15, Partially: 30, Overdue: 10 },
        { name: "Jun", Complied: 50, "NotComplied": 20, Partially: 25, Overdue: 5 },
        { name: "Jul", Complied: 60, "NotComplied": 15, Partially: 20, Overdue: 5 },
        { name: "Aug", Complied: 55, "NotComplied": 30, Partially: 25, Overdue: 10 },
        { name: "Sep", Complied: 65, "NotComplied": 20, Partially: 15, Overdue: 10 },
        { name: "Oct", Complied: 60, "NotComplied": 10, Partially: 20, Overdue: 30 },
        { name: "Nov", Complied: 70, "NotComplied": 5, Partially: 15, Overdue: 10 },
        { name: "Dec", Complied: 75, "NotComplied": 5, Partially: 10, Overdue: 10 },
    ];

    return (
        // <div style={{ width: '95%' }} className='ms-10 font-poppins'>
        //     <Dropdown />
        //     <ClientList
        //         totalCompany={company.totalCompany}
        //         state={company.state}
        //         district={company.district}
        //         branch={company.branch} />
        //     <Status {...complianceData} />

        //     <div className="p-4">
        //         <Table
        //             companies={companies}
        //             currentPage={currentPage}
        //             totalPages={totalPages}
        //             onPageChange={setCurrentPage}
        //             itemsPerPage={itemsPerPage}
        //             onItemsPerPageChange={setItemsPerPage}
        //         />
        //     </div>
        //     <Graph
        //         chartData={chartData}
        //         title="Compliance Status for the period April 2024 to August 2024"
        //     />
        //     <Stafftable Staffdata={Staffdata} />
        // </div>
        <div style={{ width: '95%' }} className='ms-10 font-poppins'>
            <Dropdown />
            <ClientList
                totalCompany={company.totalCompany}
                state={company.state}
                district={company.district}
                branch={company.branch} />
            <Status {...complianceData} />

            <div className="p-4">
                <Table
                    companies={companies}
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={setCurrentPage}
                    itemsPerPage={itemsPerPage}
                    onItemsPerPageChange={setItemsPerPage}
                />
            </div>
            <Graph
                chartData={chartData}
                title="Compliance Status for the period April 2024 to August 2024"
            />
            <Stafftable Staffdata={Staffdata} />
        </div>
    );
}

export default Index;  