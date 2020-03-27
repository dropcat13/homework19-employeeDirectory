import React, { Component } from "react";
import Container from "./Container";
import Row from "./Row";
import Col from "./Col";
import Card from "./Card";
import EmployeeDetails from "./EmployeeDetails";
import API from "../utils/API";
import SearchForm from "./SearchForm";
import "./style.css"; 

class EmployeesContainer extends Component {
  state = {
    result: {},
    employees: [],
    search: ""
  };

  // When this component mounts,
  componentDidMount() {
    API.getEmployees().then(res => {
      this.setState({ employees: res });
    });
  }

  handleInputChange = event => {
    const filter = event.target.value;
    const filteredEmployees = this.state.employees.filter(employee => {
      let values = Object.values(employee).join("").toLowerCase();
      return values.indexOf(filter.toLowerCase()) !== -1; 
    });
    this.setState({
      "employees": filteredEmployees  
    });   
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.searchEmployees(this.state.search);
  };

  render() {
    return (
      <div>
        <Container>
        <SearchForm
      // value={this.state.search}
      handleInputChange={this.handleInputChange}
      // handleFormSubmit={this.handleFormSubmit}
     />
          <Row>
            <Col size="md-12">
                <Card>
                  <Row>
                    <Col size="md-1"><h5>Image</h5></Col>
                    <Col size="md-2"><h5><span className="pointer p-2"> Name</span></h5></Col>
                    <Col size="md-3"><h5>Phone</h5></Col>
                    <Col size="md-3"><h5>Email</h5></Col>
                    <Col size="md-3"><h5>DOB</h5></Col>
                  </Row>
                  {this.state.employees.map(employee => <EmployeeDetails key={employee.name} {...employee}/>)}
                </Card>
            </Col>
          </Row>
        </Container>
      </div>
    )}
};

export default EmployeesContainer;
