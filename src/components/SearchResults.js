import React from "react";
import "./style.css";

// class SearchResults extends Component {
//     state = {
//       result: {},
//       employee: "",
//       search: ""
//     };
// };

function SearchResults(props) {
    console.log(props.DOB.substring(10, 10));
    return (
      <div className="text-center">
        <img alt={props.img} className="img-fluid" src={props.img} style={{ margin: "0 auto" }} />
        <h3>Name {props.name}</h3>
        <h3>Phone {props.phone}</h3>
        <h3>Email {props.email}</h3>
        <h3>DOB {props.DOB.substring(0, 10)}</h3>
      </div>
    );
  }

export default SearchResults;