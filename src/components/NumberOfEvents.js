import { useState } from 'react';

const NumberOfEvents = () => {
  const [number, setNumber] = useState(32);

  const handleInputChange = (event) => {
    setNumber(event.target.value);
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