import React from 'react';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  handleIncrement = () => {
    // Increment the count by 1
    this.setState({ count: this.state.count + 1 });
  };

  handleDecrement = () => {
    // Decrement the count by 1
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    return (
      <div>
        <h1>Simple Counter</h1>
        <p>Count: {this.state.count}</p>
        <button onClick={this.handleIncrement}>Increment</button>
        <button onClick={this.handleDecrement}>Decrement</button>
      </div>
    );
  }
}

export default Counter;
