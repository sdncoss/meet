Feature: Specify Number of Events
  Scenario: When user hasn’t specified a number, 32 events are shown by default.
    Given user hasn't specified the number of events
    When the user opens the app
    Then user should see 32 events displayed by default

  Scenario: User can change the number of events displayed.
    Given the main page is open
    When user specifys a number of events to display
    Then user should see the specified number of events displayed