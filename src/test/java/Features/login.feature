Feature: This feature file is to test the login fucntionality

  Scenario: Login with correct Username and Password
    Given I navigate to the login page of application
    And I enter user name as "admin" and password as "admin"
    And User Clicks on Login button
    Then I should see the Landing page

