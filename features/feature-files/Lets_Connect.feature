Feature: Lets Connect Feature

  @case1
  Scenario Outline: Fill the lets conenct form and submit by enter key press
    Given I am on the home page
    When I click on allow cookie button if exist
    When I click on lets connect menu
    Then I verify lets connect page displayed
    Then I fill the form
    Then I submit form by pressing tab key

  @case2
  Scenario Outline: Fill the lets conenct form and submit by clicking submit button
    Given I am on the home page
    When I click on allow cookie button if exist
    When I click on lets connect menu
    Then I verify lets connect page displayed
    Then I fill the form
    Then I submit form by clicking on click button

  @case3
  Scenario Outline: Verify that the form contains First Name, Last Name, Business Email Id, Phone number, Country/Region, Company,How can we help, Submit
    Given I am on the home page
    When I click on allow cookie button if exist
    When I click on lets connect menu
    Then I verify lets connect page displayed
    Then I verify "first_name" field is exist
    Then I verify "last_name" field is exist
    Then I verify "mobile" field is exist
    Then I verify "email" field is exist
    Then I verify "country" field is exist
    Then I verify "organization" field is exist
    Then I verify "message" field is exist
    Then I verify "submit_button" field is exist
