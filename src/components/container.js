
   import React, { useState, useEffect, setSearch } from "react";
    import Search from './search'
    import Employee from './employee'
    
    //input value for search prompt
    const handleInputChange = event => {
      setSearch(event.target.value);
    };
    
    function Container() {
      return (
        <div className="container">
          {/*search prompt*/} 
          {/*<Search handleInputChange={handleInputChange} results={search}/>*/}
          {/*search prompt*/}
          <Employee />
        </div>
      );
    }
    
    export default Container;
    