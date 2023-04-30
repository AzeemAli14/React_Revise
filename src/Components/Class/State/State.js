import React, { Component } from "react";

export class State extends Component {
  constructor() {
    super();
    this.state = {
      data: "Javascript",
    };
  }
  // hello() {
  //   this.setState({data:"I\'m using ReactJS"});
  // }
  render() {
    return (
      <div>
        <h1>{this.state.data}</h1>
        <button onClick={() => this.setState({data:"I\'m using ReactJS"})}>Find Technology</button>
      </div>
    );
  }
}

export default State;
