import React, { useEffect, useState } from "react";
import "./Calculator.css";
import Button from "./Button";

const Calculator = () => {
  const [input, setInput] = useState("0"); // Current input value
  const [memory, setMemory] = useState([]); // Array to store history of calculations
  const [acClickCount, setAcClickCount] = useState(0); // State for AC button click count
  const [viewValueAt, setViewValueAt] = useState(0); // It keeps track of which value in memory is being displayed when navigating using M+ and M-
  const [memoryRecording, setMemoryRecording] = useState(false);

  useEffect(() => {
    // to print the memory variable as it changes also views index
    console.log("memory", memory, ", value", viewValueAt);
    if (memory.length) {
      setViewValueAt(memory.length - 1); // Update to view latest value in memory
    }
  }, [memory]);

  function isOperator(inputString) {
    return ["+", "-", "*", "/", "%"].includes(inputString);
  }

  const handleClick = (value) => {
    if (value === "MR") {
      setMemoryRecording(true);
      const lastCalculation = memory[memory.length - 1];
      setInput(lastCalculation || "0");
    } else if (value === "M+") {
      if (viewValueAt < memory?.length - 1) {
        // Checks if viewValueAt isn't at the last value
        // It is the right limit for the viewValueAt variable....MaxRight it can go
        setInput(memory.at(viewValueAt + 1) ?? "0"); // Sets input to next value and if it's the end, it shows 0
        setViewValueAt((prev) => prev + 1); // Moves viewValueAt to the next index
      }
    } else if (value === "M-") {
      const lastCalculation = memory[memory.length - 1]; // Gives last value stored in memory array
      if (lastCalculation) {
        if (viewValueAt > 0) {
          // It is the left limit for the viewValueAt variable....MaxLeft it can go
          setInput(memory.at(viewValueAt - 1) ?? "0"); // Gives value from memory one step before viewValueAt and if there is nothing, it shows 0
          setViewValueAt((prev) => prev - 1); // Decrements value of ViewValueAt
        }
      }
    } else if (value === "=") {
      const result = eval(input).toString();
      const calculation = input;
      if (memoryRecording) {
        setMemory([...memory, calculation, result]); // Saves calculation and result in memory
      }
      setInput(result); // Show the result on the screen
    } else if (value === "AC") {
      if (acClickCount === 0) {
        setInput("0"); // Clear the current screen and show 0
        setAcClickCount(1); // Set click count to 1
      } else if (acClickCount === 1) {
        setInput("0"); // Clear the current screen
        setMemory([]); // Clear memory (all history)
        setAcClickCount(0); // Reset click count to 0
      }
    } else if (value === "Del") {
      setInput(input.slice(0, -1) || "0");
    } else if (input === "0" && !isOperator(value)) {
      // When value is 0 & value is not an operator, set the value as input
      setInput(value);
    } else if (isOperator(value) && isOperator(input.slice(-1))) {
      // If two operators are entered consecutively, replace the first operator with the second
      setInput(input.slice(0, -1) + value);
    } else {
      // Add the value to the input
      setInput(input + value);
    }
  };

  const calculatorButtons = [
    [
      { label: "AC", action: () => handleClick("AC") },
      { label: "M-", action: () => handleClick("M-") },
      { label: "M+", action: () => handleClick("M+") },
      { label: "MR", action: () => handleClick("MR") },
    ],
    [
      { label: "7", action: () => handleClick("7") },
      { label: "8", action: () => handleClick("8") },
      { label: "9", action: () => handleClick("9") },
      { label: "/", action: () => handleClick("/") },
    ],
    [
      { label: "4", action: () => handleClick("4") },
      { label: "5", action: () => handleClick("5") },
      { label: "6", action: () => handleClick("6") },
      { label: "*", action: () => handleClick("*") },
    ],
    [
      { label: "1", action: () => handleClick("1") },
      { label: "2", action: () => handleClick("2") },
      { label: "3", action: () => handleClick("3") },
      { label: "-", action: () => handleClick("-") },
    ],
    [
      { label: "Del", action: () => handleClick("Del") },
      { label: "0", action: () => handleClick("0") },
      { label: ".", action: () => handleClick(".") },
      { label: "+", action: () => handleClick("+") },
    ],
    [
      { label: "(", action: () => handleClick("(") },
      { label: ")", action: () => handleClick(")") },
      { label: "%", action: () => handleClick("%") },
      { label: "=", action: () => handleClick("=") },
    ],
  ];

  return (
    <div className="calculator">
      <h1 className="text-center">Welcome to Calculate me!</h1>
      <div className="container">
        <input className="input" type="text" value={input} readOnly />

        {/* {memoryRecording ? "recording..." : null} */}
        {calculatorButtons.map((row, rowIndex) => (
          <div className="row" key={rowIndex}>
            {row.map((element, elementIndex) => (
              <Button
                key={elementIndex}
                label={element.label}
                onclick={element.action}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calculator;
