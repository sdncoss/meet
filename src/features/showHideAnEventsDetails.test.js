import { loadFeature, defineFeature } from 'jest-cucumber';
import { render, within, waitFor } from '@testing-library/react';
import App from '../App';
import Event from '../components/Event';
import userEvent from '@testing-library/user-event';
import { getEvents } from '../api';

const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');

defineFeature(feature, test => {
  test('When user hasn’t clicked the details button, the event details element is collapsed by default.', ({ given, when, then }) => {
    let AppComponent;
    given('the events page is open', () => {
      AppComponent = render(<App />);
    });

    when('the events are loaded', async () => {
      const AppDOM = AppComponent.container.firstChild;
      const EventListDOM = AppDOM.querySelector('#event-list');
      await waitFor(() => {
        const EventListItems = within(EventListDOM).queryAllByRole('listitem');
        expect(EventListItems.length).toBe(32);
      });
    })
    then('user should see all event details collapsed by default', async () => {
      const AppDOM = AppComponent.container.firstChild;
      const eventDetails = AppDOM.querySelector('.details');
      expect(eventDetails).not.toBeInTheDocument();
    });

    test('User can expand an event to see details.', ({ given, when, then }) => {
      let EventComponent;
      let allEvents;
      given('the events page is open', async () => {
        allEvents = await getEvents();
        EventComponent = render(<Event event={allEvents[0]} />);
        expect(EventComponent.container.querySelector('.event-details')).not.toBeInTheDocument();
      });

      when('user clicks on an event', async () => {
        const showDetails = EventComponent.queryByText('Show Details');
        const user = userEvent.setup();
        await user.click(showDetails);
      });

      then('user should see the event details expanded', async () => {
        expect(EventComponent.container.querySelector('.event-details')).toBeInTheDocument();
        expect(EventComponent.queryByText('Hide Details')).toBeInTheDocument();
      });
    });


    test('User can collapse an event to hide details.', async ({ given, when, then }) => {
      let EventComponent;
      let allEvents;
      given('an event is expanded', async () => {
        allEvents = await getEvents();
        EventComponent = render(<Event event={allEvents[0]} />);
        const user = userEvent.setup();
        await user.click(EventComponent.queryByText('Show Details'));
        expect(EventComponent.container.querySelector('.event-details')).toBeInTheDocument();
      });

      when('user clicks on the expanded event', async () => {
        const hideDetails = EventComponent.queryByText('Hide Details');
        const user = userEvent.setup();
        await user.click(hideDetails);
      });

      then('the event details should collapse', async () => {
        expect(EventComponent.container.querySelector('.event-details')).not.toBeInTheDocument();
        expect(EventComponent.queryByText('Hide Details')).not.toBeInTheDocument();
      });
    });
  });
});