import React, { Component } from 'react';

export default class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputs: [],
      displayStr: '',
    }
  }
  numberClick(val) {
    this.setState({
      displayStr: this.state.displayStr += val,
    })
  }
  opsClick(op) {
    this.setState({
      inputs: this.state.inputs.push(+this.state.displayStr, op),
    })
    this.setState({
      inputs: this.state.inputs,
      displayStr: '',
    })
  }
  clear() {
    this.setState({
      inputs: [],
      displayStr: '',
    })
  }
  sum() {
    this.setState({
      inputs: this.state.inputs.push(+this.state.displayStr),
    })
    const inputArr = this.state.inputs;
    let totalSum;
    let numbers = inputArr.filter((val) => typeof val === 'number');
    let operator = inputArr.filter((op) => typeof op !== 'number');
    if(operator[0] === '+'){
      totalSum = numbers.reduce((a, b) => {
        return a + b;
      })
    }
    if(operator[0] === '-'){
      totalSum = numbers.reduce((a, b) => {
        return a - b;
      })
    }
    if(operator[0] === '*'){
      totalSum = numbers.reduce((a, b) => {
        return a * b;
      })
    }
    if(operator[0] === '/'){
      totalSum = numbers.reduce((a, b) => {
        return a / b;
      })
    }
    this.setState({
      inputs: [],
      displayStr: totalSum,
    })
  }
  render() {
    return (
      <div>
        <div>
          {this.state.displayStr}
        </div>
        <div>
          <button className='number' onClick={() => this.numberClick(7)}>7</button>
          <button className='number' onClick={() => this.numberClick(8)}>8</button>
          <button className='number' onClick={() => this.numberClick(9)}>9</button>
          <button className='operator' onClick={() => this.opsClick('/')}>/</button>
        </div>
        <div>
          <button className='number' onClick={() => this.numberClick(4)}>4</button>
          <button className='number' onClick={() => this.numberClick(5)}>5</button>
          <button className='number' onClick={() => this.numberClick(6)}>6</button>
          <button className='operator' onClick={() => this.opsClick('*')}>*</button>
        </div>
        <div>
          <button className='number' onClick={() => this.numberClick(1)}>1</button>
          <button className='number' onClick={() => this.numberClick(2)}>2</button>
          <button className='number' onClick={() => this.numberClick(3)}>3</button>
          <button className='operator' onClick={() => this.opsClick('-')}>-</button>
        </div>
        <div>
          <button className='number' onClick={() => this.numberClick(0)}>0</button>
          <button className='number' onClick={() => this.numberClick('.')}>.</button>
          <button className='operator' onClick={() => this.sum()}>=</button>
          <button className='operator' onClick={() => this.opsClick('+')}>+</button>
        </div>
        <button onClick={() => this.clear()}>Clear</button>
      </div>
    )
  }
}
