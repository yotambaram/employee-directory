
  import React, { useState, useEffect } from "react";
  import Employee from "./employee";
  import API from "../utils/api"
  //import Search from './search'




   function Container() {
    const [employeeState, setEmployeeState] = useState([])
    const [workEmployeeState, setWorkEmployeeState] = useState([])
    const [searchState,setSearchState] = useState("");

    useEffect(() => {
      API.getEmployees().then(res => {
        //console.log("GOT FROM API" ,res.data.results)
        setEmployeeState(res.data.results)
        setWorkEmployeeState(res.data.results)
        
      }).catch(err=>{
        console.log(err);
    })
  },[])

  useEffect(()=>{
    const NewEmployeeState=[...workEmployeeState];
    const filteredEmployee = NewEmployeeState.filter(employee=>{
        if(employee.name.first.includes(searchState)){
            return true
        } else {
            return false
        }
    })
    setEmployeeState(filteredEmployee);
},[searchState])
  
  const hundleInput = event=>{
    setSearchState(event.target.value);
    }

     return(
      <div>
         <div>
        <form>
          <input onChange={hundleInput} type="text"/>
        </form>
      </div>
        <a>content</a>
        <Employee employeeState={employeeState}/>
      
      </div>
      
      
     )


   }


   export default Container;