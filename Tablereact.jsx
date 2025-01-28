import React,{useState,useEffect,Component} from "react"
import MTable from "material-table"
import { alpha } from '@material-ui/core/styles'
import ColumnResizer from "react-table-column-resizer";
import Dialog from "@material-ui/core/Dialog";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import Button from "@material-ui/core/Button";
import './Table.css';
import axios from "axios";
import Paper from "@material-ui/core/Paper";
import Edit from "@material-ui/icons/Edit";
import ViewColumnIcon from "@material-ui/icons/ViewColumn";
import mock_data from "./mock_data.json"
    // for getting the columns name
   
    const columns=[{title:"Employee Code",field:"Employee_Code" },
    {title:"Employee Name",field:"Employee_Name"},
    {title:"Date-of-birth",field:"Date_of_birth" ,defaultValue:"null",type:"date"},
    {title:"Date-of-joining",field:"Date_of_joining",defaultValue:"null",type:"date"},
    {title:"Department",field:"Department"},
  
    {title:"Report-to",field:"Report_to"},
    {title:"Contact-no",field:"Contact_no"},
    {title:"Resigned-status",field:"Resigned_status"},
     {title:"Resigned date",field:"Resigned_date",defaultValue:"null",type:"date"}

    ]
     
     const Tablereact=()=>{
      const  [data,setData]= useState([])//changing state of data according to the functions
    
      
  
  useEffect(() => {
    getAllEmployees();
}, []);

//to show all data
const getAllEmployees = async () => {
    const response = await axios.get('http://localhost:3000/show');
    setData(response.data);
}



    const [selectedRow,setSelectedRow]=useState();
     const setInput=(e)=>{
      const[name,value]=e.target
     }
       return(
      
       <Paper>
        <div>
     <MTable  title="Employee information"

   data={data}
    columns={columns}
    
      editable={{
        onRowAdd:(newRow)=>new Promise((resolve,reject)=>{
          const addRows=[...data,newRow]
         setTimeout(()=> {setData(addRows)
          resolve()},2000)
        
          console.log( ...newRow.Employee_Name);
          
     
    //to insert data
          
          console.log(newRow)
          axios.post('http://localhost:3000/insert',{
           
            body:JSON.stringify ({...newRow}) 
  
             }
             )
        }
        ),
        onRowDelete:(selectedRow)=>new Promise((resolve,reject)=>{
          const index=selectedRow.tableData.id;
          const updatedRows=[...data]
          updatedRows.splice(index,1)
          setTimeout(()=> {setData(updatedRows)
            resolve()},2000)
            //to delete
          axios.post('http://localhost:3000/delete',{
           
            body:JSON.stringify({...selectedRow})})
              
        
            
        }),// to update
        onRowUpdate:(updatedRow,oldRow)=>new Promise((resolve,reject)=>{
          const index=oldRow.tableData.id;
          const updatedRows=[...data]
          updatedRows[index]=updatedRow
          setTimeout(()=> {setData(updatedRows)
          resolve()},2000)
          axios.post('http://localhost:3000/update',{
           
            body:JSON.stringify({...updatedRow})})
              
        
        })
      }}
      options={{
       
         pageSizeOptions: [5,10, 15, 25, 50, 100],
         paginationType: "stepped",
         padding: "small",
         filtering: true,
        columnsButton: true,
        actionsColumnIndex:-1,addRowPosition:"first",
      search: false,
        tableLayout: "fixed"}}
        
      

 
  />
 
 

 
    </div>
   
    </Paper> 
    )
   
     
}
export default Tablereact;