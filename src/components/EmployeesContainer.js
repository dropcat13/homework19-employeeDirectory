import React, { Component } from "react";
import Container from "./Container";
import Row from "./Row";
import Col from "./Col";
import Card from "./Card";
import EmployeeDetails from "./EmployeeDetails";
import API from "../utils/API";

class EmployeesContainer extends Component {
  state = {
    result: {},
    search: ""
  };

  // When this component mounts, 
  componentDidMount() {
    API.getEmployees()
    .then(res => {
      this.setState({ result: res.data })
      console.log(res.data)})
  }

  searchEmployees = query => {
    API.search(query)
      .then(res => this.setState({ result: res.data }))
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
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
        <Row>
          <Col size="md-12">
              {this.state.result.length ? (
                this.result.map( employee => {
                  <Card>
                      <EmployeeDetails
                        img={employee.picture.thumbnail}
                        name={employee.name}
                        phone={employee.phone}
                        email={employee.email}
                        DOB={employee.dob.date}
                      />
                  </Card>
                })
              ) : (
                <h3>Displays 50? results if nothing has been searched for</h3>
              )}
          </Col>
        </Row>
      </Container>
      </div>
    );
  }
}

export default EmployeesContainer;
