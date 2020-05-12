    import React from 'react';
    import "./employee.css"
    
// key {emp.login.uuid}
    
    function Employee(props) {
      //console.log("EMPLOEE COMPONENT", props.employeeState)
        return (
          <li className="employee-card" key = {props.login}>
             {props.employeeState.map(emp=> (
                  <div className="row" >
                     <a className="col-1 col-style id-element"><img src={emp.picture.thumbnail} alt={emp.name.first}/></a>
                     <a className="col-2 col-style id-elemen">{emp.name.first}</a>
                     <a className="col-2 col-style id-elemen">{emp.name.last}</a>
                     <a className="col-2 col-style id-elemen">{emp.phone}</a>
                     <a className="col-3 col-style id-elemen">{emp.email}</a>
                     <a className="col-2 col-style id-elemen">{emp.dob.age}</a>  
                  </div>    
              ))}
            </li>
        );
    }
    
    export default Employee;