import { render, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import NumberOfEvents from "../components/NumberOfEvents";
import App from '../App';
import { useState } from 'react';

//unit testing
describe('<NumberOfEvents /> component', () => {
  let NumberOfEventsComponent;
  beforeEach(() => {
    NumberOfEventsComponent = render(<NumberOfEvents />);
  });

  test('contains element with textbox role', () => {
    const numberTextBox = NumberOfEventsComponent.getByRole('textbox');
    expect(numberTextBox).toBeInTheDocument();
    expect(numberTextBox).toHaveClass('number-events');
  });

  test('default value of input field is 32', () => {
    const numberTextBox = NumberOfEventsComponent.getByRole('textbox');
    expect(numberTextBox).toBeInTheDocument();
    expect(numberTextBox).toHaveValue(32);
  });
});

//integration testing
describe('<App /> integration', () => {
  test('renders a list of events matching the number of events input by user', async () => {
    const user = userEvent.setup();
    const AppDOM = render(<App />).container.firstChild;

    // Verify default number of events
    const EventListDOM = AppDOM.querySelector('#event-list');
    let allRenderedEventItems = within(EventListDOM).queryAllByRole('listitem');
    expect(allRenderedEventItems.length).toBe(32);

    // Change number of events
    const NumberOfEventsDOM = AppDOM.querySelector('#number-of-events');
    const NumberOfEventsInput = within(NumberOfEventsDOM).queryByRole('textbox');

    await user.clear(NumberOfEventsInput);
    await user.type(NumberOfEventsInput, "{backspace}{backspace}10");
    expect(NumberOfEventsInput.value).toBe('10');

    await waitFor(() => {
      allRenderedEventItems = within(EventListDOM).queryAllByRole('listitem');
      expect(allRenderedEventItems.length).toBe(10);
    });
  });
});