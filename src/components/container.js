
  import React, { useState, useEffect } from "react";
  import Employee from "./employee";
  import API from "../utils/api"
     //import Search from './search'




   function Container() {
    const [employeeState, setEmployeeState] = useState([])
    const [searchState,setSearchState] = useState();
    useEffect(() => {
      API.getEmployees().then(res => {
        
        console.log("GOT FROM API" ,res.data.results)
        setEmployeeState(res.data.results)
        //setFilteredEmployeeState(res.data.results)
      }).catch(err=>{
        console.log(err);
    })
  },[])
  
     const hundleInput = (event) => {
      event.preventDefault();
      setSearchState(event.target.value)
      
     }
     return(
      <div>
        <form>
          <input onChange ={hundleInput}/>
        </form>
        <a>content</a>
        <Employee employeeState={employeeState}/>
      
      </div>
      
      
     )


   }


   export default Container;