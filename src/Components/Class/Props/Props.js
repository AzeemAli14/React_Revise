import React, { Component } from 'react'
import Student from './Student';

export class Props extends Component {
    constructor(props) {
        super(props);
        this.state = {
            num: 0,
        }
    }
    
  render() {
    return (
        <div>
        <h1> Click the Button to find number of Students</h1>
        <button onClick={() => {this.setState({num: 30})}}>Click here</button>
        <Student student={this.state.num} />
    </div>
    )
  }
}

export default Props