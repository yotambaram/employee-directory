    import React from 'react';
    import "./employee.css"
    
// key {emp.login.uuid}
    
    function Employee(props) {
      //console.log("EMPLOEE COMPONENT", props.employeeState)
        return (
          <li className="employee-card" >
             {props.employeeState.map(emp=> (
                  <div className="row">
                     <a className="col-1 col-style"><img src={emp.picture.thumbnail} alt={emp.name.first}/></a>
                     <a className="col-2 col-style">{emp.name.first}</a>
                     <a className="col-2 col-style">{emp.name.last}</a>
                     <a className="col-2 col-style">{emp.phone}</a>
                     <a className="col-4 col-style">{emp.email}</a>
                     <a className="col-1 col-style">{emp.dob.age}</a>  
                  </div>    
              ))}
            </li>
        );
    }
    
    export default Employee;