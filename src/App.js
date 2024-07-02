import React, { useState } from "react";
import "./App.css";

function App() {
  const [upperStream, setUpperStream] = useState("");
  const [downStream, setDownStream] = useState("");
  const [gateOpening, setGateOpening] = useState("");
  const [head, setHead] = useState(null);
  const [discharge, setDischarge] = useState(null);

  const craftLevel = 0.8;

  const calculateDischarge = () => {
    const upperStreamValue = parseFloat(upperStream);
    const downStreamValue = parseFloat(downStream);
    const gateOpeningValue = parseFloat(gateOpening);

    if (
      isNaN(upperStreamValue) ||
      isNaN(downStreamValue) ||
      isNaN(gateOpeningValue)
    ) {
      alert("Please enter valid numerical values.");
      return;
    }

    const head = upperStreamValue - downStreamValue - craftLevel;

    if (head <= 0) {
      alert("Head value must be positive. Please check your inputs.");
      setDischarge(null);
      setHead(null);
      return;
    }

    const discharge = Math.sqrt(head) * 115.2 * gateOpeningValue;
    setHead(head.toFixed(2));
    setDischarge(discharge.toFixed(2));
  };

  return (
    <div className="App">
      <h1>Water Discharge Calculator</h1>
      <div className="form-container">
        <div>
          <label>
            Upper Stream Level:
            <input
              type="number"
              value={upperStream}
              onChange={(e) => setUpperStream(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            Down Stream Level:
            <input
              type="number"
              value={downStream}
              onChange={(e) => setDownStream(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            Gate Opening:
            <input
              type="number"
              value={gateOpening}
              onChange={(e) => setGateOpening(e.target.value)}
            />
          </label>
        </div>
        <button onClick={calculateDischarge}>Calculate Discharge</button>
        {head !== null && (
          <div>
            <h2>Head: {head} units</h2>
          </div>
        )}
        {discharge !== null && (
          <div>
            <h2>Discharge: {discharge} units</h2>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
