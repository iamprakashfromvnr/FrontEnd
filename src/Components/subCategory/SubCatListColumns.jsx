import ActionMenu from "../category/ActionMenu";
import { HiDotsVertical } from "react-icons/hi";
const columns =[
   
    {
      name:'S NO',
      selector: row=>row.sno,
      sortable: true,
    },
    {
      name:'Sub Category',
      selector: row=>row.subcategory,
      sortable: true,
      grow:2,
    },
    {
      name:'Category',
      selector: row=>row.category,
      sortable: true,
      grow:2,
    },
    {
      name:'Actions',
      cell:(row)=><button> <HiDotsVertical/></button>,
      cell:(row)=> <ActionMenu row={row}/>,
      ignoreClick:true,
      selector: row=>row.actions,
      right:true,
    },
  ];
  export default columns;