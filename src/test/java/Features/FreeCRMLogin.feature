@LoginFeature
Feature: Free CRM login feature
  @LoginScenario1
  Scenario: Validate the login of CRM application
    Given user is already there in login page
    When title of the page is free CRM
    Then User enter user name
    And User enter password
    Then The landing page should be displayed

