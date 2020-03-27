import React from "react";
import "./style.css";
import Row from "./Row";
import Col from "./Col";

function SearchForm(props) {
  return (
    <Row>
      <Col size="md-3"></Col>
      <Col size="md-6">
        <form>
          <div className="form-group">
            <label htmlFor="search">Search:</label>
            <input
              onChange={props.handleInputChange}
              value={props.value}
              name="search"
              type="text"
              className="form-control"
              placeholder="Search For an Employee"
              id="search"
            />
            <br />
            <button className="btn btn-primary">
            {/* <button onClick={props.handleFormSubmit} className="btn btn-primary"> */}
              Search
            </button>
          </div>
        </form>
      </Col>
      <Col size="md-3"></Col>
    </Row>
  );
}

export default SearchForm;
