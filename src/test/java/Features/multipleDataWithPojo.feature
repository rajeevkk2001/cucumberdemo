Feature: This feature is for login test with multiple data

  Scenario: Login with correct Username and Password
    Given I navigate to the login page of application
    And I enter username and password with Pojo
      | username | password |
      | rajeev   | rkk      |
      | sabitha  | sabi     |
      | ahhi     | abhi     |
    And User Clicks on Login button
    Then I should see the Landing page

