const config=require('./dbConfig'),
sql         =require('mssql');
const getEmployeeDetails=async()=>{
    //showing all data
    try{

        let pool= await sql.connect(config);
        let employees= await pool.request().query(`SELECT [Employee_Code]
        [Employee_Code]
      ,[Employee_Name]

      ,[Date_of_birth]
      ,[Date_of_joining]
      ,[Department]
      ,[Report_to]
      ,[Contact_no]
      ,[Resigned_status]
      ,[Resigned_date] 
       FROM [dbo].[Employee_details_DB]
   `);
        

        return employees;}

    
        catch(error)
        {
            console.error(error)

        }
    }
    const insertEmployeeDetails=async(Employees)=>{//inserting record
    try{
console.log(Employees)

        let pool= await sql.connect(config);
         console.log('indbinsert')
        let employees=await pool.request()
        .query( `INSERT INTO [dbo].[Employee_details_DB] 
   
        ([Employee_Code]
            ,[Employee_Name]
            ,[Date_of_birth]
            ,[Date_of_joining]
            ,[Department]
            ,[Report_to]
            ,[Contact_no]
            ,[Resigned_date]
            ,[Resigned_status])
            VALUES   
           (
           '${Employees.Employee_Code}',
'${ Employees.Employee_Name}',
'${Employees.Date_of_birth}'
,'${Employees.Date_of_joining}'
,'${ Employees.Department}',
'${Employees.Report_to}',
'${Employees.Contact_no}',
'${Employees.Resigned_date}',
'${Employees.Resigned_status}'
)
          

            `)
            
          
                     setmsg= "inserted succesfully"+Employees
            
    
           return setmsg;
       }
   
       
           catch(error)
           {
             const  setmsg= "Not inserted succesfully"+Employees
           
   
               return setmsg;
           }

        
    
    }
//deleting records
    const deleteEmployeeDetails=async(EmployeeId)=>{
        try{
   
            console.log('indboperation-delete')
            console.log(EmployeeId)
  
 console.log(`'${EmployeeId}'`)
            let pool= await sql.connect(config);
             let employees=await pool.request()
             .query( `DELETE FROM [dbo].[Employee_details_DB]
              WHERE Employee_Code='${EmployeeId}'`)
                
              
              
          
                setmsg= "Deleted succesfully"+EmployeeId
            
    
            return setmsg;
        }
    
        
            catch(error)
            {
              const  setmsg= "Not Deleted succesfully"+EmployeeId
            
    
                return setmsg;
            }
            }
            const UpdateEmployeeDetails=async(UpdatedEmployeeDetails)=>{
              //updating record
        try{
   UpdatedEmployeeDetails
            console.log('indboperation-update')
            console.log(UpdatedEmployeeDetails)

 console.log(`'${UpdatedEmployeeDetails.Employee_Code}'`)
 console.log(`'${UpdatedEmployeeDetails.Employee_Name}'`)
 console.log(`'${UpdatedEmployeeDetails.Date_of_birth}'`)
 console.log(`'${UpdatedEmployeeDetails.Date_of_joining}'`)
 console.log(`'${UpdatedEmployeeDetails.Department}'`)
  console.log(`'${UpdatedEmployeeDetails.Report_to}'`)
 console.log(`'${UpdatedEmployeeDetails.Contact_no}'`)
 console.log(`'${UpdatedEmployeeDetails.Resigned_date}'`)
 console.log(`'${UpdatedEmployeeDetails.Resigned_status}'`)
 if(`${UpdatedEmployeeDetails.Resigned_date}`===undefined||`${UpdatedEmployeeDetails.Resigned_date}`==='')
 `${UpdatedEmployeeDetails.Resigned_date.Resigned_date}`==null;
 console.log(`${UpdatedEmployeeDetails.Resigned_date}`)

            let pool= await sql.connect(config);
             let employees=await pool.request()
             .query( `UPDATE [dbo].[Employee_details_DB]
             SET [Employee_Name] = '${UpdatedEmployeeDetails.Employee_Name}'
                ,[Date_of_birth] ='${UpdatedEmployeeDetails.Date_of_birth}'
                ,[Date_of_joining] ='${UpdatedEmployeeDetails.Date_of_joining}'
                ,[Department] = '${UpdatedEmployeeDetails.Department}'
                ,[Report_to] = '${UpdatedEmployeeDetails.Report_to}'
                ,[Contact_no] = ${UpdatedEmployeeDetails.Contact_no}
                ,[Resigned_date]='${UpdatedEmployeeDetails.Resigned_date}'
                ,[Resigned_status] = '${UpdatedEmployeeDetails.Resigned_status}'
           WHERE [Employee_Code] = ${UpdatedEmployeeDetails.Employee_Code}`)
                
              
              
          
                setmsg= "Updated succesfully"+UpdatedEmployeeDetails
            
    
            return setmsg;
        }
    
        
            catch(error)
            {
              const  setmsg= "Not Updated succesfully"+UpdatedEmployeeDetails
            
    
                return setmsg;
            }
            }
            
    
    
            
        
        
//exporting the modules

        module.exports={insertEmployeeDetails,
            getEmployeeDetails,deleteEmployeeDetails,UpdateEmployeeDetails}