@pythoncode
Feature: Functional testing using DD approach for practice question in python editor
Scenario: User gets alert message while sending unindented code in python editor pythoncode Negative
Given User is on array practice page for "pythoncode-negative"
When user Sends an unintended python code in the python editor
Then user should see the alert message popping up in the window

Scenario: User gets output after sending python code in python editor pythoncode positive found
Given User is on array practice page for "pythoncode-positive-found"
When user Sends an unintended python code in the python editor
Then user should see the alert message popping up in the window

Scenario: User gets output after sending python code in python editor pythoncode positive not found
Given User is on array practice page for "pythoncode-positive-not-found"
When user Sends an unintended python code in the python editor
Then user should see the alert message popping up in the window

