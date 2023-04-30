import React, { Component } from 'react'

export class Student extends Component {
    constructor(props) {
        super(props);
        // this.props;
    }
  render() {
    return (
      <div>
        <h1>
            Numbers of students: {this.props.student}
        </h1>
      </div>
    )
  }
}

export default Student