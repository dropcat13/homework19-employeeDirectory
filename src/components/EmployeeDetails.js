import React from "react";
import Row from "./Row";
import Col from "./Col";

function EmployeeDetails(props) {
  return (
    <div className="text-center">
      <Row>
      <Col size="md-1"><img alt={props.img} className="img-fluid" src={props.img} style={{ margin: "0 auto" }} /></Col>
      <Col size="md-2"><h5>{props.name}</h5></Col>
      <Col size="md-3"><h5>{props.phone}</h5></Col>
      <Col size="md-3"><h5>{props.email}</h5></Col>
      <Col size="md-3"><h5>{props.DOB.substring(0, 10)}</h5></Col>
      </Row>
    </div>
  );
}

export default EmployeeDetails;
