import { useState } from 'react';

const Event = ({ event }) => {
  const [showDetails, setShowDetails] = useState(false);

  const handleToggleDetails = () => setShowDetails(!showDetails);

  return (
    <li className="listitem">
      <h1>{event.summary}</h1>
      <h3>{event.location}</h3>
      <p>{event.created}</p>
      {!showDetails ? (
        <button className="show-details" onClick={handleToggleDetails}>Show Details</button>
      ) : (
        <>
          <p className="event-details">{event.description}</p>
          <button className="hide-details" onClick={handleToggleDetails}>Hide Details</button>
        </>
      )}
    </li>
  );
};

export default Event;