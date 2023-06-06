import { useState } from 'react';
import './App.css';
import AddDetails from './components/add';
import DisplayDetails from './components/displayDetails';



function App() {


    
    const[Employee,setEmployee]=useState([]); 

    const add = ((EmployeeName, EmployeeSurname,EmployeeEmail,EmployeeBio,EmployeeImage,EmployeeDate,EmployeePosition,EmployeeNumber)=>{setEmployee((Employee)=>[...Employee,{EmployeeName:EmployeeName,EmployeeSurname:EmployeeSurname,EmployeeEmail:EmployeeEmail,EmployeeBio:EmployeeBio,EmployeeImage:EmployeeImage,EmployeeDate:EmployeeDate,EmployeePosition:EmployeePosition,EmployeeNumber:EmployeeNumber}])});
      
  console.log(Employee);
  return (
    <div className="container">

      <AddDetails add={add}/>
      <DisplayDetails Employee={Employee}/>
      
    </div>
  );
}

export default App;
