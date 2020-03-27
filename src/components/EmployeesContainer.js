import React, { Component } from "react";
import Container from "./Container";
import Row from "./Row";
import Col from "./Col";
import Card from "./Card";
import EmployeeDetails from "./EmployeeDetails";
import API from "../utils/API";
import SearchForm from "./SearchForm";

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
    const value = event.target.value;
    const filteredEmployees = this.state.employees.filter(employee => employee.name === value);
    console.log("filtered Employees:", filteredEmployees, value);
    // this.setState({
    //   "employees": filteredEmployees  
    // });
  };

  // When the form is submitted, search the OMDB API for the value of `this.state.search`
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
                    <Col size="md-2"><h5>Name</h5></Col>
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
