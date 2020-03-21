import React from "react";
import Row from "./Row";
import Col from "./Col";

function EmployeeDetails(props) {
  console.log(props);
  return (
    <div className="text-center">
      <Row>
      <Col size="md-1"><img alt={props.img} className="img-fluid" src={props.img} style={{ margin: "0 auto" }} /></Col>
      <Col size="md-2"><h4>{props.name}</h4></Col>
      <Col size="md-3"><h4>{props.phone}</h4></Col>
      <Col size="md-3"><h4>{props.email}</h4></Col>
      <Col size="md-3"><h4>{props.DOB.substring(0, 10)}</h4></Col>
      </Row>
    </div>
  );
}

export default EmployeeDetails;
