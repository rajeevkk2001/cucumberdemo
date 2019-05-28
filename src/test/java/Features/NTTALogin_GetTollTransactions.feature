@tagFeature
Feature: Login NTTA Feature hvjjkkjhkjhkhkjkjkjkjkjkhkh

  @tagScenario
  Scenario: Login to NTTA site and Get the recent toll transactions

    Given When the NTTA website is opened
    When Title of the site is verified
    Then  Enter Username and Password Details
      | username | password |
      | test     | teee     |
    And  User Click on Login button
    Then Get the Toll Transactions





