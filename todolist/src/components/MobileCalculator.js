import React, { useState } from "react";
// Import your CSS styles

function Calculator() {
  const [input, setInput] = useState("");

  const handleButtonClick = (value) => {
    setInput(input + value);
  };

  const handleCalculate = () => {
    try {
      setInput(eval(input).toString());
    } catch (error) {
      setInput("Error");
    }
  };

  const handleClear = () => {
    setInput("");
  };

  const buttonValues = [
    "7",
    "8",
    "9",
    "/",
    "4",
    "5",
    "6",
    "*",
    "1",
    "2",
    "3",
    "-",
    "0",
    ".",
    "=",
    "+",
    "C",
  ];

  return (
    <div className="calculator">
      <div className="display">{input}</div>
      <div className="buttons">
        {buttonValues.map((value) => (
          <button
            key={value}
            onClick={() => {
              if (value === "=") {
                handleCalculate();
              } else if (value === "C") {
                handleClear();
              } else {
                handleButtonClick(value);
              }
            }}
          >
            {value}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Calculator;
