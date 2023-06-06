import logo from '../assets/logo.jpg';
import { useState} from 'react';


function AddDetails (props)
{

  const[EmployeeName,setEmployeeName]=useState('');
  const[EmployeeSurname,setEmployeeSurname]=useState('');
  const[EmployeeEmail,setEmployeeEmail]=useState('');
  const[EmployeeBio,setEmployeeBio]=useState('');
  const[EmployeeImage,setEmployeeImage]=useState('');
  const[EmployeeDate,setEmployeeDate]=useState('');
  const[EmployeePosition,setEmployeePosition]=useState('');
  const[EmployeeNumber,setEmployeeNumber]=useState('');

  
  const add= (()=>{
    props.add(EmployeeName,EmployeeSurname,EmployeeEmail,EmployeeBio,EmployeeImage,EmployeeDate,EmployeePosition,EmployeeNumber);
  })

    return (
        <div>

 <div> 
   <div className='logo'> 
   <img src={logo} alt="logo"/>
</div>
</div>   

<div>
  <h3>Register a new account</h3>
  <input type ='text' placeholder='Name' onChange={(event)=>setEmployeeName(event.target.value)}/><br></br>
      <input type='text' placeholder='surname' onChange={(event)=>setEmployeeSurname(event.target.value)}/><br></br>
      <input type='email' placeholder='email address' onChange={(event)=>setEmployeeEmail(event.target.value)}/><br></br>
      <input type='text' placeholder='bio' onChange={(event)=>setEmployeeBio(event.target.value)}/><br></br>
      <input type='file' placeholder='insert image' onChange={(event)=>setEmployeeImage(event.target.value)}/><br></br>
      <input type='date' placeholder='date of birth' onChange={(event)=>setEmployeeDate(event.target.value)}/><br></br>
      <input type='text' placeholder='position' onChange={(event)=>setEmployeePosition(event.target.value)}/><br></br>
      <input type='text' placeholder='phone number' onChange={(event)=>setEmployeeNumber(event.target.value)}/><br></br>

      <button onClick={add}>Create Account</button>
    </div>


        </div>
    )
}

export default AddDetails;