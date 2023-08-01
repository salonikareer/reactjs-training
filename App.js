import React from 'react';
import './index.css';

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
      <div className='main'>
        <h1>Simple Counter</h1>
        <p>Count: {this.state.count}</p>
        <div className="btn">
          <button onClick={this.handleIncrement}>
            <img src={require('./images/download.png')} alt="+" />
          </button>
          <button onClick={this.handleDecrement}><img src={require('./images/minus.png')} alt="-"  width="40px" height="40px"  />
          </button>
        </div>
      </div>
    );
  }
}

export default Counter;
