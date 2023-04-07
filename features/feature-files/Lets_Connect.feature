Feature: Lets Connect Feature

  Scenario Outline: As a guest, fill the lets conenct form and submit by tab key press
    Given I am on the home page
    When I click on allow cookie button if exist
    When I click on lets connect menu
    Then I verify lets connect page displayed
    Then I fill the form
    Then I submit form by pressing tab key
    # Then I verify success message

  Scenario Outline: As a guest, fill the lets conenct form and submit by clicking submit button
    Given I am on the home page
    When I click on allow cookie button if exist
    When I click on lets connect menu
    Then I verify lets connect page displayed
    Then I fill the form
    Then I submit form by clicking on click button
    # Then I verify success message
