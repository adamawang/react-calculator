import React, { Component } from 'react';
import Calculator from './calculator';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
    }
  }
  componentDidMount() {
    setInterval(() => this.tick(), 1000);
  }
  tick() {
    this.setState({
      date: new Date(),
    })
  }
  render() {
    return (
      <div className="App">
        <h2>Your local time:</h2>
        <h5>{this.state.date.toLocaleTimeString()}</h5>
        <Calculator />
      </div>
    );
  }
}

export default App;
