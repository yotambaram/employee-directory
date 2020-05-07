import React, { useState, useEffect } from 'react';
import API from "../utils/api";

function Search() {
  // Declare a new state variable, which we'll call "count"
  const [search, setSearch] = useState("");
  const [img, setImg] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [birthday, setBirthDay] = useState("");

  //componentDidUpdate in HOOKS
  useEffect(() => {
    if (!search) {
      return;
    }

    API.getEmployees(search)
    .then(employeeArr => {
        if (employeeArr.data.length === 0) {
          throw new Error("No results found.");
        }
        if (employeeArr.data.status === "error") {
          throw new Error(employeeArr.data.message);
        }
        //employeeArr.forEach(element => {
            setName(employeeArr.data.results[0]);
        })
      //.catch(err => setError(err));
  }, [search]);

  const handleInputChange = event => {
    setSearch(event.target.value);
  };


    return (
        <div>

          handleInputChange={handleInputChange}
          results={search}
    </div>
      );
    
}
export default Search;



  
////////////////
//EMPLOYEE[0]
/* 
results": [
    {
    "gender": "female",
    "name": {
    "title": "Miss",
    "first": "Kylie",
    "last": "Romero"
    },
    "location": {
    "street": {
    "number": 7012,
    "name": "Timber Wolf Trail"
    },
    "city": "Durham",
    "state": "Pennsylvania",
    "country": "United States",
    "postcode": 91512,
    "coordinates": {
    "latitude": "81.3167",
    "longitude": "14.2138"
    },
    "timezone": {
    "offset": "-1:00",
    "description": "Azores, Cape Verde Islands"
    }
    },
    "email": "kylie.romero@example.com",
    "login": {
    "uuid": "8c46bd4c-e8a9-439b-9ca3-8ba68ef0bf4b",
    "username": "bluelion740",
    "password": "novifarm",
    "salt": "GOMpLThV",
    "md5": "cfacdb9757121175eff2166b40984872",
    "sha1": "c7bb502cc43764b8967b9c0a1f083f8acc6a377f",
    "sha256": "9d516d95c7ac11326068fb584d49de61a2decf3d06d6081ec3a4193f0ec6de16"
    },
    "dob": {
    "date": "1981-04-27T07:24:58.743Z",
    "age": 39
    },
    "registered": {
    "date": "2008-10-24T22:23:27.189Z",
    "age": 12
    },
    "phone": "(890)-792-6376",
    "cell": "(992)-142-9861",
    "id": {
    "name": "SSN",
    "value": "823-85-9651"
    },
    "picture": {
    "large": "https://randomuser.me/api/portraits/women/49.jpg",
    "medium": "https://randomuser.me/api/portraits/med/women/49.jpg",
    "thumbnail": "https://randomuser.me/api/portraits/thumb/women/49.jpg"
    },
    "nat": "US"
    },
]
*/