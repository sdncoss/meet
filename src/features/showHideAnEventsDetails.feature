Feature: Show and hide event details
  Scenario: When user hasn’t clicked the details button, the event details element is collapsed by default.
    Given the events page is open
    When the events are loaded
    Then user should see all event details collapsed by default

  Scenario: User can expand an event to see details.
    Given the events page is open
    When user clicks on an event
    Then user should see the event details expanded

  Scenario: User can collapse an event to hide details.
    Given an event is expanded
    When user clicks on the expanded event
    Then the event details should collapse