function DisplayDetails (props)
{
    return (
        <div>
               <h3>Employee Details</h3>
               {props.Employee.map((data)=>(
                <div>
               
               <div className="employee-Details">
                      <div>
                     <h6>{data.EmployeeName}</h6>
                     </div>
                     <div>
                    <h6>{data.EmployeeSurname}</h6>
                    </div>
                    <div>
                    <h6>{data.EmployeeEmail}</h6>
                    </div>
                    <div>
                    <h6>{data.EmployeeBio}</h6>
                    </div>
                    <div>
                    <h6>{data.EmployeeImage}</h6>
                    </div>
                    <div>
                    <h6>{data.EmployeeDate}</h6>
                    </div>
                    <div>
                    <h6>{data.EmployeePosition}</h6>
                    </div>
                    <div>
                    <h6>{data.EmployeeNumber}</h6>
                    </div>

               </div>
                    

                </div>
               ))}
            
      
        </div>
    )
}
export default DisplayDetails