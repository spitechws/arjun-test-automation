Feature: Lets Connect Feature

  @case1
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

  @case2
  Scenario Outline: Verify that all the required/mandatory fields are marked with * against the field
    Given I am on the home page
    When I click on allow cookie button if exist
    When I click on lets connect menu
    Then I verify lets connect page displayed
    Then I verify "first_name" field is required
    Then I verify "last_name" field is required
    Then I verify "email" field is required

  @case3
  Scenario Outline: Fill the lets conenct form and submit by enter key press
    Given I am on the home page
    When I click on allow cookie button if exist
    When I click on lets connect menu
    Then I verify lets connect page displayed
    Then I fill the form
    Then I submit form by pressing enter key

  @case4
  Scenario Outline: Fill the lets conenct form and submit by clicking submit button
    Given I am on the home page
    When I click on allow cookie button if exist
    When I click on lets connect menu
    Then I verify lets connect page displayed
    Then I fill the form
    Then I submit form by clicking on click button

  @case5
  Scenario Outline: Verify that system generates a validation message when clicking on submit button without filling all the mandatory fields.
    Given I am on the home page
    When I click on allow cookie button if exist
    When I click on lets connect menu
    Then I verify lets connect page displayed
    Then I fill the form by skipping required field
    Then I submit form by clicking on click button
    Then I verify validation message showing for incomplete form
