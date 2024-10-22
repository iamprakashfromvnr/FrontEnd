
import React, { useState } from 'react'
import ActionMenu from './ActionMenu'

export const columns=[{
    name:'SNO',
    selector:(row)=>row.sno,
    sortable:true,
    width:'100px',
},
{
    name:'Activity',
    selector:(row)=>row.activity,
    sortable:true,
    
},
{
    name:'Name of the Form',
    selector:(row)=>row.formname,
    sortable:true,
},
{
    name:'Applicable Law',
    selector:(row)=>row.applicablelaw,
    sortable:true,
    grow:3
},
{
    name:'Type of Act',
    selector:(row)=>row.acttype,
    sortable:true,
    width:'120px',
} ,
{
    name:'Due Date',
    selector:(row)=>row.duedate,
    sortable:true,

},
{
    name:'Period',
    selector:(row)=>row.period,
    sortable:true,
    width:'100px',
    
},
{
    name:'Section',
    selector:(row)=>row.section,
    sortable:true,
    grow:1.5
},
{
    name:'Priority',
    selector:(row)=>row.priority,
    sortable:true,
    width:'100px',
},
{
    name:'Actions',
    cell:(row)=><ActionMenu row={row}/>,
    ignoreClick:true,
    // right:true,
    width:'100px',
},

]