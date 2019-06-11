import React, { Component } from "react";
import spinner from "./spinner.gif";
export default class Spinner extends Component {
  render() {
    return (
      <div>
        <h2 className="text-center">Loading...</h2>
        <img
          src={spinner}
          alt="Loading..."
          style={{ width: "200px", margin: "40px" }}
        />
      </div>
    );
  }
}
