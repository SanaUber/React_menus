const express = require('express')
  Employees=require('./dbfiles/Insertemployee')
 dbOperations= require('./dbfiles/dbOperations')
const app = express()

const bodyparser=require('body-parser')
const cors =require('cors');
app.use(cors());
app.use(express.urlencoded({extended: true})); 
app.use(express.json());
app.use(express.urlencoded());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
//api called to delete
app.post('/delete',async(req,res)=>{console.log(req.body.body)

console.log('gone delete'+'   ')
const obj = JSON.parse(req.body.body);
console.log(obj.Employee_Code);
var data = req.body;
  const result=await dbOperations.deleteEmployeeDetails(obj.Employee_Code);
 
})
//api called to update
app.post('/update',async(req,res)=>{
  const obj = JSON.parse(req.body.body);
  console.log(obj.Employee_Code);
  var data = req.body;
    const result=await dbOperations.UpdateEmployeeDetails(obj);
  

  
  })
  ////api called to add the record
app.post('/insert',async(req,res)=>{
  console.log(req.body.body);
  console.log('here')

  const obj = JSON.parse(req.body.body);
  
 
  const result=await dbOperations.insertEmployeeDetails(obj);
 // res.send(result.newRow)

})




////api called to show all records
app.get('/show',async(req,res)=>{
  console.log('fetching...')
    const result= await dbOperations.getEmployeeDetails()
   
    res.send(result.recordset)
}) 


//3000 port  app is listening

app.listen((3000),()=>console.log("3000 is listening"))