import React, { Component } from 'react'

export class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {counter: 0};
  }
 increments = () => {
  this.setState({counter: this.state.counter + 1})
  }

decrements = () => {
    this.setState({counter: this.state.counter - 1})
}
  render() {
    return (
      <div>
          <h1 className='title'>Simple Counter</h1>
          <div className='counter'>{this.state.counter}</div>
          <button className='btn btn-inc' onClick={this.increments}>Increments</button>
          <button className='btn btn-desc' onClick={this.decrements}>Decrements</button>


      </div>
    )
  }
}

export default Counter