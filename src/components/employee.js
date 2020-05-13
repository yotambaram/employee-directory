    import React from 'react';
    import "./employee.css"
    
// key {emp.login.uuid}
    
    function Employee(props) {
        return (
          <li className="employee-card" >
             {props.employeeState.map(emp=> (
                  <div className="row" key = {emp.id.value}>
                     <span className="col-1 col-style id-element"><img src={emp.picture.thumbnail} alt={emp.name.first}/></span>
                     <span className="col-2 col-style id-elemen">{emp.name.first}</span>
                     <span className="col-2 col-style id-elemen">{emp.name.last}</span>
                     <span className="col-2 col-style id-elemen">{emp.phone}</span>
                     <span className="col-3 col-style id-elemen">{emp.email}</span>
                     <span className="col-2 col-style id-elemen">{emp.dob.age}</span>  
                  </div>    
              ))}
            </li>
        );
    }
    
    export default Employee;