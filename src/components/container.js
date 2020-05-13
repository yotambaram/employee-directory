import React, { useState, useEffect } from "react";
import Employee from "./employee";
import API from "../utils/api"
import "./container.css"



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
      if (employee.name.first.toLowerCase().includes(searchState)) {
        return true
      } else {
        return false
      }
    })
    setEmployeeState(filteredEmployee);
  },[searchState, permEmployeeState])

    //UPDATE SORTED LIST
    useEffect(() => {
      //create new list to work on
      const NewEmployeeState = [...employeeState];
      //sort the the arry by a-z or z-a
      if(NewEmployeeState.length > 0 ){
        if(NewEmployeeState[0].name.first > NewEmployeeState[NewEmployeeState.length-1].name.first) {
          NewEmployeeState.sort((a, b) => a.name.first > b.name.first ? 1 : -1)
        } else {
          NewEmployeeState.sort((a, b) => a.name.first < b.name.first ? 1 : -1)
        }
        setEmployeeState(NewEmployeeState);
      }
      // eslint-disable-next-line
      }, [sortedState])
      
  //INPUT HUNDEL
  const hundleInput = event => {
    setSearchState(event.target.value.toLowerCase());
  }

  //SORT HUNDEL
  const hundleSort = () => {
    setSortedState(...employeeState);
  }
    return (
      <div className = "container">
          <div className="row filter-holder">
            <div className="col-12">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <span className="navbar-brand">Find</span>
              <span className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span></span>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <form className="form-inline my-2 my-lg-0">
                  <input onChange={hundleInput} className="form-control mr-sm-2" type="search" placeholder="Filter" aria-label="Search" />
                </form>
              </div>
            </nav>
          </div>
        </div>       
        <div id="employee-holder" className="row">
          <ul className="employee-card" >
            <div className="row headline">
                <span className="col-1"></span>
                <span className="col-2 sort-text" onClick={hundleSort}> First Name</span>
                <span className="col-2">Last Name</span>
                <span className="col-2">Phone</span>
                <span className="col-3">Email</span>
                <span className="col-2" onClick={hundleSort}>Age</span>
            </div>
            {employeeState.length > 0 ? <Employee employeeState={employeeState} /> : null}
          </ul>    
        </div>

      </div>
    )


  }


   export default Container;