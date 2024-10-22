import ActionMenu from "./ViewActions";
const columns =[
   
    {
      name:'S NO',
      selector: row=>row.sno,
      sortable:true, 
      width:'100px'  
      
    },
    {
      name:'Activity',
      selector: row=>row.activity,
      sortable:true,
      width:'175px'

    },
    {
      name:'Applicable Labour Act',
      selector: row=>row.applicablelabouract,
      sortable:true,
      width:'330px'    
    },
    {
        name:'Type of Act',
        selector: row=>row.typeofact,
        sortable:true, 
        width:'150px'     
    },
    {
        name:'Frequency',
        selector: row=>row.frequency,
        sortable:true,
        width:'250px'
    },
    {
        name:'Priority',
        selector: row=>row.priority,
        sortable:true, 
    },
    {
      name:'Actions',
      cell:(row)=><ActionMenu row={row}/>,
      ignoreClick:true,
      selector: row=>row.actions,
      right:true
    },
  ];
  export default columns;
