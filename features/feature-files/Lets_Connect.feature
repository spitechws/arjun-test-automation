Feature: Lets Connect Feature

  @FieldExist
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

  @RequiredFields
  Scenario Outline: Verify that all the required/mandatory fields are marked with * against the field
    Given I am on the home page
    When I click on allow cookie button if exist
    When I click on lets connect menu
    Then I verify lets connect page displayed
    Then I verify "first_name" field is required
    Then I verify "last_name" field is required
    Then I verify "email" field is required

  @RegisterOnEnter
  Scenario Outline: Fill the lets conenct form and submit by enter key press
    Given I am on the home page
    When I click on allow cookie button if exist
    When I click on lets connect menu
    Then I verify lets connect page displayed
    Then I fill the form
    Then I submit form by pressing enter key

  @Register
  Scenario Outline: Fill the lets conenct form and submit by clicking submit button
    Given I am on the home page
    When I click on allow cookie button if exist
    When I click on lets connect menu
    Then I verify lets connect page displayed
    Then I fill the form
    Then I submit form by clicking on click button

  @Validation
  Scenario Outline: Verify that system generates a validation message when clicking on submit button without filling all the mandatory fields.
    Given I am on the home page
    When I click on allow cookie button if exist
    When I click on lets connect menu
    Then I verify lets connect page displayed
    Then I fill the form by skipping required field
    Then I submit form by clicking on click button
    Then I verify validation message showing for incomplete form

  @CheckBlankSpace
  Scenario Outline: Verify that entering blank spaces on mandatory fields lead to validation error
    Given I am on the home page
    When I click on allow cookie button if exist
    When I click on lets connect menu
    Then I verify lets connect page displayed
    Then I fill the form with blank space in required field
    Then I submit form by clicking on click button
    Then I verify validation message showing for incomplete form

  @OprionalFields
  Scenario Outline: Verify that clicking on submit button by leaving optional fields, submits the data to the server without any validation error
    Given I am on the home page
    When I click on allow cookie button if exist
    When I click on lets connect menu
    Then I verify lets connect page displayed
    Then I fill the form by skipping optional field
    Then I submit form by clicking on click button

  @EmailFormat
  Scenario Outline: Verify that the validation of email field by entering incorrect email id
    Given I am on the home page
    When I click on allow cookie button if exist
    When I click on lets connect menu
    Then I verify lets connect page displayed
    Then I fill the form with incorrect email id
    Then I verify email validation message