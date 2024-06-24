Feature: DataDriven negative Test Cases for Login Function
   Scenario Outline: Negative scenario DataDriven Login Functionality "<scenarioNumber>"
         Given User navigates to the login page application
          When User enters the username for "<scenarioNumber>"
          When User enters the password for "<scenarioNumber>"
          When User clicks on login button
          Then User should get error message
    Examples: 
    | scenarioNumber |
    | 0 |
#     | 1 |
#     | 2 |
#     | 3 |
 