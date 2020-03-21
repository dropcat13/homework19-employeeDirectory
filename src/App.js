import React from "react";
import EmployeesContainer from "./components/EmployeesContainer";
import Hero from "./components/Hero";
import SearchForm from "./components/SearchForm";

function App() {
  return <div>
     <Hero />
     <SearchForm
      // value={this.state.search}
      // handleInputChange={this.handleInputChange}
      // handleFormSubmit={this.handleFormSubmit}
     />
     <EmployeesContainer />
  </div>
 
}

export default App;
