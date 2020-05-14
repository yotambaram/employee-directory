import React, { useState, useEffect } from "react";
import Employee from "./employee";
import API from "../utils/api"
import "./container.css"

function Container() {
  const [permEmployeeState, setPermEmployeeState] = useState([])
  const [employeeState, setEmployeeState] = useState([])
  const [searchState, setSearchState] = useState("");
  const [sortedState, setSortedState] = useState();

  useEffect(() => {
    API.getEmployees().then(res => {
      setPermEmployeeState(res.data.results)
      setEmployeeState(res.data.results)

    }).catch(err => {
      console.log(err);
    })
  }, [])

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
  }, [searchState, permEmployeeState])

  useEffect(() => {
    const NewEmployeeState = [...employeeState];
    if (NewEmployeeState.length > 0) {
      if (NewEmployeeState[0].name.first > NewEmployeeState[NewEmployeeState.length - 1].name.first) {
        NewEmployeeState.sort((a, b) => a.name.first > b.name.first ? 1 : -1)
      } else {
        NewEmployeeState.sort((a, b) => a.name.first < b.name.first ? 1 : -1)
      }
      setEmployeeState(NewEmployeeState);
    }
  }, [sortedState])

  const hundleInput = event => {
    setSearchState(event.target.value.toLowerCase());
  }

  const hundleSort = () => {
    setSortedState(...employeeState);
  }
  return (
    <div className="container">
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