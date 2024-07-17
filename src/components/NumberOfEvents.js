import { useState, useEffect } from 'react';

const NumberOfEvents = ({ setCurrentNOE, setErrorAlert }) => {
  const [number, setNumber] = useState(32);

  const handleInputChange = (event) => {
    const value = event.target.value;
    setNumber(value);
    setCurrentNOE(value);

    let errorText;
    if (value <= 0 || isNaN(value) || value > 100) {
      errorText = "Invalid number. Please use a number between 1 & 100.";
    } else {
      errorText = ""
    }
    setErrorAlert(errorText);
  };

  return (
    <div id="number-of-events">
      <input
        type="number"
        className="number-events"
        value={number}
        onChange={handleInputChange}
        role="textbox"
      />
    </div>
  );
};

export default NumberOfEvents;