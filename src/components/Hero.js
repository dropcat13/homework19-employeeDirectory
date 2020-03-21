import React from "react";
import "./style.css";

function Hero(props) {
  return (
    <div className="hero text-center">
      {props.children}
      <h2>Employee Directory</h2>
      <h4>Click on carrots to filter by heading or use search box to narrow your results</h4>
    </div>
  );
}

export default Hero;
