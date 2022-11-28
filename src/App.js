import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [TempValue, setTempValue] = useState(14);
  const [TempColor, setTempColor] = useState("cold");

  const increaseTemp = () => {
    const newTemp = TempValue + 1;
    setTempValue(newTemp);

    if (newTemp > 17) {
      setTempColor("hot");
    }
  };

  const decreaseTemp = () => {
    const newTemp = TempValue - 1;
    setTempValue(newTemp);
    if (newTemp <= 17) {
      setTempColor("cold");
    }
  };

  return (
    <>
      <h3>TEMPERATURE CONTROLLER</h3>
      <div className="app-container">
        <div className="Temp-display-container">
          <div className={`Temp-display ${TempColor}`}>{TempValue}°C</div>
        </div>
        <div className="button-container">
          <button onClick={decreaseTemp}>-</button>
          <button onClick={increaseTemp}>+</button>
        </div>
      </div>
    </>
  );
};

export default App;
