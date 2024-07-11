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
describe('NumberOfEvents /> integration', () => {
  test('renders a list of events matching the number of events input by user', async () => {
    const user = userEvent.setup();
    const AppDOM = render(<App />).container.firstChild;

    const NumberOfEventsDOM = AppDOM.querySelector('#number-of-events');
    const NumberOfEventsInput = within(NumberOfEventsDOM).queryByRole('textbox');
    await user.type(NumberOfEventsInput, "{backspace}{backspace}10");

    const EventListDOM = AppDOM.querySelector('#event-list');

    const allRenderedEventItems = within(EventListDOM).queryAllByRole('listitem');
    expect(allRenderedEventItems.length).toBe(10);
  });
});
