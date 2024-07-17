import { loadFeature, defineFeature } from 'jest-cucumber';
import { render, within, waitFor } from '@testing-library/react';
import App from '../App';
import { getEvents } from '../api';
import userEvent from '@testing-library/user-event';

const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, test => {
  test('When user hasn’t specified a number, 32 events are shown by default.', ({ given, when, then }) => {

    given('user hasn\'t specified the number of events', () => {

    });
    let AppComponent;
    when('the user opens the app', () => {
      AppComponent = render(<App />);

    });

    then(/^user should see (\d+) events displayed by default$/, async () => {
      const AppDOM = AppComponent.container.firstChild;
      const EventListDOM = AppDOM.querySelector('#event-list');

      await waitFor(() => {
        const EventListItems = within(EventListDOM).queryAllByRole('listitem');
        expect(EventListItems.length).toBe(32);
      });
    });

    test('User can change the number of events displayed.', ({ given, when, then }) => {
      let AppComponent;
      given('the main page is open', () => {
        AppComponent = render(<App />);
      });


      when('user specifys a number of events to display', async () => {
        const user = userEvent.setup();
        const AppDOM = AppComponent.container.firstChild;
        const NumberOfEventsDOM = AppDOM.querySelector('#number-of-events');
        const numberOfEventsInput = within(NumberOfEventsDOM).queryByRole('textbox');
        await user.type(numberOfEventsInput, '{backspace}{backspace}10');
      });

      then('user should see the specified number of events displayed', () => {
        const AppDOM = AppComponent.container.firstChild;
        const EventListDOM = AppDOM.querySelector('#event-list');
        const allRenderedEventItems = within(EventListDOM).queryAllByRole('listitem');
        expect(allRenderedEventItems.length).toEqual(10);
      });
    });
  });
});
