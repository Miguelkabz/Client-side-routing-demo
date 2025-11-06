import React, { useState } from 'react';

function Clicktracker() {
    const [model, setModel] = useState('Toyota');
    const [year, setYear] = useState(2022);

    function handleclick() {
        setModel('Honda');
        setYear(2024);
    }

  return (
    <div>
      <h3>ClickTracker</h3>

      <h2>This car is of the model {model} it was made in year {year}</h2>

      <button onClick={handleclick}>Change Model</button>

      <h3>Car Model: {model}</h3>
      <h3>Manufacturing Year: {year}</h3>
    </div>
  );
}

export default Clicktracker;
