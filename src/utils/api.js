import axios from "axios";


//API to generate random users for hw assignment: https://randomuser.me/
const apiQuery = "https://randomuser.me/api/?results=100&nat=us"

export default {
  getEmployees: function() {
    return axios.get(apiQuery);
  },
};
