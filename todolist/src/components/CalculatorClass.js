import React, { Component } from "react";
import "./Mobile.css";

export class CalculatorClass extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: "",
    };
  }

  setInput = (btn) => {
    this.setState({
      input: this.state.input + btn,
    });
  };

  handleCalculate = () => {
    try {
      this.setState({
        input: eval(this.state.input).toString(),
      });
    } catch (error) {
      this.setState({
        input: "Error",
      });
    }
  };

  clearInput = () => {
    this.setState({
      input: "",
    });
  };

  render() {
    const buttons = [
      "7",
      "8",
      "9",
      "4",
      "5",
      "6",
      
      "1",
      "2",
      "3",
      "0",
      "*",
      "+",
      "-",
      "C",
     
      ".",
      "=",
      '/'
    ];
    return (
      <React.Fragment>
        <div className="calculator__body">

          <div id="show__case">{ this.state.input ? this.state.input : 0}</div>

          <div id="">
            
            {buttons.map((btn, index) => (
              <button
                key={index}
                onClick={() => {
                  if (btn === "=") {
                    this.handleCalculate();
                  } else if (btn === "C") {
                    this.clearInput();
                  } else {
                    this.setInput(btn);
                  }
                }}
              >
                {btn}
              </button>
              
            ))}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default CalculatorClass;
