
import mockData from './mock-data';

/**@param {*} events:
*this funtion take event array to use map to create a new array with only locations.
*This will also remove dupolicated created by a new array using spread operator and spreating a Set.
*Set will remove all duplicates form array.
*/
export const extractLocations = (events) => {
  const extractedLocations = events.map((event) => event.location);
  const locations = [...new Set(extractedLocations)];
  return locations;
};

//this function will fetch list of all events
export const getEvents = async () => {
  return mockData;
};