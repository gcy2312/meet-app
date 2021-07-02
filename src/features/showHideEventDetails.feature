Feature: Show/Hide event details

Scenario: An event element is collapsed by default
Given the main page is open.
When the user first sees the event list
Then user will see the details of the event collapsed by default

Scenario: User can expand an event to see its details
Given the elements are collapsed
When the user click on show details button
Then the event details will be shown

Scenario: User can collapse an event to hide its details
Given the event info is shown
When the user clicks hide details button
Then the event info will be collapsed