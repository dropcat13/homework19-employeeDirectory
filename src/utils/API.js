import axios from "axios";
const BASEURL = "https://randomuser.me/api/?results=200&nat=us";

export default {
  search: function(query) {
    return axios
    .get(BASEURL + query)
    .then(res => {
      const employees = res.data;
      return employees.map(employee => {
        return {
          img: employee.picture.thumbnail,
          name: employee.name,
          phone: employee.phone,
          email: employee.email,
          DOB: employee.dob.date
        };
      });
    });
  },

  getEmployees: function(query) {
    return axios
    .get(BASEURL)
    .then(res => {
      console.log(res);
      const employees = res.data.results;
      return employees.map(employee => {
        return {
          img: employee.picture.thumbnail,
          name: `${employee.name.first} ${employee.name.last}`, 
          phone: employee.phone,
          email: employee.email,
          DOB: employee.dob.date
        };
      });
    });
  }
};