import React, { Component } from "react";

export default class RenderingElements extends Component {
  username = "CyberSoft";
  age = 18;

  renderInfo() {
    return (
      <p>
        Username: {this.username} - Age: {this.age}
      </p>
    );
  }

  render() {
    return (
      <div>
        <h3>(*)RenderingElements</h3>
        {this.renderInfo()}
      </div>
    );
  }
}
