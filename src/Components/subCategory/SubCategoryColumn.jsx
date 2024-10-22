import ActionMenu from "./SubCatAction";
const columns =[
   
    {
      name:'S NO',
      selector: row=>row.sno,
      sortable:true,   
      grow: -1   
    },
    {
      name:'Activity',
      selector: row=>row.activity,
      sortable:true,

    },
    {
      name:'Applicable Labour Act',
      selector: row=>row.applicablelabouract,
      sortable:true,
      width:'300px'
     
      
    },
    {
        name:'Type of Act',
        selector: row=>row.typeofact,
        sortable:true, 
        width:'100px'
        
        
    },
    {
        name:'Frequency',
        selector: row=>row.frequency,
        sortable:true
    },
    {
        name:'Priority',
        selector: row=>row.priority,
        sortable:true,
        width:'100px'
        
    },
    {
      name:'Actions',
      cell:(row)=><ActionMenu row={row}/>,
      ignoreClick:true,
      selector: row=>row.actions,
      sortable:true,
      right:true
    },
  ];
  export default columns;
