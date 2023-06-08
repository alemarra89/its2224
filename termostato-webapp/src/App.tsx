import React, { useState } from "react";
import "./App.css";

function App() {

  const [temperatura, setTemperatura] = useState(20);

  function getColor() {
    if (temperatura < 15) {
      return "#0000FF"
    } else if (temperatura < 25) {
      return "orange"
    } else {
      return "#FF0000"
    }
  }

  return (
    <div className="App">
      <div
        className="termostato"
        style={{
          backgroundColor: getColor()
        }}
      >
      {/* <div
        className="termostato"
        style={{
          backgroundColor:
            temperatura < 15
              ? "lightblue"
              : temperatura < 25
              ? "orange"
              : "red",
        }}
      > */}
        <p>{temperatura} °C</p>

        <div>
          <button onClick={() => setTemperatura(temperatura - 1)}>-</button>
          <button onClick={() => setTemperatura(temperatura + 1)}>+</button>
        </div>
      </div>
      {temperatura < 4 && <h3>FREDDOOOOOOO AIUTO</h3>}
    </div>
  );
}

export default App;
