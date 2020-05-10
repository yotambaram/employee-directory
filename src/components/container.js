
import React, { useState, useEffect } from "react";
import Employee from "./employee";
import API from "../utils/api"
//import Search from './search'




function Container() {
  const [employeeState, setEmployeeState] = useState([])
  const [workEmployeeState, setWorkEmployeeState] = useState([])
  const [searchState, setSearchState] = useState("");
  const [sortedState, setSortedState] = useState();

  //GET THE LIST FROM API
  useEffect(() => {
    API.getEmployees().then(res => {
      //console.log("FROM API" ,res.data.results)
      setEmployeeState(res.data.results)
      setWorkEmployeeState(res.data.results)

    }).catch(err => {
      console.log(err);
    })
  }, [])

  //FILER LIST BY SEARCH
  useEffect(() => {
    const NewEmployeeState = [...workEmployeeState];
    const filteredEmployee = NewEmployeeState.filter(employee => {
      if (employee.name.first.includes(searchState)) {
        return true
      } else {
        return false
      }
    })
    setEmployeeState(filteredEmployee);
  },[searchState])


  //UPDATE SORTED LIST
  useEffect(() => {
    //sort condition (if  < || >)
    //change the arry 

    //setEmployeeState(sortedEmployee);
  }, [/*sortedState*/])

  //INPUT HUNDEL
  const hundleInput = event => {
    setSearchState(event.target.value);
  }

  //SORT HUNDEL
  const hundleSort = () => {
    setSortedState(employeeState);
  }


    return (
      <div>
        <div>
          <form>
            <input onChange={hundleInput} type="text" />
          </form>
        </div>

        <div><button onClick={hundleSort}>Name</button></div>
        <a>content</a>
        <Employee employeeState={employeeState} />

      </div>


    )


  }


   export default Container;