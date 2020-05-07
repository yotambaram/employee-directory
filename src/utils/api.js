import axios from "axios";


//API to generate random users for hw assignment: https://randomuser.me/


export default {
  getEmployees: function() {
    return axios.get("https://randomuser.me/api/?results=100");
  },
};

