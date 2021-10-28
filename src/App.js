import React, { Component } from 'react';
import './App.css';
import KeyPadComponent from './Components/KeyPadComponent';
import ResultComponent from './Components/ResultComponent';

class App extends Component {
  constructor() {
    super();
    this.state = {
      result: ''
    }
  }

  onClick = (button) => {
    console.log(this.state.result + button);
    if (button === '=') {
      this.calculate(
        )
    }
    else if (button === 'C') {
      this.reset();
    }
    else if (button === 'CE') {
      this.backspace();
    }
    else {
      this.setState({
        result: this.state.result + button
      })
    }
  }

  calculate = () => {
    var checkResult = "";
    if (this.state.result.includes("---")) {
      checkResult = this.state.result.replace("--", "+")
    }

    else {
      checkResult = this.state.result;
    }

    try {
      this.setState({
        result: (eval(checkResult) || '') +''
      })
    } catch (e) {
      this.setState({
        result: "Error"
      })
    }
  }

  reset = () => {
    this.setState({
      result: ''
    });
  }

  backspace = () => {
    this.setState({
      result: this.state.result.slice(0, -1)
    });
  }

  render() {
    return (
      <div>
        <div className="calc-body">
        <h1>Calc</h1>
          <ResultComponent result={this.state.result}/>
          <KeyPadComponent onClick={this.onClick}/>
        </div>
      </div>
    );
  }
}
export default App;