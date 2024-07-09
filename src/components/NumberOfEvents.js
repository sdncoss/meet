import { useState, useEffect } from 'react';

const NumberOfEvents = ({ currentNOE, setCurrentNOE }) => {
  const [number, setNumber] = useState(32);

  useEffect(() => {
    setNumber(currentNOE);
  }, [`${currentNOE}`]);

  const handleInputChange = (event) => {
    const value = parseInt(event.target.value, 10);
    setNumber(value);
    setCurrentNOE(value);
  };

  return (
    <div id="number-of-events">
      <input
        type="number"
        className="number-events"
        value={number}
        placeholder="10"
        onChange={handleInputChange}
        role="textbox"
      />
    </div>
  );
};

export default NumberOfEvents;