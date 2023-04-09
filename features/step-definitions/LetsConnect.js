const { Given, When, Then } = require('@wdio/cucumber-framework');

const HomePage = require('../pageobjects/home.page');

Given(/^I click on allow cookie button if exist$/, async () => {
    await HomePage.allowCookie()
});

Given(/^I am on the home page$/, async () => {
    await HomePage.open()
});

Given(/^I click on lets connect menu$/, async () => {
    await HomePage.clickLetsConnectMenu()
});

Given(/^I verify lets connect page displayed$/, async () => {
    await HomePage.verifyLetsConnectPage()
});

Given(/^I fill the form$/, async () => {
    await HomePage.fillForm()
});

Given(/^I fill the form by skipping required field$/, async () => {
    await HomePage.fillFormBySkippingRequiredField()
});

Given(/^I fill the form with blank space in required field$/, async () => {
    await HomePage.fillFormWithSpace()
});

Given(/^I fill the form by skipping optional field$/, async () => {
    await HomePage.fillFormSkipOptionalField()
});

Given(/^I fill the form with incorrect email id$/, async () => {
    await HomePage.fillFormIncorrectEmailId()
});



Given(/^I submit form by clicking on click button$/, async () => {
    await HomePage.submitFormByClick()
});

Given(/^I submit form by pressing enter key$/, async () => {
    await HomePage.submitFormByEnter()
});

Given(/^I verify success message$/, async () => {
    await HomePage.verifySuccessMessage()
});

Given(/^I verify validation message showing for incomplete form$/, async () => {
    await HomePage.verifyFormIncompleteMessage()
});

Given(/^I verify email validation message$/, async () => {
    await HomePage.verifyEmailValidationMessage()
});

Given(/^I verify \"(.*)\" field is exist$/, async (fieldName) => {
    await HomePage.verifyFieldExist(fieldName)
});

Given(/^I verify \"(.*)\" field is required$/, async (fieldName) => {
    await HomePage.verifyFieldRequried(fieldName)
});



