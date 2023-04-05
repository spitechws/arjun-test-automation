Feature: Lets Connect Feature

  Scenario Outline: As a guest, I have to fill the form of lets conenct menu
    Given I am on the home page
    When I click on allow cookie button if exist
    When I click on lets connect menu
    Then I fill the form
    Then I verify success message
