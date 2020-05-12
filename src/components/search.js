import React from 'react';

// key {emp.login.uuid}







function Search(props) {
    return (
      <div>
        <form>
          <input onChange={props.hundleInput} type="text"/>
        </form>
      </div>
    );

  
}

export default Search;












