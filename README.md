# meet
User Stories:

Show/Hide Event Details

An event element is collapsed by default.

User Story:
As a user, I should see event details collapsed by default, so that I can have a clean and uncluttered view of the events list.

User can expand an event to see details.

User Story:
As a user, I should be able to expand an event to see its details, so that I can view more information about a specific event when needed.

User can collapse an event to hide details.

User Story:
As a user, I should be able to collapse an event to hide its details, so that I can reduce clutter and easily navigate through other events.

Specify Number of Events

When user hasn’t specified a number, 32 events are shown by default.

User Story:
As a user, I should see 32 events displayed by default if I haven’t specified a number, so that I have a sufficient number of events to browse initially.

User can change the number of events displayed.

User Story:
As a user, I should be able to change the number of events displayed, so that I can control the amount of information I see based on my preference.

Use the App When Offline

Show cached data when there’s no internet connection.

User Story:
As a user, I should be able to see cached data when there is no internet connection, so that I can still access previously viewed events and information offline.

Show error when user changes search settings (city, number of events).

User Story:
As a user, I should see an error message if I change search settings without an internet connection, so that I understand why the app cannot fulfill my request.

Add an App Shortcut to the Home Screen

User can install the meet app as a shortcut on their device home screen.

User Story:
As a user, I should be able to install the meet app as a shortcut on my device home screen, so that I can quickly access the app with a single tap.

Display Charts Visualizing Event Details

Show a chart with the number of upcoming events in each city.

User Story:
As a user, I should be able to see a chart displaying the number of upcoming events in each city, so that I can easily understand the distribution of events across different locations.


Gherkin Feature Scenarios:

Feature: Show/Hide Event Details

  Scenario: An event element is collapsed by default
    Given I am on the events page
    When the events are loaded
    Then I should see all event details collapsed by default

Feature: Show/Hide Event Details

  Scenario: User can expand an event to see details<br />
    Given I am on the events page<br />
    When I click on an event<br />
    Then I should see the event details expanded<br />

Feature: Show/Hide Event Details<br />
  Scenario: User can collapse an event to hide details<br />
    Given an event is expanded<br />
    When I click on the expanded event
    Then the event details should collapse
Feature: Specify Number of Events
  Scenario: When user hasn’t specified a number, 32 events are shown by default
    Given I am on the events page
    And I haven’t specified the number of events to display
    When the events are loaded
    Then I should see 32 events displayed by default
Feature: Specify Number of Events
  Scenario: User can change the number of events displayed
    Given I am on the events page
    When I specify a number of events to display
    Then I should see the specified number of events displayed
Feature: Use the App When Offline
  Scenario: Show cached data when there’s no internet connection
    Given I am offline
    When I open the app
    Then I should see cached data from my previous session
Feature: Use the App When Offline
  Scenario: Show error when user changes search settings
    Given I am offline
    When I try to change the search settings
    Then I should see an error message indicating that the action cannot be completed
Feature: Add an App Shortcut to the Home Screen
  Scenario: User can install the meet app as a shortcut on their device home screen
    Given I am using the app
    When I choose to add a shortcut to my home screen
    Then the meet app should be installed as a shortcut on my device home screen
Feature: Display Charts Visualizing Event Details
  Scenario: Show a chart with the number of upcoming events in each city
    Given I am on the events page
    When the chart is loaded
    Then I should see a chart displaying the number of upcoming events in each city