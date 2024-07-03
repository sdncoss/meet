import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import NumberOfEvents from "../components/NumberOfEvents";

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

  test('value of the textbox changes when user types in field', async () => {
    const user = userEvent.setup();
    const numberTextBox = NumberOfEventsComponent.getByRole('textbox');

    await user.type(numberTextBox, '{backspace}{backspace}10');
    expect(numberTextBox).toHaveValue(10);
  });
});