@POMLogin
Feature: Free CRM Application Test
  @POMLoginScenario
  Scenario: Validate the Login and Verify Landing Page
    Given User Opens the Browser
    When Login page is displayed, verify the title
    And  When enter username, password and click on submit
    Then Verify the Landing page

