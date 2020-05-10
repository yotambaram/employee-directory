import React from 'react';

// key {emp.login.uuid}




const hundleInput = event=>{
  setSearchState(event.target.value);
  }



function Search() {
    return (
      <div>
        <form>
          <input onChange={hundleInput} type="text"/>
        </form>
      </div>
    );

  
}

export default Search;












