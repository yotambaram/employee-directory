
import React, { useState, useEffect } from "react";
import Employee from "./employee";
import API from "../utils/api"
import "./container.css"
//import Search from './search'




function Container() {
  //permanent/defulte state
  const [permEmployeeState, setPermEmployeeState] = useState([])
  //state to desplay
  const [employeeState, setEmployeeState] = useState([])
  //search/filter state
  const [searchState, setSearchState] = useState("");
  //sort state
  const [sortedState, setSortedState] = useState();



  //GET THE LIST FROM API
  useEffect(() => {
    API.getEmployees().then(res => {
      //console.log("FROM API" ,res.data.results)
      // set permanent state
      setPermEmployeeState(res.data.results)
      // set state to work with
      setEmployeeState(res.data.results)
      

    }).catch(err => {
      console.log(err);
    })
  }, [])

  //FILER LIST BY SEARCH
  useEffect(() => {
    const NewEmployeeState = [...permEmployeeState];
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
    //create new list to work on
    const NewEmployeeState = [...permEmployeeState];
    //sort  (if  < || >)
    //change the arry 
    NewEmployeeState.sort((a, b) => a.name.first > b.name.first ? 1 : -1)
    setEmployeeState(NewEmployeeState);
  }, [sortedState])




  //INPUT HUNDEL
  const hundleInput = event => {
    setSearchState(event.target.value);
  }

  //SORT HUNDEL
  const hundleSort = () => {
    setSortedState(employeeState);
  }


    return (
      <div className = "container">
        <div>
          <form>
            <input onChange={hundleInput} type="text" />
          </form>
        </div>
        <div><button onClick={hundleSort}>sort</button></div>
        <a>content</a>
        <ul className="employee-card" >
          <div className="row headline">
              <a className="col-1"></a>
              <a className="col-2" onClick={hundleSort} href="#"> First Name</a>
              <a className="col-2">Last Name</a>
              <a className="col-2">Phone</a>
              <a className="col-4">Email</a>
              <a className="col-1">Age</a>
          </div>
          <Employee employeeState={employeeState} />
        </ul>    
      </div>


    )


  }


   export default Container;