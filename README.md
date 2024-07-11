<h1 style=bold>Meet App</h1>
<p>This is an app built using React on the frontend, and AWS Lambda on the backend. It displays a list of events, which is fetching the events from Google Calendar API, that can be filtered by city or number of events.</p>

<h2 style=bold>User Stories:</h2><br />

Show/Hide Event Details<br />
An event element is collapsed by default.<br />
User Story:<br />
As a user, I should see event details collapsed by default, so that I can have a clean and uncluttered view of the events list.

User can expand an event to see details.<br />
User Story:<br />
As a user, I should be able to expand an event to see its details, so that I can view more information about a specific event when needed.

User can collapse an event to hide details.<br />
User Story:<br />
As a user, I should be able to collapse an event to hide its details, so that I can reduce clutter and easily navigate through other events.

Specify Number of Events<br />
When user hasn’t specified a number, 32 events are shown by default.<br />
User Story:<br />
As a user, I should see 32 events displayed by default if I haven’t specified a number, so that I have a sufficient number of events to browse initially.

User can change the number of events displayed.<br />
User Story:<br />
As a user, I should be able to change the number of events displayed, so that I can control the amount of information I see based on my preference.

Use the App When Offline<br />
Show cached data when there’s no internet connection.<br />
User Story:<br />
As a user, I should be able to see cached data when there is no internet connection, so that I can still access previously viewed events and information offline.

Show error when user changes search settings (city, number of events).<br />
User Story:<br />
As a user, I should see an error message if I change search settings without an internet connection, so that I understand why the app cannot fulfill my request.

Add an App Shortcut to the Home Screen<br />
User can install the meet app as a shortcut on their device home screen.<br />
User Story:<br />
As a user, I should be able to install the meet app as a shortcut on my device home screen, so that I can quickly access the app with a single tap.

Display Charts Visualizing Event Details<br />
Show a chart with the number of upcoming events in each city.<br />
User Story:<br />
As a user, I should be able to see a chart displaying the number of upcoming events in each city, so that I can easily understand the distribution of events across different locations.


Gherkin Feature Scenarios:<br />

Feature: Show/Hide Event Details<br />
  Scenario: An event element is collapsed by default<br />
    Given I am on the events page<br />
    When the events are loaded<br />
    Then I should see all event details collapsed by default<br />


  Scenario: User can expand an event to see details<br />
    Given I am on the events page<br />
    When I click on an event<br />
    Then I should see the event details expanded<br />


  Scenario: User can collapse an event to hide details<br />
    Given an event is expanded<br />
    When I click on the expanded event<br />
    Then the event details should collapse<br />

Feature: Specify Number of Events<br />
  Scenario: When user hasn’t specified a number, 32 events are shown by default<br />
    Given I am on the events page<br />
    And I haven’t specified the number of events to display
    When the events are loaded<br />
    Then I should see 32 events displayed by default<br />


  Scenario: User can change the number of events displayed<br />
    Given I am on the events page<br />
    When I specify a number of events to display<br />
    Then I should see the specified number of events displayed<br />

Feature: Use the App When Offline<br />
  Scenario: Show cached data when there’s no internet connection<br />
    Given I am offline<br />
    When I open the app<br />
    Then I should see cached data from my previous session<br />


  Scenario: Show error when user changes search settings<br />
    Given I am offline<br />
    When I try to change the search settings<br />
    Then I should see an error message indicating that the action cannot be completed<br />

Feature: Add an App Shortcut to the Home Screen<br />
  Scenario: User can install the meet app as a shortcut on their device home screen<br />
    Given I am using the app<br />
    When I choose to add a shortcut to my home screen<br />
    Then the meet app should be installed as a shortcut on my device home screen<br />

Feature: Display Charts Visualizing Event Details<br />
  Scenario: Show a chart with the number of upcoming events in each city<br />
    Given I am on the events page<br />
    When the chart is loaded<br />
    Then I should see a chart displaying the number of upcoming events in each city

<h2 style=bold>Use of Serverless Function</h2><br />
<p>serverless functions will be used to handle backend logic and data processing tasks efficiently without the need to manage server infrastructure. For example, we can use serverless functions to Fetch Event Data, Cache Data, Analytics, User Management. By using serverless functions, we can scale these operations automatically based on demand, reduce operational costs, and focus on developing core features.</p>